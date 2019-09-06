var seconds = 0;
var el = document.getElementById('timeCounter');
el.innerText = "Stayed alive for   0 seconds.";
function incrementSeconds() {
    seconds += 1;
    el.innerText = "Stayed alive for   " + seconds + " seconds.";
}



//gameboard
var gameboard = document.getElementById("gameBoard");
var gameboardWidth = 600;
var gameboardHeight = 600;

// player variables
var playerPositionX = 250;
var playerPositionY = 250;
var playerdx = 5;
var playerdy = 5;
var playerWidth = 30;
var playerHeight = 30;
var player = document.getElementById("player");
var hitPoints = 10;
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
var enemy3dx = Math.random() * 5 + Math.random() < 0.5 ? -1 : 1;
var enemy3dy = Math.random() * 5 + Math.random() < 0.5 ? -1 : 1;
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
        enemyCordsX[3] = gameboardWidth - enemyWidth;
        enemyCordsX[3] = 0;
        enemyCordsY[3] = Math.random() * 600;
        enemy3dx = -enemy3dx;
    } else if (enemyCordsX[3] < 0) {
        enemyCordsX[3] = gameboardWidth;
        enemy3dx = -enemy3dx;
    } else if (enemydy < 0) {
        enemyCordsY[3] = 0;
        enemy3dy = -enemy3dy
    } else if (enemydy > gameboardHeight) {
        enemyCordsY[3] = gameboardHeight - enemyHeight;
        enemy3dy = -enemy3dy;
    } else {
        enemyCordsX[3] += enemydx + Math.random() < 0.5 ? -1 : 1;
        enemyCordsY[3] += enemydy + Math.random() < 0.5 ? -1 : 1;
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



    if (playerPositionX > enemyCordsX[3] && playerPositionX < enemyCordsX[3] + enemyWidth && playerPositionY > enemyCordsY[3] && playerPositionY < enemyCordsY[3] + enemyHeight) {
      hitPoints--;
    } else if (playerPositionX > enemyCordsX[2] && playerPositionX < enemyCordsX[2] + enemyWidth && playerPositionY > enemyCordsY[2] && playerPositionY < enemyCordsY[2] + enemyHeight) {
        hitPoints--;
    } else if (playerPositionX > enemyCordsX[1] && playerPositionX < enemyCordsX[1] + enemyWidth && playerPositionY > enemyCordsY[1] && playerPositionY < enemyCordsY[1] + enemyHeight) {
        hitPoints--;
    } else if (playerPositionX > enemyCordsX[0] && playerPositionX < enemyCordsX[0] + enemyWidth && playerPositionY > enemyCordsY[0] && playerPositionY < enemyCordsY[0] + enemyHeight) {
        hitPoints--;
    }

    hpCounter.innerText = "Hit Points: " + hitPoints;
    /* if((enemyCordsX[0] >= (playerPositionX + playerWidth)  || enemyCordsY[0] >= (playerPositionY + playerHeight) || ((enemyCordsX[0] + enemyWidth) <= playerPositionX) || (enemyCordsY[0] + enemyHeight) <= playerPositionY) || (enemyCordsX[1] >= (playerPositionX + playerWidth)  || enemyCordsY[1] >= (playerPositionY + playerHeight) || ((enemyCordsX[1] + enemyWidth) <= playerPositionX) || (enemyCordsY[1] + enemyHeight) <= playerPositionY) || (enemyCordsX[2] >= (playerPositionX + playerWidth)  || enemyCordsY[2] >= (playerPositionY + playerHeight) || ((enemyCordsX[2] + enemyWidth) <= playerPositionX) || (enemyCordsY[2] + enemyHeight) <= playerPositionY)) {
        player.style.backgroundColor = "blue";
    } else  {
        player.style.border = "solid 2px blue";
        player.style.backgroundColor = "black";
        if (hitPoints <= 1) {
           // alert("you died");
         //   window.location.reload();
        } else {
            hitPoints--;
            hpCounter.innerText = "hit point: " + hitPoints;
        }
    }*/
    playerCollisionGameBoard();
    requestAnimationFrame(draw);
}

window.onload = function()
    {  window.addEventListener("keydown", playerMove);
        setInterval(incrementSeconds, 1000);
        draw();
    };