export var toKebabCase = function (str) {
    // @ts-ignore: Object is possibly 'null'
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(function (x) { return x.toLowerCase(); })
        .join("-");
};
export var toCamelCase = function (str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) { return chr.toUpperCase(); });
};
export var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
