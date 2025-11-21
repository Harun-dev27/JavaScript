import computerObjectArray from "./data.js";

//mapping

const content = computerObjectArray.map((computer) => {
  let computerArticle = document.createElement("article");
  computerArticle.classList.add("computer");

  computerArticle.setAttribute("id", computer.id);

  computerArticle.innerHTML = `
  <figure class="computer_image">
    <img src=${computer.image} style=" height: 180px" alt= "" loading= "lazy">
  </figure>
  <h3 class="computer_name">Name: ${computer.name}</h3>
  <ul class="computer_features">
  <li class="feature screen">Screen: ${computer.screen}</li>
  <li class="feature ram">RAM: ${computer.ram}</li>
  <li class="feature storage">Storage: ${computer.storage}</li>
  <li class="feature wifi">Wifi: ${computer.wifi}</li>
  <li class="feature os">OS: ${computer.os}</li>
  <li class="feature cpu">CPU: ${computer.cpu}</li>
  </ul>
  `;
  return computerArticle;
});

const main = document.querySelector("main");

content.forEach((computer) => {
  main.append(computer);
});
