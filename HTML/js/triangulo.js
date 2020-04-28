class triangulo {
    constructor(a, b) {
        this.altura = a;
        this.base = b;
        this.area = function () {
            return a * b / 2;
        };
    }
}
/*
class rectangulo {
    constructor(b, a) {
        this.base = b;
        this.altura = a;
        this.area = function () {
            return b * a;
        };
    }
}
class circulo {
    constructor(r) {
        this.radio = r;
        this.area = function () {
            return Math.PI * this.radio * this.radio;
        };
    }
}
var triangulo1=new triangulo(5,5)
console.log("El area del triangulo es: ",triangulo1.area())
var r1=new rectangulo(3,5)
console.log("El area del rectangulo es: ",r1.area())
var c1=new circulo(3);
console.log("El area del circulo es: ",c1.area());
*/