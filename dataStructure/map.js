const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("Jakarta"));

console.log("--------will add-----------");
capital.set("Kuala Lumpur", "Malaysia");
console.log(capital.size);
console.log(capital.get("Kuala Lumpur"));

console.log(capital.has("London"));

console.log("------delete Kuala Lumpur------");
capital.delete("Kuala Lumpur");
console.log("deleted");
console.log(capital.size);