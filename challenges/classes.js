// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// function CuboidMaker(attributes) {
// 	this.length = attributes.length;
// 	this.width = attributes.width;
// 	this.height = attributes.height;
// }

// CuboidMaker.prototype.volume = function(length, width, height) {
// 	let volume = length * width * height;
// 	return volume;
// };

// CuboidMaker.prototype.surfaceArea = function(length, width, height) {
// 	let surfaceArea = 2 * (length * width + length * height + width * height);
// 	return surfaceArea;
// };

class CuboidMaker {
	constructor(attributes) {
		this.length = attributes.length;
		this.width = attributes.width;
		this.height = attributes.height;
	}
	volume(length, width, height) {
		let volume = length * width * height;
		return volume;
	}
	surfaceArea(length, width, height) {
		let surfaceArea = 2 * (length * width + length * height + width * height);
		return surfaceArea;
	}
}

let cuboid = new CuboidMaker({
	length: 4,
	width: 5,
	height: 5
});

console.log(cuboid);
console.log(cuboid.volume(4, 5, 5)); // 100
console.log(cuboid.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
