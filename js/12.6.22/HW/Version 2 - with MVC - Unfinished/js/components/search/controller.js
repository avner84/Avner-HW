import * as modelSearch from "./model.js";

const inputSearch = document.querySelector("#inputSearch");


export function init() {

    inputSearch.addEventListener("input", playMovieSearch)


}

/////////
// function playMovieSearch() {
//     return new Promise(resolve => {
//         resolve(modelSearch.movieSearch(inputSearch));

//     });

// }

// async function asyncCall() {

//     const result = await playMovieSearch();
//     // if (!result) {
//     console.log(result)
//         // };

// }
///////



async function playMovieSearch() { return modelSearch.movieSearch(inputSearch); }

playMovieSearch().then(
    function(value) {
        console.log("bdika: " + value);
    });