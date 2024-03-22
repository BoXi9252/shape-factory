const shapes = []; // 数组用于存储形状对象

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    // 访问器属性获取形状名字
    get name() {
        return this._name;
    }

    // 访问器属性获取颜色
    get color() {
        return this._color;
    }

    // 返回形状信息的方法
    getInfo() {
        return `Shape: ${this._name}, Color: ${this._color}`;
    }
}

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
    const colorName = colorCodeToName(colorCode); // 使用映射将颜色代码转换为颜色名称
    const newShape = new Shape(shapeType, colorName);
    shapes.push(newShape); // 保存新创建的形状对象到数组

    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shapeType}`;
    shapeDiv.style.backgroundColor = colorCode;// 设置背景颜色为颜色代码

    // 计算 unit 编号：使用当前形状的位置作为编号
    const unitNumber = shapes.length;
    shapeDiv.onclick = function () {
        const infoDiv = document.getElementById('shape-info');
        // 直接使用 color 变量作为颜色代码，并确保显示正确的 unit 编号
        infoDiv.textContent = `Unit ${unitNumber}: ${shapeType} ${colorName} `;
    };

    document.getElementById('shape-container').appendChild(shapeDiv);
}
