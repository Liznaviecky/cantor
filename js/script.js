{
    const welcome = () => {
        console.log("hejka. Ten kod jest już w repozytorium Git.");
    };

    const calculateResult = (currency, zloty) => {
        switch (currency) {
            case "GBP":
                return zloty / 5.30;    
            case "EUR":
                return zloty / 4.70;
            case "USD":
                return zloty / 4.33;
            case "RMB":
                return zloty / 0.65;
        };
    };

    const updateResultText = (zloty, result, currency) => {
        const exchangeOutput = document.querySelector(".js-exchange");

        exchangeOutput.innerText = `${zloty} PLN = ${result.toFixed(2)}${currency}`
    };

    const onExchangeOutput = (event) => {
        event.preventDefault();
        const amountImput = document.querySelector(".js-amount");
        const currencySelect = document.querySelector(".js-currency");
        const zloty = amountImput.value;
        const currency = currencySelect.value;
        /*let rate;

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

        exchangeOutput.innerHTML = `${zloty} PLN = ${result.toFixed(2)}${currency}`*/

        const result = calculateResult(currency, zloty);

       
        updateResultText(zloty, result, currency);
        
    };

    const bmiOutput = (event) => {
        event.preventDefault();
        const heightImput = document.querySelector(".js-height");
        const weightImput = document.querySelector(".js-weight");
        const converterResult = document.querySelector(".js-result");
        const height = heightImput.value;
        const weight = weightImput.value;
        const result = weight / (height / 100) ** 2;

        converterResult.innerText = `${result.toFixed(2)} - ponadprzeciętna masa mięśniowa podnosi wskaźnik BMI, co nie jest nadwagą`;
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        const bmiForm = document.querySelector(".js-bmiForm");

        form.addEventListener("submit", onExchangeOutput);
        bmiForm.addEventListener("submit", bmiOutput);

        welcome();
    };

    init();
};