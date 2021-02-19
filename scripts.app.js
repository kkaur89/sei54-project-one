function init() {

  const grid = document.querySelector('.grid')

  const width = 6
  const height = 7
  const cellCount = width * height
  const cells = []

  const allPlayers = ['player one', 'player two']
  let currentPlayer = allPlayers[0]
 


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

  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {
      event.target.classList.add('chanel')
      currentPlayer = allPlayers[1]
    } else {
      event.target.classList.add('ysl')
      currentPlayer = allPlayers[0]
    }
  }

  document.addEventListener('click', startGame)


  createGrid()









}





window.addEventListener('DOMContentLoaded', init)