// Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
	constructor(data) {
		this.length = data.length;
		this.width = data.width;
		this.height = data.height;
	}
	volume() {
		let anw = this.length * this.width * this.height;
		return anw;
		console.log(anw);
	}
	surfaceArea() {
		let anw =
			2 *
			(this.length * this.width +
				this.length * this.height +
				this.width * this.height);
		return anw;
		console.log(anw);
	}
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/
const cuboidData = {
	length: 4,
	width: 5,
	height: 5
};

const cuboid = new CuboidMaker(cuboidData);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
