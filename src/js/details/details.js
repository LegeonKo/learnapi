import { Api } from '/js/api/api.js'
let api = new Api();
export class DetailPage {
    

    constructor(id) {

        console.log(
            api.getDetails(id)
        );
        
    }
}