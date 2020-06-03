let create = [];
let create1 = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 10; i++) {
    var x = 100;
    var y = 100;
    var z = 50;
    create[i] = new creator(x, y, z);
  }
  for(let j = 0; j < 10; j++) {
    var a = 100;
    var b = 100;
    var c = 100;
    create1[j] = new creator1(a, b, c);
  }
}

function draw() {
  background(220);
  for(let i = 0; i < create.length; i++) {
    create[i].show();
  }
  for(let j = 0; j < create1.length; j++) {
    create1[j].circle();
  }
}
class creator {
  constructor(x, y, z) {
    this.x = random(width);
    this.y = random(height);
    this.z = z;
  }
  show() {
    ellipse(this.x, this.y, this.z);
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}
class creator1 {
  constructor(a, b, c) {
    this.a = random(width);
    this.b = random(height); 
    this.c = c;
  }
  circle() {
    ellipse(this.a, this.b, this.c);
    this.a = this.a + random(-5, 5);
    this.b = this.b + random(-5, 5);
  }
}