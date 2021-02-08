const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: String,
  level: String,
  ingredients: [String],
  cuisine: String,
  dishType: String,
  image: { type: String, Default: "https://images.media-allrecipes.com/images/75131.jpg" },
  duration: { type: Number, value: 0 },
  creator: String,
  created: { type: Date, default: Date.now }
});

const Recipe = mongoose.model('Recipe', recipeSchema);


const userSchema = new Schema({ name: String })
const User = mongoose.model('Recipe', recipeSchema);

User.createCollection().then(function (collection) {
  console.log(Recipe.model.title);

});




module.exports = Recipe;
