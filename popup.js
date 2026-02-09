document.getElementById("generate").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const result = document.getElementById("result");

    if (!length || length < 4) {
        result.value = "Length must be 4+";
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
    result.value = password;

    result.addEventListener("click", () => {
        if (result.value) {
            navigator.clipboard.writeText(result.value);
            result.value = "Copied!";
            setTimeout(() => {
                result.value = password;
            }, 800);
        }
    });

});
