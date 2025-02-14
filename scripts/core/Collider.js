class CircleCollider
{
    constructor(x,y,r)
    {
        Object.assign(this,{x,y,r});
    };

    CheckCollision(oth)
    {
        if(oth instanceof CircleCollider)
        {
            return (Math.sqrt((oth.x-this.x)**2 + (oth.y-this.y)**2) < oth.r+this.r)
        }
    }
}

