const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com/';

window.onload = async () => {
  
  const Elixirs = await getAllElixirs();
  
  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const Elixir of Elixirs) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h2>${Elixirs.name}</h2>
      
    `;
    mainHtmlElement.appendChild(newElement);
  }
};

async function getAllElixirs() {
  const response = await fetch(`${SWAPI_BASE_URL}Elixirs`);
  const data = await response.json();
  return data;
}


