const popap_edit = document.querySelector('.popap_edit');
const popap_add = document.querySelector('.popap_add');
const popap_img = document.querySelector('.popap_img');

const openPopap_edit = document.querySelector('.profile__edit');
const openPopap_add = document.querySelector('.profile__add');

const closePopap_edit = popap_edit.querySelector('.popap__close-button');
const closePopap_add = popap_add.querySelector('.popap__close-button');
const closePopap_img = popap_img.querySelector('.popap__close-button');

const savePopap_edit = popap_edit.querySelector('.popap__save-button');
const savePopap_add = popap_add.querySelector('.popap__save-button');

let nameProfile = document.querySelector('.profile__name');
let activityProfile = document.querySelector('.profile__activity');

let namePopap_edit = popap_edit.querySelector('.popap__name_edit');
let activityPopap_edit = popap_edit.querySelector('.popap__activity_edit');
let namePopap_add = popap_add.querySelector('.popap__name_add');
let activityPopap_add = popap_add.querySelector('.popap__activity_add');

openPopap_edit.addEventListener('click', () => {
  popap_edit.classList.add('popap_opened');
  namePopap_edit.value = nameProfile.textContent;
  activityPopap_edit.value = activityProfile.textContent;
});

openPopap_add.addEventListener('click', () => {
  popap_add.classList.add('popap_opened');
});

function PopapEditSave(event) {
  nameProfile.textContent = namePopap_edit.value;
  activityProfile.textContent = activityPopap_edit.value;
  popap_edit.classList.remove('popap_opened');

  event.preventDefault();
}

function PopapAddSave(event) {
  renderCard({name: namePopap_add.value, link: activityPopap_add.value});
  popap_add.classList.remove('popap_opened');

  event.preventDefault();
}

savePopap_edit.addEventListener('click', PopapEditSave);
savePopap_add.addEventListener('click', PopapAddSave);

closePopap_edit.addEventListener('click', () => {
  popap_edit.classList.remove('popap_opened');
});

closePopap_add.addEventListener('click', () => {
  popap_add.classList.remove('popap_opened');
});

closePopap_img.addEventListener('click', () => {
  popap_img.classList.remove('popap_opened');
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

const TemplateCard = document.querySelector('.elements__template').content.querySelector('.elements__element');
const ElementsCard = document.querySelector('.elements');

let imagePopap = popap_img.querySelector('.popap__img');
let titlePopap = popap_img.querySelector('.popap__title');

function OpenImg(src, textcontent) {
  popap_img.classList.add('popap_opened');
  imagePopap.src = src;
  titlePopap.textContent = textcontent;
}

function createCard(data) {
  const ElementCard = TemplateCard.cloneNode(true);

  const PhotoCard = ElementCard.querySelector('.elements__photo');
  const DeleteButtonCard = ElementCard.querySelector('.elements__delete');
  const InfoCard = ElementCard.querySelector('.elements__info');
  const TextCard = InfoCard.querySelector('.elements__text');
  const LikeButtonCard = InfoCard.querySelector('.elements__like');

  PhotoCard.src = data.link;
  TextCard.textContent = data.name;

  LikeButtonCard.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  });

  DeleteButtonCard.addEventListener('click', function () {
    ElementCard.remove();
  });

  PhotoCard.addEventListener("click", () => {
    OpenImg(data.link, data.name);
  });

  return ElementCard;
}

function renderCard(data) {
  ElementsCard.prepend(createCard(data));
}

initialCards.forEach((data) => {
  renderCard(data);
});

