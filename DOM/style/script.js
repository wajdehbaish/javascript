const text = document.querySelector('.text');
const plusbtn = document.querySelector('.plusbtn');
const minusbtn = document.querySelector('.minusbtn');

text.style.color = 'red'
let fontsize = 16
plusbtn.addEventListener('click', () => {
    console.log("dfdf");
    if (fontsize <= 104) {

        fontsize += 4
        text.style.fontSize = fontsize + 'px'
    }
});
minusbtn.addEventListener('click', () => {
    console.log("gfgf");
    if (fontsize >= 10) {

        fontsize -= 4
        text.style.fontSize = fontsize + 'px'
    }
});