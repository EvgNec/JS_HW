function countProps(object) {
  let propCount = 0;
    for (const key in object) { 
        if (object.hasOwnProperty(key)) {
            propCount++;
        }
    }    
     return propCount;    
};


console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));