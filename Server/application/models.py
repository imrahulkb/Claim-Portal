from . import db

# USE claims;

# CREATE TABLE claim (
#   name varchar(255) NOT NULL,
#   phone varchar(15) NOT NULL,
#   email varchar(255) NOT NULL,
#   ieeeMembership varchar(255) NOT NULL,
#   claimType varchar(255) NOT NULL,
#   eventName varchar(255) NOT NULL,
#   eventDate date NOT NULL,
#   lessAdvanceExpense int NOT NULL,
#   totalExpense int NOT NULL,
#   status Enum('pending', 'approved', 'rejected') NOT NULL,
#   accountName varchar(255) NOT NULL,
#   accountNumber varchar(255) NOT NULL,
#   bankName varchar(255) NOT NULL,
#   branchName varchar(255) NOT NULL,
#   ifscCode varchar(11) NOT NULL,
#   PRIMARY KEY (id)
# );

# CREATE TABLE expense (
#   id int NOT NULL AUTO_INCREMENT,
#   claim_id int NOT NULL,
#   item varchar(255) NOT NULL,
#   amount int NOT NULL,
#   doc_url varchar(255) NOT NULL,
#   PRIMARY KEY (id),
#   FOREIGN KEY (claim_id) REFERENCES claim(id)
# );


# DO NOT MODIFY THIS FILE unless you're using an empty test database during development

CLAIM_TYPES = [
    'Expense',
    'Advance',
    'Award of Honorarium',
    'Conference Deposit',
    'Student Bracnch Rebate'
]

CLAIM_STATUS = [
    'pending',
    'approved',
    'rejected'
]


class Claim(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    phone = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    ieeeMembership = db.Column(db.String(32), nullable=False)
    claimType = db.Column(db.Enum(*CLAIM_TYPES), nullable=False)
    claimDate = db.Column(db.Date, nullable=False)
    eventName = db.Column(db.String(255), nullable=False)
    eventDate = db.Column(db.Date, nullable=False)
    lessAdvanceExpense = db.Column(db.Integer, nullable=False)
    totalExpense = db.Column(db.Integer, nullable=False)
    status = db.Column(db.Enum(*CLAIM_STATUS), nullable=False)
    accountName = db.Column(db.String(255), nullable=False)
    accountNumber = db.Column(db.String(255), nullable=False)
    bankName = db.Column(db.String(255), nullable=False)
    branchName = db.Column(db.String(255), nullable=False)
    ifscCode = db.Column(db.String(11), nullable=False)

    def __repr__(self):
        return f"Claim('{self.id}', '{self.name}', '{self.phone}', '{self.email}', '{self.ieeeMembership}', '{self.claimType}', '{self.eventName}', '{self.eventDate}', '{self.lessAdvanceExpense}', '{self.totalExpense}', '{self.status}', '{self.accountName}', '{self.accountNumber}', '{self.bankName}', '{self.branchName}', '{self.ifscCode}')"

    def to_json_without_particulars(self):
        return {
            'id': self.id,
            'name': self.name,
            'phone': self.phone,
            'email': self.email,
            'ieeeMembership': self.ieeeMembership,
            'claimType': self.claimType,
            'eventName': self.eventName,
            'eventDate': self.eventDate,
            'lessAdvanceExpense': self.lessAdvanceExpense,
            'totalExpense': self.totalExpense,
            'status': self.status,
            'accountName': self.accountName,
            'accountNumber': self.accountNumber,
            'bankName': self.bankName,
            'branchName': self.branchName,
            'ifscCode': self.ifscCode,
        }

    def get_particulars(self):
        if self.claimType == 'Expense':
            return Expense.query.filter_by(claim_id=self.id).all()
        elif self.claimType == 'Advance':
            return Advance.query.filter_by(claim_id=self.id).first()
        elif self.claimType == 'Award of Honorarium':
            return Honorarium.query.filter_by(claim_id=self.id).first()
        elif self.claimType == 'Conference Deposit':
            return ConferenceDeposit.query.filter_by(claim_id=self.id).first()
        elif self.claimType == 'Student Bracnch Rebate':
            return StudentBranchRebate.query.filter_by(claim_id=self.id).first()
        else:
            raise Exception('Invalid claim type')
        
    def to_json(self):
        return {
            **self.to_json_without_particulars(),
            'particulars': [p.to_json() for p in self.get_particulars()]
        }

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    claim_id = db.Column(db.Integer, db.ForeignKey('claim.id'), nullable=False)
    item_name = db.Column(db.String(255), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    doc_url = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f"Expense('{self.id}', '{self.claim_id}', '{self.item_name}', '{self.amount}', '{self.doc_url}')"

    def to_json(self):
        return {
            'id': self.id,
            'claim_id': self.claim_id,
            'item': self.item_name,
            'amount': self.amount,
            'doc_url': self.doc_url
        }


# class Advance(db.Model):
#     # TODO: Add fields
#     pass


# class Honorarium(db.Model):
#     # TODO: Add fields
#     pass


# class ConferenceDeposit(db.Model):
#     # TODO: Add fields
#     pass


# class StudentBranchRebate(db.Model):
#     # TODO: Add fields
#     pass
