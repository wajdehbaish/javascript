class Sqaure {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;

        this.aIsBigger = () => {
            if (a > b && a > c && a > d) {
                return true;
            }
            return false;
        };
    }
}

let s = new Sqaure(10, 2, 3, 4);

console.log(s.aIsBigger())​