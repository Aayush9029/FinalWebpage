var database;
var drawing = [];
var currentPath = [];
var isDrawing = false;

function setup(){
    canvas = createCanvas(400, 400); redcolor = createSlider(0, 255, 100);
    greencolor = createSlider(0, 255, 100)   ;
    bluecolor = createSlider(0, 255, 100);
    redcolor.position(90, 57);
    greencolor.position(90, 117);
    bluecolor.position(90, 172);

    canvas.mousePressed(startPath);
    canvas.parent('canvascontainer');
    canvas.mouseReleased(endPath);
    
    var saveButton = select('#saveButton');
    saveButton.mousePressed(saveDrawing);
    
    var clearButton = select('#clearButton');
    clearButton.mousePressed(clearDrawing);
    
    
    
    
    
    var config = {
            apiKey: "AIzaSyDVeRD0P145hETu39Ryh4HM8rvlTSj4Kos",
            authDomain: "try2-70357.firebaseapp.com",
            databaseURL: "https://try2-70357.firebaseio.com",
            projectId: "try2-70357",
            storageBucket: "",
            messagingSenderId: "99106327684"
        };
    
      firebase.initializeApp(config);
      database = firebase.database();
    
        var ref = database.ref('drawings');
        ref.on('value', gotData, errData);
    } 
    
    function  startPath(){
        isDrawing = true;
        currentPath = [];
        drawing.push(currentPath);
        
    }
    
    function  endPath(){
        isDrawing = false;
    
    }
    
    function draw(){
        background(51);
    
    
        if(isDrawing){
            var point = {
                x: mouseX,
                y: mouseY
            }
            currentPath.push(point);
        }
    
        noFill();
        stroke(redcolor.value(),greencolor.value(),bluecolor.value());  
        for(var i = 0; i < drawing.length; i++){
            var path = drawing[i];
        beginShape();
            for(var j = 0; j < path.length; j++){
    
            vertex(path[j].x, path[j].y);
            endShape();
            }
        }
    
    }
    
    
    
    function saveDrawing(){
        var ref = database.ref('drawings');
        var data = {
            name: 'Aayush',
            drawing: drawing
        }
        var result = ref.push(data, dataSent);
        console.log(result.key);
    
        function dataSent(status){
            console.log(status)
        }
    }
    
    
    
    function gotData(data){
    
    //clear listing
    
    var elements = selectAll('.listing');
    
    for (var i = 0 ; i < elements.length; i++){
        elements[i].remove();
    }
    
    
        var drawings = data.val();
        var keys = Object.keys(drawings);
        for(var i = 0; i < keys.length ; i++){
            var key = keys[i];
            // console.log(key)
            var li = createElement('li', key);
            li.class('listing');
            var ahref = createA('#', key);
            ahref.mousePressed(showDrawing);
            ahref.parent(li);
            li.parent('drawinglist');
        }
    }
    
    function errData(err){
        console.log(err);
    }
    
    function showDrawing(){
        var key = this.html();
        var ref = database.ref('drawings/' + key);
        ref.once('value', oneDrawing, errData);
        
        function oneDrawing(data){
            var dbdrawing = data.val();
            drawing = dbdrawing.drawing;
            // console.log(drawing);
        }
    
    
    
    }
    
    
    
    
    function clearDrawing(){
        drawing = [];
    }