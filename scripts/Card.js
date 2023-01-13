import { popupOpenElement, popupImageOpen, popupNameOpen } from './index.js';
import { openPopup } from './index.js';

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
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
    this._element.querySelector('.item__image').alt = this._name;
    this._like = this._element.querySelector('.item__like');
    this._image = this._element.querySelector('.item__image');

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
      this._handleOpenPopupImage();
    });
  }

  _handleLikeClick() {
    this._like.classList.toggle('item__like_active_black');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleOpenPopupImage() {
    popupImageOpen.src = this._link;
    popupNameOpen.textContent = this._name;
    popupImageOpen.alt = this._name;
    openPopup(popupOpenElement);
  }
}