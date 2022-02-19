var ball;
const xpixels = 1500;
const ypixels = 690;
const imgX = 250;
const imgY = 200;
const bordeX = xpixels - imgX;
const bordeY = ypixels - imgY;

// Cargar imagen
let img;
function preload(){
    img = loadImage('cat.png');
}

class Pelota{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xspeed = 5;
        this.yspeed = 5;
    }

    verificarX(){
        if(this.x <= bordeX && this.x >= 0){
            return true;
        }else{
            return false;
        }
    }

    verificarY(){
        if(this.y <= bordeY && this.y >= 0){
            return true;
        }else{
            return false;
        }
    }

    actualizar(){
        if(this.verificarX()){
            this.x = this.x + this.xspeed;
        }else{
            this.x = this.x - this.xspeed;
            this.xspeed = this.xspeed * (-1);
        }
        
        if(this.verificarY()){
            this.y = this.y + this.yspeed;
        }else{
            this.y = this.y - this.yspeed;
            this.yspeed = this.yspeed * (-1);
        }
        
    }

    mostrar(){
        /*
        fill(180);
        circle(this.x, this.y, 50); */
        image(img, this.x, this.y, imgX, imgY);
        
    }
}


// Programa
function setup(){
    createCanvas(xpixels, ypixels);
    background(0);
    ball = new Pelota();

    image(img, 0, 0, 250, 200);
    
}

function draw(){
    background(255);
    ball.actualizar();
    ball.mostrar();


}

