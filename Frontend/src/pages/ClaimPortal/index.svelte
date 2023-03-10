<script>
  let name = "res";
  let email = "rest@em.co";
  let phone = "123";
  let ieeeMembership = "123";
  let claimType = "Expense Claim";
  const claimTypes = [
    "Expense Claim",
    "Advance Claim",
    "Award Of Honorium",
    "Conference Deposit",
    "Student Branch Rebate",
  ];
  let bankName = "boi";
  let branchName = "khamgaon";
  let ifscCode = "123";
  let accountNumber = "987";
  let accountName = "res";

  let eventName = "asd";
  let eventDate = "2021-01-01";
  let lessAdvanceExpense = 100;
  let expenses = [
    {
      srNo: 1,
      item: "Travelling and Expenses",
      amount: 300,
      document: null,
    },
    { srNo: 2, item: "Food and Beverages", amount: 0, document: null },
    { srNo: 3, item: "Lodging and Boarding", amount: 0, document: null },
    {
      srNo: 4,
      item: "Printing Stationary & consumables",
      amount: 200,
      document: null,
    },
    { srNo: 5, item: "Miscellaneous", amount: 0, document: null },
    { srNo: 6, item: "Anyother:", amount: 0, document: null },
  ];

  $: totalAmount =
    expenses.reduce((acc, curr) => acc + curr.amount, 0) - lessAdvanceExpense;

  function getURL(expense) {
    //TODO: uncomment this when backend is ready
    // const formData = new FormData();
    // formData.append("file", expense.document[0]);
    // return fetch("api/upload", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => res.json())
    //   .then((res) => {
    //     expense.url = res.url;
    //   });
    return new Promise((resolve) => {
      setTimeout(() => {
        expense.url = "https://www.google.com";
        resolve();
      }, 30);
    });
  }

  async function handleSubmit() {
    Promise.all(expenses.map(getURL)).then(() => {
      fetch("api/claim", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          claim: {
            name,
            email,
            phone,
            ieeeMembership,
            claimType,
            bankName,
            branchName,
            ifscCode,
            accountNumber,
            accountName,
            eventName,
            eventDate,
            lessAdvanceExpense,
          },
          expenses: expenses.map((expense) => {
            return {
              item: expense.item,
              amount: expense.amount,
              doc_url: expense.url,
            };
          }),
        }),
      });
    });
  }
</script>

<div class="container">
  <h1>Claimant Details</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label for="nameInput">Name</label>
            <input
              type="text"
              class="form-control"
              id="nameInput"
              style="max-width: 300px"
              bind:value={name} />
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="emailInput">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              style="max-width: 300px"
              bind:value={email} />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label for="phoneInput">Phone Number</label>
            <input
              type="tel"
              class="form-control"
              id="phoneInput"
              style="max-width: 300px"
              bind:value={phone} />
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="ieeemembershipInput">IEEE Membership No.</label>
            <input
              type="number"
              class="form-control"
              id="ieeemembershipInput"
              style="max-width: 300px"
              bind:value={ieeeMembership} />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <label for="subjectSelect">
            What is the subject you are claiming for?
          </label>
          <select
            class="form-select"
            id="subjectSelect"
            style="max-width: 300px"
            bind:value={claimType}>
            {#each claimTypes as option}
              <option value={option}>{option}</option>
            {/each}
          </select>
        </div>
        <div class="col-sm">
          <div class="container">
            <div class="form-group">
              <label for="bankNameInput">Bank Name</label>
              <input
                type="text"
                class="form-control"
                id="bankNameInput"
                style="max-width: 300px"
                bind:value={bankName} />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="form-group">
              <label for="branchNameInput">Branch Name</label>
              <input
                type="text"
                class="form-control"
                id="branchNameInput"
                style="max-width: 300px"
                bind:value={branchName} />
            </div>
          </div>
          <div class="col-sm">
            <div class="form-group">
              <label for="ifscCodeInput">IFSC Code</label>
              <input
                type="text"
                class="form-control"
                id="ifscCodeInput"
                style="max-width: 300px"
                bind:value={ifscCode} />
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div class="form-group">
              <label for="accountNumberInput">Account Number</label>
              <input
                type="text"
                class="form-control"
                id="accountNumberInput"
                style="max-width: 300px"
                bind:value={accountNumber} />
            </div>
          </div>
          <div class="col-sm">
            <div class="form-group">
              <label for="accountNameInput">Account Name</label>
              <input
                type="text"
                class="form-control"
                id="accountNameInput"
                style="max-width: 300px"
                bind:value={accountName} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2>Event Details</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label for="eventNameInput">Event Name</label>
            <input
              type="text"
              class="form-control"
              id="eventNameInput"
              bind:value={eventName} />
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="eventDateInput">Event Date</label>
            <input
              type="date"
              class="form-control"
              id="eventDateInput"
              bind:value={eventDate} />
          </div>
        </div>
      </div>
    </div>

    <h2>Expenses</h2>

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
            <th scope="row">{expense.item}</th>
            <td>
              <input
                type="number"
                class="form-control"
                bind:value={expense.amount} />
            </td>
            <td>
              <input
                type="file"
                class="form-control"
                bind:files={expense.document} />
            </td>
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <th colspan="2" class="text-end">Total</th>
          <td><strong>{totalAmount}</strong></td>
          <td />
        </tr>
      </tfoot>
    </table>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="form-group">
            <label for="lessAdvanceExpenseInput">Less Advance Expense</label>
            <input
              type="number"
              class="form-control"
              id="lessAdvanceExpenseInput"
              bind:value={lessAdvanceExpense} />
          </div>
        </div>
        <div class="col-sm">
          <div class="form-group">
            <label for="grossAmountInput">Gross Amount</label>
            <input
              type="number"
              class="form-control"
              id="grossAmountInput"
              value={totalAmount}
              readonly />
          </div>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" style="margin-top: 30px;">
      Submit
    </button>
  </form>
</div>

<style>
  label {
    margin-top: 10px;
  }
</style>
