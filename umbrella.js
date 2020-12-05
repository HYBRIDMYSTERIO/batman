class Umbrella{
    constructor(){
       
        
        this.image = loadImage("walking_5.png")
    

        //World.add(world,this.body);
    }

    displayumbrella(){
       // var position = this.body.position;
       // var angle = this.body.angle;
        
       // push();
       // translate(position.x,position.y);
       // rotate(angle);
        imageMode(CENTER);
       // strokeWeight(4);
       // fill("red");
        image(this.image,400,350,10,10);
       // pop();
    }
}