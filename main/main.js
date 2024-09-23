'use strict';
let form = document.forms.newform;
let nameInput = form.elements.name;
let yearInput = form.elements.year;

form.addEventListener('submit', userAge);

let flag = true;

function userAge(event) {

    event.preventDefault();
    nameError.innerHTML = '';
    yearError.innerHTML = '';
    flag = true;

    if (nameInput.classList.contains('error__input')) {
        nameInput.classList.remove('error__input');
    }
    if (yearInput.classList.contains('error__input')) {
        yearInput.classList.remove('error__input');
    }

    if (!nameInput.value) {
        nameError.innerHTML = 'как вас зовут?';
        nameInput.classList.add('error__input');
        flag = false;
    } else if (nameInput.value.length <= 2) {
        nameError.innerHTML = 'количество символов должно быть от 2';
        nameInput.classList.add('error__input');
        flag = false;
    }

    if (!yearInput.value) {
        yearError.innerHTML = 'какой у вас год рождения?';
        yearInput.classList.add('error__input');
        flag = false;
    } else if (yearInput.value.length != 4) {
        yearError.innerHTML = 'количество символов должно быть 4';
        yearInput.classList.add('error__input');
        flag = false;
    } else if (2024 - yearInput.value < 18) {
        yearError.innerHTML = 'вы несовершеннолетний(';
        yearInput.classList.add('error__input');
        flag = false;
    }

    if (flag == true) {
        alert("всё верно")
    }
}