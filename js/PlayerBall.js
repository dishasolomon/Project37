class PlayerBall{
    constructor(x,y,r){
        var options = {
            isStatic: false
        }

        this.x = x;
        this.y = y;
        this.r = r;
		this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world,this.body);
    }

    display(){
        var paperpos=this.body.position;		

		push();
		translate(paperpos.x, paperpos.y);
		rectMode(CENTER);
		strokeWeight(3);
		fill(0,0,255)
		ellipse(this.x,this.y,this.r);
		pop();
    }
}