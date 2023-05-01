'use srtict';

import {
  createHeadTag, textarea, keyboard, capsLockIndicator, arrShiftEvent, objShiftEvent,
  excepsionsRu, excSymRu, excLetterRu, checkKeys, createCapsLockIndikator, keysCodeId,
  keysCode, keysEn, keysRu,
} from './create-structure.js';

let capsLockCkecked = false;
let shiftCkecked = false;
let altCkecked = false;
let lang;
let keys;

// //////////////////////////////////////////

function languageEn() {
  lang = 'en';
}

function languageRu() {
  lang = 'ru';
}

function setLocalSrotageLang() {
  localStorage.setItem('lang', lang);
}

function getLocalSrotageLang() {
  lang = localStorage.getItem('lang');
}

function checkCurrentLanguage() {
  if (!lang && localStorage.getItem('lang') === null) {
    languageEn();
    setLocalSrotageLang();
  } else if (!lang && localStorage.getItem('lang') !== null) {
    getLocalSrotageLang();
  }
}

function createKeys() {
  checkCurrentLanguage();
  if (lang === 'en') {
    keys = keysEn;
  } else if (lang === 'ru') {
    keys = keysRu;
  }
  let str = '';
  for (let i = 0; i < keys.length; i += 1) {
    str += `<div class="keyboard__key key__${keysCode[i]}" data="${keysCode[i]}" data-id="${keysCodeId[i]}">${keys[i]}</div>`;
  }
  keyboard.innerHTML = str;
  createCapsLockIndikator();
  checkKeys(
    () => {
      document.querySelector('.keyboard__key[data="AltLeft"]').classList.add('active');
      document.querySelector('.keyboard__key[data="ShiftLeft"]').classList.add('active');
    },
    'ShiftLeft',
    'AltLeft',
  );
}
createKeys();

checkCurrentLanguage();

createHeadTag();

