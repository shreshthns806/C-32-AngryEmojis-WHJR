class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/emoji3.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    var angle = this.body.angle;
    push();
    imageMode(CENTER);
    if(gameState=="launched"){
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      
      image(this.image, 0, 0, this.width, this.height);  
    }else{
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);  
    }
    
    pop();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
