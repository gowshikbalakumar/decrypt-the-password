const USER = "leo";
const SECRET_SIGNATURE = 799;

function encrypt9(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + 9) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + 9) % 26) + 97);
            }
        }

        result += char;
    }

    return result;
}


function generateSignature(text) {
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        sum += text.charCodeAt(i);
    }

    return sum;
}


function maskInput(input) {
    return "*".repeat(input.length);
}

function login() {
    const user = document.getElementById("username").value;
    let passField = document.getElementById("password");

    const realPass = passField.value;

    // Show only stars
    passField.value = maskInput(realPass);

    // Step 1: encrypt
    const encrypted = encrypt9(realPass);

    // Step 2: generate signature
    const signature = generateSignature(encrypted);

    // Step 3: compare
    if (user === USER && signature === SECRET_SIGNATURE) {
        document.body.innerHTML = `
        <h1 style="color:#ff0033;text-align:center;">
        🔓 ACCESS GRANTED<br>
        RED VAULT UNLOCKED
        </h1>`;
    } else {
        document.getElementById("status").innerHTML = `
        ❌ ACCESS DENIED<br>
        🔴 Intrusion attempt detected`;
    }
}