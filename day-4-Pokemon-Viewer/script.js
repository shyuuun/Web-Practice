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