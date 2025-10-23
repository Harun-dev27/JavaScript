let computers = ["Desktop", "Laptop", "Tablet PC"];
// To give a space
// console.log (computers.join(", "));
// To add pipe (|) charcter
// console.log (computers.join(" | "));
// To add items to the end of the item list
// computers.push("Smart phone", 5);
// To add items to the beginning of the list item
// computers.unshift("Smart phone", 5)
// To remove the first item in the list
// computers.shift();
// To remove the last item from the list
// computers.pop();

let longList = computers.find(function(item)
{
    if(item.length >= 5) {
      return item;  
    }
});

console.log("Long List: ", longList);
console.log(computers);
