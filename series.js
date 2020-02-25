
let cos=1, x=2, serie=8, n=2, multiplicador=-1;
function cose(x,n){
    var exp=0, fac=1;
    var i;

    exp=Math.pow(x,n)

    for(i=1;i<=n;i++)
    {
        fac*=i;
    }

    return (exp/fac);
}

for(let i=0;i<serie;i++)
{
    cos+=(cose(x,n)*multiplicador);
    multiplicador*=-1;
    n+=2;
}



let In=0, x2=2, s2=6, n2=1, na=1;
for(let i=0;i<s2;i++)
{
    In+=Sin(x,n2,na);
    na++;
}
function Sin(x,n2,na){
    var e=0, res=0, div=0;

    e=((x-n2)/x);
    res=Math.pow(e,na);
    div=(n2/na);
    res*=div;
    return res;
}


let sen=1, x3=2, s3=5, numero3=3, multi=-1;

sen=x3;
for(let i=0;i<s3;i++)
{
    sen+=(SSeno(x,numero3)*multi);
    multi*=-1;
    numero3+=2;
}
function SSeno(x3,numero3){
    var e=0, fac=1;
    e=Math.pow(x3,numero3)

    for(let i=1;i<=numero3;i++)
    {
        fac*=i;
    }

    return (e/fac);
}
console.log("El valor Seno es:  " + sen)
console.log("El valor de Coseno es: " + cos)
console.log("El valor In es: " + In)