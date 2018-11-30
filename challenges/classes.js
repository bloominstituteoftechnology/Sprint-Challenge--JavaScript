// 1. Copy and paste your prototype in here and refactor into class syntax.
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
// Test your work by logging out your volume and surface area.

/* ========================== prototype copy and paste  =======================
function CuboidMaker(attributes) {
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
};

CuboidMaker.prototype.volume = function() {return (this.length*this.width*this.height)};
CuboidMaker.prototype.surfaceArea = function() {return 2*(this.length*this.width*this.length*this.height*this.width*this.height)}; 
 ========================== prototype copy and paste  ======================= */

 class Cuboidmaker {
     constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
     };
     volume() {console.log(this.length*this.width*this.height)};
     surfaceArea() {console.log(this.length*this.width*this.length*this.height*this.width*this.height)};
 };

const newCuboid = new CuboidMaker({
    length: 5,
    width: 6,
    height: 7
});

newCuboid.volume();
newCuboid.surfaceArea();


class CubeMaker extends Cuboidmaker {
    constructor(attributes) {
        super(attributes);
    };
    volume() {console.log(this.width*this.width*this.width)};
    surfaceArea() {console.log(6*this.width*this.width)};
};

const newCube = new CubeMaker ({
    width: 5
});

newCube.volume();
newCube.surfaceArea();