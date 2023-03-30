<script>
  import { getStickyHeaderDates } from "svelte-fullcalendar";
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Modal,
    ModalBody,
    TabContent,
    TabPane,
    NavItem,
    NavLink,
    Label,
    Button,
    Input,
  } from "sveltestrap";
  import {
    generateExpenseClaim,
    generateStudentBranchRebate,
    generateAdvanceClaim,
    generateConferenceClaim,
    generateHonorariumClaim,
  } from "../../helpers/expense-claim";

  let tabState = false;
  let activeTab = 1;
  let pdf;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  let ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;

  function validateIFSC(ifsc) {
    return ifscRegex.test(ifsc);
  }

  function validatePAN(pan) {
    return panRegex.test(pan);
  }

  function toggleTab(tab) {
    activeTab = tab;
    tabState = false;
    getState();
    if (activeTab === 4) {
      switch (claimantDetails.event.type) {
        case "Expense Claim":
          pdf = generateExpenseClaim(claimantDetails);
          break;
        case "Advance Claim":
          pdf = generateAdvanceClaim(claimantDetails);
          break;
        case "Award Of Honorium":
          pdf = generateHonorariumClaim(claimantDetails);
          break;
        case "Conference Deposit":
          pdf = generateConferenceClaim(claimantDetails);
          break;
        case "Student Branch Rebate":
          pdf = generateStudentBranchRebate(claimantDetails);
          break;
      }
    }
  }

  let claimantDetails = {
    name: null,
    email: null,
    mobile: null,
    event: {
      name: null,
      type: null,
      total: 0,
      advance: 0,
      gross: 0,
    },
    bank: {
      name: null,
      number: null,
      ifsc: null,
      bank: null,
      branch: null,
      pan: null,
    },
    submitted: null,
  };

  $: {
    claimantDetails;
    getState();
  }

  function getState() {
    switch (activeTab) {
      case 1:
        tabState = Boolean(
          claimantDetails.name &&
            claimantDetails.email &&
            emailRegex.test(claimantDetails.email) &&
            claimantDetails.event.type
        );
        break;
      case 2:
        tabState = true;
        break;
      case 3:
        tabState = Boolean(
          claimantDetails.bank.name &&
            claimantDetails.bank.bank &&
            claimantDetails.bank.branch &&
            claimantDetails.bank.ifsc &&
            claimantDetails.bank.number &&
            validateIFSC(claimantDetails.bank.ifsc)
        );
        break;
      case 4:
        tabState = true;
        break;
      default:
        tabState = false;
        break;
    }
  }

  function getURL(expense) {
    // TODO: uncomment this when backend is ready
    // const formData = new FormData();
    // formData.append("file", expense.document[0]);
    // return fetch("api/upload", {
    //   method: "POST",
    //   body: formData,
    // }).then((res) => res.json())
    //   .then((res) => {
    //     expense.url = res.url;
    //   });
  }

  async function handleSubmit() {
    // Promise.all(expenses.map(getURL)).then(() => {
    //   fetch("api/claim", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       claim: {
    //         name,
    //         email,
    //         phone,
    //         ieeeMembership,
    //         claimType,
    //         bankName,
    //         branchName,
    //         ifscCode,
    //         accountNumber,
    //         accountName,
    //         eventName,
    //         eventDate,
    //         lessAdvanceExpense,
    //       },
    //       expenses: expenses.map((expense) => {
    //         return {
    //           item: expense.item,
    //           amount: expense.amount,
    //           doc_url: expense.url,
    //         };
    //       }),
    //     }),
    //   });
    // });
  }

  let bills = [];

  let receipt = {
    id: 1,
    date: null,
    details: null,
    type: null,
    amount: null,
    file: null,
  };

  let files;

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      var newTab = window.open("");
      newTab.document.write(
        `<object type='application/pdf' width='100%' height='100%' src='${reader.result}'>
            <p>PDF cannot be displayed in your browser,
              <a href=${reader.result} target='_blank'>click here to download the PDF</a>
            </p>
        </object>`
      );
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  function handleAddFields() {
    let valid = Boolean(
      receipt.date && receipt.details && receipt.type && receipt.amount && files
    );

    if (!valid) alert("Please fill all the fields"); // TODO: remove alert and highlight the invalid fields

    bills = [...bills, { ...receipt, file: files[0] }];
    receipt = {
      id: receipt.id + 1,
      date: null,
      details: null,
      type: null,
      amount: null,
      file: null,
    };
  }

  function handleRemoveFields(id) {
    bills = bills.filter(function (value, index, arr) {
      if (value.id != id) return value;
    });
  }

  $: claimantDetails.event.total = bills.reduce((n, { amount }) => n + amount, 0);
  $: claimantDetails.event.gross = claimantDetails.event.total - claimantDetails.event.advance;
