
# Connect Four : SEI Project One 

## Contents

- Project Overview
- Project Brief
- Technologies Used
- Project Timeline
- Bugs
- Wins and Challenges
- Future Improvements
- Key Learnings

## Project Overview

Connect 4 is a game where players attempt to make a line of four pieces in a 7 x 6 grid. Players can drop their pieces into columns, so that their piece rests in the lowest available space in that column.

This classic game has been created with a twist, taking my love for all things luxury, each player does not have a coin to throw but instead a designer bag to place on a shelf. The aim was for the players to feel like they are in a store environment in the handbag section of Selfridges.


![Screenshot 2021-04-26 at 17 08 16](https://user-images.githubusercontent.com/77445688/116115166-0567a480-a6b2-11eb-90ac-27fffc06dca5.png)


Play the full game here: https://kkaur89.github.io/sei54-project-one/

## Project Brief

- Build a grid based game in the browser 
- Create a two player version, both playing on the same computer
- Each player must be able to drop the element on the grid 
- Determine a winner based on all possible outcomes, including diagonally
- Display the winner on the screen
- End the game once a winner has been declared

## Technologies Used

- Javascript ES6
- CSS with Animation
- HTML5
- Git
- GitHub
- Google Fonts

## Project Timeline - 7 Days

### Day One:
The first day was based around planning the game through Pseudocoding down to MVP level. Once I was signed off I started by creating the styling shell of my game so that I could visually see something on the screen. I had created the background and handbag wardrobe, as well as selecting each handbag for the users.
The grid was then created and layered on top of the wardrobe. Each cell of the grid was then given an "id" which the majority of the code would then be based around.

In terms of functionality I managed to get each of the bags to render in the cell by passing through the id, and using an event listener for the click. I was also able to switch between players once each of them had their go. 

    const width = 6
    const height = 7
    const cellCount = width * height
    const cells = []
  
    function createGrid() {
      for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div')
        // cell.textContent = i
        cell.id = i
        grid.appendChild(cell)
        cells.push(cell)
       }
     }
  
### Day Two - Three:
The second and third day was spent around writing logic for each of the possible winning scenarios. The first step was to store the user's first choice in an array, but then only store the remaining three choices based on the previous index in the array meeting the winning conditions. 

As this was my first project, I had very little experience and confidence in writing vanilla javascript, and this was therefore the most difficult part of the game for me. I had the logic behind the code in terms of knowing what each piece of code should do, but writing the syntax was where I struggled. I spent the entire weekend rewriting code, reading through notes in class, and scouring the site for javascript docs and stack overflow syntax solutions.
My logic was that I would need the id of the user choice to meet the conditions inside an if statement before being added to the array using the Push method.

### Day Four - Five:
With the guidance of the course tutors I had managed to refine my if statement and successfully start to store the index's in the array. Each player was recognised by the classname of the bag that they were given. This classname was used in the logic to push the index of that choice into a pre-defined empty array for both PlayerOneChoice and PlayerTwoChoice.

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

I also started writing out the logic for the winning conditions using a while loop. So below is the first condition to check to see if the cell selected is left or right of the current cell position. I worked on adding all of the winning conditions over day four and five, whilst also trying to add styling along the way so that I didn't leave it until the very end.

      // FIRST LOOP - LEFT AND RIGHT

      while (index % width !== 0 && checkCurrentElementPlayerOne(index)) {
        index++
          
      }


      index = choice - 1

      while ((index + 1) % width !== width - 1 && index % width !== width - 1 && checkCurrentElementPlayerOne(index)) {    // added the first the condition
 
        index--
      }
      
There were bugs and challenges at pretty much all steps of this game, at this point I realised that the game was allowing me to overtype a cell that already contained either of the players choices, which was then meant that the stored array of winning indexes were incorrect. To fix this I had to write another statement before all the while loops to say, start at the bottom row and if the cell already contains either of the bags then move to the next row up.

    function startGame(event) {
        if (currentPlayer === allPlayers[0]) {


          let choice = Number(event.target.id) % width + 36

          while (cells[choice].classList.contains('chanel') || (cells[choice].classList.contains('ysl'))) {
            choice = choice - width
          }

## Day Six: 
This day was mostly spent error handling and finalising styling features. I added the animation where the item drops from the top of the grid to the selected cell as it would in the traditional version of the game using "fall-animation". I also added features that displayed the winner on the page, which renders over the game rather than the user being taken to a different page.


## Day Seven:
This was the final day where I had a few hours in the morning to refine parts of the game. I added the bag quotes and when you hover on them the quotes change. Ideally I would have liked to add virtual shop assistants behind store shelves but I ran out of time. Below is a screen recording of some of the features mentioned above.  

https://user-images.githubusercontent.com/77445688/116259661-e7f81080-a76d-11eb-99f0-146764823b68.mov


## Bugs
- On the final day I noticed that the players were not able to draw the game, there is an error when the player reaches the top row from id 0-4. This comes up with classlist undefined. This erorr refers to a line of code where it is chekcing to see if the cell to the top right or top left of the current cell contains the bag. As this is the top row there is no other nothing above to check. I believe I would need to add extra conditions for the while loop.

## Challenges

With this project being my first one and also compeleting this solo, I faced challenges daily:
- The biggest one was the logic around the winning solutions and getting the results to store in an array. I initially avoided using any loops as I lacked confidence and knowledge which cost me time. Even when adding the while loop, each set of winning options had thier own problems which spanned over a few days.

## Wins
- Even though the logic and problem solving were my biggest challenges, I also learn't alot from each issue. I got more comfortable with while loops and vanilla javascript on whole.
- The animations I was able to implement, especially the drop feature.

## Future Improvements

- Fix the bugs.
- Responsive Design.
- Store the players score to implement Highest Score feature using local storage.
- Ensure the Winner and End Game elements were are coherent in styling with the rest of the game.
- Add a link to the retailer website so the player could purchase the handbag.
- Add sounds.

## Key Learnings
- This project has helped me to solidify my understanding of Javascript fundamentals.
- Knowing when to leave a problem and move to another section of the project.
- Comment your code as much as possible, this is something I need to do more of.
- Console.log everything, this is the key to breaking down the problem.


