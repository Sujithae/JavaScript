/*
let a=10;
let b=20;
 add = a+b;
console.log( " result  is ",add);
sub= a-b;
console.log(" result  is ",sub);
 mul= a*b;
console.log(" result  is ",mul);
 div= a/b;
console.log(" result  is ",div);
 mod=a%b;
exp= a**b;
console.log(" result  is ",exp);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a===b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
console.log(a**=b);

let txt=" ";
let  person =["suji","vinni","veena","priya","sairam"];
 console.log(person.length);
console.log(person.includes("suji"));
person.push("uttham");
console.log(person);
person.pop("vinni");
console.log(person);
let people={
    name:"suji",
    age:20,
    place:"chennai"
};
console.log("hi im "+ people.name +" ," + "my age is "+ people.age +" and im from "+people.place );
console.log(people);
let ele =[10,20,30,40,50,60,70,80,90,100];
ele.push(108);
console.log(ele);
ele.toString;
console.log(ele);
let num =["a","b","c","d","e","f","g"];
num.toString();
console.log(num);
num.push("i");
console.log(num);
let n=10;
if(n>10){
    console.log("true");
}else{
    console.log("false");
}
let s=30;
if(s% 2!==0){
    console.log("the number is even");
}else{
    console.log("the number is odd");
}

for( i=0; i<10; i++){
    console.log(i);
}
for(i=0; i<=20; i+=2){
    console.log(i);
}
for(i=1; i<=20; i+=2){
    console.log(i);
}


let counter = 0; 
while (counter < 10)
 {
  console.log(`current count ${counter}`);
  counter++;
}
let abc=0;
while ( abc < 10 )
{
    console.log('result is '+ abc);
    abc++;
}
let efg=1;
do{
    console.log("total is "+ efg);
    efg++;
}
while(efg<=15)

let u=10;
let t=11;
console.log(u>t);
console.log(u<t);
console.log(u<<t);
console.log(u>>t);

var subjects=["maths","english","tamil","science","social"];
subjects.sort();
console.log(subjects);
subjects.reverse();
console.log(subjects);
 
let d= new Date();
console.log(d);




var today= new Date();
var day = today.getDay();
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 console.log("Today is:" +daylist[day] + ".");
 var hour=today.getHours();
 var minute = today.getMinutes();
 var second = today.getSeconds();
 var prepand = (hour >=12)?"PM":"AM";
 var hour = (hour >= 12) ? hour-12:hour;
 if(hour===0 && prepand==='PM'){
    if(minute === 0 && second ===0){
    hour=12;
prepand ="Noon";

 }else{
    hour=12;
    prepand ="PM";
 }
 }
 if(hour===0 && prepand==='AM'){
    if(minute === 0 && second ===0){
    hour=12;
prepand ="Midnight";

 }else{
    hour=12;
    prepand ="AM";
 }
 }
 console.log("Current Time: " + hour + prepand + " : " + minute + " : " + second); 

 var today =new Date();
 var dd=today.getDate();
 var mm=today.getMonth();
 var yyyy=today.getFullYear();

 if(dd<10){
    dd ='0' + dd;

 }
if(mm<10){
    mm='0'+ mm;
}
today = dd + '-'+ mm +'-'+yyyy;
console.log(today);
 
today = dd +'/' + mm + '/'+yyyy;
console.log(today);

today = mm +'/'+ dd +'/'+yyyy;
console.log(today);

//area of triangle

var side1 =3;
var side2 =4;
var side3 =5;

var perimeter=(side1+side2+side3)/2;

var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

// leap year calculation

function leapyear (year){
    return(year % 100 ==0)?(year % 400 ==0): (year % 4 ==0);
}
console.log(leapyear(2021));
console.log(leapyear(2003));
console.log(leapyear(2024));
console.log(leapyear(2012));
console.log(leapyear(2000));
console.log(leapyear(2009));

//1st january is sunday for a period of particular year

console.log('-------------------------------');
 
 for (var year=2014; year<=2070; year++){
   var date= new Date(year,0,1);
   if(date.getDay()===0){
    console.log("1st january is being a sunday" +year);
   }
}
console.log('-------------------------------');
  
//how many days left for christmas

today = new Date();

var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}  
var one_day = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
    " days left until Christmas!"); 

//no less than 13 difference them ,greater than nah double them

function difference(n){
          if(n<=13){
            return 13-n;

          }else{
            return(n-13)*2;
          }
}
console.log(difference(32));
console.log(difference(8));

//if x,y are equal triple them else juzt give sum of them
const diff=(n)=>{
    return n<=13? 13-n: (n-13)*2;

};
console.log(diff(34));
console.log(diff(10));
  

const sumTriple=(x,y)=>{
if(x==y){
    return 3*(x+y);
}else{
    return (x+y);
}
};
console.log(sumTriple(10,30));
console.log(sumTriple(5,5));
console.log(sumTriple(30,50));

//num less than 19 print their diff and  else triple them

const diff_num=(n)=>{
    if(n<=19){
        return 19-n;

    }else {
        return 3*(n-19);
    }
}
console.log(diff_num(19));
console.log(diff_num(25));
console.log(diff_num(4));

//in a pair of nums return true if one of  num is 50 or the sum of two num is 50

var pair=(x,y)=>((x===50)||(y===50)||(x+y ===50));

console.log(pair(50,34));
console.log(pair(10,40));
console.log(pair(20,80));
console.log(pair(20,70));

//check whther given integer is within 20 of 100 or 400

function testhundred(x){
    return((Math.abs(100 - x) <= 20) || (Math.abs(400 - x)<=20));

}
console.log(testhundred(10));
console.log(testhundred(50));
console.log(testhundred(100));
console.log(testhundred(30));
console.log(testhundred(99));

//check whether any one of the num one is positive and another one is negative

function positive_negative(x,y){
    if((x<0 && y<0) || (x>0 && y<0)){
        return true;
    
} else {
    return false;
}
}
console.log(positive_negative(-2,-3));
console.log(positive_negative(1,1));
console.log(positive_negative(5,-3));

//check whether the given num is divisible by 3 or 7

function test37(x){
    if(x%3==0 || x%7==0){
        return true;
    }
else{
    return false;

}
}
console.log(test37(20));
console.log(test37(10));
console.log(test37(33));
console.log(test37(49));

//greatest of three numbers

function max_of_3num(x,y,z){
    let max_num=0;
    if(x>y){
        max_num=x;
    }else{
        max_num= y;
    }

if(z>max_num){
   max_num=z;
}
return max_num;
}
console.log(max_of_3num(10,20,30));
console.log(max_of_3num(100,39,59));
console.log(max_of_3num(33,11,10));

//if the sum of two num is btw thw range 50..80 then return 65 else 80

function sum(x,y){
    const sum_num=x+y;
    if(sum_num>=50 && sum_num<=80){
        return 65;
    }
    return 80;
}
console.log(sum(30,50));
console.log(sum(100,10));
console.log(sum(20,30));

//check in given integers will have 8 or sum or diff is 8

function eight(x,y){
    if(x==8 || y==8){
        return true;
    }
    if(x+y==8 && Math.abs(x-y)==8){
        return true;
    }
    return false;
}
console.log(eight(20,6));
console.log(eight(20,8));
console.log(eight(16,8));

//three num are equal return 30 else 20 ,if two num is equal return 40

function three_num(x,y,z){
    if(x==y && y==z){
        return 30;

    }
    if(x==y || y==z || z==x){
        return 40;
    }
    return 20;
}
console.log(three_num(10,10,10));
console.log(three_num(10,20,20));
console.log(three_num(2,6,7));

//

function num15(x,y){
    if (x==15 || y==15){
        return true;
    }
    if(x+y==15 ||Math.abs(x-y)==15){
        return true;
    }
    return false;
}
console.log(num15(15,20));
console.log(num15(10,5));
console.log(num15(20,5));

// check the given two integers are divisible by 7 and 11

function valcheck(a,b){
    if(!((a % 7==0 || a % 11==0) &&(b % 7 ==0 || b % 11 ==0))){
        return ((a % 7==0 || a % 11==0)  || (b % 7 ==0 || b % 11 ==0))
    }
    else{
        return false;
    }
}
console.log(valcheck(11,23));
console.log(valcheck(7,11));
console.log(valcheck(49,66));
console.log(valcheck(10,60));



//add two digits to a given positive integer of length two

function positiveint(n){
    return n %10+Math.floor(n/10);
}
console.log(positiveint(20));
console.log(positiveint(23));
console.log(positiveint(45));
console.log(positiveint(99));



//cubes

const cubenum=(n)=>{
    let sumn=0;
    for(let i=0;i<=n;i++){
        sumn += Math.pow(i,3);
    }
    return sumn;
}
console.log(cubenum(4));
console.log(cubenum(3));
console.log(cubenum(2));
console.log(cubenum(1));
console.log(cubenum(5));


//check whther which no is close to 100

const num_100 =(x,y)=>{
    if(x!==y){
        const x1=Math.abs(x-100);
        const y1=Math.abs(y-100);

        if(x1<y1){
            return x;
        }
        if(y1<x1){
            return y;
        }
    }
    return 0;
} 
console.log(num_100(90,89));
console.log(num_100(80,80));
console.log(num_100(70,60));

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let text = "";
let len = cars.length;
while (len--) {
  text += cars[len] + "<br>";
  console.log(text);
}
with ([1, 2, 3]) {
    console.log(toString());

}


// sqrt of number
const number = 10;
const result = Math.sqrt(number);
console.log("The square root of "+number + " is " +result);

//area of triangle when base and height is given

const base=10;
const height= 20;
const result1=(base*height)/2;
console.log(result1);

//area of triangle when sides are known

const s1=5;
const s2=6;
const s3=7;
const p=(s1+s2+s3)/2;
const triarea=Math.sqrt((p*(p-s1)*(p-s2)*(p-s3)));
console.log(triarea);

//swapping of two numbers using temp

let a1=10;
let b1=20;
let temp;
temp=a1;
a1=b1;
b1=temp;
console.log(a1);
console.log(b1);

//swapping of two no using distructive assignment

let a2=22;
let b2=33;
[a2, b2]=[b2, a2];
console.log(a2);
console.log(b2);

//swapping using arithmetic operators

let a3=10;
let b3=8;
a3=a3+b3; //18
b3=a3-b3; //10
a3=a3-b3; //8
console.log(a3);
console.log(b3);

//swapping using bitwise operator

let a4=10;
let b4=8;
a4=a3^b4; 
b4=a4^b4; 
a4=a4^b4; 
console.log(a4);
console.log(b4);

// conversion of kilometers to miles(miles=kilometers*factor)

const kilometers=10;
const factor=0.621371;
miles=kilometers*factor;
console.log(miles);
//conversion of miles into kilometers (kilometers= miles/factor)

const miles1=50;
const factor1=0.62171;
kilometer=miles1/factor1;
console.log(kilometer);

//conversion of celsius to fahrenheit (formula: fahrenheit = celsius*1.8+32)

const celsius=30;
fahrenheit= celsius*1.8+32;
console.log(fahrenheit);

//fahrenheit to celsius(formula: celsius=(fahrenheit-32)/1.8)

const fahrenheit1=300;
celsius1=(fahrenheit1-32)/1.8;
console.log(celsius1);


//roots of a quadratic equation

let root1, root2;
let a = 3;
let b = 2;
let c = 1;

let discriminant = b * b - 4 * a * c;
console.log(discriminant);
let sqar_value=Math.sqrt(Math.abs(discriminant));
if (discriminant < 0) {
  root1 = (-b +sqar_value) / 2 * a;
  console.log(root1);
  root2 = (-b - sqar_value) / 2 * a;
  console.log(root2);
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  console.log("the roots are real and different");
} else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
  console.log("the roots are real and same");
} else {
  let realpart = (-b / (2 * a)).toFixed(2);
  let imagpart = (sqar_value / (2 * a)).toFixed(2);
  console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
  console.log("the roots are real and complex");
}
//check whether the given no is positive ,negative or zero using if else if

const num = -19;
if (num > 0) {
  console.log("the number is positive");
} else if (num == 0) {
  console.log("the number is zero");
} else {
  console.log("the number is negative");
}

//using nested if

const num1 = 0;
if (num1 >= 0) {
  if (num1 == 0) {
    console.log("the number is zero");
  } else {
    console.log("the number is positive");
  }
} else {
  console.log("the number is negative");
}

// check its odd or even number

let num_1=13;
if(num_1 % 2 ==0){
    console.log("the number is even");

}else{
    console.log("the number is odd");
}

//using ternary operator

const numm=23
const result=(numm % 2== 0)?("even"):("odd");
console.log(result);

//using function
function oddorEven(x){
    if(x & 1 == 1){
        return "odd";

    }
        return "even" ;

}
console.log(oddorEven(10));

//largest of three numbers

let l1=20;
let l2=30;
let l3=10;
let largest;
if(l1>=l2 && l1>=l3){
    largest=l1;
}
else if(l2>=l1 && l2>=l3){
    largest=l2;
}
else{
    largest=l3;
}
console.log( " the largest number is" +largest);

//using math function

let numl1=10;
let numl2=50;
let numl3=20;
const largest_num=Math.max(numl1,numl2,numl3);
const smallest_num=Math.min(numl1,numl2,numl3);
console.log("the largest number is "+largest_num +" and " + " the smallest number is "+ smallest_num);

//check prime or not


function checkPrime(num) {
	let i, flag = true;
	for (i = 2; i <= num - 1; i++) {
		if (num % i == 0) {
			flag = false;
			break;
		}
	}
	if (flag == true)
		console.log(num + " is prime");
	else
		console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(5);

//printing prime numbers from a interval

const lnum=1;
const hnum=50;

for(let i=lnum;i <= hnum; i++){
    let flag=0;
    for(let j=2; j<i; j++){
        if( i % j ==0){
            flag=1;
            break;
        }
    }
    if(i>1 && flag==0){
              console.log(i);
    }
}

//factorial of a number

let factnum=10;
if(factnum<0){
    console.log("Error ! factorial for negative numbers doesn't exist");
}
else if(factnum == 0){
    console.log("the factorial of " + factnum + " is 1");
}
else{
    let fact = 1;
    for(i=1; i<= factnum; i++){
        fact *= i;
    }
    console.log("the factorial of " + factnum + " is " + fact);

}

//multiplication of tables

const mulnum=10;
for(let i = 1; i<=10 ; i++){
    const res= i * mulnum;
    console.log(`${mulnum} * ${i} = ${res}`);

}

//multiplication table upto a range

const multnum=9;
const range=6;
 for( let i =1; i<=range; i++){
    const rest= i * multnum;
    console.log(`${multnum} * ${i} = ${rest}`);
 }

 //fibonacci series

 const numbe=4;
 let n1=0,n2=1,nexterm;
 console.log("fibonacci series:")
  
 for(let i =1; i<=numbe; i++){
    console.log(n1);
    nexterm=n1+n2;
    n1=n2;
    n2=nexterm;
 }

 //finonacci series upto a certain number

 const numbe1=5;
 let n3=0,n4=1,nextterm;

 console.log('fibonacci series');
 console.log(n3);
 console.log(n4);
 
 nextterm = n3+n4;
  while(nextterm <= numbe1){
    console.log(nextterm);

    n3=n4;
 n4=nextterm;
 nextterm = n3+n4;
  }

  //armstrong number or  not

const num3 = 153;
const digits = num3.length;
var sum = 0;
var temp = num3;

while (temp > 0) {

    var remainder = temp % 10;
    sum += (remainder ** digits);
    temp = parseInt(temp / 10); 
}

if (sum == num3) {
    console.log(num3 + " is an Armstrong number");
}
else {
    console.log(num3 + " is not an Armstrong number");
}

//simple calculator using if else

const operator="+,-,*,/,%";
let number1=20;
let number2=30;
let result1;

if(operator == '+' ){
    result1=numbe1+number2;
    console.log(result1);
}
else if(operator =='*' ){
    result1=numbe1*number2;
    console.log(result1);
}
else if(operator == '-' ){
    result1=numbe1-number2;
    console.log(result1);
}
else if(operator == '/' ){
    result1=numbe1/number2;
    console.log(result1);
}
else {
    result1=numbe1%number2;
    console.log(result1);
}



//sum of natural numbers

let num=5;
let sum=0;

for(let i=1; i<=num; i++){
    sum += i;
}
console.log("the natural number is " + sum);



// sum of natural numbers using while

let num=5;
let sum=0,i=1;
while(i<=num){
    sum += i;
    i++;
}
console.log("the natural number is " + sum);

//checking the last digits are same

let a= 32;
let b= 48;
let c= 50;

let result1= a%10;
let result2= b%10;
let result3= c%10;
if(result1 == result2 && result1 == result3){
    console.log("the last digits of "+a + " ," +b + " and "+ c +" are equal" );
}
else{
    console.log("the last digits of "+a +b + " and "+ c +" are not  equal" );
}


//to find HCF or GCD
let hcf;
const num1=10;
const num2=20;
for(let i=1; i<=num1 && i<=num2; i++){
    if(num1 % i ==0 && num2 % i ==0){
        hcf=i;
    }
}
console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);


//to find LCM 

let num1=10;
let num2=50;

let min=(num1>num2)? num1:num2
while(true){
    if(min % num1 == 0 && min % num2 == 0){
        console.log("the LCM is " + min);
        break;
    }
    min++;
}

//factors of a number

const num=20;
for(let i=1; i<=num; i++){
    if(num % i == 0){
        console.log(" the factors are " +i);
    }
}

// deck of cards
console.log("----------------------------------------");
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

let deck = [];
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}
console.log("----------------------------------------");

//ascii value of a character    //chatCodeAt is used for a particular chaacter and codePointAt is used for a character in a word

let string="s";
let result=string.charCodeAt(0);
console.log(result);

let string1="sujitha";
let result1=string1.codePointAt(5);
console.log(result1);

console.log("------------------------------------------");



//arguments passing


function sum(x,y=76){
    return x+y;
    

}
console.log(sum(42));


 
function mul(a=22,b=32){
    return a*b;
}
console.log(mul());

function div(u,v){
    return u/v;
}
console.log(div(60,4));

let mod=(s,t)=>s%t;
console.log(mod(45,3));

const exp=(c,d)=>{
    return c**d;
}
console.log(exp(20,8));



function doSomething(n) {
    if(n === 0) {
      console.log("TASK COMPLETED!")
      return
    }
    console.log("I'm doing something.")
    doSomething(n - 1)
  }
  doSomething(2)



let input = {  "a": 2,  
        "b": {
              "x": 4, "y": {
                             "foo": 3, "z": {"bar": 2}}},  "c": {"p": {"h": 2, "r": 5}, "q": 'ball', "r": 5},  "d": 1,  "e": {"nn": {"lil": 2}, "mm": 'car'}};
                             function sumEvenNumbers(obj) {
                                let sum = 0;
                                for (let key in obj) {
                                    if (typeof obj[key] === 'object') {
                                        sum += sumEvenNumbers(obj[key]); 
                                      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
                                    sum += obj[key]; 
                                  }
                                }
                                return sum;
                              }
                              
                              console.log(sumEvenNumbers(input));
                              
    
   // JavaScript code demonstrating a simple object
let school = {
	name: 'Vivekananda School',
	location: 'Delhi',
	established: '1971',
	
}
console.log(school.name+ " was established in " + school.location + " at " +school.established);


//[4,1,3] sort of array

function sorting(){
    let arr=[4,1,3];
    
    console.log(arr.sort());
}
     sorting();           
        


//[[4],[1],[3]]

let arr=[[4],[1],[3]];
console.log(typeof(arr));

function array(){
    let _arr=[[4],[1],[3]];
    console.log(_arr.sort());
}

array();




let arr = [4, [88], 3, [9],[1]]
    sorted = false;

while(!sorted) {
  sorted = true;
  for(var i=1; i < arr.length; i++) {
    if((Array.isArray(arr[i])?arr[i][0]:arr[i]) < (Array.isArray(arr[i-1])?arr[i-1][0]:arr[i-1]) ){
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      sorted = false;
    }
  }
}
console.log(arr);




let fruits=["orange","apple","kiwi","apple"];
console.log(fruits.push("banana"));
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));

let a=["orange","apple","kiwi","apple"];
let b=a.sort();
console.log(b);
console.log(b.toSpliced(0, 1));

console.log(JSON.stringify(a));


// function overloading is complex but we can try it our own 
class foo {

	
	overloadableFunction() {

		
		let function1 = function (arg1) {
			console.log("Function1 called with"
					+ " arguments : " + arg1);
			return arg1;
		};

		let function2 = function (arg1, arg2) {
			console.log("Function2 called with"
					+ " arguments : " + arg1 
					+ " and " + arg2);
			return arg1 + arg2;
		};

		let function3 = function (arg1) {
			let concatenated__arguments = " ", temp = " "

			for (let i = 0; i < arg1.length; i++) {
				concatenated__arguments = 
					concatenated__arguments + arg1[i]
			}

			for (let i = 0; i < arg1.length; i++) {
				temp = temp + " " + arg1[i]
			}

			console.log("Function3 called with this"
				+ " array as an argument : [" + temp + "]");
			console.log("Output of log is : ")

			
			return concatenated__arguments; 
		};

		
		if (arguments.length === 1 
				&& Array.isArray(arguments[0])) {
			return function3(arguments[0]);
		} else if (arguments.length === 2) {
			return function2(arguments[0], arguments[1]);
		} else if (arguments.length === 1 
				&& !Array.isArray(arguments[0])) {
			return function1(arguments[0]);
		}
	}
}




let object = new foo();


console.log(object.overloadableFunction("Geeks"));


console.log(object.overloadableFunction("Geeks", "for"));

console.log(object.overloadableFunction(
				["Geeks", "for", "Geeks"])); 
                */


                function strictModeExample() {
                    'use strict'; 
                    var variable1 = 10;
                     const variable2 = 20; 
                    return variable1 + variable2;
                }
                
                console.log(strictModeExample()); 
               
 let a=["array","functions","numbers","boolean","float","bigint"];
 console.log(a.push("objects"));
console.log(a.lastIndexOf());

// promise

let p = new Promise((resolve, reject) => {
    let isTrue = true;
    if (isTrue) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });
  
  p
  .then(message => console.log(`Promise resolved: ${message}`))
  .catch(message => console.log(`Promise rejected: ${message}`));

  console.log(" i hate you");
  console.log(" haha haha haha");
  


