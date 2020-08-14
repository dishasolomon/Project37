class Obstacle{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        fill("lightblue");
        rect(0, 0, this.width, this.height);
        pop();
    }
}