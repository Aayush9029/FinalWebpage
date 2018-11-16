

let Rand = Math.floor(Math.random() * 1000);

console.log(Rand);
let tries = 0;

try1 = prompt("Guess number/q to quit and F5 to play again!!");
 (try1 == Rand)
 do {
tries++;

 if (try1 > Rand) {
    try1 = prompt("Smaller please");}

else if (try1 < Rand ){
    try1 = prompt("bigger please");

}else if(try1 == 'q'){
    break;
    
}else {
    alert("invalid input");
    try1 = prompt("Type a number!")
}
 
}while (try1 != Rand) {
     
 }
 if(try1 == Rand ){
    alert("You made it in " + tries+" tries");
}
