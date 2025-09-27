let balance = 1000; // Starting balance
let currentInput = "";

const output = document.getElementById("output");
const history = document.getElementById("history-value");

function updateOutput() {
    output.textContent = currentInput || "0";
}

// Handle number button clicks
document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        currentInput += btn.id;
        updateOutput();
    });
});

// Deposit money
document.getElementById("deposit").addEventListener("click", () => {
    let amount = parseInt(currentInput);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        history.textContent = `Deposited ₹${amount}`;
        currentInput = "";
        updateOutput();
    }
});

// Withdraw money
document.getElementById("withdraw").addEventListener("click", () => {
    let amount = parseInt(currentInput);
    if (!isNaN(amount) && amount > 0) {
        if (amount <= balance) {
            balance -= amount;
            history.textContent = `Withdrew ₹${amount}`;
        } else {
            history.textContent = `❌ Not enough balance!`;
        }
        currentInput = "";
        updateOutput();
    }
});

// Show balance
document.getElementById("balance").addEventListener("click", () => {
    history.textContent = `Current Balance: ₹${balance}`;
});

// Reset account
document.getElementById("reset").addEventListener("click", () => {
    balance = 1000;
    currentInput = "";
    history.textContent = "🔄 Balance reset to ₹1000";
    updateOutput();
});

// Initialize display
updateOutput();
