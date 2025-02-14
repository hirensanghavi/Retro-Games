window.requestAnimFrame = (function(){ //backward compatabilty, default to 60 fps if none are compatible
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (/* function */ callback, /* DOM element */ element)
        {
            window.setTimeout(callback,1000/60);
        };
})();


