/* eslint-disable no-restricted-syntax */
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
const linkIco = document.createElement('link');

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

const keysEn = ['~ `', '! 1', '@ 2', '# 3', '$ 4', '% 5', '^ 6', '& 7', '* 8', '( 9', ') 0', '_ -', '+ =', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{ [', '} ]', '| \\',
  'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ': ;', `" '`, 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '< ,', '> .', '? /', '🠕', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', '🠔', '🠗', '🠖', 'ctrl'];

const keysRu = ['ё', '! 1', '" 2', '№ 3', '; 4', '% 5', ': 6', '? 7', '* 8', '( 9', ') 0', '_ -', '+ =', 'backspace',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/ \\',
  'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', `э`, 'enter',
  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '? /', '🠕', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', '🠔', '🠗', '🠖', 'ctrl'];

const arrShiftEvent = ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft',
  'MetaLeft', 'AltLeft', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const objShiftEvent = {
  Backquote: { en: '~', ru: 'Ё' },
  Digit1: { en: '!', ru: '!' },
  Digit2: { en: '@', ru: '"' },
  Digit3: { en: '#', ru: '№' },
  Digit4: { en: '$', ru: ';' },
  Digit5: { en: '%', ru: '%' },
  Digit6: { en: '^', ru: ':' },
  Digit7: { en: '&', ru: '?' },
  Digit8: { en: '*', ru: '*' },
  Digit9: { en: '(', ru: '(' },
  Digit0: { en: ')', ru: ')' },
  Minus: { en: '_', ru: '_' },
  Equal: { en: '+', ru: '+' },
  BracketLeft: { en: '{', ru: 'Х' },
  BracketRight: { en: '}', ru: 'Ъ' },
  Backslash: { en: '|', ru: '/' },
  Semicolon: { en: ':', ru: 'Ж' },
  Quote: { en: '"', ru: 'Э' },
  Comma: { en: '<', ru: 'Б' },
  Period: { en: '>', ru: 'Ю' },
  Slash: { en: '?', ru: ',' },
};

let lang;
let keys;
// //////////////////////////////////////////

function languageEn() {
  lang = 'en';
}

function languageRu() {
  lang = 'ru';
}

function checkCurrentLanguage() {
  if (!lang) {
    languageEn();
  }
}
checkCurrentLanguage();

function setLocalSrotageLang() {
  localStorage.setItem('lang', lang);
}

setLocalSrotageLang();

function getLocalSrotageLang() {
  lang = localStorage.getItem('lang');
}

getLocalSrotageLang();
// //////////////////////////////////////////

let capsLockCkecked = false;
let shiftCkecked = false;
let altCkecked = false;

function createHeadTag() {
  link.rel = 'stylesheet';
  link.href = './css/style.css';

  linkIco.rel = 'icon';
  linkIco.href = './assets/img/keyboard.ico';

  titleTag.innerText = 'Virtual keyboard';

  headTag.append(link, linkIco, titleTag);
}
createHeadTag();
function createStructure() {
  bodyTag.classList.add('body');
  wrapper.classList.add('wrapper');
  bodyTag.prepend(wrapper);

  wrapperContent.classList.add('wrapper__content');
  wrapper.appendChild(wrapperContent);

  title.classList.add('wrapper__title');
  title.innerText = 'Virtual keyboard';

  textarea.classList.add('wrapper__textarea');
  textarea.name = 'text';
  textarea.id = 'textarea-keys';
  textarea.cols = 30;
  textarea.rows = 10;
  textarea.autofocus = 'autofocus';

  keyboard.classList.add('wrapper__keyboard');
  keyboard.classList.add('keyboard');

  description.classList.add('wrapper__description');
  description.innerText = 'The keyboard was created in the Windows operating system';

  switchLanguage.classList.add('wrapper__switch-language');
  switchLanguage.innerHTML = 'To switch the language: <span class="switch-language_color">left shift + alt</span>';

  wrapperContent.append(title, textarea, keyboard, description, switchLanguage);
}
createStructure();

function createCapsLockIndikator() {
  const capsKey = document.querySelector(`[data='CapsLock']`);
  capsLockIndicator.classList.add('capslock');
  capsKey.prepend(capsLockIndicator);
}
function pressKeyAnimation(event) {
  document.querySelector(`.keyboard__key[data='${event.code}']`).classList.add('active');
}
window.addEventListener('keydown', pressKeyAnimation);
function releaseKeyAnimation(event) {
  document.querySelector(`.keyboard__key[data='${event.code}']`).classList.remove('active');
}
window.addEventListener('keyup', releaseKeyAnimation);

function checkKeys(funct, ...codes) {
  const presKey = new Set();
  document.addEventListener('keydown', (event) => {
    presKey.add(event.code);
    for (const code of codes) {
      if (!presKey.has(code)) {
        return;
      }
    }

    if (event.code === 'ShiftLeft' && event.code === 'AltLeft') {
      document.querySelector(`.keyboard__key[data='AltLeft']`).classList.add('active');
      document.querySelector(`.keyboard__key[data='ShiftLeft']`).classList.add('active');
    } else if (event.code === 'AltLeft') {
      document.querySelector(`.keyboard__key[data='ShiftLeft']`).classList.add('active');
    }
    presKey.clear();

    funct();
  });

  document.addEventListener('keyup', (event) => {
    presKey.delete(event.code);
  });
}

function createKeys() {
  checkCurrentLanguage();
  if (lang === 'en') {
    keys = keysEn;
  } else if (lang === 'ru') {
    keys = keysRu;
  }
  console.log(keys, lang);
  let str = '';
  for (let i = 0; i < keys.length; i++) {
    str += `<div class="keyboard__key key__${keysCode[i]}" data="${keysCode[i]}" data-id="${keysCodeId[i]}">${keys[i]}</div>`;
  }
  keyboard.innerHTML = str;
  createCapsLockIndikator();
  checkKeys(
    () => {
      document.querySelector(`.keyboard__key[data='AltLeft']`).classList.add('active');
      document.querySelector(`.keyboard__key[data='ShiftLeft']`).classList.add('active');
    },
    'ShiftLeft',
    'AltLeft',
  );
}
createKeys();

// functional

document.addEventListener('keydown', (event) => {
  console.log(event);
  console.log(event.code); // KeyL
  console.log(event.key); // l
});

function capsLock() {
  if (capsLockCkecked === false) {
    capsLockIndicator.classList.add('capslock__active');
    capsLockCkecked = true;
  } else {
    capsLockIndicator.classList.remove('capslock__active');
    capsLockCkecked = false;
  }
}

function pressKey(event) {
  console.log('event11111', event);
  // document.querySelector(`.keyboard__key[data='${event.code}']`).classList.add('active');
  textarea.focus();

  if (shiftCkecked === true && event) {
    if (!arrShiftEvent.includes(event.code)) {
      if (Object.keys(objShiftEvent).includes(event.code)) {
        let language;
        checkCurrentLanguage();
        if (lang === 'en') {
          language = 'en';
        } else if (lang === 'ru') {
          language = 'ru';
        }
        event.preventDefault();
        textarea.value += textarea.textContent + objShiftEvent[event.code][language];
        textarea.selectionStart = textarea.value.length;
      } else if (capsLockCkecked === true) {
        event.preventDefault();
        textarea.value += textarea.textContent + event.key.toLowerCase();
        textarea.selectionStart = textarea.value.length;
      } else {
        event.preventDefault();
        textarea.value += textarea.textContent + event.key.toUpperCase();
        textarea.selectionStart = textarea.value.length;
      }
    }
  }
  if (event.code === 'Tab' && document.querySelector(`.keyboard__key[data='Tab']`).classList.contains('active')) {
    textarea.value += '\t';
    event.preventDefault();
  }
  if (event.code === 'CapsLock') {
    event.preventDefault();
    capsLock();
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    event.preventDefault();
    shiftCkecked = true;
  }
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
    altCkecked = true;
  }
  if ((shiftCkecked === true && event.code === 'AltLeft') || (event.code === 'ShiftLeft' && altCkecked === true)) {
    event.preventDefault();
    if (lang === 'en') {
      languageRu();
      setLocalSrotageLang();
      createKeys();
    } else {
      languageEn();
      setLocalSrotageLang();
      createKeys();
    }
  }
}

document.addEventListener('keydown', pressKey);

function releaseKey(event) {
  document.querySelector(`.keyboard__key[data='${event.code}']`).classList.remove('active');

  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    event.preventDefault();
    shiftCkecked = false;
  }
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
    altCkecked = false;
  }
}

document.addEventListener('keyup', releaseKey);

///

function mouseClickDown(e) {
  textarea.focus();
  console.log(e);

  if (e.target.classList.contains('keyboard__key')) {
    console.log('target', e.target);
    console.log('target', e.target.getAttribute('data'));
    console.log('target', e.target.getAttribute('data-id'));
    e.target.classList.add('active');
    const dataAtr = e.target.getAttribute('data');
    const atrI = e.target.getAttribute('data-id');
    if (atrI >= 65 && atrI <= 90) {
      if (capsLockCkecked === true && shiftCkecked !== true) {
        const getContentUp = e.target.textContent;
        textarea.value += textarea.textContent + getContentUp.toUpperCase();
      } else if (capsLockCkecked === true && shiftCkecked === true) {
        const getContentUp = e.target.textContent;
        textarea.value += textarea.textContent + getContentUp.toLowerCase();
      } else {
        const getContent = e.target.textContent;
        console.log('targettextContent', e.target.textContent);
        console.log('textareaContent', textarea.value);
        console.log('textareaContent', textarea.textContent);
        // textarea.textContent += getContent;
        textarea.value += textarea.textContent + getContent;
      }
    }
    if ((atrI > 47 && atrI < 58) || (atrI > 185 && atrI < 193) || (atrI > 218 && atrI < 223)) {
      const getContent = e.target.textContent;
      textarea.value += textarea.textContent + getContent[getContent.length - 1];
    }
    if (dataAtr === 'Space') {
      textarea.value += ' ';
    }
    if (dataAtr === 'Backspace') {
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    }
    if (dataAtr === 'Enter') {
      textarea.value += '\n';
    }
    if (dataAtr === 'CapsLock') {
      capsLock();
    }
    if (dataAtr === 'Tab') {
      textarea.value += '\t';
    }
    if (dataAtr === 'ShiftLeft' || dataAtr === 'ShiftRight') {
      shiftCkecked = true;
    }
  }
}

keyboard.addEventListener('mousedown', mouseClickDown);

function mouseClickUp(e) {
  if (e.target.classList.contains('keyboard__key')) {
    // e.target.classList.remove('active');
    // console.log(e.target.classList.contains('keyboard__key'));
    setTimeout(() => e.target.classList.remove('active'), 200);
    textarea.focus();
    const dataAtr = e.target.getAttribute('data');
    if (dataAtr === 'ShiftLeft') {
      shiftCkecked = false;
    }
  }
}

keyboard.addEventListener('mouseup', mouseClickUp);
