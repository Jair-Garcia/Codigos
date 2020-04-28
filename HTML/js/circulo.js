class circulo {
    constructor(r) {
        this.radio = r;
        this.area = function () {
            return Math.PI * this.radio * this.radio;
        };
    }
}