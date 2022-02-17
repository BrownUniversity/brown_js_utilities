export function adjustColor(colorValue: string, changeAmount = -20) {
  let color = colorValue.replace(/^#/, "");
  const changePercent = changeAmount / 100;

  if (color.length === 3)
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];

  // @ts-ignore
  let [r, g, b] = color.match(/.{2}/g);

  [r, g, b] = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];

  r = Math.max(Math.min(255, Math.round(r + r * changePercent)), 0).toString(
    16
  );
  g = Math.max(Math.min(255, Math.round(g + g * changePercent)), 0).toString(
    16
  );
  b = Math.max(Math.min(255, Math.round(b + b * changePercent)), 0).toString(
    16
  );

  const rr = (r.length < 2 ? "0" : "") + r;
  const gg = (g.length < 2 ? "0" : "") + g;
  const bb = (b.length < 2 ? "0" : "") + b;

  return `#${rr}${gg}${bb}`;
}
