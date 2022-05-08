// fetch(API_URL)
//     .then(res => res.json())
//     .then(data => {
//         const img1 = document.getElementById('img1');
//         const img2 = document.getElementById('img2');
//         const img3 = document.getElementById('img3');
//         img1.src = data[0].url;
//         img2.src = data[1].url;
//         img3.src = data[2].url;
//     })

const API_URL_RANDOM = "https://api.thecatapi.com/v1/images/search?limit=2&api_key=d2945296-d352-499f-90c3-710dfe04b855"
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?limit=2&api_key=d2945296-d352-499f-90c3-710dfe04b855"
const spanError = document.getElementById("error");

async function loadRandomMichis (){
    const res = await fetch (API_URL_RANDOM);
    data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}


async function loadFavouritesMichis (){
    const res = await fetch (API_URL_FAVORITES);
    const data = await res.json();

    console.log("favoritosssss")
    console.log(data)

    if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }

}

async function saveFavouriteMichis (){
    const res = await fetch(API_URL_FAVORITES,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: 'dje'
        })
    })

    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }


    console.log(res)
}

loadRandomMichis();
loadFavouritesMichis();