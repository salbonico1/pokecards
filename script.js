window.onload = function() {
    var pack = document.getElementById("pokemon-pack");
    pack.addEventListener("click" , openPack);
}

function openPack(){
    // alert("card pack open");
    for (let i =0; i < 11; i++){
        let cardDiv = document.createElement("div");
        cardDiv.classList.add("pokemon-card");

        let cardImg = document.createElement("img");
        cardImg.id = i;
        cardImg.src = "./pokemon-cards/base set (" + "10" + ").jpg";

        cardDiv.appendChild(cardImg);
        document.getElementById("pokemon-cards-opened").appendChild(cardDiv);
    }
}