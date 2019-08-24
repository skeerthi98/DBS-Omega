var ternary_op = /** @class */ (function () {
    function ternary_op() {
    }
    ternary_op.prototype.condition = function () {
        this.a = 23;
        this.b = 9;
        //var r =(a>b)?"yes":"no";        
        console.log((this.a > this.b) ? "yes" : "no");
    };
    return ternary_op;
}());
var op = new ternary_op();
console.log(op.condition());
//console.log(op.a);
//console.log(op.b);
