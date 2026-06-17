function withdrawMoney(amount) {
    let balance = 5000; 

    console.log("Processing withdrawal of $" + amount + "...");

    if (amount > balance) {
        throw new Error("Insufficient Balance! You cannot withdraw more than $" + balance);
    }

    console.log("Success! Please collect your cash: $" + amount);
}

try {
    withdrawMoney(7000); 
} catch (error) {
    console.log("🚨 Bank Alert: " + error.message);
}

console.log("Thank you for using our ATM.");
