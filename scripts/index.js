const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupEdit = document.querySelector('form');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const saveButton = popupElement.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
const profileActivities = document.querySelector('.profile__activities');
const popupName = popupElement.querySelector('.popup__input_type_name');
const popupActivities = popupElement.querySelector('.popup__input_type_aboutme');

const togglePopupVisibility = () => {
  popupElement.classList.toggle('popup_opened');
  popupName.value = profileName.textContent;
  popupActivities.value = profileActivities.textContent;
};

popupOpenButtonElement.addEventListener('click', togglePopupVisibility);
popupCloseButtonElement.addEventListener('click', togglePopupVisibility);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileActivities.textContent = popupActivities.value;
  togglePopupVisibility();
}

popupEdit.addEventListener('submit', formSubmitHandler);
