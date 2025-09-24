# Modern JavaScript Real-Time Clock Widget

A lightweight, real-time clock and date widget for web pages. This project serves as a case study in writing clean, efficient, and modern vanilla JavaScript. It demonstrates best practices for timers, internationalization, and code structure in a simple, practical application.

---

## Screenshots

<table>
  <tr>
    <td><img src="https://github.com/onurmertanarat/DateTime/blob/main/assets/datetime-screenshot-1.PNG" width="100%"></td>
    <td><img src="https://github.com/onurmertanarat/DateTime/blob/main/assets/datetime-screenshot-2.PNG" width="100%"></td>
  </tr>
</table>

---

## Technical Features

This is not just a simple clock; it was intentionally built using modern JavaScript best practices:

* **Efficient Timer Loop:** Uses `setInterval` for periodic updates every second. This is the correct approach for a clock as it avoids the timing "drift" that can occur with recursive `setTimeout` calls.
* **Modern Internationalization (i18n):** Instead of hardcoding day and month names in a specific language, the widget uses the built-in `Intl.DateTimeFormat` and `toLocaleTimeString()` APIs. This allows the date and time to be displayed in any language or locale (e.g., `'tr-TR'`, `'en-US'`) with a single line change, making the code highly reusable and professional.
* **Global Scope Protection:** The entire script is encapsulated in an Immediately Invoked Function Expression (IIFE) to prevent polluting the global namespace, avoiding potential conflicts with other scripts.
* **Optimized DOM Manipulation:** DOM element references are cached in constants at the start of the script rather than being queried inside the loop. `textContent` is used instead of `innerHTML` for better performance and security when inserting text.

---

## Technology Stack

* Vanilla JavaScript (ES6+)
* HTML5
* CSS3

---

## Setup and Usage

### Setup

No build step or external dependencies are required. Simply clone or download the repository.

### Usage

Open the `index.html` file in any modern web browser. The widget is self-contained and will start automatically, positioning itself in the top-right corner of the page.

---

## Contact

Onur Mert Anarat

[linkedin.com/in/onurmertanarat](https://www.linkedin.com/in/onurmertanarat)
