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
const API_URL_FAVORITES = "https://api.thecatapi.com/v1/favourites?api_key=d2945296-d352-499f-90c3-710dfe04b855"
const spanError = document.getElementById("error");

async function loadRandomMichis (){
    const res = await fetch (API_URL_RANDOM);
    data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status;
    } else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => saveFavouriteMichi(data[0].id);
        btn2.onclick = () => saveFavouriteMichi(data[1].id);
    }
}


async function loadFavouritesMichis (){
    const res = await fetch (API_URL_FAVORITES);
    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    } else {
        console.log("favoirtos",data)
        data.forEach(michi => {
            const section = document.getElementById('favoriteMichis');
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnText = document.createTextNode('sacar al michi de favoritos');

            img.src = michi.image.url;
            img.width = 150;
            btn.appendChild(btnText);
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
        })
    }

}

async function saveFavouriteMichi (id){
    console.log("id",id)
    const res = await fetch(API_URL_FAVORITES,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            image_id: id
        })
    })

    const data = await res.json();

    if(res.status !== 200){
        spanError.innerHTML = "Hubo un error: " + res.status + data.message;
    }
}
  

loadRandomMichis();
loadFavouritesMichis();