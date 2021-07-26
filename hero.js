class hero{
    constructor(x,y,width,height){
     var options =
     { isStatic: true
        }
     this.Img1 = loadImage("Superhero-02.png");
     this.body = Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body);
     this.width = width;
     this.height = height;
    
    }
     
   display()
      {
          imageMode(CENTER);
         image(this.Img1,this.body.position.x, this.body.position.y,this.width, this.height);
      }
    
    
    } 

