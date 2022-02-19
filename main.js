var ball;  // Objeto que va a rebotar
var nombreImagen = 'cat.png';

// Resolución del canvas
const xpixels = 1500;
const ypixels = 690;

// Dimensiones de la imagen
const imgX = 250;
const imgY = 200;

// Hitbox de la imagen
const bordeX = xpixels - imgX;
const bordeY = ypixels - imgY;

// Cargar imagen en "img"
let img;
function preload(){
    img = loadImage(nombreImagen);
}

// Clases y objetos
// Clase pelota: Representa el objeto que rebotará en pantalla
class Pelota{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.xspeed = 5;
        this.yspeed = 5;
        // Tiene velocidad constante
    }

    verificarX(){
        // Verifica si la imagen está dentro de los límites del canvas en el eje x
        if(this.x <= bordeX && this.x >= 0){
            return true;
        }else{
            return false;
        }
    }

    verificarY(){
        // Verifica si la imagen está dentro de los límites del canvas en el eje y
        if(this.y <= bordeY && this.y >= 0){
            return true;
        }else{
            return false;
        }
    }

    actualizar(){
        // Actualiza la posición del objeto que rebota
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
        // Carga la imagen en pantalla con su posición respectiva
        image(img, this.x, this.y, imgX, imgY);
        
    }
}


// Programa //
function setup(){
    createCanvas(xpixels, ypixels); // Crear canvas
    ball = new Pelota();  // Crear objeto
    image(img, 0, 0, 250, 200);  // Cargar imagen
    
}

function draw(){
    background(255);  // Fondo blanco
    ball.actualizar();  // Actualizo la posición
    ball.mostrar();  // Dibujo la posición
}

