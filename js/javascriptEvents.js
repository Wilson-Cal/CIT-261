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
    touchstart,
    touchmove,
    touchend,
    transitionend
};

window.addEventListener('pagehide', () => {
    localStorage.setItem('Last Date Visited', Date());
})

window.addEventListener('pageshow', () => {
    if (localStorage.getItem('Last Date Visited'))
        document.getElementById('lastDateVisited').innerHTML = '<p>Date Last Visited: ' + localStorage.getItem('Last Date Visited') + '</p>';
    else
        document.getElementById('lastDateVisited').innerHTML = '<p>Date Last Visited: ' + Date() + '</p>';
})

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

function loadFavColor() {
    document.getElementById('favoritecolor').value = localStorage.getItem('favColor');
}

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
    str += '<p>Enter Text: <input type="text" onfocus="this.style.background = `yellow`;"></p>';
    str += '<p>When you click inside the text box, a function is called that turns the background yellow</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The focus event occurs when an element gets focus</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" onfocus="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("focus", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function keydown() {
    var str = '<h3>Key Down Example</h3>';
    str += '<p>Enter Text: <input type="text" onkeydown="document.getElementById(`keydownexample`).value = this.value;"></p>';
    str += '<p>Transfered Text: <input type="text" id="keydownexample"></p>'
    str += '<p>When you press a key down inside the text box, a function is called that transfers the last typed letter to the other input box.</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The keydown event occurs when the user is pressing a key (on the keyboard)</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" onkeydown="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("keydown", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function keypress() {
    var str = '<h3>Key Press Example</h3>';
    str += '<p>Enter Text: <input type="text" onkeypress="document.getElementById(`keypressexample`).value = this.value;"></p>';
    str += '<p>Transfered Text: <input type="text" id="keypressexample"></p>'
    str += '<p>When you press a key down inside the text box, a function is called that transfers the last typed letter to the other input box.</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The keypress event occurs when the user presses a key (on the keyboard)</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" onkeypress="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("keypress", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function keyup() {
    var str = '<h3>Key Up Example</h3>';
    str += '<p>Enter Password: <input type="password" onkeyup="document.getElementById(`keypressexample`).value = this.value;"></p>';
    str += '<p>Verify Password: <input type="password" id="keypressexample"></p>'
    str += '<p>When you press a key down and let it go up inside the text box, a function is called that transfers the password automatically.</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The keyup event occurs when the user releases a key (on the keyboard)</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" onkeyup="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("keyup", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function mousedown() {
    var str = '<h3>Mouse Down Example</h3>';
    str += '<div id="mousedowndiv" style="background-color: orange; color: white; cursor: pointer; width:100px; height:100px;" onmousedown="this.style.backgroundColor = `blue`; this.innerHTML = `I\'m Blue!`">Click me to change my color to blue</div>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The mousedown event occurs when a user presses a mouse button over an element</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" onmousedown="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("mousedown", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function mouseover() {
    var str = '<h3>Mouse Over Example</h3>';
    str += '<div id="mousedowndiv" style="background-color: orange; color: white; width:100px; height:100px;" onmouseover="this.style.backgroundColor = `blue`; this.innerHTML = `I\'m Blue!`">Hover over me to change my color to blue</div>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The mouseover event occurs when the mouse pointer is moved onto an element, or onto one of its children</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" onmouseover="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("mouseover", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function touchstart() {
    var str = '<h3>Touch Start Example</h3>';
    str += '<p ontouchstart="this.style.color = `blue`; this.innerHTML = `Touched!`">Touch me to change my color and text!</p>';
    str += '<p>This function only works on touch-friendly devices!</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The touchstart event occurs when the user touches an element.</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" ontouchstart="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("touchstart", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function touchmove() {
    var str = '<h3>Touch Move Example</h3>';
    str += '<p ontouchmove="var x = event.touches[0].clientX;var y = event.touches[0].clientY;document.getElementById(`coordinates`).innerHTML = `Coordinates: ` + x + `, ` + y;">Touch me and move your finger around the screen to see the coordinates of where you are touching!</p>';
    str += '<p>This function only works on touch-friendly devices!</p>';
    str += '<p id="coordinates"></p>'
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The touchmove event occurs when the user moves the finger across the screen</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" ontouchmove="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("touchmove", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function touchend() {
    var str = '<h3>Touch End Example</h3>';
    str += '<p ontouchend="this.innerHTML = `Touch Ended!`">Touch me then stop touching the screen to change my text!</p>';
    str += '<p>This function only works on touch-friendly devices!</p>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The touchend event occurs when the user removes the finger from an element</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML:<br>&lt;input type="text" ontouchend="<em>Your code here</em>"&gt;</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("touchend", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
}

function transitionend() {
    var str = '<h3>Transition End Example</h3>';
    str += `<style> 
    #transition {
        width: 100px;
        height: 100px;
        background: red;
        -webkit-transition: height 2s, width 2s;
    }
    #transition:hover {
        width: 375px;
        height: 375px;
    }
    </style>`;
    str += '<div id="transition"></div>';
    document.querySelector('[id=example]').innerHTML = str;
    str = '<p>The transitionend event occurs when a CSS transition has completed</p>';
    document.querySelector('[id=description').innerHTML = str;
    str = '<p>In-line HTML: N/A</p>';
    str += '<p>JS code:<br><em>element</em>.addEventListener("transitionend", () => {<em>Your code here</em>});</p>';
    document.querySelector('[id=basicSyntax').innerHTML = str;
    document.getElementById("transition").addEventListener("webkitTransitionEnd", () => {
        document.getElementById("transition").innerHTML = "Transition Ended!";
        document.getElementById("transition").style.backgroundColor = "grey";
    });
}