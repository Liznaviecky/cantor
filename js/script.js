console.log("hejka");

let form = document.querySelector(".js-form");
let amountImput = document.querySelector(".js-amount");
let currencySelect = document.querySelector(".js-currency");
let exchangeOutput = document.querySelector(".js-exchange");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let zloty = amountImput.value;
    let currency = currencySelect.value;
    let rate;

    switch (currency) {
        case "GBP":
            rate = 5.30;
            break;
        case "EUR":
            rate = 4.70;
            break;
        case "USD":
            rate = 4.33;
            break;
        case "RMB":
            rate = 0.65;
            break;
    }

    result = zloty / rate

    exchangeOutput.innerHTML = `${zloty} PLN = ${result.toFixed(2)}${currency}`

    /* let result;
 
     switch (currency) {
         case "GBP":
             result = zloty / 5.30;
             break;
         case "EUR":
             result = zloty / 4.70;
             break;
         case "USD":
             result = zloty / 4.33;
             break;
         case "RMB":
             result = zloty / 0.65;
             break;
     };
 
     exchangeOutput.innerText = `${zloty} PLN = ${result.toFixed(2)}${currency}`*/
});

let bmiForm = document.querySelector(".js-bmiForm");
let heightImput = document.querySelector(".js-height");
let weightImput = document.querySelector(".js-weight");
let converterResult = document.querySelector(".js-result");

bmiForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let height = heightImput.value;
    let weight = weightImput.value;

    let result = weight / (height / 100) ** 2;

    converterResult.innerText = result.toFixed(2);
});