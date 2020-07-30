const popupEditProfile = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_img');

const popupEditProfileButton = document.querySelector('.profile__edit');
const popupAddCardButton = document.querySelector('.profile__add');

const closeEditPopupButton = popupEditProfile.querySelector('.popup__close-button');
const closeAddCardButton = popupAddCard.querySelector('.popup__close-button');
const closeImageButton = popupImage.querySelector('.popup__close-button');

const saveEditPopupButton = popupEditProfile.querySelector('.popup__save-button');
const saveAddCardButton = popupAddCard.querySelector('.popup__save-button');

const userName = document.querySelector('.profile__name');
const userActivity = document.querySelector('.profile__activity');

const userNameInput = popupEditProfile.querySelector('.popup__name_edit');
const userActivityInput = popupEditProfile.querySelector('.popup__activity');
const addPlaceInput = popupAddCard.querySelector('.popup__name_add');
const addLinkInput = popupAddCard.querySelector('.popup__link');

const templateCard = document.querySelector('.elements__template').content.querySelector('.elements__element');
const elementsCard = document.querySelector('.elements');

const imagePopup = popupImage.querySelector('.popup__img');
const titlePopup = popupImage.querySelector('.popup__title');

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

popupEditProfileButton.addEventListener('click', () => {
  userNameInput.value = userName.textContent;
  userActivityInput.value = userActivity.textContent;
  togglePopup(popupEditProfile);
});

popupAddCardButton.addEventListener('click', () => {
  addPlaceInput.value = '';
  addLinkInput.value = '';
  togglePopup(popupAddCard);
});

function saveProfile(event) {
  userName.textContent = userNameInput.value;
  userActivity.textContent = userActivityInput.value;
  togglePopup(popupEditProfile);

  event.preventDefault();
}

saveEditPopupButton.addEventListener('click', saveProfile);

function createCard(data) {
  const elementCard = templateCard.cloneNode(true);

  const photoCard = elementCard.querySelector('.elements__photo');
  const deleteButtonCard = elementCard.querySelector('.elements__delete');
  const infoCard = elementCard.querySelector('.elements__info');
  const textCard = infoCard.querySelector('.elements__text');
  const likeButtonCard = infoCard.querySelector('.elements__like');

  photoCard.src = data.link;
  textCard.textContent = data.name;

  likeButtonCard.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });

  deleteButtonCard.addEventListener('click', function () {
    elementCard.remove();
  });

  photoCard.addEventListener('click', () => {
    imagePopup.src = data.link;
    titlePopup.textContent = data.name;
    togglePopup(popupImage);
  });

  return elementCard;
}

function renderCard(data) {
  elementsCard.prepend(createCard(data));
}

function saveCard(event) {
  renderCard({name: addPlaceInput.value, link: addLinkInput.value});
  togglePopup(popupAddCard);

  event.preventDefault();
}

saveAddCardButton.addEventListener('click', saveCard);

closeEditPopupButton.addEventListener('click', () => {
  togglePopup(popupEditProfile);
});

closeAddCardButton.addEventListener('click', () => {
  togglePopup(popupAddCard);
});

closeImageButton.addEventListener('click', () => {
  togglePopup(popupImage);
});

initialCards.forEach((data) => {
  renderCard(data);
});

