const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'candyuser',
  password: 'candypass'
});

async function asyncFunction() {
  let conn;
  try {
    conn = await SecurityPolicyViolationEvent.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows);
    const res = await  conn.query("SELECT * FROM candy;");
    console.log(res);
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}


// log that server is up
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'Express Backend is Connected to React'});
});
