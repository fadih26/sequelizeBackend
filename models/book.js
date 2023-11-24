import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsToMany(models.CategoryModel, { through: 'BookCategories' });
      Book.belongsTo(models.AuthorModel);
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    authorId: DataTypes.INTEGER // Foreign key
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};