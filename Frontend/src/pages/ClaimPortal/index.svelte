<script>
    let name = "";
    let email = "";
    let phoneNumber = "";
    let ieeeMembership = "";
    let subject = "";
  const subjects = [
    "Expense Claim",
    "Advance Claim",
    "Award Of Honorium",
    "Conference Deposit",
    "Student Branch Rebate"
  ];
  let bankName = "";
  let branchName = "";
  let ifscCode = "";
  let accountNumber = "";
  let accountName = "";

  let eventName = "";
  let eventDate = "";
  let lessAdvanceExpense = 0;
  let expenses = [
    { srNo: 1, particulars: "Travelling and Expenses", amount: 0, document: null },
    { srNo: 2, particulars: "Food and Beverages", amount: 0, document: null },
    { srNo: 3, particulars: "Lodging and Boarding", amount: 0, document: null },
    { srNo: 4, particulars: "Printing Stationary & consumables", amount: 0, document: null },
    { srNo: 5, particulars: "Miscellaneous", amount: 0, document: null },
    { srNo: 6, particulars: "Anyother:", amount: 0, document: null },
  ];

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += expenses[i].amount;
    }
    return total;
  }

  $: totalAmount = calculateTotal() - lessAdvanceExpense;
  </script>
  
  <div class="container">
    <form>
      <div class="form-group">
        <label for="nameInput">Name</label>
        <input type="text" class="form-control" id="nameInput" style="max-width: 300px" bind:value={name} />
      </div>
      <div class="form-group">
        <label for="emailInput">Email address</label>
        <input type="email" class="form-control" id="emailInput" style="max-width: 300px" bind:value={email} />
      </div>
      <div class="form-group">
        <label for="phoneInput">Phone Number</label>
        <input type="tel" class="form-control" id="phoneInput" style="max-width: 300px" bind:value={phoneNumber} />
      </div>
      <div class="form-group">
        <label for="ieeemembershipInput">Phone Number</label>
        <input type="number" class="form-control" id="ieeemembershipInput" style="max-width: 300px" bind:value={ieeeMembership} />
      </div>
      <label for="subjectSelect">What is the subject you are claiming for?</label>
      <select class="form-select" id="subjectSelect" style="max-width: 300px" bind:value={subject}>
        {#each subjects as option}
          <option value={option}>{option}</option>
        {/each}
      </select>
      <div class="container">
        <div class="form-group">
          <label for="bankNameInput">Bank Name</label>
          <input type="text" class="form-control" id="bankNameInput" style="max-width: 300px" bind:value={bankName} />
        </div>
        <div class="form-group">
          <label for="branchNameInput">Branch Name</label>
          <input type="text" class="form-control" id="branchNameInput" style="max-width: 300px" bind:value={branchName} />
        </div>
        <div class="form-group">
          <label for="ifscCodeInput">IFSC Code</label>
          <input type="text" class="form-control" id="ifscCodeInput" style="max-width: 300px" bind:value={ifscCode} />
        </div>
        <div class="form-group">
          <label for="accountNumberInput">Account Number</label>
          <input type="text" class="form-control" id="accountNumberInput" style="max-width: 300px" bind:value={accountNumber} />
        </div>
        <div class="form-group">
          <label for="accountNameInput">Account Name</label>
          <input type="text" class="form-control" id="accountNameInput" style="max-width: 300px" bind:value={accountName} />
        </div>
      </div>

      <h2>Event Details</h2>

<div class="form-group">
  <label for="eventNameInput">Event Name</label>
  <input type="text" class="form-control" id="eventNameInput" bind:value={eventName} />
</div>

<div class="form-group">
  <label for="eventDateInput">Event Date</label>
  <input type="date" class="form-control" id="eventDateInput" bind:value={eventDate} />
</div>

<h3>Expenses</h3>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Expense Particulars</th>
      <th scope="col">Amount</th>
      <th scope="col">Document Upload</th>
    </tr>
  </thead>
  <tbody>
    {#each expenses as expense}
      <tr>
        <th scope="row">{expense.srNo}</th>
        <th scope="row">{expense.particulars}</th>
        <td><input type="number" class="form-control" bind:value={expense.amount} /></td>
        <td><input type="file" class="form-control" bind:files={expense.document} /></td>
      </tr>
    {/each}
  </tbody>
  <tfoot>
    <tr>
      <th colspan="2" class="text-end">Total</th>
      <td><strong>{calculateTotal()}</strong></td>
      <td></td>
    </tr>
  </tfoot>
</table>

<div class="form-group">
  <label for="lessAdvanceExpenseInput">Less Advance Expense</label>
  <input type="number" class="form-control" id="lessAdvanceExpenseInput" bind:value={lessAdvanceExpense} />
</div>

<div class="form-group">
  <label for="grossAmountInput">Gross Amount</label>
  <input type="number" class="form-control" id="grossAmountInput" value={totalAmount} readonly />
</div>
      <button type="submit" class="btn btn-primary" style="margin-top: 30px;">Submit</button>
    </form>
  </div>
  
  <style>
    label{
        margin-top: 10px;
    }
  </style>
  