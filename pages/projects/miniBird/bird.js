
class Bird{
    constructor(x, y, w, h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.gravity = 0.5;
        this.lift = -15;
        this.velocity = 0;
    }
    
    up() {
    this.velocity += this.lift;
    }
    
    update() {
        this.velocity += this.gravity;
        this.velocity *= 0.98;
        this.y += this.velocity;

        if (this.y + this.h > height) {
            this.y = height - this.h;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

    }

    mouseMoveBird(){
        this.x = mouseX
        this.y = mouseY
    }


    show(){
        fill(255, 222, 22)
        rect(this.x, this.y, this.w, this.h )
    }
}
