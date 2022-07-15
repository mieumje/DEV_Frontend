export async function getBtsWriteRatioData() {
  const csv = await d3.csv("./data/BTS작사비율.csv");
  return csv.map((d) => {
    d.value = parseFloat(d.value);
    return d;
  });
}

export async function getBtsComposeRatioData() {
  const csv = await d3.csv("./data/BTS작곡비율.csv");
  return csv.map((d) => {
    d.value = parseFloat(d.value);
    return d;
  });
}

export async function getBoyBandWriteData() {
  const csv = await d3.csv("./data/남자아이돌작사비율.csv");
  const data = csv.map((d) => {
    d["참여"] = parseFloat(d["참여"]);
    d["비참여"] = parseFloat(d["비참여"]);
    return d;
  });

  return data.sort((a, b) => b["참여"] - a["침여"]);
}

export async function getBoyBandComposeData() {
  const csv = await d3.csv("./data/남자아이돌작곡비율.csv");
  const data = csv.map((d) => {
    d["참여"] = parseFloat(d["참여"]);
    d["비참여"] = parseFloat(d["비참여"]);
    return d;
  });

  return data.sort((a, b) => b["참여"] - a["침여"]);
}
