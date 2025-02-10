// console.log can print something on console
console.log("hello world");
// let firstName = "Prafull";
// let secondName = "Manish";
// const pi = 3.14;

// let age =  23;

// // convert number to string
// age = age + "";
// console.log(typeof(age)); 

// // convert String to number
// let myStr = +"43";
// console.log(typeof myStr);


// let str1 = "Prafull";
// let str2 = "Bhise";

// let fullName = str1+" "+str2;
// console.log(fullName);

// let age = 22;
// let firstName = "Prafull";

// let aboutme = `my name is ${firstName} and my age is ${age}`;
// console.log(aboutme);

// let val = null;
// console.log(typeof null); // bug 


// let num1 = "7";
// let num2 = 8;
// console.log(num1==num2); //true

// console.log(num1!=num2);
// const key = "email";
// const person = {
//     name:"Prafull",
//     age: 23,
//     "person hobbies":["guitar","sleeping","singing"]
// }

// console.log(person["person hobbies"]);

// for(let key in person){
//     // console.log(`${key}:${person[key]}`);
//     console.log(key," :",person[key]);
// }

// console.log(typeof (Object.keys(person)));


// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {};
//     obj[key1]=value1;
//     obj[key2]=value2;
// console.log(obj);

const array1 = [1,2,3];
const array2 = [5,6,7];

// const newArray = [...array1,...array2];
// console.log(newArray);

// sprad object in array

// const obj1 = {
//     key1:"value1",
//     key2:"value2",   
// };
// const obj2 = {
//     key3:"value3",
//     key4:"value4",  
// };

// const newObj = {...obj1, ...obj2};
// console.log(newObj);

// object destructing 

// const band = {
//     bandmname:"led zeplin",
//     famoussong:"jay ho",
// };

// Functions 




// function singHappybirthday(){
//     console.log("Happy birthday to you....");
// }

// singHappybirthday();
// function sumTwoNum(num1 , num2){
//     return num1 + num2;
// }
// const retval = sumTwoNum(12,13);
// console.log(retval);

// function isEven(num){
//     if(num%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(6));

// function findTarget(array,target){
//     for(let i=0;i<array.length;i++){
//        if(array[i]===target){
//         return i;
//        }
//     }
//     return -1;
//     }
//     const myArray =[1,3,8,10];
//     const ans = findTarget(myArray,4);
//     console.log(ans);

// arrow function

// const singHappybirthday = () =>{
//        console.log("Happy birthday to you....");
//  }
//  singHappybirthday();


// const firstchar = anyString => anyString[0];
// console.log(firstchar("Prafull"));



// hello();
//  hello  = function(){
//     console.log("hello world");
// }

// function addTwo(a,b=0){
//     return a+b;
// }

// const ans = addTwo(4,8);
// console.log(ans);

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)
//     console.log(`c is ${c}`)
// }

// myFunc(3,4,5,6,7,8,9);

// rest parameter
// function addAll(...numbers){
//     let total=0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans=addAll(1,2,3,4,5);
// console.log(ans);

//parametre destructor

// const person = {
//     firstName:"harshit",
//     gender:"male",
// }

// function printdetails(firstName,gender,age){
//      console.log(firstName);
//      console.log(gender);
//      console.log(age);
//  }
//  printdetails(person);


// call back function

// function myFunc2(a){
//     console.log(a);
//     console.log("hello world");
// }

// function myFunc(callback){
//     callback();
// }
// myFunc(myFunc2);

// function returning function
// function myFunc(){
//     function hello(){
//       return "helloworld";
//     }
//     return hello;
// }
// const ans = myFunc();
// console.log(ans());

// map very important

// array

const numbers=[4,5,6,1,4];

// function myFunc(number,index){
//     console.log(`index is ${index} number is ${index}`,index);
//     console.log(`${number}*2=${number*2}`);
// }
// // for(let i=0;i<numbers.length;i++){
// //     myFunc(numbers[i],i)
// //}
// numbers.forEach(myFunc);

const  users = [
    {firstName: "Prafull", age:23},
    {firstName: "Manish", age:24},
    {firstName: "Prakash", age:28},
    {firstName: "sravan", age:29},
    {firstName: "vinod", age:29},
    {firstName: "rajeh", age:25},
]

users.forEach(function(uers){
    console.log|(users.firstName);
});

for (let user of users){
    console.log(user.firstName);
}




// document.getElementById("demo").innerHTML = 5+6;

// document.write(5-2);

// window.alert(6+7);

// alert(5+8);

// console.log(6+9);

// <button onclick="window.print()">Print this message</button>


document.getElementById("demo").innerHTML = "Hello manish";


var x;
let y;

x=5;
y=6;
let z= x+y;



