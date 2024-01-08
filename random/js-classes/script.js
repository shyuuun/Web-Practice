class Circle {
    constructor(r){
        this.r = r;
    }

    getRadius(){
        return this.r;
    }

    getArea(){
        return this.r * this.r *Math.PI;
    }
}


const c1 = new Circle(2.0);

console.log("Radius:", c1.getRadius());
console.log("Area:", c1.getArea());