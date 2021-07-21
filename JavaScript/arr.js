let arr = []
for(let i of Array(50).keys()) { 
    arr.push(i)
}
console.log(arr)
let result = arr.map((item)=> String(item));
console.log(result)

var str =  "1234-5";
var ignore = "-";

console.log(process.versions.node.split('.'))


let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
  // find users, for who army.canJoin returns true
  let soldiers = users.filter(army.canJoin, army);
  
  console.log(soldiers.length); // 2
  console.log(soldiers[0].age); // 20
  console.log(soldiers[1].age); // 23