/*******************************************************
 * Step:1->Select All ID
 * Step:2->Use Math.random() for random number guessing
 * Step:3->At first the count of guess is 0. when the START Button click
 * the game will start
 * Step:4-> When the user input value based on this use logic to show correct, low and high guess
 * message
 * Step:5-> GameOver Statement.
 */

const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');
const playGround = document.querySelector('#playGround');
const userInput = document.querySelector('#userInput');
const checkBtn = document.querySelector('#check');
let allGuesses = document.querySelector('#allGuesses');
const remaining = document.querySelector('.lastResult');
const highOrLow = document.querySelector('#highOrLow');

const randomNumber = parseInt(Math.random()*5) + 1;
let countOfGuesses = 0;

//gameOver function
function gameOver(){
    checkBtn.setAttribute('disabled','disabled');
    userInput.setAttribute('disabled','disabled');
}
//starBtn Event
startBtn.addEventListener('click', function(){
    playGround.style.display = "block";
});
//Logics when the game start
checkBtn.addEventListener('click', function(){
    const userGuess = Number(userInput.value);
    if (countOfGuesses <= 5) {
        if (userGuess < randomNumber) {
            allGuesses.textContent += userGuess + ' ';
            highOrLow.innerHTML = `<h5 class  ='text-danger'>Your Guess is too Low. Try again.</h5>`;
            countOfGuesses++;
            remaining.innerHTML = `${6 - countOfGuesses}`;
            userInput.value = '';

        }else if (userGuess > randomNumber) {
            allGuesses.textContent += userGuess + ' ';;
            highOrLow.innerHTML = `<h5 class  ='text-danger'>Your Guess is too High. Try again.</h5>`;
            countOfGuesses++;
            remaining.innerHTML = `${6 - countOfGuesses}`;
            userInput.value = '';
            
        }else{
            allGuesses.textContent += userGuess + ' ';;
            highOrLow.innerHTML = `<h5 class  ='text-success'>Congratulation, Your Guess is Correct. if you want to play again click on the RELOAD Button.</h5>`;
            userInput.value = '';
            gameOver();
            resetBtn.style.display = 'inline-block';
        }
    }else{
        allGuesses.textContent += userGuess + ' ';;
        highOrLow.innerHTML = `<h5 class  ='text-warning'>Sorry, The Game is Over. if you want to play again click on the RELOAD Button.</h5>`;
        userInput.value = '';
        gameOver();
        resetBtn.style.display = 'inline-block';
    }
});
