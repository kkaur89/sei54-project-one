function init() {

  const grid = document.querySelector('.grid')

  const width = 6
  const height = 7
  const cellCount = width * height
  const cells = []

  // console.log('grid', grid)
  // console.log('cells', cells)

  const allPlayers = ['player one', 'player two']
  let currentPlayer = allPlayers[0]

  const playerOneChoice = []
  const playerTwoChoice = []

  // console.log('playerChoiceOne',playerOneChoice)
  // console.log('playerChoiceTwo',playerTwoChoice)


  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }

  }

// if player 1 choose chanel, if player 2 choose ysl
// 

// step 2 , push elemt from exisitng array into a new array based on the event listener

  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {
      event.target.classList.add('chanel')   

      const choice = event.target.innerText
      playerOneChoice.push(Number(choice))
      
      currentPlayer = allPlayers[1]      
      
    } else {
      event.target.classList.add('ysl')

      const Secondchoice = event.target.innerText
      playerTwoChoice.push(Number(Secondchoice))

      currentPlayer = allPlayers[0]
    }

  }

  document.addEventListener('click', startGame)

  createGrid()









}





window.addEventListener('DOMContentLoaded', init)