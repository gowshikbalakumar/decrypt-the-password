const USER = "leo";

// 🔐 Paste your generated hash here
const STORED_HASH = "365a82a93c04a9c25f165ca421670dd9d1446bf35fbfcf740697324d45066fd9";

const SALT = "tuxors_lab";

// 🔐 Hash function
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + SALT);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ⭐ Optional: mask password
function maskInput(input) {
    return "*".repeat(input.length);
}

// 🚀 Login function
async function login() {
    const user = document.getElementById("username").value;
    const passField = document.getElementById("password");

    const realPass = passField.value;

    // Mask password visually
    passField.value = maskInput(realPass);

    // Hash input
    const hashedInput = await hashPassword(realPass);

    // Compare
    if (user === USER && hashedInput === STORED_HASH) {
        document.body.innerHTML = `
        <h1 style="color:#00ff88;text-align:center;">
        🔓 ACCESS GRANTED<br>
        SECURE VAULT UNLOCKED
        </h1>`;
    } else {
        document.getElementById("status").innerHTML = `
        ❌ ACCESS DENIED<br>
        🔴 Intrusion attempt detected`;
    }
}
