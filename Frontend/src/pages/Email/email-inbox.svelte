<script>
  import { Link } from "svelte-routing";
  import { Container, Card } from "sveltestrap";
  import EmailSidebar from "./EmailSidebar.svelte";
  import Breadcrumbs from "../../common/Breadcrumb.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Email" breadcrumbItem="Inbox" />

    <div class="row">
      <div class="col-12">
        <!-- Left sidebar -->
        <EmailSidebar />
        <!-- End Left sidebar -->

        <!-- Right Sidebar -->
        <div class="email-rightbar mb-3">
          <Card>
            <div class="btn-toolbar p-3" role="toolbar">
              <div class="btn-group me-2 mb-2 mb-sm-0">
                <button
                  type="button"
                  class="btn btn-primary waves-light waves-effect"
                  ><i class="fa fa-inbox" /></button
                >
                <button
                  type="button"
                  class="btn btn-primary waves-light waves-effect"
                  ><i class="fa fa-exclamation-circle" /></button
                >
                <button
                  type="button"
                  class="btn btn-primary waves-light waves-effect"
                  ><i class="far fa-trash-alt" /></button
                >
              </div>
              <div class="btn-group me-2 mb-2 mb-sm-0">
                <button
                  type="button"
                  class="btn btn-primary waves-light waves-effect dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-folder" />
                  <i class="mdi mdi-chevron-down ms-1" />
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href={"#"}>Updates</a>
                  <a class="dropdown-item" href={"#"}>Social</a>
                  <a class="dropdown-item" href={"#"}>Team Manage</a>
                </div>
              </div>
              <div class="btn-group me-2 mb-2 mb-sm-0">
                <button
                  type="button"
                  class="btn btn-primary waves-light waves-effect dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa fa-tag" />
                  <i class="mdi mdi-chevron-down ms-1" />
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href={"#"}>Updates</a>
                  <a class="dropdown-item" href={"#"}>Social</a>
                  <a class="dropdown-item" href={"#"}>Team Manage</a>
                </div>
              </div>

              <div class="btn-group me-2 mb-2 mb-sm-0">
                <button
                  type="button"
                  class="btn btn-primary waves-light waves-effect dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More <i class="mdi mdi-dots-vertical ms-2" />
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href={"#"}>Mark as Unread</a>
                  <a class="dropdown-item" href={"#"}>Mark as Important</a>
                  <a class="dropdown-item" href={"#"}>Add to Tasks</a>
                  <a class="dropdown-item" href={"#"}>Add Star</a>
                  <a class="dropdown-item" href={"#"}>Mute</a>
                </div>
              </div>
            </div>
            <ul class="message-list">
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk19" />
                    <label for="chk19" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Peter, me (3)</Link><span
                    class="star-toggle text-warning bx bxs-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Hello – <span class="teaser"
                      >Trip home from Colombo has been arranged, then Jenna will
                      come get me from Stockholm. :)</span
                    >
                  </Link>
                  <div class="date">Mar 6</div>
                </div>
              </li>

              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk20" />
                    <label for="chk20" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">me, Susanna (7)</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    ><span class="bg-warning bg-soft text-warning badge me-2"
                      >Freelance</span
                    >Since you asked... and i'm inconceivably bored at the train
                    station –
                    <span class="teaser"
                      >Alright thanks. I'll have to re-book that somehow, i'll
                      get back to you.</span
                    >
                  </Link>
                  <div class="date">Mar. 6</div>
                </div>
              </li>

              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk6" />
                    <label for="chk6" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Web Support Dennis</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Re: New mail settings –
                    <span class="teaser">Will you answer him asap?</span>
                  </Link>
                  <div class="date">Mar 7</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk7" />
                    <label for="chk7" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">me, Peter (2)</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    ><span class="bg-info badge bg-soft text-info me-2"
                      >Support</span
                    >Off on Thursday -
                    <span class="teaser"
                      >Eff that place, you might as well stay here with us
                      instead! Sent from my iPhone 4 4 mar 2014 at 5:55 pm</span
                    >
                  </Link>
                  <div class="date">Mar 4</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk8" />
                    <label for="chk8" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Medium</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    ><span class="bg-primary bg-soft text-primary badge me-2"
                      >Social</span
                    >This Week's Top Stories –
                    <span class="teaser"
                      >Our top pick for you on Medium this week The Man Who
                      Destroyed America’s Ego</span
                    >
                  </Link>
                  <div class="date">Feb 28</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk9" />
                    <label for="chk9" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Death to Stock</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Montly High-Res Photos –
                    <span class="teaser"
                      >To create this month's pack, we hosted a party with local
                      musician Jared Mahone here in Columbus, Ohio.</span
                    >
                  </Link>
                  <div class="date">Feb 28</div>
                </div>
              </li>

              <li class="unread">
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk3" />
                    <label for="chk3" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Randy, me (5)</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    ><span class="bg-success bg-soft text-success badge me-2"
                      >Family</span
                    >Last pic over my village –
                    <span class="teaser"
                      >Yeah i'd like that! Do you remember the video you showed
                      me of your train ride between Colombo and Kandy? The one
                      with the mountain view? I would love to see that one
                      again!</span
                    >
                  </Link>
                  <div class="date">5:01 am</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk4" />
                    <label for="chk4" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Andrew Zimmer</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Mochila Beta: Subscription Confirmed – <span class="teaser"
                      >You've been confirmed! Welcome to the ruling class of the
                      inbox. For your records, here is a copy of the information
                      you submitted to us...</span
                    >
                  </Link>
                  <div class="date">Mar 8</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk5" />
                    <label for="chk5" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Infinity HR</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Sveriges Hetaste sommarjobb –
                    <span class="teaser"
                      >Hej Nicklas Sandell! Vi vill bjuda in dig till "First
                      tour 2014", ett rekryteringsevent som erbjuder jobb på 16
                      semesterorter iSverige.</span
                    >
                  </Link>
                  <div class="date">Mar 8</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk10" />
                    <label for="chk10" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Revibe</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    ><span class="bg-danger bg-soft text-danger badge me-2"
                      >Friends</span
                    >Weekend on Revibe –
                    <span class="teaser"
                      >Today's Friday and we thought maybe you want some music
                      inspiration for the weekend. Here are some trending tracks
                      and playlists we think you should give a listen!</span
                    >
                  </Link>
                  <div class="date">Feb 27</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk11" />
                    <label for="chk11" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Erik, me (5)</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Regarding our meeting –
                    <span class="teaser"
                      >That's great, see you on Thursday!</span
                    >
                  </Link>
                  <div class="date">Feb 24</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk12" />
                    <label for="chk12" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">KanbanFlow</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    ><span class="bg-primary bg-soft text-primary badge me-2"
                      >Social</span
                    >Task assigned: Clone ARP's website –
                    <span class="teaser"
                      >You have been assigned a task by Alex@Work on the board
                      Web.</span
                    >
                  </Link>
                  <div class="date">Feb 24</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk13" />
                    <label for="chk13" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Tobias Berggren</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Let's go fishing! –
                    <span class="teaser"
                      >Hey, You wanna join me and Fred at the lake tomorrow?
                      It'll be awesome.</span
                    >
                  </Link>
                  <div class="date">Feb 23</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk14" />
                    <label for="chk14" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Charukaw, me (7)</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Hey man – <span class="teaser"
                      >Nah man sorry i don't. Should i get it?</span
                    >
                  </Link>
                  <div class="date">Feb 23</div>
                </div>
              </li>
              <li class="unread">
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk15" />
                    <label for="chk15" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">me, Peter (5)</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    ><span class="bg-info bg-soft text-info badge me-2"
                      >Support</span
                    >Home again! –
                    <span class="teaser"
                      >That's just perfect! See you tomorrow.</span
                    >
                  </Link>
                  <div class="date">Feb 21</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk16" />
                    <label for="chk16" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Stack Exchange</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >1 new items in your Stackexchange inbox – <span
                      class="teaser"
                      >The following items were added to your Stack Exchange
                      global inbox since you last checked it.</span
                    >
                  </Link>
                  <div class="date">Feb 21</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk17" />
                    <label for="chk17" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">Google Drive Team</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >You can now use your storage in Google Drive – <span
                      class="teaser"
                      >Hey Nicklas Sandell! Thank you for purchasing extra
                      storage space in Google Drive.</span
                    >
                  </Link>
                  <div class="date">Feb 20</div>
                </div>
              </li>
              <li>
                <div class="col-mail col-mail-1">
                  <div class="checkbox-wrapper-mail">
                    <input type="checkbox" id="chk18" />
                    <label for="chk18" class="toggle" />
                  </div>
                  <Link to={"#"} class="title">me, Susanna (11)</Link><span
                    class="star-toggle bx bx-star"
                  />
                </div>
                <div class="col-mail col-mail-2">
                  <Link to={"#"} class="subject"
                    >Train/Bus – <span class="teaser"
                      >Yes ok, great! I'm not stuck in Stockholm anymore, we're
                      making progress.</span
                    >
                  </Link>
                  <div class="date">Feb 19</div>
                </div>
              </li>
            </ul>
          </Card>
          <!-- card -->

          <div class="row">
            <div class="col-7">Showing 1 - 20 of 1,524</div>
            <div class="col-5">
              <div class="btn-group float-end">
                <button
                  type="button"
                  class="btn btn-sm btn-success waves-effect"
                  ><i class="fa fa-chevron-left" /></button
                >
                <button
                  type="button"
                  class="btn btn-sm btn-success waves-effect"
                  ><i class="fa fa-chevron-right" /></button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end Col-9 -->
    </div>
  </Container>
</div>
