class Rubber {
    constructor(x, y) {
      var options = {
          'density':1.5,
          'friction':4.0,
          'restitution':1.0
      };
      this.body = Bodies.circle(x, y, 40, options);
      this.radius = 40;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
     
      strokeWeight("lightblue");
      stroke("lightblue");
      fill("darkblue");
      
      circle(0, 0, this.radius);
      pop();
    }
  }
  