const { conn } = require('../db');

async function create(data) {
  const sql = `
  INSERT INTO
    flags (id, image, name)
  VALUES
    (?, ?, ?)
  `;

  const db = await conn();

  const { id, image, name } = data;

  const { lastID } = await db.run(sql, [id, image, name]);

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

  const flags = await db.all(sql);

  return flags;
}

async function readById(id) {
  const sql = `
    SELECT
      *
    FROM
      flags
    WHERE
      id = '${id}'
  `;

  const db = await conn();

  const flag = await db.all(sql);

  return flag[0]; 
}

module.exports = { create, readAll, readById };
