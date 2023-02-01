console.log ("works!")
const kmCost = 0.21
let bottone = document.getElementById("genera");

bottone.addEventListener ( "click",

    function myFunction() {
        let nome = document.getElementById("nome").value;
        let distance = document.getElementById("distance").value;
        let costo = kmCost * distance
        console.log (costo)
        const costoFinale = document.getElementById("costo");   
        costoFinale.innerHTML = costo + nome
    }

)
