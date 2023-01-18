const comp_choice_display = document.getElementById("cc")
const user_choice = document.getElementById("uc")
const res_choice = document.getElementById("cr")
const possibles = document.querySelectorAll("button")
let uchoice
let comp_choice
let res
possibles.forEach(choice => choice.addEventListener('click', (e) => {
  uchoice = e.target.id
  user_choice.innerHTML = uchoice
  generateRandom()
  genRes()
}))

function generateRandom() {
  const randomNum = Math.floor(Math.random() * 3) + 1
  console.log(randomNum)
  if (randomNum === 1) {
    comp_choice = "Rock"
  }
  if (randomNum === 2) {
    comp_choice = "Scissors"
  }
  if (randomNum === 3) {
    comp_choice = "Paper"
  }
  comp_choice_display.innerHTML = comp_choice
}

function genRes() {
  if (comp_choice === uchoice) {
    res = "Tie"
  }
  if (comp_choice === "Rock" && uchoice === "Scissors") {
    res = "You Lose!"
  }
  if (comp_choice === "Rock" && uchoice === "Paper") {
    res = "You WIN!"
  }
  if (comp_choice === "Scissors" && uchoice === "Paper") {
    res = "You lose!"
  }
  if (comp_choice === "Scissors" && uchoice === "Rock") {
    res = "You WIN!"
  }
  if (comp_choice === "Paper" && uchoice === "Rock") {
    res = "You WIN!"
  }
  if (comp_choice === "Paper" && uchoice === "Scissors") {
    res = "You WIN!"
  }
  res_choice.innerHTML = res
}
