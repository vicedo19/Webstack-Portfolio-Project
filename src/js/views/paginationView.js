import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numpages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    console.log(numpages);

    // Page 1 and there are other pages
    if (curPage === 1 && numpages > 1) {
        return `
            <button class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
        `;
    }

    // last page
    if (curPage === numpages && numpages > 1) {
        return `
            <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
        `
    }

    // Other pages
    if (curPage < numpages) {
        return `
            <button class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            <button class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
        `
    }

    // Page 1, and there are no other pages
    return '';
  }
}

export default new PaginationView();