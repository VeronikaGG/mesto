export class FormValidator {
  constructor(data, formSelector, setInputs, popupButton) {
    this._formSelector = formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._setInputs = setInputs;
    this._popupButton = popupButton;
  }
  _showImputError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideImputError(input) {
    const errorElement = this._formSelector.querySelector(`.${input.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValidity(input) {
    //если валидно скрыть ошибку
    if (input.validity.valid) {
      this._hideImputError(input);
      //если не валидно показать
    } else {
      this._showImputError(input);
    }
  }
  //отдельная функция блокировки кпопки со стилями если не валидно
  _disableSubmitButton() {
    this._popupButton.classList.add(this._inactiveButtonClass);
    this._popupButton.disabled = true;
  }
  _enableSubmitButton() {
    this._popupButton.classList.remove(this._inactiveButtonClass);
    this._popupButton.disabled = false;
  }

  //блокировка кнопки и переключение стилей
  _toggleButtonState() {
    const isInputValid = this._setInputs.every((input) => input.validity.valid);
    if (isInputValid) {
      this._enableSubmitButton();
    } else {
      this._disableSubmitButton();
    }
  }

  enableValidation() {
    this._setInputs = [...this._formSelector.querySelectorAll(this._inputSelector)];
    this._popupButton = this._formSelector.querySelector(this._submitButtonSelector);
    //перебор импутов
    this._setInputs.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }
  //очищение форм
  resetImputs() {
    this._setInputs.forEach((input) => {
      this._hideImputError(input);
    });
  }
  disableButton() {
    this._popupButton.classList.add(this._inactiveButtonClass);
    this._popupButton.setAttribute('disabled', 'true');
  }
}
