/*********************************************************************************
 * Program: Minesweeper
 * Class: CIT 261
 * Proffesor: Thompson
 * Author: Sam Gay
 * Date: Spr 2019
 * 
 * Purpose: recreate the minesweeper game to be played in a web browser, 
 * specifically designed for mobile usage.
 * 
 * Game Play: Find the mines (without clicking on one) by clicking on a tile
 * to reveal what's below. 
 * 
 * If a mine is revealed, you lose; 
 * 
 * if a number is revealed, it represents how many mines are touching that 
 * tile (top, bottom, left, right, and all 4 corners); 
 * 
 * if the tile is blank, there are no mines touching it;
 * 
 * if all tiles are revealed except mines, player wins.
 *********************************************************************************/

 /**
  * Notes of code:
  * - 1000+ => mine
  * - 123 => flag
  * - 0 => empty
  * - 1-8 => one to eight mines touching
  * 
  * Fixes to make:
  * - 'setNumbers' is incrementing the mine numbers
  * 
  */



////////////////////////////////INITIAL VALUES///////////////////////////////////
let fieldSizeFactor = 10;
let fieldSize = fieldSizeFactor * fieldSizeFactor; 
let mineCount = fieldSizeFactor;
let mineLocation = [];
let mineImage = 'https://github.com/sstikel/CIT261/blob/master/minesweeper/img/Mine.png?raw=true';
let allLocations = new Array(fieldSize); 

////////////////////////////////MINES////////////////////////////////////////////
/*
* Mine Count
*/
function calcMineCount() {
  mineCount = fieldSizeFactor;
  console.log("Mines = " + mineCount);
}

/*
* mine location setter
*/
//store mine locations to array.
//TODO - find out why sometimes 11 mines are created...
//may want to use 'forEach' instead of second 'for'
function setMineLocation(){
   //randomize mine location
   for (var i = 0; i < mineCount; i++){
    let num = Math.floor(Math.random() * fieldSize);
    if(!mineLocation.includes(num)){
      allLocations[num] = 1000;
      mineLocation.push(num);
    }
    else{
      i--;
    }
    // for(var j = 0; j < mineLocation.length; j++) {
    //   //if duplicate found, rerun
    //   if (mineLocation[j] == num){
    //     i--;
    //     break;
    //   }
    // }
    // mineLocation.push(num);
    // //console.log(mineLocation[i]);
    // allLocations[num] = "m";
    
  }
  console.log("mineLocation[]: ");
  console.log(mineLocation);
}

function isAMine(location){
  if(allLocations[location] >= 1000){
    return true;
  }
  return false;
}

/////////////////////////////////NUMBERS AROUND MINES/////////////////////////
/**
 * Set numbers
 */

 //set empty tiles to 0
function setNumbers(){
  for(var i = 0; i < fieldSize; i++){
    if ( allLocations[i] != 1000){
      allLocations[i] = 0;
    }
  }
  console.log("allLocations[]: ");
  console.log(allLocations);
 
  mineLocation.forEach(function(mine){
    
    //spot right above mine
    let aboveMine = mine - fieldSizeFactor;
    //spot right below mine
    let belowMine = mine + fieldSizeFactor;
   

    /*
    *line above - works
    */
   //check for top line
   if(aboveMine >= 0){
     if(!(aboveMine >= 1000))
      allLocations[aboveMine]++;

     ////Left////
     //check for leftmost position 
     if(!((aboveMine - 1) % fieldSizeFactor == (fieldSizeFactor - 1))){
      if(!(aboveMine-1 >= 1000))
        allLocations[aboveMine-1]++;
     }


     ////Right////
     //check for rightmost position
     if(!((aboveMine + 1) % fieldSizeFactor == 0)){
       if(!(aboveMine+1 >= 1000))
        allLocations[aboveMine+1]++;
     }
   }

    /*
    *same line - works
    */
   ////left////
   //check for position 0 - no position left of 0
   if(mine != 0){
    //check for left most position - no wrapping
    if((mine - 1) % fieldSizeFactor != (fieldSizeFactor - 1)){
      if(!(mine-1 >= 1000))
        allLocations[mine-1]++;
    }
   }

   ////right////
   //check for position 99 - no position right of 99
   if(mine <= (fieldSize - 1)){
    //check for right most position - no wrapping
    if((mine + 1) % fieldSizeFactor != 0){
      if(!(mine+1 >= 1000))
        allLocations[mine+1]++;
    }
   }

    /*
    *line below - works
    */
   //check for bottom line
   if(belowMine >= (fieldSizeFactor - 1)){
     if(!(belowMine >= 1000))
      allLocations[belowMine]++;

     ////Left////
     //check for leftmost position 
     if(!((belowMine - 1) % fieldSizeFactor == (fieldSizeFactor - 1))){
       if(!(belowMine-1 >= 1000))
        allLocations[belowMine-1]++;
     }


     ////Right////
     //check for rightmost position
     if(!((belowMine + 1) % fieldSizeFactor == 0)){
       if(!(belowMine+1 >= 1000))
        allLocations[belowMine+1]++;
     }
   }    
  });
}

