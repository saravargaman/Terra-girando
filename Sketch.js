function setup() {
  createCanvas(1920, 1080, WEBGL); // plano 3D
  terra = loadImage('terra.jpg');
}

function draw() {
  background(128, 0, 128); // Cor de fundo roxa (RGB: 128, 0, 128)
  rotateY(millis() / 1000); // rotação da terra
  texture(terra); // textura da terra, imagem.
  sphere(80, 100); // esfera 3D
}
