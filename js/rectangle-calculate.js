function calculateRectangleArea() {
    // width value output
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    // console.log(width)

    // length value output
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(length)

    // area calculation
    const area = width * length;
    console.log(area)

    // areadisplay-show vaalue
    const areaDisplayShow = document.getElementById('areadisplay-show')
    areaDisplayShow.innerText = area;
}