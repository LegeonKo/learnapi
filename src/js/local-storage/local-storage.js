export class LocalStorage {

    isLocalStorageHas(id) {
        return localStorage.getItem(id)
    }

    addToLocalStorage(id, el) {
        localStorage.setItem(id, JSON.stringify(el));
    }

    removeFromLocalStorage(id) {
        localStorage.removeItem(id);
    }

}