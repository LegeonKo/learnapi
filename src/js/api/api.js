const apiUrl = 'http://www.omdbapi.com/?apikey=c7b67e5';

class Api {

    async getByTitle(s) {
        let response = await fetch(`${apiUrl}&s=${s}`)
        return await response.json();
    }
    
    async getDetails(i) {
        let response = await fetch(`${apiUrl}&i=${i}`)
        return await response.json();
    }
 
}

export {
    Api
}