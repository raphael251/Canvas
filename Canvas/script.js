var canvas = document.querySelector('canvas');

//Definindo o tamanho do canvas como o tamanho total da janela
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*
//Desenhando retângulos
//c.fillRect(x, y, width, height);
c.fillStyle = "rgba(255, 0, 0, 0.7)";
c.fillRect(50, 50, 100, 80);
c.fillStyle = "rgba(0, 255, 0, 0.7)";
c.fillRect(150, 150, 80, 100);
c.fillStyle = "rgba(0, 0, 255, 0.7)";
c.fillRect(250, 250, 80, 80);

/*
//Desenhando linhas
//começa uma linha
c.beginPath();
//ponto inicial da linha
c.moveTo(80, 600);
//a partir daqui é só indicar pra onde vai o próximo traço.
c.lineTo(80, 400);
c.lineTo(130, 500);
c.lineTo(80, 550);
c.lineTo(130, 600);
c.stroke();

/*
Desenhando circulos e arcos
c.arc(x, y, raio, angulo inicial, angulo final, );
c.beginPath();
c.arc(600, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'green';
c.stroke();

for(var i = 0; i < 10; i++){
   c.beginPath();
   c.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.round(Math.random()*50), 0, Math.PI * 2, false);
   c.strokeStyle = 'rgb(' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ')';
   c.stroke();
}

var tamanho = 30;

function multiplicaPorcentagem(valor, porcentagem){
   return valor + (valor*porcentagem/100);
}

for(var y = 0 ; y < 20 ; y++){
   c.beginPath();
   c.arc(canvas.width/2, canvas.height/2, tamanho, Math.PI * 2, false);
   c.stroke();

   tamanho = multiplicaPorcentagem(tamanho, 15);
}
*/

/*
rgba = ( ) => 'rgba(' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ', ' + Math.round(Math.random()*255) + ', 0.9)';

function Circle (x, y, dx, dy, radius, preenchimento, borda) {
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;
   this.preenchimento = preenchimento;
   this.borda = borda;

   this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = this.borda;
      c.fillStyle = this.preenchimento;
      c.fill();
      c.stroke();
   }

   this.update = function () {
      if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
         this.dx = -this.dx;
      }

      if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
         this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;
      this.draw();
   }
}

var variosCirculos = [];

for (var i = 0 ; i < 200 ; i++){
   var radius = Math.random() * 80;
   var x = Math.random() * (innerWidth - radius * 2) + radius;
   var y = Math.random() * (innerHeight - radius * 2) + radius;
   var dx = Math.random() * 4;
   var dy = Math.random() * 4;
   preenchimento = rgba();
   borda = rgba();
   variosCirculos.push(new Circle(x, y, dx, dy, radius, preenchimento, borda));
}


function animar(){
   requestAnimationFrame(animar);
   c.clearRect(0, 0, innerWidth, innerHeight);

   for (var i = 0 ; i < variosCirculos.length ; i++) {
      variosCirculos[i].update();
   }

}

animar();
*/

var mouse = {
   x: undefined,
   y: undefined
}

window.addEventListener('mousemove', function(event){
   mouse.x = event.x;
   mouse.y = event.y;
});

function Circle(x, y, dx, dy, radius) {
   this.x = x;
   this.y = y;
   this.dx = dx;
   this.dy = dy;
   this.radius = radius;

   this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.strokeStyle = 'black';
      c.stroke();
      c.fillStyle = 'rgba(180, 240, 240, 0.9)';
      c.fill();
   }

   this.update = function () {
      if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
         this.dx = -this.dx;
      }
      if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
         this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      //interactivity
      if (this.radius < 70 && mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
         this.radius += 2;
      } else if (this.radius > 2) {
         this.radius -= 2;
      }

      this.draw();
   }
}

var circleArray = [];

for(var i = 0 ; i < 600 ; i++) {
   var radius = 20;
   var x = Math.random() * (innerWidth - radius * 2) + radius;
   var y = Math.random() * (innerHeight - radius * 2) + radius;
   var dx = (Math.random() - 0.5) * 3;
   var dy = (Math.random() - 0.5) * 3;
   circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
   requestAnimationFrame(animate);

   c.clearRect(0, 0, innerWidth, innerHeight);

   for (var i = 0 ; i < circleArray.length ; i++) {
      circleArray[i].update();
   }
}

animate();