</script>

<div class="page-content">
  <Container fluid={true}>
    <Row>
      <Col xs="12">
        <div
          class="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 class="mb-0 font-size-18">Claim Submission</h4>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <div id="kyc-verify-wizard" class="wizard clearfix">
              <div class="steps clearfix">
                <ul>
                  <NavItem>
                    <NavLink active={activeTab == 1}>
                      <span class="number">1</span>
                      Claim Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink active={activeTab == 2}>
                      <span class="number">2</span>
                      Bill Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink active={activeTab == 3}>
                      <span class="number">3</span>
                      Bank Details
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink active={activeTab == 4}>
                      <span class="number">4</span>
                      Confirm Detail
                    </NavLink>
                  </NavItem>
                </ul>
              </div>
              <div class="content clearfix">
                <TabContent class="twitter-bs-wizard-tab-content">
                  <TabPane
                    tabId={1}
                    id="personal-info"
                    class={activeTab == 1 ? "active" : ""}>
                    <Row>
                      <Col lg="4" class="mb-3">
                        <Label>Name of Claimant</Label>
                        <Input
                          type="text"
                          id="name"
                          required
                          valid={claimantDetails.name}
                          invalid={claimantDetails.name != null &&
                            !claimantDetails.name}
                          feedback="Name is required"
                          bind:value={claimantDetails.name} />
                      </Col>
                      <Col lg="4" class="mb-3">
                        <Label for="email">Email Address</Label>
                        <Input
                          type="text"
                          id="email"
                          valid={claimantDetails.email &&
                            emailRegex.test(claimantDetails.email)}
                          invalid={claimantDetails.email != null &&
                            !emailRegex.test(claimantDetails.email)}
                          feedback="Email is required & formatted correctly"
                          bind:value={claimantDetails.email} />
                      </Col>
                      <Col lg="4" class="mb-3">
                        <Label>Mobile Number</Label>
                        <Input
                          type="tel"
                          id="name"
                          bind:value={claimantDetails.mobile} />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4" class="mb-3">
                        <Label>Expenses made for (Event Name)</Label>
                        <Input
                          type="text"
                          id="name"
                          bind:value={claimantDetails.event.name} />
                      </Col>
                      <Col lg="4" class="mb-3">
                        <Label>Type of Claim</Label>
                        <select
                          class="form-select"
                          id="subjectSelect"
                          bind:value={claimantDetails.event.type}>
                          <option value="Expense Claim">Expense Claim</option>
                          <option value="Advance Claim">Advance Claim</option>
                          <option value="Award Of Honorium"
                            >Award Of Honorium</option>
                          <option value="Conference Deposit"
                            >Conference Deposit</option>
                          <option value="Student Branch Rebate"
                            >Student Branch Rebate</option>
                        </select>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId={2} class={activeTab == 2 ? "active" : ""}>
                    {#if claimantDetails.event.type == "Expense Claim"}
                      <div>
                        <Row class="mb-3">
                          <Col lg="2">
                            <Label>Date</Label>
                            <Input
                              type="date"
                              name="untyped-input"
                              class="form-control"
                              bind:value={receipt.date} />
                          </Col>
                          <Col lg="3">
                            <Label>Bill Details</Label>
                            <Input
                              type="text"
                              name="untyped-input"
                              class="form-control"
                              bind:value={receipt.details} />
                          </Col>
                          <Col lg="2">
                            <Label for="email">Expense type</Label>
                            <select
                              class="form-select"
                              bind:value={receipt.type}>
                              <option value="Travelling Expenses"
                                >Travelling Expenses</option>
                              <option value="Food & Beverages"
                                >Food & Beverages</option>
                              <option value="Lodging & Boarding"
                                >Lodging & Boarding</option>
                              <option value="Printing Stationery & Consumables"
                                >Printing Stationery & Consumables</option>
                              <option value="Miscellaneous Expenses"
                                >Miscellaneous Expenses</option>
                            </select>
                          </Col>
                          <Col lg="2">
                            <Label for="subject">Amount</Label>
                            <Input
                              type="number"
                              class="form-control"
                              bind:value={receipt.amount} />
                          </Col>
                          <Col lg="2">
                            <Label for="resume">Receipt</Label>
                            <Input
                              type="file"
                              class="form-control"
                              bind:files />
                          </Col>
                          <Col lg="1" class="align-self-end">
                            <Button
                              color="success"
                              block
                              on:click={handleAddFields}>
                              Add
                            </Button>
                          </Col>
                        </Row>

                        {#each bills as bill, i}
                          <Row>
                            <Col lg="1" class="mb-3">
                              <Input
                                type="text"
                                class="form-control"
                                value={i + 1}
                                disabled />
                            </Col>

                            <Col lg="1" class="mb-3">
                              <Input
                                type="text"
                                class="form-control"
                                value={bill.date}
                                disabled />
                            </Col>

                            <Col lg="3" class="mb-3">
                              <Input
                                type="text"
                                class="form-control"
                                value={bill.details}
                                disabled />
                            </Col>

                            <Col lg="2" class="mb-3">
                              <Input
                                type="text"
                                class="form-control"
                                value={bill.type}
                                disabled />
                            </Col>

                            <Col lg="2" class="mb-3">
                              <Input
                                type="text"
                                class="form-control"
                                value={bill.amount}
                                disabled />
                            </Col>

                            <Col lg="2" class="mb-3">
                              <div
                                class="form-control"
                                style="height: 100%;background-color: var(--bs-gray-200);opacity: 1;cursor: pointer;color: var(--bs-blue);"
                                on:click={() => getBase64(bill.file)}
                                on:keypress={(e) =>
                                  (e.key == "Enter" || e.key == " ") &&
                                  getBase64(bill.file)}>
                                {bill.file.name + " (View)"}
                              </div>
                            </Col>

                            <Col lg="1" class="align-self-center">
                              <div class="d-grid">
                                <Button
                                  color="primary"
                                  style="width: 100%"
                                  block
                                  on:click={handleRemoveFields(bill.id)}>
                                  {" "}
                                  Delete
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        {/each}

                        <div class="form-group mb-3">
                          <label for="net">Net Amount</label>
                          <Input
                            id="net"
                            type="number"
                            bind:value={claimantDetails.event.total}
                            disabled />
                        </div>
                        <div class="form-group mb-3">
                          <label for="advance">Less Advance Expense</label>
                          <Input
                            id="advance"
                            type="number"
                            bind:value={claimantDetails.event.advance} />
                        </div>
                        <div class="form-group">
                          <label for="gross">Gross Total</label>
                          <Input
                            id="gross"
                            type="number"
                            bind:value={claimantDetails.event.gross}
                            disabled />
                        </div>
                      </div>
                    {:else if claimantDetails.event.type == "Advance Claim"}
                      <div>
                        <table style="width: 100%">
                          <tbody>
                            <tr>
                              <th>
                                <div>
                                  <Row class="mb-3">
                                    <Col lg="1" class="mb-3" />
                                    <Col lg="2">
                                      <Label>Date</Label>
                                      <Input
                                        type="date"
                                        name="untyped-input"
                                        class="form-control"
                                        bind:value={receipt.date} />
                                    </Col>
                                    <Col lg="6">
                                      <Label>Particular</Label>
                                      <Input
                                        type="text"
                                        name="untyped-input"
                                        class="form-control"
                                        bind:value={receipt.details} />
                                    </Col>
                                    <Col lg="2">
                                      <Label for="subject">Amount</Label>
                                      <Input
                                        type="number"
                                        class="form-control"
                                        bind:value={receipt.amount} />
                                    </Col>
                                    <Col lg="1" class="align-self-center">
                                      <Button
                                        color="success"
                                        block
                                        on:click={handleAddFields}>
                                        Add
                                      </Button>
                                    </Col>
                                  </Row>
                                </div>
                              </th>
                            </tr>

                            {#each bills as bill, i}
                              <tr>
                                <td>
                                  <div>
                                    <Row>
                                      <Col lg="1" class="mb-3">
                                        <Input
                                          type="text"
                                          class="form-control"
                                          value={i + 1}
                                          disabled />
                                      </Col>

                                      <Col lg="2" class="mb-3">
                                        <Input
                                          type="text"
                                          class="form-control"
                                          value={bill.date}
                                          disabled />
                                      </Col>

                                      <Col lg="6" class="mb-3">
                                        <Input
                                          type="text"
                                          class="form-control"
                                          value={bill.details}
                                          disabled />
                                      </Col>

                                      <Col lg="2" class="mb-3">
                                        <Input
                                          type="text"
                                          class="form-control"
                                          value={bill.amount}
                                          disabled />
                                      </Col>

                                      <Col lg="1" class="align-self-center">
                                        <div class="d-grid">
                                          <Button
                                            color="primary"
                                            style="width: 100%"
                                            block
                                            on:click={handleRemoveFields(
                                              bill.id
                                            )}>
                                            {" "}
                                            Delete
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </div>
                                </td>
                              </tr>
                            {/each}
                          </tbody>
                        </table>
                        <div class="form-group mb-3">
                          <label for="net">Net Amount</label>
                          <Input
                            id="net"
                            type="number"
                            bind:value={claimantDetails.event.total}
                            disabled />
                        </div>
                      </div>
                    {:else if claimantDetails.event.type == "Award Of Honorium"}
                      <div>
                        <table style="width: 100%">
                          <tbody>
                            <tr>
                              <td>
                                <div>
                                  <Row class="mb-3">
                                    <Col lg="2">
                                      <Label>Date</Label>
                                      <Input
                                        type="date"
                                        name="untyped-input"
                                        class="form-control"
                                        bind:value={receipt.date} />
                                    </Col>
                                    <Col lg="8">
                                      <Label>Particular</Label>
                                      <Input
                                        type="text"
                                        name="untyped-input"
                                        class="form-control"
                                        bind:value={receipt.details} />
                                    </Col>
                                    <Col lg="2">
                                      <Label for="subject">Amount</Label>
                                      <Input
                                        type="number"
                                        class="form-control"
                                        bind:value={receipt.amount} />
                                    </Col>
                                  </Row>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="form-group mb-3">
                          <label for="net">Net Amount</label>
                          <Input
                            id="net"
                            type="number"
                            bind:value={receipt.amount}
                            disabled />
                        </div>
                        {#if receipt.amount >= 10000}
                          <div class="form-group mb-3">
                            <label for="tds">TDS @ 10%</label>
                            <Input
                              id="tds"
                              type="number"
                              value={receipt.amount * 0.1}
                              disabled />
                          </div>
                        {/if}
                        <div class="form-group">
                          <label for="gross">Gross Total</label>
                          <Input
                            id="gross"
                            type="number"
                            value={receipt.amount -
                              (receipt.amount >= 10000
                                ? receipt.amount * 0.1
                                : 0)}
                            disabled />
                        </div>
                      </div>
                    {:else if claimantDetails.event.type == "Conference Deposit"}
                      <div>
                        <h4>Conference Details</h4>
                        <Row>
                          <Col lg="6" class="mb-3">
                            <Label>Conference Name</Label>
                            <Input type="text" />
                          </Col>
                          <Col lg="6" class="mb-3">
                            <Label>Date of Conference</Label>
                            <Input type="date" />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="3" class="mb-3">
                            <Label>Number of Papers Received</Label>
                            <Input type="number" />
                          </Col>
                          <Col lg="3" class="mb-3">
                            <Label>Number of Papers Accepted</Label>
                            <Input type="number" />
                          </Col>
                          <Col lg="3" class="mb-3">
                            <Label>Number of Papers Presented</Label>
                            <Input type="number" />
                          </Col>
                          <Col lg="3" class="mb-3">
                            <Label>Number of Papers Published</Label>
                            <Input type="number" />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6" class="mb-3">
                            <Label>IEEEXplore Publication Date</Label>
                            <Input type="date" />
                          </Col>
                          <Col lg="6" class="mb-3">
                            <Label>IEEEXplore Publication Link</Label>
                            <Input type="text" />
                          </Col>
                        </Row>

                        <h4 class="mt-3">Conference Deposit Details</h4>
                        <Row>
                          <Col lg="6" class="mb-3">
                            <Label>Date of payment</Label>
                            <Input type="date" />
                          </Col>
                          <Col lg="6" class="mb-3">
                            <Label>Amount</Label>
                            <Input type="number" />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6" class="mb-3">
                            <Label>Transaction ID/Cheque No.</Label>
                            <Input type="text" />
                          </Col>
                          <Col lg="6" class="mb-3">
                            <Label>Name of Account Holder</Label>
                            <Input type="text" />
                          </Col>
                        </Row>

                        <h4 class="mt-3">People Details</h4>
                        <Row>
                          <Col lg="4" class="mb-3">
                            <Label>Student Branch Counselor</Label>
                            <Input type="text" />
                          </Col>
                          <Col lg="4" class="mb-3">
                            <Label>Conference Chair</Label>
                            <Input type="text" />
                          </Col>
                          <Col lg="4" class="mb-3">
                            <Label>Director/Principal</Label>
                            <Input type="text" />
                          </Col>
                        </Row>
                      </div>
                    {:else if claimantDetails.event.type == "Student Branch Rebate"}
                      <div>
                        <Row>
                          <Col lg="4" class="mb-3">
                            <Label>IEEE Student Branch Code</Label>
                            <Input type="number" />
                          </Col>
                          <Col lg="4" class="mb-3">
                            <Label>IEEE Student Membership Count</Label>
                            <Input type="number" />
                          </Col>
                          <Col lg="4" class="mb-3">
                            <Label>IEEE Professional Membership Count</Label>
                            <Input type="number" />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="4" class="mb-3">
                            <Label
                              >Number of Event reported via Vtools in previous
                              year</Label>
                            <Input type="number" />
                          </Col>
                          <Col lg="4" class="mb-3">
                            <Label
                              >Description of Funds (SB Rebate/Project Funds)</Label>
                            <Input type="number" />
                          </Col>
                          <Col lg="4" class="mb-3">
                            <Label>Amount (INR)</Label>
                            <Input type="number" />
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6" class="mb-3">
                            <Label>Student Branch Counselor</Label>
                            <Input type="text" />
                          </Col>
                          <Col lg="6" class="mb-3">
                            <Label>Director/Principal</Label>
                            <Input type="text" />
                          </Col>
                        </Row>
                      </div>
                    {/if}
                  </TabPane>
                  <TabPane tabId={3} class={activeTab == 3 ? "active" : ""}>
                    <Row>
                      <Col class="mb-3">
                        <Label>Account Name</Label>
                        <Input
                          type="text"
                          bind:value={claimantDetails.bank.name} />
                      </Col>
                      <Col class="mb-3">
                        <Label>Account Number</Label>
                        <Input
                          type="text"
                          bind:value={claimantDetails.bank.number} />
                      </Col>
                      {#if claimantDetails.event.type == "Award Of Honorium"}
                        <Col class="mb-3">
                          <Label>PAN</Label>
                          <Input
                            type="text"
                            valid={claimantDetails.bank.pan &&
                              validatePAN(claimantDetails.bank.pan)}
                            invalid={claimantDetails.bank.pan != null &&
                              !validatePAN(claimantDetails.bank.pan)}
                            feedback="PAN is required & formatted correctly"
                            bind:value={claimantDetails.bank.pan} />
                        </Col>
                      {/if}
                    </Row>
                    <Row>
                      <Col lg="4" class="mb-3">
                        <Label>IFSC Code</Label>
                        <Input
                          type="text"
                          valid={claimantDetails.bank.ifsc &&
                            validateIFSC(claimantDetails.bank.ifsc)}
                          invalid={claimantDetails.bank.ifsc != null &&
                            !validateIFSC(claimantDetails.bank.ifsc)}
                          feedback="IFSC is required & formatted correctly"
                          bind:value={claimantDetails.bank.ifsc} />
                      </Col>
                      <Col lg="4" class="mb-3">
                        <Label>Bank Name</Label>
                        <select
                          class="form-select"
                          bind:value={claimantDetails.bank.bank}>
                          <option value="HDFC Bank">HDFC Bank</option>
                          <option value="Other Bank">Other Bank</option>
                        </select>
                      </Col>
                      <Col lg="4" class="mb-3">
                        <Label>Branch Name</Label>
                        <Input
                          type="text"
                          bind:value={claimantDetails.bank.branch} />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane
                    tabId={4}
                    id="doc-verification"
                    class={activeTab == 4 ? "active" : ""}>
                    <object
                      title="preview"
                      data={pdf}
                      type="application/pdf"
                      style="width: 100%; height: 500px; margin: 0px; padding: 0px;">
                      <p>
                        PDF cannot be displayed in your browser,
                        <a href={pdf}>click here to download the PDF file.</a>
                      </p>
                    </object>
                  </TabPane>
                </TabContent>
              </div>

              <div class="actions clearfix">
                <ul role="menu" aria-label="Pagination">
                  {#if activeTab > 1}
                    <li class="previous">
                      <Button
                        color="primary"
                        on:click={() => toggleTab(activeTab - 1)}>
                        Previous
                      </Button>
                    </li>
                  {/if}
                  {#if activeTab === 4}
                    <li>
                      <Button color="success">Submit</Button>
                    </li>
                  {:else}
                    <li>
                      <Button
                        color="primary"
                        disabled={!tabState}
                        on:click={() => toggleTab(activeTab + 1)}>
                        Next
                      </Button>
                    </li>
                  {/if}
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>

<style>
  :global(.valid-feedback) {
    display: none !important;
  }

  :global(.nav-link) {
    cursor: auto;
  }
</style>
