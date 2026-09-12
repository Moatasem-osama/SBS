# 📋 Virtual Event Registration Form - SBS

A modern, responsive **Virtual Event Registration Form** built for **Shabab Bitsaad Shabab (SBS)**. Designed with UI/UX best practices and powered by a **real serverless Backend** using **Google Apps Script & Google Sheets** to receive and store participant submissions in real-time.

---

## ✨ Features

- 🎨 **Modern UI/UX:** Clean, intuitive, and fully responsive card layout.
- ⚡ **Real Backend Integration:** Direct API connection between the HTML form and Google Apps Script to persist data directly to Google Sheets.
- 🎯 **Event Selection:** Dropdown (`<select>`) enabling users to select their preferred event or session.
- 🔄 **Interactive Feedback:** Dynamic button loading states, immediate success notifications, and automatic form resets.
- 🛡️ **CORS Handling:** Seamless request handling using `no-cors` mode to bypass browser cross-origin policy restrictions.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Font Awesome, Cairo Font
- **Backend / Database:** Google Apps Script, Google Sheets API

---

## 📂 Project Structure

```text
├── index.html        # Form structure & markup
├── style.css         # Styling & visual layout
├── main.js           # Form submit logic & API fetch requests
└── imgs/
    └── sbs-logo.webp # Event/Organization logo
