
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000 / 60
var timer = setInterval(main, fps)
var playerImg = new Image();


function main() {
    ctx.clearRect(0, 0, c.width, c.height);
    state()

}

//setup
var state;
var button = new GameObject();
var avatar = new GameObject();
var ground = new GameObject();
var jumpOrb = new GameObject();
var jumpOrb2 = new GameObject();
var jumpOrb3 = new GameObject();
var jumpOrb4 = new GameObject();
var jumpOrb5 = new GameObject();
var jumpOrb6 = new GameObject();
var jumpOrb7 = new GameObject();
var jumpOrb8 = new GameObject();
var jumpOrb9 = new GameObject();
var jumpOrb10 = new GameObject();
var jumpOrb11 = new GameObject();
var jumpOrb12 = new GameObject();
var platform = new GameObject();
var platform2 = new GameObject();
var platform3 = new GameObject();
var platform4 = new GameObject();
var platform5 = new GameObject();
var platform6 = new GameObject();
var platform7 = new GameObject();
var platform8 = new GameObject();
var platform9 = new GameObject();
var platform10 = new GameObject();
var platform11 = new GameObject();
var platform12 = new GameObject();
var platform13 = new GameObject();
var platform15 = new GameObject();
var platform16 = new GameObject();
var platform17 = new GameObject();
var platform18 = new GameObject();
var platform19 = new GameObject();
var platform20 = new GameObject();
var platform21 = new GameObject();
var wall = new GameObject();
var wall2 = new GameObject();
var wall3 = new GameObject();
var level = new GameObject();

//recommended x between 50 and 950
function init() {
    state = menu
    console.log("leftwall =", document.querySelector("#leftwall"));

    wall.setImage("#leftwall");
    wall2.setImage("#rightwall");
    wall3.setImage("#rightwall");



    avatar.color = `green`;
    avatar.w = 120;
    avatar.h = 130;
    avatar.setImage("#playerLeft");

    level.x = 0;
    level.y = 0;

    jumpOrb.h = 100
    jumpOrb.w = 100
    jumpOrb.x = 600
    jumpOrb.y = 130
    jumpOrb.color = 'purple'
    jumpOrb.world = level

    jumpOrb2.h = 100
    jumpOrb2.w = 100
    jumpOrb2.x = 550
    jumpOrb2.y = -390
    jumpOrb2.color = 'blue'
    jumpOrb2.world = level
    
    jumpOrb3.h = 100
    jumpOrb3.w = 100
    jumpOrb3.x = 600
    jumpOrb3.y = -950
    jumpOrb3.color = 'blue'
    jumpOrb3.world = level

    jumpOrb4.h = 80
    jumpOrb4.w = 80
    jumpOrb4.x = 80
    jumpOrb4.y = -1680
    jumpOrb4.color = 'purple'
    jumpOrb4.world = level

    jumpOrb5.h = 70
    jumpOrb5.w = 70
    jumpOrb5.x = 500
    jumpOrb5.y = -2080
    jumpOrb5.color = 'yellow'
    jumpOrb5.world = level

    jumpOrb6.h = 80
    jumpOrb6.w = 80
    jumpOrb6.x = 900
    jumpOrb6.y = -2280
    jumpOrb6.color = 'yellow'
    jumpOrb6.world = level

    jumpOrb7.w = 50
    jumpOrb7.h = 50
    jumpOrb7.x = 190
    jumpOrb7.y = -2250
    jumpOrb7.color = 'yellow'
    jumpOrb7.world = level

    jumpOrb8.h = 50
    jumpOrb8.w = 50
    jumpOrb8.x = 700
    jumpOrb8.y = -2600
    jumpOrb8.color = 'yellow'
    jumpOrb8.world = level

    jumpOrb9.h = 50
    jumpOrb9.w = 50
    jumpOrb9.x = 300
    jumpOrb9.y = -2900
    jumpOrb9.color = 'yellow'
    jumpOrb9.world = level

    wall.h = 10000;
    wall.w = 34;
    wall.color = `purple`;
    wall.world = level;
    wall.x = 1000;
    wall.setImage("#leftwall")
    wall.img.x = -100;
    wall.img.y = 1;

    wall2.h = 10000;
    wall2.w = 34;
    wall2.color = `purple`
    wall2.world = level
    wall2.x = -2;

    wall3.h = 600;
    wall3.w = 504;
    wall3.color = `purple`
    wall3.world = level
    wall3.x = 950;
    wall3.y = -1200

    ground.color = `brown`;
    ground.w = c.width;
    ground.h = c.height * .5;
    ground.y = c.height
    ground.world = level

    platform.w = 200;
    platform.h = 34;
    platform.color = `black`
    platform.world = level
    platform.x = 200;

    platform2.w = 200;
    platform2.h = 34;
    platform2.color = `black`
    platform2.world = level
    platform2.x = 950;
    platform2.y = 42

    platform3.w = 200;
    platform3.h = 34;
    platform3.color = `black`
    platform3.world = level
    platform3.x = 90;
    platform3.y = -130

    platform4.w = 250;
    platform4.h = 34;
    platform4.color = `black`
    platform4.world = level
    platform4.x = 950;
    platform4.y = -730

    platform5.w = 300;
    platform5.h = 44;
    platform5.color = `black`
    platform5.world = level
    platform5.x = 850;
    platform5.y = -1500

    platform6.w = 800;
    platform6.h = 44;
    platform6.color = `black`
    platform6.world = level
    platform6.x = 50;
    platform6.y = -1500

    platform7.w = 220;
    platform7.h = 28;
    platform7.color = `black`
    platform7.world = level
    platform7.x = 50;
    platform7.y = -1900

    platform8.w = 200;
    platform8.h = 28;
    platform8.color = `black`
    platform8.world = level
    platform8.x = 505;
    platform8.y = -2250

    platform9.w = 120;
    platform9.h = 28;
    platform9.color = `black`
    platform9.world = level
    platform9.x = 900;
    platform9.y = -2000

    platform10.w = 220;
    platform10.h = 28;
    platform10.color = `black`
    platform10.world = level
    platform10.x = 300;
    platform10.y = -2500

    platform11.w = 220;
    platform11.h = 28;
    platform11.color = `black`
    platform11.world = level
    platform11.x = 50;
    platform11.y = -3200

    platform12.w = 100;
    platform12.h = 28;
    platform12.color = `black`
    platform12.world = level
    platform12.x = 700;
    platform12.y = -2900
    
}

