const Database = require('better-sqlite3');
const db = new Database('../db/database.db', { verbose: console.log });

const createTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `;
  db.exec(query);
};

createTable();

module.exports = db; 