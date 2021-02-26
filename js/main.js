

var person = prompt("Please enter your name", "");
  if (person != null) {
      console.log("Hello" + " " +person + " Bienvenue"); }
      // enter person name

      var userchoice = prompt("choose rock, paper, scissors");
// ask for choice

// making computer choice
var computerchoice = Math.random();
if (computerchoice <0.34) {
    computerchoice = "rock";
}
    else if (computerchoice <=0.67) {
        computerchoice = "paper";
    }
    else {
        computerchoice = "scissors";
    }
    console.log(computerchoice);

// var change to choice 1 & 2

    // compare choices
    var compare = function(choice1, choice2) {
        if(choice1 === choice2) {
        return "The result is a tie!";
    } else {
        return "not a tie";
        
    }
    
}
alert(compare(userchoice, computerchoice));