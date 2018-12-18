function calculateTip(tip1, tip2, tip3) {
    const bills = [tip1, tip2, tip3];
    const tips = bills.map(bill => {
        const regEx = new RegExp(/[^\d\.\,\s]+/g);
        const removeSign = parseFloat(bill.split(regEx).join(""));
        if (removeSign < 50) {
            return [...`$ ${Math.floor((bill = removeSign * 0.2))}`]
                .join("")
                .replace(/\s/g, "");
        } else if (removeSign >= 50 && removeSign <= 200) {
            return [...`$ ${Math.floor((bill = removeSign * 0.15))}`]
                .join("")
                .replace(/\s/g, "");
        } else {
            return [...`$ ${Math.floor((bill = removeSign * 0.1))}`]
                .join("")
                .replace(/\s/g, "");
        }
    });
    return tips;
}

function getBillWithTips(tips) {}

console.log(calculateTip("$124", "$48", "$268"));
