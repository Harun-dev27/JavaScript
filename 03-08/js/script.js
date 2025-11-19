import Computer from "./computer.js";

const laptop = new Computer(
  "Lenovo",
  "AMD",
  16,
  512,
  "Windows 10",
  true,
  "HD Monitor",
  150,
  1000,
  "image/Laptop.jpg"
);

const content = `
<figure class="Computer_image">
<img src=${laptop.image} loading="lazy" width="250px" height="200">
</figure>
<h1 class="computer_namme">${laptop.name}</h1>
<ul class="computer_features">
 <li class="feature processor"> Processor  : ${laptop.processor}</li>
 <li class="feature ram">       ram  : ${laptop.ram}</li>
 <li class="feature storage">   storage  : ${laptop.storage}</li>
 <li class="feature os">        OS  : ${laptop.os}</li>
 <li class="feature wifi">      Wifi  : ${
   laptop.wifi ? "Wifi is available" : "Wifi is not available"
 }</li>
 <li class="feature monitor">   Monitor  : ${laptop.monitor}</li>
 <li class="feature wifiBand2g">2G wifi  : ${
   laptop.wifispeed.lowSpeed
 } Mbps</li>
 <li class="feature wifiBand5">5G Wifi  : ${
   laptop.wifispeed.highSpeed
 } Mbps</li>
</ul>
`;

const main = document.querySelector("main");

const newArticle = document.createElement("article");
newArticle.classList.add("computer");
newArticle.setAttribute("id", "laptop");
newArticle.innerHTML = content;

main.append(newArticle);

console.log(content);

// if (laptop.wifi === true) {
//   console.log("Wifi is available");
// } else {
//   console.log("Wifi is unavailable");
// }

//For boolean this can work (without using === operator)

// if (laptop.wifi) {
//   console.log("Wifi is available");
// } else {
//   console.log("Wifi is unavailable");
// }

//Also we can use itenary operator which can be used in inner.html for laptop.wifi
console.log(laptop.wifi ? "Wifi is available" : "Wifi is not available");
