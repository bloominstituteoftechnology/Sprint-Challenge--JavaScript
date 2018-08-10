// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
	constructor(options) {
		this.length = options.length;
		this.width = options.width;
		this.height = options.height;
	}
	volume() {
		return this.length * this.width * this.height;
	};
	surfaceArea() {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	};
}


const cuboid = new CuboidMaker({
	length: 4,
	width: 5,
	height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/


/*
Since all dimensions in cube are equal (height = width = length) all CuboidMaker methods will work for cube as well.
So we don't have to create a new methods, since cube inherits them from CuboidMaker class. But I'll do below anyway.
And we need just one argument since in cube height = width = length.
*/

class CubeMaker extends CuboidMaker {
	constructor(cubeMakerOptions) {
		super(cubeMakerOptions);
	};
	volume() {
		return Math.pow(this.length, 3);
	};
	surfaceArea() {
		return 6 * Math.pow(this.length, 2);
	};
}

const cube = new CubeMaker({
	length: 4
});

console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96


// 