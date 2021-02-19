function init() {

  const grid = document.querySelector('.grid')

  const width = 6
  const height = 7
  const cellCount = width * height
  const cells = []

  let currentPlayer = ['player one', 'player two']
  console.log('I am current player', currentPlayer)


  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }

  }

  function startGame(event) {
    console.log('event', event.target)
  }

  document.addEventListener('click', startGame)


  createGrid()









}





window.addEventListener('DOMContentLoaded', init)