import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';



/*
    Global State of the app
       -Search Object
       -Current recipe Object
       -Shopping list object
       -Linked Recipes
 */
const state = {};

//event for search submit

const controlSearch = async () => {
    // - get query text from the view
    const query = searchView.getInput(); //TODO

    if (query) {
        // - New search object and add to state
        state.search = new Search(query);

        // - Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // - Search for recipes
        await state.search.getResult();

        // - Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
};


elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();

    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    };
});