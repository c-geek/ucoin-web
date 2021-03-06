var hcDifficulty = null;

function genererGrapheMMassUDM(firstUDTime, dt, values, members, currencyAcronym) {
    $(function () {
        $('#graphMMassUDM').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Monetary Mass per member: (M/UD)/N'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        '(you can zoom with click & drag)' :
                        'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: dt*2*1000 // Max zoom = 2 DU
            },
            yAxis: {
                title: {
                    text: 'count'
                },
                floor: 0
            },
            colors: ['#7cb5ec', '#5cb85c'],
            legend: {
                enabled: true
            },
            tooltip: {
                shared: true,
                crosshairs: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: '(M/UD)/N',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: values
            },{
                type: 'line',
                name: 'N',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: members
            }]
        });
    });
};

function genererGrapheCactual(firstUDTime, dt, UDs, cActuals, members, currencyAcronym) {
    $(function () {
        $('#graphC').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: '« c » actual value'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        '(you can zoom with click & drag)' :
                        'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: dt*2*1000 // Max zoom = 2 DU
            },
            yAxis: {
                title: {
                    text: 'percent'
                },
                ceiling: 100,
                floor: 0
            },
            legend: {
                enabled: true
            },
            colors: ['#7cb5ec', '#5cb85c'],
            tooltip: {
                shared: true,
                crosshairs: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'line',
                name: 'c (actual)',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: cActuals
            },{
                type: 'line',
                name: 'N (members count)',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: members
            }]
        });
    });
};

function genererGrapheQuantitative(firstUDTime, dt, UDs, masses, currencyAcronym) {
    $(function () {
        $('#graphQ').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Monetary mass (quantitative): M'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        '(you can zoom with click & drag)' :
                        'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: dt*2*1000 // Max zoom = 2 DU
            },
            yAxis: {
                title: {
                    text: 'Currency units (' + currencyAcronym + ')'
                },
                floor: 0
            },
            legend: {
                enabled: true
            },
            tooltip: {
                shared: true,
                crosshairs: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'M',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: masses
            },{
                type: 'line',
                name: 'UD',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: UDs
            }]
        });
    });
};

function genererGrapheRelative(firstUDTime, dt, UDs, masses, currencyAcronym) {
    $(function () {
        $('#graphR').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'Monetary mass (relative): M/UD'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        '(you can zoom with click & drag)' :
                        'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime',
                minRange: dt*2*1000 // Max zoom = 2 DU
            },
            yAxis: {
                title: {
                    text: 'UD count'
                },
                floor: 0
            },
            legend: {
                enabled: true
            },
            tooltip: {
                shared: true,
                crosshairs: true
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'M/UD',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: masses
            },{
                type: 'line',
                name: 'UD/UD',
                pointInterval: dt*1000,
                pointStart: firstUDTime*1000,
                data: UDs
            }]
        });
    });
};

