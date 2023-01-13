export class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  }

  _checkInputValidity(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    //если валидно скрыть ошибку
    if (input.validity.valid) {
      errorElement.textContent = '';
      errorElement.classList.remove(this._errorClass);
      input.classList.remove(this._inputErrorClass);
      //если не валидно показать
    } else {
      errorElement.textContent = input.validationMessage;
      errorElement.classList.add(this._errorClass);
      input.classList.add(this._inputErrorClass);
    }
  }

  _toggleButtonState(setInputs, popupButton) {
    const isInputValid = setInputs.every((input) => input.validity.valid);
    if (isInputValid) {
      popupButton.classList.remove(this._inactiveButtonClass);
      popupButton.disabled = false;
    } else {
      popupButton.classList.add(this._inactiveButtonClass);
      popupButton.disabled = true;
    }
  }

  enableValidation() {
    const setInputs = [...this._form.querySelectorAll(this._inputSelector)];
    const popupButton = this._form.querySelector(this._submitButtonSelector);
    //перебор импутов
    setInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState(setInputs, popupButton);
      });
    });
  }
  //очищение форм
  resetForms = () => {
    const setForms = [...this._form.querySelectorAll(this._formSelector)];
    setForms.forEach((form) => {
      form.addEventListener('reset', () => {
        setTimeout(() => {
          this._toggleButtonState(setInputs, popupButton);
        }, 0);
      });
    });
  };
}