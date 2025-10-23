import Computer from "./Computer.js";
const laptop =new Computer(
    "Lenovo",
    "AMD",
    16,
    512,
    "Windows 11",
    true,
    "HD Monitor",
    150,
    1000,
    
"Thu Oct 10 2020 08:02:25 GMT+0300 (East Africa Time)"
)

console.log("The Lenovo Laptop: ", laptop);
console.log("The OS comes with: ", laptop.os);
console.log("Date Laptop was bought on : ", laptop.dateAcquired);
console.log("Day since laptop bought: ", laptop.computerAge());