

function CuboidMaker(attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
}



CuboidMaker.prototype.volume = function(){
    return this.width * this.length * this.height
}



CuboidMaker.prototype.surfaceArea = function(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


