const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com/';

window.onload = async () => {
  
    const Wizards = await getAllWizards();
    
    const spinnerHtmlElement2 = document.getElementById('spinner');
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
  async function getAllWizards() {
    const response = await fetch(`${SWAPI_BASE_URL}Wizards`);
    const data = await response.json();
    return data;
  }