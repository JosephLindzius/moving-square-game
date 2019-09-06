

var level = localStorage.getItem("level");
if (level === null) {
    level = 1;
} else {
    level++;
}
localStorage.setItem("counter", parseInt(level));
var levelCounter = document.getElementById('levelCounter');
levelCounter.innerText = "Level: " + level;


var seconds = localStorage.getItem('timer');
if (seconds === null) {
    seconds = 0;
} else {
    seconds++;
}
var timer = document.getElementById('timeCounter');
timer.innerText = "Stayed alive for "+seconds +" seconds.";
function incrementSeconds() {
    seconds += 1;
    timer.innerText = "Stayed alive for   " + seconds + " seconds.";
    levelCounter.innerText = "Level: " + level;
}

localStorage.setItem("counter", parseInt(seconds));



//gameboard
var gameboard = document.getElementById("gameBoard");
var gameboardWidth = 600;
var gameboardHeight = 600;
var templatefloortile = document.getElementById("template-floortiles");


 for (let j = 0; j < 21; j++) {
    for (let i = 0; i < 23; i++) {

        if (i % 23 === 0) {

        }

        gameboard.appendChild(templatefloortile.content.cloneNode(true));
        document.querySelectorAll(".floorTile")[i].style.position = "absolute;";
        document.querySelectorAll(".floorTile")[i].style.left = i + "px";
        document.querySelectorAll(".floorTile")[j].style.top =  j + "px";

    }
}

//making exit for levels
 var templateExit = document.getElementById("template-exit");
    var exitWidth = 40;
    var exitHeight = 60;
    var positionExitX = Math.floor(Math.random() * 20 + 10);
    var positionExitY = Math.floor(Math.random() * 450);
//Hole making
var templateHole = document.getElementById("template-hole");
var holeWidth = 64;
var holeHeight = 64;
var hole0PositionX = Math.random() * 200;
var hole0PositionY = Math.random() * 200;
var hole1PositionX = Math.random() * 200 + 300;
var hole1PositionY = Math.random() * 200 + 300;
function makeNewLevel () {
//exit
    gameboard.appendChild(templateExit.content.cloneNode(true));
    document.querySelectorAll("#exit")[0].style.position = "absolute;";
    document.querySelectorAll("#exit")[0].style.left = (positionExitX) + "px";
    document.querySelectorAll("#exit")[0].style.top = (positionExitY) + "px";



    //hole0
    gameboard.appendChild(templateHole.content.cloneNode(true));
    document.querySelectorAll(".hole")[0].style.position = "absolute;";
    document.querySelectorAll(".hole")[0].style.left = (hole0PositionX) + "px";
    document.querySelectorAll(".hole")[0].style.top = (hole0PositionY) + "px";

    //hole1
    gameboard.appendChild(templateHole.content.cloneNode(true));
    document.querySelectorAll(".hole")[1].style.position = "absolute;";
    document.querySelectorAll(".hole")[1].style.left = (hole1PositionX) + "px";
    document.querySelectorAll(".hole")[1].style.top = (hole1PositionY) + "px";

}
makeNewLevel();

// player variables
var playerPositionX = 550;
var playerPositionY = 10;
var playerdx = 5;
var playerdy = 5;
var playerWidth = 30;
var playerHeight = 30;
var player = document.getElementById("player");
var hitPoints = localStorage.getItem("hitPoints");

if (hitPoints === null) {
    hitPoints = 3;
} else {
    hitPoints++;
}
localStorage.setItem("hitPoints", parseInt(hitPoints))
var hpCounter = document.getElementById("hitPoints");
hpCounter.innerText = "Hit Points: " + hitPoints;

//enemy variables
var enemyCordsX = [];
var enemyCordsY = [];
var enemyWidth = 30;
var enemyHeight = 30;
var enemyPositionX = 0;
var enemyPositionY = 0;
var enemydx = Math.random() * 5 + Math.random() < 0.5 ? -1 : 1;
var enemydy = Math.random() * 5 + Math.random() < 0.5 ? -1 : 1;
var enemy3dx = Math.random() * 600 + Math.random() < 0.5 ? -1 : 1;
var enemy3dy = Math.random() * 600 + Math.random() < 0.5 ? -1 : 1;
///A is messed up ////://////
//var enemyax = Math.random() < 0.5 ? -1 : 1;
//var enemyay= Math.random() < 0.5 ? -1 : 1;
//////////////////////////////////////////////////

var templateEnemy = document.getElementById("enemy-tpl");

//making array of random cords;
for (let i = 0; i < 4; i++) {
    do{
        enemyPositionX = (Math.floor(Math.random() * 600 - enemyWidth - 50));
    }
    while (enemyPositionX < 20 || enemyPositionX > gameboardWidth -20);
    enemyCordsX.push(enemyPositionX);
    do {
        enemyPositionY = (Math.floor(Math.random() * 600 - enemyHeight - 50));
    }
        while (enemyPositionY < 20 || enemyPositionY > gameboardHeight - 50) ;
        enemyCordsY.push(enemyPositionY);
}

