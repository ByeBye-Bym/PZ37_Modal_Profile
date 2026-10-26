"use strict";

const dialog = document.querySelector("#profile-dialog");
const openButton = document.querySelector("#open-dialog");
const closeButton = document.querySelector("#close-dialog");
const form = document.querySelector("#profile-form");
const input = document.querySelector("#name-input");
const profileName = document.querySelector("#profile-name");
const status = document.querySelector("#profile-status");
const dialogError = document.querySelector("#dialog-error");

// Задание 1. На click кнопки openButton откройте dialog через showModal().

// Задание 2. На click кнопки closeButton закройте dialog через close().

// Задание 3. На submit формы отмените перезагрузку страницы.
// Если input.value.trim() не пустой, обновите profileName.textContent,
// измените status и закройте dialog. Иначе покажите подсказку в dialogError.

// Задание 4. Проверьте Escape: для <dialog> браузер уже умеет закрывать окно.
// Дополнительный обработчик Escape писать не нужно.
