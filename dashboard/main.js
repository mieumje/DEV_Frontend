import { makeChart as initArcChart } from "./charts/big_percentage_arc_chart.js";
import {
  getBtsWriteRatioData,
  getBtsComposeRatioData,
  getBoyBandWriteData,
  getBoyBandComposeData,
} from "./services/bts_data.js";
import { makeBoard as initTextBoard, makeBoard } from "./charts/text-board.js";
import { makeChart as initStackedBarChart } from "./charts/stacked_bar_chart.js";

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

  initTextBoard("#total-song-board", 226, colorScheme);
  initTextBoard("#total-album-board", 38, colorScheme);

  const boyBandWriteData = await getBoyBandWriteData();
  initStackedBarChart(
    "#boyband-write-bar-chart",
    boyBandWriteData,
    colorScheme
  );
  const boyBandComposeData = await getBoyBandComposeData();
  initStackedBarChart(
    "#boyband-compose-bar-chart",
    boyBandComposeData,
    colorScheme
  );
}

iniCharts();
