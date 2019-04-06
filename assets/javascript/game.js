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
    var userTotal = 0;
    var targetScore = 0;

// ========================== HELPER FUNCTIONS ================================

// Load all the HTML first before anything
// $(document).ready(function() {

    // random number shown at start of game should be between 19 - 120.
    var Random=Math.floor(Math.random()*101+19);

    // crystals should have a random hidden value between 1 - 12.
    gems.red.value= Math.floor(Math.random()*11+1);
    gems.yellow.value= Math.floor(Math.random()*11+1);
    gems.green.value= Math.floor(Math.random()*11+1);
    gems.blue.value= Math.floor(Math.random()*11+1);
// });

    var random=function(min,max) {
        return Math.floor(Math.random()*(max-min+1))+min
    }

    var startGame=function() {
        totalScore=0;
        targetScore=random(19,120)
        //    gems.blue.value=random(1,12)
        //    gems.red.value=random(1,12)
        //    gems.green.value=random(1,12)
        //    gems.yellow.value=random(1,12)
           console.log("yellow" + gems.yellow.value)
           $("#randomNum").text(targetScore)
        };
 
 function winner(){
    wins++; 
    $("#wins").text(wins);
    reset();
    }

function loser(){
    losses++;
    console.log(losses)
    $("#losses").text(losses);
    reset();
    }   

    // ========================== MAIN PROCESS =====================================
startGame()

    // $(".gemImage").on("click", function() {
        
        // 4 individual functions for crystals 

        $("#red").on ("click", function() {
            userTotal = userTotal + gems.red.value;
            console.log("New userTotal= " + userTotal);
            $("#userTotal").text(userTotal); 
        
                if (userTotal == targetScore){
                  winner();
                }
                else if ( userTotal > targetScore){
                  loser();
                }   
          })  

          $("#blue").on ("click", function() {
            userTotal = userTotal + gems.blue.value;
            console.log("New userTotal= " + userTotal);
            $("#userTotal").text(userTotal); 
        
                if (userTotal == targetScore){
                  winner();
                }
                else if ( userTotal > targetScore){
                  loser();
                }   
          })  

          $("#yellow").on ("click", function() {
            userTotal = userTotal + gems.yellow.value;
            console.log("New userTotal= " + userTotal);
            $("#userTotal").text(userTotal); 
        
                if (userTotal == targetScore){
                  winner();
                }
                else if ( userTotal > targetScore){
                  loser();
                }   
          })  

          $("#green").on ("click", function() {
            userTotal = userTotal + gems.green.value;
            console.log("New userTotal= " + userTotal);
            $("#userTotal").text(userTotal); 
        
                if (userTotal == targetScore){
                  winner();
                }
                else if ( userTotal > targetScore){
                  loser();
                }   
          })
    
        // });
    
    function reset() {
        userTotal= 0;
        $("#targetScore").text(userTotal);
        startGame();
    }
      