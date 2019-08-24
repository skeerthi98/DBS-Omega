class oddOrEvenClass{

    oddOrEven():string{
        var num:number=31;
        var result:string = (num%2==0)?"Even Number":"Odd number";
        return result;
    }

}
var obj = new oddOrEvenClass();
console.log(obj.oddOrEven());