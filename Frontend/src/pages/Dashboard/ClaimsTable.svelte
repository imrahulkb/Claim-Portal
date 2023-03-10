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

  fetch("api/claims")
    .then((res) => res.json())
    .then((res) => {
      orders = res;
      orders.forEach((order) => {
        order.expenses = [];
      });
    });

  $: console.log(orders);

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
    fetch("api/expenses/" + orderId)
      .then((res) => res.json())
      .then((res) => {
        let order = orders.find((o) => o.id === orderId);
        order.expenses = res;
        selectedOrder = order;
        showDetailsModal = true;
      });
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
            <th class="align-middle">Application Date</th>
            <th class="align-middle">Event Name</th>
            <th class="align-middle">EventDate</th>
            <th class="align-middle">Total</th>
            <th class="align-middle">Status</th>
            <th class="align-middle">View Details</th>
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
                {order.applicationDate}
              </td>
              <td>
                {order.eventName}
              </td>
              <td>
                {order.eventDate}
              </td>
              <td>
                {order.totalExpense}
              </td>
              <td>
                <span
                  class={"badge badge-pill badge-soft-" +
                    badgeclass(order.status) +
                    " font-size-11"}>{order.status}</span>
              </td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-primary btn-sm btn-rounded waves-effect waves-light"
                  on:click={() => showdetails(order.id)}>
                  View Details
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn waves-effect waves-light"
                  on:click={toggleUpdateStatus}>
                  <i class="fa fa-ellipsis-v" aria-hidden="true" />
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
              Application Date:{" "}
              <span class="text-primary">{selectedOrder.applicationDate}</span>
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
              <span class="text-primary">{selectedOrder.claimType}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p class="">
              Event Name:{" "}
              <span class="text-primary">{selectedOrder.eventName}</span>
            </p>
          </div>
          <div class="col-sm">
            <p class="">
              Event Date:{" "}
              <span class="text-primary">{selectedOrder.eventDate}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <p class="">
              Amount:{" "}
              <span class="text-primary">{selectedOrder.totalAmount}</span>
            </p>
          </div>
          <div class="col-sm">
            <p />
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <p>
                    <label for="formrow-firstname-input" class="form-label">Status</label>
                  </p>
                </div>
                <div class="col-sm">
                  <select class="form-select">
                    {#each claim_status as stat}
                      <option selected={selectedOrder.status == stat} value={stat}>{stat}</option>
                    {/each}
                  </select>
                </div>
              </div>
            </div>
            <!-- </p> -->
          </div>
        </div>
      </div>
      <!-- <h4>Expense Details</h4> -->
      <div class="mb-2 h4 card-title">Expense Details</div>
      <div class="table-responsive">
        <Table class="table align-middle table-nowrap">
          <thead>
            <tr>
              <th scope="col">Serial No.</th>
              <th scope="col">Particulars</th>
              <th scope="col">Amount</th>
              <th scope="col">Digital Receipt</th>
            </tr>
          </thead>
          <tbody>
            {#each selectedOrder.expenses as expense}
              <tr>
                <th scope="row">{expense.id}</th>
                <td>{expense.item}</td>
                <td>{expense.amount}</td>
                <td><a href={expense.doc_url}>View Doc</a></td>
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
        <select class="form-select">
          <option selected hidden>Open this select menu</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Rejected">Rejected</option>
        </select>
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
