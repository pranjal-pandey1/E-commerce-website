const magneto = document.querySelector('.magneto')
const magnetoText = document.querySelector('.magneto .text')
const dbgr = document.querySelector('#debugger')

// mouse move

const activeMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect()
    const magnetoStrength = 40
    const magnetoTextStrength = 80
    const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5
    const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5


    gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    })

    gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: Power4.easeOut
    })

}

//mouse leave 

const resetMagneto = (event) => {

    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })

    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    })
}

//add event

magneto.addEventListener('mousemove', activeMagneto)
magneto.addEventListener('mouseleave', resetMagneto)