class Body
{
    constructor(x,y,prev,game,counter)
    {
        Object.assign(this,{prev,counter});
        this.game = game;
        this.x = (x*2 + 1)*SNAKERADIUS;
        this.y = (y*2 + 1)*SNAKERADIUS;;
        GRID[x][y] = 1;
        this.dead = false;

    }

    update()
    {
        if (!this.dead)
        {
            if(this.counter == UPDATES)
        {
            this.oldx = this.x;
            this.oldy = this.y
            this.x = this.prev.oldx
            this.y = this.prev.oldy;

            this.counter = 0;
        }
        this.counter += 1
        }
        

        
    }
    draw(ctx)
    {

        ctx.fillStyle = "hsl(206 100% 54%)";
        ctx.fillRect(this.x-SNAKERADIUS+2.5,this.y-SNAKERADIUS+2.5,2*SNAKERADIUS-5,2*SNAKERADIUS-5);
    }


    createSnake()
    {
        var newposx =((this.oldx/SNAKERADIUS)-1)/2;   
        var newposy =((this.oldy/SNAKERADIUS)-1)/2;   
        var newBody = new Body(newposx,newposy,this,this.game,this.counter);
        this.game.addEntity(newBody);
        return newBody;
        
    }
    kill()
    {
        this.dead =true;
        if(!this.prev.dead)
        {
            this.prev.kill();
        }
        
    }

}