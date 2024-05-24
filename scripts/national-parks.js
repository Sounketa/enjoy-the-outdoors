"use strict";


const statesList = document.getElementById('statesList');
const parkTypeList = document.getElementById('parkTypeList');
const parkTableBody = document.getElementById('parkTableBody');
const filterByState = document.getElementById('filterByState');
const filterByType = document.getElementById('filterByType');

function loadParkTable() {
    parkTableBody.innerHTML = ''; // Clear the table body
    for (const park of nationalParksArray) {
        buildTableRow(park);
    }
}

function loadStateList() {
    for (const state of locationsArray) {
        const option = document.createElement('option');
        option.value = state;
        option.innerText = state;
        statesList.appendChild(option);
    }
}

function loadParkTypeList() {
    for (const parkType of parkTypesArray) {
        const option = document.createElement('option');
        option.value = parkType;
        option.innerText = parkType;
        parkTypeList.appendChild(option);
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

// Event handling
statesList.addEventListener('change', filterParks);
parkTypeList.addEventListener('change', filterParks);
filterByState.addEventListener('change', toggleFilter);
filterByType.addEventListener('change', toggleFilter);

// Initial loading
loadParkTable();
loadStateList();
loadParkTypeList();
toggleFilter();



