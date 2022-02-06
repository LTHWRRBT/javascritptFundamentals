const numberSet = new Set([1,2,2,4,4,4,4,6,8,0]);

console.log(numberSet);

console.log("--------------- add");

numberSet.add(12);

console.log(numberSet);

console.log("deleted ---------");
numberSet.delete(12);

console.log(numberSet);
