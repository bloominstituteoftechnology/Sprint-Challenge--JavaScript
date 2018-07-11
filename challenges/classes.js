// Copy and paste your prototype in here and refactor into class syntax.

class Cuboid
{
  constructor(length, width, height)
  {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  volume()
  {
    return this.length * this.width * this.height;
  }

  surfaceArea()
  {
    const l = this.length;
    const w = this.width;
    const h = this.height;
  
    return 2 * (l * w + l * h + w * h)
  }
}

const cuboid = new Cuboid(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
