const URL = "https://api.thecatapi.com/v1/images/search"

fetch(URL)
    .then(res => res.json())
    .then(data => {
        const img = document.querySelector('img');
        img.src = data[0].url;
    })

async function cambiarImagen (){
    const URL = "https://api.thecatapi.com/v1/images/search"
    const response = await fetch (URL);
    data = await response.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}