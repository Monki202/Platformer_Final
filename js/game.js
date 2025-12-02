
var c = document.querySelector(`canvas`)
var ctx = c.getContext(`2d`)
var fps = 1000/60
var timer = setInterval(main, fps)
var playerImg = new Image();
var player = document.getElementById("#Player")


function main()
{
    ctx.clearRect(0,0,c.width,c.height); 
    state()

}

//setup
var state;
var button = new GameObject();
var avatar = new GameObject();
var ground = new GameObject();
var platform = new GameObject();
var platform2 = new GameObject();
var wall = new GameObject();
var wall2 = new GameObject();
var level = new GameObject();


function init()
{
    state = menu

    avatar.color = `green`;
    avatar.w = 120;
    avatar.h = 130;
    avatar.setImage("#playerLeft")

    level.x = 0; 
    level.y = 0;
    
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
    ground.h = c.height*.5;
    ground.y = c.height
    ground.world = level

    platform.w = -200;
    platform.h = 34;
    platform.color = `black`
    platform.world = level
    platform.x = 40;

    platform2.w = 100;
    platform2.h = 34;
    platform2.color = `black`
    platform2.world = level
    platform2.x = 40;
}

init();

/*---------------Game Screens (states)----------------*/
function menu()
{
    if(clicked(button))
    {
        state = game;
    }
    button.render()
}

function win()
{

}
function lose()
{

}

//IMPORTANT

//Perfomance.now = DeltaTime
function animateScale(avatar, startX, startY, endX, endY, duration) {
    var startTime = performance.now();

    function update(now) {
        var t = (now - startTime) / duration;
        if (t > 1) t = 1;

        avatar.img.scale.x = startX + (endX - startX) * t;
        avatar.img.scale.y = startY + (endY - startY) * t;

        if (t < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}


function game()
{
    if(sp == true && avatar.canJump == true)
    {
        animateScale(avatar, 0.8, 1.3, 1, 1, 300);
        avatar.canJump = false;
        avatar.hasJumped = true;
        avatar.vy = -25;

        
    }

    if(avatar.canJump == false)
    {

        if(a == true)
        {
            avatar.vx += -2.5;
            avatar.setImage("#playerLeft")
            
        }
        if(d == true)
        {
            avatar.vx += 2.5;
            avatar.setImage("#playerRight")
        }

    }else
    {
        if(a == true)
        {
            avatar.vx += -2;
            avatar.setImage("#playerLeft")
            
        }
        if(d == true)
        {
            avatar.vx += 2;
            avatar.setImage("#playerRight")
        }

    }


    avatar.vx *= .85;
    avatar.vy += 1;
    avatar.move();

    //used to move the level. 
    var offset = {x:avatar.vx, y:avatar.vy}

    while(ground.isOverPoint(avatar.bottom()))
    {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        avatar.hasJumped = false;
        avatar.rotation %= 360;
    }
    while(platform.isOverPoint(avatar.bottom()) && avatar.vy >= 0)
    {
        avatar.vy = 0;
        avatar.y--;
        offset.y--;
        avatar.canJump = true;
        avatar.hasJumped = false;
        avatar.rotation %= 360;
    }
    while(wall.isOverPoint(avatar.left()) && avatar.vx <= 0)
    {
        avatar.vx = 0;
        avatar.x++;
        offset.x++;
    }
    while(wall.isOverPoint(avatar.right()) && avatar.vx >= 0)
    {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }
    while(wall2.isOverPoint(avatar.left()) && avatar.vx <= 0)
    {
        avatar.vx = 0;
        avatar.x++;
        offset.x++;
    }
    while(wall2.isOverPoint(avatar.right()) && avatar.vx >= 0)
    {
        avatar.vx = 0;
        avatar.x--;
        offset.x--;
    }
    

    /*-------Level movement threshold----*/
    //if(avatar.x > 500 || avatar.x < 300)
    //{
        //Level movement code
        //level.x -= offset.x;
        //avatar.x -= offset.x;
        //level.y -= offset.y;
        //avatar.y -= offset.y;
    //}

    
        var dx = c.width/2 - avatar.x
        var dy = c.height/1.75 - avatar.y
        
        //level.x += dx*.05; 
        //avatar.x += dx*.05; 
        level.y += dy*.15; 
        avatar.y += dy*.15; 
    
    

    ground.render();
    platform.render();
    platform2.render();
    wall.render();
    wall2.render();
    avatar.graphic();
    console.log(avatar.img.scale)
}