function wotGraph (id, links) {

    var nodes = {};

    // Compute the distinct nodes from the links.
    links.forEach(function(link) {
        link.value = 0; // Force to 1
        link.source = nodes[link.source] || 
            (nodes[link.source] = {name: link.source});
        link.target = nodes[link.target] || 
            (nodes[link.target] = {name: link.target});
        link.value = +link.value;
    });

    var width = 960,
        height = 500;

    var force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([width, height])
        .linkDistance(200)
        .charge(0)
        .on("tick", tick)
        .start();

    // Set the range
    var  v = d3.scale.linear().range([0, 100]);

    // Scale the range of the data
    v.domain([0, d3.max(links, function(d) { return d.value; })]);

    // asign a type per value to encode opacity
    links.forEach(function(link) {
      link.type = "onezerozero";
      // if (v(link.value) <= 25) {
      //   link.type = "twofive";
      // } else if (v(link.value) <= 50 && v(link.value) > 25) {
      //   link.type = "fivezero";
      // } else if (v(link.value) <= 75 && v(link.value) > 50) {
      //   link.type = "sevenfive";
      // } else if (v(link.value) <= 100 && v(link.value) > 75) {
      //   link.type = "onezerozero";
      // }
    });

    var svg = d3.select("#wot").append("svg")
        .attr("width", width)
        .attr("height", height);

    // build the arrow.
    svg.append("svg:defs").selectAll("marker")
        .data(["end"])      // Different link/path types can be defined here
      .enter().append("svg:marker")    // This section adds in the arrows
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15)
        .attr("refY", -1.5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
      .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");

    // add the links and the arrows
    var path = svg.append("svg:g").selectAll("path")
        .data(force.links())
      .enter().append("svg:path")
        .attr("class", function(d) { return "link " + d.type; })
        .attr("marker-end", "url(#end)");

    // define the nodes
    var node = svg.selectAll(".node")
        .data(force.nodes())
      .enter().append("g")
        .attr("class", "node")
        // .on("click", click)
        // .on("dblclick", dblclick)
        .call(force.drag);

    // add the nodes
    node.append("circle")
        .attr("r", 5);

    // add the text 
    node.append("text")
        .attr("x", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });

    // add the curvy lines
    function tick() {
        path.attr("d", function(d) {
            var dx = d.target.x - d.source.x,
                dy = d.target.y - d.source.y,
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" + 
                d.source.x + "," + 
                d.source.y + "A" + 
                dr + "," + dr + " 0 0,1 " + 
                d.target.x + "," + 
                d.target.y;
        });

        node
            .attr("transform", function(d) { 
            return "translate(" + d.x + "," + d.y + ")"; });
    }

    // action to take on mouse click
    function click() {
        d3.select(this).select("text").transition()
            .duration(750)
            .attr("x", 22)
            .style("fill", "steelblue")
            .style("stroke", "lightsteelblue")
            .style("stroke-width", ".5px")
            .style("font", "20px sans-serif");
        d3.select(this).select("circle").transition()
            .duration(750)
            .attr("r", 16)
            .style("fill", "lightsteelblue");
    }

    // action to take on mouse double click
    function dblclick() {
        d3.select(this).select("circle").transition()
            .duration(750)
            .attr("r", 6)
            .style("fill", "#ccc");
        d3.select(this).select("text").transition()
            .duration(750)
            .attr("x", 12)
            .style("stroke", "none")
            .style("fill", "black")
            .style("stroke", "none")
            .style("font", "10px sans-serif");
    }
}