// //////////////////////////////////////////
// functional

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
  const keyActive = document.querySelector(`.keyboard__key[data='${event.code}']`);
  textarea.focus();

  if (event.code === 'Tab' && shiftCkecked === false) {
    event.preventDefault();
    textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
  } else if (!arrShiftEvent.includes(event.code) && shiftCkecked === false) {
    event.preventDefault();
    if (Object.keys(objShiftEvent).includes(event.code)) {
      if (capsLockCkecked === true && lang === 'ru' && excLetterRu.includes(event.code)) {
        textarea.setRangeText(keyActive.textContent.toUpperCase(), textarea.selectionStart, textarea.selectionEnd, 'end');
      } else {
        const text = keyActive.textContent[keyActive.textContent.length - 1];
        textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
      }
    } else if (event.code === 'Space') {
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    } else if (capsLockCkecked === true) {
      textarea.setRangeText(keyActive.textContent.toUpperCase(), textarea.selectionStart, textarea.selectionEnd, 'end');
    } else {
      textarea.setRangeText(keyActive.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
    }
  }

  if (shiftCkecked === true && event) {
    if (event.code === 'Space') {
      event.preventDefault();
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    } else if (event.code === 'Tab') {
      event.preventDefault();
      textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
    } else if (!arrShiftEvent.includes(event.code)) {
      event.preventDefault();
      if (Object.keys(objShiftEvent).includes(event.code)) {
        if (lang === 'ru' && excLetterRu.includes(event.code) && capsLockCkecked === true) {
          textarea.setRangeText(keyActive.textContent, textarea.selectionStart, textarea.selectionEnd, 'end');
        } else if (lang === 'ru' && excLetterRu.includes(event.code) && capsLockCkecked === false) {
          textarea.setRangeText(keyActive.textContent.toUpperCase(), textarea.selectionStart, textarea.selectionEnd, 'end');
        } else {
          textarea.setRangeText(keyActive.textContent[0], textarea.selectionStart, textarea.selectionEnd, 'end');
        }
      } else if (capsLockCkecked === true) {
        event.preventDefault();
        const text = textarea.textContent + keyActive.textContent.toLowerCase();
        textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
      } else {
        event.preventDefault();
        const text = textarea.textContent + keyActive.textContent.toUpperCase();
        textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
      }
    }
  }

  if (event.code === 'Tab' && document.querySelector('.keyboard__key[data="Tab"]').classList.contains('active')) {
    textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
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
  document.querySelector(`.keyboard__key[data="${event.code}"]`).classList.remove('active');

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

function mouseClickDown(e) {
  textarea.focus();

  if (e.target.classList.contains('keyboard__key')) {
    e.target.classList.add('active');
    const dataAtr = e.target.getAttribute('data');
    const atrI = e.target.getAttribute('data-id');
    if (dataAtr === 'ArrowLeft') {
      textarea.focus();
      textarea.selectionStart = Math.max(0, textarea.selectionStart - 1);
      textarea.selectionEnd = textarea.selectionStart;
    } else if (dataAtr === 'ArrowRight') {
      textarea.focus();
      textarea.selectionStart = Math.min(textarea.textLength, textarea.selectionEnd + 1);
      textarea.selectionEnd = textarea.selectionStart;
    } else if (dataAtr === 'ArrowUp') {
      if (textarea.value.length > 60 && textarea.selectionStart > 60) {
        let str = textarea.value;
        str = textarea.value.slice(0, textarea.selectionStart);
        textarea.selectionStart = Math.max(str.lastIndexOf('\n'), textarea.selectionStart - 60, 0);
        textarea.selectionEnd = textarea.selectionStart;
      } else {
        textarea.selectionStart = 0;
        textarea.selectionEnd = textarea.selectionStart;
      }
    } else if (dataAtr === 'ArrowDown') {
      if (textarea.value.length > 60) {
        if (textarea.value.indexOf('\n', textarea.selectionStart) < textarea.selectionStart + 60) {
          const strArea = textarea.value.slice(0, textarea.selectionStart);
          const k = (textarea.selectionStart - Math.max(strArea.lastIndexOf('\n'), 0)) % 60;
          const currentEnter = textarea.value.indexOf('\n', textarea.selectionStart);
          const nextEnter = textarea.value.indexOf('\n', (textarea.value.indexOf('\n', textarea.selectionStart) + 1));
          if ((nextEnter - currentEnter) > k) {
            textarea.selectionStart = currentEnter + k + 1;
          } else if ((nextEnter - currentEnter) === k) {
            textarea.selectionStart = currentEnter + k;
          } else {
            textarea.selectionStart = nextEnter;
          }
        } else {
          textarea.selectionStart += 60;
        }
      } else {
        textarea.selectionStart = 0;
        textarea.selectionEnd = textarea.selectionStart;
      }
    }
    if (atrI >= 65 && atrI <= 90) {
      if (capsLockCkecked === true && shiftCkecked !== true) {
        const getContentUp = e.target.textContent;
        const text = textarea.textContent + getContentUp.toUpperCase();
        textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
      } else if (capsLockCkecked === true && shiftCkecked === true) {
        const getContentUp = e.target.textContent;
        const text = textarea.textContent + getContentUp.toLowerCase();
        textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
      } else if (shiftCkecked === true) {
        const getContentUp = e.target.textContent;
        const text = textarea.textContent + getContentUp.toUpperCase();
        textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
      } else {
        const getContent = e.target.textContent;
        textarea.setRangeText(getContent, textarea.selectionStart, textarea.selectionEnd, 'end');
      }
    }
    if ((atrI > 47 && atrI < 58) || (atrI > 185 && atrI < 193) || (atrI > 218 && atrI < 223)) {
      const getContent = e.target.textContent;
      if (lang === 'ru' && capsLockCkecked === true && shiftCkecked !== true) {
        if (excepsionsRu.includes(atrI)) {
          const text = textarea.textContent + getContent.toUpperCase();
          textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
        if (excSymRu.includes(atrI)) {
          const text = textarea.textContent + getContent[getContent.length - 1];
          textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
      } else if (lang === 'ru' && capsLockCkecked === true && shiftCkecked === true) {
        if (excepsionsRu.includes(atrI)) {
          const text = textarea.textContent + getContent.toLowerCase();
          textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
        if (excSymRu.includes(atrI)) {
          const text = textarea.textContent + getContent[0];
          textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
      } else if (shiftCkecked === true) {
        if (excepsionsRu.includes(atrI)) {
          if (lang === 'ru') {
            const text = textarea.textContent + getContent[getContent.length - 1].toUpperCase();
            textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
          } else {
            const text = textarea.textContent + getContent[0];
            textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
          }
        } else {
          const text = textarea.textContent + getContent[0];
          textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
        }
      } else {
        const text = textarea.textContent + getContent[getContent.length - 1];
        textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end');
      }
    }
    if (dataAtr === 'Space') {
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
    if (dataAtr === 'Backspace') {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
    }
    if (dataAtr === 'Enter') {
      textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
    if (dataAtr === 'CapsLock') {
      capsLock();
    }
    if (dataAtr === 'Tab') {
      textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
    }
    if (dataAtr === 'ShiftLeft' || dataAtr === 'ShiftRight') {
      shiftCkecked = true;
    }
  }
}

keyboard.addEventListener('mousedown', mouseClickDown);

function mouseClickUp(e) {
  if (e.target.classList.contains('keyboard__key')) {
    setTimeout(() => e.target.classList.remove('active'), 200);
    textarea.focus();
    const dataAtr = e.target.getAttribute('data');
    if (dataAtr === 'ShiftLeft') {
      shiftCkecked = false;
    }
  }
}

keyboard.addEventListener('mouseup', mouseClickUp);
keyboard.addEventListener('mouseout', mouseClickUp);
