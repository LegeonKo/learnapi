const contentDiv = document.querySelector(".content");

export class FilmContent {

    constructor() {




    }

    apply(item) {

        item.forEach((el) => {

            let div = document.createElement('div')
            div.className = "film_wrap";
            div.innerHTML = `
            <div class="content_wrap">
                <div class="img_wrap"><img class="movie_img"
                                               src="${el.Poster}">
                </div>
                <div class="text_wrap">
                    <div class="movie_title">Название: ${el.Title}</div>
                    <div class="movie_year">Год выпуска: ${el.Year}</div>
                    <div class="movie_id">imdbID: ${el.imdbID}</div>
                    <div class="movie_type">Тип: ${el.Type}</div>
                </div>
            </div>`

            contentDiv.append(div);
        });


    }

}