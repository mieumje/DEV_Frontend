// 원형 차트

export function makeChart(chartId, data, colorScheme, dataKey) {
  const margin = { top: 10, right: 10, bottom: 10, left: 10 };
  const width = 151 - margin.left - margin.right;
  const height = 116 - margin.top - margin.bottom;

  // 차트를 그릴 selection
  const chartBox = d3.select(chartId);

  const div = chartBox
    .append("div")
    .style("width", width + "px")
    .style("position", "relative");

  // 원형 차트를 위한 svg
  const svg = chartBox
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("viewBox", [-width / 2, -height / 2, width, height]);

  // 원형 차트 radius 설정
  const radius = Math.min(width, height) / 2;
  // arc 생성자
  const arc = d3
    .arc()
    .innerRadius(radius * 0.85)
    .outerRadius(radius - 1)
    .cornerRadius(4);
  // arc 안의 pie를 설정
  const pie = d3
    .pie()
    .padAngle(0.02)
    .value((d) => d.value)(data);

  const colorScale = d3
    .scaleOrdinal()
    .domain(data.map((d) => d.name))
    .range(colorScheme);

  // 화면에 추가
  svg
    .append("g")
    .selectAll("path")
    .data(pie)
    .join("path")
    .attr("fill", (d) => colorScale(d.data.name))
    .attr("d", arc);

  // 원형 차트에 text 추가
  div
    .append("div")
    .style("position", "absolute")
    .style("display", "flex")
    .style("align-items", "center")
    .style("text-align", "center")
    .style("font-size", "40px")
    .style("font-weight", "bold")
    .style("width", width + margin.left + margin.right + "px")
    .style("height", height + margin.top + margin.bottom + "px")
    .style("color", colorScale(dataKey))
    .append("div")
    .style("width", width + margin.left + margin.right + "px")
    .text(d3.format(".0%")(data.find((d) => d.name === dataKey).value / 100));
}
