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
let perceptron;
let points = new Array(100);

function setup() {
  createCanvas(480, 360); //cria um canvas de 480px de largura e 360px de altura
  perceptron = new Perceptron();
  for (let i = 0; i < points.length; i++) {
    points[i] = new Point(random(-1, 1), random(-1, 1));
  }

}
function draw() {
  background(150, 250, 200)
  for (let i = 0; i < points.length; i++) {
    points[i].show();
  }

  noStroke();

  for (let i = 0; i < points.length; i++) {
    const pt = points[i];

    const inputs = [pt.x, pt.y];
    const target = pt.label
    const guess = perceptron.guess(inputs)

    if (guess == target) {
      fill(0, 255, 0)
    } else {
      fill(255, 0, 0)
    }
    ellipse(pt.getPixelX(), pt.getPixelY(), 15, 15)
  }
  drawLine()
  trainSinglePoint()
}
function drawLine() {
  stroke(0)
  line(0, height, width, 0)
}

let trainningIndex = 0;
function trainSinglePoint() {
  const pt = points[trainningIndex];
  const inputs = [pt.x, pt.y];
  perceptron.train(inputs, pt.label)

  trainningIndex++

  if (trainningIndex == points.length) {
    trainningIndex = 0
  }
}