const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissor') {
      return userInput;
    }
    else{
      console.log('Error')
    }
  };
  // console.log(getUserChoice('scissor'));
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissor';
      break;
    }
  }
  // console.log(getComputerChoice());
  
  //determining a winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The Game was tie'
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper'){
        return 'The Computer Won';
      }
      else{
        return 'The User Won';
      }
  
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissor'){
        return 'The Computer Won';
      }
      else {
        return 'The User Won';
      }
    }
    if (userChoice === 'scissor'){
      if (computerChoice === 'rock'){
        return 'The Computer Won';
      }
      else {
        return 'the user WON';
      }
    }
  };
  
  // console.log(determineWinner('rock', 'scissor'));
  // console.log(determineWinner('paper', 'scissor'));
  // console.log(determineWinner('rock', 'rock'));
  
  
  const playGame = () => {
    const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();