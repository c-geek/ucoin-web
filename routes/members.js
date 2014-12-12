var async    = require('async');
var fs       = require('fs');
var _        = require('underscore');
var hdc      = require('hdc');
var sha1     = require('sha1');
var util     = require('util');
var contract = require('../tools/contract');

module.exports = function (node, auth) {
  
  this.members = function(req, res){
    var members = [];
    async.waterfall([
      function (next) {
        node.wot.members(next);
      },
      function (res, next) {
        async.forEachSeries(res.results, function (member, callback) {
          async.waterfall([
            function (next) {
              node.wot.certifiedBy(member.pubkey, next);
            },
            function (res, next) {
              var certifieds = [];
              res.certifications.forEach(function (cert) {
                certifieds.push(cert.uid);
              });
              members.push({
                "name": member.uid,
                "imports": certifieds
              });
              next();
            }
          ], callback);
        }, next);
      },
    ], function (err) {
      if(err){
        res.send(500, err);
        return;
      }

      res.setHeader('Content-type', 'application/json');
      res.send(200, {
        "wot": members
      });
    });
  };
  
  // this.members = function(req, res){
  //   new MemberResponse(node, auth).process(res);
  // };
  
  this.voters = function(req, res){
    new VoterResponse(node, auth).process(res);
  };

  return this;
}

function MemberResponse (node, auth){

  this.node = node;
  this.auth = auth;

  this.getNew = function (am) {
    return am.getNewMembers();
  }

  this.getLeaving = function (am) {
    return am.getLeavingMembers();
  }

  this.updateStatus = function (status, am) {
    var hdcAM = new hdc.Amendment();
    hdcAM.membersChanges = am.membersChanges;
    hdcAM.votersChanges = am.votersChanges;
    var joining = this.getNew(hdcAM);
    var leaving = this.getLeaving(hdcAM);
    joining.forEach(function(m){
      status[m] = status[m] || { key: { name: '', fingerprint: m, comment: '' }, status: '' };
      status[m].status = 'JOIN';
    });
    leaving.forEach(function(m){
      status[m] = status[m] || { key: { name: '', fingerprint: m, comment: '' }, status: '' };
      status[m].status = 'LEAVE';
    });
  }

  this.changesToLookAt = function (am) {
    return am.membersChanges;
  };

  this.process = function (res) {
    var status = {};
    var am;
    var that = this;

    async.waterfall([
      function (next){
        that.node.hdc.amendments.current(function (err, am) {
          if(am){
            that.updateStatus(status, am);
            contract.getStack(am, that.node, next);
          }
          else next(null, []);
        });
      },
      function (ams, next){
        var members = {};
        var stillMembers = [];
        ams.forEach(function(am){
          that.changesToLookAt(am).forEach(function(change){
            var type = change.substr(0, 1);
            var fpr = change.substr(1);
            if (members[fpr] == undefined) {
              members[fpr] = type == '+';
              if (type == '+') {
                stillMembers.push(fpr);
              }
            }
          });
        });
        next(null, stillMembers);
      },
      function (members, next){
        members.forEach(function (fpr, index) {
          status[fpr] = status[fpr] || { key: { name: '', fingerprint: fpr, comment: '' }, status: '' };
        });
        async.forEach(_(status).keys(), function(fingerprint, callback){
          that.node.pks.lookup('0x' + fingerprint, function (err, json) {
            if(json.keys.length > 0){
              status[fingerprint].key = json.keys[0];
              status[fingerprint].key.keyID = fingerprint.substring(24);
            }
            callback(err);
          });
        }, next);
      },
      function (next) {
        var keys = [];
        _(status).keys().forEach(function(fpr){
          var key = status[fpr].key;
          key.status = status[fpr].status;
          keys.push(key);
        });
        next(null, keys);
      }
    ], function (err, keys) {
      res.setHeader('Content-type', 'application/json');
      res.send(200, {
        keys: keys,
        auth: auth
      });
    });
  }

}

function VoterResponse (node, auth){  
  MemberResponse.call(this, node, auth);

  this.getNew = function (am) {
    return am.getNewVoters();
  };

  this.getLeaving = function (am) {
    return am.getLeavingVoters();
  };

  this.changesToLookAt = function (am) {
    return am.votersChanges;
  };
}
