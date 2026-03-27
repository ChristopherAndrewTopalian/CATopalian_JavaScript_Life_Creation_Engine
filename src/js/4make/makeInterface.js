// makeInterface.js

function makeInterface()
{
    let titleOfApp = ce("a");
    titleOfApp.style.fontSize = '15px';
    titleOfApp.style.color = 'rgb(170, 170, 170)';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Life_Creation_Engine'
    titleOfApp.target = '_blank';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.textContent = ' CATopalian JavaScript Life Creation Engine';
    ba(titleOfApp);

    //-//

    let gameCanvas = ce('canvas');
    gameCanvas.id = 'gameCanvas';
    ba(gameCanvas);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

