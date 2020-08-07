const enableValidationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(enableValidationSettings.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(enableValidationSettings.errorClass);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(enableValidationSettings.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(enableValidationSettings.errorClass);
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputs) => {
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputs, buttonSubmit) => {
  if (hasInvalidInput(inputs)) {
    buttonSubmit.classList.add(enableValidationSettings.inactiveButtonClass);
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.classList.remove(enableValidationSettings.inactiveButtonClass);
    buttonSubmit.disabled = false;
  }
}

const setEventListeners = (formElement) => {

  const inputs = Array.from(formElement.querySelectorAll(enableValidationSettings.inputSelector));
  const buttonSubmit = formElement.querySelector(enableValidationSettings.submitButtonSelector);

  toggleButtonState(inputs, buttonSubmit);

  inputs.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputs, buttonSubmit);
    });
  });
};


const enableValidation = () => {
  const forms = Array.from(document.querySelectorAll(enableValidationSettings.formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {

      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
}

enableValidation(enableValidationSettings);
