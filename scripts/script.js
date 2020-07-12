const openPopap = document.querySelector('.profile__edit');
const popap = document.querySelector('.popap');
const closePopap = document.querySelector('.popap__close-button');
const savePopap = document.querySelector('.popap__save-button');
let nameProfile = document.querySelector('.profile__name');
let activityProfile = document.querySelector('.profile__activity');
let namePopap = document.querySelector('.popap__name');
let activityPopap = document.querySelector('.popap__activity');

openPopap.addEventListener('click', () => {
  popap.classList.add('popap_opened');
});

savePopap.addEventListener('click', () => {
  let namePopap = document.querySelector('.popap__name');
  let activityPopap = document.querySelector('.popap__activity');
  nameProfile.textContent = namePopap.value;
  activityProfile.textContent = activityPopap.value;
  popap.classList.remove('popap_opened');
});

closePopap.addEventListener('click', () => {
  let nameProfile = document.querySelector('.profile__name');
  let activityProfile = document.querySelector('.profile__activity');
  namePopap.value = nameProfile.textContent;
  activityPopap.value = activityProfile.textContent;
  popap.classList.remove('popap_opened');
});
