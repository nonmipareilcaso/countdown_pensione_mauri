let myFontCoiny;
let myFontAmatic;
function preload() {
  myFontCoiny = loadFont('coiny-regular.ttf');
  myFontAmatic = loadFont('AmaticSC-Regular.ttf');
}


let r1 = 85;
let g1 = 71;
let b1 = 106;
let r2 = 174;
let g2 = 61;
let b2 = 99;
let r3 = 219;
let g3 = 56;
let b3 = 83;
let r4 = 244;
let g4 = 92;
let b4 = 68;
let r5 = 248;
let g5 = 182;
let b5 = 70;

let secondiTarget = 15611400;

let opacita;
let deltaopacita;


let confettis = [];
let thirties = [];

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.position(0, 0);
  frameRate(30);
  for(let i = 0; i < 250; i++){
    confettis[i] = new Confetti();
  }
  opacita = 0;
  deltaopacita = 5;
}

function draw() {
  background(0);
  testoTimer();
  testoTesto();
  for(let i = 0; i < 250; i++){
    confettis[i].display();
  }
  
  for(let i = (thirties.length - 1); i >= 0; i--){
    thirties[i].display();
    if(thirties[i].opacity < 0){
      thirties.splice(i, 1);
    }
  }
  

}

function mousePressed(){
  let trenta = new scrittaMC(mouseX, mouseY);
  thirties.push(trenta);
}

function testoTesto(){
  push();
  textFont(myFontAmatic);
  fill(255, 100);
  textSize(width / 18);
  textAlign(CENTER, BOTTOM);
  text("MANCANO", width/2, height / 4)
  textAlign(CENTER, TOP);
  text("ALLA TUA PENSIONE", width/2, height * 0.75);
  pop();
}

function testoTimer(){
  
  let secondiTotal = 0;
  let mese = month();
  if(mese > 1){
    secondiTotal += 2678400;
    if(mese > 2){
      secondiTotal += 2419200;
      if(mese > 3){
        secondiTotal += 2678400;
        if(mese > 4){
          secondiTotal += 2592000;
          if(mese > 5){
            secondiTotal += 2678400;
            if(mese > 6){
              secondiTotal += 2592000;
              if(mese > 7){
                secondiTotal += 2678400;
                if(mese > 8){
                  secondiTotal += 2678400;
                  if(mese > 9){
                    secondiTotal += 2592000;
                    if(mese > 10){
                      secondiTotal += 2678400;
                      if(mese > 11){
                        secondiTotal += 2592000;
                        if(mese > 12){
                          secondiTotal += 2678400;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  secondiTotal += (day() - 1) * 86400;
  secondiTotal += hour() * 3600;
  secondiTotal += minute() * 60;
  secondiTotal += second();
  
  let secondiRestanti = secondiTarget - secondiTotal;
  
  let secondi = secondiRestanti % 60;
  secondiRestanti = (secondiRestanti - secondi) / 60;
  let minuti = secondiRestanti % 60;
  secondiRestanti = (secondiRestanti - minuti) / 60;
  let ore = secondiRestanti % 24;
  secondiRestanti = (secondiRestanti - ore) / 24;
  let giorni = secondiRestanti;
  
  push();
  textFont(myFontCoiny);
  //fill(255, opacita);
  fill(250);
  textSize(width / 12);
  textAlign(CENTER, CENTER);
  text("" + giorni + "d " + ore + "h " + minuti + "m " + secondi + "s", width/2, height/2);
  opacita = opacita + deltaopacita;
  if(opacita > 255){
    deltaopacita = -5;
  }
  else if(opacita < 0){
    deltaopacita = 5;
  }
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class scrittaMC {
  constructor(posx, posy){
    this.colore = int(random(1, 6));
    this.x = posx;
    this.y = posy;
    this.opacity = 255;
    this.deltaop = -1;
  }
  
  display(){
    push();
    if(this.colore == 1){
      fill(r1, g1, b1, this.opacity);
    }
    else if(this.colore == 2){
      fill(r2, g2, b2, this.opacity);
    }
    else if(this.colore == 3){
      fill(r3, g3, b3, this.opacity);
    }
    else if(this.colore == 4){
      fill(r4, g4, b4, this.opacity);
    }
    else if(this.colore == 5){
      fill(r5, g5, b5, this.opacity);
    }
    textFont(myFontCoiny);
    textSize(width / 8);
    textAlign(CENTER, CENTER);
    text("MC", this.x, this.y);
    pop();
    this.opacity = this.opacity + this.deltaop;
    this.y = this.y + 1;
  }
}

class Confetti {
  constructor(){
    this.colore = int(random(1, 6));
    this.x = random(-6, width + 6);
    this.y = random(-40, height - 2);
    this.rad = random(10, 20);
    this.vx = random(-2, 2);
    this.vy = (this.rad * 0.25) + random(-2, 2);
    this.opacity = 0;
    this.deltaop = random(20, 40);
  }

  display(){
    push();
    noStroke();
    if(this.colore == 1){
      fill(r1, g1, b1, this.opacity);
    }
    else if(this.colore == 2){
      fill(r2, g2, b2, this.opacity);
    }
    else if(this.colore == 3){
      fill(r3, g3, b3, this.opacity);
    }
    else if(this.colore == 4){
      fill(r4, g4, b4, this.opacity);
    }
    else if(this.colore == 5){
      fill(r5, g5, b5, this.opacity);
    }
    ellipse(this.x, this.y, this.rad, this.rad);
    pop();
    this.x = this.x + this.vx;
    this.y =this.y +this.vy;
    this.opacity = this.opacity + this.deltaop;
    if(this.opacity >255){
      this.deltaop = this.deltaop * -1; 
    }
    else if(this.opacity < 0 || this.y > (height + 20)){
      this.x = random(-6, width + 6);
      this.y = random(-40, height - 2);
      this.rad = random(10, 20);
      this.vx = random(-2, 2);
      this.vy = (this.rad * 0.25) + random(-2, 2);
    this.opacity = 0;
    this.deltaop = random(20, 40);
    }
  }
}
