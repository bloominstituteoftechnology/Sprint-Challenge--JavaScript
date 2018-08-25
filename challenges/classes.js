// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{ 
	constructor(obj) {
	this.length = obj.length;
	this.width = obj.width;
	this.height = obj.height;
	}

	volume() {
		return this.length * this.width * this.height;
	}

	surfaceArea() {
		return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
	}
}
// CuboidMaker creates a cuboid with the properties length, width, and height
// It also has the methods volume and surfaceArea.

class CubeMaker extends CuboidMaker {
	constructor(cube) {
		super(cube);
		this.side = cube.side;
	}

	volume() {
		return Math.pow(this.side, 3);
	}

	surfaceArea() {
		return 6 * Math.pow(this.side, 2);
	}
}
//CubeMaker creates a cube with the only property being side since all the sides are the same length
// It also has its own volume and surface Area methods.

const cube = new CubeMaker ({
	side: 4,
})

const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5,
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  
  Create a new cube object and log out the results of your new cube.

*/

console.log(cube.volume());
console.log(cube.surfaceArea());