init();

//Jump coold

var jumpCooldown = false;
var orbCooldown = true;
let orbCount = 0;

document.addEventListener(`keydown`, jump);
function jump(e) {
    //console.log(e.keyCode)
    if (e.keyCode === 32) {
        if (avatar.canJump == true && jumpCooldown == false) {
            //console.log('jump')
            //animateScale(avatar, 1, 1, 1, 1, 1300);
            jumpCooldown = true
            avatar.canJump = false;
            avatar.hasJumped = true;
            avatar.vy = -21;
        }
    }
}

//a is the start ex:scaleX and b is the end and t is used to interpolate between the two being able to create smooth animations
function lerp(a, b, t) {
    return a + (b - a) * t;
}

function orbCooldownFunc()
{
    orbCount++;
    console.log(orbCount);
    if(orbCount == 100)
    {
        orbCount = 0;
        orbCooldown = false;
    }
}


document.addEventListener(`keyup`, resetJump);
function resetJump(e) {
    //console.log(e.keyCode)
    if (e.keyCode == 32) {
        if (jumpCooldown) {
            jumpCooldown = false;
        }
    }
}

/*---------------Game Screens (states)----------------*/
function menu() {
    if (clicked(button)) {
        state = game;
    }
    button.render()
}

function win() {

}
function lose() {

}



//IMPORTANT

