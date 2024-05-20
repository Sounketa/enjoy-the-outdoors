"use strict";


window.onload = function () {
  const parksDiv = document.querySelector("#petsDiv");

  function loadParks() {
    for (const park of nationalParksArray) {
      buildCard(park);
    }
  }

  function buildCard(park) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerText = park.LocationName;
    cardDiv.appendChild(cardBody);

    // parksDiv.appendChild(cardDiv);
  }

  loadParks();
};