function wotGraph2 (id, wot, bidirectionnals) {
    
  var w = $(id).width(),
    h = $(id).width(),
    rx = w / 2,
    ry = h / 2,
    m0,
    rotate = 0;

  var splines = [];

  var cluster = d3.layout.cluster()
      .size([360, ry - 60])
      .sort(function(a, b) { return d3.ascending(a.key, b.key); });

  var bundle = d3.layout.bundle();

  var line = d3.svg.line.radial()
      .interpolate("bundle")
      .tension(d3.select("input[type=range]")[0][0].value/100)
      .radius(function(d) { return d.y; })
      .angle(function(d) { return d.x / 180 * Math.PI; });

  // Chrome 15 bug: <http://code.google.com/p/chromium/issues/detail?id=98951>
  var div = d3.select(id).insert("div", "h2")
      .style("-webkit-backface-visibility", "hidden");

  var svg = div.append("svg:svg")
      .attr("width", w)
      .attr("height", w)
    .append("svg:g")
      .attr("transform", "translate(" + rx + "," + ry + ")");

  svg.append("svg:path")
      .attr("class", "arc")
      .attr("d", d3.svg.arc().outerRadius(ry - 60).innerRadius(0).startAngle(0).endAngle(2 * Math.PI))
      .on("mousedown", mousedown);

  d3.select(window)
      .on("mousemove", mousemove)
      .on("mouseup", mouseup);


  var nodes = cluster.nodes(packages.root(wot)),
      links = packages.imports(nodes),
      splines = bundle(links);

  var path = svg.selectAll("path.link")
      .data(links)
    .enter().append("svg:path")
      .attr("class", function(d) { return "link source-" + d.source.key + " target-" + d.target.key; })
      .attr("d", function(d, i) { return line(splines[i]); });

  svg.selectAll("g.node")
      .data(nodes.filter(function(n) { return !n.children; }))
    .enter().append("svg:g")
      .attr("class", "node")
      .attr("id", function(d) { return "node-" + d.key; })
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
    .append("svg:text")
      .attr("dx", function(d) { return d.x < 180 ? 8 : -8; })
      .attr("dy", ".31em")
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      .attr("transform", function(d) { return d.x < 180 ? null : "rotate(180)"; })
      .text(function(d) { return d.key; })
      .on("mouseover", mouseover)
      .on("mouseout", mouseout);

  d3.select("input[type=range]").on("change", function() {
    line.tension(this.value / 100);
    path.attr("d", function(d, i) { return line(splines[i]); });
  });

  function mouse(e) {
    return [e.pageX - rx, e.pageY - ry];
  }

  function mousedown() {
    m0 = mouse(d3.event);
    d3.event.preventDefault();
  }

  function mousemove() {
    if (m0) {
      var m1 = mouse(d3.event),
          dm = Math.atan2(cross(m0, m1), dot(m0, m1)) * 180 / Math.PI;
      div.style("-webkit-transform", "translateY(" + (ry - rx) + "px)rotateZ(" + dm + "deg)translateY(" + (rx - ry) + "px)");
    }
  }

  function mouseup() {
    if (m0) {
      var m1 = mouse(d3.event),
          dm = Math.atan2(cross(m0, m1), dot(m0, m1)) * 180 / Math.PI;

      rotate += dm;
      if (rotate > 360) rotate -= 360;
      else if (rotate < 0) rotate += 360;
      m0 = null;

      div.style("-webkit-transform", null);

      svg
          .attr("transform", "translate(" + rx + "," + ry + ")rotate(" + rotate + ")")
        .selectAll("g.node text")
          .attr("dx", function(d) { return (d.x + rotate) % 360 < 180 ? 8 : -8; })
          .attr("text-anchor", function(d) { return (d.x + rotate) % 360 < 180 ? "start" : "end"; })
          .attr("transform", function(d) { return (d.x + rotate) % 360 < 180 ? null : "rotate(180)"; });
    }
  }

  function mouseover(d) {
    svg.selectAll("path.link.target-" + d.key)
        .classed("target", true)
        .each(updateNodes("source", true));

    svg.selectAll("path.link.source-" + d.key)
        .classed("source", true)
        .each(updateNodes("target", true));

    var bidir = bidirectionnals[d.key];
    if (bidir) {
      bidir.forEach(function (key) {
        svg.selectAll("path.link.source-" + d.key + ".target-" + key)
            .classed("source", false)
            .each(updateNodes("target", false));
        svg.selectAll("path.link.target-" + d.key + ".source-" + key)
            .classed("target", false)
            .each(updateNodes("source", false));
        svg.selectAll("path.link.source-" + d.key + ".target-" + key)
            .classed("bidirectionnal", true);
      });
    }
  }

  function mouseout(d) {
    svg.selectAll("path.link.source-" + d.key)
        .classed("source", false)
        .each(updateNodes("target", false));

    svg.selectAll("path.link.target-" + d.key)
        .classed("target", false)
        .each(updateNodes("source", false));

    svg.selectAll("path.link.bidirectionnal")
        .classed("bidirectionnal", false)
        .each(updateNodes("target", false));
  }

  function updateNodes(name, value) {
    return function(d) {
      if (value) this.parentNode.appendChild(this);
      svg.select("#node-" + d[name].key).classed(name, value);
    };
  }

  function cross(a, b) {
    return a[0] * b[1] - a[1] * b[0];
  }

  function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
  }
}


/*********** GRAPHES BLOCKCHAIN **********/

