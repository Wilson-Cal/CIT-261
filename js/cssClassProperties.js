/* Code for Manipulating CSS Class Properties Using JavaScript */
let colors = ['blue', 'orange', 'purple', 'red'];
let count = 0;

document.querySelectorAll('[class=box]').forEach(box => {
    box.addEventListener('click', () => {
        if (count === colors.length) {
            count = 0;
        }
        box.style.backgroundColor = colors[count];
        count++;
    });
});

async function hello() {
    let course = await canvas.getCourse(11642);
    console.log(course);
}

function hello() {
    return new Promise((resolve, reject) => {
        canvas.getCourse(1164, jkhdfgjd)
    })
}


/* Code for Designing, Defining, and Triggering CSS3 Animations without Custom Libraries */
// Code to show the animation
var animationBox = document.querySelector("[class=preanimation]");
animationBox.addEventListener('click', () => {
    if (animationBox.getAttribute('class') === 'preanimation') {
        animationBox.removeAttribute('class');
        animationBox.setAttribute('class', 'animation');
    } else {
        animationBox.removeAttribute('class');
        animationBox.setAttribute('class', 'preanimation');
    }
})