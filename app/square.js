var Square = (function() {
  function Square() {
    this.width = 20;
    this.height = 20;
    this.xPosition = 0;
    this.yPosition = 0;
    this.fillColor = '#000';
  }
  Square.prototype.render = function(){
    ctx.beginPath();
    ctx.rect(this.xPosition, this.yPosition, this.width, this.height);
    ctx.fillStyle = this.fillColor;
    ctx.fill();
    ctx.closePath();
  };
  return Square;
})();
module.exports = Square;
