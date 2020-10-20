const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'candyuser',
  password: 'candypass',
  database: 'sc_candy'
});

async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const res = await  conn.query("SELECT * FROM sc_candy.candy;");
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {conn.end();}
    return conn.res;
  }
}

// log that server is up
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send(asyncFunction());
});
