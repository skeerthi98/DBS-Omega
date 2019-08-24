class ternary
{  
    evaluate():boolean
    {  
        let num = 4;  
        let result = (num > 0) ? true: false ;
        return result;      
    }  
}  

var q= new ternary();  
console.log(q.evaluate());
 