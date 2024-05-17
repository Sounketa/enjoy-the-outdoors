"use strict"

function loadParks() {
  for (const park of nationalParksArray) {
    let row = document.createElement("tr");
    nationalParksTb1Body.appendChild(row);


  }
}

window.onload = function () {

 // HTML element variables
const nationalParksTb1Body = document.querySelector("#nationalParksTb1Body")
}
 //functions

function loadNationalParksTable() {
  for (const park of nationalParksArray) {

    let row = nationalParksTb1Body.insertRow();

    let cell1 = row.insertCell(0);
    cell1.innerText = nationalParksArray.LocationName;

    let cell2 = row.insertCell(1);
    cell2.innerText = nationalParksArray.Address;

    let cell3 = row.insertCell(2);
    cell3.innerText = nationalParksArray.City;

    let cell4 = row.insertCell(3);
    cell4.innerText = nationalParksArray.State

    let cell5 = row.insertCell(4);
    cell5.innerText = nationalParksArray.Zip

    let cell6 = row.insertCell(5);
    cell6.innerText = nationalParksArray.Phone

    let cell7 = row.insertCell(6);
    cell7.innerText = nationalParksArray.Website
    
  }
  //event handling
  
  //initial loading

  loadNationalParksTable();
};