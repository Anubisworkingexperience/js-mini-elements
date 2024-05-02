//elements
const form = document.querySelector('form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipCode');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPass');

//element containers
const emailContainer = document.querySelector('.emailContainer');
const countryContainer = document.querySelector('.countryContainer');
const zipContainer = document.querySelector('.zipContainer');
const passwordContainer = document.querySelector('.passwordContainer');
const confirmPasswordContainer = document.querySelector('.confirmContainer');

const checkElementValidity = function(element, elementContainer, regex, errorText) {
  const errorElement = document.createElement('div');
  elementContainer.appendChild(errorElement);

  window.addEventListener("load", () => {
    const isValid = regex.test(element.value);
    isValid ? element.classList.add('valid') : element.classList.add('invalid');
  });
  
  element.addEventListener("input", () => {
    const isValid = regex.test(element.value);
    if (isValid) {
      element.classList.add('valid');
      errorElement.textContent = "";
      errorElement.classList.remove('error');
    } else {
      element.classList.add('invalid');
      errorElement.classList.add('error');
      errorElement.textContent = "Please enter a correct email address";
    }
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const isValid = regex.test(element.value);
    const isBlank = element.value === '';
    if (!isValid) {
      element.classList.add('invalid');
      errorElement.textContent = errorText;
      errorElement.classList.add('error');
      if (isBlank) {
        errorElement.textContent = "This field can't be blank";
      }
    } else {
      console.log('data successfully submitted');
      element.classList.add('valid');
      errorElement.textContent = "";
      errorElement.classList.remove('error');
    }
  });
}

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

checkElementValidity(email, emailContainer, emailRegex, 'Please enter a valid email address');


