var myPlayer = null;
var currentOpp = null;
var attackButtonCounter = 0;
var firstRun = true;

const playerDatabase = {
    luke: {
        "name": "Luke Skywalker",
        "hp": 200,
        "atk": 25,
        "def": 25,
        "imageUrl": "./assets/images/star-wars-luke-skywalker-wallpaper-11537517.jpg"
    },
    chewy: {
        "name": "Chewbacca",
        "hp": 200,
        "atk": 25,
        "def": 25,
        "imageUrl": "./assets/images/star-wars-episode-viii-the-last-jedi-chewbacca-bowcaster_a-G-15278820-0.jpg"
    },
    boba: {
        "name": "Boba Fett",
        "hp": 200,
        "atk": 25,
        "def": 25,
        "imageUrl": "./assets/images/BAN201305-2.jpg"
    },
    yoda: {
        "name": "Yoda",
        "hp": 200,
        "atk": 25,
        "def": 25,
        "imageUrl": "./assets/images/24542163037_3eedb1814e_b.jpg"
    }

}


function createPlayerCard(playerId, className = "") {
    var currentPlayer = playerDatabase[playerId]
    var outerDiv = document.createElement('div');
    outerDiv.className = 'charBox ' + className;
    outerDiv.dataset.value = playerId;
    var nameTitle = document.createElement('p');
    nameTitle.innerText = currentPlayer.name;
    var imgTag = document.createElement('img');
    imgTag.className = 'iconPlayerImg';
    imgTag.src = currentPlayer.imageUrl;
    var hitPoints = document.createElement('p');
    hitPoints.id = playerId + '-hp';
    hitPoints.innerText = 'Hit Points: ' + currentPlayer.hp;
    outerDiv.append(nameTitle);
    outerDiv.append(imgTag);
    outerDiv.append(hitPoints);
    return outerDiv;
}

$("#character-select").append(createPlayerCard('luke'));
$("#character-select").append(createPlayerCard('chewy'));
$("#character-select").append(createPlayerCard('boba'));
$("#character-select").append(createPlayerCard('yoda'));

$(".charBox").click(function(){
    if(myPlayer === null) {
        // set the chosen myPlayer key
        myPlayer = this.dataset.value;
        // remove the player box from the selectable list
        $(this).remove();
        $('.opponentChangeText').text("Choose Your First Opponent");

        // remove the class selected from all cards - no longer needed
        // $(".charBox").removeClass('selected');
        // add the class selected to the clicked card - no longer needed
        // $(this).addClass('selected');
    } else if(currentOpp === null && myPlayer !== this.dataset.value) {
        currentOpp = this.dataset.value;
        // remove the player box from the selectable list
        $(this).remove();
        // add a NEW player box to the selected player container
        $("#character-select").removeClass('start');
        if (firstRun){
            firstRun = false;
            $("#my-character").append(createPlayerCard(myPlayer, 'selected'));
        }
        $('.opponentChangeText').text("Push Attack to Begin Fight");
        $("#opponent").append(createPlayerCard(currentOpp, 'oppSelected'));
        $("#attackButton").removeClass('hidden');
        // need to select the text box here also

        // remove the class selected from all cards
        // $(".charBox").removeClass('oppSelected');
        // add the class selected to the clicked card
        // $(this).addClass('oppSelected');
    }

    
    // - create a style in the css for selected and add an animate property
    /* $(this).animate({ 
      width: 175,
      height: 235,
    }, 750 ); */
});

$('#attackButton').click(function(){
    // defining hp attributes. and changes after each click
    var myPlayerStats = playerDatabase[myPlayer];
    var oppStats = playerDatabase[currentOpp];
    var newAtk = myPlayerStats.atk + (myPlayerStats.atk * attackButtonCounter); 

    // deplete health
    playerDatabase[myPlayer].hp = playerDatabase[myPlayer].hp - oppStats.atk;
    playerDatabase[currentOpp].hp = playerDatabase[currentOpp].hp - newAtk;

    
    // check if people are dead - if you are dead, show loss
    // if opp is dead, choose next opp, if no opp left, you win
    if (playerDatabase[myPlayer].hp <= 0){
        alert("you lose!");
    }
    if (playerDatabase[currentOpp].hp <= 0){
        $('.oppSelected').remove();
        currentOpp = null;
        $('.opponentChangeText').text("Select Your Next Opponent");
        $('#attackButton').addClass("hidden");
    }

    // change text
    var myPlayerHpId = '#' + myPlayer + '-hp';
    $(myPlayerHpId).text('Hit Points: ' + playerDatabase[myPlayer].hp);


    var oppHpId = '#' + currentOpp + '-hp';
    $(oppHpId).text('Hit Points: ' + playerDatabase[currentOpp].hp);

    attackButtonCounter = attackButtonCounter + 1;
});





//   need code to move other characters to right side of screen in a column after player has chosen character.
    // $("div").click(function () {
    //     $(this).show("slide", { direction: "right" }, 1000);
    // });
//   then button to appear slowly after other characters move to the right.
//   then under button we will need our box that will be direct the player from this point forward


