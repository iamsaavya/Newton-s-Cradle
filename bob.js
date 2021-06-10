class bob{
    constructor(x,y){

        var options = {
            isStatic : false,
            friction : 0,
            restitution : 1,
            density : 6
        }
        this.body = Bodies.circle(x,y, 40, options)

        World.add(world, this.body)

    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        fill("yellow")
        circle(0, 0, 80)
        pop()
    }
}