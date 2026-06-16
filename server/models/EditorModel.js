const { pool } = require("./pool.js")

async function addOne(name, desc, img, link) {
    await pool.query(`INSERT INTO editors (name, description, img, link)
        VALUES ($1, $2, $3, $4);
    `, [name, desc, img, link])
}

async function getFirstByName(name) {
    const res = await pool.query(`
        SELECT * FROM editors 
            WHERE name = $1;
    `, [name])

    return res.rows[0]
}

async function getAll() {
    const res = await pool.query(`
        SELECT * FROM editors;
    `)

    return res.rows
}

module.exports = {
    addOne,
    getFirstByName,
    getAll
}
