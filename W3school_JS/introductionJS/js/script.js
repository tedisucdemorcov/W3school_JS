
// introduction 
// hetElementById() methods innetHtml 
function demo1()
{
    const demo1 = document.getElementById("demo1").innerHTML = "hello again js";
}

function demo2(demo2)
{
    demo2 =document.getElementById("demo2").innerHTML = " hello my man!";
}

// js style element 
function StyleMe(style)
{
 style = document.getElementById("style1").style.backgroundColor = " red ";
}
function StyleMe2(style)
{
    style = document.getElementById("style2").style.backgroundColor = "grey";
    style = document.getElementById("style2").style.color = "black";
    style = document.getElementById("style2").style.textShadow = "1px 1px yellow";
}

// js output display
// document.getElementById().innerHTML
  const out1= document.getElementById("output1").innerHTML ="First number: 6" ;
  const out2= document.getElementById("output2").innerHTML ="Secound number: 7" ;
  const out3= document.getElementById("output3").innerHTML ="Sum of first 2 is: " ;
  const out4= document.getElementById("output4").innerHTML = 6 + 7;

// console.log()
  console.log("ckeck html zone for console.log()");
  console.log("we use console.log for print message in cosole zone from browser!");

// js sintax
console.log("first exercises:");
console.log("print names:");
const name1 = " jhon ";
console.log(name1);
const name2 = " marius ";
console.log(name2);
const name3 = name1 + name2;
console.log(name3);

console.log(" Exercises with let:")
let lastNname , firstName;
lastNname = " Mark";
console.log(lastNname);
firstName = " Victor";
console.log(firstName);

console.log("Exercises with var: ");
var firstNumber = 7;
console.log( firstNumber );
var secoundNumber = 2;
console.log( secoundNumber );
var combinedNumber = firstNumber + secoundNumber;
console.log(combinedNumber);

// JavaScript Arithmetic Operators

// Arithmetic Operations

var x = 100 + 50;
console.log(x);

var a0= 1;
var b0 = 2;
let x1 = a0 + b0;
console.log(x1);

let a01 = 2;
let x2 = ( 100 + 50 ) * a01;
console.log(a01 , x2);

// Adding

let z1 = 5;
console.log(z1);
var z2 = 3;
console.log(z2);
var zSum = z1 + z2;
console.log(" sum is: ", zSum);

var q1,q2,q3,q4,qSum;
q1 = 4;
q2 = 7;
q3 = 9
q4 = q3;
qSum = q1 + q2 + q3 + q4;
console.log(q1,q2,q3,q4, " sum is:",qSum);

// Subtracting

var w1,w2,w3,w4,wDiff;
w1 = 29;
w2 = 21;
w3 = 1;
w4 = 4;
wDiff = w1 - w2 - w3 - w4;
console.log(w1,w2,w3,w4, " Diff it is:", wDiff);

// Multiplying

var e1,e2,eMultiplying;
e1 = 5;
e2 = 9;
eMultiplying = e1 * e2;
console.log(e1, e2, "multiplied it is:", eMultiplying);

// Dividing

var r1,r2,rDiv;
r1= 30;
r2=5;
rDiv = r1 / r2;
console.log(r1,r2," division it is:", rDiv);

// Modulo
// we sue previos exemple for this.
var rMod;
rMod = r1 % r2;
console.log(r1,r2,"modulus it is:", rMod);

// Incrementing

var t1;
t1= 7;
console.log(t1);
t1++;
console.log("incremented will be:", t1++ );

// Decrementing

var y1;
y1= 10;
console.log(y1);
y1--;
console.log(" decremented will be:", y1--);

// Exponentiation
//  operator it is **

var u1,u2;
u1 = 5;
u2 = u1 ** 2;
console.log(u1,"exponentiation with 2 will be:", u2);

// using function instead of sign 
// Math.pow(x,y)
var u3;
u3 = Math.pow(u1,2);
console.log( " using Math.pow() method will be: ", u3);

// JavaScript Assignment Operators

// The = Operator
var p = 10
console.log(p);

// The += Operator

p += 6;
console.log(p);

// The -= Operator

p-= 3;
console.log(p);

// The *= Operator

p *=1/2;
console.log(p);

// The **= Operator

p **=2;
console.log(p);

// The /= Operator

p/=2;
console.log(p);

// The %= Operator
 
p%=3;
console.log(p);

// The <<= Operator
// shifting to left

p<<= 2;
console.log(p);

// The >>= Operator
// shifting to right

p>>=3;
console.log(p);

// JavaScript Data Types

// Numbers

var number1 = 15;
var number2 = 29;
var number3 = 32;
var number4 = 4.5;

// String

const color1 = " red";
const color2 = " yellow";
const color3 = " name";

//Booleans

var bool = true;
var bool1 = false;

//Object

const person1 = {firstName1:"John"}

// Array object

const cars = ["volvo", " BWM", "Audi"];

// JS specific
//  if first var it is int and secound string, return will be int 
//  if first var it is string and secound one is int, return will be string
// al depends from the first var
// Exemples
var m = 15 + " ages";
console.log(m);

var m1 = "John has" + 15 +" years";
console.log(m1);
