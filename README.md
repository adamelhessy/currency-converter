# 💱 Exchanger

A small, clean currency converter web app built with plain HTML, CSS, and JavaScript. Pick an amount, choose two currencies, and get the converted value instantly.

**🔗 Live demo:** [exchanger-beige.vercel.app](https://exchanger-beige.vercel.app)

---

## Features

- Convert an amount from one currency to another
- Dropdown lists for the "from" and "to" currencies, each with a flag/icon preview
- Swap button to quickly reverse the two currencies
- Defaults to an amount of `1` if the field is left empty
- Responsive layout that works on desktop and mobile
- No build step, no dependencies to install

## Tech Stack

- **HTML5**
- **CSS3** (custom styles in `css/index.css`)
- **JavaScript** (vanilla, in `js/index.js`)
- [Bootstrap](https://getbootstrap.com/) for layout and components
- [Font Awesome](https://fontawesome.com/) for icons
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```
exchanger/
├── css/          # Bootstrap, Font Awesome, and custom styles
├── js/           # Application logic (index.js)
├── media/        # Images and icons
├── webfonts/     # Font Awesome web fonts
└── index.html    # Main page
```

## Getting Started

Since this is a static site, there is nothing to install.

1. **Clone the repository**
   ```bash
   git clone https://github.com/adamelhessy/exchanger.git
   cd exchanger
   ```

2. **Run it**
   - Simply open `index.html` in your browser, **or**
   - Serve it locally for best results:
     ```bash
     # Python
     python -m http.server 8000

     # or Node
     npx serve
     ```
   Then visit `http://localhost:8000`.

> An internet connection is required, as exchange rates are fetched from an online source.

## Usage

1. Enter the amount you want to convert (leave blank for `1`).
2. Select the currency you are converting **from**.
3. Select the currency you are converting **to**.
4. Click **Convert** to see the result.
5. Use the swap icon to flip the two currencies.

## Deployment

The project is deployed on Vercel. To deploy your own copy, import the repository into Vercel. No special configuration is needed since it is a static site.

## Contributing

Suggestions and improvements are welcome:

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

No license has been specified yet. Consider adding one (for example, [MIT](https://choosealicense.com/licenses/mit/)) if you want others to reuse the code.

## Author

Made by [adamelhessy](https://github.com/adamelhessy)
