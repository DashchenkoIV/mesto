const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonSubmit = formElement.querySelector(submitButtonSelector);

    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
        if (inputElement.validity.valid) {
          inputElement.classList.remove(inputErrorClass);
          errorElement.textContent = '';
          errorElement.classList.remove(errorClass);
        } else {
          inputElement.classList.add(inputErrorClass);
          errorElement.textContent = inputElement.validationMessage;
          errorElement.classList.add(errorClass);
        }

        const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);
        if (isFormValid) {
          buttonSubmit.classList.add(inactiveButtonClass);
          buttonSubmit.disabled = true;
        } else {
          buttonSubmit.classList.remove(inactiveButtonClass);
          buttonSubmit.disabled = false;
        }
      });
    });
  });
}

enableValidation(object);
