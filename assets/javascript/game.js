var myPlayer = null;
var currentOpp = null;

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
        "hp": 250,
        "atk": 20,
        "def": 20,
        "imageUrl": "./assets/images/star-wars-episode-viii-the-last-jedi-chewbacca-bowcaster_a-G-15278820-0.jpg"
    },
    boba: {
        "name": "Boba Fett",
        "hp": 250,
        "atk": 20,
        "def": 20,
        "imageUrl": "./assets/images/BAN201305-2.jpg"
    },
    yoda: {
        "name": "Yoda",
        "hp": 250,
        "atk": 20,
        "def": 20,
        "imageUrl": "./assets/images/24542163037_3eedb1814e_b.jpg"
    }

}

/*
<div class="charBox" data-value="luke">
        <p>Luke Skywalker</p>
        <img id="iconPlayerImg" src="./assets/images/star-wars-luke-skywalker-wallpaper-11537517.jpg" alt="picture of luke skywalker with lightsaber">
        <p class="health">Hit Points</p>
    </div>
    <div class="charBox" data-value="chewy">
        <p>Chewbacca</p>
        <img class="iconPlayerImg" src="./assets/images/star-wars-episode-viii-the-last-jedi-chewbacca-bowcaster_a-G-15278820-0.jpg" alt="picture of chewbacca with bowcaster">
        <p id="chewbaccaHealth">Hit Points</p>
    </div>
    <div class="charBox" data-value="boba">
        <p>Boba Fett</p>
        <img class="iconPlayerImg" src="./assets/images/BAN201305-2.jpg" alt="Photo of Boba Fett">
        <p id="bobaHealth">Hit Points</p>
    </div>
    <div class="charBox" data-value="yoda">
        <p>Yoda</p>
        <img class="iconPlayerImg" src="./assets/images/24542163037_3eedb1814e_b.jpg" alt="cartoon picture of yoda with lightsaber">
        <p id="yodaHealth">Hit Points</p>
    </div>
    */

function createPlayerCard(playerId) {
    var currentPlayer = playerDatabase[playerId]
    var outerDiv = document.createElement('div');
    outerDiv.className = 'charBox';
    outerDiv.dataset.value = playerId;
    var nameTitle = document.createElement('p');
    nameTitle.innerText = currentPlayer.name;
    var imgTag = document.createElement('img');
    imgTag.className = 'iconPlayerImg';
    imgTag.src = currentPlayer.imageUrl;
    var hitPoints = document.createElement('p');
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
        myPlayer = this.dataset.value;
        $(this).remove();
        $("#my-character").append(createPlayerCard(myPlayer));

        
        // remove the class selected from all cards
        $(".charBox").removeClass('selected');
        // add the class selected to the clicked card
        $(this).addClass('selected');
    } else if(currentOpp === null && myPlayer !== this.dataset.value) {
        currentOpp = this.dataset.value;
        // remove the class selected from all cards
        $(".charBox").removeClass('oppSelected');
        // add the class selected to the clicked card
        $(this).addClass('oppSelected');
    }

    
    // - create a style in the css for selected and add an animate property
    /* $(this).animate({ 
      width: 175,
      height: 235,
    }, 750 ); */
});


//   need code to move other characters to right side of screen in a column after player has chosen character.
    // $("div").click(function () {
    //     $(this).show("slide", { direction: "right" }, 1000);
    // }); --possible slide code--
//   then button to appear slowly after other characters move to the right.
//   then under button we will need our box that will be direct the player from this point forward



























// var c = document.getElementById('canv'), 
//     $ = c.getContext("2d");
// var w = c.width = window.innerWidth, 
//     h = c.height = window.innerHeight;

// Snowy();
// function Snowy() {
//   var snow, arr = [];
//   var num = 600, tsc = 1, sp = 1;
//   var sc = 1.3, t = 0, mv = 20, min = 1;
//     for (var i = 0; i < num; ++i) {
//       snow = new Flake();
//       snow.y = Math.random() * (h + 50);
//       snow.x = Math.random() * w;
//       snow.t = Math.random() * (Math.PI * 2);
//       snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
//       snow.sp = (Math.pow(snow.sz * .3, 2) * .15) * sp;
//       snow.sp = snow.sp < min ? min : snow.sp;
//       arr.push(snow);
//     }
//   go();
//   function go(){
//     window.requestAnimationFrame(go);
//       $.clearRect(0, 0, w, h);
//       $.fillStyle = 'hsla(242, 95%, 3%, 1)';
//       $.fillRect(0, 0, w, h);
//       $.fill();
//         for (var i = 0; i < arr.length; ++i) {
//           f = arr[i];
//           f.t += .05;
//           f.t = f.t >= Math.PI * 2 ? 0 : f.t;
//           f.y += f.sp;
//           f.x += Math.sin(f.t * tsc) * (f.sz * .3);
//           if (f.y > h + 50) f.y = -10 - Math.random() * mv;
//           if (f.x > w + mv) f.x = - mv;
//           if (f.x < - mv) f.x = w + mv;
//           f.draw();}
//  }
//  function Flake() {
//    this.draw = function() {
//       this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
//       this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
//       this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
//       $.moveTo(this.x, this.y);
//       $.fillStyle = this.g;
//       $.beginPath();
//       $.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
//       $.fill();}
//   }
// }
// /*________________________________________*/
// window.addEventListener('resize', function(){
//   c.width = w = window.innerWidth;
//   c.height = h = window.innerHeight;
// }, false);