function timeGraphs (id, offset, timeAccelerations, medianTimeIncrements, speeds, minSpeeds, maxSpeeds) {
  var timesInc = [];
  medianTimeIncrements.forEach(function (inc) {
    timesInc.push(inc == 0 ? 1 : inc);
  });
  $(id).highcharts({
      chart: {
          // type: "area",
          zoomType: 'x'
      },
      title: {
          text: 'Blockchain time variations'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          minRange: 10, // 10 blocks,
          labels: {
              formatter: function() {
                  return this.value + offset;
              }
          }
      },
      yAxis: {
          type: 'logarithmic',
          minorTickInterval: 1,
          title: {
              text: 'Number of seconds (logarithmic scale)'
          }
      },
      legend: {
          enabled: true
      },
      tooltip: {
          shared: true,
          crosshairs: true,
          formatter: blockFormatter(offset)
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },

      series: [
        {
          name: 'Time acceleration',
          data: timeAccelerations
        },{
          name: "Median Time variation",
          data: timesInc
        },{
          type: 'line',
          name: "Too high duration",
          data: maxSpeeds
        },{
          type: 'line',
          name: "Actual duration",
          data: speeds
        },{
          name: "Too low duration",
          data: minSpeeds
        }
      ]
  });
}

function speedGraphs (id, offset, speeds, minSpeeds, maxSpeeds) {
  var xValuex = [];
  for (var i = 0, len = speeds.length; i < len; i++) {
    xValuex.push(i + offset);
  }
  $(id).highcharts({
      chart: {
          type: "area",
          zoomType: 'x'
      },
      title: {
          text: 'Blocks writing speed'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          //categories: xValuex,
          minRange: 10, // 10 blocks,
          labels: {
            formatter: function() {
              return this.value + offset;
            }
          }
      },
      yAxis: {
          type: 'logarithmic',
          minorTickInterval: 1,
          title: {
              text: 'Blocks per hour (logarithmic scale)'
          }
      },
      colors: ['#ff0000', '#7cb5ec', '#000000'],
      legend: {
          enabled: true
      },
      tooltip: {
          shared: true,
          crosshairs: true,
          formatter: blockFormatter(offset)
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },

      series: [{
          type: 'line',
          name: "Upper limit",
          data: maxSpeeds
        },{
          type: 'area',
          name: "Actual speed",
          data: speeds
        },{
          type: 'line',
          name: "Lower limit",
          data: minSpeeds
        }
      ]
  });
}

function issuersGraphs (id, offset, ndDifferentIssuers, parameters) {
  $(id).highcharts({
      chart: {
          type: "area",
          zoomType: 'x'
      },
      title: {
          text: 'Different block issuers count over last ' + parameters.blocksRot + ' blocks'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          minRange: 10, // 10 blocks,
          labels: {
              formatter: function() {
                  return this.value + offset;
              }
          }
      },
      yAxis: {
          title: {
              text: 'Number of issuers'
          },
          floor: 0,
          min: 0
      },
      legend: {
          enabled: true
      },
      tooltip: {
          shared: true,
          crosshairs: true,
          formatter: blockFormatter(offset)
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          },
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function (e) {
                        popIssuer(e, this, offset, parameters.nodeURI);
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              }
          },
      },

      series: [
        {
          name: 'Issuers',
          data: ndDifferentIssuers
        }
      ]
  });
}

function difficultyGraph (id, offset, difficulties) {
  hcDifficulty = $(id).highcharts({
      chart: {
          type: "area",
          zoomType: 'x'
      },
      title: {
          text: 'Proof-of-Work difficulty by block'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          minRange: 10, // 10 blocks,
          labels: {
              formatter: function() {
                  return this.value + offset;
              }
          }
      },
      yAxis: {
          title: {
              text: 'Number of zeros'
          },
          floor: 0,
          min: 0
      },
      legend: {
          enabled: true
      },
      tooltip: {
          shared: true,
          crosshairs: true,
          formatter: blockFormatter(offset)
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          }
      },

      series: [
        {
          name: 'PoW difficulty',
          data: difficulties
        }
      ]
  });
}


