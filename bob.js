class bob
{
    constructor(x,y,r)
    {
        var options = 
       {
           'restitution':0.8,'friction':0.5,
          //'isStatic':true
       }
        this.body = Bodies.circle(x,y,r,options);
        this.body.r = r;       
        World.add(world,this.body);
    }

    display()
    {
       // var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
       // rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.body.r);
        pop();
    }
    
}