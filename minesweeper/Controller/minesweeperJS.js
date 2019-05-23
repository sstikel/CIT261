let gridSquareCount = 100; //initial grid count
let mineCount;

/*
* Mine Count
 */
function calcMineCount() {
  mineCount = gridSquareCount / 10;
}

/*
* build initial board
*/
//build header - timerBox, buttonSmiley, mineCountBox

//build grid
function createGame(){
  let mineField = document.getElementsByClassName("minefield"); 
  //randomize mine location
  let mineLocation = [];
  for (var i = 0; i < mineCount; i++){
    let num = Math.floor(Math.random() * 100);
    mineLocation.forEach(function(item){
      if(item == num){
        i--;
        continue; // TODO - does not work here
      }
    });
    mineLocation.push(num);
  }
  for (var i = 0; i < gridSquareCount; i++) {
    //insert minefield squares
    mineField.innerHTML += <div></div>;
  }
}

