const mountainfilter = document.getElementById('mountain-filter');
const gallleryContainer = document.querySelector('.mountains-gallary');
const singleGalleryContainer = document.querySelector('.mountain-gallary');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const modaltextElvation = document.getElementById('modal-textElevation');
const modaltextLat = document.getElementById('modal-textLat');
const modaltextLng = document.getElementById('modal-textLng');

document.addEventListener('DOMContentLoaded', () => {
  populateSelectOptions();
  createCardElements(mountainsArray);
});

function populateSelectOptions() {
  mountainsArray.forEach((mountain) => {
    const newOption = document.createElement('option');
    newOption.innerText = mountain.name;
    mountainfilter.appendChild(newOption);
  });
}

mountainfilter.addEventListener('change', () => {
  const input = mountainfilter.value;
  
  console.log(input);
  if (input === 'All') {
    singleGalleryContainer.style.display = 'none';
    gallleryContainer.style.display = 'grid';
  } else {
    gallleryContainer.style.display = 'none';
    singleGalleryContainer.style.display = 'flex';
    singleGalleryContainer.innerText = ""
    const mountain = mountainsArray.find((mountain)=> mountain.name === input);
    createCardElement([mountain])
  }
});

function createCardElements(mountainsArray) {
  for (const mountain of mountainsArray) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('mountain-gallary-cards');
    cardDiv.style.backgroundImage = `url('images/${mountain.img}')`;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop');
    button.innerText = mountain.name;

    button.addEventListener('click', () => {
      modalTitle.innerText = mountain.name;
      modalBody.innerText = mountain.desc;
      modaltextElvation.innerText = `${mountain.elevation} ft`;
      modaltextLat.innerText = mountain.coords.lat + '°';
      modaltextLng.innerText = mountain.coords.lng + '°';
    });

    cardDiv.appendChild(button);

    gallleryContainer.appendChild(cardDiv);
  }
}


function createCardElement(mountainsArray) {
  for (const mountain of mountainsArray) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('mountain-gallary-card');
    cardDiv.style.backgroundImage = `url('images/${mountain.img}')`;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'btn btn-primary';
    button.setAttribute('data-bs-toggle', 'modal');
    button.setAttribute('data-bs-target', '#staticBackdrop');
    button.innerText = mountain.name;

    button.addEventListener('click', () => {
      modalTitle.innerText = mountain.name;
      modalBody.innerText = mountain.desc;
      modaltextElvation.innerText = `${mountain.elevation} ft`;
      modaltextLat.innerText = mountain.coords.lat + '°';
      modaltextLng.innerText = mountain.coords.lng + '°';
    });

    cardDiv.appendChild(button);

    singleGalleryContainer.appendChild(cardDiv);
  }
}

function generateCardElement(input) {
  const cardDiv = document.createElement('div');
}
