const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com/';

window.onload = async () => {

    const Wizards = await getAllWizards();

    const spinnerHtmlElement2 = document.getElementById('spinner');
    spinnerHtmlElement2.remove();

    for (const Wizard of Wizards) {
        const mainHtmlElement = document.getElementById('main');
        const newElement = document.createElement('div');
        newElement.innerHTML = `
        <h2>${Wizard.firstName} ${Wizard.lastName}</h2>
        
      `
        mainHtmlElement.appendChild(newElement);
        for (const elixir of Wizard.elixirs) {
            const mainHtmlElement = document.getElementById('main');
            const newElement = document.createElement('div');
            newElement.innerHTML = `
            <p>${elixir.name}</p>
            <button onclick="ClickElixir(${elixir.id})" id="elixir">Elixir</button>
            `
            
                ;
            mainHtmlElement.appendChild(newElement);


        };
    };
    async function getAllWizards() {
        const response = await fetch(`${SWAPI_BASE_URL}Wizards`);
        const data = await response.json();
        return data;
    }
}
    function ClickElixir(id) {
        
    }