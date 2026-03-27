// whenLoaded.js

function whenLoaded()
{
    makeInterface();

    canvas = document.getElementById("gameCanvas");

    ctx = canvas.getContext("2d");

    // get the pixel ratio of the current display (e.g., 2 for Retina/4K TVs)
    const dpr = window.devicePixelRatio || 1;

    // set the actual logical size of the game stage
    const STAGE_WIDTH = window.innerWidth;
    const STAGE_HEIGHT = window.innerHeight;

    // scale the canvas memory up to match the physical TV pixels
    canvas.width = STAGE_WIDTH * dpr;
    canvas.height = STAGE_HEIGHT * dpr;

    // use CSS to lock the visual size to the window
    canvas.style.width = STAGE_WIDTH + 'px';
    canvas.style.height = STAGE_HEIGHT + 'px';

    // tell the Canvas context to scale all our math up automatically!
    ctx.scale(dpr, dpr);

    // create some cats
    cats = [
        new Mammal("Mittens", "orange", 100, 200, 2),
        new Mammal("Shadow", "gray", 300, 150, 1.5),
        new Mammal("Snowball", "white", 500, 250, 2.5)
    ];

    //----//

    gameLoop();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

