// Copy and paste your prototype in here and refactor into class syntax.
/*PASTE BELOW THIS LINE*/

/* OLD FUNCTION
function CuboidMaker(Properties){
	this.length = Properties.length;
	this.width = Properties.width;
	this.height = Properties.height;
}
*/
// New class
class CuboidMaker{
	constructor(Properties){
		this.length = Properties.length;
		this.width = Properties.width;
		this.height = Properties.height;
	}
	volume(){
		return this.length*this.width*this.height;	
	};

	surfaceArea(){
		return 2*(this.length*this.width+this.length*this.height+this.width*this.height);	
	};
}


/* OLD METHOD PROTOTYPES
CuboidMaker.prototype.volume = function(){
//	console.log(this.length * this.width * this.height);
	return this.length * this.width * this.height;
};

CuboidMaker.prototype.surfaceArea = function(){
//	console.log(2*(this.length*this.width+this.length)*this.height+this.width*this.height);
	return 2*(this.length*this.width+this.length*this.height+this.width*this.height);
}
*/


// NEW OBJECT
let cuboid = new CuboidMaker({
	length:4,
	width:5,
	height:5
});

let cuboid2 = new CuboidMaker({
	length:20,
	width:2,
	height:9
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
console.log();
console.log(cuboid2.volume());	// 360
console.log(cuboid2.surfaceArea()); //476

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/
