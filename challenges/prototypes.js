function CuboidMaker (qualities) {
  this.length = qualities.length;
  this.width = qualities.width;
  this.height = qualities.height;
}

CuboidMaker.prototype.volume = function() {
  return this.length*this.width*this.height;
}

CuboidMaker.prototype.surfaceArea = function() {
  return 2*(this.length*this.width+this.length*this.height+this.width*this.height);
}

const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5

});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130