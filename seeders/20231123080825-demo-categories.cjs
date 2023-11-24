var faker = require('@faker-js/faker').faker;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = Array.from({ length: 5 }).map(() => ({
      name: faker.commerce.department(),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('Categories', categories, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};