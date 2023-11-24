var faker = require('@faker-js/faker').faker;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const books = Array.from({ length: 20 }).map(() => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
      authorId: faker.number.int({ min: 1, max: 10 }), // Assuming 10 authors
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Books', books, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};