const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
// let itemLikeElement = document.querySelector('.item__like');
// let itemLikeActiveElement = document.querySelector('.item__like');
// const inputContainerElement = popupElement.querySelector('.popup__input-container');
const saveButton = popupElement.querySelector(".popup__button");
const profileName = document.querySelector(".profile__name");
const profileActivities = document.querySelector(".profile__activities");

// function formSubmitHandler (evt) {
//   evt.preventDefault();

const togglePopupVisibility = () => {
  popupElement.classList.toggle("popup_opened");
};
togglePopupVisibility();

popupOpenButtonElement.addEventListener("click", togglePopupVisibility);
popupCloseButtonElement.addEventListener("click", togglePopupVisibility);



// блок редактирование профайла
function addProfile() {
  let popupName = document.querySelector(".popup__name");
  let popupActivities = document.querySelector(".popup__aboutme");
  profileName.textContent = `${popupName.value}`;
  profileActivities.textContent = `${popupActivities.value}`;
  togglePopupVisibility();
}
saveButton.addEventListener("click", addProfile);

// formElement.addEventListener('submit', formSubmitHandler);