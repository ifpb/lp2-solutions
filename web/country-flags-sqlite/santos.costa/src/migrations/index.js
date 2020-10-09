const { conn } = require('../db');

async function up() {
  const sql = `
    CREATE TABLE IF NOT EXISTS flags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nameFlag TEXT,
      imageFlag TEXT,
      imageShiny TEXT
    )
  `;

  const db = await conn();

  await db.run(sql);
}

async function down() {
  const sql = `DROP TABLE flags`;

  const db = await conn();

  await db.run(sql);
}

module.exports = { up, down };