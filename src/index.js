import "./style.css";
import { countryDropDown } from "./countryDropDown.js";

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
const globalZipCodeRegex = /^[a-zA-Z0-9-]{5,10}$/;

const pwdFormat =
  "Must contain at least 8 characters with at least 1 uppercase, 1 lowercase and 1 number.";
const zipCodeFormat = "Must have 5-10 characters and no space";

const displayHighFive = () => {
  const picture = document.createElement("div");
  const text = document.createElement("div");
  const form = document.querySelector("form");

  picture.className = "high-five";
  text.textContent = "Form submitted successfully!!!";
  picture.appendChild(text);
  if (form) form.remove();
  document.body.appendChild(picture);
};

const getId = (f) => {
  const parts = f.toLowerCase().split(" ");
  if (parts.length !== 1) return parts.join("-");
  return parts[0];
};

const toggleError = (e, isValid) => {
  e.className = isValid ? "valid" : "invalid";
  e.nextElementSibling.className = isValid ? "error" : "error active";
};
const validateEmail = (e) => {
  const isValid = emailRegExp.test(e.currentTarget.value);
  toggleError(e.currentTarget, isValid);
};

const validateZipCode = (e) => {
  const code = e.currentTarget.value;
  const isValid = globalZipCodeRegex.test(code);
  toggleError(e.currentTarget, isValid);
};

const validatePassword = (e) => {
  const v = e.currentTarget.value;
  const isValid = passwordRegex.test(v);
  toggleError(e.currentTarget, isValid);
};

const confirmPwd = (e) => {
  const pwd = document.querySelector("#password").value;
  const isValid =
    e.currentTarget.value === pwd && passwordRegex.test(e.currentTarget.value);
  toggleError(e.currentTarget, isValid);
  if (!isValid)
    e.currentTarget.nextElementSibling.textContent = !passwordRegex.test(
      e.currentTarget.value,
    )
      ? pwdFormat
      : "Passwords do not match";
};

const validateForm = (e) => {
  e.preventDefault();
  const email = document.querySelector("#email");
  const zipCode = document.querySelector("#zip-code");
  const pwd = document.querySelector("#password");
  const pwdConfirm = document.querySelector("#password-confirmation");

  let isValid = true;
  for (const input of [email, zipCode, pwd, pwdConfirm]) {
    if (input.classList.contains("invalid") || input.value.length === 0) {
      isValid = false;
      break;
    }
  }

  if (isValid) displayHighFive();
  else {
    [email, zipCode, pwd, pwdConfirm].forEach((input) => {
      if (!input.value.length) {
        toggleError(input, false);
      }
    });
  }
};

class Form {
  constructor() {
    this.wrapper = document.createElement("form");
    this.btnWrapper = document.createElement("div");
    const fields = [
      "Email",
      "Country",
      "Zip Code",
      "Password",
      "Password Confirmation",
    ];

    this.wrapper.noValidate = true;
    this.btnWrapper.className = "btn-wrapper";

    fields.forEach((field) => {
      const fieldWrapper = document.createElement("div");
      const inputWrapper = document.createElement("div");
      const spanError = document.createElement("span");
      const label = document.createElement("label");
      const id = getId(field);

      fieldWrapper.className = "field-wrapper";
      inputWrapper.className = "input-wrapper";
      spanError.className = "error";
      label.setAttribute("for", id);
      label.textContent = field;

      if (field === "Country") {
        inputWrapper.innerHTML = countryDropDown;
      } else {
        const input = document.createElement("input");

        input.id = id;
        input.name = id;

        switch (field) {
          case "Email":
            input.setAttribute("type", "email");
            input.setAttribute("autocomplete", "true");
            input.placeholder = "erenjaeger@gmail.com";
            spanError.textContent = "Email incorrect";
            input.addEventListener("input", validateEmail);
            break;
          case "Password":
            input.addEventListener("input", validatePassword);
            input.setAttribute("type", "password");
            input.setAttribute("placeholder", "Sung1492");
            spanError.textContent = pwdFormat;
            break;
          case "Password Confirmation":
            input.setAttribute("type", "password");
            input.setAttribute("placeholder", "Sung1492");
            input.addEventListener("input", confirmPwd);
            spanError.textContent = "Password incorrect";
            break;
          default:
            input.setAttribute("autocomplete", "true");
            input.placeholder = "320317";
            input.addEventListener("input", validateZipCode);
            spanError.textContent = zipCodeFormat;
            break;
        }
        inputWrapper.appendChild(input);
        inputWrapper.appendChild(spanError);
      }

      fieldWrapper.appendChild(label);
      fieldWrapper.appendChild(inputWrapper);
      this.wrapper.appendChild(fieldWrapper);
    });

    ["Submit", "Reset"].forEach((b) => {
      const btn = document.createElement("button");
      btn.classList.add("form-btn");
      btn.textContent = b.toUpperCase();
      btn.type = b.toLowerCase();

      if (b === "Submit") btn.addEventListener("click", validateForm);

      this.btnWrapper.appendChild(btn);
    });

    this.wrapper.appendChild(this.btnWrapper);
  }
}

document.body.appendChild(new Form().wrapper);
