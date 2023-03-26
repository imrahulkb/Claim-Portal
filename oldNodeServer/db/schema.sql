USE claims;

CREATE TABLE claim (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  phone varchar(15) NOT NULL,
  email varchar(255) NOT NULL,
  ieeeMembership varchar(255) NOT NULL,
  claimType varchar(255) NOT NULL,
  eventName varchar(255) NOT NULL,
  eventDate date NOT NULL,
  lessAdvanceExpense int NOT NULL,
  totalExpense int NOT NULL,
  status Enum('pending', 'approved', 'rejected') NOT NULL,
  accountName varchar(255) NOT NULL,
  accountNumber varchar(255) NOT NULL,
  bankName varchar(255) NOT NULL,
  branchName varchar(255) NOT NULL,
  ifscCode varchar(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE expense (
  id int NOT NULL AUTO_INCREMENT,
  claim_id int NOT NULL,
  item varchar(255) NOT NULL,
  amount int NOT NULL,
  doc_url varchar(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (claim_id) REFERENCES claim(id)
);