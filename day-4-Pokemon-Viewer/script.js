const fetchData = async() => {
    const pkmnGetName = document.getElementById('enterPokemon').value.toLowerCase();
    const pkmnDescription = document.getElementById('pkmn-description');
    const pkmnName = document.getElementById('pkmn-name');
    const pkmnNumber = document.getElementById('pkmn-dex-no');
    const pkmnNormal = document.getElementById('pkmn-sprite-normal');
    const pkmnShiny = document.getElementById('pkmn-sprite-shiny');
    const pkmnWeight = document.getElementById('pkmn-height');
    const pkmnHeight = document.getElementById('pkmn-weight');
    const pkmnAbility = document.getElementById('pkmn-ability');
    const pkmHideAbility = document.getElementById('pkmn-hide-ability');
    const pkmnType = document.getElementById('pkmn-types');

    const viewCard = document.querySelectorAll('.sectionContain');


    const pkmnResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnGetName}`);
    const pkmnSpeciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pkmnGetName}`)


    try {
        if(!pkmnResponse.ok || !pkmnSpeciesRes.ok) {

            viewCard.forEach(i => i.style.display = "none");
            const pkmnDescContain = document.getElementById('pkmn-desc-contain');
            pkmnDescContain.style.display = "flex";

            pkmnDescription.innerHTML = "No Pokemon Found";
            throw new Error("Couldn't not fetch resource");
        } 
        const pkmnData = await pkmnResponse.json();
        const pkmnSpeciesData = await pkmnSpeciesRes.json();

        const getName = pkmnData.name;
        const getNumber = pkmnData.id;
        const getNormal = pkmnData.sprites.front_default;
        const getShiny = pkmnData.sprites.front_shiny
        const getWeight = pkmnData.weight;
        const getHeight = pkmnData.height;
        const getFlavorTxt = pkmnSpeciesData.flavor_text_entries[0].flavor_text;
        const getAbility = pkmnData.abilities[0].ability.name;
        const getHiddenAbility = pkmnData.abilities[1].ability.name;
        
        pkmnType.querySelectorAll('p').forEach(i => {i.remove()}); 

        const types = pkmnData.types; // it will produce a array so we use a loop to access this.
        //types.forEach(type => console.log(`Slot: ${type.slot} ${type.type.name}`));

        

        types.forEach(type => {
            const addElement = document.createElement('p');
            switch(type.type.name) {
                case "normal":
                    addElement.classList.add('pkmn-type-normal');
                    addElement.textContent = "normal";
                    pkmnType.appendChild(addElement);
                    break;
                case "fire":
                    addElement.classList.add('pkmn-type-fire');
                    addElement.textContent = "fire";
                    pkmnType.appendChild(addElement);
                    break;
                case "water":
                    addElement.classList.add('pkmn-type-water');
                    addElement.textContent = "water";
                    pkmnType.appendChild(addElement);
                    break;
                case "electric":
                    addElement.classList.add('pkmn-type-electric');
                    addElement.textContent = "electric";
                    pkmnType.appendChild(addElement);
                    break;
                case "grass":
                    addElement.classList.add('pkmn-type-grass');
                    addElement.textContent = "grass";
                    pkmnType.appendChild(addElement);
                    break;
                case "ice":
                    addElement.classList.add('pkmn-type-ice');
                    addElement.textContent = "ice";
                    pkmnType.appendChild(addElement);
                    break;
                case "fighting":
                    addElement.classList.add('pkmn-type-fighting');
                    addElement.textContent = "water";
                    pkmnType.appendChild(addElement);
                    break;
                case "poison":
                    addElement.classList.add('pkmn-type-poison');
                    addElement.textContent = "poison";
                    pkmnType.appendChild(addElement);
                    break;
                case "ground":
                    addElement.classList.add('pkmn-type-ground');
                    addElement.textContent = "ground";
                    pkmnType.appendChild(addElement);
                    break;
                case "flying":
                    addElement.classList.add('pkmn-type-flying');
                    addElement.textContent = "flying";
                    pkmnType.appendChild(addElement);
                    break;
                case "psychic":
                    addElement.classList.add('pkmn-type-psychic');
                    addElement.textContent = "psychic";
                    pkmnType.appendChild(addElement);
                    break;
                case "bug":
                    addElement.classList.add('pkmn-type-bug');
                    addElement.textContent = "bug";
                    pkmnType.appendChild(addElement);
                    break;
                case "rock":
                    addElement.classList.add('pkmn-type-rock');
                    addElement.textContent = "rock";
                    pkmnType.appendChild(addElement);
                    break;
                case "ghost":
                    addElement.classList.add('pkmn-type-ghost');
                    addElement.textContent = "ghost";
                    pkmnType.appendChild(addElement);
                    break;
                case "dark":
                    addElement.classList.add('pkmn-type-dark');
                    addElement.textContent = "dark";
                    pkmnType.appendChild(addElement);
                    break;
                case "steel":
                    addElement.classList.add('pkmn-type-dark');
                    addElement.textContent = "dark";
                    pkmnType.appendChild(addElement);
                    break;
                case "dragon":
                    addElement.classList.add('pkmn-type-dragon');
                    addElement.textContent = "dragon";
                    pkmnType.appendChild(addElement);
                    break;
                case "fairy":
                    addElement.classList.add('pkmn-type-fairy');
                    addElement.textContent = "fairy";
                    pkmnType.appendChild(addElement);
                    break;

                default:
                    console.log(`Type is ${type.type.name}`);
                    break;
            }
        });


        pkmnName.innerHTML = getName;
        pkmnNumber.innerHTML = getNumber;
        pkmnNormal.src = getNormal;
        pkmnShiny.src = getShiny;
        pkmnWeight.innerHTML = getWeight;
        pkmnHeight.innerHTML = getHeight;
        pkmnAbility.innerHTML = getAbility;
        pkmHideAbility.innerHTML = getHiddenAbility;
        pkmnDescription.innerHTML = getFlavorTxt;

        viewCard.forEach(i => i.style.display = "flex");

    } catch(error) {
        console.error(error);
    }
    
}