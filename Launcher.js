class Launcher{
    constructor(bodyA, bodyB){
var options={
bodyA:bodyA,
bodyB:bodyB,
stiffness:0.004, 
length:1

}
this.bodyA=bodyA;
this.bodyB = bodyB;
this.launcher = Constraint.create(options)
World.add(world,this.launcher);
    }
    display(){

if(this.launcher.bodyA){
    var pointA = this.launcher.bodyA.position;
    var pointB = this.launcher.bodyB.position;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

    }
    }
}