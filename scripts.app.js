function init() {

  const grid = document.querySelector('.grid')
  const chanel = document.querySelector('.P1CHANEL')
  const ysl = document.querySelector('.P1YSL')
  const scoreOneDisplay = document.querySelector('#scoreOne')
  const scoreTwoDisplay = document.querySelector('#scoreTwo')
  const displayWinner = document.querySelector('.player-winner')
  const winnerElement = document.querySelector('.Winner')
  const endGame = document.querySelector('#finish')
  const restartGame = document.querySelector('#start-again')
  const finish = document.querySelector('.end-game')
  const finalScoreOne = document.querySelector('.player-one-final')
  const finalScoreTwo = document.querySelector('.player-two-final')


  let scoreOne = 0
  let scoreTwo = 0


  const width = 6
  const height = 7
  const cellCount = width * height
  const cells = []



  const allPlayers = ['player one', 'player two']
  let currentPlayer = allPlayers[0]

  let playerOneChoice = []
  let playerTwoChoice = []





  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      cell.id = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  function checkCurrentElementPlayerOne(index) {

    if (cells[index].classList.contains('chanel')) {
      playerOneChoice.push(index)
      return true
    } return false
  }

  function checkCurrentElementPlayerTwo(index) {

    if (cells[index].classList.contains('ysl')) {
      playerTwoChoice.push(index)
      return true
    } return false
  }

  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {


      let choice = Number(event.target.id) % width + 36

      while (cells[choice].classList.contains('chanel') || (cells[choice].classList.contains('ysl'))) {
        choice = choice - width
      }
      
      cells[choice].classList.add('chanel', 'fall')  
      playerOneChoice = [choice]

      let index =  choice + 1

      // FIRST LOOP - LEFT AND RIGHT

      while (index % width !== 0 && checkCurrentElementPlayerOne(index)) {
        index++
          
      }


      index = choice - 1

      while (index % width !== width - 1 && checkCurrentElementPlayerOne(index)) {
 
        index--
      }

      if (playerOneChoice.length >= 4) {
        console.log('win')
        scoreOne++
        scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        chanel.classList.toggle('pulse') //loop through the array cells[].classList.toogle('ysl')
       
        const myFirstTimer = setTimeout(() => {
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'         
        }, 2000)
        console.log(myFirstTimer)
         
      }

      


      playerOneChoice = [choice]

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT

      index = choice + width - 1

      while ((index + 1) % width !== 0 && index <= width * height - 1 && checkCurrentElementPlayerOne(index)) {
      
        index += (width - 1)

      }

      index = choice - width + 1
      

      while (index % width !== width - 1 && index <= width * height - 1 && checkCurrentElementPlayerOne(index)) {
  
        index -= (width + 1)
      }
      if (playerOneChoice.length >= 4) {
        console.log('win')
        scoreOne++
        scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        chanel.classList.toggle('pulse')
        
        const myFirstTimer = setTimeout(() => {
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'        
        }, 2000)
        console.log(myFirstTimer)

      } 
        
      
 
      playerOneChoice = [choice]

      // 3RD LOOP - DIAGONAL TOP LEFT AND RIGHT

      index = choice - width - 1
      
      while ((index + 1) % width !== 0 && index >= width && checkCurrentElementPlayerOne(index)) {

        index -= width - 1

      }

      index = choice + width + 1

      while (index % width !== 0 && index <= width * height - 1 && checkCurrentElementPlayerOne(index)) {

        index += width + 1
      }

      if (playerOneChoice.length >= 4) {
        console.log('win')
        scoreOne++
        scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        chanel.classList.toggle('pulse')

        const myFirstTimer = setTimeout(() => {
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'     
        }, 2000)
        console.log(myFirstTimer)
      } 
        
      
     
      playerOneChoice = [choice]

  

      // 4TH OPTION BOTTOM UP

      index = choice - width

      while (index >= width && checkCurrentElementPlayerOne(index)) {


        index = choice - width
      }

      index = choice + width

      while (index <= width * height - 1 && checkCurrentElementPlayerOne(index)) {

        // console.log('choice', choice + index)

        index = index + width 

        if (playerOneChoice.length >= 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'        
          }, 2000)
          console.log(myFirstTimer)
         
        } 
        
      }
      document.documentElement.style.setProperty('--bag', ('url("../images/118-2000644-442906D420W1000_BLACKGOLD_M.png")'))
      playerOneChoice = []
      currentPlayer = allPlayers[1]

   

    // } else if (cells.every(cells[index]).classlist.contains('ysl','chanel')) {
    //   return window.alert('Its a draw')
    } else { 

      // PLAYER TWO, 
      // PLAYER TWO, 
      // PLAYER TWO


      let secondChoice = Number(event.target.id) % width + 36

      while (cells[secondChoice].classList.contains('chanel') || (cells[secondChoice].classList.contains('ysl'))) {
        secondChoice = secondChoice - width
      }
      
      cells[secondChoice].classList.add('ysl', 'fall')  

      playerTwoChoice = [secondChoice]

      let index =  secondChoice + 1

      // FIRST WHILE LOOP = LEFT AND RIGHT

      while (index % width !== 0 && checkCurrentElementPlayerTwo(index)) {

        index++
      }


      index = secondChoice - 1

      while (index % width !== width - 1 && checkCurrentElementPlayerTwo(index)) {

        index--
      }
      if (playerTwoChoice.length >= 4) {
        console.log('Player 2 win')
        scoreTwo++
        scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        ysl.classList.toggle('pulse') // loop through the array cells[].classList.toogle('ysl')
          
        const myFirstTimer = setTimeout(() => {
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
     
        }, 2000)
        console.log(myFirstTimer)
      
      }

      
      playerTwoChoice = [secondChoice]
     

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT

      index = secondChoice + width - 1

      while ((index + 1) % width !== 0 && index <= width * height - 1 && checkCurrentElementPlayerTwo(index)) {

        index += (width - 1)
        
      }
      
      index = secondChoice - width + 1
      

      while (index % width !== width - 1 && index <= width * height - 1 && checkCurrentElementPlayerTwo(index)) {

        index -= (width + 1)

        if (playerTwoChoice.length >= 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
          }, 2000)
          console.log(myFirstTimer)
          
        } 
        
      }

      playerTwoChoice = [secondChoice]

      // 3RD LOOP - DIAGONAL TOP LEFT AND RIGHT

      index = secondChoice - width - 1
      

      while ((index + 1) % width !== 0 && index >= width && checkCurrentElementPlayerTwo(index)) {

        index -= width - 1
        
      }

  
      index = secondChoice + width + 1

      while (index % width !== 0 && index <= width * height - 1 && checkCurrentElementPlayerTwo(index)) {

        index +=  width + 1
      }

      if (playerTwoChoice.length >= 4) {
        console.log('Player 2 win')
        scoreTwo++
        scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        ysl.classList.toggle('pulse')

        const myFirstTimer = setTimeout(() => {
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
        }, 2000)
        console.log(myFirstTimer)
          
      } 
        
      
    
      playerTwoChoice = [secondChoice]

      // FOURTH CHOICE - UP AND DOWN

      index = secondChoice - width

      while (index >= width && checkCurrentElementPlayerTwo(index)) {


        index = secondChoice - width
      }


      index = secondChoice + width

      while (index <= width * height - 1 && checkCurrentElementPlayerTwo(index)) {

        index = index + width 
      }

      if (playerTwoChoice.length >= 4) {
        console.log('Player 2 win')
        scoreTwo++
        scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        ysl.classList.toggle('pulse')
          

        const myFirstTimer = setTimeout(() => {
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'           
        }, 2000)
        console.log(myFirstTimer)
          
      } 
        
      
      console.log('playerTwo', playerTwoChoice)

      playerTwoChoice = []

      currentPlayer = allPlayers[0]
      
      document.documentElement.style.setProperty('--bag', ('url("../images/small-boy-chanel-handbag-blue-grained-.png")'))
    } 
  } 


  function playAgain(event) {
    playerOneChoice = [0]
    playerTwoChoice = [0]
    currentPlayer = allPlayers[0]

    ysl.classList.remove('pulse')
    chanel.classList.remove('pulse')

    grid.innerHTML = ''
    createGrid()  

    const myFirstTimer = setTimeout(() => {
      winnerElement.style.display = 'none'
    }, 1000)

    checkCurrentElementPlayerOne(index)
    checkCurrentElementPlayerTwo(index)
    startGame()
  }


  function gameOver(event) {
    winnerElement.style.display = 'none'
    finish.style.display = 'flex'
    finalScoreOne.innerText = `PLAYER ONE FINAL SCORE: ${scoreOne}`
    finalScoreTwo.innerText = `PLAYER TWO FINAL SCORE: ${scoreTwo}`

  }



  

  grid.addEventListener('click', startGame)
  restartGame.addEventListener('click', playAgain)
  endGame.addEventListener('click', gameOver)
  // grid.removeEventListener('click', startGame, false)  THIS WORKS, disables the buttons
 



  createGrid()






}





window.addEventListener('DOMContentLoaded', init)