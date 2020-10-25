import { openPopup, popupImage, imagePopup, titlePopup } from './script.js';

export default class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const elementCard = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.elements__element')
      .cloneNode(true);

    return elementCard;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.elements__text').textContent = this._name;
    this._element.querySelector('.elements__photo').src = this._link;

    return this._element;
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector('.elements__photo');
    const cardLike = this._element.querySelector('.elements__like');
    const cardDelete = this._element.querySelector('.elements__delete');

    cardImage.addEventListener('click', () => {
      this._openCardPhoto();
    });

    cardLike.addEventListener('click', () => {
      this._likeCard();
    });

    cardDelete.addEventListener('click', () => {
      this._deleteCard();
    });
  }

  _openCardPhoto() {
    imagePopup.src = this._link;
    titlePopup.textContent = this._name;

    openPopup(popupImage);
  }

  _likeCard() {
    this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }
}
