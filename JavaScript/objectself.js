let user = {
    name : "John",
    gender : "m"
}

function sayName() { 
    console.log(this.name);
}

user.f = sayName;
user.f()
sayName();

// -------------
Nester = {
    name : "bob",
    sayName : function() { 
        name = "alice";
        console.log(this.name);
        sayNestName = function() { 
            console.log(this.name)
        }
        sayNestName()
    }
}
Nester.sayName()

// calculator
let calculator = {
    a: 0,
    b: 0,
    read: function(a=0, b=0) {
        if (a != 0 && b!=0) { this.a = a; this.b = b; } else {
        this.a = Number(prompt("give me a number", "0"));
        this.b = Number(prompt("give me another number", "0"));}
        console.log(this.a +":" + this.b)
    },
    sum: function() { return this.a + this.b},
    mul: function() { return this.a * this.b}
  };
  
calculator.read(3,4);
console.log( calculator.sum() );
console.log( calculator.mul() );

// Chaining shit
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
      return this;
    }
  };
console.log("ladder");
ladder.up().up().down().showStep(); // 1


let Order = {
    
    capa : 4
}
console.log(Order.capa);

class Rectangle { 
    constructor(x,y,l,h) { 
        this.x = x;
        this.y = y;
        this.l = l;
        this.h = h;
    }

    toString(){ 
        return "stupid Recta";
    }
    
}

let rect = new Rectangle(0,0,3,5);


console.log(rect)
console.log("what " + rect)
console.log(rect.valueOf())
console.log(typeof(rect.valueOf()))
console.log("Json " + JSON.stringify(rect))