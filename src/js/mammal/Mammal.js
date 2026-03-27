// Mammal.js

class Mammal
{
    constructor(name, color, x, y, speed)
    {
        this.name = name;
        this.color = color;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = 30;

        // random initial direction
        this.dx = (Math.random() - 0.5) * this.speed;
        this.dy = (Math.random() - 0.5) * this.speed;
        this.directionTimer = 0;
    }

    update()
    {
        // smooth wandering movement
        this.x += this.dx;
        this.y += this.dy;

        // bounce off walls
        if (this.x < 0 || this.x > 570)
        {
            this.dx *= -1;
        }
        if (this.y < 0 || this.y > 370)
        {
            this.dy *= -1;
        }

        // every ~60 frames, change direction
        this.directionTimer++;

        if (this.directionTimer > 60)
        {
            this.dx = (Math.random() - 0.5) * this.speed;
            this.dy = (Math.random() - 0.5) * this.speed;
            this.directionTimer = 0;
        }
    }

    draw(ctx)
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.fill();

        // draw name label
        ctx.fillStyle = "white";
        ctx.font = "12px Arial";

        ctx.fillText(this.name, this.x - this.size / 2, this.y - this.size / 2 - 5);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

