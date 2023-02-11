export class Card {
  constructor(data, handleOpenPopupImage, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._id = data._id;
    this._ownId = data.owner;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleOpenPopupImage = handleOpenPopupImage;
  }

  _getTemplate() {
    const cardElements = document.querySelector(this._templateSelector).content.querySelector('.item').cloneNode(true);

    return cardElements;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.item__name').textContent = this._name;
    this._cardImage = this._element.querySelector('.item__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likeButton = this._element.querySelector('.item__like');
    this._deleteElement = this._element.querySelector('.item__trash');
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._deleteElement.addEventListener('click', () => {
      this._handleDeleteCard();
    });
    this._cardImage.addEventListener('click', () => {
      this._handleOpenPopupImage(this._link, this._name);
    });
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('item__like_active_black');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
}
