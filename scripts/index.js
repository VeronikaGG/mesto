//popups
const popupElement = document.querySelector('.profile-popup');
const popupAddImage = document.querySelector('.popup_add-image');
const popupOpenElement = document.querySelector('.popup_open-image');


//popups close
const popupCloseAddImage = popupAddImage.querySelector('.popup__close_type_add-image');
const popupCloseButtonElement = popupElement.querySelector('.popup__close_type_edit-form');
const popupCloseImage = document.querySelector('.popup__close-image');

//popup open
const popupOpenAddImage = document.querySelector('.profile__add-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');



const popupEdit = document.querySelector('.popup__form_edit-form');
const saveButton = popupElement.querySelector('.popup__button_type_edit-profile');
const profileName = document.querySelector('.profile__name');
const profileActivities = document.querySelector('.profile__activities');
const popupName = popupElement.querySelector('.popup__input_type_name');
const popupActivities = popupElement.querySelector('.popup__input_type_aboutme');

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
//открытие попапов
function closePopup(element) {
  element.classList.remove('popup_opened');
};
//закрытие попапов
function openPopup(element) {
  element.classList.add('popup_opened');
};

popupOpenButtonElement.addEventListener('click', () => {
  createPopupVisibility();
  openPopup(popupElement); 
});


popupCloseButtonElement.addEventListener('click', () => closePopup(popupElement));
popupOpenAddImage.addEventListener('click', () => openPopup(popupAddImage));
popupCloseAddImage.addEventListener('click', () => closePopup(popupAddImage));
popupCloseImage.addEventListener('click', () => closePopup(popupOpenElement));


//редактирование профиля
const createPopupVisibility = () => {
popupName.value = profileName.textContent;
popupActivities.value = profileActivities.textContent;

};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileActivities.textContent = popupActivities.value;
  closePopup(popupElement);
 
}
popupEdit.addEventListener('submit', handleProfileFormSubmit);



const createCard = (item) => {
  const cardElements = cardTemplate.cloneNode(true);
  const cardItemName = cardElements.querySelector('.item__name');
  cardItemName.textContent = item.name;
  const cardItemLink = cardElements.querySelector('.item__image');
  cardItemLink.src = item.link;
  cardItemLink.alt = item.name;
  //попап с открытием картинки
  cardItemLink.addEventListener('click', function () {
    popupImageOpen.src = item.link;
    popupNameOpen.textContent = item.name;
    popupImageOpen.alt = item.name;
    openPopup(popupOpenElement);
  });

  cardElements.querySelector('.item__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('item__like_active_black');
  });
  cardElements.querySelector('.item__trash').addEventListener('click', function (evt) {
    evt.target.closest('.item').remove();
  });

  return cardElements;
};
//функция добавления элементов
const addCardToSite = (elm) => {
  cardList.prepend(createCard(elm));
};
//добавление массива
initialCards.forEach((array) => {
  addCardToSite(array);
});

//сохранение карточки
function handleFormSubmit(evt) {
  evt.preventDefault();
  addCardToSite({ name: popupCreateTitle.value, link: popupCreateLinkCard.value });
  popupCreateCard.reset();
  closePopup(popupAddImage);
}

popupCreateCard.addEventListener('submit', handleFormSubmit);


