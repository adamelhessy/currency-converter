const form_input = document.querySelector(".form_input");
const form_icon = document.querySelector(".form_icon");
const from = document.querySelector(".from");
const to = document.querySelector(".to");
const convert_btn = document.querySelector(".convert_btn");
const display = document.querySelector(".display");
const from_img = document.querySelector(".from_img");
const to_img = document.querySelector(".to_img");
const exceptions = {
  EUR: "EU",
  ANG: "CW",
  XOF: "SN",
  XAF: "CM",
  XCD: "AG",
  XPF: "PF",
};
const COUNTRIES_Logos = (code) =>
  `https://flagsapi.com/${exceptions[code] || code.slice(0, -1)}/shiny/32.png`;
const CURRENCY_API = (base) =>
  `https://v6.exchangerate-api.com/v6/08af225b77295bfd9267f755/latest/${base}`;
const SelectTemplate = ({ conversion_rates }) =>
  Object.keys(conversion_rates)
    .map((code) => `<option value="${code}">${code}</option>`)
    .join("");

fetch(CURRENCY_API("USD"))
  .then((response) => response.json())
  .then((data) => {
    from.innerHTML = SelectTemplate(data);
    to.innerHTML = SelectTemplate(data);
    from.value = "USD";
    to.value = "EGP";
    from_img.src = COUNTRIES_Logos(from.value);
    to_img.src = COUNTRIES_Logos(to.value);
  })
  .catch(
    (err) =>
      (display.innerHTML = `<h1 class="fs-3 fw-semibold text-light">Conversion failed. Please try again.</h1>`),
  );
from.addEventListener("change", () => {
  from_img.src = COUNTRIES_Logos(from.value);
});

to.addEventListener("change", () => {
  to_img.src = COUNTRIES_Logos(to.value);
});

convert_btn.addEventListener("click", () => {
  fetch(CURRENCY_API(from.value))
    .then((response) => response.json())
    .then((data) => {
      const Input_Num = parseFloat(form_input.value) || 1;
      const To_Ratio = data.conversion_rates[to.value];
      const Output_Num = Input_Num * To_Ratio;
      display.innerHTML = `<h1 class="fs-3 fw-semibold text-light text-center">${Input_Num} ${from.value} = ${Output_Num.toFixed(2)} ${to.value}</h1>`;
      form_input.value = "";
    })
    .catch(
      (err) =>
        (display.innerHTML = `<h1 class="fs-3 fw-semibold text-light text-center">Conversion failed. Please try again.</h1>`),
    );
});

form_icon.addEventListener("click", () => {
  const temp = from.value;
  from.value = to.value;
  to.value = temp;
  const img_temp = from_img.src;
  from_img.src = to_img.src;
  to_img.src = img_temp;
});
