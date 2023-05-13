import { DetailPage } from '/js/details/details.js';

let route = new URL(window.location.href);

switch (route.pathname) {
    case '/detail.html':
        // new DetailPage(route.searchParams.get('id'));
        break;
    default:
        console.log('go home bitch')
}

