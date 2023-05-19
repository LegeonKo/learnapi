const apiUrl = 'http://www.omdbapi.com/?apikey=c7b67e5';

export class Api {

    async getByTitle(s, p) {

        let response = await fetch(`${apiUrl}&s=${s}&page=${p}`);
        return await response.json();
    }

    async getDetails(i) {
        let response = await fetch(`${apiUrl}&i=${i}`);
        return await response.json();
    }

}


