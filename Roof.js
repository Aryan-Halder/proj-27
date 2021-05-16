class Roof {

    constructor(x,y, width, height){

       this.body =  Bodies.rectangle(x,y,300,20, {isStatic: true})
       this.width  = 300
       this.height  = 20  
       World.add(world, this.body)

    }

    display(){

        push()
        fill(128,128,128)
        rectMode(CENTER)
        rect(this.body.position.x , this.body.position.y, this.width , this.height)
        pop()

    }

}