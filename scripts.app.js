function init() {

  const grid = document.querySelector('.grid')
  const chanel = document.querySelector('.P1CHANEL')
  const ysl = document.querySelector('.P1YSL')
  const scoreOneDisplay = document.querySelector('#scoreOne')
  const scoreTwoDisplay = document.querySelector('#scoreTwo')
  // const winnerElement = document.querySelector('.winner')
  // const endGame = document.querySelector('.finish')
  // const restartGame = document.querySelector('.start-again')

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



  // console.log(cells)

  // function hideWinnerElement(event) {
  //   event.target.classList.remove('winner')     // this is the winner element which I only want to appear when there has been a winner. This is not currently working
  // }


  // bug - this allows the user to click in a cell that has already been used and replace with their option

  // move the winning options into a seperate function and then call it in this function
  // add another if statment to ensure the user can only pick from empty cells starting at the bottom
  //  if 0 + width * 7

  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {

      let choice = Number(event.target.id) % width + 36
      console.log('choice',choice)

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
          chanel.classList.add('pulse')
         
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
        } 
        
      }
      // console.log('playerOne', playerOneChoice)
   

      // STARTS FROM THE BOTTOM AND IS GOING UP

 

      index = 0 + width

      while ((cells + choice) + width <= width * height - 1 && cells[choice + index].classList.contains('chanel') && cells[choice + index] <= width) {
        playerOneChoice.push(choice + index)

        index = index + width 

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.toggle('pulse')
        } 
        
      }
      console.log('playerOne', playerOneChoice)

      playerOneChoice = []
 
      currentPlayer = allPlayers[1]
      

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
        } 
        
      }
    
      playerTwoChoice = []

      // FOURTH CHOICE - UP AND DOWN
      playerTwoChoice.push(secondChoice)

      index = 0 + width

      while ((cells + secondChoice) >= width && cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)

        index = index - width

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
        } 
        
      }
      // console.log('playerTwo', playerTwoChoice)
      playerTwoChoice = []

      playerTwoChoice.push(secondChoice)

      index = 0 + width

      while ((cells + secondChoice) + width <= width * height - 1 && cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)

        index = index + width 

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
        } 
        
      }
      // console.log('playerTwo', playerTwoChoice)

      playerTwoChoice = []
      
      currentPlayer = allPlayers[0]
    }  

  }
















  // should I be using a for loop here???  
  // this removes all but one element on the page but one at a time
  // not sure if I even needed a timer here but could not get it to clear the page without one.
  // also at the moment this is allowing both users to win, I need the game to end on the first winner

  // function showWinner(event) {
  //   connectTimer = setInterval(() => {
  //     if (playerOneChoice.length === 4) {
  //       scoreOne++
  //       scoreOneDisplay.innerText = scoreOne
  //       clearInterval(connectTimer, event.target.classList.remove('chanel', 'ysl'))
  //       event.target.classList.add('winner')   //this is when I want the winner HTML element to come up on top of the grid

  //     } else if (playerTwoChoice.length === 4) {
  //       scoreTwo++
  //       scoreTwoDisplay.innerText = scoreTwo
  //       clearInterval(connectTimer, event.target.classList.remove('chanel', 'ysl'))
  //       event.target.classList.add('winner')

  //     } else {
  //       return 'Its a draw!'
  //     }
  //     console.log('I am the winner', showWinner)
  //     clearInterval(connectTimer, event.target.classList.remove('chanel', 'ysl'))
  //     event.target.classList.add('winner')
  //   }, 9000)
  // }

  // function gameOver(event) {

  // }

  // function playAgain(event) {

  // }

  

  grid.addEventListener('click', startGame)

  // remove event listener to end game


  // document.addEventListener('click', showWinner)
  // document.addEventListener('click', winningChoices) 
  // grid.removeEventListener('click', startGame, false)
  // restartGame.addEventListener('click', playAgain)

  // winnerElement.addEventListener('load', hideWinnerElement)


  createGrid()
  // winningChoices()
  // showWinner()






}





window.addEventListener('DOMContentLoaded', init)