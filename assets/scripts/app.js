'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// playerOne and playerTwo
const playerOne = 'X'
const playerTwo = 'O'

let currentTurn = 1
let movesMade = 0

let box = $('.box')

// click function that shows whats happening
box.on('click', function (e) {
  movesMade += 1

  if (currentTurn === 1) {
    event.target.innerHTML = playerOne
    event.target.style.color = 'white'
    currentTurn += 1
  } else {
    event.target.innerHTML = playerTwo
    event.target.style.color = 'white'
    currentTurn -= 1
  }
})

$(() => {

  // your JS code goes here
})
