const searchForm = document.getElementById("film_search");
const searchRequest = document.getElementById("text_window");

const pagesCountWrap = document.querySelector(".pages_count");
const totalPages = document.querySelector(".total-pages");

import {Api} from '/js/api/api.js';
import {FilmContent} from '/js/user-interface/FilmContent.js';

let api = new Api();
let filmContent = new FilmContent();


export class Searcher {

    constructor() {
        searchForm.addEventListener('submit', async event => {
            event.preventDefault();

            let search = searchRequest.value;
            let result = await api.getByTitle(search, 1);
            let totalResults = result.totalResults;
            let items = result.Search;

            filmContent.apply(items);


            pagesCounter(totalResults);
        });
    }

}

searchForm.onsubmit = new Searcher();

function pagesCounter(count) {

    const contentDiv = document.querySelector(".content");

    let pages = Math.ceil(count / 10);
    let pagesCount;
    totalPages.style.display = "block";
    for (let i=1; i <= pages; i++) {
        pagesCount = document.createElement('a');

        pagesCount.href = `?p=${i}`;
        pagesCount.innerText = `${i}`;

        pagesCountWrap.append(pagesCount);

        pagesCount.addEventListener("click", async event => {
            event.preventDefault();
            contentDiv.innerHTML = "";
            let search = searchRequest.value;
            let result = await api.getByTitle(search, i);
            let items = result.Search;
            filmContent(items);
        });

    }

}
