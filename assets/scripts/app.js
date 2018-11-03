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

let gameOver = false

$(document).ready(function () {
  // combinations to actuually win the game
  const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]

  // .click function allows clicks between x's and o's from class '.box'
  $('.box').click(function (event) {
    const box = $(event.target)
    // check to see if there is a value is in any of the boxes.
    if (gameOver === false) {
      if (box.text() === '') {
        if (currentTurn % 2 === 1) {
          box.html(playerOne)
          // x's being added to gameBoard array
          gameBoard[event.currentTarget.id] = playerOne
          console.log(gameBoard)
          checkForWinner()
          currentTurn++
        } else if (currentTurn % 2 === 0) {
          box.html(playerTwo)
          // y's being added to gameBoard array
          gameBoard[event.currentTarget.id] = playerTwo
          console.log(gameBoard)
          checkForWinner()
          currentTurn++
        }
      }
    }
  })

  function showModal () {
    return $('.modal').show()
  }

  function hideModal () {
    $('.btn-secondary').click(function () {
      return $('.modal').hide()
    })
  }

  function showModalTwo () {
    return $('.modal').show()
  }

  function hideModalTwo () {
    $('.btn-secondary').click(function () {
      return $('.modal').hide()
    })
  }

  // checking for winner
  const checkForWinner = function () {
    for (let i = 0; i < waysToWin.length; i++) {
      if (gameBoard[waysToWin[i][0]] === playerOne && gameBoard[waysToWin[i][1]] === playerOne && gameBoard[waysToWin[i][2]] === playerOne) {
        showModal()
        gameOver = true
      }
      if (gameBoard[waysToWin[i][0]] === playerTwo && gameBoard[waysToWin[i][1]] === playerTwo && gameBoard[waysToWin[i][2]] === playerTwo) {
        showModalTwo()
        gameOver = true
      }
    }
    hideModal()
    hideModalTwo()
  }
})
