// const container = document.querySelector('.container')
// const active = document.querySelector('.active')
// const clear = document.querySelector('.clear')
const charac = document.querySelector('.charac')

// const character = document.querySelector('.character')

// let n = 400

// for(let i = 1; i <= n; i++){
//     const square = document.createElement('div')
//     square.setAttribute('class','square')
//     container.append(square)
//     square.addEventListener('mouseover',()=> {
//         square.style.background = randomColor()
//         square.style.boxShadow = `0 0 10px ${randomColor()}`
//     })
//     square.addEventListener('mouseleave',()=> {
//         square.style.background = ''
//         square.style.boxShadow = ''
//     })
//     active.addEventListener('click',()=> {
//         square.style.background = randomColor()
//     })
//     clear.addEventListener('click',()=> {
//         square.style.background = ''
// })
// }

// const randomColor = ()=> {
//     let color = '#'
//     for(let i = 1; i <= 6; i++){
//      color += Math.floor(Math.random() * 10)
//     }
//     return color
// }


let m = 3000
for(let i = 0; i< m; i++){
    const character = document.createElement('div')
    character.setAttribute('class','character')
    charac.append(character)

    character.addEventListener('mouseover', ()=> {
        character.style.background = randomDiv()
    })
    character.addEventListener('mouseout', ()=> {
        // character.style.background = ''
    })
}
const randomDiv = ()=> {
    let randomer = '#'
    for(let i = 1; i<= 6; i++){
        randomer += Math.floor(Math.random() * 10)
    }
    return randomer
}


// myName()
// function myName(){
//     window.addEventListener('mousemove', (e)=> {
//         const target = e.target
//         if(!target) return
//         charac.style.left = e.pageX + 'px'
//         charac.style.top = e.pageY + 'px'
//     })
// }