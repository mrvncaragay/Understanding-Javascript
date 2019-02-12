import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Like';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
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
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));

        } catch(error) {
            alert('Error processing recipe!');
        }

    }
};

// EVENT DELEGATION

//window.addEventListener('hashchange', controlRecipe);
//window.addEventListener('load', controlRecipe);
// OR
['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/**
*
*     List Controller
*
**/

const controlList = () => {
    //create new list IF there is none yet
    if (!state.list) state.list = new List();

    //add each ingredient to the list
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });

};

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //handle delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')) {
        //Delete from state
        state.list.deleteItem(id);

        // Delete from UI
        listView.deleteItem(id);

    //handle count update
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);
        console.log(state.list);

    }
});

/**
 *
 *     Like Controller
 *
 **/

//for Testing
state.likes = new Likes();
likesView.toggleLikeMenu(state.likes.getNumLikes());


const controlLike = () => {

    if (!state.likes) state.likes = new Likes();
    const currentId = state.recipe.id;

    //User has not like current recipe
    if (!state.likes.isLiked(currentId)) {
        //add like to the state
        const newLike = state.likes.addLike(
            currentId,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        //toggle the like button
        likesView.toggleLikeBtn(true);

        //add like to the UI list
        likesView.renderLikes(newLike);

        //User has like current recipe
    } else {
        //remove like to the state
        state.likes.deleteLike(currentId);

        //toggle the like button
        likesView.toggleLikeBtn(false);


        //remove like to the UI list
        likesView.deleteLiked(currentId);
    }

    likesView.toggleLikeMenu(state.likes.getNumLikes());
};



// handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn-decrease *')) {
        //Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        //Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {

        //add ingredients to the shopping list
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')){

        //Like controller
        controlLike();
    }
});

