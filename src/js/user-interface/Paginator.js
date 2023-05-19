const pagesCountWrap = document.querySelector(".pages_count");
const totalPages = document.querySelector(".total-pages");


export class Paginator {

    constructor(total, search) {

        let counter = this.pagesCounter(total);
        let tags = this.createPagesCountTags(counter);
        let items = this.addPagesCountContent(tags, search);

        this.showPagesCount(items, search);
    }

    showPagesCount(pagesCountContent) {
        this.showPagesBar();

        pagesCountContent.forEach(el => {
            pagesCountWrap.append(el);
        });

    }

    addPagesCountContent(tags, search) {
        let i = 1;

        tags.forEach(el => {
            el.href = `/?p=${i}&s=${search}`;
            el.innerText = `${i}`;
            i++;
        });

        return tags;
    }

    createPagesCountTags(counter) {
        let pagesCount = [];

        for (let i = 1; i <= counter; i++) {
            pagesCount.push(document.createElement('a'));
        }

        return pagesCount;
    }

    pagesCounter(total) {
        this.clearCounter();

        return Math.ceil(total / 10);
    }

    clearCounter() {
        pagesCountWrap.innerHTML = "";
    }

    showPagesBar() {
        totalPages.style.display = "block";
    }
}