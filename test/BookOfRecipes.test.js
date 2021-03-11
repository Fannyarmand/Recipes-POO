const { describe, it } = require('mocha');
const { expect } = require('chai');

const BookOfRecipes = require("../src/BookOfRecipes");
const Recipe = require("../src/Recipe");

describe('book of recipes', () => {
  it('should create a book', () => {
    const dessertBook = new BookOfRecipes();
    expect(dessertBook).to.be.an('object');
  });

  it('should create a book with a title', () => {
    const expectedTitle = 'dessert';
    const dessertBook = new BookOfRecipes(expectedTitle);

    expect(dessertBook.getTitle()).to.be.equal(expectedTitle);
  });

  it('should update the book title', () => {
    const expectedTitle = 'dessert';
    const dessertBook = new BookOfRecipes();

    dessertBook.setTitle(expectedTitle);

    expect(dessertBook.getTitle()).to.be.equal(expectedTitle);
  });

  it('should create a book with no recipe', () => {
    const dessertBook = new BookOfRecipes();

    expect(dessertBook.getRecipesCount()).to.be.equal(0);
  });

  it('should add recipe to the book', () => {
    const dessertBook = new BookOfRecipes();
    const rhubarbPie = new Recipe();

    dessertBook.addRecipe(rhubarbPie);

    expect(dessertBook.getRecipesCount()).to.be.equal(1);
  });

  it('should add recipes to the book', () => {
    const dessertBook = new BookOfRecipes();
    const rhubarbPie = new Recipe();
    const raspberryMousse = new Recipe();

    dessertBook.addRecipe(rhubarbPie);
    dessertBook.addRecipe(raspberryMousse);

    expect(dessertBook.getRecipesCount()).to.be.equal(2);
  });

  it('should remove a recipe from the book', () => {
    const dessertBook = new BookOfRecipes();
    const rhubarbPie = new Recipe();

    dessertBook.addRecipe(rhubarbPie);
    dessertBook.removeRecipe(rhubarbPie);

    expect(dessertBook.getRecipesCount()).to.be.equal(0);
  });

  it('should remove a specific recipe from the book', () => {
    const dessertBook = new BookOfRecipes();
    const rhubarbPie = new Recipe();
    const raspberryMousse = new Recipe();

    dessertBook.addRecipe(rhubarbPie);
    dessertBook.addRecipe(raspberryMousse);
    dessertBook.removeRecipe(rhubarbPie);

    expect(dessertBook.getRecipesCount()).to.be.equal(1);
  });
});



