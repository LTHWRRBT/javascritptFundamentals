//map
let visitCountMap = new Map();

function countUser(user){
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1);
}

let jonas = {name : "jonas"};
countUser(jonas);

jonas = null;
console.log(jonas);
console.log(visitCountMap);

console.log("---------------------weakMap-----------------------");

let visitCountWeakMap = new WeakMap();

function countWeakUser(weakUser){
    let count = visitCountWeakMap.get(weakUser) || 0;
    visitCountWeakMap.set(weakUser, count+1);
}