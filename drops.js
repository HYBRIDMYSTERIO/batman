class Drop{
    constructor(x,y){
        var option = {
            'restitution':0,
            'friction':0.3,
            'density':0.04

        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        
    

        World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(position.x,position.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("red");
        rect(0,0,10,10);
        pop();
    }

    
}