
let prompt = require('prompt');
prompt.start();

prompt.get(['num1', 'num2','op'], function (err, result) {
    if (result.op ==='+'){
        console.log(Number(result.num1)+ Number(result.num2 ));
    }
    else if (result.op ==='-'){
        console.log(Number(result.num1)- Number(result.num2 ));
    }
    else if (result.op ==='*'){
        console.log(Number(result.num1)* Number(result.num2 ));
    }
    else if (result.op ==='/'){
        console.log(Number(result.num1)/ Number(result.num2 ));
    }
console.log('Command-line input received:');
console.log('num1: ' + result.num1);
console.log('num2: ' + result.num2);
})


 interface Iuser {
     name: string,
   age: number,
    Specialization: string,
    bestfriends:string[],
  
}

let customer:Iuser = { 
    name:"Tom",
    age:23,
    Specialization:"CS",
    bestfriends:["majed","anwar","ahmed"]
 } 


 console.log(customer.name);
 
 

// interface Person {
//     firstName: string;
//     lastName: string;
//     getFullName(): string;
//   }

//   var student = new Student('Aissa', 'BOUGUERN');



