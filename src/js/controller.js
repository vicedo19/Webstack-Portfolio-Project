import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function() {
  // Loading Recipe
  try {
    const id = window.location.hash.slice(1);

    if(!id) return;

    recipeView.renderSpinner();
    
    // 1. Load Recipe
    await model.loadRecipe(id);

    // 2. Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function() {
  try {
    resultsView.renderSpinner();
    // Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // Load Search result
    await model.loadSearchResults(query);

    // Render result
    resultsView.render(model.getSearchResultsPage(1));

    // Render initial pagination
    paginationView.render(model.state.search)

  } catch (err) {
    console.log(err);
  }
};

const init = function() {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
}

init();