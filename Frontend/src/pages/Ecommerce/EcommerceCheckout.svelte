<script>
  import {
    Container,
    Row,
    Col,
    Table,
    Input,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Card,
    Form,
    FormGroup,
    Label,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "sveltestrap";

  import Breadcrumb from "./../../common/Breadcrumb.svelte";
  import { Link } from "svelte-routing";
  import Select from 'svelte-select';
  
  
  let activeTab = "1";

  const optionGroup = [
    { label: "Mustard", value: "Mustard" , group: "Picnic" },
    { label: "Ketchup", value: "Ketchup" , group: "Picnic" },
    { label: "Relish", value: "Relish" , group: "Picnic" },
    { label: "Tent", value: "Tent", group: "Camping" },
    { label: "Flashlight", value: "Flashlight", group: "Camping" },
    { label: "Toilet Paper", value: "Toilet Paper", group: "Camping" }
];

  const orderSummary = [
    {
      id: 1,
      img: "assets/images/product/img-1.png",
      productTitle: "Half sleeve T-shirt (64GB)",
      price: 450,
      qty: 1,
    },
    {
      id: 2,
      img: "assets/images/product/img-7.png",
      productTitle: "Wireless Headphone",
      price: 225,
      qty: 1,
    },
  ];

  const groupBy = (item) => item.group;

</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Ecommerce" breadcrumbItem="Checkout" />

    <div class="checkout-tabs">
      <Row>
        <Col xl="2" sm="3">
          <Nav class="flex-column" pills>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "1")}
                active={activeTab == "1"}
              >
                <i class="bx bxs-truck d-block check-nav-icon mt-4 mb-2" />
                <p class="font-weight-bold mb-4">Shipping Info</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "2")}
                active={activeTab == "2"}
              >
                <i class="bx bx-money d-block check-nav-icon mt-4 mb-2" />
                <p class="font-weight-bold mb-4">Payment Info</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "3")}
                active={activeTab == "3"}
              >
                <i class="bx bx-badge-check d-block check-nav-icon mt-4 mb-2" />
                <p class="font-weight-bold mb-4">Confirmation</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xl="10" sm="9">
          <Card>
            <CardBody>
              <TabContent {activeTab}>
                <TabPane tabId="1" class="{activeTab == 1 ? 'active': ''}">
                  <div>
                    <CardTitle>Shipping information</CardTitle>
                    <p class="card-title-desc">
                      Fill all information below
                    </p>
                    <Form>
                      <FormGroup class="mb-4" row>
                        <Label
                          for="billing-name"
                          md="2"
                          class="col-form-label"
                        >
                          Name
                        </Label>
                        <Col md="10">
                          <Input
                            type="text"
                            class="form-control"
                            id="billing-name"
                            placeholder="Enter your name"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup class="mb-4" row>
                        <Label
                          for="billing-email-address"
                          md="2"
                          class="col-form-label"
                        >
                          Email Address
                        </Label>
                        <Col md="10">
                          <Input
                            type="email"
                            class="form-control"
                            id="billing-email-address"
                            placeholder="Enter your email"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup class="mb-4" row>
                        <Label
                          for="billing-phone"
                          md="2"
                          class="col-form-label"
                        >
                          Phone
                        </Label>
                        <Col md={10}>
                          <input
                            type="text"
                            class="form-control"
                            id="billing-phone"
                            placeholder="Enter your Phone no."
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup class="mb-4" row>
                        <Label
                          for="billing-address"
                          md="2"
                          class="col-form-label"
                        >
                          Address
                        </Label>
                        <Col md="10">
                          <textarea
                            class="form-control"
                            id="billing-address"
                            rows="3"
                            placeholder="Enter full address"
                          />
                        </Col>
                      </FormGroup>

                      <FormGroup class="select2-container mb-4" row>
                        <Label md="2" class="col-form-label">Country</Label>
                        <Col md="10">
                          <select class="form-control select2" title="Country">
                            <option value="0">Select Country</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">
                              Central African Republic
                            </option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">
                              Cocos (Keeling) Islands
                            </option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote d&#39;Ivoire</option>
                            <option value="HR">Croatia (Hrvatska)</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY"> Libyan Arab Jamahiriya </option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macau</option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="MD"> Moldova, Republic of </option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN"> Netherlands Antilles </option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">
                              Northern Mariana Islands
                            </option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PW">Palau</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="KN"> Saint Kitts and Nevis </option>
                            <option value="LC">Saint LUCIA</option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST"> Sao Tome and Principe </option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">
                              Slovakia (Slovak Republic)
                            </option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SH">St. Helena</option>
                            <option value="PM">
                              St. Pierre and Miquelon
                            </option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY"> Syrian Arab Republic </option>
                            <option value="TW">
                              Taiwan, Province of China
                            </option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">
                              Tanzania, United Republic of
                            </option>
                            <option value="TH">Thailand</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT"> Trinidad and Tobago </option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">
                              Turks and Caicos Islands
                            </option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE"> United Arab Emirates </option>
                            <option value="GB">United Kingdom</option>
                            <option value="US">United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">
                              Virgin Islands (British)
                            </option>
                            <option value="VI"> Virgin Islands (U.S.) </option>
                            <option value="WF">
                              Wallis and Futuna Islands
                            </option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </Col>
                      </FormGroup>

                      <FormGroup class="select2-container mb-4" row>
                        <Label md="2" class="col-form-label">States</Label>
                        <Col md="10">
                          <Select
                            items={optionGroup}
                            {groupBy}
                            placeholder="Select States"
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup class="mb-0" row>
                        <Label
                          for="example-textarea"
                          md="2"
                          class="col-form-label"
                        >
                          Order Notes:
                        </Label>
                        <Col md="10">
                          <textarea
                            class="form-control"
                            id="example-textarea"
                            rows="3"
                            placeholder="Write some note.."
                          />
                        </Col>
                      </FormGroup>
                    </Form>
                  </div>
                </TabPane>
                <TabPane
                  tabId="2"
                  id="v-pills-payment"
                  role="tabpanel"
                  class="{activeTab == "2" ? 'active': ''}"
                  aria-labelledby="v-pills-payment-tab"
                >
                  <div>
                    <CardTitle>Payment information</CardTitle>
                    <p class="card-title-desc">
                      Fill all information below
                    </p>
                    <div>
                      <div class="form-check form-check-inline font-size-16">
                        <input
                          type="radio"
                          value="1"
                          id="customRadioInline1"
                          name="customRadioInline1"
                          class="form-check-input"
                        />
                        <Label
                          class="form-check-label font-size-13"
                          for="customRadioInline1"
                        >
                          <i
                            class="fab fa-cc-mastercard me-1 font-size-20 align-top"
                          />{" "}
                          Credit / Debit Card
                        </Label>
                      </div>
                      <div class="form-check form-check-inline font-size-16">
                        <input
                          type="radio"
                          value="2"
                          id="customRadioInline2"
                          name="customRadioInline1"
                          class="form-check-input"
                        />
                        <Label
                          class="form-check-label font-size-13"
                          for="customRadioInline2"
                        >
                          <i
                            class="fab fa-cc-paypal me-1 font-size-20 align-top"
                          />{" "}
                          Paypal
                        </Label>
                      </div>
                      <div class="form-check form-check-inline font-size-16">
                        <input
                          type="radio"
                          value="3"
                          id="customRadioInline3"
                          checked
                          name="customRadioInline1"
                          class="form-check-input"
                        />
                        <Label
                          class="form-check-label font-size-13"
                          for="customRadioInline3"
                        >
                          <i
                            class="far fa-money-bill-alt me-1 font-size-20 align-top"
                          />{" "}
                          Cash on Delivery
                        </Label>
                      </div>
                    </div>

                    <h5 class="mt-5 mb-3 font-size-15">For card Payment</h5>
                    <div class="p-4 border">
                      <Form>
                        <FormGroup class="mb-0">
                          <Label for="cardnumberInput">Card Number</Label>
                          <Input
                            type="text"
                            class="form-control"
                            id="cardnumberInput"
                            placeholder="0000 0000 0000 0000"
                          />
                        </FormGroup>
                        <Row>
                          <Col lg="6">
                            <FormGroup class="mt-4 mb-0">
                              <Label for="cardnameInput">
                                Name on card
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="cardnameInput"
                                placeholder="Name on Card"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="3">
                            <FormGroup class=" mt-4 mb-0">
                              <Label for="expirydateInput">
                                Expiry date
                              </Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="expirydateInput"
                                placeholder="MM/YY"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="3">
                            <FormGroup class="mt-4 mb-0">
                              <Label for="cvvcodeInput">CVV Code</Label>
                              <Input
                                type="text"
                                class="form-control"
                                id="cvvcodeInput"
                                placeholder="Enter CVV Code"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="3" id="v-pills-confir" role="tabpanel" class="{activeTab == "3" ? 'active': ''}">
                  <Card class="shadow-none border mb-0">
                    <CardBody>
                      <CardTitle class="mb-4">Order Summary</CardTitle>

                      <div class="table-responsive">
                        <Table class="table align-middle mb-0 table-nowrap">
                          <thead class="table-light">
                            <tr>
                              <th scope="col">Product</th>
                              <th scope="col">Product Desc</th>
                              <th scope="col">Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {#each orderSummary as orderitem}
                              <tr>
                                <th scope="row">
                                  <img
                                    src={orderitem.img}
                                    alt="product-img"
                                    title="product-img"
                                    class="avatar-md"
                                  />
                                </th>
                                <td>
                                  <h5 class="font-size-14 text-truncate">
                                    <Link
                                      to="/ecommerce-product-detail"
                                      class="text-dark"
                                    >
                                      {orderitem.productTitle}{" "}
                                    </Link>
                                  </h5>
                                  <p class="text-muted mb-0">
                                    $ {orderitem.price} x {orderitem.qty}
                                  </p>
                                </td>
                                <td>
                                  $ {orderitem.price * orderitem.qty}
                                </td>
                              </tr>
                            {/each}
                            <tr>
                              <td colSpan="2">
                                <h6 class="m-0 text-end">Sub Total:</h6>
                              </td>
                              <td>$ 675</td>
                            </tr>
                            <tr>
                              <td colSpan="3">
                                <div class="bg-primary bg-soft p-3 rounded">
                                  <h5 class="font-size-14 text-primary mb-0">
                                    <i class="fas fa-shipping-fast me-2" />{" "}
                                    Shipping{" "}
                                    <span class="float-end"> Free </span>
                                  </h5>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan="2">
                                <h6 class="m-0 text-end">Total:</h6>
                              </td>
                              <td>$ 675</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
          <Row class="mt-4 my-3">
            <Col sm="6">
              <Link
                to="/ecommerce-cart"
                class="btn text-muted d-none d-sm-inline-block btn-link"
              >
                <i class="mdi mdi-arrow-left me-1" /> Back to Shopping Cart{" "}
              </Link>
            </Col>
            <Col sm="6">
              <div class="text-sm-end">
                <Link to="/ecommerce-checkout" class="btn btn-success">
                  <i class="mdi mdi-truck-fast me-1" /> Proceed to Shipping{" "}
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </Container>
</div>