// gameLoop.js

function gameLoop()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < cats.length; i++)
    {
        cats[i].update();
        cats[i].draw(ctx);
    }

    requestAnimationFrame(gameLoop);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

