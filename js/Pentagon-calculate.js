function pentagonAreaCalculate() {
    // pentagon-p-value section
    const pentagonPValue = document.getElementById('pentagon-p-value')
    const pentagonPText = pentagonPValue.value;
    const P = parseFloat(pentagonPText)
    console.log(P)

    // pentagon-b-value section 
    const pentagonBValue = document.getElementById('pentagon-b-value')
    const pentagonBText = pentagonBValue.value;
    const B = parseFloat(pentagonBText)
    console.log(B)

    // area calculate section
    const area = 0.5 * P * B
    console.log(area)

    // display value show section

    const pentagonDisplayShow = document.getElementById('pentagon-display-show')
pentagonDisplayShow.innerText = area
}