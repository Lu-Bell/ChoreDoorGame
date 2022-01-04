//VARIABLES
let currentPlaying = true
let startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
//DOOR VARIABLES
var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");
//DOOR PATH VARIABLES
let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
//Function will run whenever the first door is clicked
let isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }return false;
}
let isClicked = (door) => {
  if (door.src === closedDoorPath){
    return false;
  } else{
  return true;
  }
}

let playDoor = (door) =>{
  numClosedDoors--;
  if (numClosedDoors === 0){
      gameOver('win');
  }
  else if (isBot(door)){
    gameOver();
  }
}

let randomDoorGenerator = () =>{
  let choreDoor = Math.floor(Math.random() * numClosedDoors)
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
  }
}

doorImage1.onclick = () =>{
  if(!isClicked(doorImage1) && currentPlaying){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if(currentPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}
doorImage3.onclick = () => {
 if(currentPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if(!currentPlaying){
    startRound();
  }
}

startRound = () => {
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good Luck!';
  currentPlaying = true;
  randomDoorGenerator();
}

let gameOver = (status) => {
  if (status === 'win') {
  startButton.innerHTML = 'You win! Play again?';
} else{
  startButton.innerHTML = "Game Over Play again?"
}
 currentPlaying = false;
}
startRound();