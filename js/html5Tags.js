var context = document.getElementById('myCanvas').getContext("2d");
context.canvas.width = 600;
context.canvas.height = 260;
var c = document.getElementById('myCanvas');
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var clickSize = new Array();
var paint;

c.addEventListener("mousedown", (event) => {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    paint = true;
    addClick(event.pageX - c.offsetLeft, event.pageY - c.offsetTop, false);
    redraw();
});

c.addEventListener("mousemove", (event) => {
    if (paint) {
        addClick(event.pageX - c.offsetLeft, event.pageY - c.offsetTop, true);
        redraw();
    }
});

c.addEventListener("mouseup", (event) => {
    paint = false;
});

c.addEventListener("mouseleave", (event) => {
    paint = false;
});

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    var color = document.getElementById('canvasColor').value;
    var cursorSize = document.getElementById('canvasCursor').value;
    if (color === 'Eraser') {
        color = 'white';
    }
    clickColor.push(color);
    clickSize.push(cursorSize);
}

function redraw() {
    context.lineJoin = "round";
    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        if (clickDrag[i] && i) {
            context.moveTo(clickX[i - 1], clickY[i - 1]);
        } else {
            context.moveTo(clickX[i] - 1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.lineWidth = clickSize[i];
        context.stroke();

    }
}

function clearCanvas() {
    context.clearRect(0, 0, 600, 260);
    clickX = [];
    clickY = [];
    clickDrag = [];
    clickColor = [];
    clickSize = [];
    document.getElementById('canvasName').value = '';
}

function saveCanvas() {
    var key = document.getElementById('canvasName').value;
    if (key) {
        localStorage.setItem(key.toLowerCase(), c.toDataURL());
        showToast(`'${key}' Saved`);
    } else {
        alert('Please name your drawing before saving');
    }
}

function loadCanvas() {
    var key = document.getElementById('canvasName').value;
    if (key) {
        var dataURL = localStorage.getItem(key.toLowerCase());
        if (dataURL) {
            var img = new Image;
            img.src = dataURL;
            img.onload = function () {
                clearCanvas();
                context.drawImage(img, 0, 0);
                showToast(`'${key}' Loaded`);
            };
        } else {
            alert('Please enter a valid save name');
        }
    } else {
        alert('Please enter a valid save name');
    }
}

function showToast(message) {
    var toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.className = "show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}