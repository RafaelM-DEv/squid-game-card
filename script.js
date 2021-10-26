const container = document.querySelector(".container")
const card = document.querySelector(".card")
const back = document.querySelector(".back")
const number = document.querySelector(".number")

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX ) / 25
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  back.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener("mouseenter", (e) => {
  card.style.transition = 'none'
  back.style.transition = 'none'
})

container.addEventListener("mouseleave", (e) => {
  card.style.transition = 'all 0.6s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  back.style.transition = 'all 0.6s ease'
  back.style.transform = `rotateY(0deg) rotateX(0deg)`
})

container.addEventListener('click', (e) => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = 'rotateY(180deg)'
  back.style.transition = 'all 0.5s ease'
  back.style.transform = 'rotateY(180deg)'
  back.style.zIndex = '2'
})

container.addEventListener('mousemove', (e) => {
  back.style.zIndex = '-1'
})


console.log("%c Os participantes assinam um termo de consentimento com apenas três regras: \n O jogo dura seis rounds e não pode ser interrompido;    \n O jogador que quiser sair do jogo no meio da ação será eliminado;  \n O jogo pode ser interrompido caso, em votação, a maioria decida que é hora de parar.", "background: purple; padding: 10px;")