//draws from template
function drawEnemy() {

    for (let i = 0; i < 4; i++) {

            gameboard.appendChild(templateEnemy.content.cloneNode(true));
            document.querySelectorAll(".enemy")[i].style.position = "absolute;";
            document.querySelectorAll(".enemy")[i].innerText = "Meep";
            document.querySelectorAll(".enemy")[i].setAttribute("id", "enemy"+i+"");
            document.querySelectorAll(".enemy")[i].style.left = enemyCordsX[i] + "px";
            document.querySelectorAll(".enemy")[i].style.top = enemyCordsY[i] + "px";

    }
}
function moveEnemy0 () {
        if (playerPositionX > enemyCordsX[0]) {
            enemyCordsX[0] += enemydx;
           // enemydx += enemyax
            enemydx = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);

        } else {
            enemyCordsX[0] -= enemydx;
         //   enemydx += enemyax
            enemydx = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
        }
        if (playerPositionY > enemyCordsY[0]) {
            enemyCordsY[0] += enemydy;
        //   enemydx += enemyax
            enemydy = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
        } else {
            enemyCordsY[0] -= enemydy;
            enemydy = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
        //   enemydx += enemyax
        }

          document.querySelectorAll(".enemy")[0].style.position = "absolute;";
          document.querySelectorAll(".enemy")[0].style.left = enemyCordsX[0] + "px";
          document.querySelectorAll(".enemy")[0].style.top = enemyCordsY[0] + "px";

}

function moveEnemy1 () {


    if (playerPositionX > enemyCordsX[1]) {
        enemyCordsX[1] += enemydx;
        // enemydx += enemyax
        enemydx = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);

    } else {
        enemyCordsX[1] -= enemydx;
        //   enemydx += enemyax
        enemydx = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
    }
    if (playerPositionY > enemyCordsY[1]) {
        enemyCordsY[1] += enemydy;
        //   enemydx += enemyax
        enemydy = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
    } else {
        enemyCordsY[1] -= enemydy;
        enemydy = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
        //   enemydx += enemyax
    }

    document.querySelectorAll(".enemy")[1].style.position = "absolute;";
    document.querySelectorAll(".enemy")[1].style.left = enemyCordsX[1] + "px";
    document.querySelectorAll(".enemy")[1].style.top = enemyCordsY[1] + "px";

}

function moveEnemy2 () {

    if (playerPositionX > enemyCordsX[2]) {
        enemyCordsX[2] += enemydx;
        // enemydx += enemyax
        enemydx = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);

    } else {
        enemyCordsX[2] -= enemydx;
        //   enemydx += enemyax
        enemydx = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
    }
    if (playerPositionY > enemyCordsY[2]) {
        enemyCordsY[2] += enemydy;
        //   enemydx += enemyax
        enemydy = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
    } else {
        enemyCordsY[2] -= enemydy;
        enemydy = Math.floor(Math.random() + Math.random() < 0.5 ? -1 : 1);
        //   enemydx += enemyax
    }

    document.querySelectorAll(".enemy")[2].style.position = "absolute;";
    document.querySelectorAll(".enemy")[2].style.left = enemyCordsX[2] + "px";
    document.querySelectorAll(".enemy")[2].style.top = enemyCordsY[2] + "px";
}

function moveEnemy3 () {


    document.querySelectorAll(".enemy")[3].style.position = "absolute;";
    document.querySelectorAll(".enemy")[3].style.left = enemyCordsX[3]  + "px";
    document.querySelectorAll(".enemy")[3].style.top = enemyCordsY[3] + "px";

    if (enemyCordsX[3] > gameboardWidth) {
        enemyCordsX[3] = 0;
        enemyCordsY[3] = Math.random() * 600;
        enemy3dx = -enemy3dx;
    } else if (enemyCordsX[3] < 0) {
        enemyCordsX[3] = gameboardWidth;
        enemy3dx = -enemy3dx;
    }
    else if (enemyCordsY[3] < 0) {
        enemyCordsY[3] = 0;
        enemy3dy = -enemy3dy
    } else if (enemyCordsY[3] > gameboardHeight) {
        enemyCordsY[3] = 0;
        enemy3dy = -enemy3dy;
    } else {
        enemyCordsX[3] += 10;  //enemydx + Math.r1andom() < 0.5 ? -1 : 1;
        enemyCordsY[3] += Math.random() < 0.5 ? -1 : 1;
    }
}

function leftArrowKey() {
    playerPositionX -= playerdx;
    player.style.position = "absolute;";
    player.style.borderRight = "solid 2px blue";
    player.style.left = playerPositionX +"px";

}

function rightArrowKey() {   playerPositionX += playerdx;
    player.style.position = "absolute";
    player.style.borderLeft = "solid 2px blue";
    player.style.left = playerPositionX + "px";

}

