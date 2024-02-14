function calculateTriangleArea() {
    // triangle base value 
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(base)

    // triangle height value

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    // console.log(height)

    // output area calculation

    const area = 0.5 * base * height;
    console.log(area)

    // display triangle-area
    const triangleAreaSpane = document.getElementById('triangle-area');
    triangleAreaSpane.innerText = area;
}