const shapes = []; // Arrays are used to store shape objects

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    // Accessor properties get the shape's name
    get name() {
        return this._name;
    }

    // Accessor properties get the color's name
    get color() {
        return this._color;
    }

    // methods of returning shape, color
    getInfo() {
        return `Shape: ${this._name}, Color: ${this._color}`;
    }
}


// Use a map to convert color code to color name
function colorCodeToName(colorCode) {
    const colorMap = {
        '#09f': 'blue',
        '#9f0': 'green',
        '#f09': 'pink',
        '#90f': 'purple',
        '#f90': 'orange',
    };
    return colorMap[colorCode.toLowerCase()] || 'unknown';
}


function createShape() {
    if (shapes.length >= 24) {
        console.log('The quantity cannot exceed 24');
        return; // 
    }

    const shapeType = document.getElementById('shape-selector').value;
    const colorCode = document.getElementById('color-selector').value;
    const colorName = colorCodeToName(colorCode); //Use a map to convert color code to color name
    const newShape = new Shape(shapeType, colorName);
    shapes.push(newShape); // Save the newly created shape object to the array


    const shapeDiv = document.createElement('div');// creat a div element
    shapeDiv.className = `shape ${shapeType}`; // set the class name of the div
    shapeDiv.style.backgroundColor = colorCode;// set the backgroundcolor for the div as 'colorCode variable'

    // unit 编号：Calculate unit number: use current shape position as number
    const unitNumber = shapes.length;
    shapeDiv.onclick = function () {
        const infoDiv = document.getElementById('shape-info');
        // output the text: Unit3:square orange
        infoDiv.textContent = `Unit ${unitNumber}: ${shapeType} ${colorName} `;
    };

    document.getElementById('shape-container').appendChild(shapeDiv);
}