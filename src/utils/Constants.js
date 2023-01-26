export {
  initialCards,
  object,
  profilePopup,
  profileForm,
  popupAddImage,
  popupCreateCard,
  popupCreateTitle,
  popupCreateLinkCard,
  popupName,
  popupActivities,
  popupOpenAddImage,
  popupOpenButtonElement,
  popupOpenElement,
  cardTemplate,
  popupImageOpen,
  popupNameOpen,
};
const profilePopup = document.querySelector('.profile-popup');
const profileForm = profilePopup.querySelector('.popup__form_edit-form');
const popupAddImage = document.querySelector('.popup_add-image');
const popupCreateCard = document.querySelector('.popup__form_create-card');
const popupCreateTitle = popupAddImage.querySelector('.popup__input_type_title');
const popupCreateLinkCard = popupAddImage.querySelector('.popup__input_type_link');
const popupName = profilePopup.querySelector('.popup__input_type_name');
const popupActivities = profilePopup.querySelector('.popup__input_type_aboutme');
const popupOpenAddImage = document.querySelector('.profile__add-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupOpenElement = document.querySelector('.popup_open-image');
const cardTemplate = document.querySelector('.card-template').content;
const popupImageOpen = document.querySelector('.popup__image');
const popupNameOpen = document.querySelector('.popup__name');

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

//валидация форм
const object = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};
