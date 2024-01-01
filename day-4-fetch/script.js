// fetch = Function used for making HTTP requests to fetch resources.
//              (JSON style data, images, files)
//              Simplifies asynchronous data fetching in JavaScript and
//              used for interacting with APIs to retrieve and send
//              data asynchronously over the web.
//              fetch(url, {options})
//              https://www.youtube.com/watch?v=37vxWr0WgQk&ab_channel=BroCode

/*

    example fetch code
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        if(!response.ok){
            throw new Error('Could not fetch resource');
        }
        return response.json();
    })
    .then(data => console.log(data.id))
    .catch(error => console.error(error));

*/


/*

"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise

*/

async function fetchData() {

    const getPkmName = document.getElementById("pkmName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getPkmName}`);

    try{
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pkmSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pkmSprite");

        imgElement.src = pkmSprite;
        imgElement.style.display = "block";

        
    } catch(error) {
        console.error(error);
    }
}
