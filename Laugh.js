class Laugh extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image=loadImage("sprites/Lugh.png");
        this.Visiblity = 255;
    }
    score(){
        if(this.Visiblity<0 && this.Visiblity>-1005){
          score++
        }
      }
       display(){
         //console.log(this.body.speed);
         if(this.body.speed < 4){
          super.display();
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
         
       }
      
      
      
      };
