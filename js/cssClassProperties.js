/* Code for Manipulating CSS Class Properties Using JavaScript */
let colors = ['blue', 'orange', 'purple', 'red'];
let count = 0;

document.querySelectorAll('[class=box]').forEach(box => {
    console.log(box);
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


/* Code for Designing, Defining, and Triggering CSS3 Transitions without Custom Libraries */

/* Code for Designing, Defining, and Triggering CSS3 Transforms without Custom Libraries */

/* Code for Designing, Defining, and Triggering CSS3 Animations without Custom Libraries */