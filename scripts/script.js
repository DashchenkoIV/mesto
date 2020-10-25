import Card from './Card.js';
import FormValidator from './FormValidator.js';

export { popupImage, imagePopup, titlePopup, openPopup};

const popupEditProfile = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_img');

const popupEditProfileButton = document.querySelector('.profile__edit');
const popupAddCardButton = document.querySelector('.profile__add');

const closeEditPopupButton = popupEditProfile.querySelector('.popup__close-button');
const closeAddCardButton = popupAddCard.querySelector('.popup__close-button');
const closeImageButton = popupImage.querySelector('.popup__close-button');

const saveEditPopupButton = popupEditProfile.querySelector('.popup__button_save');
const saveAddCardButton = popupAddCard.querySelector('.popup__button_save');

const userName = document.querySelector('.profile__name');
const userActivity = document.querySelector('.profile__activity');

const userNameInput = popupEditProfile.querySelector('.popup__input_edit');
const userActivityInput = popupEditProfile.querySelector('.popup__input_activity');
const addPlaceInput = popupAddCard.querySelector('.popup__input_add');
const addLinkInput = popupAddCard.querySelector('.popup__input_link');

const elementsCard = document.querySelector('.elements');

const imagePopup = popupImage.querySelector('.popup__img');
const titlePopup = popupImage.querySelector('.popup__title');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
  if (evt.keyCode === 27) {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
}

popupEditProfileButton.addEventListener('click', () => {
  userNameInput.value = userName.textContent;
  userActivityInput.value = userActivity.textContent;
  openPopup(popupEditProfile);
});

popupAddCardButton.addEventListener('click', () => {
  addPlaceInput.value = '';
  addLinkInput.value = '';
  openPopup(popupAddCard);
});

function saveProfile(event) {
  userName.textContent = userNameInput.value;
  userActivity.textContent = userActivityInput.value;
  closePopup(popupEditProfile);

  event.preventDefault();
}

saveEditPopupButton.addEventListener('click', saveProfile);

function saveCard(event) {
  const card = new Card(addPlaceInput.value, addLinkInput.value, '.elements__template');
  const cardElement = card.generateCard();
  elementsCard.prepend(cardElement);

  closePopup(popupAddCard);
  saveAddCardButton.disabled = true;
  saveAddCardButton.classList.add('popup__button_disabled');

  event.preventDefault();
}

saveAddCardButton.addEventListener('click', saveCard);

closeEditPopupButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

closeAddCardButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});

closeImageButton.addEventListener('click', () => {
  closePopup(popupImage);
});

function closePopupByOverlay(e) {
  if (e.target.classList.contains('popup')) {
    closePopup(e.target);
  }
}

popupEditProfile.addEventListener('click', closePopupByOverlay);

popupAddCard.addEventListener('click', closePopupByOverlay);

popupImage.addEventListener('click', closePopupByOverlay);

initialCards.forEach((elementCard) => {
  const card = new Card(elementCard.name, elementCard.link, '.elements__template');
  const cardElement = card.generateCard();

  elementsCard.append(cardElement);
});

const enableValidationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const validatorProfile = new FormValidator(enableValidationSettings, popupEditProfile);
const validatorCard = new FormValidator(enableValidationSettings, popupAddCard);

const startValidation = () => {
  validatorProfile.enableValidation();
  validatorCard.enableValidation();
};

startValidation();


