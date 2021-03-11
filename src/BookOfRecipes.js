class BookOfRecipes {
  /**
   * constructor
   * @param { string } title
   */
  constructor(title) {
    this.title = title;
    this.recipes = [];
  }

  /**
   * setTitle
   * @param { string } title
   */
  setTitle(title) {
    this.title = title;
  }

  /**
   * getTitle
   * @return { string }
   */
  getTitle() {
    return this.title;
  }

  /**
   * getRecipesCount
   * @return { number }
   */
  getRecipesCount() {
    return this.recipes.length;
  }

  /**
   * addRecipes
   * @param { Recipe } recipe
   */
  addRecipe(recipe) {
    this.recipes.push(recipe);
  }

  /**
   * removeRecipes
   * @param { Recipe } recipe
   */
  removeRecipe(recipe) {
    this.recipes = this.recipes.filter(function(item) {
      return item !== recipe;
    })

  }
}

module.exports = BookOfRecipes;