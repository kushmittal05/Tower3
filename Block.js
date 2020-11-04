class Block{
  constructor(x, y, width, height) {
    this.image=this.image
      var options = {
       
        
          restitution :0.4,
          friction :0.0,
          //isStatic:false
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=225;
      World.add(world, this.body);
    }
    display(){
     // console.log(this.body.speed)
      if (this.body.speed<3) {
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
        //imageMode(CENTER);
        
       //image(this.image, pos.x, pos.y, this.width, this.height);
      }
      else{ 
        World.remove(world, this.body);
        push();
        this.Visibility=this.Visibility-5;
        //score();

        //tint(255,this.Visibility)
      //image(this.image,this.body.position.x, this.body.position.y)
       pop();
      }
    }
      score() {
        if(this.Visibility<0 && this.Visibility>-105) {
          score++
     
    
    }
  }
};

