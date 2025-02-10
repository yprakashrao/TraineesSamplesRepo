var value;
value = 120;
console.log("The Numeric value of a value is: " + value);
value = "Welcome to JavaTpoint";
console.log("The String value of a value is: " + value);
function display(value) {
    if (typeof (value) === "number")
        console.log('The given value is of type number.');
    else if (typeof (value) === "string")
        console.log('The given value is of type string.');
}
display(123);
display("ABC");
var multi = ' hello\n ' +
    'JavaTpoint\n ' +
    'my\n ' +
    'name\n ' +
    'is\n ' +
    'Rohit Sharma';
console.log(multi);
