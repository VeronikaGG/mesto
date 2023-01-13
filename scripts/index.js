import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

//popups
const profilePopup = document.querySelector('.profile-popup');
const profileForm = profilePopup.querySelector('.popup__form_edit-form');
const popupAddImage = document.querySelector('.popup_add-image');
export const popupOpenElement = document.querySelector('.popup_open-image');

//popup open
const popupOpenAddImage = document.querySelector('.profile__add-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const saveButton = profilePopup.querySelector('.popup__button_type_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileActivities = document.querySelector('.profile__activities');
const popupName = profilePopup.querySelector('.popup__input_type_name');
const popupActivities = profilePopup.querySelector('.popup__input_type_aboutme');

//форма добавления карточки
const popupCreateCard = popupAddImage.querySelector('.popup__form_create-card');
const popupCreateTitle = popupAddImage.querySelector('.popup__input_type_title');
const popupCreateLinkCard = popupAddImage.querySelector('.popup__input_type_link');
const buttomCreateCard = popupAddImage.querySelector('.popup__button_type_add-image');

//тэмплейт
const cardList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('.card-template').content;
const cardItem = cardTemplate.querySelector('.item');

//попап открытия картинки
export const popupImageOpen = document.querySelector('.popup__image');
export const popupNameOpen = document.querySelector('.popup__name');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://images.unsplash.com/photo-1669158424156-01778fcc6427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Челябинская область',
    link: 'https://images.unsplash.com/photo-1663052722151-c13ff2838cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Иваново',
    link: 'https://images.unsplash.com/photo-1669150741447-bae254e33af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1669394367863-16f8ce6019a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Холмогорский район',
    link: 'https://images.unsplash.com/photo-1658031831632-b1e26f095476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
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
export const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
};

popupOpenButtonElement.addEventListener('click', () => {
  fillProfileInputs();
  openPopup(profilePopup);
});

popupOpenAddImage.addEventListener('click', () => openPopup(popupAddImage));

//блокировка сабмита карточки при открытии
popupOpenAddImage.addEventListener('click', () => {
  openPopup(popupAddImage);
  buttomCreateCard.setAttribute('disabled', 'true');
});

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

//функция добавления элементов
const addCardToSite = (elm) => {
  cardList.prepend(createCard(elm));
};
//добавление массива
initialCards.forEach(addCardToSite);

//сохранение карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCardToSite({ name: popupCreateTitle.value, link: popupCreateLinkCard.value });
  popupCreateCard.reset();
  closePopup(popupAddImage);
}

popupCreateCard.addEventListener('submit', handleCardFormSubmit);

//валидация форм
const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const profileFormValidator = new FormValidator(object, profileForm);

profileFormValidator.enableValidation();

const createCardFormValidator = new FormValidator(object, popupCreateCard);
createCardFormValidator.enableValidation();
