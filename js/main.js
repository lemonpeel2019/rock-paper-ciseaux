

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