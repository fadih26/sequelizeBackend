var faker = require('@faker-js/faker').faker;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bookCategories = Array.from({ length: 30 }).map(() => ({
      bookId: faker.number.int({ min: 1, max: 20 }), // Assuming 20 books
      categoryId: faker.number.int({ min: 1, max: 5 }), // Assuming 5 categories
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('bookcategories', bookCategories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bookcategories', null, {});
  }
};