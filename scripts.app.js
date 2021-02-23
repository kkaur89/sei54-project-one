function init() {

  const grid = document.querySelector('.grid')
  const chanel = document.querySelector('.P1CHANEL')
  const ysl = document.querySelector('.P1YSL')
  const dropChanel = document.querySelector('.grid div.chanel')
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

  // console.log(width)

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

  function startGame(event) {
    if (currentPlayer === allPlayers[0]) {
      event.target.classList.add('chanel', 'fall')

      const choice = Number(event.target.id)

      playerOneChoice.push(choice)
 

      let index = 1

      // FIRST WHILE LOOP = LEFT AND RIGHT

      while (cells[choice + index].classList.contains('chanel')) {
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

      while (cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index++
        

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
          chanel.classList.add('pulse')
        }

      }

      playerOneChoice = [] 

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT
      playerOneChoice.push(choice)
      index = width - 1

      while (cells[choice + index].classList.contains('chanel')) {
       
        playerOneChoice.push(choice + index)

        index = index + width - 1

       

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        } 
        
      }
      playerOneChoice = []

      playerOneChoice.push(choice)
      index = width + 1
      

      while (cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)

        index = index + width + 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        } 
        
      }

      playerOneChoice = []

      // 3RD LOOP - DIAGONAL TOP LEFT AND RIGHT

      playerOneChoice.push(choice)

      index = width - 1
      

      while (cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index = index + width - 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        } 
        
      }

      playerOneChoice = []

      playerOneChoice.push(choice)

      index = width + 1

      while (cells[choice - index].classList.contains('chanel')) {
        playerOneChoice.push(choice - index)

        index = index + width + 1

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        } 
        
      }
    
      playerOneChoice = []

      // FOURTH CHOICE - UP AND DOWN
      playerOneChoice.push(choice)

      index = 0 - width

      while (cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)

        index = index - width

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        } 
        
      }
      // console.log('playerOne', playerOneChoice)
      playerOneChoice = []

      playerOneChoice.push(choice)

      index = 0 + width

      while (cells[choice + index].classList.contains('chanel')) {
        playerOneChoice.push(choice + index)

        index = index + width 

        if (playerOneChoice.length === 4) {
          console.log('win')
          scoreOne++
          scoreOneDisplay.innerText = `SCORE: ${scoreOne}`
        } 
        
      }
      // console.log('playerOne', playerOneChoice)

      playerOneChoice = []
 
      currentPlayer = allPlayers[1]

    } else {
      event.target.classList.add('ysl', 'fall')

      const secondChoice = (Number(event.target.id))
      playerTwoChoice.push(secondChoice)

      let index = 1

      // FIRST WHILE LOOP = LEFT AND RIGHT

      while (cells[secondChoice + index].classList.contains('ysl')) {
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

      while (cells[secondChoice - index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice - index)

        index++
        

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
          ysl.classList.toggle('pulse')
        }

      }

      playerTwoChoice = [] 

      // SECOND LOOP - DIAGONAL UP LEFT AND RIGHT
      playerTwoChoice.push(secondChoice)
      index = width - 1

      while (cells[secondChoice + index].classList.contains('ysl')) {
       
        playerTwoChoice.push(secondChoice + index)

        index = index + width - 1

       

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        } 
        
      }
      playerTwoChoice = []

      playerTwoChoice.push(secondChoice)
      index = width + 1
      

      while (cells[secondChoice + index].classList.contains('ysl')) {
        playerOneChoice.push(secondChoice + index)
        index = index + width + 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        } 
        
      }

      playerTwoChoice = []

      // 3RD LOOP - DIAGONAL TOP LEFT AND RIGHT

      playerTwoChoice.push(secondChoice)

      index = width - 1
      

      while (cells[secondChoice - index].classList.contains('ysl')) {
        playerOneChoice.push(secondChoice - index)

        index = index + width - 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        } 
        
      }

      playerTwoChoice = []

      playerTwoChoice.push(secondChoice)

      index = width + 1

      while (cells[secondChoice - index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice - index)

        index = index + width + 1

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        } 
        
      }
    
      playerTwoChoice = []

      // FOURTH CHOICE - UP AND DOWN
      playerTwoChoice.push(secondChoice)

      index = 0 - width

      while (cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)

        index = index - width

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
        } 
        
      }
      // console.log('playerTwo', playerTwoChoice)
      playerTwoChoice = []

      playerTwoChoice.push(secondChoice)

      index = 0 + width

      while (cells[secondChoice + index].classList.contains('ysl')) {
        playerTwoChoice.push(secondChoice + index)

        index = index + width 

        if (playerTwoChoice.length === 4) {
          console.log('Player 2 win')
          scoreTwo++
          scoreTwoDisplay.innerText = `SCORE: ${scoreTwo}`
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

  

  document.addEventListener('click', startGame)
  // dropChanel.addEventListener('drop', startGame)
  // document.addEventListener('click', showWinner)
  // document.addEventListener('click', winningChoices)
  // endGame.addEventListener('click', gameOver)
  // restartGame.addEventListener('click', playAgain)

  // winnerElement.addEventListener('load', hideWinnerElement)


  createGrid()
  // winningChoices()
  // showWinner()





  // The below is where I want the images to hover at the top of the grid before appearing on the selected cell.
  // function mouseEnter(event){
  //   event.target.classList.add('chanel:hover, overlay')
  // }

  // function mouseLeave(event) {
  //   event.target.classList.remove('chanel:hover, overlay')
  // }



  // document.addEventListener('mouseenter', mouseEnter)
  // document.addEventListener('mouseleave', mouseLeave)







}





window.addEventListener('DOMContentLoaded', init)