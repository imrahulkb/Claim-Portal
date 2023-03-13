<script>
  // @ts-nocheck

  import {
    Card,
    CardBody,
    Modal,
    ModalBody,
    ModalFooter,
    Table,
    Button,
  } from "sveltestrap";

  let orders = [];

  // fetch("api/claims")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     orders = res;
  //     orders.forEach((order) => {
  //       order.expenses = [];
  //     });
  //   });

  // $: console.log(orders);

  orders = [
    {
      id: 6,
      name: "Hannan Satopay",
      email: "hannan.satopay@ieee.org",
      mobile: "9969297408",
      event: {
        name: "Career Development Program",
        type: "Expense Claim",
        total: 1000,
        advance: 0,
        gross: 1000
      },
      bank: {
        name: "Hannan Satopay",
        number: "123456789",
        ifsc: "ABCD1234",
        bank: "HDFC Bank",
        branch: "Mahim"
      },
      bills: [{
        id: 1,
        date: '27/02/2022',
        details: 'Home to Institute',
        type: 'Travelling Expenses',
        amount: 500,
        receipt: 'https://www.google.com'
      },
      {
        id: 2,
        date: '27/02/2022',
        details: 'Institute to Home',
        type: 'Travelling Expenses',
        amount: 500,
        receipt: 'https://www.google.com'
      }],
      submitted: "11/03/2023",
      status: "Pending"
    }
  ]

  let status;

  const badgeclass = (status) => {
    switch (status) {
      case "Pending":
        return "warning";
      case "Approved":
        return "success";
      case "Rejected":
        return "danger";
      default:
        return "primary";
    }
  };

  let selectedOrder = null;

  let showDetailsModal = false;

  const hidedetails = () => (showDetailsModal = false);

  const showdetails = (orderId) => {
    // fetch("api/expenses/" + orderId)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     let order = orders.find((o) => o.id === orderId);
    //     order.expenses = res;
    //     selectedOrder = order;
    //     showDetailsModal = true;
    //   });
    selectedOrder = orders[0];
    showDetailsModal = true;
  };

  let showUpdateStatusModal = false;

  const toggleUpdateStatus = () =>
    (showUpdateStatusModal = !showUpdateStatusModal);

  let selectedOrders = [];
  let selectAll = false;

  const toggleSelectAll = () => {
    selectAll = !selectAll;
    if (selectAll) {
      selectedOrders = orders.map((order) => order.id);
    } else {
      selectedOrders = [];
    }
  };

  const toggleSelectOrder = (orderId) => {
    if (selectedOrders.includes(orderId)) {
      selectedOrders = selectedOrders.filter((id) => id !== orderId);
      selectAll = false;
    } else {
      selectedOrders.push(orderId);
    }
  };

  const claim_status = ["pending", "approved", "rejected"];

  let DetailsModal = Modal;
  let UpdateStatusModal = Modal;
</script>

