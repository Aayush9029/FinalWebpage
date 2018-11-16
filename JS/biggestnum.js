
var num1 = Number(prompt("number 1"));

var num2 = Number(prompt("num 2 "));

var num3 = Number(prompt("num3?"));


const courses = [num1, num2, num3];

document.write("Original values "+ courses );
         document.write('<br />'); 
sum = (num1 + num2 + num3);
        document.write('<br />'); 
document.write("Average of the numbers = " + sum/courses.length);
         document.write('<br />');  
document.write("In asscending orders ");
         document.write('<br />'); 
document.write(courses[0] +" "+  courses[1] +" "+ courses[2]);
        document.write('<br />');


