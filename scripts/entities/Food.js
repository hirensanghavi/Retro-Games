class Food
{
    
    constructor(x,y,game)
    {
        Object.assign(this,{x,y,game});
    }
    start()
    {

    }
    update()
    {

    }
    draw(ctx)
    {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x,this.y,SNAKERADIUS,0,2*Math.PI);
        ctx.stroke();
        ctx.strokeStyle = "black";
    }
    kill()
    {
        this.summonNewFruit();
        this.removeFromWorld = true;
    }

    summonNewFruit()
    {
        while(true)
        {
            var randomx = Math.floor(Math.random() * 100)%20;
            var randomy = Math.floor(Math.random() * 100)%20;
            
            if(GRID[randomx][randomy] === 0)
            {
                var posx = (randomx*2 + 1)*SNAKERADIUS;
                var posy = (randomy*2 + 1)*SNAKERADIUS;
                this.game.addEntity(new Food(posx,posy,this.game));
                break;
            }
            else
            {
                console.log(randomx);
                console.log(randomy);
            }
        }
        
        
    }
}