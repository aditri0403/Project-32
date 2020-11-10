class block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':0.1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }

      score(){
        if(this.visibility<0 && this.visibility>-105){
          count++;
        }
      }

      display(){
        fill("yellow");
        //var angle = this.body.angle;
        //rotate(angle);
        console.log(this.body.speed);
        if(this.body.speed < 3){
          rectMode(CENTER);
          rect(this.body.position.x, this.body.position.y,this.width,this.height);
        }
        else{
            World.remove(world,this.body);
            push()
            this.visibilty = this.visibilty-5;
            tint(255,this.visibilty);
            pop()
        }
        
    }
};