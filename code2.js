const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com/';

window.onload = async () => {

    async function getAllHouses() {
        const response = await fetch(`${SWAPI_BASE_URL}Houses`);
        const data = await response.json();
        return data;
    }
    const Houses = await getAllHouses();
    for (const House of Houses) {
        
        const mainHtmlElement = document.getElementById('main');
        const newElement = document.createElement('div');
        newElement.innerHTML = `
        <p>${House.name}</p>
       
        `
            ;
        mainHtmlElement.appendChild(newElement);
    };


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
            <button onclick="ClickElixir('${elixir.id}')" id="elixir">Elixir</button>
            `
            
                ;
            mainHtmlElement.appendChild(newElement);


        };
    };
}
    async function getAllWizards() {
        const response = await fetch(`${SWAPI_BASE_URL}Wizards`);
        const data = await response.json();
        return data;
    }
    

    async function ClickElixir(id) {
        const elixirslista =  await getAllElixirsid(id);
        for (const ingredient of elixirslista.ingredients) {
            
            const mainHtmlElement = document.getElementById('main');
            const newElement = document.createElement('div');
            newElement.innerHTML = `
            <p>${ingredient.name}</p>
           
            `
            
                ;
            mainHtmlElement.appendChild(newElement);
        };

        
    }
    async function getAllElixirsid(id) {
        const response = await fetch(`${SWAPI_BASE_URL}Elixirs/${id}`);
        const data = await response.json();
        return data;
      }