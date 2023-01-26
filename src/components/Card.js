export class Card {
  constructor(data, handleOpenPopupImage, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
    this._handleOpenPopupImage = handleOpenPopupImage;
  }

  _getTemplate() {
    const cardElements = document.querySelector(this._templateSelector).content.querySelector('.item').cloneNode(true);

    return cardElements;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.item__name').textContent = this._name;
    this._element.querySelector('.item__image').src = this._link;
    this._element.alt = this._name;
    this._like = this._element.querySelector('.item__like');

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.item__like').addEventListener('click', () => {
      this._handleLikeClick();
    });

    this._element.querySelector('.item__trash').addEventListener('click', () => {
      this._handleDeleteCard();
    });
    this._element.querySelector('.item__image').addEventListener('click', () => {
      this._handleOpenPopupImage(this._link, this._name);
    });
  }

  _handleLikeClick() {
    this._like.classList.toggle('item__like_active_black');
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }
}
