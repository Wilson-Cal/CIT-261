var carData;

// Makes an AJAX request to a Car Information Database. 
function loadCarData() {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) { // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    carData = JSON.parse(xmlhttp.responseText)
                    resolve(carData);
                } else if (xmlhttp.status == 400) {
                    reject('There was a 400 error!')
                } else {
                    reject('something else other than 200 was returned');
                }
            }
        };

        xmlhttp.open("GET", "https://raw.githubusercontent.com/VinceG/Auto-Cars-Makes-And-Models/master/models-json.txt", true);
        xmlhttp.send();
    });
}

function setMakes(carData) {
    var makeSelect = document.querySelector('select[id="make"]');
    carData.forEach(make => {
        var newMake = document.createElement('option');
        newMake.value = make.title;
        newMake.innerHTML = make.title;
        makeSelect.appendChild(newMake);
    });
}

// This function only gets called when the user chooses a make for their car
function setModels(make) {
    var modelSelect = document.querySelector('select[id="model"]');
    while (modelSelect.firstChild) {
        modelSelect.removeChild(modelSelect.firstChild);
    }
    for (x in carData) {
        if (carData[x].title === make.value) {
            carData[x].models.forEach(model => {
                var newModel = document.createElement('option');
                newModel.value = model.title;
                newModel.innerHTML = model.title;
                modelSelect.appendChild(newModel);
            })
            break;
        }
    }
}

function setYears() {
    var yearSelect = document.querySelector('select[id="year"]');
    var years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
    years.forEach(year => {
        var newYear = document.createElement('option');
        newYear.value = year;
        newYear.innerHTML = year;
        yearSelect.appendChild(newYear);

    });
}

function setColors() {
    var colorSelect = document.querySelector('select[id="color"]');
    var colors = ['Red', 'Blue', 'Green', 'Black', 'Silver', 'White']
    colors.forEach(color => {
        var newColor = document.createElement('option');
        newColor.value = color;
        newColor.innerHTML = color;
        colorSelect.appendChild(newColor);

    });
}

function createCarJavaScriptObject() {
    var formFields = document.querySelectorAll('select');
    var carObj = {
        make: formFields[0].value,
        model: formFields[1].value,
        year: formFields[2].value,
        color: formFields[3].value
    }
    document.getElementById('carObjectDiv').innerHTML = '<p>Car Object(Stringified): ' + JSON.stringify(carObj) + '</p>';
}

// Load-time driver function
function main() {
    loadCarData()
        .then(setMakes)
        .then(setYears)
        .then(setColors);
}

main();