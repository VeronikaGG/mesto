import {
  initialCards,
  object,
  profileForm,
  popupCreateCard,
  popupCreateTitle,
  popupCreateLinkCard,
  popupName,
  popupActivities,
  popupOpenAddImage,
  popupOpenButtonElement,
} from '../utils/Constants.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import './index.css';
//закрытие попапов на крестик и оверлей
//закрытие попапов
//закрытие попапа на кнопку
//открытие попапов

const popupProfileWithForm = new PopupWithForm('.profile-popup', handleProfeleFormSubmit);
popupProfileWithForm.setEventListeners();

const popupCreateCardWithForm = new PopupWithForm('.popup_add-image', handleCardFormSubmit);
popupCreateCardWithForm.setEventListeners();

// // //редактирование профиля, данные из профиля в попап
const fillProfileInputs = () => {
  const { name, job } = profileInfo.getUserInfo();
  popupName.value = name;
  popupActivities.value = job;
  popupProfileWithForm.open();
};

//данные из попапа в профиль
function handleProfeleFormSubmit(value) {
  profileInfo.setUserInfo(value.name, value.job);
  popupProfileWithForm.close();
}
popupOpenButtonElement.addEventListener('click', () => {
  fillProfileInputs();
  profileFormValidator.disableSubmitButton();
  profileFormValidator.clearInputErrors();
  popupProfileWithForm.open();
});

const createCard = (item) => {
  const card = new Card(item, handleOpenPopupImage, '.card-template');
  const cardElements = card.generateCard();

  return cardElements;
};

// // //функция добаления карточки
// const addCardToSite = (item) => {
//   newCardsList.addCard(createCard(item));

// };

//попап с открытием картинки
const handleOpenPopupImage = (link, name) => {
  openImageModal.open(link, name);
};

const newCardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      newCardsList.addCard(createCard(item));
    },
  },
  '.cards__list'
);
//вывод массива карточек на сайт
newCardsList.renderItems();

//создание карточки
function handleCardFormSubmit(item) {
  const newCard = createCard(item);
  newCardsList.addCard(newCard);
  popupCreateCardWithForm.close();
}

const openImageModal = new PopupWithImage('.popup_open-image');
openImageModal.setEventListeners();

popupOpenAddImage.addEventListener('click', () => {
  popupCreateCardWithForm.open();
  createCardFormValidator.disableSubmitButton();
  createCardFormValidator.clearInputErrors();
});

const profileFormValidator = new FormValidator(object, profileForm);
profileFormValidator.enableValidation();

const createCardFormValidator = new FormValidator(object, popupCreateCard);
createCardFormValidator.enableValidation();

const profileInfo = new UserInfo({
  profileName: '.profile__name',
  profileActivities: '.profile__activities',
});
