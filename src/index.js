import "./style.css";
import { countryDropDown } from "./countryDropDown.js";

const getId = (f) => {
  const parts = f.toLowerCase().split(" ");
  if (parts.length !== 1) return parts.join("-");
  return parts[0];
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
      const id = getId(field);
      fieldWrapper.className = "field-wrapper";

      if (field === "Country") {
        fieldWrapper.innerHTML = countryDropDown;
      } else {
        const label = document.createElement("label");
        const input = document.createElement("input");

        label.setAttribute("for", id);
        label.textContent = field;
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

        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);
      }

      this.wrapper.appendChild(fieldWrapper);
    });

    ["Submit", "Reset"].forEach((b) => {
      const btn = document.createElement("button");
      btn.classList.add("form-btn");
      btn.textContent = b.toUpperCase();
      btn.type = b.toLowerCase();
      this.btnWrapper.appendChild(btn);
    });

    this.wrapper.appendChild(this.btnWrapper);
  }
}

document.body.appendChild(new Form().wrapper);
