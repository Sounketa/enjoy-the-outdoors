"use strict";

window.onload = function () {
  const mountainsList = document.querySelector("#mountainsList");
  const mountainDiv = document.querySelector("#mountainDiv");
  const detailsButton = document.querySelector("#detailsButton");
  
  // Function to load mountain data
  function loadMountains() {
    for (const mountain of mountainsArray) {
      let option = document.createElement("option");
      option.textContent = mountain.name;
      option.value = mountain.name;
      mountainsList.appendChild(option)
    }
  }


   function showMountainDetails() {
    const selectedMountainName = mountainsList.value;
    const selectedMountain = mountainsArray.find(mountain => mountain.name === selectedMountainName);

    mountainDiv.innerHTML = "";

    if (selectedMountain) {
      buildCard(selectedMountain);
    }
   }

  // Function to build card
   function buildCard(mountain) {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let cardImage = document.createElement("img");
    cardImage.src = mountain.img;
    cardImage.alt = mountain.name;
    cardImage.classList.add("card-img-top", "card-img-fit");
  
    cardDiv.appendChild(cardImage);
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerText = `${mountain.name}\nElevation: ${mountain.elevation} meters\nDescription: ${mountain.desc} meters\nCoordinates: ${mountain.coords}`;
    cardDiv.appendChild(cardBody);
  
    mountainDiv.appendChild(cardDiv)
   }
  
   detailsButton.onclick = showMountainDetails;
  
    
    loadMountains();
};


