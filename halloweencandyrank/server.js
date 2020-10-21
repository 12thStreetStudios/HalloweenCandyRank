const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mariadb = require('mariadb');
// creates a pool so that multiple requests can happen
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'candyuser',
  password: 'candypass',
  database: 'sc_candy'
});

async function executeSql(stmt) {
  let conn;
  let res;
  try {
    conn = await pool.getConnection();
    res = await  conn.query(stmt);
    console.log("Executing statement: "+stmt);
  } catch (err) {
    console.log(err);
  } finally {
    if (conn) {conn.end();}
    console.log(res);
    return JSON.parse(JSON.stringify(res));
  }
}

// log that server is up
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

// create a GET route
app.get('/candies/', (req, res) => {
 	executeSql("SELECT * FROM candy;").then((s) => res.send(s));
});

// create a POST route for voting
app.post('/vote/', (req, res) => {
  console.log("Logging Vote...");
  const s = executeSql(`INSERT INTO vote (winner, loser, time, region) VALUES (${req.body.winner}, ${req.body.loser}, CURRENT_DATE(), ${req.body.region})`);
  if (s){
    res.send("Vote Logged");
  } else {
    res.send("Error");
  }
});
