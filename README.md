<div align="center">

# 💱 Currency Converter

**Convert between 160+ world currencies using live exchange rates.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_App-16a34a?style=for-the-badge&logo=vercel&logoColor=white)](https://exchanger-beige.vercel.app)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

<!-- Add a screenshot: save it as screenshot.png in the repo, then uncomment the line below -->
<!-- ![Currency Converter screenshot](screenshot.png) -->

---

## ✨ Features

| | Feature | Details |
|---|---|---|
| 💰 | **160+ currencies** | Dropdowns are filled automatically from the exchange rate API |
| 📈 | **Live rates** | Fetches the latest rate every time you convert |
| 🏳️ | **Country flags** | Shows the flag for the selected currency, with fixes for shared currencies like the euro |
| 🔄 | **Swap button** | Flip the two currencies, and their flags, in one click |
| 🎯 | **Smart defaults** | Starts as USD → EGP, and uses an amount of 1 if the field is empty |
| 🧮 | **Clear result** | Shows the answer rounded to 2 decimals, like `10 USD = 485.20 EGP` |
| 🛟 | **Error handling** | Friendly message if the conversion fails |
| 🌙 | **Dark interface** | Built with Bootstrap, responsive on desktop and mobile |
| 📦 | **Zero setup** | No build step and no framework to install |

---

## 🛠️ Built with

- 🟧 **HTML, CSS and vanilla JavaScript**
- 🟪 [**Bootstrap**](https://getbootstrap.com/) for layout and styling
- 🎨 [**Font Awesome**](https://fontawesome.com/) for icons
- 💱 [**ExchangeRate-API**](https://www.exchangerate-api.com/) for live exchange rates
- 🚩 [**Flags API**](https://flagsapi.com/) for country flags

---

## 📁 Project structure

```
exchanger/
├── 📂 css/          Stylesheets (Bootstrap, Font Awesome, custom)
├── 📂 js/           App logic
├── 📂 media/        Images
├── 📂 webfonts/     Font Awesome font files
└── 📄 index.html    Page markup
```

---

## 🚀 Getting started

**1. Clone the repository**

```bash
git clone https://github.com/adamelhessy/exchanger.git
cd exchanger
```

**2. Add your API key**

Get a free key from [ExchangeRate-API](https://www.exchangerate-api.com/) and put it in the `CURRENCY_API` URL in `js/`.

**3. Open the app**

Open `index.html` in your browser, or use the Live Server extension in VS Code.

> [!NOTE]
> An internet connection is required, because rates and flags are loaded from external APIs.

---

## 🧠 How it works

1. 📥 On load, the app requests the USD rates and uses the list of currency codes to fill both dropdowns.
2. 🚩 Each currency code is turned into a country code to load its flag. A few special cases (like `EUR`) are handled in an `exceptions` object.
3. 🖱️ When you click **Convert**, the app requests the latest rates for the "from" currency.
4. 🧮 It multiplies your amount by the rate for the "to" currency and displays the result.
5. 🔄 The swap button exchanges the two currencies and their flags.

---

## ⚠️ Limitations

> [!WARNING]
> The free ExchangeRate-API plan has a monthly request limit, and each conversion uses one request.

- A few currencies, like `XDR`, aren't tied to a single country, so they may not have a flag.
- Rates are updated by the API on a schedule, so they may not match the exact live market rate.

---

<div align="center">

Made with ❤️ by [adamelhessy](https://github.com/adamelhessy)

</div>
