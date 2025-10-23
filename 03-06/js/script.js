// const taxCalculator = () => {
//     let sum = 93.95;
//     let percentage = 18;
//     let tax = sum + (percentage / 100);
//     let total = sum + tax;
//     console.log(`
//         Sum before tax   : ${sum}
//         Tax percentage   : ${percentage}%
//         Tax              : ${tax.toFixed(2)}
//         Total            : ${total.toFixed(2)}
//         `);
// };

// taxCalculator();

const formatter = (local, currency, value) => {
    let formattedvalue = new Intl.NumberFormat(local, {
        style: "currency",
        currency: currency,
    }).format(value);
     return formattedvalue;
};

const taxCalculator = (sum, percentage, local, currency) => {
    let tax = sum + (percentage / 100);
    let total = sum + tax;

   
        console.log(`
            Sum before tax   : ${formatter(local, currency, sum)}
            Tax percentage   : ${percentage}%
            Tax              : ${formatter(local, currency, tax)}
            Total            : ${formatter(local, currency, total)}
            `);
    
};

taxCalculator(39.95, 18, "en-IN", "INR");