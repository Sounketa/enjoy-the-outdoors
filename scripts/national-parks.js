"use strict";

window.onload = function () {
  // HTML element variables
  const parkTableBody = document.querySelector("#parkTableBody");
  const filterOptionType = document.querySelectorAll("input[name='filterOption']");
  const filterOptionsContainer = document.getElementById("filterOptions");

  //functions
  function loadParkTable(parks) {

    parkTableBody.innerHTML = "";
    
    for (const park of parks) {
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

  function filterByState(state) {
    return nationalParksArray.filter(park => park.State === state);
  }

  function filterByParkType(parkType) {
    return nationalParksArray.filter(park => park.ParkType === parkType);
  }

  function populateFilterOptions(filterOption) {

    filterOptionsContainer.innerHTML = "";

    const dropdown = document.createElement("select");
    dropdown.id = "filterDropdown";

    let optionsArray = [];
    if (filterOption === "state") {
      optionsArray = locationsArray;
    } else if (filterOption === "parkType") {
      optionsArray = parkTypesArray;
    }

    for (const option of optionsArray) {
      const optionElement = document.createElement("option");
      optionElement.value = option;
      optionElement.textContent = option;
      dropdown.appendChild(optionElement);
    }

    dropdown.addEventListener("change", function () {
      const selectedValue = dropdown.value;
      if (filterOption === "state") {
        const filteredParks = filterByState(selectedValue);
        loadParkTable(filteredParks);
      } else if (filterOption === "parkType") {
        const filteredParks = filterByParkType(selectedValue);
        loadParkTable(filteredParks);
  }
});

filterOptionsContainer.appendChild(dropdown);
}

// Event handling
filterOptionType.forEach(option => {
option.addEventListener("change", function () {
  const selectedFilterOption = document.querySelector("input[name='filterOption']:checked").value;
  populateFilterOptions(selectedFilterOption);
});
});

// Initial loading
loadParkTable(nationalParksArray);
};

//     if (filterType.value === "state") {
//       for (const state of locationsArray) {
//         const label = document.createElement("label");
//         const radio = document.createElement("input");
//         radio.type = "radio";
//         radio.name = "filterOption";
//         radio.value = state;
//         label.appendChild(radio);
//         label.appendChild(document.createTextNode(state));
//         filterOptionsContainer.appendChild(label);

//         radio.addEventListener("change", function () {
//           const filteredParks = filterByState(radio.value);
//           loadParkTable(filteredParks);
//         });
//       }
//     } else if (filterType.value === "parkType") {
//       for (const parkType of parkTypesArray) {
//         const label = document.createElement("label");
//         const radio = document.createElement("input");
//         radio.type = "radio";
//         radio.name = "filterOption";
//         radio.value = parkType;
//         label.appendChild(radio);
//         label.appendChild(document.createTextNode(parkType));
//         filterOptionsContainer.appendChild(label);

//         radio.addEventListener("change", function () {
//           const filteredParks = filterByParkType(radio.value);
//           loadParkTable(filteredParks);
//         });
//       }
//     }
//   }

//   // Event handling
//   filterType.addEventListener("change", populateFilterOptions);

//   // Initial loading
//   loadParkTable(nationalParksArray);
//   populateFilterOptions();
// };




  // function loadStateList() {
  //   // loop through states array one at a time
  //   for (const state of locationsArray) {
  //     // create option element
  //     const option = document.createElement("option");
  //     // set the value of the element (value is not visible on the web page)
  //     option.value = state;
  //     // set the text between the opening and closing option tags
  //     option.innerText = state;

  //     // add the option element to the page as a child of the select list
  //     statesList.appendChild(option);
  //   }
  // }

 

 
  // function loadParkTypeList() {    
  //   for (const park of parkTypesArray) {
  //     const option = document.createElement("option");

  //     option.value = park;

  //     option.innerText = park;

  //     parkTypeList.appendChild(option);
  //   }
  // }
