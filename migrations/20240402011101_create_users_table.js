exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique();
    table.timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
