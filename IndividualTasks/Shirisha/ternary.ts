class Ternary_op{
    public A:number;
    public B:number;
 public Condition() {
        this.A=23;
        this.B=9;
console.log((this.A>this.B)?"yes":"no");        
    }
}
 var op=new Ternary_op();
console.log(op.Condition());
