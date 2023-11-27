import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
import Book from './book.js';
import Category from './category.js';
import Author from './author.js'
import User from './user.js'
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_TYPE,
        port: process.env.DB_PORT
    }
);

const BookModel = Book(sequelize, Sequelize);
const CategoryModel = Category(sequelize, Sequelize);
const AuthorModel = Author(sequelize, Sequelize);
const UserModel = User(sequelize, Sequelize);

  

const db = {
  sequelize,
  Sequelize,
  BookModel,
  CategoryModel,
  AuthorModel,
  UserModel,
};


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }

});
export default db;

  