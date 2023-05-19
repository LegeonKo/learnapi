import {Paginator} from "./Paginator.js";
import {LocalStorage} from "/js/local-storage/local-storage.js";

const contentDiv = document.querySelector(".content");

let Storage = new LocalStorage();

export class FilmContent {

    apply(data, search) {

        let items = data.Search;

        items.forEach(el => {
            let div = document.createElement('div');
            // Storage.isLocalStorageHas(el.imdbID)

            div.className = "film_wrap";

            div.innerHTML = `
            <div class="content_wrap">
                <div class="img_wrap">
                <img class="movie_img" src="${el.Poster}">
                </div>
                <div class="text_wrap">
                <div>
                    <div class="movie_title">${el.Title}</div>
                    <div class="movie_year">Год выпуска: ${el.Year}</div>
                    <div class="movie_id">imdbID: ${el.imdbID}</div>
                    <div class="movie_type">Тип: ${el.Type}</div>
                </div>
                <a href="/detail.html?id=${el.imdbID}" id="details" class="film_details">Подробности</a>
                </div>
                <div class="bookmark_wrap">
                    <label>
                        <div class="new_checkbox"></div>
                    </label>
                </div>
            </div>
            `

            contentDiv.append(div);

            const check = div.getElementsByClassName('bookmark_wrap')[0];

            check.addEventListener('click', () => {
                Storage.isLocalStorageHas(el.imdbID)
                    ? Storage.removeFromLocalStorage(el.imdbID)
                    : Storage.addToLocalStorage(el.imdbID, el);
            });

        });

        let total = data.totalResults;
        new Paginator(total, search);
    }

    notFound() {
        let div = document.createElement('div');
        div.className = 'not-found'
        div.innerHTML = 'К сожалению, по вашему запросу ничего не найдено. Попробуйте изменить запрос.';
        contentDiv.append(div);
    }

}