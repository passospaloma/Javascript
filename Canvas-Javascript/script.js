var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");


/*canvas.style.border = "2px solid black";
canvas.style.backgroundColor = "black";
document.body.style.margin = 0;*/

//creating a class rectangle

class Rectangle {
    constructor(x, y, width, height, color, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speed = speed;

        //velocity
        //between -0.5 and 0.5
        this.vx = (Math.random() - 0.5) * this.speed;
        this.vy = (Math.random() - 0.5) * this.speed;
    }
    render() {
        context.fillStyle = this.color;
        context.fill();
        context.lineWidth = 1;

        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height);
        context.stroke();
        
    }
    //assign x and y coordinates
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
    movingRectangle(ax = 0, ay = 0) {
        this.vx += ax;
        this.vy += ay;
        this.x += this.vx;
        this.y += this.vy;

    }
    detectWallCollision() {
        //check for x coordinates
        //collision with the left and right wall
        if (this.x < 0 + this.width || this.x > canvas.width - this.width) {
            this.vx = -this.vx;
        }
        //check for y coordinates
        //collision with top and bottom wall
        if (this.y < 0 + this.height || this.y > canvas.height - this.width) {
            this.vy = -this.vy;
        }

    }
}
let rectangle = new Rectangle(0, 750, 1024, 20, "yellow");
let rectangle1 = new Rectangle(0, 0, 1024, 20, "yellow");
let rectangle2 = new Rectangle(0, 0, 20, 768, "yellow");
let rectangle3 = new Rectangle(1004, 0, 20, 768, "yellow");
let rectangles = [];

let numberOfRectangles = 40;

for (let i = 0; i < numberOfRectangles; i++) {
    let x = Math.floor(Math.random() * canvas.width);
    let y = Math.floor(Math.random() * canvas.height);
    let width = Math.floor(Math.random() * 100);
    let height = Math.floor(Math.random() * 50);

    let color = `rgb(
${Math.floor(Math.random()*255)},
${Math.floor(Math.random()*255)},
${Math.floor(Math.random()*255)})`;
    let speed = 5;
    rectangles.push(new Rectangle(x, y, width, height, color, speed))
}

//Event Handling
let mouseX = canvas.width * 2;
let mouseY = canvas.height * 2;
canvas.addEventListener("mousemove", function (event) {
let canvasRect = canvas.getBoundingClientRect();

    mouseX = event.clientX;
    mouseY = event.clientY;
    //console.log(x,y);
    //scale parameters

   let scaleX = canvas.width/canvasRect.width;
   let scaleY = canvas.height/canvasRect.height;

   mouseX*= scaleX;
   mouseY*= scaleY;

});

function mouseIsInsideRectangle(mouseX, mouseY, width) {
    var dx = mouseX - cx;
    var dy = mouseY - cy;
    return (dx * dx + dy * dy <= width * width);
}
canvas.addEventListener('mousedown', function(evt) {

    mousePos = getMousePos(canvas, evt);
    var distance = Math.sqrt( Math.pow((mousePos.x - 100), 2) + Math.pow((mousePos.y - 300), 2) ) ;
}, false);   
let movingRectangle = new Rectangle(mouseX, mouseY, 50, 50, "pink");


main();

function main() {
    startGame();
}

function startGame() {
    updateGame();
    window.requestAnimationFrame(drawGame);
}

function updateGame() {
    // GAME AND ANIMATION LOGIC GOES HERE
    movingRectangle.moveTo(mouseX, mouseY);

    //make the rectangles move
    for (let i = 0; i < numberOfRectangles; i++) {
        //Euclidean distance for moving rectangle
        let dx = rectangles[i].x - movingRectangle.x;
        let dy = rectangles[i].y - movingRectangle.y;

        let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        let widthSum = rectangles[i].width + movingRectangle.width;

        if (distance <= widthSum) {
            // some logic
            rectangles[i].color = "blue";
            rectangles[i].vx = -rectangles[i].vx;
            rectangles[i].vy = -rectangles[i].vy;

        }
        let f = 100 / Math.pow(distance, 2);
        let fx = f * (dx / distance);
        let fy = f * (dy / distance);


        rectangles[i].movingRectangle(fx, fy);
        rectangles[i].detectWallCollision();
    }
    // CHANGE THE NUMBER OF MILLISECONDS TO ADJUST FRAME RATE
    window.setTimeout(updateGame, 50);
}

function drawGame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // RENDERING HAPPENS HERE
    rectangle.render();
    context.fill();
    rectangle1.render();
    context.fill();
    rectangle2.render();
    context.fill();
    rectangle3.render();
    context.fill();

    for (let i = 0; i < numberOfRectangles; i++) {
        rectangles[i].render();
    }
    movingRectangle.render();
    window.requestAnimationFrame(drawGame);
}