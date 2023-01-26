import { Popup } from './Popup.js';
export class PopupWithImage extends Popup {
  open(link, name) {
    super.open();
    this._link = this._popup.querySelector('.popup__image');
    this._name = this._popup.querySelector('.popup__name');

    this._link.src = link;
    this._link.alt = name;
    this._name.textContent = name;
  }
}
