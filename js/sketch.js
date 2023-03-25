//teste:
// let perceptron;
// function setup(){
//   perceptron = new Perceptron(); //carrega classe Perceptron

//   const inputs = [-1,0.5]; //define dois valores de input
//   const guess = perceptron.guess(inputs); 
//   console.log("Resultado: " + guess); 

//   setTimeout(() => {
//     setup() //retorna o resultada que foi enviado a gues() a cada 1seg
//   }, 1000);
// }

let points = new Array(100);

function setup() {
  createCanvas(480, 360); //cria um canvas de 480px de largura e 360px de altura

  for (let i = 0; i < points.length; i++) {
    points[i] = new Point(random(-1, 1), random(-1, 1));
  }

}
function draw() {
  background(150, 250, 200)
  for (let i = 0; i < points.length; i++) {
    points[i].show();
  }

}