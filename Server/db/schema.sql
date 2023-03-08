USE DATABASE claims;

CREATE TABLE claim (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  phone varchar(15) NOT NULL,
  email varchar(255) NOT NULL,
  memNo varchar(255) NOT NULL,
  claim_type varchar(255) NOT NULL,
  bank_ac_name varchar(255) NOT NULL,
  bank_ac_no varchar(255) NOT NULL,
  bank_name varchar(255) NOT NULL,
  bank_ifsc varchar(11) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE particulars (
  id int NOT NULL AUTO_INCREMENT,
  claim_id int NOT NULL,
  item varchar(255) NOT NULL,
  price int NOT NULL,
  quantity float NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (claim_id) REFERENCES claim(id)
);