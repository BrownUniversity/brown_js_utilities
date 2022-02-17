export function adjustColor(colorValue, changeAmount) {
    var _a;
    if (changeAmount === void 0) { changeAmount = -20; }
    var color = colorValue.replace(/^#/, "");
    var changePercent = changeAmount / 100;
    if (color.length === 3)
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    // @ts-ignore
    var _b = color.match(/.{2}/g), r = _b[0], g = _b[1], b = _b[2];
    _a = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)], r = _a[0], g = _a[1], b = _a[2];
    r = Math.max(Math.min(255, Math.round(r + r * changePercent)), 0).toString(16);
    g = Math.max(Math.min(255, Math.round(g + g * changePercent)), 0).toString(16);
    b = Math.max(Math.min(255, Math.round(b + b * changePercent)), 0).toString(16);
    var rr = (r.length < 2 ? "0" : "") + r;
    var gg = (g.length < 2 ? "0" : "") + g;
    var bb = (b.length < 2 ? "0" : "") + b;
    return "#" + rr + gg + bb;
}
