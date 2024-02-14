function rhombusAreaCalculate() {
    // rhombusValue1 value
    const rhombusValue1 = document.getElementById('rhombus-value1')
    const rhombusValue1Text = rhombusValue1.value;
    const value1 = parseFloat(rhombusValue1Text)
    console.log(value1)

    // rhombusValue2 value
    const rhombusValue2 = document.getElementById('rhombus-value2')
    const rhombusValue2Text = rhombusValue2.value;
    const value2 = parseFloat(rhombusValue2Text);
    console.log(value2)

    // area calculate
    const area = 0.5 * value1 * value2;
    console.log(area)

    // display value show

    const rhombusDisplayAreaShow = document.getElementById('rhombus-area-show')
    rhombusDisplayAreaShow.innerText = area
}