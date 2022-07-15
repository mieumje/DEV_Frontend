import { makeChart as initArcChart } from "./charts/big_percentage_arc_chart.js";
import { getBtsWriteRatioData } from "./services/bts_data.js";

async function iniCharts() {
  const colorScheme = d3.schemeTableau10;
  const data = await getBtsWriteRatioData();

  initArcChart("#write-arc-chart", data, colorScheme, "멤버 작사 참여 비율"); // chartId, data
}

iniCharts();
