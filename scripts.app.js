function init() {

  const grid = document.querySelector('.grid')
  const chanel = document.querySelector('.P1CHANEL')
  const ysl = document.querySelector('.P1YSL')
  const scoreOneDisplay = document.querySelector('#scoreOne')
  const scoreTwoDisplay = document.querySelector('#scoreTwo')
  const displayWinner = document.querySelector('.player-winner')
  const winnerElement = document.querySelector('.Winner')
  const endGame = document.querySelector('#finish')
  let nextPlayer = document.querySelector('.whos-turn')
  const restartGame = document.querySelector('#start-again')

  let scoreOne = 0
  let scoreTwo = 0
  // let connectTimer

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




  // bug - this allows the user to click in a cell that has already been used and replace with their option

  // move the winning options into a seperate function and then call it in this function
  // add another if statment to ensure the user can only pick from empty cells starting at the bottom
  //  if 0 + width * 7

  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {

      // nextPlayer.innerText = 'Player One it is now your turn'

      let choice = Number(event.target.id) % width + 36
      // console.log('choice',choice)

      while (cells[choice].classList.contains('chanel') || (cells[choice].classList.contains('ysl'))) {
        choice = choice - width
      }
      
      cells[choice].classList.add('chanel', 'fall')  
      playerOneChoice.push(choice)

      let index = 1

      // FIRST WHILE LOOP = LEFT AND RIGHT

      while ((choice + index) % width !== 0 && cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)  
 

        index++

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        }
          
      }


  

      index = 1

      while ((choice - index) % width !== width - 1 && cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index++
        

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
         
        }

      }


     

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT

   

      index = width - 1

      while ((choice + index) % width !== 0 && (choice + index) + width <= width * height - 1 && cells[choice + index].classList.contains('chanel')) {
       
        playerOneChoice.push(choice + index)

        index = index + width - 1

       

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
  

      index = width + 1
      

      while ((choice + index) % width !== width - 1 && (choice + index) + width <= width * height - 1 && cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)

        index = index + width + 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
 
     

      // 3RD LOOP - DIAGONAL TOP LEFT AND RIGHT

     

      index = width - 1
      

      while ((choice - index) % width !== 0 && (choice - index) >= width && cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index = index + width - 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
    
  



      index = width + 1

      while ((choice - index) % width !== 0 && (choice - index) + width <= width * height - 1 && cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index = index + width + 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
     
    

      // FOURTH LOOP - UP AND DOWN

     

      index = 0 - width

      while ((choice + index) >= width && cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)

        index = index - width

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
      console.log('playerOne', playerOneChoice)
   

      // STARTS FROM THE BOTTOM AND IS GOING UP

 

      index = 0 + width

      while ((choice + index) <= width * height - 1 && cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)

        console.log('choice', choice + index)

        index = index + width 

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
          displayWinner.innerText = 'Player One, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
      console.log('playerOne', playerOneChoice)

      playerOneChoice = []
 
      currentPlayer = allPlayers[1]
      // nextPlayer.innerText = 'Player Two it is now your turn'
      

    } else {


      let secondChoice = Number(event.target.id) % width + 36

      while (cells[secondChoice].classList.contains('chanel') || (cells[secondChoice].classList.contains('ysl'))) {
        secondChoice = secondChoice - width
      }
      
      cells[secondChoice].classList.add('ysl', 'fall')  

      playerTwoChoice.push(secondChoice)

      let index = 1

      // FIRST WHILE LOOP = LEFT AND RIGHT

      while ((secondChoice + index) % width !== 0 && cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)  
 

        index++

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()

        }  
      }

      index = 1

      while ((secondChoice - index) % width !== width - 1 && cells[secondChoice - index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice - index)

        index++
        

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse') // loop through the array cells[].classList.toogle('ysl')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        }

      }

      playerTwoChoice = [] 

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT
      playerTwoChoice.push(secondChoice)
      index = width - 1

      while ((secondChoice + index) % width !== 0 && (secondChoice + index) + width <= width * height - 1 && cells[secondChoice + index].classList.contains('ysl')) {
       
        playerTwoChoice.push(secondChoice + index)

        index = index + width - 1

       

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
      playerTwoChoice = []

      playerTwoChoice.push(secondChoice)
      index = width + 1
      

      while ((secondChoice + index) % width !== width - 1 && (secondChoice + index) + width <= width * height - 1 && cells[secondChoice + index].classList.contains('ysl')) {
        playerOneChoice.push(secondChoice + index)
        index = index + width + 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }

      playerTwoChoice = []

      // 3RD LOOP - DIAGONAL TOP LEFT AND RIGHT

      playerTwoChoice.push(secondChoice)

      index = width - 1
      

      while ((secondChoice - index) % width !== 0 && (secondChoice - index) >= width && cells[secondChoice - index].classList.contains('ysl')) {
        playerOneChoice.push(secondChoice - index)

        index = index + width - 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }

      playerTwoChoice = []

      playerTwoChoice.push(secondChoice)

      index = width + 1

      while ((secondChoice - index) % width !== 0 && (secondChoice - index) + width <= width * height - 1 && cells[secondChoice - index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice - index)

        index = index + width + 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
    
      playerTwoChoice = []

      // FOURTH CHOICE - UP AND DOWN
      playerTwoChoice.push(secondChoice)

      index = 0 - width

      while ((secondChoice + index) >= width && cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)

        index = index - width

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
      // console.log('playerTwo', playerTwoChoice)
      playerTwoChoice = []

      playerTwoChoice.push(secondChoice)

      index = 0 + width

      while ((secondChoice + index) <= width * height - 1 && cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)

        index = index + width 

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          displayWinner.innerText = 'Player Two, you win!'
          winnerElement.style.display = 'flex'
          grid.removeEventListener('click', startGame, false)
          playAgain()
        } 
        
      }
      // console.log('playerTwo', playerTwoChoice)

      playerTwoChoice = []
      
      currentPlayer = allPlayers[0]
    }  

  }



  // function gameOver(event) {

  // }

  function playAgain(event) {
    grid.classList.remove('chanel', 'ysl')
    scoreOne = 0
    scoreTwo = 0
    scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
    scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
    let currentPlayer = allPlayers[0]

  }

  

  grid.addEventListener('click', startGame)
  restartGame.addEventListener('click', playAgain)
  // document.addEventListener('click', winningChoices) 
  // grid.removeEventListener('click', startGame, false)  THIS WORKS, disables the buttons
 



  createGrid()






}





window.addEventListener('DOMContentLoaded', init)