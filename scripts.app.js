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
  let restartGame = document.querySelector('#start-again')
  const finish = document.querySelector('.end-game')
  const finalScoreOne = document.querySelector('.player-one-final')
  const finalScoreTwo = document.querySelector('.player-two-final')

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
      cell.textContent = i
      cell.id = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }



  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {

      // nextPlayer.innerText = 'Player One it is now your turn'

      let choice = Number(event.target.id) % width + 36

      while (cells[choice].classList.contains('chanel') || (cells[choice].classList.contains('ysl'))) {
        choice = choice - width
      }
      
      cells[choice].classList.add('chanel', 'fall')  
      playerOneChoice.push(choice)

      let index = 1

      // FIRST LOOP - LEFT AND RIGHT

      while ((choice + index) % width !== 0 && cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)  

        index++

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse') //loop through the array cells[].classList.toogle('ysl')
          
          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)

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
          chanel.classList.toggle('pulse') //loop through the array cells[].classList.toogle('ysl')
       
          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
         
        }

      }


      playerOneChoice = []

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT

      playerOneChoice.push(choice)

      index = width - 1

      while ((choice + index) % width !== 0 && (choice + index) <= width * height - 1 && cells[choice + index].classList.contains('chanel')) {
       
        playerOneChoice.push(choice + index)
      

        index = index + width - 1

       

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)

        } 
        
      }
  
 

      index = width + 1
      

      while ((choice + index) % width !== width - 1 && (choice + index) <= width * height - 1 && cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)

        index = index + width + 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
        
          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)

        } 
        
      }
 
      playerOneChoice = []

      // 3RD LOOP - DIAGONAL TOP LEFT AND RIGHT

      playerOneChoice.push(choice)

      index = width - 1
      

      while ((choice - index) % width !== 0 && (choice - index) >= width && cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index = index + width - 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
  
        } 
        
      }
    
  
  



      index = width + 1

      while ((choice - index) % width !== 0 && (choice - index) <= width * height - 1 && cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index = index + width + 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
        } 
        
      }
     
      playerOneChoice = []

      // FOURTH LOOP - UP AND DOWN

      playerOneChoice.push(choice)

      index = 0 - width

      while ((choice + index) >= width && cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)
        console.log(choice + index)

        index = index - width

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
   
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

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player One, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
         
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

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)

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
          
          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
      
        }

      }
      playerTwoChoice = []
     

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT
      playerTwoChoice.push(secondChoice)

      index = width - 1

      while ((secondChoice + index) % width !== 0 && (secondChoice + index) <= width * height - 1 && cells[secondChoice + index].classList.contains('ysl')) {
       
        playerTwoChoice.push(secondChoice + index)

        index = index + width - 1

       

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
          
        } 
        
      }
      

      index = width + 1
      

      while ((secondChoice + index) % width !== width - 1 && (secondChoice + index) <= width * height - 1 && cells[secondChoice + index].classList.contains('ysl')) {
        playerOneChoice.push(secondChoice + index)
        index = index + width + 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
          
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

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
          
        } 
        
      }

    

  

      index = width + 1

      while ((secondChoice - index) % width !== 0 && (secondChoice - index) <= width * height - 1 && cells[secondChoice - index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice - index)

        index = index + width + 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
          
        } 
        
      }
    
 

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
          
          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
          
        } 
        
      }
      // console.log('playerTwo', playerTwoChoice)


 

      index = 0 + width

      while ((secondChoice + index) <= width * height - 1 && cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)

        index = index + width 

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
          

          const myFirstTimer = setTimeout(() => {
            displayWinner.innerText = 'Player Two, you win!'
            winnerElement.style.display = 'flex'
            grid.removeEventListener('click', startGame, false)            
          }, 2000)
          console.log(myFirstTimer)
          
        } 
        
      }
      console.log('playerTwo', playerTwoChoice)

      playerTwoChoice = []
      
      currentPlayer = allPlayers[0]
    }  

  }

  

  function playAgain(event) {
    playerOneChoice[0]
    playerTwoChoice[0]
    currentPlayer = allPlayers[0]
    const myFirstTimer = setTimeout(() => {
      winnerElement.style.display = 'none'
    }, 1000)
    console.log(myFirstTimer)
    // event.target.id.classList.remove('ysl', 'chanel') // how do i clear elements from the screen
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