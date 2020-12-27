class Partical {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
     
        }
      this.body = Bodies.cirlce(x,y,r,options);

      this.color = color(random(0,255) , random(0,255) , random(0,255));
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
      ellipseMode(RADIUS);
      ellips (0,0,this.r,this.r);
        pop();
      }
}
    
    
    
    
    
    }
  };
