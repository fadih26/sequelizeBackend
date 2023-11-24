'use strict';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      // Define association here
      Author.hasMany(models.BookModel,{
        foreignKey: 'authorId', 
        onDelete: 'CASCADE',  
        onUpdate: 'CASCADE'   
      });
    }
  }

  Author.init({
    name: DataTypes.STRING,
    // other fields
  }, {
    sequelize,
    modelName: 'Author',
  });

  return Author;
};