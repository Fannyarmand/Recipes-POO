const { describe, it } = require('mocha');
const { expect } = require('chai');

const Recipe = require("../src/Recipe");

describe('recipe', () => {
  it('should create a recipe', () => {
    const lasagnaRecipe = new Recipe();
    expect(lasagnaRecipe).to.be.an('object');
  });

  it('should create a recipe with a title', () => {
    const expectedTitle = 'lasagna';
    const lasagnaRecipe = new Recipe(expectedTitle);

    expect(lasagnaRecipe.getTitle()).to.be.equal(expectedTitle);
  });

  it('should update the recipe title', () => {
    const expectedTitle = 'lasagna';
    const lasagnaRecipe = new Recipe();

    lasagnaRecipe.setTitle(expectedTitle);

    expect(lasagnaRecipe.getTitle()).to.be.equal(expectedTitle);
  });
});



