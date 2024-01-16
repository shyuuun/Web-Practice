class Circle {
    constructor(r = 1.0){
        this.r = r;
    }
    
    setRadius = (rad) => {
        this.rad = rad;
    }

    getRadius(){
        return this.r;
    }

    getArea(){
        return this.r * this.r *Math.PI;
    }
}


const c1 = new Circle(2.0);

c1.setRadius(2.0);

console.log("Radius:", c1.getRadius());
console.log("Area:", c1.getArea());