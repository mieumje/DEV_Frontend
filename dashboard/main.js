import { makeChart as initArcChart } from "./charts/big_percentage_arc_chart.js";
import {
  getBtsWriteRatioData,
  getBtsComposeRatioData,
} from "./services/bts_data.js";

async function iniCharts() {
  const colorScheme = d3.schemeTableau10;
  const btsWriteRatio = await getBtsWriteRatioData();

  initArcChart(
    "#write-arc-chart",
    btsWriteRatio,
    colorScheme,
    "멤버 작사 참여 비율"
  ); // chartId, data

  const btsComposeRatio = await getBtsComposeRatioData();
  initArcChart(
    "#compose-arc-chart",
    btsComposeRatio,
    colorScheme,
    "멤버 작곡 참여 비율"
  ); // chartId, data
}

iniCharts();
