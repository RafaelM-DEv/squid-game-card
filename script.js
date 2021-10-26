const container = document.querySelector(".container")
const card = document.querySelector(".card")
const back = document.querySelector(".back")
const number = document.querySelector(".number")
let flip = false

container.addEventListener("mousemove", (e) => {
  if(!flip){
    let xAxis = (window.innerWidth / 2 - e.pageX ) / 25
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    back.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  }
})

container.addEventListener("mouseenter", (e) => {
  card.style.transition = 'none'
  back.style.transition = 'none'
})

card.addEventListener("mouseenter", (e) => {
  card.style.transition = 'none'
  back.style.transition = 'none'
})

container.addEventListener("mouseleave", (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  back.style.transition = 'all 0.5s ease'
  back.style.transform = `rotateY(0deg) rotateX(0deg)`
  back.style.zIndex = '-1'
  flip = false
})

let a = 1
card.addEventListener('click', (e) => {
  card.style.transition = 'all 0.4s ease'
  card.style.transform = 'rotateY(180deg)'
  back.style.transition = 'all 0.4s ease'
  back.style.transform = 'rotateY(180deg)'
  back.style.zIndex = '2'
  flip = true
})

back.addEventListener('click', (e) => {
  card.style.transform = 'rotateY(0deg)'
  back.style.transform = 'rotateY(0deg)'
  back.style.zIndex = '-1'
  flip = false
})

console.log("%c Os participantes assinam um termo de consentimento com apenas três regras: \n O jogo dura seis rounds e não pode ser interrompido;    \n O jogador que quiser sair do jogo no meio da ação será eliminado;  \n O jogo pode ser interrompido caso, em votação, a maioria decida que é hora de parar.", "background: purple; padding: 10px;")

