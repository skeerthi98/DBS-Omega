var ternary_operator = /** @class */ (function () {
    function ternary_operator() {
    }
    ternary_operator.prototype.condition = function () {
        var first = 5;
        var second = 3;
        var result = (first > second) ? "true" : "false";
        console.log(result);
    };
    return ternary_operator;
}());
var t1 = new ternary_operator();
t1.condition();
