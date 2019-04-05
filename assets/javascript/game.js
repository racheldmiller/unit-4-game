// ========================== GLOBAL VARIABLES ================================ 

// define the gems
    var gems = [1,2,3,4]

// define the counters for wins and losses 
    var wins = 0;
    var losses = 0;

// ========================== HELPER FUNCTIONS ================================

// create function setUp(), which will hold all of the code below.
function setUp(){
    // random number shown at start of game should be between 19 - 120.

    // crystals should have a random hidden value between 1 - 12.

    // Update HTML for wins and losses after each round. 
    document.getElementById("wins").innerHTML = wins; 
    document.getElementById("losses").innerHTML = losses;

    // ========================== MAIN PROCESS =====================================

    // call on the setup function I created under HELPER FUNCTIONS 
    setup();

    // capture the key clicks 
    document.onkeyup = function(event) { 

        // will need to capture other important functionality here.
    }
};