function upArrowKey() {
    playerPositionY -= playerdy;
    player.style.position = "absolute";
    player.style.borderBottom = "solid 2px blue";
    player.style.top = playerPositionY + "px";

}

function downArrowKey() {
    playerPositionY += playerdy;
    player.style.position = "absolute;";
    player.style.borderTop = "solid 2px blue";
    player.style.top = playerPositionY + "px";

}

function playerCollisionGameBoard () {
    if ((playerPositionX + playerWidth) > gameboardWidth) {
        playerPositionX = gameboardWidth - playerWidth;
    } else if (playerPositionX < 0) {
        playerPositionX = 0;
    } else if (playerPositionY < 0) {
        playerPositionY = 0
    } else if ((playerPositionY + playerHeight) > gameboardHeight) {
        playerPositionY = gameboardHeight - playerHeight;
    }


}

function playerMove(keyPressed)
{
    switch(keyPressed.keyCode)
    {
        case 37:
            leftArrowKey();
            break;
        case 39:
            rightArrowKey();
            break;
        case 38:
            upArrowKey();
            break;
        case 40:
            downArrowKey();
            break;
    }
}

drawEnemy();

function draw () {
  window.addEventListener("keyup", function(){
       player.style.border = "solid 2px black";
    });

  moveEnemy0();
  moveEnemy1();
  moveEnemy2();
  moveEnemy3();

    if (playerPositionX > hole0PositionX && playerPositionX < hole0PositionX + holeWidth && playerPositionY > hole0PositionY && playerPositionY < hole0PositionY + holeHeight) {
       alert( "you are in a hole and lose a life");
       hitPoints--;
       playerPositionX = 550;
       playerPositionY = 10;
       player.style.left = 550 + "px";
       player.style.top = 10 + "px";
    }

    if (playerPositionX > positionExitX && playerPositionX < positionExitX + exitWidth && playerPositionY > positionExitY && playerPositionY < positionExitY + exitHeight) {
        alert("Next Level");
        document.location.reload();

    }

    if (playerPositionX > hole1PositionX && playerPositionX < hole1PositionX + holeWidth && playerPositionY > hole1PositionY && playerPositionY < hole1PositionY + holeHeight) {
        alert( "you are in a hole and lose a life");
        hitPoints--;
        playerPositionX = 550;
        playerPositionY = 10;
        player.style.left = 550 + "px";
        player.style.top = 10 + "px";
    }

    if (playerPositionX > enemyCordsX[3] && playerPositionX < enemyCordsX[3] + enemyWidth && playerPositionY > enemyCordsY[3] && playerPositionY < enemyCordsY[3] + enemyHeight) {
        alert( "You hit the ghost meep, try again!");
        hitPoints--;
        playerPositionX = 550;
        playerPositionY = 10;
        player.style.left = 550 + "px";
        player.style.top = 10 + "px";

    } else if (playerPositionX > enemyCordsX[2] && playerPositionX < enemyCordsX[2] + enemyWidth && playerPositionY > enemyCordsY[2] && playerPositionY < enemyCordsY[2] + enemyHeight) {
        alert( "You hit a meep, try again!");
        hitPoints--;
        playerPositionX = 550;
        playerPositionY = 10;
        player.style.left = 550 + "px";
        player.style.top = 10 + "px";
    } else if (playerPositionX > enemyCordsX[1] && playerPositionX < enemyCordsX[1] + enemyWidth && playerPositionY > enemyCordsY[1] && playerPositionY < enemyCordsY[1] + enemyHeight) {
        alert( "You hit a meep, try again!");
        hitPoints--;
        playerPositionX = 550;
        playerPositionY = 10;
        player.style.left = 550 + "px";
        player.style.top = 10 + "px";
    } else if (playerPositionX > enemyCordsX[0] && playerPositionX < enemyCordsX[0] + enemyWidth && playerPositionY > enemyCordsY[0] && playerPositionY < enemyCordsY[0] + enemyHeight) {
        alert( "You hit a meep, try again!");
        hitPoints--;
        playerPositionX = 550;
        playerPositionY = 10;
        player.style.left = 550 + "px";
        player.style.top = 10 + "px";
    }

    hpCounter.innerText = "Hit Points: " + hitPoints;
    levelCounter.innerText = "Level: " + level;
    localStorage.setItem("hitPoints", hitPoints);
    localStorage.setItem("level", level);
    localStorage.setItem("timer", seconds);

    if (hitPoints <= 0) {
        alert("You died! Begin again");
        localStorage.removeItem('timer');
        localStorage.removeItem('level');
        localStorage.removeItem('hitPoints');
        window.location.reload();
    }
    playerCollisionGameBoard();
    requestAnimationFrame(draw);
}

window.onload = function()
    {  window.addEventListener("keydown", playerMove);
        setInterval(incrementSeconds, 1000);
        draw();

    };