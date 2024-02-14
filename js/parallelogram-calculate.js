function calculateParallelogramArea() {
    // parallelogram-base value
    const parallelogramBase = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBase.value;
    const base = parseFloat(parallelogramBaseText)
    // console.log(base)

    // // parallelogram height value
    const parallelogramHeight = document.getElementById('parallelogram-height')
    const parallelogramHeightText = parallelogramHeight.value;
    const height = parseFloat(parallelogramHeightText)
    // console.log(height)

    // area calculate
    const area = base * height;
    console.log(area)

    // display show area
    const areaDisplayShow = document.getElementById('area-show')
    areaDisplayShow.innerText = area
}