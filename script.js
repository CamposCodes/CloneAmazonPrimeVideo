let main = document.querySelectorAll('.main .center')[0];


// consumindo API 

const API_KEY = 'api_key=1eb5244ab22942d724e9d6f520d43f8b';
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?';
const API_URL = BASE_URL + API_KEY;

fetch(API_URL).then(response=>response.json()).then(data=>{
    data.results.map((i,j)=>{
        if(j > 15)
            return;
        if(j == 0){
            main.innerHTML += `
            <div class="banner-principal" style="background-image:url('https://image.tmdb.org/t/p/original/`+i.backdrop_path+`')"></div>
            `;
        }
        else{
            if(j == 1){
                main.innerHTML+=`
                    <h2>Assista o melhor filme</h2>
                    <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" alt=""></div>
                `;
            }
            else{
                main.innerHTML+=`
                <div class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" alt=""></div>
            `;
            }
        }
    });
});

//


let ass = document.querySelector('#ass');

ass.addEventListener('mouseenter', ()=>{
    ass.textContent = 'CamposCodes was here...';
});
ass.addEventListener('mouseout', ()=>{
    ass.textContent = 'Desenvolvido por Gabriel Campos Lima Alves';
});

