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

  if (elementContainer === zipContainer) {
    errorElement.classList.add('zipError');
  }

  window.addEventListener("load", () => {
    const isValid = regex.test(element.value);
    isValid ? element.classList.add('valid') : element.classList.add('invalid');
  });
  
  element.addEventListener("input", () => {
    const isValid = regex.test(element.value);
    const isBlank = element.value === '';
    
    if (isValid) {
      element.classList.add('valid');
      element.classList.remove('invalid');
      errorElement.textContent = "";
      errorElement.classList.remove('error');
    } else {
      element.classList.add('invalid');
      element.classList.remove('valid');
      errorElement.classList.add('error');
      errorElement.textContent = errorText;
      if (isBlank) {
        errorElement.textContent = "This field can't be blank";
      }
    }
  });
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const isValid = regex.test(element.value);
    const isBlank = element.value === '';
    if (!isValid) {
      element.classList.remove('valid');
      element.classList.add('invalid');
      errorElement.textContent = errorText;
      errorElement.classList.add('error');
      if (isBlank) {
        errorElement.textContent = "This field can't be blank";
      }
    } else {
      console.log('data successfully submitted');
      element.classList.add('valid');
      element.classList.remove('invalid');
      errorElement.textContent = "";
      errorElement.classList.remove('error');
    }
  });

  return errorElement;
}

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

checkElementValidity(email, emailContainer, emailRegex, 'Please enter a valid email address');

checkElementValidity(password, passwordContainer, passwordRegex, 'Password must contain: 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special characters');

const checkZipCodeValidity = function() {
  let countryValue = country.value;

  const zipCodeRegex = {
    //6 digit zip codes for russia, china; 5 digits for us, germany, france
    'ru': /^\d{6}$/, 
    'us': /^\d{5}$/,
    'cn': /^\d{6}$/,
    'ge': /^\d{5}$/,
    'fr': /^\d{5}$/,
  }

  country.addEventListener('change', (event) => {
    let zipError = document.querySelector('.zipError');
    zipContainer.removeChild(zipError);
     
    countryValue = country.value;
    console.log(`country changed, value is ${countryValue}`);
    checkElementValidity(zipCode, zipContainer, zipCodeRegex[countryValue], 'Invalid zip code');
  });

    checkElementValidity(zipCode, zipContainer, zipCodeRegex[countryValue], 'Invalid zip code');
};

checkZipCodeValidity();
