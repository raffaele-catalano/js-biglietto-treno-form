const prezzoKm = 0.21;
const under18 = 20;
const over65 = 40;

const submit = document.getElementById('btnSend')
    // console.log(submit);

submit.addEventListener('click', function(){
    const firstName = document.getElementById("name").value;
    // const surname = document.getElementById("surname").value;
    const distance = document.getElementById("distance").value;
    const discount = document.getElementById("ageSelect").value;

    let standardPrice = distance * prezzoKm;
    // console.log(standardPrice);

    if (discount === "minorenne") {
        finalPrice = standardPrice *= 1 - (under18 / 100);
        finalPrice = finalPrice.toFixed(2)
        console.log(finalPrice);
        console.log("ciao min");
    }else if (discount === "over65") {
        finalPrice = standardPrice *= 1 - (over65 / 100);
        finalPrice = finalPrice.toFixed(2)
        console.log(finalPrice);
        console.log("ciao over");
    }else {
        finalPrice = standardPrice;
        finalPrice = finalPrice.toFixed(2)
        console.log(finalPrice);
        console.log("ciao standard");
    }
        // console.log(firstName, surname, distance, discount);
})

// finalPrice = finalPrice.toFixed(2)







