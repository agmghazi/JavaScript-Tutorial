// for comment from keyboard   (ctrl+ /)


// document.writeln("hi from javascript external");

var name1=5;
var Name="ahmed";
var $name=45;
var sum = $name+name1;

// document.writeln(sum);

function myclick() {
    alert("new alert");
}

// === this qual for type and value
// == this qual for value only
if (1=="1" & 2 === "2" ) {
    document.write("equal 1"); 
} else if (1==="1" | 2 === "2") {
    document.write("equal 2");  
}else if (1===1)
{
    document.write("equal 3");  

}
else
{ 
     document.write("not equal");
}
var today="sunday";
var result;

switch (today) {
    case "sunday":
        result="sunday"
        break;
        case "monday" :
        result ="monday"
    default:
        break;
}

document.write(result);

for (let i = 0; i<10 ; i++) {
    document.write( i+" - "+"ahmed jamal <br>");
    
}

var x= 10
while (x<=20) {
    document.write( x +"<br>");
    x++;
}

do {
    document.write( x +"<br>");
    x++;
} while (x<=20);

function age(num1) {
    alert("my age is " + num1);
}