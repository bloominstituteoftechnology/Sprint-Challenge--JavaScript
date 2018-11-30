// 1. Copy and paste your prototype in here and refactor into class syntax.

//======================  Parent Class  ========================//
class CuboidMaker{
    constructor(stats){
    this.length = stats.length;
    this.width = stats.width;
    this.height = stats.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

//=========================  Child Class  ========================//

class CubeMaker extends CuboidMaker{
    constructor(dimensions){
        super(dimensions);
        this.edge = dimensions.edge;
    }
    cubeVolume(){
        return this.edge ** 3;
    }
    cubeSA(){
        return 6 * (this.edge ** 2)
    }
}

//======================= Grandchild Class  ======================//

class rightCylinderMaker extends CubeMaker{
    constructor(dimensions){
        super(dimensions);
        this.radius = dimensions.radius;
    }
    rightCylinderVolume(){
        return Math.PI * (this.radius ** 2) * this.height;
    }
    rightCylinderSA(){
        return (2 * Math.PI * this.radius * this.height) + (2 * Math.PI * (this.radius ** 2));
    }
}

//======================  Parent Object  ========================//

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });

//========================  Child Object  ========================//

  const cube = new CubeMaker({
      edge: 3
  });

//=====================  GrandChild Object  ======================//

const rightCylinder = new rightCylinderMaker ({
    height: 5,
    radius: 3
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130
 console.log(cube.cubeVolume()); // 27
 console.log(cube.cubeSA()); //54
 console.log(rightCylinder.rightCylinderVolume()); //~141.37
 console.log(rightCylinder.rightCylinderSA()); //~150.8

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.