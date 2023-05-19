import {Api} from '/js/api/api.js';
import {FilmContent} from '/js/user-interface/FilmContent.js';

const searchForm = document.getElementById("film_search");
const searchRequest = document.getElementById("text_window");
const contentDiv = document.querySelector(".content");
const totalPages = document.querySelector(".total-pages");

let api, filmContent, searchValue;

export class UserInterface {

    constructor() {
        filmContent = new FilmContent();
        api = new Api();
        searchForm.addEventListener('submit', this.onSubmit);
    }

    async onSubmit(page) {
        contentDiv.innerHTML = "";
        searchValue = searchRequest.value;
        let result = await api.getByTitle(searchValue,  page || 1);

        if (result.Response === 'False') {
            filmContent.notFound();
            totalPages.style.display = 'none';
        }
        else {
            filmContent.apply(result, searchValue);
        }

    }

    setSearchForm(search, page) {
        searchRequest.value = search;
        this.onSubmit(page);
    }

}

