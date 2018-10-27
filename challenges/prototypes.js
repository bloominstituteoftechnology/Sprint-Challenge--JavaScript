function CuboidMakerP (qualities) {
  this.length = qualities.length;
  this.width = qualities.width;
  this.height = qualities.height;
}

CuboidMakerP.prototype.volume = function() {
  return this.length*this.width*this.height;
}

CuboidMakerP.prototype.surfaceArea = function() {
  return 2*(this.length*this.width+this.length*this.height+this.width*this.height);
}

const cuboidP = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5

});

console.log(cuboidP.volume()); // 100
console.log(cuboidP.surfaceArea()); // 130