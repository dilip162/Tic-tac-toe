const boxes=document.querySelectorAll('.box')
const info=document.querySelector('h3')
let circleCross='circle'
info.textContent='start with Cirle turn'
console.log(info)

function addGo(e){
    const spanCircle=document.createElement('span')
    spanCircle.classList.add(circleCross)
    e.target.append(spanCircle)
    circleCross=circleCross=="circle"?"cross":"circle"
    info.textContent=`Now the turn of : ${circleCross}`
    e.target.removeEventListener('click',addGo)
    checkScrores()
}

function checkScrores(){
    console.log(boxes)
    const winningCombo=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
]
}

boxes.forEach((box)=>{
    box.addEventListener('click',addGo)
})