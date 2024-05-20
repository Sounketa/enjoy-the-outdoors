"use strict";

window.onload = function () {
  // HTML element variables
  const parkTableBody = document.querySelector("#parkTableBody");

  //functions
  function loadParkTable() {
    for (const park of nationalParksArray) {
      buildTableRow(park);
    }
  }

  function buildTableRow(park) {
  let row = parkTableBody.insertRow();

  let cell1 = row.insertCell();
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell();
  cell2.innerText = park.Address;

  let cell3 = row.insertCell();
  cell3.innerText = park.City;

  let cell4 = row.insertCell();
  cell4.innerText = park.State;

  let cell5 = row.insertCell();
  cell5.innerText = park.ZipCode;

  let cell6 = row.insertCell();
  cell6.innerText = park.Phone;

  let cell7 = row.insertCell();
  cell7.innerText = park.Fax;
  }
  
  //event handling

  //initial loading

  loadParkTable();
};

// function init() {
//   const statesList = document.querySelector("#statesList");

//   for (const state of locationsArray) {
//     const option = document.querySelector("#option");

//     option.value = state.abbrev;

//     option.innerText = state.name;

//     statesList.appendChild(option);
//   }
// }

// window.onload = init;








// window.onload = function () {
//   const parksDiv = document.querySelector("#petsDiv");

//   function loadParks() {
//     for (const park of nationalParksArray) {
//       buildCard(park);
//     }
//   }

//   function buildCard(park) {
//     let cardDiv = document.createElement("div");
//     cardDiv.classList.add("card");

//     let cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
//     cardBody.innerText = park.LocationName;
//     cardDiv.appendChild(cardBody);

//     // parksDiv.appendChild(cardDiv);
//   }

//   loadParks();
// };
