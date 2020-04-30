"use strict"; 


  var name = prompt ("What is your name?");
  console.log('User name is ' + name)
  
  alert('Welcome, ' + name + '!');

  var firstguess = prompt('Was I born in Seattle?').toLowerCase();
  
  console.log('User answers ' + firstguess);
  if (firstguess === 'no') {
    alert ('You got it! I was born in Indiana, just outside of Chicago.');
  }
  else { 
  prompt('Try again! Was I born in Seattle?');
  }
// Something needed above to display 'correct' alert if user guesses correctly the second or third times
  var secondguess = prompt('Did I graduate college?').toLowerCase();
  console.log('User answers ' + secondguess);

  if (secondguess === 'yes') {
    alert('That\'s right! I graduated from Indiana University.');
  }
  else {
    prompt('Try again! Did I graduate college?');
  }

  var numberanswer = 8
  function correct() {
    alert('You got it! Nice job!');
  }
  var numberguess = prompt('What number between 1 and 10 am I thinking of right now?');
  console.log(numberguess);

  if (numberguess < numberanswer); {
    prompt('Higher!');
  }
  if (numberguess > numberanswer); {
    prompt('Lower!');
  }
  // if (numberguess === numberanswer); {
  //   alert('You got it! Nice job!');
  // }
 