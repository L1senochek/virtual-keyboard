const headTag = document.head;
const bodyTag = document.body;
const link = document.createElement('link');
const titleTag = document.createElement('title');
const wrapper = document.createElement('div');
const wrapperContent = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const description = document.createElement('p');
const switchLanguage = document.createElement('p');
const capsLockIndicator = document.createElement('span');

const keysCodeId = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
  17, 91, 18, 32, 18, 37, 40, 39, 17];

const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const keys = ['~ `', '! 1', '@ 2', '# 3', '$ 4', '% 5', '^ 6', '& 7', '* 8', '( 9', ') 0', '_ -', '+ =', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{ [', '} ]', '| \\',
  'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ': ;', `" '`, 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '< ,', '> .', '? /', '🠕', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', '🠔', '🠗', '🠖', 'ctrl'];

let capsLockCkecked = false;

link.rel = 'stylesheet';
link.href = './css/style.css';

titleTag.innerText = 'Virtual keyboard';

headTag.append(link, titleTag);

bodyTag.classList.add('body');
wrapper.classList.add('wrapper');
bodyTag.appendChild(wrapper);

wrapperContent.classList.add('wrapper__content');
wrapper.appendChild(wrapperContent);

title.classList.add('wrapper__title');
title.innerText = 'Virtual keyboard';

textarea.classList.add('wrapper__textarea');
textarea.name = 'text';
textarea.id = 'textarea-keys';
textarea.cols = 30;
textarea.rows = 10;
// textarea.autofocus = 'autofocus';

keyboard.classList.add('wrapper__keyboard');
keyboard.classList.add('keyboard');

description.classList.add('wrapper__description');
description.innerText = 'The keyboard was created in the Windows operating system';

switchLanguage.classList.add('wrapper__switch-language');
switchLanguage.innerHTML = 'To switch the language: <span class="switch-language_color">left shift + alt</span>';

wrapperContent.append(title, textarea, keyboard, description, switchLanguage);

function createKeys() {
  let str = '';
  for (let i = 0; i < keys.length; i++) {
    str += `<div class="keyboard__key key__${keysCode[i]}" data="${keysCode[i]}" data-id="${keysCodeId[i]}">${keys[i]}</div>`;
  }
  keyboard.innerHTML = str;
}
createKeys();

// functional

document.onkeydown = function (event) {
  console.log(event);
  console.log(event.code); // KeyL
  console.log(event.key); // l
};

function pressKey(event) {
  document.querySelector(`.keyboard__key[data='${event.code}']`).classList.add('active');
  textarea.focus();

  if (textarea.textContent) {
    textarea.selectionStart = textarea.textContent.length + 1;
    textarea.selectionEnd = textarea.textContent.length + 1;

    textarea.textContent += event.key;
    console.log(textarea.value);
    console.log(textarea.textContent.length);
  }
}

document.addEventListener('keydown', pressKey);

function releaseKey(event) {
  document.querySelector(`.keyboard__key[data='${event.code}']`).classList.remove('active');
}

document.addEventListener('keyup', releaseKey);

///
function capsLock() {
  const capsKey = document.querySelector(`[data='CapsLock']`);
  capsLockIndicator.classList.add('capslock'); // capslock__active
  capsKey.prepend(capsLockIndicator);
  console.log('capsKey', capsKey, capsLockIndicator);
  if (capsLockCkecked === false) {
    
  }
}
capsLock();

function mouseClickDown(e) {
  textarea.focus();

  if (e.target.classList.contains('keyboard__key')) {
    console.log('target', e.target);
    console.log('target', e.target.getAttribute('data'));
    console.log('target', e.target.getAttribute('data-id'));
    e.target.classList.add('active');
    const dataAtr = e.target.getAttribute('data');
    const dataAtrId = e.target.getAttribute('data-id');
    if (dataAtrId >= 65 && dataAtrId <= 90) {
      const getContent = e.target.textContent;
      console.log('targettextContent', e.target.textContent);
      console.log('textareaContent', textarea.value);
      console.log('textareaContent', textarea.textContent);
      textarea.textContent += getContent;
    }
    if (dataAtr === 'Space') {
      textarea.textContent += ' ';
    }
    if (dataAtr === 'Backspace') {
      textarea.textContent = textarea.textContent.substring(0, textarea.textContent.length - 1);
    }
    if (dataAtr === 'Enter') {
      textarea.textContent += '\n';
    }
    if (dataAtr === 'CapsLock') {
      console.log(dataAtr, dataAtrId);
      capsLock();
    }
  }
}

keyboard.addEventListener('mousedown', mouseClickDown);

function mouseClickUp(e) {
  if (e.target.classList.contains('keyboard__key')) {
    // e.target.classList.remove('active');
    // console.log(e.target.classList.contains('keyboard__key'));
    setTimeout(() => e.target.classList.remove('active'), 400);
  }
}

keyboard.addEventListener('mouseup', mouseClickUp);
