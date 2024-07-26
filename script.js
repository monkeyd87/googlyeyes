const eye = document.querySelector('.eye')

const anchor = document.querySelector('.anchor')


let x 
let y




document.addEventListener('mousemove',event=> {
    const {clientX,clientY} = event
    x = clientX
    y = clientY

    const rekt = anchor.getBoundingClientRect()
    const anchorX =  rekt.left + rekt.width /2
    const anchorY =  rekt.top + rekt.height /2

    const angleDeg = angle(clientX,clientY,anchorX,anchorY)

    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye=>{
        eye.style.transform = `rotate(${angleDeg}deg)`
    })
})


function angle(cx,cy,ex,ey){
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy,dx)
    const deg = rad*180/Math.PI
    return deg
}