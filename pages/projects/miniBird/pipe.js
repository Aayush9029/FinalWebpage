

class Pipe{
    constructor(x, y, w, h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.speed = 1
        this.isTouched = false
    }
    show(){
        if(this.isTouched){
            textSize(width/5)
            fill(255, 160)
            textFont(font)
            if(isMobile){
                textSize(width/6)

                text("Tap twice to replay", width/2, height/2)
            }else{
                text("Press R to replay", width/2, height/2)
            
            }
            birdTouched = true
            fill(255, 100, 50)
            noLoop()
            textFont("Helvetica")

            
        }else{
            fill(22, 222, 100, 200);
        }

        rect(this.x, this.y, this.w, this.h)
        rect(this.x - 8 , this.y-5, this.w + 16, 10)
        rect(this.x - 8 , this.y + this.h, this.w + 16, 10)
    }

    update(){
        this.x -= this.speed
    }

    isOut(){
        return(this.x + this.w < 0 )
    }

    checkHit(bird){
        if(bird.x + bird.w > this.x && bird.x + bird.w  < this.x + this.w || bird.x < this.x + this.w && bird.x > this.x ){
            if(bird.y < this.y + this.h && bird.y + bird.h > this.y){
                this.isTouched = true
            }else{
                this.isTouched = false
            }
        }else{
            this.isTouched = false
        }
    }

}