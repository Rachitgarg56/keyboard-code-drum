const key = document.querySelector('#key');
const keyCode = document.querySelector('#key-code');

const w = document.getElementsByClassName('w')[0];
const a = document.getElementsByClassName('a')[0];
const s = document.getElementsByClassName('s')[0];
const d = document.getElementsByClassName('d')[0];
const j = document.getElementsByClassName('j')[0];
const k = document.getElementsByClassName('k')[0];
const l = document.getElementsByClassName('l')[0];

const keysArr = ['w','a','s','d','j','k','l'];

document.addEventListener('keydown', handlerFunc);

// const buttons = document.querySelectorAll('button');

// buttons.forEach((btn) => {
//     btn.addEventListener('click', handlerFunc);
//     console.log(btn);
// });

function handlerFunc(e) {
    switch (e.key) {
        case 'w': {
            const audio1 = new Audio('./audios/tom-1.mp3');
            audio1.play();
            break;
        }
        case 'a': {
            const audio2 = new Audio('./audios/tom-2.mp3');
            audio2.play();
            break;
        }
        case 's': {
            const audio3 = new Audio('./audios/tom-3.mp3');
            audio3.play();
            break;
        }
        case 'd': {
            const audio4 = new Audio('./audios/tom-4.mp3');
            audio4.play();
            break;
        }
        case 'j': {
            const audio5 = new Audio('./audios/snare.mp3');
            audio5.play();
            break;
        }
        case 'k': {
            const audio6 = new Audio('./audios/kick-bass.mp3');
            audio6.play();
            break;
        }
        case 'l': {
            const audio7 = new Audio('./audios/crash.mp3');
            audio7.play();
            break;
        }
    }

    key.innerText = e.key;
    keyCode.innerText = e.keyCode;

    animation(e.key);
};

function animation(keyPressed) {
    if (keysArr.includes(keyPressed)) {
        const activeKey = eval(keyPressed);
        activeKey.classList.add('pressed');
        setTimeout(function() {
            activeKey.classList.remove('pressed');
        }, 100)
    }
};



function handleClick(e) {
    switch (e.target.innerText) {
        case 'w': {
            const audio1 = new Audio('./audios/tom-1.mp3');
            audio1.play();
            break;
        }
        case 'a': {
            const audio2 = new Audio('./audios/tom-2.mp3');
            audio2.play();
            break;
        }
        case 's': {
            const audio3 = new Audio('./audios/tom-3.mp3');
            audio3.play();
            break;
        }
        case 'd': {
            const audio4 = new Audio('./audios/tom-4.mp3');
            audio4.play();
            break;
        }
        case 'j': {
            const audio5 = new Audio('./audios/snare.mp3');
            audio5.play();
            break;
        }
        case 'k': {
            const audio6 = new Audio('./audios/kick-bass.mp3');
            audio6.play();
            break;
        }
        case 'l': {
            const audio7 = new Audio('./audios/crash.mp3');
            audio7.play();
            break;
        }
    }

    key.innerText = e.target.innerText;
    keyCode.innerText = e.target.innerText.charCodeAt(0);

    animation(e.key);
}

