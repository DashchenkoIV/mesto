const openPopap = document.querySelector('.profile__edit');
const popap = document.querySelector('.popap');
const closePopap = document.querySelector('.popap__close-button');
const savePopap = document.querySelector('.popap__save-button');
let nameProfile = document.querySelector('.profile__name');
let activityProfile = document.querySelector('.profile__activity');
let namePopap = document.querySelector('.popap__name');
let activityPopap = document.querySelector('.popap__activity');

function PopapOpen() {
  popap.classList.add('popap_opened');
}

openPopap.addEventListener('click', PopapOpen);

function PopapSave() {
  nameProfile.textContent = namePopap.value;
  activityProfile.textContent = activityPopap.value;
  popap.classList.remove('popap_opened');
}

savePopap.addEventListener('click', PopapSave);

function PopapClose() {
  namePopap.value = nameProfile.textContent;
  activityPopap.value = activityProfile.textContent;
  popap.classList.remove('popap_opened');
}

closePopap.addEventListener('click', PopapClose);
