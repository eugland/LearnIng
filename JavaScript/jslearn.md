# Javascript Learning 
Java does not assume semicolon before [] so the following has an error
```javascript 
alert('hello')
[1, 2].forEach(alert);
```

To create a variable use let. undefined before assignment, operation on underfined is NaN also NaN == NaN is false
```Javascript
let message = 'Hello'
let a 
console.log(a + 1); // yields NaN
```
use Number.MAX_SAFE_INTEGER and so on to handle edge cases.


## String
```Javascript
// ', " are simple quotes
// ` is extended functionality quotes 
let name = "john"
console.log(`Hello, ${name}`) // output hello, john
```

## Prompt
- alert() // show shit
- result = confirm("words here") // return a boolean
- result = prompt("question", "default val") // return a string 


## ConversionRule
- to Number: underfined -> NaN, null -> number, true -> 1, false -> 0
- To Boolean: NaN, null, 0, undefined -> false
- a '+' b works as concatenation but - and any other sign converts to math num and do operation.
- '+'a converts a to a number, '-' is pretty much the same
```Javascript
let apple = '2';
let orange = '3';
+apple + +orange;
```

## NUllish coalese
|| does not discriminate against false, 0, '' or []
?? only accounts null and undefined
```Javascript
alert(firstName || lastName || nickName || "Anonymous"); // 
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

if unsure if a is null or not? 
a.speed ??= 100
```
|| find the first truthy value, whereas && find the last truthy value

## param
- can use default val/func, execute on runtime
- the value can passed in during func exec check by if(va === undefined)


## function
- callback, declaration vs expression see sample code 

## arrow function

## Mocha 
```JavaScript
let assert = require('assert');
describe("pow", ()=>{
    it("raises to n-th power", ()=>
      assert.equal(Math.pow(2, 3), 8);
    );
  
});
```

Summary
A cheat sheet of array methods:

To add/remove elements:

push(...items) – adds items to the end,
pop() – extracts an item from the end,
shift() – extracts an item from the beginning,
unshift(...items) – adds items to the beginning.
splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
To search among elements:

indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
includes(value) – returns true if the array has value, otherwise false.
find/filter(func) – filter elements through the function, return first/all values that make it return true.
findIndex is like find, but returns the index instead of a value.
To iterate over elements:

forEach(func) – calls func for every element, does not return anything.
To transform the array:

map(func) – creates a new array from results of calling func for every element.
sort(func) – sorts the array in-place, then returns it.
reverse() – reverses the array in-place, then returns it.
split/join – convert a string to array and back.
reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
Additionally:

Array.isArray(arr) checks arr for being an array.
Please note that methods sort, reverse and splice modify the array itself.

