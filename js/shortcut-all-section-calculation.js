/**
 * এখানে shortcut rule use করা হয়েছে। 
 * তাই এই সেকশনের কোড নিয়ে কাজ করতে হলে বাকি JS ফাইলের কোড দরকার নাই, 
 * নিলে ইরোর আসবে 
 * 
 * */


// area value calculation main function
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText)
    return inputValue;
}

// area value display show main function
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId)
    element.innerText = area;
}
    



//  traiangle card section 
function calculateTriangleArea() {
    const base = getInputValueById('triangle-base')
    const height = getInputValueById('triangle-height')

    const area = 0.5 * base * height;
    console.log(area)

    // display show
setInnerTextById('triangle-area' , area)

}




// rectangle card section
function calculateRectangleArea() {
    const base = getInputValueById('rectangle-width')
    const height = getInputValueById('rectangle-length')
    const area = base * height;
    console.log(area)

    // display secion
    setInnerTextById('areadisplay-show' , area )
}
 



//Parallelogram card section
function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base')
    const height = getInputValueById('parallelogram-height')

    const area = base * height;
    console.log(area)

    // display show
    setInnerTextById('area-show' , area)
}




// rhombus card section
function rhombusAreaCalculate() {
    const base = getInputValueById('rhombus-value1')
    const height = getInputValueById('rhombus-value2')

    const area = 0.5 * base * height;
    console.log(area)
    
      // disply show
      setInnerTextById('rhombus-area-show', area)
}
  

  

// pentagon card section
function pentagonAreaCalculate() {
    const p = getInputValueById('pentagon-p-value')
    const b = getInputValueById('pentagon-b-value')
    const area = 0.5 * p * b;
    console.log(area)

    // disply show
    setInnerTextById('pentagon-display-show', area)
}




// ellipse card section 
function ellipseAreaCalculate() {
    const 𝝅 = 3.14

    const a = getInputValueById('ellipse-a-value')
    const b = getInputValueById('ellipse-b-value')
    const area = 𝝅 * a * b;
    console.log(area)

    // disply show 
    setInnerTextById('area-display', area)
}