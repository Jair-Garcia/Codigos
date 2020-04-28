class cuadrado {
    constructor(lado) {
        this.lado = lado;
        this.area = function () {
            return Math.pow(lado,2);
        };
    }
}