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

person={
names:"ahmed",
age:20,
lastname:"midoo"
}

document.write(person.names + " " + "age = "+ person.age);

document.write("<br>");
function myemployee(id,name,lname,age) {
    this.id=id;
    this.name=name;
    this.lname=lname;
    this.age=age;
}
emp=new myemployee(1,"ahmed","jamal",26);
document.write(emp.name+ " "+emp.lname + " "+emp.age);

document.write("<br>");
document.write("<br>");

var myname = ["ahmed","essa","hamed"];
for (let index = 0; index < myname.length; index++) {
    const element = myname[index];
document.write(element + "<br>");    
}

document.write("<br>");
document.write("<br>");

var num11=22;
var num22=2.4112244;
var num33=25e3;
//var num44= new number(14);

num55=num22.toFixed(2);
num77=num22.toPrecision(3);
num88=num22.toExponential(1);

num66=num11.toString();


document.write( num11);
document.write( num22+"<br>");
document.write( num33+"<br>");
document.write( num55+"<br>");
document.write( num66+"<br>");
document.write( num77+"<br>");
document.write( num88+"<br>");
document.write( typeof(num88)+"<br>");

//document.write( num44+"<br>");

document.write("<br>");
document.write("<br>");


var myname ="         ahmed jamal jamal";
var lname = new String ("jamal");

document.write(myname.charAt(3) + "<br>");
document.write(lname.charAt(2) + "<br>");
document.write(myname.concat(lname) + "<br>");
document.write(lname.indexOf("al") + "<br>");
document.write(lname.lastIndexOf("ja") + "<br>");
document.write(lname.toUpperCase() + "<br>");
document.write(lname.toLowerCase() + "<br>");
document.write(lname.slice(1,3) + "<br>");
document.write(myname.trim() + "<br>");

document.write("<br>");
document.write("<br>");

var num122 = 4;
var num52= Math.sqrt(num122);
var numMath = Math.random(4);
var numPow = Math.pow(2,4);
var numFloor = Math.floor(2.7);
var numCeil = Math.ceil(2.9);


document.write(num22 + "<br>");
document.write(numMath + "<br>");
document.write(numPow + "<br>");
document.write(numFloor + "<br>");
document.write(numCeil + "<br>");

document.write("<br>");
document.write("<br>");

document.write(1<2);
document.write("<br>");
document.write(22<1);

document.write("<br>");
document.write("<br>");

var mydate = new Date();

var myDay= mydate.getDate();
var myMonth= mydate.getMonth();
var myYear= mydate.getFullYear();
var myHours = mydate.getHours();

document.write(mydate + "<br>");
document.write(myMonth+1 + "<br>");
document.write(myYear + "<br>");
document.write(myHours + "<br>");

document.write("<br>");
document.write("<br>");

function fname() {
   // window.history.back();
   // window.history.forward();

   document.write("<br>" + " appCodeName - "+   window.navigator.appCodeName);
   document.write("<br>" + " appName - "+ window.navigator.appName);
   document.write("<br>" + " cookieEnabled - "+ window.navigator.cookieEnabled);
   document.write("<br>" + " language - "+ window.navigator.language);
   document.write("<br>" +  " platform - "+ window.navigator.platform);
   document.write("<br>" +  " platform - "+ window.navigator.platform);
  
}
fname();

document.write("<br>");
document.write("<br>");

function fscreen() {
   

   document.write("<br>" + " width - "+   window.screen.width);
   document.write("<br>" + " height - "+ window.screen.height);
   document.write("<br>" + " colorDepth - "+ window.screen.colorDepth);
   document.write("<br>" + " pixelDepth - "+ window.screen.pixelDepth);
   document.write("<br>" +  " availHeight - "+ window.screen.availHeight);
   document.write("<br>" +  " availWidth - "+ window.screen.availWidth);
  
}
fscreen();

document.write("<br>");
document.write("<br>");


document.getElementById("addelm").innerHTML("ahmed jamal");
function name12() {
    document.getElementById("inpelme").value = "ahmed jamal";
}

document.write("<br>");
document.write("<br>");

var nname = document.getElementByTagName("INPUT")[0].value;
document.getElementById("addelmm").innerHTML=nname;

document.write("<br>");
document.write("<br>");

function CreateForm() {
    var myform = ' <input type="text"><input type="text"><input type="time"><button></button>'
  document.getElementById("created").innerHTML=myform;
}