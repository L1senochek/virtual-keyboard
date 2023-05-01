const headTag = document.head;
const bodyTag = document.body;
const link = document.createElement('link');
const linkIco = document.createElement('link');
const titleTag = document.createElement('title');
const wrapper = document.createElement('main');
const wrapperContent = document.createElement('div');
const title = document.createElement('h1');
export const textarea = document.createElement('textarea');
export const keyboard = document.createElement('div');
const description = document.createElement('p');
const switchLanguage = document.createElement('p');
export const capsLockIndicator = document.createElement('span');

export const keysCodeId = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
  17, 91, 18, 32, 18, 37, 40, 39, 17];

export const keysCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

export const keysEn = ['~ `', '! 1', '@ 2', '# 3', '$ 4', '% 5', '^ 6', '& 7', '* 8', '( 9', ') 0', '_ -', '+ =', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{ [', '} ]', '| \\',
  'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ': ;', '" \'', 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '< ,', '> .', '? /', '🠕', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', '🠔', '🠗', '🠖', 'ctrl'];

export const keysRu = ['ё', '! 1', '" 2', '№ 3', '; 4', '% 5', ': 6', '? 7', '* 8', '( 9', ') 0', '_ -', '+ =', 'backspace',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/ \\',
  'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ', .', '🠕', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', '🠔', '🠗', '🠖', 'ctrl'];

export const arrShiftEvent = ['Backspace', 'Tab', 'Enter', 'CapsLock', 'ShiftLeft', 'ShiftRight', 'ControlLeft',
  'MetaLeft', 'AltLeft', 'AltRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ControlRight'];

export const objShiftEvent = {
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

export const excepsionsRu = ['186', '188', '190', '219', '221', '222', '192'];
export const excSymRu = ['49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '189', '187', '191', '220'];
export const excLetterRu = ['Backquote', 'BracketLeft', 'BracketRight', 'Semicolon', 'Quote', 'Comma', 'Period'];

export function createHeadTag() {
  link.rel = 'stylesheet';
  link.href = './css/style.css';

  linkIco.rel = 'icon';
  linkIco.href = './assets/img/keyboard.ico';

  titleTag.innerText = 'Virtual keyboard';

  headTag.append(link, linkIco, titleTag);
}
// createHeadTag();

export function createStructure() {
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

export function createCapsLockIndikator() {
  const capsKey = document.querySelector('[data="CapsLock"]');
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

export function checkKeys(funct, ...codes) {
  const presKey = new Set();
  document.addEventListener('keydown', (event) => {
    presKey.add(event.code);
    for (let i = 0; i < codes.length; i += 1) {
      if (!presKey.has(i)) {
        return;
      }
    }

    if (event.code === 'ShiftLeft' && event.code === 'AltLeft') {
      document.querySelector('.keyboard__key[data="AltLeft"]').classList.add('active');
      document.querySelector('.keyboard__key[data="ShiftLeft"]').classList.add('active');
    } else if (event.code === 'AltLeft') {
      document.querySelector('.keyboard__key[data="ShiftLeft"]').classList.add('active');
    }
    presKey.clear();

    funct();
  });

  document.addEventListener('keyup', (event) => {
    presKey.delete(event.code);
  });
}
