let kidA = {
    name: "john",
    grade: 55,
    course : {
        language: 45,
        math: 65,
    }
};

kidB =  recursign(kidA)
kidA.course.language = 100
kidA.grade = 99
console.log(kidB)
console.log(kidA)

function recursign(b) {
    let temp = {}
    for (let element in b) {
        let cons = b[element]
        if (typeof(cons) == "object") {
            // console.log("recurse here")
            cons = recursign(cons)
        }  
        temp[element] = cons
    }
    return temp;
}