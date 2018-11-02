'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// playerOne and playerTwo
const playerOne = 'X'
const playerTwo = 'O'

let currentTurn = 1
const movesMade = 0

const gameBoard = ['', '', '', '', '', '', '', '', '']

$(document).ready(function () {
  // combinations to actuually win the game
  const waysToWin = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['6', '4', '2']
  ]

  // click function to allow X's to be clicked into squares
  $('.box').click(function (event) {
    const box = $(event.target)
    if (currentTurn % 2 === 1) {
      box.html(playerOne)
      currentTurn++
    } else if (currentTurn % 2 === 0) {
      box.html(playerTwo)
      currentTurn++
    }
    // assign values to the gameBoard array

    // const y = this.data('y')
    // const x = this.data('x')
    // if ()
    // waysToWin[y][x] = playerOne // creates x to populate array in varible waysToWin in console.log
    // console.log(waysToWin)
  })

  // $('.box').click(function () {
  //   const $this = $(this)
  //   $this.html(playerTwo)
  //   const y = $this.data('y')
  //   const x = $this.data('x')
  //   waysToWin[y][x] = playerTwo // creates x to populate array in varible waysToWin
  //   console.log(waysToWin)
  // })
})
