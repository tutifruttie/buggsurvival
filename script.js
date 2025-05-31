const arrowRight = document. getElementById("arrowRight")// constante aanmaken en naam geven en pakken we wat na de = komt en get element uit een id//
const arrowLeft = document.getElementById("arrowLeft")
const rups = document.getElementById ("rups")

arrowRight.addEventListener("click", moveRight)

arrowLeft.addEventListener("click", moveLeft)//het luistert naar de functie,dus er gebeurt iets

let posx = 0
let posy = 0

function moveRight() {
    posx += 3
    rups.style.transform = "translate(" + posx +"em, " + posy + ")"
}

function moveLeft() {
    posx -= 3
       rups.style.transform = "translate(" + posx +"em, " + posy + ")"

}
