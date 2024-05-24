"use strict";


const statesList = document.getElementById('statesList');
const parkTypeList = document.getElementById('parkTypeList');
const parkTableBody = document.getElementById('parkTableBody');
const filterByState = document.getElementById('filterByState');
const filterByType = document.getElementById('filterByType');


// This function populates the table with all park data from the nationalParksArray
function loadParkTable() {
    parkTableBody.innerHTML = ''; // Clear the table body
    for (const park of nationalParksArray) {
        buildTableRow(park);
    }
}

// This function populates the state dropdown (statesList) with options. It iterates through the locationsArray, creates an option element for each state,
function loadStateList() {
    for (const state of locationsArray) {
        const option = document.createElement('option');
        option.value = state;
        option.innerText = state;
        statesList.appendChild(option);
    }
}

// This function  populates the park type dropdown
function loadParkTypeList() {
    for (const parkType of parkTypesArray) {
        const option = document.createElement('option');
        option.value = parkType;
        option.innerText = parkType;
        parkTypeList.appendChild(option);
    }
}

// This function builds a table row for a given park
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

// This function filters the parks based on the selected state or park type,
function filterParks() {
    const selectedState = statesList.value;
    const selectedParkType = parkTypeList.value;
    parkTableBody.innerHTML = ''; // Clear the table body
    for (const park of nationalParksArray) {
      if (filterByState.checked && (selectedState === 'all' || park.State === selectedState)) {
          buildTableRow(park);
      } else if (filterByType.checked && (selectedParkType === 'all' || park.LocationName.includes(selectedParkType))) {
          buildTableRow(park);
      }
  }
}

// This function toggles the enabled/disabled state of the state and park type dropdowns 
function toggleFilter() {
  if (filterByState.checked) {
      statesList.disabled = false;
      parkTypeList.disabled = true;
  } else if (filterByType.checked) {
      statesList.disabled = true;
      parkTypeList.disabled = false;
  }
  filterParks(); // Apply filter immediately after toggling
}

// These lines add event listeners to the dropdowns and radio buttons:
// Event handling
statesList.addEventListener('change', filterParks);
parkTypeList.addEventListener('change', filterParks);
filterByState.addEventListener('change', toggleFilter);
filterByType.addEventListener('change', toggleFilter);

// These lines initialize the page:
// Initial loading
loadParkTable();
loadStateList();
loadParkTypeList();
toggleFilter();



