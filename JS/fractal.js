var tree = [];
var leaves = [];
let count = 0;
let stop = 0;

function setup() {
    createCanvas(900,700);
    let a = createVector(width/2, height);
    let b = createVector(width/2, height-200);
    let root = new Branch(a, b);

    tree[0] = root;


}

function mousePressed(){

if ( stop < 1500){
    for( var i = tree.length - 1 ; i >= 0; i--){
        if(!tree[i].finished){
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
        tree[i].finished = true;
    
        }
        count++;
        stop++; 

        if(count == 69){
            for (let i = 0; i <tree.length; i++){
                if(!tree[i].finished){
                    var leaf = tree[i].end.copy();
                    leaves.push(leaf);
                }

            }
        }
        if(count == 420){
            for (let i = 0; i <tree.length; i++){
                if(!tree[i].finished){
                    var leaf = tree[i].end.copy();
                    leaves.push(leaf);
                }

            }
        }
    }
}
}

function draw(){
    background(0);

    for (let i = 0; i < tree.length ; i ++){
        tree[i].show();
        // tree[i].jitter();
    }
    for (let i = 0; i < leaves.length ; i ++){
        noStroke();
        fill(random(190,255),102,180, 180);
        ellipse(leaves[i].x,leaves[i].y, 13,19);
        leaves[i].y += random(-1/2,5);
        leaves[i].x += random(1/2,1);

    }
}

