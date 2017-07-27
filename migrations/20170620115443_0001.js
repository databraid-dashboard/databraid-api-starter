exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary().notNull();
  table.string('name').notNull();
});

exports.down = knex => knex.schema.dropTable('users');
