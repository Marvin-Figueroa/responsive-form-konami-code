const form = document.querySelector(".signup__form");
const formInputs = document.querySelectorAll(".form__input");

const simpleWebsiteRegEx =
  /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#&//=]*)$/i;
const simplePhoneRegEx = /^[\d]{4}-[\d]{4}$/;
let formIsValid;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formIsValid = true;

  formInputs.forEach((input) => {
    removeErrorClasses(input.parentElement);

    if (input.value.trim().length === 0) {
      input.parentElement.classList.add("input-error", "error-empty");
      formIsValid = false;
    } else if (input.getAttribute("name").includes("name")) {
      if (!/^[a-zA-Z]+$/.test(input.value.trim())) {
        input.parentElement.classList.add("input-error", "error-format-text");
        formIsValid = false;
      }
    } else if (input.getAttribute("name").includes("password")) {
      if (form.password.value.trim() !== form.passwordConfirm.value.trim()) {
        input.parentElement.classList.add(
          "input-error",
          "error-password-mismatch"
        );
        formIsValid = false;
      }
    } else if (input.getAttribute("name") === "phone") {
      if (!simplePhoneRegEx.test(input.value.trim())) {
        input.parentElement.classList.add("input-error", "error-format-phone");
        formIsValid = false;
      }
    } else if (input.getAttribute("name") === "website") {
      if (!simpleWebsiteRegEx.test(input.value.trim())) {
        input.parentElement.classList.add(
          "input-error",
          "error-format-website"
        );
        formIsValid = false;
      }
    } else if (input.getAttribute("name") === "age") {
      if (!/^[0-9]+$/.test(input.value.trim())) {
        input.parentElement.classList.add("input-error", "error-format-number");
        formIsValid = false;
      }
    }
  });

  if (formIsValid) {
    printFormValues();
    e.target.reset();
  }
});

function removeErrorClasses(inputElement) {
  inputElement.classList.remove(
    "input-error",
    "error-empty",
    "error-format-website",
    "error-format-text",
    "error-password-mismatch",
    "error-format-phone",
    "error-format-number"
  );
}

function printFormValues() {
  formInputs.forEach((input) =>
    console.log(`${input.getAttribute("name")}: ${input.value}`)
  );
  console.log(
    `${form.experience.getAttribute("name")}: ${form.experience.value}`
  );
  console.log(
    `${form.newsletter.getAttribute("name")}: ${form.newsletter.checked}`
  );
}
