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

function addClaim(claim, expenses) {
  console.log(claim, expenses)
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("Connected!");
    connection.beginTransaction(err => { if (err) throw err; });
    connection.query(`INSERT INTO claim (
      name,         phone,      email,        ieeeMembership, 
      claimType,    eventName,  eventDate,    lessAdvanceExpense, 
      totalExpense, status,     accountName,  accountNumber, 
      bankName,     branchName, ifscCode)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
      claim.name, claim.phone, claim.email, claim.ieeeMembership,
      claim.claimType, claim.eventName, claim.eventDate, claim.lessAdvanceExpense,
      claim.totalExpense, claim.status, claim.accountName, claim.accountNumber,
      claim.bankName, claim.branchName, claim.ifscCode], (err, result) => {
        if (err) {
          return connection.rollback(() => {
            throw err;
          });
        }
        const claimId = result.insertId;
        connection.query(`INSERT INTO 
        expense(claim_id, item, amount, doc_url) 
        VALUES ?`, [expenses.map(expense => [claimId, expense.item, expense.amount, expense.doc_url])], (err, result) => {
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
            console.log('Transaction Complete.');
            connection.release();
          });
        });
      });
  });
}
function getExpenses(claimId) {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM expense WHERE claim_id = ?`, [claimId], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

function getClaims() {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM claim`, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}


function updateClaimStatus(claimId, status) {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE claim SET status = ? WHERE id = ?`, [status, claimId], (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
}

module.exports = {
  addClaim,
  claim_status,
  getClaims,
  getExpenses,
  updateClaimStatus
}