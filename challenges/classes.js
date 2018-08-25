// Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker { 
  constructor(measurements) { 
    this.length = measurements.length,
    this.width = measurements.width,
    this.height = measurements.height;
  };
}


CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
}

CuboidMaker.prototype.surfaceArea = function() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
} 

    
let johnsFancyCuboid = new CuboidMaker ({ 
  length: 4,
  width: 5,
  height: 5,
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(johnsFancyCuboid.volume()); // 100
console.log(johnsFancyCuboid.surfaceArea()); // 130

/* Stretch Task:

  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods as well.  Create a new cube object and log out the results of your new cube.

*/