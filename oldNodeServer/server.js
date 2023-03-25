require("dotenv").config()
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { addClaim, claim_status, getClaims, getExpenses } = require('./db/database');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/claim', (req, res) => {
  const { claim, expenses } = req.body;
  claim.applicationDate = 
  claim.totalExpense = expenses.reduce((acc, expense) => acc + expense.amount, 0) - claim.lessAdvanceExpense;
  claim.status = claim_status.pending;
  addClaim(claim, expenses);
  res.send('Claim added');
});

app.get('/claims', (req, res) => {
  getClaims().then(claims => res.send(claims));
});

app.get('/expenses/:claimId', (req, res) => {
  getExpenses(req.params.claimId).then(expenses => res.send(expenses));
});


app.post('/upload', upload.single('file'), (req, res) => {
  // return url to file
  // TODO: this isn't working
  res.send(`http://${host}:${port}/${req.file.path}`);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
