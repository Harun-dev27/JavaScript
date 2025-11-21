import Computer from "./computer.js";

const desktop = new Computer(
  "Config01",
  "Custom Build",
  "UHD Monitor",
  64,
  1000,
  true,
  "Windows 11",
  "Intel",
  "image/Laptop.jpg"
);

const laptop = new Computer(
  "Config02",
  "Dell",
  "UHD Monitor",
  32,
  512,
  true,
  "Windows 11",
  "AMD",
  "image/Laptop.jpg"
);

const computerObjectArray = [desktop, laptop];
export default computerObjectArray;
