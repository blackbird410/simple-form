import "./style.css";
import { countryDropDown } from "./countryDropDown.js";

const getId = (f) => {
  const parts = f.toLowerCase().split(" ");
  if (parts.length !== 1) return parts.join("-");
  return parts[0];
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
        inputWrapper.appendChild(spanError);
      } else {
        const input = document.createElement("input");

        input.id = id;
        input.name = id;

        switch (field) {
          case "Email":
            input.setAttribute("type", "email");
            input.autocomplete = true;
            break;
          case "Password":
          case "Password Confirmation":
            input.setAttribute("type", "password");
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
