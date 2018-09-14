// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(props){
    this.length = props.length; 
    this.width = props.width;
    this.height = props.height;
  }
  
  
  volume(){
    console.log(this.length * this.width * this.height);
  }
  
  
  
  surfaceArea(){
    console.log(2 * (this.length * this.width + this.length * this.height + this.width * this.height))
  }
  
  }
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  cuboid.volume(); // 100
  cuboid.surfaceArea(); // 130
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
//Find out the formulas for volume and surface area for cubes and create those methods 
//using the dimension properties from CuboidMaker. Test your work by logging out your 
//volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(props){
        super(props);


    }
    cubeVol(){
        console.log(this.height * 3)
    }

    cubeSA(){
        console.log((this.height * 2) * 6)
    }

}

const bebeCube = new CubeMaker({
    length: 5,
    width: 5,
    height: 5
})

bebeCube.cubeVol()
bebeCube.cubeSA()