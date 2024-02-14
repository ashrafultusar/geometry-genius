function ellipseAreaCalculate() {
    const 𝝅 = 3.14
    // ellipse-a-value 
    const ellipseAValue = document.getElementById('ellipse-a-value')
    const ellipseAText = ellipseAValue.value;
    const a = parseFloat(ellipseAText)
    console.log(a)
  
    // ellipse-b-value
    const ellipseBValue = document.getElementById('ellipse-b-value')
    const ellipseBText = ellipseBValue.value;
    const b = parseFloat(ellipseBText)
    console.log(b)

    // area calculate
    const area = 𝝅 * a * b;
    console.log(area)

    // area valu show display
    const areaDisplayShow = document.getElementById('area-display')
    areaDisplayShow.innerText = area;
}