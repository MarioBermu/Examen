const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com/';

window.onload = async () => {
  
  const Elixirs = await getAllElixirs();
  
  const spinnerHtmlElement = document.getElementById('spinner');
  spinnerHtmlElement.remove();

  for (const Elixir of Elixirs) {
    const mainHtmlElement = document.getElementById('main');
    const newElement = document.createElement('div');
    newElement.innerHTML = `
      <h2>${Elixir.name}</h2>
      <p>${Elixir.effect}</p>
      
    `;
    mainHtmlElement.appendChild(newElement);
  }
};


  window.onload = async () => {
  
    const Wizards = await getAllWizards();
    
    const spinnerHtmlElement2 = document.getElementById('spinner2');
    spinnerHtmlElement2.remove();
  
    for (const Wizard of Wizards) {
      const mainHtmlElement = document.getElementById('main');
      const newElement = document.createElement('div');
      newElement.innerHTML = `
        <h2>${Wizard.fistName}</h2>
        
        
      `;
      mainHtmlElement.appendChild(newElement);
    }
  };


async function getAllElixirs() {
  const response = await fetch(`${SWAPI_BASE_URL}Elixirs`);
  const data = await response.json();
  return data;
}
async function getAllWizards() {
  const response = await fetch(`${SWAPI_BASE_URL}Wizards`);
  const data = await response.json();
  return data;
}



