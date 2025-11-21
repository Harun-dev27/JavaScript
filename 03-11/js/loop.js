//Types of Arrays

const computers = ["Desktop", "Laptop", "Tablet", "smart Phone"];

const objectList = {
  item01: {
    type: "desktop",
  },
  item02: {
    type: "Laptop",
  },
  item03: {
    type: "Tablet",
  },
  item04: {
    type: "Smart Phone",
  },
};

//Create Elements
const mainTag = document.querySelector("main");
let unorderedList = document.createElement("ul");

//"For" loop

// for (let i = 0; i < computers.length; i++) {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = computers[i];
//   unorderedList.append(listItem);
// }

//"For of" loop

// for (const item of computers) {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = item;
//   unorderedList.append("listItem");
// }

//"For each" loop
//array.forEach()()

// computers.forEach((item) => {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = item;
//   unorderedList.append(listItem);
// });

// "For in" loop
// for(const key in object)

// for (const singleObject in objectList) {
//   let listItem = document.createElement("li");
//   listItem.innerHTML = `Name ${objectList[singleObject].type}`;
//   unorderedList.append(listItem);
// }

const computersType = computers.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

console.log("Computers: ", computers);
console.log("Computer Types: ", computersType);

computersType.forEach((item) => {
  unorderedList.append(item);
});

//append list
mainTag.append(unorderedList);
