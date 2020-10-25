export default class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formSelector.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput(inputs) {
    return inputs.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputs) {
    const buttonSubmit = this._formSelector.querySelector(this._submitButtonSelector);
    if (this._hasInvalidInput(inputs)) {
      buttonSubmit.classList.add(this._inactiveButtonClass);
      buttonSubmit.disabled = true;
    } else {
      buttonSubmit.classList.remove(this._inactiveButtonClass);
      buttonSubmit.disabled = false;
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formSelector.querySelectorAll(this._inputSelector));

    this._toggleButtonState(inputs);

    inputs.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputs);
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
}
