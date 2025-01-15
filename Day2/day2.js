function debitMoney(accBal,withdrawlAmount)
{
    let newAccBal = accBal - withdrawlAmount;
    if (newAccBal < 0) {
        console.log("Insufficient balance. Transaction failed.");
    } else {
        console.log(`Decremented balance: ${newAccBal}`);
    }
}
let Name = "Ayush kumar";
let accBal = 1000000;
let accType = "savings";
const accNum = 12216635;
let withdrawlAmount = 100000;

console.log("your current account balance is: " + accBal)
debitMoney(accBal,withdrawlAmount)