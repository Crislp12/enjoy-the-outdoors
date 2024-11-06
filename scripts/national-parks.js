const table = document.getElementById('mountain-table');
const stateRadio = document.getElementById('state');
const typeRadio = document.getElementById('type');
const categorySelect = document.getElementById('categorySelect');

document.addEventListener('DOMContentLoaded', () => {
  renderDataOnTable(nationalParksArray);
});

stateRadio.addEventListener('click', () => {
  categorySelect.length = 1;

  if (stateRadio.checked) {
    locationsArray.forEach((location) => {
      const newOption = document.createElement('option');
      newOption.innerText = location;
      categorySelect.appendChild(newOption);
    });
  }
});

typeRadio.addEventListener('click', () => {
  categorySelect.length = 1;

  if (typeRadio.checked) {
    parkTypesArray.forEach((type) => {
      const newOption = document.createElement('option');
      newOption.innerText = type;
      categorySelect.appendChild(newOption);
    });
  }
});

categorySelect.addEventListener('change', () => {
  const input = categorySelect.value;
  removeAllChildren(table);

  if (input === 'All') {
    renderDataOnTable(nationalParksArray);
  } else if (stateRadio.checked) {
    const filterMountains = nationalParksArray.filter((park) => park.State === input);
    renderDataOnTable(filterMountains);
  } else if (typeRadio.checked) {
    const filterMountains = nationalParksArray.filter((park) => park.LocationName.includes(input));
    renderDataOnTable(filterMountains);
  }
  
});

// helper fucntion to remove all child elements from the table
function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function renderDataOnTable(nationalParksArray) {
  for (const mountain of nationalParksArray) {
    const row = document.createElement('tr');

    const tableDataName = document.createElement('td');
    tableDataName.innerText = mountain.LocationName || ''; // Avoid errors if data is missing
    row.appendChild(tableDataName);

    const tableDataAddress = document.createElement('td');
    tableDataAddress.innerText = mountain.Address || '';
    row.appendChild(tableDataAddress);

    const tableDataCity = document.createElement('td');
    tableDataCity.innerText = mountain.City || '';
    row.appendChild(tableDataCity);

    const tableDataState = document.createElement('td');
    tableDataState.innerText = mountain.State || '';
    row.appendChild(tableDataState);

    const tableDataZipCode = document.createElement('td');
    tableDataZipCode.innerText = mountain.ZipCode || '';
    row.appendChild(tableDataZipCode);

    const tableDataPhone = document.createElement('td');
    tableDataPhone.innerText = mountain.Phone || '';
    row.appendChild(tableDataPhone);

    const tableDataNameWebsite = document.createElement('td');

    if (mountain.Visit) {
      const link = document.createElement('a');
      link.href = mountain.Visit;
      link.innerText = 'Visit';
      link.target = '_blank';
      tableDataNameWebsite.appendChild(link);
    } else {
      tableDataNameWebsite.innerText = 'N/A';
    }

    row.appendChild(tableDataNameWebsite);

    table.appendChild(row);
  }
}
