const SWAPI_BASE_URL = 'https://wizard-world-api.herokuapp.com/';

let casafavorita="Seleciona tu casa  favorita";
let magofavorito='Seleciona tu mago  favorito';

window.onload = async () => {

    async function getAllHouses() {
        const response = await fetch(`${SWAPI_BASE_URL}Houses`);
        const data = await response.json();
        return data;
    }
    const Houses = await getAllHouses();
    let i=1;

    const grapmain = document.getElementById('main');
    const grap = document.createElement('div');
    grap.classList.add('wrapper')
    
   
   
    for (const House of Houses) {
        
        const mainHtmlElement = document.getElementById('main');
        const newElement = document.createElement('div');
        newElement.classList.add('contadorcasas'+ (i))
        newElement.innerHTML = `
        
        <p>${House.name}</p>
        <img onclick="FavoriteHouse('${House.name}')" src=${House.name}.jpg alt="Imatge ${House.name} ">
        `
        i++;  
        grap.appendChild(newElement);
    };
    grapmain.appendChild(grap);
    

    const Wizards = await getAllWizards();

    const spinnerHtmlElement2 = document.getElementById('spinner');
    spinnerHtmlElement2.remove();

    for (const Wizard of Wizards) {
        const mainHtmlElement = document.getElementById('main');
        const newElement = document.createElement('div');
        newElement.innerHTML = `
        <h2 onclick="FavoritWizard('${Wizard.firstName},${Wizard.lastName}')">${Wizard.firstName} ${Wizard.lastName}</h2>
        
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
            
                
            mainHtmlElement.appendChild(newElement);
        };

        
    }
    async function getAllElixirsid(id) {
        const response = await fetch(`${SWAPI_BASE_URL}Elixirs/${id}`);
        const data = await response.json();
        return data;
      }

      function FavoriteHouse(name) {
        
        const mainHtmlElement = document.getElementById('Favoritos');
        const newElement = document.createElement('div');
        mainHtmlElement.innerHTML = '';
        mainHtmlElement.innerHTML = 'Favoritos⭐';

        newElement.innerHTML = `
            <p>${name} </p>
            <p>${magofavorito}</p>
           
            `
         mainHtmlElement.appendChild(newElement);
         casafavorita=name;  
      }

      function FavoritWizard(name){
        const mainHtmlElement = document.getElementById('Favoritos');
        const newElement = document.createElement('div');
        mainHtmlElement.innerHTML = '';
        mainHtmlElement.innerHTML = 'Favoritos⭐';

        newElement.innerHTML = `
            <p>${casafavorita} </p>
            <p>${name} </p>
           
            `
         mainHtmlElement.appendChild(newElement);
         magofavorito=name;   

      }
      