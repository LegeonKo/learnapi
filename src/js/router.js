import {DetailPage} from '/js/details/details.js';
import {UserInterface} from "./user-interface/UserInterface.js";


let route = new URL(window.location.href);
let details = new DetailPage();
let ui = new UserInterface();
let search = route.searchParams.get('s');
let page = route.searchParams.get('p');
let id;


switch (route.pathname) {

    case '/detail.html':
        id = route.searchParams.get('id')
        details.filmDetails(id);
        break;

    default:
        if (search) {
            ui.setSearchForm(search, page);
        }

}

