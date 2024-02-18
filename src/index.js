import "./style.css";
import { countryDropDown } from "./countryDropDown.js";

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const pwdFormat =
  "Must contain at least 8 characters with at least 1 uppercase, 1 lowercase and 1 number.";

const getId = (f) => {
  const parts = f.toLowerCase().split(" ");
  if (parts.length !== 1) return parts.join("-");
  return parts[0];
};

const toggleError = (e, isValid) => {
  e.currentTarget.className = isValid ? "valid" : "invalid";
  e.currentTarget.nextElementSibling.className = isValid
    ? "error"
    : "error active";
};

const validatePassword = (e) => {
  const v = e.currentTarget.value;
  const isValid = passwordRegex.test(v);
  toggleError(e, isValid);
  e.currentTarget.nextElementSibling.textContent = pwdFormat;
};

const confirmPwd = (e) => {
  const pwd = document.querySelector("#password").value;
  const isValid =
    e.currentTarget.value === pwd && passwordRegex.test(e.currentTarget.value);
  toggleError(e, isValid);
  if (!isValid)
    e.currentTarget.nextElementSibling.textContent = !passwordRegex.test(
      e.currentTarget.value,
    )
      ? pwdFormat
      : "Passwords do not match";
};

const validateForm = (e) => {
  e.preventDefault;
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
      spanError.textContent = "This is an error";
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
            input.autocomplete = true;
            input.addEventListener("input", (e) => {
              const isValid = emailRegExp.test(e.currentTarget.value);
              e.currentTarget.className = isValid ? "valid" : "invalid";
            });
            break;
          case "Password":
            input.addEventListener("input", validatePassword);
            input.setAttribute("type", "password");
            input.setAttribute("placeholder", "Sung1492");
            break;
          case "Password Confirmation":
            input.setAttribute("type", "password");
            input.setAttribute("placeholder", "Sung1492");
            input.addEventListener("input", confirmPwd);
            spanError.textContent = "Passwords do not match.";
            break;
          default:
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