/*********** GRAPHES BLOCKCHAIN **********/

function wotGraphs (id, members, newcomers, actives, leavers, excluded) {
  $(id).highcharts({
      chart: {
          type: "line",
          zoomType: 'x'
      },
      title: {
          text: 'Web of Trust variations'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          minRange: 10 // 10 blocks
      },
      yAxis: {
          title: {
              text: 'Number of individuals'
          },
          floor: 0
      },
      tooltip: {
          shared: true,
          crosshairs: true
      },
      legend: {
          enabled: true
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          },
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function (e) {
                        popMembers(e, this);
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              }
          },
      },

      series: [
        {
          type: 'area',
          name: 'Members',
          data: members
        },{
          name: 'Newcomers',
          data: newcomers
        },{
          name: 'Actives',
          data: actives
        },{
          name: 'Leavers',
          data: leavers
        },{
          name: 'Excluded',
          data: excluded
        }
      ]
  });
}


/*********** GRAPHES BLOCKCHAIN **********/

function txsGraphs (id, transactions) {
  $(id).highcharts({
      chart: {
          type: "area",
          zoomType: 'x'
      },
      title: {
          text: 'Transactions volume'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          minRange: 10 // 10 blocks
      },
      yAxis: {
          title: {
              text: 'Number of transactions'
          },
          floor: 0,
          min: 0
      },
      legend: {
          enabled: true
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          },
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function (e) {
                        popBlock(e, this);
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              }
          },
      },

      series: [
        {
          name: 'Transactions',
          data: transactions
        }
      ]
  });
}

function outputVolumeGraph (id, transactions, transactions2) {
  $(id).highcharts({
      chart: {
          type: "area",
          zoomType: 'x'
      },
      title: {
          text: 'Total output volume per block (sum of transactions)'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          minRange: 10 // 10 blocks
      },
      yAxis: {
          title: {
              text: 'Output volume'
          },
          floor: 0,
          min: 0
      },
      legend: {
          enabled: true
      },
      tooltip: {
          shared: true,
          crosshairs: true
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          },
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function (e) {
                        popBlock(e, this);
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              }
          },
      },

      series: [
        {
          name: 'Output volume',
          data: transactions
        },
        {
          name: 'Output volume <b>without change</b>',
          data: transactions2
        }
      ]
  });
}

function popBlock (e, obj) {
  $.getJSON('/blockchain/block/' + obj.x, function (block) {
    var msg = '';
    if (block.transactions.length) {
      // Volume without money change
      block.transactions.forEach(function (tx) {
        var issuers = [];
        tx.signatories.forEach(function (signatory) {
          issuers.push(signatory.substring(0, 6));
        });
        msg += issuers.join(',');
        var receips = [];
        var outputVolume = 0;
        var outputVolumeEstimated = 0;
        tx.outputs.forEach(function (out) {
          var sp = out.split(':');
          var recipient = sp[0];
          var amount = parseInt(sp[1]);
          outputVolume += amount;
          if (tx.signatories.indexOf(recipient) == -1) {
            outputVolumeEstimated += amount;
            receips.push('<b>' + amount + ' units</b> to ' + recipient.substring(0, 6));
          }
        });
        msg += ' sent ' + receips.join(',');
        msg += ' (change was <b>' + (outputVolume - outputVolumeEstimated) + ' units</b>)<br/>';
      });
    }
    hs.htmlExpand(null, {
        pageOrigin: {
            x: e.pageX || e.clientX,
            y: e.pageY || e.clientY
        },
        headingText: 'Transactions detail',
        maincontentText: msg ? msg : '<i>No transactions in this block.</i>',
        width: msg ? 400 : 200
    });
  });
}

