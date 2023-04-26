const keys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
  17, 91, 18, 32, 18, 37, 40, 39, 17];

const bodyTag = document.body;

document.onkeydown = function (event) {
  console.log(event);
};

bodyTag.classList.add('body');
console.log(document.body);
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
bodyTag.appendChild(wrapper);

const wrapperContent = document.createElement('div');
wrapperContent.classList.add('wrapper__content');
wrapper.appendChild(wrapperContent);

const title = document.createElement('h1');
title.classList.add('wrapper__title');
title.innerText = 'Virtual keyboard';

const textarea = document.createElement('textarea');
textarea.classList.add('wrapper__textarea');
textarea.name = 'text';
textarea.id = 'textarea-keys';
textarea.cols = 30;
textarea.rows = 10;

const keyboard = document.createElement('div');
keyboard.classList.add('wrapper__keyboard');
keyboard.classList.add('keyboard');

const description = document.createElement('p');
description.classList.add('wrapper__description');
description.innerText = 'The keyboard was created in the Windows operating system';

const switchLanguage = document.createElement('p');
switchLanguage.classList.add('wrapper__switch-language');
switchLanguage.innerHTML = 'To switch the language: <span class="switch-language_color">left shift + alt</span>';

wrapperContent.append(title, textarea, keyboard, description, switchLanguage);

function createKeys() {
  let str = '';
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] >= 65 && keys[i] <= 90) {
      str += `<div class="keyboard__key k${keys[i]}">${String.fromCharCode(keys[i])}</div>`;
    }
    str += `<div class="keyboard__key k${keys[i]}">${String.fromCharCode(keys[i])} ${keys[i]} ${i}</div>`;
  }
  keyboard.innerHTML = str;
}
createKeys();
