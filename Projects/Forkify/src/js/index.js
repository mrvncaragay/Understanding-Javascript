import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
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

        try {
            // - Search for recipes
            await state.search.getResult();

            // - Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);

        } catch(error) {
            alert('Something wrong with the search....')
        }

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
    }
});


// Recipe Controller

const controlRecipe = async () => {
    // Get ID from the URL
    const id = window.location.hash.replace('#', '');

    if(id) {
        //Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        //Highlight selected search item
        if (state.search) searchView.highLightSelected(id);

        //Create new recipe
        state.recipe = new Recipe(id);

        try {
            //get recipe data and parse ingredient
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            //calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            //render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);

        } catch(error) {
            alert('Error processing recipe!');
        }

    }
};

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);
// OR
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));