import { Game } from "./_game.js";


window.addEventListener('load', ()=>{
    const canvas = document.getElementById('canvas');
    canvas.width = 1280 || 5120;
    canvas.height = 576;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    const game = new Game(canvas);
    
    let timestart = 0, deltaTime = 0;
    function loop(timestamp){
        requestAnimationFrame(loop);

        deltaTime = timestamp - timestart;
        timestart = timestamp;
     
        game.render(ctx, deltaTime);
        game.update(deltaTime);
      
    }
    loop(0);
})