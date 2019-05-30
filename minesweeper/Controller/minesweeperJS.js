////////////////////////////////INITIAL VALUES///////////////////////////////////
let fieldSizeFactor = 10;
let fieldSize = Math.pow(fieldSizeFactor); 
let mineCount = fieldSizeFactor;
let mineLocation = [];
let allLocations = [fieldSize];

////////////////////////////////MINES////////////////////////////////////////////
/*
* Mine Count
*/
function calcMineCount() {
  mineCount = fieldSizeFactor;
}

/*
* mine location setter
*/
//store mine locations to array.
function setMineLocation(){
   //randomize mine location
   for (var i = 0; i < mineCount; i++){
    let num = Math.floor(Math.random() * fieldSize);
    for(var j = 0; j < mineLocation.length; j++) {
      if (mineLocation[j] == num){
        i--;
        break;
      }
    }
    mineLocation.push(num);
    console.log(mineLocation[i]);
    allLocations[num] = "mine";
  }
}

/////////////////////////////////NUMBERS AROUND MINES/////////////////////////
/**
 * Set numbers
 */
mineLocation.foreach(function(mine){
  let top = mine.value - fieldSizeFactor;
  let bottom = mine.value + fieldSizeFactor;

  //above -- Is there a line above?
  if(!(top < 0)){
    //left   -- End of row?
    if ((top - 1) % fieldSizeFactor >= 0){
      if (allLocations[top-1] == ""){
        allLocations[top-1] = 1;
      }
      else
        allLocations[top-1]++;
    }
    //center -- mine - 10
    if (allLocations[top] == ""){
      allLocations[top] = 1;
    }
    else
      allLocations[top]++;
    //right  -- End of row?
    if ((top + 1) % fieldSizeFactor <= fieldSizeFactor - 1){
      if (allLocations[top+1] == ""){
        allLocations[top+1] = 1;
      }
      else
        allLocations[top+1]++;
    }
  }
  
  //beside
    if ((mine.value - 1) % fieldSizeFactor >= 0){
      if (allLocations[mine.value-1] == ""){
        allLocations[mine.value-1] = 1;
      }
      else
        allLocations[mine.value-1]++;
    }
    //right  -- End of row?
    if ((mine.value + 1) % fieldSizeFactor <= fieldSizeFactor - 1){
      if (allLocations[mine.value+1] == ""){
        allLocations[mine.value+1] = 1;
      }
      else
        allLocations[mine.value+1]++;
    }
  
  //below -- Is there a line below?
  if(!(bottom > fieldSize)){
    //left   -- End of row?
    if ((bottom - 1) % fieldSizeFactor >= 0){
      if (allLocations[bottom-1] == ""){
        allLocations[bottom-1] = 1;
      }
      else
        allLocations[bottom-1]++;
    }
    //center --
    if (allLocations[bottom] == ""){
      allLocations[bottom] = 1;
    }
    else
      allLocations[bottom]++;
    //right  -- End of row?
    if ((bottom + 1) % fieldSizeFactor <= fieldSizeFactor - 1){
      if (allLocations[bottom+1] == ""){
        allLocations[bottom+1] = 1;
      }
      else
        allLocations[bottom+1]++;
    }
  }
});


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
 
  for (var i = 0; i < fieldSize; i++) {
    //insert minefield squares
    mineField.innerHTML += `<div id='${i}'></div>`;//"<div id=" + i + "></div>";
  }
}

////////////////////////////////GAME PLAY///////////////////////////////////