function popIssuer (e, obj, offset, nodeURI) {
  $.getJSON('/blockchain/block/' + (obj.x + offset), function (block) {
    var msg = 'Issuer of block#' + block.number + ' was <a target="_blank" href="' + nodeURI + '/wot/lookup/' + block.issuer + '">' + block.issuer.substring(0,20);
    hs.htmlExpand(null, {
        pageOrigin: {
            x: e.pageX || e.clientX,
            y: e.pageY || e.clientY
        },
        headingText: 'Block\'s issuer detail',
        maincontentText: msg,
        width: 400
    });
  });
}

function popCerts (e, obj) {
  $.getJSON('/blockchain/block/' + obj.x, function (block) {
    var msg = '';
    if (block.certifications.length) {
      block.certifications.forEach(function (cert) {
        var sp = cert.split(':');
        msg += sp[0].substring(0,6) + ' certified ' + sp[1].substring(0,6) + '<br/>';
      });
    }
    hs.htmlExpand(null, {
        pageOrigin: {
            x: e.pageX || e.clientX,
            y: e.pageY || e.clientY
        },
        headingText: 'Certifications detail',
        maincontentText: msg ? msg : '<i>No certifications in this block.</i>',
        width: msg ? 400 : 200
    });
  });
}

function popMembers (e, obj) {
  $.getJSON('/blockchain/block/' + obj.x, function (block) {
    var msg = '';
    if (block.joiners.length) {
      block.joiners.forEach(function (cert) {
        var sp = cert.split(':');
        msg += sp[5] + ' has joined (pubkey ' + sp[0].substring(0,6) + ')<br/>';
      });
    }
    if (block.actives.length) {
      block.actives.forEach(function (cert) {
        var sp = cert.split(':');
        msg += sp[5] + ' has updated (pubkey ' + sp[0].substring(0,6) + ')<br/>';
      });
    }
    if (block.leavers.length) {
      block.leavers.forEach(function (cert) {
        var sp = cert.split(':');
        msg += sp[5] + ' has updated (pubkey ' + sp[0].substring(0,6) + ')<br/>';
      });
    }
    if (block.excluded.length) {
      block.excluded.forEach(function (cert) {
        var sp = cert.split(':');
        msg += sp[0].substring(0,6) + ' has been excluded<br/>';
      });
    }
    hs.htmlExpand(null, {
        pageOrigin: {
            x: e.pageX || e.clientX,
            y: e.pageY || e.clientY
        },
        headingText: 'Memberships detail',
        maincontentText: msg ? msg : '<i>No memberships nor excluded member in this block.</i>',
        width: msg ? 400 : 200
    });
  });
}

function certsGraph (id, certifications) {
  $(id).highcharts({
      chart: {
          type: "area",
          zoomType: 'x'
      },
      title: {
          text: 'Certifications volume'
      },
      subtitle: {
          text: document.ontouchstart === undefined ?
                  'Click and drag in the plot area to zoom in' :
                  'Pinch the chart to zoom in'
      },
      xAxis: {
          minRange: 10 // 10 blocks
      },
      yAxis: {
          title: {
              text: 'Number of certifications'
          },
          floor: 0,
          min: 0
      },
      legend: {
          enabled: true
      },
      plotOptions: {
          area: {
              fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                  stops: [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                  ]
              },
              marker: {
                  radius: 2
              },
              lineWidth: 1,
              states: {
                  hover: {
                      lineWidth: 1
                  }
              },
              threshold: null
          },
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function (e) {
                        popCerts(e, this);
                      }
                  }
              },
              marker: {
                  lineWidth: 1
              }
          },
      },

      series: [
        {
          name: 'Certifications',
          data: certifications
        }
      ]
  });
}

function blockFormatter(offset) {
    return function() {
        var html = '<span style="font-size: 10px">' + (this.x + offset) + '</span><br/>';
        for (var i = 0, len = this.points.length; i < len; i++) {
            var point = this.points[i];
            var series = point.series;
            html += '<span style="color:' + series.color + '">\u25CF</span>' + series.name + ': <b>' + point.y + '</b><br/>';
        }
        return html;
    }
}