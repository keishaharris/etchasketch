//Select element from html(canvas and shake)
const canvas = document.getElementById("etch-a-sketch");
const ctx = canvas.getContext("2d");
const shake = document.getElementsByClassName("shake");


//SetUp our canvas for drawing 

const {width} = canvas;
const {height} = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
const velocity = 10;

const gradient = ctx.createLinearGradient(x,y, 0, 200);
gradient.addColorStop(0, "magenta");
gradient.addColorStop(0.2, "blue");
gradient.addColorStop(0.4, "green");
gradient.addColorStop(0.6, "yellow");
gradient.addColorStop(0.8, "orange");
gradient.addColorStop(1, "red");

ctx.strokeStyle = gradient;

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = "10";

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();

//draw onto the Canvas 
function draw({ key }) {
    ctx.beginPath();
    ctx.moveTo(x,y)
  
    switch(key) {
        case 'ArrowUp':
            y -= velocity;
            break;
        case 'ArrowRight':
            x += velocity;
            break;
        case 'ArrowDown':
            y += velocity;
            break;
        case 'ArrowLeft':
            x -= velocity;
            break;
        default:
            break;
    }
    ctx.lineTo(x,y);
    ctx.stroke();
;
}
//*Write handler for the Arrow Keys
function handleKey(e) {
    if (e.key.includes('Arrow')){
        e.preventDefault();
        draw({key: e.key});
    }
}

function reset() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function(){
        canvas.classList.remove('shake');
    }, { once: true});
    
}

//Reset the canvas when prompted

shake[0].addEventListener("click", reset);
//listen for keys

window.addEventListener('keydown', handleKey);