//Perfomance.now = DeltaTime
function animateScale(avatar, startX, startY, endX, endY, duration) {
    var startTime = performance.now();

    function update(now) {
        var t = (now - startTime) / duration;
        if (t > 1) t = 1;

        //gets the difference betweeen the start and end and interpolates it depending on the duration
        avatar.img.scale.x = startX + (endX - startX) * t;
        avatar.img.scale.y = startY + (endY - startY) * t;

        if (t < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

//old animation system 




function game() {

    //this scales the player to simulate the player falling fast they stretch
    //using let instead of var so its not accesable outside of the game loop, also so it doesnt get jumbled with similar names
    //gets the absolute value of velocity to stretch the player on the y so it stretchs when falling and going up.
    //so there isnt two of these
    let speedYpos = (avatar.vy);
    //let speedXpos = (avatar.vy);
    //let speedX = Math.abs(avatar.vx);

    //math.min gets the smaller number from a list
    let stretchAmountUp = Math.min(speedYpos / 25, 1);
    //let stretchAmountDown = Math.min(speedXpos / 25, 1);
    //let rotationAmount = Math.min(speedX * 25, 1);

    //setting the stretch amount for the X and Y to be used during falling
    let targetScaleYUp = 1 - stretchAmountUp * 0.4;
    let targetScaleXUp = 1 + stretchAmountUp * 1.3;

    //let targetScaleYDown = 1 + stretchAmountDown * 0.9;
    //let targetScaleXDown = 1 - stretchAmountDown * 1;
    //let rotationAmountX = 1 - rotationAmount * 90;

    //Using the lerp function from bove to scale the player smoothly (avatarimgscale being a, targetscale being b, and 0.15 being t for the smoothing)
    avatar.img.scale.x = lerp(avatar.img.scale.x, targetScaleYUp, 0.6);
    avatar.img.scale.y = lerp(avatar.img.scale.y, targetScaleXUp, 0.6);
    
    //avatar.img.scale.x = lerp(avatar.img.scale.x, targetScaleXDown, 0.6)
    //avatar.img.scale.y = lerp(avatar.img.scale.y, targetScaleYDown, 0.6) 

    //avatar.rotation = lerp(avatar.rotation, rotationAmountX, 0.3)

    
    while(avatar.img.scale.y < 0.9)
    {
        avatar.img.scale.y = 0.9
    }

    while(avatar.img.scale.y > 1.6)
    {
        avatar.img.scale.y = 1.6
    }

    while(avatar.img.scale.x > 1.1)
    {
        avatar.img.scale.x = 1.1
    }

    //while(avatar.img.scale.x < 0.7)
    //{
    //    avatar.img.scale.x = 0.7
    //}
    

    if (avatar.canJump == false) {

        if (a == true) {
            avatar.vx += -2.5;
            avatar.setImage("#playerLeft")

        }
        if (d == true) {
            avatar.vx += 2.5;
            avatar.setImage("#playerRight")
        }

    } else {
        if (a == true) {
            avatar.vx += -2;
            avatar.setImage("#playerLeft")

        }
        if (d == true) {
            avatar.vx += 2;
            avatar.setImage("#playerRight")
        }

    }


    avatar.vx *= .85;
    avatar.vy += 1.25;
    avatar.move();

    //used to move the level. 
    var offset = { x: avatar.vx, y: avatar.vy }

    while(avatar.vy > 32)
    {
        avatar.vy = 32
    }

    while (ground.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }
    
    if (jumpOrb.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb.color = 'red';
        avatar.vy = -22;  
        orbCooldown = false;
    }

    if (jumpOrb2.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb2.color = 'red';
        avatar.vy = -38;
        orbCooldown = false;
    }

    if (jumpOrb3.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb3.color = 'red';
        avatar.vy = -43;  
        orbCooldown = false;
    }

    if (jumpOrb4.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb4.color = 'red';
        avatar.vy = -24; 
        orbCooldown = false;
    }

    if (jumpOrb5.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb5.color = 'red';
        avatar.vy = -23; 
        orbCooldown = false;
    }

    if (jumpOrb6.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb6.color = 'red';
        avatar.vy = -23; 
        orbCooldown = false;
    }
    if (jumpOrb7.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb7.color = 'red';
        avatar.vy = -23; 
        orbCooldown = false;
    }
        if (jumpOrb8.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb8.color = 'red';
        avatar.vy = -29; 
        orbCooldown = false;
    }

    if (jumpOrb9.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb9.color = 'red';
        avatar.vy = -36; 
        orbCooldown = false;
    }

    if (orbCooldown == true)
    {
        jumpOrb.color = 'purple'
        jumpOrb2.color = 'blue'
        jumpOrb3.color = 'blue'
        jumpOrb4.color = 'purple'
        jumpOrb5.color = 'yellow'
        jumpOrb6.color = 'purple'
        jumpOrb7.color = 'purple'
        jumpOrb8.color = 'blue'
        jumpOrb9.color = 'blue'
    }

    while (platform.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }
    while (platform2.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }
    while (platform3.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }
    while (platform4.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }
    while (platform5.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }

    while (platform5.isOverPoint(avatar.top())) {
        avatar.vy = 0;
        avatar.y++;
        offset.y++;
    }

    while (platform5.isOverPoint(avatar.right())) {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }

    while (platform6.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }

    while (platform6.isOverPoint(avatar.top())) {
        avatar.vy = 0;
        avatar.y++;
        offset.y++;
    }

    while (platform6.isOverPoint(avatar.left())) {
        avatar.vx = 0;
        avatar.x++;
        offset.x++;
    }

    while (platform7.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }

        while (platform8.isOverPoint(avatar.top())) {
        avatar.vy = 0;
        avatar.y++;
        offset.y++;
    }

        while (platform8.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }

        while (platform9.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }

        while (platform10.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }

        while (platform10.isOverPoint(avatar.top())) {
        avatar.vy = 0;
        avatar.y++;
        offset.y++;
    }

        while (platform10.isOverPoint(avatar.left())) {
        avatar.vx = 0;
        avatar.x++;
        offset.x++;
    }

        while (platform10.isOverPoint(avatar.right())) {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }
    
        while (platform11.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }

        while (platform12.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }


    while (wall.isOverPoint(avatar.left()) && avatar.vx <= 0) {
        avatar.vx = 0;
        avatar.x++;
        offset.x++;
    }
    while (wall.isOverPoint(avatar.right()) && avatar.vx >= 0) {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }
    while (wall2.isOverPoint(avatar.left()) && avatar.vx <= 0) {
        avatar.vx = 0;
        avatar.x++;
        offset.x++;
    }
    while (wall2.isOverPoint(avatar.right()) && avatar.vx >= 0) {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }
    while (wall3.isOverPoint(avatar.left()) && avatar.vx <= 0) {
        avatar.vx = 0;
        avatar.x++;
        offset.x++;
    }
    while (wall3.isOverPoint(avatar.right()) && avatar.vx >= 0) {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }
    while (wall3.isOverPoint(avatar.top())) {
        avatar.vy = 0;
        avatar.y++;
        offset.y++;
    }

    

    /*-------Level movement threshold----*/
    /* if(avatar.x > 500 || avatar.x < 300)
     {
         //Level movement code
         level.x -= offset.x;
         avatar.x -= offset.x;
         level.y -= offset.y;
         avatar.y -= offset.y;
     }*/


    var dx = c.width / 2 - avatar.x
    var dy = c.height / 1.5 - avatar.y

    //level.x += dx*.05; 
    //avatar.x += dx*.05; 
    level.y += dy * .2;
    avatar.y += dy * .2;


    ground.render();
    jumpOrb.render();
    jumpOrb2.render();
    jumpOrb3.render();
    jumpOrb4.render();
    jumpOrb5.render();
    jumpOrb6.render();
    jumpOrb7.render();
    jumpOrb8.render();
    jumpOrb9.render();
    platform.render();
    platform2.render();
    platform3.render();
    platform4.render();
    platform5.render();
    platform6.render();
    platform7.render();
    platform8.render();
    platform9.render();
    platform10.render();
    platform11.render();
    platform12.render();
    wall.graphic();
    wall2.graphic();
    wall3.render();
    avatar.graphic();
}



