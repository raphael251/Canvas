var canvas = document.querySelector('canvas');

//Definindo o tamanho do canvas como o tamanho total da janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var mouse = {
   x: undefined,
   y: undefined
}

var maxRadius = 80;
//var minRadius = 2;

var colorArray = [
   '#81C08A',
   '#DB1061',
   '#43D8D8',
   '#0C8C8C',
   '#015959'
];



window.addEventListener('mousemove', function(event){
   mouse.x = event.x;
   mouse.y = event.y;
});

window.addEventListener('resize', function () {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;

   init();
});

function Circle(x, y, radius) {
   this.x = x;
   this.y = y;
   this.radius = radius;
   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
   this.radians = 0;
   this.velocity = 0.025;
   this.minRadius = this.radius;
   this.maxRadius = this.radius * 2;
   this.dc = 0.4;

   this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
   }

   this.update = function () {
      this.radians += this.velocity;
      this.x += Math.sin(this.radians) * 5;
      this.y += Math.cos(this.radians) * 5;
      this.radius += this.dc;
      if (this.radius > this.maxRadius){
         this.dc = -this.dc;
      }

      if (this.radius < this.minRadius){
         this.dc = -this.dc;
      }

      this.draw();
   }
}

var circulo;

function init () {

      var x = innerWidth / 2;
      var y = innerHeight / 2;
      var radius = 20;
   circulo = new Circle(x, y, radius);
}

function animate(){
   requestAnimationFrame(animate);

   c.clearRect(0, 0, innerWidth, innerHeight);

   c.beginPath();
   c.arc(innerWidth/2 + 200, innerHeight/2, 200, 0, Math.PI * 2, false);
   c.stroke()

   circulo.update();

}

init();
animate();
