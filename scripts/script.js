const popupEditProfile = document.querySelector('.popup_edit');
const popupAddProfile = document.querySelector('.popup_add');
const popupImgProfile = document.querySelector('.popup_img');

const openPopupEditProfile = document.querySelector('.profile__edit');
const openPopupAddProfile = document.querySelector('.profile__add');

const closePopupEditProfile = popupEditProfile.querySelector('.popup__close-button');
const closePopupAddProfile = popupAddProfile.querySelector('.popup__close-button');
const closePopupImgProfile = popupImgProfile.querySelector('.popup__close-button');

const savePopupEditProfile = popupEditProfile.querySelector('.popup__save-button');
const savePopupAddProfile = popupAddProfile.querySelector('.popup__save-button');

let nameProfile = document.querySelector('.profile__name');
let activityProfile = document.querySelector('.profile__activity');

let namePopupEditProfile = popupEditProfile.querySelector('.popup__name_edit');
let activityPopupEditProfile = popupEditProfile.querySelector('.popup__activity_edit');
let namePopupAddProfile = popupAddProfile.querySelector('.popup__name_add');
let activityPopupAddProfile = popupAddProfile.querySelector('.popup__activity_add');

function openProfilePopup(popup) {
  popup.classList.add('popup_opened');
  namePopupEditProfile.value = nameProfile.textContent;
  activityPopupEditProfile.value = activityProfile.textContent;
  namePopupAddProfile.value = "";
  activityPopupAddProfile.value = "";
}

openPopupEditProfile.addEventListener('click', () => {
  openProfilePopup(popupEditProfile);
});

openPopupAddProfile.addEventListener('click', () => {
  openProfilePopup(popupAddProfile);
});

function saveEditProfilePopup(event) {
  nameProfile.textContent = namePopupEditProfile.value;
  activityProfile.textContent = activityPopupEditProfile.value;
  popupEditProfile.classList.remove('popup_opened');

  event.preventDefault();
}

savePopupEditProfile.addEventListener('click', saveEditProfilePopup);

function saveAddProfilePopup(event) {
  renderCard({name: namePopupAddProfile.value, link: activityPopupAddProfile.value});
  popupAddProfile.classList.remove('popup_opened');

  event.preventDefault();
}

savePopupAddProfile.addEventListener('click', saveAddProfilePopup);

function closePopup(popapClosed) {
  popapClosed.classList.remove('popup_opened');
}

closePopupEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

closePopupAddProfile.addEventListener('click', () => {
  closePopup(popupAddProfile);
});

closePopupImgProfile.addEventListener('click', () => {
  closePopup(popupImgProfile);
});

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const templateCard = document.querySelector('.elements__template').content.querySelector('.elements__element');
const elementsCard = document.querySelector('.elements');

let imagePopup = popupImgProfile.querySelector('.popup__img');
let titlePopup = popupImgProfile.querySelector('.popup__title');

function openImg(src, textcontent) {
  popupImgProfile.classList.add('popup_opened');
  imagePopup.src = src;
  titlePopup.textContent = textcontent;
}

function renderCard(data) {
  elementsCard.prepend(createCard(data));
}

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

initialCards.forEach((data) => {
  renderCard(data);
});

