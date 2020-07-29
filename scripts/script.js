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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  userNameInput.value = userName.textContent;
  userActivityInput.value = userActivity.textContent;
  addPlaceInput.value = "";
  addLinkInput.value = "";
}

popupEditProfileButton.addEventListener('click', () => {
  openPopup(popupEditProfile);
});

popupAddCardButton.addEventListener('click', () => {
  openPopup(popupAddCard);
});

function saveProfile(event) {
  userName.textContent = userNameInput.value;
  userActivity.textContent = userActivityInput.value;
  closePopup(popupEditProfile);

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

  photoCard.addEventListener("click", () => {
    openImg(data.link, data.name);
  });

  return elementCard;
}

function renderCard(data) {
  elementsCard.prepend(createCard(data));
}

function saveCard(event) {
  renderCard({name: addPlaceInput.value, link: addLinkInput.value});
  closePopup(popupAddCard);

  event.preventDefault();
}

saveAddCardButton.addEventListener('click', saveCard);

function closePopup(popupClosed) {
  popupClosed.classList.remove('popup_opened');
}

closeEditPopupButton.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

closeAddCardButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});

closeImageButton.addEventListener('click', () => {
  closePopup(popupImage);
});

const templateCard = document.querySelector('.elements__template').content.querySelector('.elements__element');
const elementsCard = document.querySelector('.elements');

const imagePopup = popupImage.querySelector('.popup__img');
const titlePopup = popupImage.querySelector('.popup__title');

function openImg(src, textcontent) {
  popupImage.classList.add('popup_opened');
  imagePopup.src = src;
  titlePopup.textContent = textcontent;
}

initialCards.forEach((data) => {
  renderCard(data);
});

