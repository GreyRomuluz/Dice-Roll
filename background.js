var DicesBackground = {
  DiceHeight: 60,
  DiceWidth: 64,
  Dices: [],
  DiceImage: 'images/Dice2.png',
  maxDices: 8,
  minScale: 0.4,
  draw: function() {
    this.setCanvasSize();
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (var i = 0; i < this.Dices.length; i++) {
      var Dice = this.Dices[i];
      Dice.image = new Image();
      Dice.image.style.height = Dice.height;
      Dice.image.src = this.DiceImage;
      this.ctx.globalAlpha = Dice.opacity;
      this.ctx.drawImage (Dice.image, Dice.x, Dice.y, Dice.width, Dice.height);
    }
    this.move();
  },
  move: function() {
    for(var b = 0; b < this.Dices.length; b++) {
      var Dice = this.Dices[b];
      Dice.y += Dice.ys;
      if(Dice.y > this.h) {
        Dice.x = Math.random() * this.w;
        Dice.y = -1 * this.DiceHeight;
      }
    }
  },
  setCanvasSize: function() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
  },
  initialize: function() {
    this.canvas = $('#canvas')[0];

    if(!this.canvas.getContext)
      return;

    this.setCanvasSize();
    this.ctx = this.canvas.getContext('2d');

    for(var a = 0; a < this.maxDices; a++) {
      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
      this.Dices.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        ys: Math.random() + 1,
        height: scale * this.DiceHeight,
        width: scale * this.DiceWidth,
        opacity: scale
      });
    }

    setInterval($.proxy(this.draw, this), 30);
  }
};

$(document).ready(function(){
  DicesBackground.initialize();
});
