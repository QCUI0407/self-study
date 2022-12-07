const tmdb = TMDB_API;
const BASE_URL = 'https://api.themoviedb.org/3';
const tmdb_API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&api_key='+ tmdb;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURl = BASE_URL + '/search/movie?&api_key='+ tmdb;
//DOM

let main = document.getElementById('main');
let detail = document.getElementById('detail');
let inputSearch = document.getElementById('input-search');
let btnSearch = document.getElementById('btn-search');
let form = document.getElementById('form')

console.log('window');
getMovies(tmdb_API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data);
        showmovies(data.results);
    })
}

function showmovies(data){
    main.innerHTML = "";
    data.forEach(movie => {
        const {title,poster_path,vote_average,overview,id} = movie
        const movieElement = document.createElement('div');
        movieElement.classList.add('container');
        movieElement.innerHTML =`
    <div>
          <img src="${IMG_URL+poster_path}" alt="no-poster.png">
          <h3>${title}</h3>
          <p>${vote_average}</p>
          <button class="know-more" id="${id}">Know More</button>
            </div>
        `

        main.appendChild(movieElement)

        document.getElementById(id).addEventListener('click', () => {
            console.log(id)
            openNav(movie)
        })
    });
}
//more info
function openNav(movie){
    let id = movie.id;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${tmdb}`).then(res => res.json()).then(data=>{
        console.log(data)

        const movieDetail = data;
        movieDescHTML(movieDetail);
        let visId = document.getElementById('visually-hidden')
        if(visId.textContent != 0){

        }
    })
}



const movieDescHTML = (data) => {
    console.log(detail);
    console.log(data);

    const {original_title, overview, release_date, tagline, poster_path, id } = data;

    const movieElement = document.createElement('div');
    movieElement.innerHTML =
        `<div>
        <span id="close" onclick="this.parentNode.parentNode.remove(); return false;">Close</span>
              <img src="${IMG_URL+poster_path}" alt="no-poster.png">
              <p class="visually-hidden" id="visually-hidden">${id}</p>
              <h3>${original_title}</h3>
              <p>${tagline}</p>
              <p>${release_date}</p>
              <p>${overview}</p>
              <p>${data.genres[0].name}</p>
              <span class="add" id="add${id}">Add</span>
              <span class="del" id="del${id}">del</span>

            </div>`

    detail.appendChild(movieElement)

    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.remove();
        return false;
    }
    //add
    document.getElementById(`add${id}`).addEventListener('click', () => {
        console.log(id)
        put(data);
    })
    //del
    document.getElementById(`del${id}`).addEventListener('click', () => {
        console.log(id)
        del(data);
    })

}

//put
function put(data){
    const {original_title, overview, release_date, tagline, id} = data;
    console.log("put: " + data.id);
    fetch('https://reqres.in/api/users',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res=>{
        if(res.ok){
            alert("Add to your list!")
        }
    })
}

//del
function del(data){
    const {original_title, overview, release_date, tagline, id} = data;
    fetch('https://reqres.in/api/api/users/2',{
        method:"DELETE",
        headers:{
            'Content-type':'application/json'
        },
    })
    .then(res =>{
        if(res.ok){
            alert("Deleted from your list.")
        }
    })
}

//search
btnSearch.addEventListener('click',function(e) {
    e.preventDefault();
    // alert("click")
    let name = inputSearch.value;
    getMovies(searchURl + '&query=' + name);
});

