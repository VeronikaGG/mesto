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
  cardList,
} from '../utils/Constants.js';

import { api } from '../components/Api.js';
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
  const inputs = profileInfo.getUserInfo();
  popupName.value = inputs.name;
  popupActivities.value = inputs.about;
};

//данные из попапа в профиль
function handleProfeleFormSubmit(inputs) {
  api
    .setUserInfo(inputs)
    .then((newData) => {
      profileInfo.setUserInfo(newData);
      // console.log(newData);
      popupProfileWithForm.close();
    })
    .catch((error) => {
      console.log(error);
    });
}
//попап редактирования профиля
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
//попап с открытием картинки
const handleOpenPopupImage = (link, name) => {
  openImageModal.open(link, name);
};

const newCardsList = new Section(
  {
    renderer: (item) => {
      newCardsList.addCard(createCard(item));
    },
  },
  '.cards__list'
);
//создание карточки
function handleCardFormSubmit(card) {
  api
    .createCard(card)
    .then((newCard) => {
      cardList.prepend(createCard(newCard));
      popupCreateCardWithForm.close();
    })
    .catch((error) => {
      console.log(error);
    });
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

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, userData]) => {
    newCardsList.renderItems(cards.reverse());
    profileInfo.setUserInfo(userData);
  })
  .catch((err) => {
    console.log(err);
  });
