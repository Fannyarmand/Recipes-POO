class Recipe {
  /**
   * constructor
   * @param { string } title
   */
  constructor(title) {
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
   * setTitle
   * @param { string } title
   */
  setTitle(title) {
    this.title = title;
  }
}

module.exports = Recipe;