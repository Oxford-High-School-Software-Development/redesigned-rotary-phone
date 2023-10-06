var healthCount = 100;
var healthMax = 100;
var healthBar;

var enemyHealth = enemyHMax; 
var enemyHMax = 5;

function health_setup() {
    healthBar = createSprite(player.x, player.y-30, healthCount/3, 7);
    healthBar.visible=false;
}

function health_draw() {
    healthBar.x = player.x;
    healthBar.y = player.y-30;

    healthBar.width = healthCount/3;

    if(player.isTouching(enemy)) {
        healthCount -= 5;
        healthBar.visible=true;
    }else{
        healthBar.visible=false;
    }

    if(healthCount > 75){
        healthBar.shapeColor = ("green");
    }else if(healthCount > 50) {
        healthBar.shapeColor = ("yellow");
    }else if(healthBar > 25) {
        healthBar.shapeColor = ("orange");
    }else {
        healthBar.shapeColor = ("red");
    }

    if(healthCount < 0) {
        healthCount = 0;
    }

    if(healthCount === 0) {
        gameState = gameOver;
    }

    if(keyDown("v")) {
        healthBar.visible = true;
    }

    if(enemyHealth === 0) {
        enemy.remove();
        enemy_detection.remove();
        enemyKilled += 1;
        chaseMode = 0;
    }
}

console.log("health.js is working");