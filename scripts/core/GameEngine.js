class GameEngine
{
    constructor()
    {
        this.entities = [];
        this.ctx = null;
        this.surfaceWidth = null;
        this.surfaceHeight = null;
       
        //inputs
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    };

    

    init(ctx)//call post loading
    {
        this.ctx = ctx;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.startInput();
        this.timer = new Timer();
    };

    start()
    {
        
        var entitiesCount = this.entities.length;

        for (var i = 0; i < entitiesCount; i++)
        {
            var entity = this.entities[i];

            
            entity.start();    
            
        }
        var that = this;
        (function gameLoop(){
            that.loop();
            requestAnimFrame(gameLoop, that.ctx.canvas);
        })();
    };

    addEntity(entity)
    {
        
        entity.removeFromWorld = false;
        this.entities.push(entity);
        
    }

    loop()
    {
        
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
        
        
    }

    update()
    {
        var entitiesCount = this.entities.length;

        for (var i = 0; i < entitiesCount; i++)
        {
            var entity = this.entities[i];

            if(!entity.removeFromWorld)
            {
                entity.update();    
            }
        }
        for (var i=entitiesCount-1; i>=0; i--)
        {
            
            if(this.entities[i].removeFromWorld)
            {
                this.entities.splice(i,1);
            }
        }
    };

    draw()
    {
        this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height);
        this.ctx.save();
        for(var i = 0; i< this.entities.length;i++)
        {
            this.entities[i].draw(this.ctx);
        }
        if(this.entities[0].dead)
        {
            
            this.ctx.fillStyle= "white";
            this.ctx.font = "italic bold 100px Tahoma";
            this.ctx.fillText("You Died",80,80);
            this.ctx.fillText("Score: "+Score,80,180);
        
        }
    }
    startInput()
    {
        var that = this;
        this.ctx.canvas.addEventListener("keydown", function(e){
             
            switch(e.code)
            {
                case "ArrowLeft":
                case "KeyA":
                    that.left = true;
                    break
                case "ArrowRight":
                case "KeyD":
                    that.right = true;
                    break
                case "ArrowUp":
                case "KeyW":
                    that.up = true;
                    break
                case "ArrowDown":
                case "KeyS":
                    that.down = true;
                    break;
            }
        }, false);
        this.ctx.canvas.addEventListener("keyup", function(e){
            switch(e.code)
            {
                case "ArrowLeft":
                case "KeyA":
                    that.left = false;
                    break
                case "ArrowRight":
                case "KeyD":
                    that.right = false;
                    break
                case "ArrowUp":
                case "KeyW":
                    that.up = false;
                    break
                case "ArrowDown":
                case "KeyS":
                    that.down = false;
                    break;
            }
        }, false);
    }
}