// Assignment 11
// chapter no 38 to 42

// qno#01

// qno#02
// function foo(){
//     var year = prompt("Enter your leap year");
//     if (year % 4 === 0){
//         alert(year + " is a leap year");
//     }else {
//         alert(year + " is not a leap year");
//     }
// }
// foo();

// qno#03
// function foo(){
//     var a = +prompt("Enter your ist value, in area of triangle");
//     var b = +prompt("Enter your 2nd value, in area of triangle");
//     var c = +prompt("Enter your 3rd value, in area of triangle");
//     var side = (a + b + c) / 2;
//     var calculateAreaOfTraingle = (side)*(side - a)*(side - b)*(side - c);
//     document.write("The area of triangle is " + calculateAreaOfTraingle);
// }
// foo();

// qno#04

// qno#05
// function foo() {
//     var str = "Web Developments in the saylani welafre it academy";
//     var index = str.indexOf("Developments");
//     alert(index);
// }
// foo();

// qno#06
// function foo(){
//     var input = prompt("Enter your string");
//     var replace = input.replace(/[aeiouAEIOU]/gi , " ");
//     alert("Original string: " + input + "\n" + "The string remove a vowels: " + replace);
// }
// foo()

// qno#07
// function foo(){
//     var input = prompt("Enter your sentence");
//     var result = "";
//     for(var i = 0; i < input.length; i++){
//         if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u" || input[i] === "A" || input[i] === "E" || input[i] === "I" ||input[i] === "O" || input[i] === "U"){
//             result += input[i] + ",";
//         }
//     }
//     document.write("This sensetence is: " + input + "<br>");
//     document.write("This senstence vowels are: " + result);
// }
// foo()