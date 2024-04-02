require('dotenv').config();
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig[process.env.environment] || knexConfig.development);

module.exports = db;
