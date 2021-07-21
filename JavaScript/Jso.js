class Node {
  val = 0;
  next = null;  
  constructor(num, node=null){
    this.val = num;
    this.next = node;
  }
}

let dummy = a = new Node(0);
console.log(dummy);
for (let i = 0; i < 10; i ++) {
  a.next = new Node(i);
  a = a.next
}
console.log(dummy);
console.log(dummy.next.next);
console.log(JSON.stringify(dummy));
// a.next = dummy
// console.log(JSON.stringify(dummy));// circular should fail so do this: 
console.log("Use the greate REPLACER")
let c = dummy
while (c) { 
  console.log(JSON.stringify(c, (key, value)=> {
    // console.log(`CURRENT KEY${key} AND VAL${value}`)
      if(key == "next") {
        if (value)
          return "Node";
        return "NULL"
      }
      return value;
  }));
  c = c.next;
}

function sumAll(...args) {
  return args.reduce((acc, i)=> acc + i);
}
function sumAllOld() {
  // console.log(arguments)
  acc = 0
  for(let i = 0; i < arguments.length; i++) {
    acc += arguments[i];
  }
  return acc;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,0));
console.log(sumAllOld(1,2,3,4,5,6,7,8,9,0));
let time = setTimeout(sumAll, 1000, 1,2,3,4,5,6,7,8,9,0)