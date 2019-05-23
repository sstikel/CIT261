////////////////////////////////INITIAL VALUES///////////////////////////////////
let gridSquareCount = 100; 
let mineCount = 10;
let mineLocation = [];

////////////////////////////////MINES////////////////////////////////////////////
/*
* Mine Count
*/
function calcMineCount() {
  mineCount = gridSquareCount / 10;
}

/*
* mine location setter
*/
//store mine locations to array.
function setMineLocation(){
   //randomize mine location
   for (var i = 0; i < mineCount; i++){
    let num = Math.floor(Math.random() * gridSquareCount);
    mineLocation.forEach(function(item){
      //check for duplicates location
      if(item == num){
        i--; //do extra loop
        continue; //break out of for loop -- TODO - does not work here
      }
    });
    mineLocation.push(num);
  }
}

/////////////////////////////////NUMBERS//////////////////////////////////////


/////////////////////////////////FLAGS//////////////////////////////////////// do later

////////////////////////////////SMILEY BUTTON/////////////////////////////////
function createSmileyButton(headingBar){}//handle with CSS??

function resetBoard(){}

//smiley animation to be handled in CSS

////////////////////////////////TIMER///////////////////////////////////////// do later
function createTimerBox(headingBar){}//handle with CSS??

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
function createGame(){
  let mineField = document.getElementsByClassName("minefield"); 
 
  for (var i = 0; i < gridSquareCount; i++) {
    //insert minefield squares
    mineField.innerHTML += `<div id='${i}'></div>`;//"<div id=" + i + "></div>";
  }
}

////////////////////////////////GAME PLAY///////////////////////////////////
