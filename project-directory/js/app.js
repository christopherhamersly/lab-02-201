"use strict"; 


  var name = prompt ("What is your name?");
  console.log('User name is ' + name)
  
  alert('Welcome, ' + name + '!');

  var firstguess = prompt('What city was I born in?').toLowerCase();
  
  console.log('User answers ' + firstguess);
  if (firstguess === 'michigan city') {
    alert ('You got it!');
  }
  else {
  prompt('Try again! What city was I born in?');
  }

  var secondguess = prompt('Where did I go to school?').toLowerCase();
  console.log('User answers ' + secondguess);

  if (secondguess === 'indiana university') {
    alert('Correct!')
  }
  else {
    prompt('Try again! Where did I go to school?')
  }
