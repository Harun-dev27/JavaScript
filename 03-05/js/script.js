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



const taxCalculator = (sum, percentage, currency, prefix) => {
    let tax = sum + (percentage / 100);
    let total = sum + tax;

    if(prefix) {
        console.log(`
            Sum before tax   : ${currency} ${sum}
            Tax percentage   : ${percentage}%
            Tax              : ${currency}${tax.toFixed(2)}
            Total            : ${currency}${total.toFixed(2)}
            `);
    } else {
        console.log(`
            Sum before tax   : ${sum}${currency}
            Tax percentage   : ${percentage}%
            Tax              : ${tax.toFixed(2)}${currency}
            Total            : ${total.toFixed(2)}${currency}
            `);
    }
    
};

taxCalculator(100, 20, "€", false);