const generateBtn = document.getElementById("generate");
const lengthInput = document.getElementById("length");
const resultInput = document.getElementById("result");

const closeBtn = document.getElementById("closeBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

let lastPassword = "";

generateBtn.addEventListener("click", () => {
    const length = parseInt(lengthInput.value);

    if (!length || length < 4) {
        resultInput.value = "Length must be 4+";
        return;
    }

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()_+";
    const all = letters + digits + symbols;

    let password = "";
    password += letters[Math.floor(Math.random() * letters.length)];
    password += digits[Math.floor(Math.random() * digits.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = 3; i < length; i++) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    password = password.split("").sort(() => 0.5 - Math.random()).join("");

    lastPassword = password;
    resultInput.value = password;
});

/* macOS-style buttons behavior */

closeBtn.addEventListener("click", () => {
    lengthInput.value = "";
    resultInput.value = "";
    lastPassword = "";
});

resetBtn.addEventListener("click", () => {
    lengthInput.value = "";
});

copyBtn.addEventListener("click", () => {
    if (lastPassword) {
        navigator.clipboard.writeText(lastPassword);
        resultInput.value = "Copied!";
        setTimeout(() => {
            resultInput.value = lastPassword;
        }, 800);
    }
});