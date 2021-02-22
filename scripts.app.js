function init() {

  const grid = document.querySelector('.grid')
  const scoreOneDisplay = document.querySelector('#scoreOne')
  const scoreTwoDisplay = document.querySelector('#scoreTwo')
  const winnerElement = document.querySelector('.winner')

  let scoreOne = 0
  let scoreTwo = 0
  let connectTimer

  const width = 6
  const height = 7
  const cellCount = width * height
  const cells = []

  const allPlayers = ['player one', 'player two']
  let currentPlayer = allPlayers[0]

  const playerOneChoice = []
  let currentIndex = playerOneChoice[0]
  const playerTwoChoice = []


  console.log('playerChoiceOne',playerOneChoice)
  console.log('playerChoiceTwo',playerTwoChoice)




  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }

  }

  // function hideWinnerElement(event) {
  //   event.target.classList.remove('winner')     // this is the winner element which I only want to appear when there has been a winner. This is not currently working
  // }

  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {
      event.target.classList.add('chanel')   

      const choice = event.target.innerText   
      playerOneChoice.push(Number(choice))    // this works and pushes all options into the array

      currentPlayer = allPlayers[1]

    } else {
      event.target.classList.add('ysl')

      const Secondchoice = event.target.innerText
      playerTwoChoice.push(Number(Secondchoice))

      currentPlayer = allPlayers[0]
    }  

  }

// this is pulling back an empty array

  function winningChoices(event) {
    if (currentIndex === playerOneChoice[0]++ || playerOneChoice[0]--) {   // started with just trying to figure out the row option first, need add modulus operator so that they cannot select option off the grid
      return playerOneChoice[1]
    } else {
      return playerOneChoice.pop()
    }
  }


  // should I be using a for loop here???  
  // this removes all but one element on the page but one at a time
  // not sure if I even needed a timer here but could not get it to clear the page without one.

  function showWinner(event) {
    connectTimer = setInterval(() => {
      if (playerOneChoice.length === 4) {
        scoreOne++
        scoreOneDisplay.innerText = scoreOne
        clearInterval(connectTimer, event.target.classList.remove('chanel', 'ysl'))
      } else if (playerTwoChoice.length === 4) {
        scoreTwo++
        scoreTwoDisplay.innerText = scoreTwo
        clearInterval(connectTimer, event.target.classList.remove('chanel', 'ysl'))
      } else {
        return 'Its a draw!'
      }
      console.log('I am the winner', showWinner)
      clearInterval(connectTimer, event.target.classList.remove('chanel', 'ysl'))
    }, 9000)
  }

  

  document.addEventListener('click', startGame)
  document.addEventListener('click', showWinner)
  document.addEventListener('click', winningChoices)

  // winnerElement.addEventListener('load', hideWinnerElement)


  createGrid()
  winningChoices()
  showWinner()





  // The below is where I want the images to hover at the top of the grid before appearing on the selected cell.


  // function mouseEnter(event){
  //   event.target.src = 'images/small-boy-chanel-handbag-blue-grained-.png'
  // }

  // function mouseLeave(event) {
  //   event.target = event.target.classList.remove('chanel')
  // }


  // document.addEventListener('mouseenter', mouseEnter)
  // document.addEventListener('mouseleave', mouseLeave)







}





window.addEventListener('DOMContentLoaded', init)