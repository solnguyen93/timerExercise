//COUNT DOWN
function countDown(count) {
  let timer = setInterval(function () {
    //Anonymous function
    //ALTERNATIVE: let timer = setInterval(() => {
    if (count !== 0) {
      console.log(count);
      count--;
    } else {
      clearInterval(timer); //stop timer/setInterval
      console.log('DONE!');
    }
  }, 1000); //set timer to 1000ms(1sec)
}

console.log(countDown(3));
//
//RANDOM GAME
function randomGame() {
  let numberOfTries = 0;
  let setIntervalId = setInterval(() => {
    let randomNum = Math.random();
    numberOfTries++;
    console.log(`Try: ${numberOfTries} , Random number: ${randomNum}`); //tester
    if (randomNum > 0.75) {
      console.log(`Total: ${numberOfTries}`);
      clearInterval(setIntervalId);
    } else {
    }
  }, 1000); //set timer to 1000ms(1sec)
}
console.log(randomGame());
