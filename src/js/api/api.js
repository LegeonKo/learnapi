const apiUrl = 'http://www.omdbapi.com/?apikey=c7b67e5';

class Api {

    async getByTitle(s, p) {

/*        const data = JSON.parse('{"Search":[{"Title":"Men in Black","Year":"1997","imdbID":"tt0119654","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTlhYTVkMDktYzIyNC00NzlkLTlmN2ItOGEyMWQ4OTA2NDdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Men in Black II","Year":"2002","imdbID":"tt0120912","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxNDA0NTMxMV5BMl5BanBnXkFtZTYwMDE2NzY2._V1_SX300.jpg"},{"Title":"Men in Black 3","Year":"2012","imdbID":"tt1409024","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU2NTYxODcwMF5BMl5BanBnXkFtZTcwNDk1NDY0Nw@@._V1_SX300.jpg"},{"Title":"Men in Black: International","Year":"2019","imdbID":"tt2283336","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDZkODI2ZGItYTY5Yi00MTA4LWExY2ItM2ZmNjczYjM0NDg1XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"},{"Title":"Men in Black: The Series","Year":"1997–2001","imdbID":"tt0127385","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BYTQ5ZmY5N2EtMDkyOC00NTE3LThiZDQtNzAwNDVmMDZhNzRkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg"},{"Title":"Men in Black Alien Attack","Year":"2000","imdbID":"tt0243413","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTljNTlhZDktYjU3Yi00NmE5LTg1ZGQtOGYzODU5ZjIyMTdjXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"},{"Title":"Men in Black","Year":"1934","imdbID":"tt0025488","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDYxODcwN2ItMjU2Yy00NDJhLTgzNTQtOGNhN2YyYmZkZWM5XkEyXkFqcGdeQXVyMDMxMjQwMw@@._V1_SX300.jpg"},{"Title":"Men Suddenly in Black","Year":"2003","imdbID":"tt0380291","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTgxMTcxNzQwMV5BMl5BanBnXkFtZTcwNzg1NzYyMQ@@._V1_SX300.jpg"},{"Title":"Men Suddenly in Black 2","Year":"2006","imdbID":"tt0860387","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNjEzOTAzMjE3M15BMl5BanBnXkFtZTcwMjI1MjY0MQ@@._V1_SX300.jpg"},{"Title":"Who Saw the Men in Black","Year":"2021","imdbID":"tt16051820","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYjAyNGU1MzItZDhiMC00Mzk4LThkMWYtYmY2YzdlOGEwZmMyXkEyXkFqcGdeQXVyNjQ0NjUzNTY@._V1_SX300.jpg"}],"totalResults":"38","Response":"True"}')
        return data;*/

        let response = await fetch(`${apiUrl}&s=${s}&page=${p}`);
        return await response.json();
    }

    async getDetails(i) {
        let response = await fetch(`${apiUrl}&i=${i}`);
        return await response.json();
    }

}

export {
    Api
}