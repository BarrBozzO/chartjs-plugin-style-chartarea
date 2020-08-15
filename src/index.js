var Chart = require("chart.js");

function beforeDraw(chart) {
  var opts = chart.options;
  if (opts.chartArea && opts.chartArea.backgroundColor) {
    var ctx = chart.ctx;
    var chartArea = chart.chartArea;
    var bgColor = opts.chartArea.backgroundColor;

    ctx.save();
    ctx.fillStyle = bgColor;
    ctx.fillRect(
      chartArea.left,
      chartArea.top,
      chartArea.right - chartArea.left,
      chartArea.bottom - chartArea.top
    );
    ctx.restore();
  }
}

var StyleChartAreaPlugin = {
  id: "style-chartarea",
  beforeDraw: beforeDraw,
};

module.exports = StyleChartAreaPlugin;
Chart.plugins.register(StyleChartAreaPlugin);
