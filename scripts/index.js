import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, object } from './Constants.js';
export { popupOpenElement, popupImageOpen, popupNameOpen, openPopup };

const profilePopup = document.querySelector('.profile-popup');
const profileForm = profilePopup.querySelector('.popup__form_edit-form');
const popupAddImage = document.querySelector('.popup_add-image');

const popupCreateCard = popupAddImage.querySelector('.popup__form_create-card');
const popupCreateTitle = popupAddImage.querySelector('.popup__input_type_title');
const popupCreateLinkCard = popupAddImage.querySelector('.popup__input_type_link');
const buttomCreateCard = popupAddImage.querySelector('.popup__button_type_add-image');

const saveButton = profilePopup.querySelector('.popup__button_type_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileActivities = document.querySelector('.profile__activities');
const popupName = profilePopup.querySelector('.popup__input_type_name');
const popupActivities = profilePopup.querySelector('.popup__input_type_aboutme');
const popupOpenAddImage = document.querySelector('.profile__add-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupOpenElement = document.querySelector('.popup_open-image');

//тэмплейт
const cardList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;
const cardItem = cardTemplate.querySelector('.item');

//попап открытия картинки
const popupImageOpen = document.querySelector('.popup__image');
const popupNameOpen = document.querySelector('.popup__name');

const popups = document.querySelectorAll('.popup');
//закрытие попапов на крестик и оверлей
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

//закрытие попапов
function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
}
//закрытие попапа на кнопку
function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}
//открытие попапов
const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
  createCardFormValidator.resetImputs();
  profileFormValidator.resetImputs();
};

popupOpenButtonElement.addEventListener('click', () => {
  fillProfileInputs();
  openPopup(profilePopup);
  profileFormValidator.disableButton();
});

popupOpenAddImage.addEventListener('click', () => openPopup(popupAddImage));

//редактирование профиля
const fillProfileInputs = () => {
  popupName.value = profileName.textContent;
  popupActivities.value = profileActivities.textContent;
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileActivities.textContent = popupActivities.value;
  closePopup(profilePopup);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

const createCard = (item) => {
  const card = new Card(item, '.card-template');
  const cardElements = card.generateCard();

  return cardElements;
};
//попап с открытием картинки, создание карточки
// cardImage.addEventListener('click', function () {
//   popupImageOpen.src = item.link;
//   popupNameOpen.textContent = item.name;
//   popupImageOpen.alt = item.name;
//   openPopup(popupOpenElement);
// });
// cardElements.querySelector('.item__like').addEventListener('click', function (evt) {
//   evt.target.classList.toggle('item__like_active_black');
// });
// cardElements.querySelector('.item__trash').addEventListener('click', function (evt) {
//   evt.target.closest('.item').remove();
// });

// return cardElements;
// };
popupOpenAddImage.addEventListener('click', () => {
  createCardFormValidator.disableButton();
});

//функция добавления элементов
const addCardToSite = (elm) => {
  cardList.prepend(createCard(elm));
  popupCreateCard.reset();
};
//добавление массива
initialCards.forEach(addCardToSite);

//сохранение карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCardToSite({ name: popupCreateTitle.value, link: popupCreateLinkCard.value });
  closePopup(popupAddImage);
}

popupCreateCard.addEventListener('submit', handleCardFormSubmit);

const profileFormValidator = new FormValidator(object, profileForm, popupOpenAddImage);
profileFormValidator.enableValidation();

const createCardFormValidator = new FormValidator(object, popupCreateCard, popupOpenAddImage);
createCardFormValidator.enableValidation();