function isANumber(location){
  if(allLocations[location] > 0 && allLocations[location] < 10){
   return true;
  }
  return false;
}


/////////////////////////////////Empty Spaces/////////////////////////////////
function isEmpty(location){
  if(allLocations[location] == 0){
    return true;
  }
  return false;
}

/////////////////////////////////FLAGS//////////////////////////////////////// do later

////////////////////////////////SMILEY BUTTON/////////////////////////////////
function createSmileyButton(headingBar){}//handle with CSS??

function resetBoard(){}

//smiley animation to be handled in CSS

////////////////////////////////TIMER///////////////////////////////////////// do later
function createTimerBox(headingBar){}//handle with CSS??

//start timer on board click

function incTimer(){} //timer increases ever second

////////////////////////////////MINE COUNTER BOX////////////////////////////// 
function createCounterBox(headingBar){}//handle with CSS??

function decMineCount(){} //decrease when mine is found

/////////////////////////////////BOARD////////////////////////////////////////
/*
* build initial board
*/
//build header - timerBox, buttonSmiley, mineCountBox
let headingBar = document.getElementsByClassName("headingBar");
createTimerBox(headingBar);
createSmileyButton(headingBar);
createCounterBox(headingBar);

//build grid
function buildMineField(){
  let mineField = document.getElementById("mineField"); 
 //set mines
 setMineLocation();
 //set numbers
 setNumbers();

 //build divs
  for (var i = 0; i < fieldSize; i++) {
    let currentLocation = allLocations[i];
    let type = "";
    let content = "";
    //check tile content
    if(currentLocation >= 1000){
      type = "tiles tiles_mine";
      //content = "<img src='https://github.com/sstikel/CIT261/blob/master/minesweeper/img/Mine.png?raw=true' alt='mine'/>";
    }
    else if(1 == currentLocation){
      type = "tiles tiles_number number number--1";
    }
    else if(2 == currentLocation){
      type = "tiles tiles_number number number--2";
    }
    else if(3 == currentLocation){
      type = "tiles tiles_number number number--3";
    }
    else if(4 == currentLocation){
      type = "tiles tiles_number number number--4";
    }
    else if(5 == currentLocation){
      type = "tiles tiles_number number number--5";
    }
    else if(6 == currentLocation){
      type = "tiles tiles_number number number--6";
    }
    else if(7 == currentLocation){
      type = "tiles tiles_number number number--7";
    }
    else if(8 == currentLocation){
      type = "tiles tiles_number number number--8";
    }
    else {
      type = "tiles tiles_empty"
    }
    //insert minefield tiles
    mineField.innerHTML += `<div class="tiles ${type}" id='${i}' hidden> ${content}</div>`;//"<div id=" + i + "></div>";
  }

}


//erase numbers from screen//
function eraseOnScreenNumbers(){
  document.getElementsByClassName("tiles").innerHTML = '';
}
////////////////////////////////GAME PLAY///////////////////////////////////
//listener//
function playGame(event){
  console.log(event);
  
  let location = event.target.id;
  console.log(event.target.id);

  //clicks empty cell - reveals all empty, touching cells and the numbered cells around them
  if(isEmpty(location)){
    //TODO
    // let moreEmpty = true;
    // while(moreEmpty)
    // moreEmpty = false;
    // //revealBlockAroundEmpty();
    // if
  }
  //clicks numbered cell - reveals numbered cell
  else if(isANumber(location)){
    let docElement =  document.getElementById(location);
    docElement.innerHTML = allLocations[location];
    docElement.className += " tiles_number--clicked"; 
  }

  //clicks mine - reveals mine in red and all other mines normal, game loss
  else if(isAMine(location)){
    //clicks mine on first move... - swap position of mine and reveal number or empty
    let docElement = document.getElementById(location);
    //view mines
    mineLocation.forEach(element => {
      document.getElementById(element).className += " tiles_mine--show";
      //TODO - should set up as a promise
      document.getElementById(element).innerHTML = `<img src= ${mineImage} alt="mine" />`;
    });
    //clicked mine in red
    docElement.className += " tiles_mine--clicked";
    
    //TODO - end game
    
  }

  //clicks smiley - game reset

  //clicks flag

}
document.addEventListener("touchend", playGame);

////Items to include////
//empty tile clicked, reveal all connected empty tiles
//mine clicked - mine shown in red, other mines revealed, dead smiley
//all tiles clicked EXCEPT mines - game wins, display flags on mines
 