<Card>
  <CardBody>
    <div class="mb-4 h2">Latest Claims</div>
    <div class="table-responsive">
      <table class="table align-middle table-nowrap mb-0">
        <thead class="table-light">
          <tr>
            <th style="width: 20px;">
              <div class="form-check font-size-16 align-middle">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="transactionCheck01"
                  checked={selectAll}
                  on:input={toggleSelectAll} />
                <label class="form-check-label" for="transactionCheck01" />
              </div>
            </th>
            <th class="align-middle">Claim ID</th>
            <th class="align-middle">Claimant Name</th>
            <th class="align-middle">Event Name</th>
            <th class="align-middle">Claim Date</th>
            <th class="align-middle">Type</th>
            <th class="align-middle">Total</th>
            <th class="align-middle">Status</th>
            <th class="align-middle">Action</th>
          </tr>
        </thead>
        <tbody>
          {#each orders as order}
            <tr>
              <td>
                <div class="form-check font-size-16">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="transactionCheck02"
                    checked={selectedOrders.includes(order.id)}
                    on:input={() => toggleSelectOrder(order.id)} />
                  <label class="form-check-label" for="transactionCheck02" />
                </div>
              </td>
              <td><a href="/" class="text-body fw-bold">{order.id}</a> </td>
              <td>{order.name}</td>
              <td>
                {order.submitted}
              </td>
              <td>
                {order.event.name}
              </td>
              <td>
                {order.event.type}
              </td>
              <td>
                {order.event.gross}
              </td>
              <td>
                <span
                  class={"badge badge-pill badge-soft-" +
                    badgeclass(order.status) +
                    " font-size-11"}>{order.status}</span>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm btn-rounded waves-effect waves-light"
                  on:click={() => showdetails(order.id)}>
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-rounded waves-effect waves-light ms-2"
                  on:click={toggleUpdateStatus}>
                  Update
                </button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </CardBody>
</Card>

<DetailsModal
  isOpen={showDetailsModal}
  role="dialog"
  autoFocus={true}
  centered
  on:click={hidedetails}
  data-toggle="modal">
  <div class="modal-content border-bottom-0">
    <div class="modal-header">
      <h5 class="modal-title">Claim Details</h5>
      <button
        type="button"
        class="btn-close"
        on:click={hidedetails}
        data-bs-dismiss="modal"
        aria-label="Close" />
    </div>

    <ModalBody>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p class="">
              Claim ID: <span class="text-primary">{selectedOrder.id}</span>
            </p>
          </div>
          <div class="col-sm">
            <p class="">
              Submitted Date:{" "}
              <span class="text-primary">{selectedOrder.submitted}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p>
              Claimant Name:{" "}
              <span class="text-primary">{selectedOrder.name}</span>
            </p>
          </div>
          <div class="col-sm">
            <p class="">
              Claim Type:{" "}
              <span class="text-primary">{selectedOrder.event.type}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p class="">
              Event Name:{" "}
              <span class="text-primary">{selectedOrder.event.name}</span>
            </p>
          </div>
          <!-- <div class="col-sm">
            <p class="">
              Event Date:{" "}
              <span class="text-primary">{selectedOrder.eventDate}</span>
            </p>
          </div> -->
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p class="">
              Amount:
              <span class="text-primary">{selectedOrder.event.gross}</span>
            </p>
          </div>
          <div class="col-sm">
            <p class="">
              Status:
              <span class="text-primary">{selectedOrder.status}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- <h4>Expense Details</h4> -->
      <div class="mb-2 h4 card-title">Expense Details</div>
      <div class="table-responsive">
        <Table class="table align-middle table-nowrap">
          <thead>
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Date</th>
              <th scope="col">Particulars</th>
              <th scope="col">Amount</th>
              <th scope="col">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {#each selectedOrder.bills as bill}
              <tr>
                <th scope="row">{bill.id}</th>
                <td>{bill.date}</td>
                <td>{bill.details}</td>
                <td>{bill.amount}</td>
                <td><a href={bill.receipt} target="_blank">View Doc</a></td>
              </tr>
            {/each}
          </tbody>
        </Table>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button type="button" color="secondary" on:click={hidedetails}>
        Close
      </Button>
    </ModalFooter>
  </div>
</DetailsModal>

<UpdateStatusModal
  isOpen={showUpdateStatusModal}
  role="dialog"
  autoFocus={true}
  data-toggle="modal"
  centered
  on:click={toggleUpdateStatus}>
  <div class="modal-content border-bottom-0">
    <div class="modal-header">
      <h5 class="modal-title">Update Status</h5>
      <button
        type="button"
        class="btn-close"
        on:click={toggleUpdateStatus}
        data-bs-dismiss="modal"
        aria-label="Close" />
    </div>

    <ModalBody>
      <div class="mb-3">
        <label for="formrow-firstname-input" class="form-label">Status</label>
        <select class="form-select" bind:value={status}>
          <option selected hidden>Select status</option>
          <option value="received">Bills received</option>
          <option value="paid">Payment made</option>
          <option value="rejected">Rejected</option>
        </select>
        {#if status === "rejected"}
          <input class="form-control mt-3" type="text" placeholder="Comments"/>
        {/if}
      </div>
    </ModalBody>
    <ModalFooter>
      <Button type="button" color="secondary" on:click={toggleUpdateStatus}>
        Close
      </Button>
      <Button type="button" color="primary">Save changes</Button>
    </ModalFooter>
  </div>
</UpdateStatusModal>
