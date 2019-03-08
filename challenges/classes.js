// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class Cuboid {
    constructor(props) {
        this.height = props.height;
        this.width = props.width;
        this.length = props.length;
        this.units = props.units;
    }
    surface(height, width, length, units) {
        let surf = 0;
        console.log(`Computing the total Surface Area of a Cuboid with arguments
        ${height} ${width} ${length}`);
        surf = (2 * (width * height + height * length + width * length));
        return(console.log(`${surf} ${units}`));
    }
}

class CubeMaker extends Cuboid {
    constructor(props) {
        super(props);
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
        this.units = props.units;
    }
    volume(height, width, length, units) {
        let vol = 0;
        console.log(`Computing the Volume of a Cuboid with arguments
        ${height} ${width} ${length}`);
        vol = height * width * length;
        return(console.log(`${vol} ${units}`));
    }
}

const maker = new CubeMaker({
   length: 5,
   width:  8,
   height: 4,
   units: "square inches"
});

maker.surface(5,8,4, "square inches");
maker.volume(5,8,4, "square inches");

