function thousands_separators(num) {
    var a = num.toString();
    var result = "";
    var arr = a.split(".");
    if (arr[1] === 0 || arr[1] === undefined) {
        result = first(arr);
    }
    else {
        result = sencond(arr);
    }
    return result;
}
function first(arr) {
    var result = "";
    while (arr[0].length > 3) {
        result += "," + arr[0].slice(-3);
        arr[0] = arr[0].slice(0, arr[0].length - 3);
    }
    if (arr[0].length != 0)
        result = arr[0] + result;
    return result;
}
function sencond(arr) {
    var result = "";
    while (arr[0].length > 3) {
        result += "," + arr[0].slice(-3);
        arr[0] = arr[0].slice(0, arr[0].length - 3);
    }
    if (arr[0].length != 0)
        result = arr[0] + result + "." + arr[1];
    return result;
}
module.exports = thousands_separators;