const { conn } = require('../db');

async function create(data) {
  const sql = `
  INSERT INTO
    flags (nameFlag, imageFlag, imageShiny)
  VALUES
    (?, ?, ?)
  `;

  const db = await conn();

  const { nameFlag, imageFlag, imageShiny } = data;

  const { lastID } = await db.run(sql, [nameFlag, imageFlag, imageShiny]);

  return lastID;
}

async function readAll() {
  const sql = `
    SELECT
      *
    FROM
      flags
  `;

  const db = await conn();

  const foods = await db.all(sql);

  return foods;
}

module.exports = { create, readAll };
