const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3"

fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const img3 = document.getElementById('img3');
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
    })

async function cambiarImagen (){
    const API_URL = "https://api.thecatapi.com/v1/images/search?limit=3"
    const response = await fetch (API_URL);
    data = await response.json();

    console.log(data)
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    img1.src = data[0].url;
    img2.src = data[1].url;
    img3.src = data[2].url;
}