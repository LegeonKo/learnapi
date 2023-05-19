import { Api } from '/js/api/api.js'
let api = new Api();

const detailsDiv = document.querySelector(".details_content");
let url = new URL(window.location.href).origin;

export class DetailPage {

    constructor() {

    }

    async filmDetails(id) {
        let result = await api.getDetails(id);

        let div = document.createElement('div');
        div.className = "details_wrap"
        div.innerHTML = `
        <div class="content_wrap">
            <div class="img_wrap">
            <img class="movie_img" src="${result.Poster}">
            </div>
            <div class="text_wrap">
                <div class="movie_title">${result.Title}</div>
                <div class="movie_year">Дата выхода: ${result.Released}</div>
                <div>Актёры: ${result.Actors}</div>
                <div>Страна: ${result.Country}</div>
                <div>Возрастные ограничения: ${result.Rated}</div>
                <div>Жанр: ${result.Genre}</div>
                <div>Язык: ${result.Language}</div>
                <div>Рейтинг imDB: ${result.imdbRating}</div>
                <div>Режиссер: ${result.Director}</div>
                <div>Награды: ${result.Awards}</div>
                <div>Кассовые сборы: ${result.BoxOffice}</div>
                <div>DVD: ${result.DVD}</div>
                <div>Автор сценария: ${result.Writer}</div>
                <div>Длительность: ${result.Runtime}</div>
                <div class="movie_id">imdbID: ${result.imdbID}</div>
                <div class="movie_type">Тип: ${result.Type}</div>
            </div>
            <button class="go-back" id="go-back">Назад</button>
            <div class="bookmark_wrap">
                <label>
                    <input type="checkbox" name="" id="" class="custom_checkbox">
                    <div class="new_checkbox"></div>
                </label>
            </div>
        </div>            
        `
        detailsDiv.append(div);


        const goBack = document.getElementById("go-back");
        goBack.addEventListener("click", () => {

            if (document.referrer.includes(url)){
                return history.back();

            } else {
                window.location.replace(url);
            }

        });
    }

}