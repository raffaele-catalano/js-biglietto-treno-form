let carrozzaAssegnata = Math.floor(Math.random() * 21);
console.log("carrozza", carrozzaAssegnata);

let codicePrenotazione = Math.floor(Math.random() * 1001) + 1000;
console.log("codice", codicePrenotazione);

// let vedoTesto = true;

const prezzoKm = 0.21;
const under18 = 20;
const over65 = 40;

const submit = document.getElementById('btnSend')
    // console.log(submit);

submit.addEventListener('click', function(){
    const firstName = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const distance = document.getElementById("distance").value;
    const discount = document.getElementById("ageSelect").value;

    let standardPrice = distance * prezzoKm;
    // console.log(standardPrice);

    if (discount === "minorenne") {
        finalPrice = standardPrice *= 1 - (under18 / 100);
        finalPrice = finalPrice.toFixed(2)
        console.log("prezzo scontato minorenne", finalPrice);
    }else if (discount === "over65") {
        finalPrice = standardPrice *= 1 - (over65 / 100);
        finalPrice = finalPrice.toFixed(2)
        console.log("prezzo scontato over65", finalPrice);
    }else {
        finalPrice = standardPrice;
        finalPrice = finalPrice.toFixed(2)
        console.log("prezzo standard",finalPrice);
    }

    // const hiding = document.querySelector("wrapper");
    // hiding.classList.remove("hide");
    

    const fullnameOutput = document.getElementById('nome_completo');
    const fullName = "Cliente:" + " " + firstName + " " + surname;
    fullnameOutput.innerHTML = fullName;

    const ultimatePrice = document.getElementById('prezzo_finale');
    const ultimateFinalPrice = "Prezzo Finale:" + " " + finalPrice + " " + "&euro;"
    ultimatePrice.innerHTML = ultimateFinalPrice;


    // else{
    // hiding.classList.remove('hide');
    // }
    // vedoTesto = !vedoTesto;

    document.getElementById('numero_carrozza').innerHTML = "Carrozza Assegnata:" + " " + carrozzaAssegnata;
    document.getElementById('codice_prenotazione').innerHTML = "Codice Prenotazione:" + " " + codicePrenotazione;
})

// function myFunction() {
//     document.getElementById("info_ticket").reset();
// }







