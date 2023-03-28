from flask import current_app as app
from flask import request
from .models import db, Claim, Expense, Advance, Honorarium, ConferenceDeposit, StudentBranchRebate


@app.route('/api/claims', methods=['GET'])
def get_claims():
    return {'claims': [claim.to_json() for claim in Claim.query.all()]}


@app.route('/api/claims', methods=['POST'])
def create_claim():
    data = request.get_json()

    # get particulars
    particulars = data.pop('particulars')

    # create and add claim to get claim id
    claim = Claim(**data)
    db.session.add(claim)
    db.session.commit()

    assert claim.id is not None # claim id should be set

    # add claim id to particulars and add particulars
    particulars = particulars.map(
        lambda p: p.update({'claim_id': claim.id}).to_json())

    if claim.claimType == 'Expense':
        particulars = particulars.map(lambda p: Expense(**p))
    elif claim.claimType == 'Advance':
        particulars = particulars.map(lambda p: Advance(**p))
    elif claim.claimType == 'Award of Honorarium':
        particulars = particulars.map(lambda p: Honorarium(**p))
    elif claim.claimType == 'Conference Deposit':
        particulars = particulars.map(lambda p: ConferenceDeposit(**p))
    elif claim.claimType == 'Student Bracnch Rebate':
        particulars = particulars.map(lambda p: StudentBranchRebate(**p))
    else:
        raise Exception('Invalid claim type')

    particulars = particulars.map(lambda p: db.session.add(p))

    db.session.commit()

    return {'claim': claim.to_json()}


@app.route('/api/claims/<int:claim_id>', methods=['GET'])
def get_claim(claim_id):
    claim = Claim.query.get(claim_id)
    return {'claim': claim.to_json()}
