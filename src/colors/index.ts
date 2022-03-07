/* eslint-disable import/prefer-default-export */
export function adjustColor(colorValue: string, changeAmount = -20) {
  let color = colorValue.replace(/^#/, "");
  const changePercent = changeAmount / 100;

  if (color.length === 3)
    color = `${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;

  const r = parseInt(`${color[0]}${color[1]}`, 16);
  const g = parseInt(`${color[2]}${color[3]}`, 16);
  const b = parseInt(`${color[4]}${color[5]}`, 16);

  const newR = Math.max(
    Math.min(255, Math.round(r + r * changePercent)),
    0
  ).toString(16);
  const newG = Math.max(
    Math.min(255, Math.round(g + g * changePercent)),
    0
  ).toString(16);
  const newB = Math.max(
    Math.min(255, Math.round(b + b * changePercent)),
    0
  ).toString(16);

  const rr = (newR.length < 2 ? "0" : "") + newR;
  const gg = (newG.length < 2 ? "0" : "") + newG;
  const bb = (newB.length < 2 ? "0" : "") + newB;

  return `#${rr}${gg}${bb}`;
}
