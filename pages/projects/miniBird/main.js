let bird;

let pipes = []
let points = 0
let font;
let birdTouched = false

let buttons = document.getElementsByTagName('button');

let isMobile = false

function setup(){
    createCanvas(720, 480);
    bird = new Bird(100,40, 20, 20)
    noCursor()
    noStroke()    
    addPipe() 
    font = loadFont("assets/FlappyBirdy.ttf")
    textAlign(CENTER, CENTER)

    if(window.innerWidth < 722){
        isMobile = true
        setTimeout(function(){ 
    
            document.getElementById("help").style.display = 'none'

            document.getElementById("buttons").style.display = 'none'
    
            resizeCanvas(window.innerWidth, window.innerHeight)
            resetGame()
        }, 200); 
     
    
   
         
}
}


function draw(){
    background(10,  100 , 200)
    fill(255)
    textSize(width/25)
    text(round(points), width/50, height/20 ) 
    if(frameCount % 240 == 0){
        addPipe()
    }
     
    bird.show()
    bird.update()

    pipes.forEach((pipe, i)=> {
        if(pipe.isOut()){
            pipes.splice(i, 1)    
            points+=0.5  
        }
        pipe.checkHit(bird)
        pipe.show() 
        pipe.update()
      
    });

    
}

function touchStarted() {
    bird.up()

    if(isMobile &&  birdTouched){
        setTimeout(() => { 
            document.getElementById("help").style.display = 'none'
            document.getElementById("buttons").style.display = 'none'
            resizeCanvas(window.innerWidth, window.innerHeight)
            resetGame()
        }, 200); 
    }
  }

function keyPressed(e){
    if(e.key == " "){
        bird.up()
    }else if(birdTouched && e.key == "r"){
        loop()  
        resetGame()
    }else if(width > 720 && e.key == "Escape"){
        resizeCanvas(720, 480)
        resetGame()
        document.getElementById("buttons").style.display = 'block'
    }
}



function resetGame(){  
    birdTouched = false
    points = 0
    loop()
    pipes = []

}

function addPipe(){
    let spaceHeight = random(bird.h + 100, height/2)
    let topPipeEnd = random(height - spaceHeight)
    pipes.push(new Pipe(width, 0, 40, topPipeEnd))
    pipes.push(new Pipe(width, topPipeEnd + spaceHeight, 40, height))
}


function fullMode(){
    resetGame()
    document.getElementById("buttons").style.display = 'none'
    document.getElementById("help").style.display = 'block'

    fullscreen(true)

    setTimeout(function(){ 
        document.getElementById("help").style.display = 'none'
        resizeCanvas(window.innerWidth, window.innerHeight)
        resetGame()
    }, 3000);  

}


function shareButton(){
    document.getElementById('notification').innerHTML = "Failed to copy link to clipboard"
    navigator.clipboard.writeText("https://aayush.wtf/pages/projects/miniBird/index.html").then(() => {
        document.getElementById('notification').innerHTML = "Copied link to clipboard"
    })
    document.getElementById('notification').style.animation = "nanimation 2s 1"


    
    setTimeout(function(){ 
        document.getElementById('notification').style.animation = ""
        print("ckear")

    }, 3000);  

}

