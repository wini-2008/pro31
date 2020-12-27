class Plinko.js {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,options);
      
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //fill("brown");
      
    }
  };
