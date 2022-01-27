console.log('some changes');
console.log('aslinya dari preprod');

console.log("modify from development");


//destrcututring object

const profile = {
    firstName: "John",
    lastName: "Kampret",
    age: 19
}

const {firstName, lastName, age} = profile;
console.log("=====destructuring object start here==========");
console.log(firstName,lastName,age);

console.log("=========destructuring assignment ==========");
const profile1 ={
    firstName1: "Sundoro",
    lastName1: "Kliwin",
    age1:22
}

profile1.firstName1 = "Sahrom";
let age1 = 32;

({firstName1, age1} = profile1);

console.log(firstName1);
console.log(age1);