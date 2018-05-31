var domEvents = {
    animationstart,
    animationiteration,
    animationend,
    blur,
    change,
    click,
    focus,
    keydown,
    keypress,
    keyup,
    mousedown,
    mouseover,
    mouseout,
    pagehide,
    pageshow,
    reset,
    submit,
    touchstart,
    touchcancel,
    touchmove,
    touchend,
    transitionend
}

window.addEventListener('load', () => {
    var eventSelect = document.querySelector('[id="events"]');
    Object.keys(domEvents).forEach(event => {
        var newOption = document.createElement('option');
        newOption.setAttribute('id', event);
        newOption.value = event;
        newOption.appendChild(document.createTextNode(event));
        eventSelect.appendChild(newOption);
    })
})

document.querySelector('[id="events"]').addEventListener('change', () => {
    if (events.value) {
        var oldHTML = document.querySelector('[id=example]')
        while (oldHTML.firstChild) {
            oldHTML.removeChild(oldHTML.firstChild);
        }
        domEvents[events.value]();
    }
})

function animationstart() {
    console.log('hello there');
}

function animationiteration() {
    console.log('hello there');
}

function animationend() {
    console.log('hello there');
}

function blur() {
    var str = '<h3>Blur Example</h3>';
    str

    document.querySelector('[id=example]').innerHTML = str;
}

function change() {
    console.log('hello there');
}

function click() {
    console.log('hello there');
}

function focus() {
    console.log('hello there');
}

function keydown() {
    console.log('hello there');
}

function keypress() {
    console.log('hello there');
}

function keyup() {
    console.log('hello there');
}

function mousedown() {
    console.log('hello there');
}

function mouseover() {
    console.log('hello there');
}

function mouseout() {
    console.log('hello there');
}

function pagehide() {
    console.log('hello there');
}

function pageshow() {
    console.log('hello there');
}

function reset() {
    console.log('hello there');
}

function submit() {
    console.log('hello there');
}

function touchstart() {
    console.log('hello there');
}

function touchcancel() {
    console.log('hello there');
}

function touchmove() {
    console.log('hello there');
}

function touchend() {
    console.log('hello there');
}

function transitionend() {
    console.log('hello there');
}