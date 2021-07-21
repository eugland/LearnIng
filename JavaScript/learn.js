outter: 
for (let j = 0; j < 10; j ++) {
    for (let i = 0; i < 10; i ++) {
        showMsg(i)
        if (i == 3) break outter;
    }
}

function showMsg(msg, defaulter = getvalue(msg)) {
    console.log(msg + ":" + defaulter);
}

function getvalue(s){
    return s
}

console.log(getvalue);
let te = getvalue;
console.log(getvalue);
let sayHi = function (word) { 
    console.log(word)
};
sayHi("what?")



let age = prompt('Your age?', 18); // case unsafe

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}