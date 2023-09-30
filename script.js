
//array methods:
//Approximately there are 34 methods in arrays
"use scrict"
var a =[1,2,3,6];
var b =["A","B","C"];

console.log(a);
console.log(b);
 var c =b.join("");

//push and unshift methode
var a =[1,2,"A","B"];
a.push("V");
console.log(a);   //this add new value in last index

a.unshift("M");
console.log(a);   //this methode add value in 1st index

//pop and shift methode
a.pop("");
console.log(a); //removes last velement in array

a.shift();
console.log(a);  //removes 1st element in array

var a =[1,8,9,6,1];
a.sort();
console.log(a);//sorting the element in ascending order

//splice and slice methode
var a = ["a","b","n","mm"];
a.splice(1,2,0);
console.log(a);  //removes and replaces valu in a array
 
var x=[1,3,5,6,9]
var v = x.slice(1,5);//cuts from an array
console.log(v);
console.log(x);

x.reverse()
console.log(x);

//find methode
var a = [2,6,8,2,1];
function value(a){
    return a>2;
}
var result = a.find(value)
console.log(result);

//find index
//find index of 8
var x = [2,6,8,2,1];
function niti(x){
    return x==1;
}
var b = x.findIndex(niti);
console.log(b);

//entries methode
var a = ["niti","anu","mani","chitra"];
var b = a.entries();
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);

//index and lastindex of methods
let h = [5,6,9,2,3,9,222,9];
var b =a.indexOf(9);
var c = a.lastIndexOf(9);//this methode gives last index of given number
console.log(b);
console.log(c);

console.log(Array.isArray(h))//isArray methode

//every() methode
var b = (number)=>number>6;//if all element passes the test
console.log(h.every(b));

//fills methode
var a =["a","b","e","d","h"];
var b = a.fill("c",2,3);
console.log(b)
console.log(a.valueOf());
