// union型
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 63);
console.log(combineAges);
var combinedNames = combine("Max", "Anna");
console.log(combinedNames);
// Literal型
function combineLiteral(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if ((resultConversion = "as-number")) {
    //     return +result;
    //   }
    return result;
}
var combineLiteralAges = combineLiteral(30, 63, "as-text");
console.log(combineLiteralAges);
var combinedLiteralNames = combineLiteral("Max", "Anna", "as-number");
console.log(combinedLiteralNames);
