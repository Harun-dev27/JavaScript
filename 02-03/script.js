// Create an Array
const my_desktop = [
  "apple",
  "Laptop",
  "Phone",
  "Remote",
  "Cup",
  "Book",
  "Headphones",
  "Pendrive",
  "USB hub"
];

console.log("Original items:", my_desktop);

// Remove the last item and return to console
// console.log("This last item will be removed: ", my_desktop.pop());
// console.log("This is the new list: ", my_desktop);

// Move the last item to the first Position
// let lastitem = my_desktop.pop();
// console.log("This last item will be moved to 1st: ", lastitem);
// my_desktop.unshift(lastitem);
// console.log("Last item is now first item: ", my_desktop);

// Sort items Alphabetically
// my_desktop.sort();
// console.log("Array sorted Alphabetically: ", my_desktop);


// Find a specific item
//  let item = "Phone";
//  const item_found = my_desktop.find((something) => something === item) || "No such item in the list";
//  console.log("Item found: ", item_found);

//Find item 4 in the array
// let item = my_desktop[4];
// const item_found = my_desktop.find((something) => something === item) || "The item do not exist";
// console.log("The item is: ", item_found);

// Remove a specific content from the Array
let remove_item = "Cup";
my_desktop.splice(my_desktop.indexOf(remove_item), 1);
console.log(`Array item with name "${remove_item}" has been removed: `, my_desktop);