var faker = require('@faker-js/faker').faker;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const authors = Array.from({ length: 10 }).map(() => ({
      name: faker.person.fullName(),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Authors', authors, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Authors', null, {});
  }
};