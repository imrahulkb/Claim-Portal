const { createPool } = require("mysql");

const pool = createPool({
  port: process.env.DB_PORT || 3306,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "lox",
  password: process.env.DB_PASS || "12345678",
  database: process.env.MYSQL_DB || "claims",
  connectionLimit: 10
})

const claim_status = {
  pending: 'pending',
  approved: 'approved',
  rejected: 'rejected'
}
function addClaim({ claim, expenses }) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected!");
    connection.beginTransaction(err => {if (err) throw err;});
    connection.query("INSERT INTO claim SET ?", claim, (err, result) => {
      if (err) {
        return connection.rollback(() => {
          throw err;
        });
      }
      const claimId = result.insertId;
      expenses.forEach(expense => {
        expense.claim_id = claimId;
      });
      connection.query("INSERT INTO expenses SET ?", expenses, (err, result) => {
        if (err) {
          return connection.rollback(() => {
            throw err;
          });
        }
        connection.commit(err => {
          if (err) {
            return connection.rollback(() => {
              throw err;
            });
          }
          console.log("Success!");
        });
      });
    });
  });
}

module.exports = {
  addClaim,
  claim_status
}