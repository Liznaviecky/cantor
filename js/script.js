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
        const result = calculateResult(currency, zloty);

        updateResultText(zloty, result, currency);  
    };

    const calculateBmiResult = (weight, height) => {
       return weight / (height / 100) ** 2;
    };

    const updateBmiResultText = (result) => {
        const converterResult = document.querySelector(".js-result");
        converterResult.innerText = `${result.toFixed(2)} - ponadprzeciętna masa mięśniowa podnosi wskaźnik BMI, co nie jest nadwagą`;
    };

    const bmiOutput = (event) => {
        event.preventDefault();
        const heightImput = document.querySelector(".js-height");
        const weightImput = document.querySelector(".js-weight");
       
        const height = heightImput.value;
        const weight = weightImput.value;
        const result = calculateBmiResult(weight, height);

        updateBmiResultText(result);
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