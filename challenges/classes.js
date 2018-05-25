// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
	constructor(cmProps) {
		this.length = cmProps.length;
		this.width = cmProps.width;
		this.height = cmProps.height;
	}

	volume(){
		return this.length * this.width * this.height;
	}

	surfaceArea() {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	}
}

const cuboid = new CuboidMaker({
	height: 4,
	width: 5,
	length: 5
}); //4, 5, 5

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/


// Stretch goal not funcitoning
// class CubeMaker extends CuboidMaker {
// 	constructor(cmcProps) {
// 		super(cmcProps);
// 		this.cubeSide = cmcProps.cubeSide,
// 		this.height = this.cubeside,
// 		this.length = this.cubeside,
// 		this.height = this.cubeside
// 	}

// 	cubeVolume() {
// 		return Math.pow(this.cubeSide, 3); // default cube volume
// 	}

// 	cubeSurfaceArea() {
// 		return 6 * (Math.pow(this.cubeSide, 2)); // default cube area
// 	}
// }

// const myCube = new CubeMaker({
// 	'cubeside': 5
// });

// console.log(myCube);
// console.log(myCube.cubeVolume());