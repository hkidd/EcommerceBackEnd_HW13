// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category)

// Categories have many Products
Category.hasMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
  },
  // Define an alias for when data is retrieved
  as: 'ProductTags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
  },
  // Define an alias for when data is retrieved
  as: 'TagsForProducts'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};