




const fetchData = async() => {
    const pkmnGetName = document.getElementById('enterPokemon').value.toLowerCase();
    const pkmnDescription = document.getElementById('pkmn-description');
    const pkmnName = document.getElementById('pkmn-name');
    const pkmnNumber = document.getElementById('pkmn-dex-no');
    const pkmnNormal = document.getElementById('pkmn-sprite-normal');
    const pkmnShiny = document.getElementById('pkmn-sprite-shiny');
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnGetName}`);

    console.log(pkmnGetName);

    try {
        if(!response.ok) {
            pkmnDescription.innerHTML = "No Pokemon Found";
            throw new Error("Couldn't not fetch resource");
        } 
        const data = await response.json();
        console.log(data);


    } catch(error) {
        console.error(error);
    }
    
}