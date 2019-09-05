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


//enemy variables
var enemyCordsX = [];
var enemyCordsY = [];
var enemyWidth = 30;
var enemyHeight = 30;
var enemyPositionX = 0;
var enemyPositionY = 0;
var enemydx = Math.random() + Math.random() < 0.5 ? -1 : 1;
var enemydy = Math.random() + Math.random() < 0.5 ? -1 : 1;


///A is messed up ////://////
//var enemyax = Math.random() < 0.5 ? -1 : 1;
//var enemyay= Math.random() < 0.5 ? -1 : 1;
//////////////////////////////////////////////////

var templateEnemy = document.getElementById("enemy-tpl");

//making array of random cords;
for (let i = 0; i < 3; i++) {
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


function drawEnemy() {

    for (let i = 0; i < 3; i++) {

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
        ///try number 5 for collision

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
    ///try number 5 for collision

 /*   if(enemyCordsX[1] >= (playerPositionX + playerWidth)  || enemyCordsY[1] >= (playerPositionY + playerHeight) || ((enemyCordsX[1] + enemyWidth) <= playerPositionX) || (enemyCordsY[1] + enemyHeight) <= playerPositionY) {

        player.style.backgroundColor = "blue";
    } else  {
        player.style.border = "solid 2px black";
        player.style.backgroundColor = "black"
    }  */

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
    ///try number 5 for collision

/*   if(enemyCordsX[2] >= (playerPositionX + playerWidth)  || enemyCordsY[2] >= (playerPositionY + playerHeight) || ((enemyCordsX[2] + enemyWidth) <= playerPositionX) || (enemyCordsY[2] + enemyHeight) <= playerPositionY) {
        player.style.backgroundColor = "blue";
    } else  {
        player.style.border = "solid 2px black";
        player.style.backgroundColor = "black";

    } */

    document.querySelectorAll(".enemy")[2].style.position = "absolute;";
    document.querySelectorAll(".enemy")[2].style.left = enemyCordsX[2] + "px";
    document.querySelectorAll(".enemy")[2].style.top = enemyCordsY[2] + "px";

}


function leftArrowKey()
{
    playerPositionX -= playerdx;
    player.style.position = "absolute;";
    player.style.borderRight = "solid 2px blue";
    player.style.left = playerPositionX +"px";

}

function rightArrowKey()

{   playerPositionX += playerdx;
    player.style.position = "absolute";
    player.style.borderLeft = "solid 2px blue";
    player.style.left = playerPositionX + "px";

}

function upArrowKey()
{
    playerPositionY -= playerdy;
    player.style.position = "absolute";
    player.style.borderBottom = "solid 2px blue";
    player.style.top = playerPositionY + "px";

}

function downArrowKey()
{
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


function detectCollision () {


  /*  for (let i = 0; i < 3; i++) {

        document.querySelectorAll(".enemy")[i].style.left = enemyCordsX[i] + "px";
        document.querySelectorAll(".enemy")[i].style.top = enemyCordsY[i] + "px";

        /!* if ((playerPositionX + playerWidth < enemyCordsX[i] && enemyCordsX[i] > playerPositionX) ||  (playerPositionY + playerHeight > enemyCordsY[i] && enemyCordsY[i] > playerPositionY)) {
             player.style.backgroundColor = "blue";
            // enemydx *= 1;
            // enemydx += enemyax
         } else {
             player.style.backgroundColor = "black";
         } *!/
    }*/

    //attempt4

 //   console.log(enemyCordsX[2]);
   // console.log(enemyCordsY[2]);
 //   console.log(playerPositionX);
   // console.log(playerPositionY);

    /* if ((enemyCordsX[i] + enemyWidth) > gameboardWidth) {
          enemydx *= -1;
      } else if (enemyCordsX[i] < 0) {
          enemydx *= -1;
      } else if (enemyCordsY[i] < 0) {
          enemydy *= -1;
      } else if ((enemyPositionY + enemyHeight) > gameboardHeight) {
          enemydy *= -1;
      }*/
    /*  if (playerPositionX + playerWidth > enemyCordsX[i] + enemyWidth && playerPositionY + playerHeight > enemyCordsY[i] + enemyHeight && playerPositionX + playerHeight > enemyCordsX[i] + enemyHeight && playerPositionY + playerWidth > enemyCordsY[i] + enemyWidth) {
            player.style.backgroundColor = "blue";
        } else {
          player.style.backgroundColor = "black";
      } */
}

 /* function styleEnemy () {
    var enemy0 = document.getElementById("enemy0");
    var enemy1 = document.getElementById("enemy1");
    var enemy2 = document.getElementById("enemy3");
} */

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
    hpCounter.innerText = "hit point: " + hitPoints;
  moveEnemy0();
  moveEnemy1();
  moveEnemy2();

    if((enemyCordsX[0] >= (playerPositionX + playerWidth)  || enemyCordsY[0] >= (playerPositionY + playerHeight) || ((enemyCordsX[0] + enemyWidth) <= playerPositionX) || (enemyCordsY[0] + enemyHeight) <= playerPositionY) || (enemyCordsX[1] >= (playerPositionX + playerWidth)  || enemyCordsY[1] >= (playerPositionY + playerHeight) || ((enemyCordsX[1] + enemyWidth) <= playerPositionX) || (enemyCordsY[1] + enemyHeight) <= playerPositionY) || (enemyCordsX[2] >= (playerPositionX + playerWidth)  || enemyCordsY[2] >= (playerPositionY + playerHeight) || ((enemyCordsX[2] + enemyWidth) <= playerPositionX) || (enemyCordsY[2] + enemyHeight) <= playerPositionY)) {
        player.style.backgroundColor = "blue";
    } else  {
        player.style.border = "solid 2px blue";
        player.style.backgroundColor = "black";
        if (hitPoints === 0) {
            alert("you died");
            window.location.reload();
        } else {
            hitPoints--;
        }

    }
  // detectCollision();
    playerCollisionGameBoard();
    requestAnimationFrame(draw);


}


window.onload = function()
    {  window.addEventListener("keydown", playerMove);
        draw();
    };