class Timer
{
    constructor()
    {
        this.gameTime = 0;
        this.maxStep = 0.05;
        this.lastTimeStamp = 0;
    };
    tick()
    {
        var current = Date.now();
        var delta = (current-this.lastTimeStamp)/1000;
        this.lastTimeStamp = current;

        var gameDelta = Math.min(delta,this.maxStep);
        this.gameTime += gameDelta;
        return gameDelta;
    }
}