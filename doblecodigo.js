var num=4;
console.log("El valor es: ", euler(num));
function euler(num)
{ 
    var  e=0, m=1, sumaf=0;
    for(var i=1; i<=num; i++)
    {   m*=i;
        sumaf+= m;
    }
    e=1+(1/sumaf);
    return e;
}


var a=4;
console.log("El valor es: ", exponente(a))
function exponente(a)
{
    var e=0, x=2, m=1, res=0, exp=0, suma=0, sumaf=0;
    for(var i=1; i<=a; i++)
    m*=i;
    sumaf+=m;
    for(var j=1; j<=a; j++)
    exp+=Math.pow(x,j);
    suma+=exp;
    e=1+(suma/sumaf);
    res= Math.pow(e,x);
    return res;
}