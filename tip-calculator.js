const regEx = new RegExp(/[^\d\.\,\s]+/g);
const bills = ["$124", "$48", "$268"];
const smallTip = 0.1;
const mediumTip = 0.15;
const largeTip = 0.2;

function calculateTip() {
    const tips = bills.map(bill => {
        const removeSignBill = parseFloat(bill.split(regEx).join(""));
        if (removeSignBill < 50) {
            return [...`$ ${Math.floor((bill = removeSignBill * 0.2))}`]
                .join("")
                .replace(/\s/g, "");
        } else if (removeSignBill >= 50 && removeSignBill <= 200) {
            return [...`$ ${Math.floor((bill = removeSignBill * 0.15))}`]
                .join("")
                .replace(/\s/g, "");
        } else {
            return [...`$ ${Math.floor((bill = removeSignBill * 0.1))}`]
                .join("")
                .replace(/\s/g, "");
        }
    });
    return tips;
}

const tips = calculateTip();
const fullBill = fullBillCalc(...tips);

function fullBillCalc(tips) {
    const fullBill = bills.map(bill => {
        const removeSignBill = splitOnCurrency(bill);
        const removeSignTips = splitOnCurrency(tips);
        const combinedBill = parseFloat(removeSignBill + removeSignTips);
        return combinedBill.toString();
    });

    const fullBillSigns = fullBill.map(bill => `$${bill}`);

    return fullBillSigns;
}

function splitOnCurrency(itemRemove) {
    return parseFloat(itemRemove.split(regEx).join(""));
}

console.log(tips);
console.log(fullBill);
