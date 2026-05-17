# Product-Mangment-System
A dynamic and responsive Product Management System (CRUDS) built with Vanilla JavaScript and HTML/CSS, featuring real-time local storage data persistence, price calculation, and bulk data management.
# Product Management System (CRUD Application)

A fully functional, client-side **Product Management System** designed to handle CRUD (Create, Read, Update, Delete) operations efficiently. This project showcases dynamic UI updates, strict data handling, and data persistence without any backend dependencies.


## ✨ Features

* **Data Persistence:** Uses Browser `localStorage` to save and retrieve product data instantly on page reload.
* **Real-time Calculations:** Dynamically calculates total price based on price, taxes, ads, and discounts with auto-updated UI feedback (color-coded indicators).
* **Mass Creation (Count):** Allows users to generate multiple instances of a product simultaneously using a custom count field.
* **Global Clear:** Features a dynamic "Delete All" button that appears only when data exists and wipes out the table safely.
* **Smooth UX:** Built-in auto-scroll and instant input clearing features after each successful action.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Logic:** Vanilla JavaScript (ES6+)
* **State Management:** Web Storage API (`localStorage`)

---

## 🧠 Key Learnings from this Project

1. **DOM Manipulation:** Deepened understanding of traversing and updating the DOM dynamically using template literals and strict ID targeting.
2. **State & Storage Synchronization:** Mastering the sequence of updating the local array before stringifying and writing to the storage API to prevent UI stutter.
3. **Debugging:** Gained heavy experience in tracing syntax errors, missing escape quotes, and `TypeError` events directly from the browser console.
