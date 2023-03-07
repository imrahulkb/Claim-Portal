<script>
  import {
    Card,
    CardBody,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table,
    Button
  } from "sveltestrap";

  const orders = [
  {
    id: "1",
    orderId: "#SK2540",
    billingName: "Neal Matthews",
    orderdate: "07 Oct, 2019",
    date2: "07 Oct, 2019",
    total: "$400",
    badgeclass: "success",
    paymentStatus: "Paid",
    methodIcon: "fa-cc-mastercard",
    paymentMethod: "Mastercard",
  },
  {
    id: "2",
    orderId: "#SK2541",
    billingName: "Jamal Burnett",
    orderdate: "07 Oct, 2019",
    date2: "07 Oct, 2019",
    total: "$380",
    badgeclass: "danger",
    paymentStatus: "Chargeback",
    methodIcon: "fa-cc-visa",
    paymentMethod: "Visa",
  },
  {
    id: "3",
    orderId: "#SK2542",
    billingName: "Juan Mitchell",
    orderdate: "06 Oct, 2019",
    date2: "07 Oct, 2019",
    total: "$384",
    badgeclass: "success",
    paymentStatus: "Paid",
    methodIcon: "fa-cc-paypal",
    paymentMethod: "Paypal",
  },
  {
    id: "4",
    orderId: "#SK2543",
    billingName: "Barry Dick",
    orderdate: "05 Oct, 2019",
    date2: "07 Oct, 2019",
    total: "$412",
    badgeclass: "success",
    paymentStatus: "Paid",
    methodIcon: "fa-cc-mastercard",
    paymentMethod: "Mastercard",
  },
  {
    id: "5",
    orderId: "#SK2544",
    billingName: "Ronald Taylor",
    orderdate: "04 Oct, 2019",
    date2: "07 Oct, 2019",
    total: "$404",
    badgeclass: "warning",
    paymentStatus: "Refund",
    methodIcon: "fa-cc-visa",
    paymentMethod: "Visa",
  },
  {
    id: "6",
    orderId: "#SK2545",
    billingName: "Jacob Hunter",
    orderdate: "04 Oct, 2019",
    date2: "07 Oct, 2019",
    total: "$392",
    badgeclass: "success",
    paymentStatus: "Paid",
    methodIcon: "fa-cc-paypal",
    paymentMethod: "Paypal",
  },
];

let showDetailsModal = false;

const toggledetails = () => (showDetailsModal = !showDetailsModal);

let showUpdateStatusModal = false;

const toggleUpdateStatus = () => (showUpdateStatusModal = !showUpdateStatusModal);

let DetailsModal = Modal;
let UpdateStatusModal = Modal;

</script>

<Card>
<CardBody>
  <div class="mb-4 h4 card-title">Latest Claims</div>
  <div class="table-responsive">
    <table class="table align-middle table-nowrap mb-0">
        <thead class="table-light">
            <tr>
                <th style="width: 20px;">
                    <div class="form-check font-size-16 align-middle">
                        <input class="form-check-input" type="checkbox" id="transactionCheck01">
                        <label class="form-check-label" for="transactionCheck01"></label>
                    </div>
                </th>
                <th class="align-middle">Claim ID</th>
                <th class="align-middle">Claimant Name</th>
                <th class="align-middle">EventDate</th>
                <th class="align-middle">Claim Date</th>
                <th class="align-middle">Total</th>
                <th class="align-middle">Payment Status</th>
                <th class="align-middle">Payment Method</th>
                <th class="align-middle">View Details</th>
                <th class="align-middle">Action</th>
            </tr>
        </thead>
        <tbody>
          {#each orders as order}
            <tr>
                <td>
                    <div class="form-check font-size-16">
                        <input class="form-check-input" type="checkbox" id="transactionCheck02">
                        <label class="form-check-label" for="transactionCheck02"></label>
                    </div>
                </td>
                <td><a href="/" class="text-body fw-bold">{order.orderId}</a> </td>
                <td>{order.billingName}</td>
                <td>
                  {order.orderdate}
                </td>
                <td>
                  {order.date2}
                </td>
                <td>
                  {order.total}
                </td>
                <td>
                    <span class={"badge badge-pill badge-soft-" + order.badgeclass + " font-size-11"}>{order.paymentStatus}</span>
                </td>
                <td>
                    <i class={ "fab " + order.methodIcon + " me-1" }></i> {order.paymentMethod}
                </td>
                <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light" on:click={toggledetails}>
                        View Details
                    </button>
                </td>
                <td>
                  <button type="button" class="btn btn-primary btn-sm btn-rounded waves-effect waves-light" on:click={toggleUpdateStatus}>
                    Update Status
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
  data-toggle="modal"
  centered
  on:click={toggledetails}
>
  <div class="modal-content border-bottom-0">
    <div class="modal-header"><h5 class="modal-title">Order Details</h5> 
      <button
        type="button"
        class="btn-close"
        on:click={toggledetails}
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>
    
    <ModalBody>
      <p class="mb-2">
        Product id: <span class="text-primary">#SK2540</span>
      </p>
      <p class="mb-4">
        Billing Name:{" "}
        <span class="text-primary">Neal Matthews</span>
      </p>

      <div class="table-responsive">
        <Table class="table align-middle table-nowrap">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th scope="row">
                    <div>
                        <img src="/assets/images/product/img-7.png" alt="" class="avatar-sm">
                    </div>
                </th>
                <td>
                    <div>
                        <h5 class="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                        <p class="text-muted mb-0">$ 225 x 1</p>
                    </div>
                </td>
                <td>$ 255</td>
            </tr>
            <tr>
                <th scope="row">
                    <div>
                        <img src="/assets/images/product/img-4.png" alt="" class="avatar-sm">
                    </div>
                </th>
                <td>
                    <div>
                        <h5 class="text-truncate font-size-14">Phone patterned cases</h5>
                        <p class="text-muted mb-0">$ 145 x 1</p>
                    </div>
                </td>
                <td>$ 145</td>
            </tr>
            <tr>
                <td colspan="2">
                    <h6 class="m-0 text-right">Sub Total:</h6>
                </td>
                <td>
                    $ 400
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h6 class="m-0 text-right">Shipping:</h6>
                </td>
                <td>
                    Free
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h6 class="m-0 text-right">Total:</h6>
                </td>
                <td>
                    $ 400
                </td>
            </tr>
        </tbody>
        </Table>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button
        type="button"
        color="secondary"
        on:click={toggledetails}
      >
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
  on:click={toggleUpdateStatus}
>
  <div class="modal-content border-bottom-0">
    <div class="modal-header"><h5 class="modal-title">Update Status</h5> 
      <button
        type="button"
        class="btn-close"
        on:click={toggleUpdateStatus}
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>
    
    <ModalBody>
      <div class="mb-3">
        <label for="formrow-firstname-input" class="form-label">Status</label>
        <select class="form-select">
          <option selected hidden >Open this select menu</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button
        type="button"
        color="secondary"
        on:click={toggleUpdateStatus}
      >
        Close
      </Button>
      <Button
        type="button"
        color="primary"
      >
        Save changes
      </Button>
    </ModalFooter>
  </div>
</UpdateStatusModal>