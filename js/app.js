console.log ("works!")
const kmCost = 0.21
let distance = document.getElementById("distance").value;

let bottone =document.getElementById("genera");

bottone.addEventListener ( "click",

    function myFunction() {
        let costo = kmCost * distance
        console.log (costo)
    }

)

let costo = document.getElementById("costo");
costo.innerHTML = 