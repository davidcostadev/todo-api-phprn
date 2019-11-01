const faker = require('faker');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('tasks', [
      {
        title: faker.lorem.words(),
        description: faker.lorem.sentences(),
        is_completed: faker.random.boolean(),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    queryInterface.bulkDelete('tasks');
  },
};
