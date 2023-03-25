function sign(num) {
  return num >= 0 ? 1 : -1;
}

class Perceptron {
  weights = [0, 0];
  learningRate = 0.1 //evita excesso de ajuste ao recalibrar os pesos

  constructor() {
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[1] = random(-1, 1); // para a qtd de pesos definida se da um peso entre -1 e 1
    }
  }

  guess(inputs) { //da o palpite sobre qual grupo pertence
    let sum = 0;
    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i]; //soma os resultados de cada input pelo peso
    }

    const output = sign(sum);
    return output
  }

  train(inputs, target) {
    const guess = this.guess(inputs)
    const error = target - guess

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += error * inputs[i] * this.learningRate
    }
  }
}