function Branch(begin, end){
this.begin = begin;
this.end   = end;
this.finished   = false;


this.show = function(){
    strokeWeight(2);
    stroke(random(200,255),50,180);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }



    this.branchA = function (){

        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI / 6);
        dir.mult(0.67);
        let newEnd = p5.Vector.add(this.end, dir);
        let b = new Branch(this.end, newEnd);
        return b;  
    }

    this.branchB = function (){
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI / 6);
        dir.mult(0.67);
        let newEnd = p5.Vector.add(this.end, dir);
        let b = new Branch(this.end, newEnd);
        return b;  
    }
}