# 🔐 Decrypt The Password

A simple yet engaging project that demonstrates password encryption and decryption techniques using **JavaScript**. This project is designed to help beginners understand foundational cryptographic concepts like the **Caesar Cipher** and basic transformation logic in a practical way.

---

## 🚀 Features

* 🔑 **Frontend-based login system**
* 🔄 **Custom encryption & decryption logic**
* 🧠 **Caesar Cipher implementation**
* 💡 **Clean and beginner-friendly code structure**
* 🎯 **Ideal for learning basic cybersecurity concepts**

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling
* **JavaScript** – Logic & encryption

---

## 📂 Project Structure

```
decrypt-the-password/
│── index.html        # Main login page
│── style.css         # Styling
│── script.js         # Encryption & login logic
│── README.md         # Documentation
```

---

## 🔍 How It Works

1. The user enters a password into the login field
2. The input is processed using an **encryption algorithm** (e.g., Caesar Cipher)
3. The encrypted result is compared against stored credentials
4. Based on the comparison:

   * ✅ **Match** → Access Granted
   * ❌ **Mismatch** → Access Denied

---

## 🧪 Example Encryption Logic

```javascript
// Caesar Cipher Example (+2 shift)
function encrypt(char) {
  let code = char.charCodeAt(0);
  return String.fromCharCode(((code - 97 + 2) % 26) + 97);
}
```

---

## ⚠️ Disclaimer

> 🚨 This project is intended **for educational purposes only**.
> It is **NOT secure** and should **NOT be used in real-world applications**.

---

## 📌 Future Improvements

* 🔐 Implement secure hashing (**SHA-256 / bcrypt**)
* 🌐 Add backend authentication (**Node.js / Firebase**)
* 🛡️ Improve overall security practices
* 🎨 Enhance UI/UX design

---

## 👨‍💻 Author

**Gowshik Balakumar**
🎯 Tech Explorer
💻 Cybersecurity Enthusiast

---

## ⭐ Support

If you found this project helpful:

* ⭐ Star the repository
* 🍴 Fork it
* 🚀 Share it with others

---

## 📢 Contribution

Contributions are welcome! Feel free to:

* Open issues
* Suggest improvements
* Submit pull requests

---

> 💡 *“Learning by building is the fastest way to grow in cybersecurity.”*
