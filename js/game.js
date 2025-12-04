
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
var platform14 = new GameObject();
var wall = new GameObject();
var wall2 = new GameObject();
var level = new GameObject();

//recommended x between 50 and 950
function init() {
    state = menu

    avatar.color = `green`;
    avatar.w = 120;
    avatar.h = 130;
    avatar.setImage("#playerLeft")

    level.x = 0;
    level.y = 0;

    jumpOrb.h = 100
    jumpOrb.w = 100
    jumpOrb.x = 600
    jumpOrb.y = 130
    jumpOrb.color = 'yellow'
    jumpOrb.world = level

    jumpOrb2.h = 100
    jumpOrb2.w = 100
    jumpOrb2.x = 400
    jumpOrb2.y = -290
    jumpOrb2.color = 'yellow'
    jumpOrb2.world = level
    
    jumpOrb3.h = 100
    jumpOrb3.w = 100
    jumpOrb3.x = 700
    jumpOrb3.y = -350
    jumpOrb3.color = 'yellow'
    jumpOrb3.world = level

    wall.h = 10000;
    wall.w = 34;
    wall.color = `purple`
    wall.world = level
    wall.x = 1000;

    wall2.h = 10000;
    wall2.w = 34;
    wall2.color = `purple`
    wall2.world = level
    wall2.x = -2;

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

    platform4.w = 200;
    platform4.h = 34;
    platform4.color = `black`
    platform4.world = level
    platform4.x = 90;
    platform4.y = -130
    
}

init();

//Jump coold

var jumpCooldown = false;
var orbCooldown = true;

document.addEventListener(`keydown`, jump);
function jump(e) {
    console.log(e.keyCode)
    if (e.keyCode === 32) {
        if (avatar.canJump == true && jumpCooldown == false) {
            console.log('jump')
            //animateScale(avatar, 0.8, 1.3, 1, 1, 300);
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


document.addEventListener(`keyup`, resetJump);
function resetJump(e) {
    console.log(e.keyCode)
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
/*function animateScale(avatar, startX, startY, endX, endY, duration) {
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
}*/

//old animation system *DEPRICATED*




function game() {

    //this scales the player to simulate the player falling fast they stretch
    //using let instead of var so its not accesable outside of the game loop, also so it doesnt get jumbled with similar names
    //gets the absolute value of velocity to stretch the player on the y so it stretchs when falling and going up.
    //so there isnt two of these
    let speedYpos = -1 * (avatar.vy);
    let speedXpos = (avatar.vy);
    //let speedX = Math.abs(avatar.vx);

    //math.min gets the smaller number from a list
    let stretchAmountUp = Math.min(speedYpos / 25, 1);
    let stretchAmountDown = Math.min(speedXpos / 25, 1);
    //let rotationAmount = Math.min(speedX * 25, 1);

    //setting the stretch amount for the X and Y to be used during falling
    let targetScaleYUp = 1 + stretchAmountUp * 0.7;
    let targetScaleXUp = 1 - stretchAmountUp * 0.4;

    let targetScaleYDown = 1 + stretchAmountDown * 1.4;
    let targetScaleXDown = 1 - stretchAmountDown * 0.4;
    //let rotationAmountX = 1 - rotationAmount * -30;

    //Using the lerp function from bove to scale the player smoothly (avatarimgscale being a, targetscale being b, and 0.15 being t for the smoothing)
    avatar.img.scale.x = lerp(avatar.img.scale.x, targetScaleXUp, 0.3)
    avatar.img.scale.y = lerp(avatar.img.scale.y, targetScaleYUp, 0.3)
    
    avatar.img.scale.x = lerp(avatar.img.scale.x, targetScaleXDown, 0.3)
    avatar.img.scale.y = lerp(avatar.img.scale.y, targetScaleYDown, 0.3) 

    //avatar.rotation = lerp(avatar.rotation, rotationAmountX, 0.3)




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

    while (ground.isOverPoint(avatar.bottom())) {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        orbCooldown = true;
    }
    
    if (jumpOrb.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb.color = 'red'
        avatar.vy = -22  
        orbCooldown = false;
    }

    if (jumpOrb2.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb2.color = 'red'
        avatar.vy = -38  
        //orbCooldown = false
    }

    if (jumpOrb3.overlaps(avatar) && orbCooldown == true) 
    {
        jumpOrb3.color = 'red'
        avatar.vy = -45  
        orbCooldown = false;
    }

    if(jumpOrb3.color == 'red')
    {
        
    }

    if (orbCooldown == true)
    {
        jumpOrb.color = 'yellow'
        jumpOrb2.color = 'yellow'
        jumpOrb3.color = 'yellow'
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
    var dy = c.height / 1.75 - avatar.y

    //level.x += dx*.05; 
    //avatar.x += dx*.05; 
    level.y += dy * .15;
    avatar.y += dy * .15;



    ground.render();
    jumpOrb.render();
    jumpOrb2.render();
    jumpOrb3.render();
    platform.render();
    platform2.render();
    platform3.render();
    platform4.render();
    wall.render();
    wall2.render();
    avatar.graphic();
}



