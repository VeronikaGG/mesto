export class Section {
  constructor({ items, renderer }, containerСlassList) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerСlassList);
  }
  renderItems() {
    this._initialArray.forEach((item) => this._renderer(item));
  }

  addCard(item) {
    this._container.prepend(item);
  }
}
// //функция добавления элементов
// const addCardToSite = (elm) => {
//   cardList.prepend(createCard(elm));
// };
// //добавление массива
// initialCards.forEach(addCardToSite);
