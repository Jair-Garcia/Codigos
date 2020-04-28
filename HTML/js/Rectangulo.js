class rectangulo {
    constructor(b, a) {
        this.base = b;
        this.altura = a;
        this.area = function () {
            return b * a;
        };
    }
}