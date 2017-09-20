function Blob(x,y,r) {
    this.pos = createVector(width/2 , height/2);
    this.r=64;

    this.show=function () {
        fill(255);
        ellipse(this.pos.x ,this.pos.y,this.r,this.r);
    }
}