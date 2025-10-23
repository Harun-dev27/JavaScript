import Computer from "./Computer.js";

const desktop = new Computer(
    "Custom Build",
    "Intel i9",
    32,
    1000,
    "Windows 11",
    false,
    "UHD Monitor",
    150,
    1000,
    "Thu Mar 24 2023 08:09:25 GMT+0300 (East Africa Time)"
)


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

const phone = new Computer(
    "iPhone",
    "Bionic chip",
    "6",
    "256",
    "iOS",
    true,
    "XDR Display",
    100,
    500,
    "Thu Oct 10 2021 08:02:25 GMT+0300 (East Africa Time)"
)

const tablet = new Computer(
    "Samsung",
    "Snapdragon",
    12,
    256,
    "Android",
    true,
    "LCD",
    150,
    800,
    "Thu Oct 10 2022 08:02:25 GMT+0300 (East Africa Time)"
)


console.log("Desktop PC: ", desktop);
console.log("Desktop was bought on: ", desktop.dateAcquired);
console.log("Desktop is", desktop.computerAge() ,"days old");

console.log("Lap PC: ", laptop);
console.log("Laptop was bought on: ", laptop.dateAcquired);
console.log("Laptop is", laptop.computerAge(), "days old");

console.log("The Phone spec is: ", phone);
console.log("The phone was bought on: ", phone.dateAcquired);
console.log("The phone is", phone.computerAge(), "days old");

console.log("The Tablet spec is: ", tablet);
console.log("The Tablet was bought on: ", tablet.dateAcquired);
console.log("The tablet is", tablet.computerAge(), "days old");