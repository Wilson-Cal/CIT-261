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
};

window.addEventListener('load', () => {
    var eventSelect = document.querySelector('[id="events"]');
    Object.keys(domEvents).forEach(event => {
        var newOption = document.createElement('option');
        newOption.setAttribute('id', event);
        newOption.value = event;
        newOption.appendChild(document.createTextNode(event));
        eventSelect.appendChild(newOption);
    });
});

document.querySelector('[id="events"]').addEventListener('change', () => {
    var events = document.querySelector('[id="events"]');
    var oldHTML = document.querySelector('[id=example]');
    while (oldHTML.firstChild) {
        oldHTML.removeChild(oldHTML.firstChild);
    }
    if (events.value) {
        domEvents[events.value]();
    } else {
        document.querySelector('[id=description]').innerHTML = '<p><em>Select an Event to See its Description</em></p>';
        document.querySelector('[id=basicSyntax').innerHTML = '<p><em>Select an Event to See its Syntax</em></p>';
    }
});

function animationstart() {
    var str = '<h3>Animation Start Example</h3>';
    str += `<style>
    #animation {
        width: 200px;
        height: 100px;
        background-color: #FFAD2f;
        position: relative;
        text-align: center;
        color: white;
    }
    
    @-webkit-keyframes example {
        from {left: 0px;}
        to   {left: 275px;}
    }
    @-webkit-keyframes rgb {
        0%   {background-color: red;}
        20%  {background-color: orange;}
        40%  {background-color: yellow;}
        60%  {background-color: green;}
        80%  {background-color: blue;}
        100% {background-color: purple;}
    }
</style>`;
    str += '<div id="animation" onclick="this.style.WebkitAnimation = `example 3s`;">Click me to begin the Animation!</div>';
    str += '<p>When you click the rectangle a CSS animation will start, a function is called that will change the rectangle to a blue square</p>';
    document.querySelector('[id=example]').innerHTML = str;
    document.querySelector('[id=animation]').addEventListener('webkitAnimationStart', () => {
        document.querySelector('[id=animation]').innerHTML = '<p>Animation Started!</p>';
        document.querySelector('[id=animation]').style.width = '100px';
        document.querySelector('[id=animation]').style.backgroundColor = '#0076B6';
    });
    str = '<p>The animationstart event occurs when a CSS animation has started to play</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>N/A</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("webkitAnimationStart", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function animationiteration() {
    var str = '<h3>Animation Iteration Example</h3>';
    str += `<style>
    #animation {
        width: 100px;
        height: 100px;
        background-color: #0076B6;
        position: relative;
        text-align: center;
        color: white;
    }
    
    @-webkit-keyframes example {
        from {left: 0px;}
        to   {left: 275px;}
    }

    @-webkit-keyframes rgb {
        from {left: 0px;}
        to   {left: 275px;}
        0%   {background-color: red;    color: green;}
        20%  {background-color: orange; color: blue;}
        40%  {background-color: yellow; color: purple;}
        60%  {background-color: green;  color: red;}
        80%  {background-color: blue;   color: orange:}
        100% {background-color: purple; color: yellow;}
    }
</style>`;
    str += '<div id="animation" onclick="this.style.WebkitAnimation = `example 3s 2`;">Click me to begin the Animation!</div>';
    str += '<p>When you click the square a CSS animation will start. A function is called when the animation iterates that causes the square to constantly change colors</p>';
    document.querySelector('[id=example]').innerHTML = str;
    document.querySelector('[id=animation]').addEventListener('webkitAnimationIteration', () => {
        document.querySelector('[id=animation]').style.WebkitAnimation = 'rgb 6s infinite';
        document.querySelector('[id=animation]').innerHTML = '<p>Animation Iterated!</p>';
    });
    str = '<p>The animationiteration event occurs when a CSS animation is repeated</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>N/A</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("webkitAnimationIteration", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function animationend() {
    var str = '<h3>Animation End Example</h3>';
    str += `<style>
    #animation {
        width: 100px;
        height: 100px;
        background-color: #0076B6;
        position: relative;
        text-align: center;
        color: white;
    }
    
    @-webkit-keyframes example {
        from {left: 0px;}
        to   {left: 275px;}
    }

    @-webkit-keyframes rgb {
        from {left: 0px;}
        to   {left: 275px;}
        0%   {background-color: red;    color: green;}
        20%  {background-color: orange; color: blue;}
        40%  {background-color: yellow; color: purple;}
        60%  {background-color: green;  color: red;}
        80%  {background-color: blue;   color: orange:}
        100% {background-color: purple; color: yellow;}
    }
</style>`;
    str += '<div id="animation" onclick="this.style.WebkitAnimation = `example 3s 2`;">Click me to begin the Animation!</div>';
    str += '<p>When you click the square a CSS animation will start. A function is called when the animation ends that causes the square to turn grey</p>';
    document.querySelector('[id=example]').innerHTML = str;
    document.querySelector('[id=animation]').addEventListener('webkitAnimationIteration', () => {
        document.querySelector('[id=animation]').style.WebkitAnimation = 'rgb 6s';
        document.querySelector('[id=animation]').innerHTML = '<p>Animation Iterated!</p>';
    });
    document.querySelector('[id=animation]').addEventListener('webkitAnimationEnd', () => {
        document.querySelector('[id=animation]').innerHTML = '<p>Animation Ended!</p>';
        document.querySelector('[id=animation]').style.backgroundColor = 'grey';
    });
    str = '<p>The animationend event occurs when a CSS animation has completed</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>N/A</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("webkitAnimationEnd", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function blur() {
    var str = '<h3>Blur Example</h3>';
    str += '<p>Enter Text Here:</p>';
    str += '<textarea onblur="this.value = this.value.split(``).reverse().join(``);"></textarea>';
    str += '<p>When you leave the input field, a function is triggered which reverses the text</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The blur event occurs when an object loses focus</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br> &lt;textarea onblur="<em>Your code here"&gt;&lt;/textarea&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("blur", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function change() {
    var str = '<h3>Change Example</h3>';
    str += '<p>2 + 2 = 4?</p>';
    str += '<p id="true"><input type="radio" id="t" name="q1" onchange="document.getElementById(`true`).style.color = `green`; document.getElementById(`f`).disabled = true;">True</p>';
    str += '<p id="false"><input type="radio" id="f" name="q1" onchange="document.getElementById(`false`).style.color = `red`; document.getElementById(`t`).disabled = true;">False</p>';
    str += '<p>When you make a selection, a function is triggered which turns the text green if you are correct or red if you are incorrect</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The change event occurs when the value attribute of an element has been changed.</p>';
    str += '<p>For radiobuttons and checkboxes, the onchange event occurs when the checked state has been changed.</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br> &ltinput type="radio" onchange="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("change", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function click() {
    var str = '<h3>Click Example</h3>';
    str += '<p>Click the button below to show the current time</p>';
    str += '<button onclick="document.getElementById(`date`).innerHTML = Date(); this.innerHTML = `Update Time`;">Show Time</button>';
    str += '<p id="date"></p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The click event occurs when the user clicks on an element</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;button onclick="<em>Your code here</em>"&gt;&lt;/button&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("click", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function focus() {
    var str = '<h3>Focus Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function keydown() {
    var str = '<h3>Key Down Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function keypress() {
    var str = '<h3>Key Press Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function keyup() {
    var str = '<h3>Key Up Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function mousedown() {
    var str = '<h3>Mouse Down Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function mouseover() {
    var str = '<h3>Mouse Over Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function mouseout() {
    var str = '<h3>Mouse Out Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function pagehide() {
    var str = '<h3>Page Hide Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function pageshow() {
    var str = '<h3>Page Show Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function reset() {
    var str = '<h3>Reset Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function submit() {
    var str = '<h3>Submit Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function touchstart() {
    var str = '<h3>Touch Start Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function touchcancel() {
    var str = '<h3>Touch Cancel Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function touchmove() {
    var str = '<h3>Touch Move Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function touchend() {
    var str = '<h3>Touch End Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}

function transitionend() {
    var str = '<h3>Transition End Example</h3>';
    document.querySelector('[id=example]').innerHTML = str;
}