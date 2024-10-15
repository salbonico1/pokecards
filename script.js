window.onload = function() {
    var pack = document.getElementById("pokemon-pack");
    pack.addEventListener("click" , openPack);
}

function randomNumber(min, max){
    return Math.ceil(Math.random() * (max-min) + min);
}


function openPack(){
    // alert("card pack open"); kennyyipcoding

    let cardsOpened = document.getElementById("pokemon-cards-opened");
    while (cardsOpened.firstChild) {
        cardsOpened.firstChild.remove();
    }

    for (let i =0; i < 11; i++){
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("pokemon-card");

        let cardImg = document.createElement("img");
        cardImg.id = i;

        let num = 1;
        if (i == 10){
            num = randomNumber(1,16);
        }
        else {
            num = randomNumber(17,102);
        }


        cardImg.src = "./pokemon-cards/base set (" + num.toString() + ").jpg";

        cardDiv.appendChild(cardImg);
        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
    }
}

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.src = "./pokemon-cards/base set pack.png"; 

image.onload = () => {
    ctx.drawImage(image, 0, 0);

    let tearPath = [];
    let isDragging = false;

    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        tearPath.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop });
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            tearPath.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop });
            drawTear();
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDragging = false;
        tearPath = [];
    });

    function drawTear() {
        ctx.drawImage(image, 0, 0);
        ctx.beginPath();
        ctx.moveTo(tearPath[0].x, tearPath[0].y);
        for (let i = 1; i < tearPath.length; i++) {
            ctx.lineTo(tearPath[i].x, tearPath[i].y);
        }
        ctx.closePath();
        ctx.clip();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};