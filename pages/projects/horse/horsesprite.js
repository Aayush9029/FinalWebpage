class Sprite{
    constructor (animation, x, y, speed){
        this.x = x;
        this.y = y;

        this.animation = animation;
        this.speed = speed;
        this.index = 0;
        this.len = this.animation.length;
    }


show(){
    let index = floor(this.index) % this.len;
    image(animation[index], this.x, this.y);

}

animate (){
 this.index += this.speed;
 this.x += this.speed * windowWidth/150;

if ( this.x > width){
    this.x = - this.animation[0].width
}

}

}