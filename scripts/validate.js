const checkInputValidity = (input, object) => {
  const errorElement = document.querySelector(`.${input.id}-error`);
  //если валидно скрыть ошибку
  if (input.validity.valid) {
    errorElement.textContent = '';
    errorElement.classList.remove(object.errorClass);
    input.classList.remove(object.inputErrorClass);
    //если не валидно показать
  } else {
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(object.errorClass);
    input.classList.add(object.inputErrorClass);
  }
};
//проверка на валидацию
const toggleButtonState = (setInputs, popupButton, object) => {
  const isInputValid = setInputs.every((input) => input.validity.valid);
  if (isInputValid) {
    popupButton.classList.remove(object.inactiveButtonClass);
    popupButton.removeAttribute('disabled');
  } else {
    popupButton.classList.add(object.inactiveButtonClass);
    popupButton.setAttribute('disabled', true);
  }
};

const enableValidation = (object) => {
  const { formSelector, inputSelector, submitButtonSelector, ...restObject } = object;
  const setForms = [...document.querySelectorAll(formSelector)];
  //перебор форм
  setForms.forEach((form) => {
    const setInputs = [...form.querySelectorAll(inputSelector)];
    const popupButton = form.querySelector(submitButtonSelector);
    form.addEventListener('reset', () => {
      setTimeout(() => {
        toggleButtonState(setInputs, popupButton, restObject);
      }, 0);
    });

    //перебор импутов
    setInputs.forEach((input) => {
      input.addEventListener('input', () => {
        checkInputValidity(input, restObject);
        toggleButtonState(setInputs, popupButton, restObject);
      });
    });
  });
};

const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

enableValidation(object);
