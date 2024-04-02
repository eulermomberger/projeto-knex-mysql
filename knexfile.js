require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      host: process.env.PG_HOST,
      port: process.env.PG_PORT,
      user: process.env.PG_USER,
      database: process.env.PG_DATABASE,
      password: process.env.PG_PASSWORD,
      ssl: process.env.PG_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
