let assert = require('assert');
function pow(number, power) { 
    return number ** power;
}

describe("pow", ()=>{

    function makeTest(i) { 
        it(`raises to ${i}th power`, ()=> assert.equal(pow(2, i), 2**i));
    };

    for(let i = 0; i < 100; i ++) {
        makeTest(i);
    }

});

