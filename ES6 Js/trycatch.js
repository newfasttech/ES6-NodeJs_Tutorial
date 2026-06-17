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



// console.log("Program started...");

// try {
//     // 1. JavaScript will 'Try' to execute this code
//     downloadData(); // Supposing this function does not exist (Causes an Error)
    
// } catch (error) {
//     // 2. If any error occurs above, instead of crashing, the code directly jumps here
//     console.log(" Unexpected Error Occurred: " + error.message);
// }

// // 3. See the magic! This line runs successfully and the program does not stop.
// console.log("Program did not crash. This important next line executed successfully!");
