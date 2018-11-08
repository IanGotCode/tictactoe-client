'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// playerOne and playerTwo
const playerOne = 'X'
const playerTwo = 'O'

let currentTurn = 0
// const movesMade = 0

let gameBoard = ['', '', '', '', '', '', '', '', '']

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
    // check to see if there is a value in any of the boxes.
    if (gameOver === false) {
      if (box.text() === '') {
        if (currentTurn % 2 === 0) {
          box.html(playerOne)
          // x's being added to gameBoard array
          gameBoard[event.currentTarget.id] = playerOne
          console.log(gameBoard)
          checkForWinner()
          currentTurn++
          console.log('current turn is ' + currentTurn)
        } else {
          box.html(playerTwo)
          // y's being added to gameBoard array
          gameBoard[event.currentTarget.id] = playerTwo
          console.log(gameBoard)
          checkForWinner()
          currentTurn++
          console.log('current turn is ' + currentTurn)
        }
      }
    }
  })

  function showModal (winner) {
    messageModal(winner)
    return $('.modal').show()
  }

  function messageModal (winner) {
    $('.modal-title').empty()
    return $('.modal-title').append(winner)
  }

  // hides the modal after clicking the button
  function hideModal () {
    $('.btn-dark').click(function () {
      return $('.modal').hide()
    })
  }

  // this checks for tie game
  function checkForTie () {
    if (currentTurn === 8) {
      console.log('how many times code run')
      showModal('<h5>Tie Game</h5>')
      $('.modal-body').text('No cookie for you!')
    }
  }

  // reset the gameBoard
  function resetGame () {
    $('.resetTwo').click(function () {
      gameBoard = ['', '', '', '', '', '', '', '', '']
      currentTurn = 0
      gameOver = false
      console.log(currentTurn)
      return $('.box').empty()
    })
  }

  // checking for winner
  const checkForWinner = function () {
    for (let i = 0; i < waysToWin.length; i++) {
      if (gameBoard[waysToWin[i][0]] === playerOne && gameBoard[waysToWin[i][1]] === playerOne && gameBoard[waysToWin[i][2]] === playerOne) {
        showModal('<h5>Player One Wins</h5>')
        $('.modal-body').text('You deserve a cookie!')
        gameOver = true
        currentTurn = 0
      } else if (gameBoard[waysToWin[i][0]] === playerTwo && gameBoard[waysToWin[i][1]] === playerTwo && gameBoard[waysToWin[i][2]] === playerTwo) {
        showModal('<h5>Player Two Wins</h5>')
        $('.modal-body').text('You deserve a cookie!')
        gameOver = true
        currentTurn = 0
      }
      hideModal()
    }
    checkForTie()
  }
  resetGame()
})
