// ========================== GLOBAL VARIABLES ================================ 

// define the gems
    var gems = {
        red: {
            name: "RED",
            value: 0
        },
        // gems object and inside that object, we have different properties. The properties have values.
        blue: {
            name: "BLUE",
            value: 0
        },
        green: {
            name: "GREEN",
            value: 0
        },
        yellow: {
            name: "YELLOW",
            value: 0,
        },
    };

console.log(gems.red.name)


// define the counters for wins and losses 
    var wins = 0;
    var losses = 0;

// additional variables listed in HTML
    var scoreNum = 0;
    var targetScore = 0;

// ========================== HELPER FUNCTIONS ================================

// Load all the HTML first before anything
// $(document).ready(function() {

    // random number shown at start of game should be between 19 - 120.
    var Random=Math.floor(Math.random()*101+19)

    // crystals should have a random hidden value between 1 - 12.
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
// });

    var random=function(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min
    }

    var startGame=function() {
        scoreNum=0;
        targetScore=random(19,120)
           gems.blue.value=random(1,12)
           gems.red.value=random(1,12)
           gems.green.value=random(1,12)
           gems.yellow.value=random(1,12)
           console.log("yellow" + gems.yellow.value)
           $("#randomNum").text(targetScore)
        };
        
    // add number function 
    
   // ** What is .text in this case, and is it important? **
    // $("#wins").text(wins);
    // $("#losses").text(losses);

 // This time, our click event applies to every single crystal on the page. Not just one.
 

 function winner(){
    wins++; 
    $("#numberWins").text(wins);
    reset();
    }


 $("#red").on ("click", function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#scoreNum").text(userTotal); 

        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  

    // ========================== MAIN PROCESS =====================================
startGame()

    $(".gemImage").on("click", function() {
        
        // 4 individual functions for crystals 
        // then call on the add value function 

    
        // All of the same game win-lose logic applies. So the rest remains unchanged.
        alert("New score: " + counter);
     
        if (counter === targetNumber) {
          alert("You win!");
        }
     
        else if (counter >= targetNumber) {
          alert("You lose!!");
        }
     
      });