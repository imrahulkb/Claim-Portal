<script>
	import { Link } from 'svelte-routing';
	import { onDestroy, onMount } from 'svelte'
	import { globalHistory } from 'svelte-routing/src/history';

	import { _ } from 'svelte-i18n';

	export let show = false;

	let pathname = window.location.pathname;
    let unsub;

    onMount(() => {
        unsub = globalHistory.listen(({ location, action }) => {
            pathname = location.pathname;
        });

		let matchingMenuItem = null

		const ul1 = document.getElementById("navigation")
		
		if(ul1.getElementsByTagName("a").length > 0){

		const items1 = ul1.getElementsByTagName("a")
		
		for (let i = 0; i < items1.length; ++i) {
			
		  if (pathname === items1[i].pathname) {

			matchingMenuItem = items1[i]
			break

		  }
		}
		if (matchingMenuItem) {
		  activateParentDropdown(matchingMenuItem)
		}
		}
    });

    onDestroy(() => {
        unsub();
    });


	let current = "dashboard";
  	let current_child = "dashboard";

	function changeClassAttribute(attribute, child = null) {
    if (child && child === current_child) {
      current_child = null;
    } else if (attribute === current && child === null) {
      current = null;
      current_child = null;
    } else {
      current = attribute;
      current_child = child;
    }

    return false;
  }

	const activateParentDropdown = item => {
		item.classList.add("active")
		const parent = item.parentElement
		
		if (item) {
		  parent.classList.add("active") // li
		  const parent2 = parent.parentElement
		  parent2.classList.add("active") // li
		  const parent3 = parent2.parentElement
		  if (parent3) {
			parent3.classList.add("active") // li
			const parent4 = parent3.parentElement
			if (parent4) {
			  parent4.classList.add("active") // li
			  const parent5 = parent4.parentElement
			  if (parent5) {
				parent5.classList.add("active") // li
				const parent6 = parent5.parentElement
				if (parent6) {
				  parent6.classList.add("active") // li
				}
			  }
			}
		  }
		}
		return false
	}

</script>

<div class="topnav">
	<div class="container-fluid">
		<nav class="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">

			<div class="collapse navbar-collapse {show === true ? 'show' : ''}" id="topnav-menu-content">
				<ul class="navbar-nav">

					<li class="nav-item dropdown">
						<Link class="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-dashboard" role="button" on:click={() => changeClassAttribute("dashboards")}>
							<i class="bx bx-home-circle me-2"></i><span>{$_("menuitems.dashboards.text")}</span> <div class="arrow-down"></div>
						</Link>
						<div class="dropdown-menu {current == 'dashboards'
						? 'show'
						: ''}" aria-labelledby="topnav-dashboard">

							<Link to="/index" class="dropdown-item">{$_("menuitems.dashboards.list.default")}</Link>
							<Link to="/dashboard-saas" class="dropdown-item">{$_("menuitems.dashboards.list.saas")}</Link>
							<Link to="/dashboard-crypto" class="dropdown-item">{$_("menuitems.dashboards.list.crypto")}</Link>
							<Link to="/dashboard-blog" class="dropdown-item">{$_("menuitems.dashboards.list.blog")}</Link>
							<Link to="/dashboard-job" class="dropdown-item">{$_("menuitems.dashboards.list.jobs")}</Link>
						</div>
					</li>

					<li class="nav-item dropdown">
						<Link class="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-uielement" role="button" on:click={() => changeClassAttribute("uielements")}>
							<i class="bx bx-tone me-2"></i>
							<span> {$_("menuitems.uielements.text")}</span> 
							<div class="arrow-down"></div>
						</Link>

						<div class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl {current === 'uielements'
						? 'show'
						: ''}"
							aria-labelledby="topnav-uielement">
							<div class="row">
								<div class="col-lg-4">
									<div>
										<Link to="/ui-alerts" class="dropdown-item">{$_("menuitems.uielements.list.alerts")}</Link>
										<Link to="/ui-buttons" class="dropdown-item">{$_("menuitems.uielements.list.buttons")}</Link>
										<Link to="/ui-cards" class="dropdown-item">{$_("menuitems.uielements.list.cards")}</Link>
										<Link to="/ui-carousel" class="dropdown-item">{$_("menuitems.uielements.list.carousel")}</Link>
										<Link to="/ui-dropdowns" class="dropdown-item">{$_("menuitems.uielements.list.dropdowns")}</Link>
										<Link to="/ui-offcanvas" class="dropdown-item">{$_("menuitems.uielements.list.offcanvas")}</Link>
										<Link to="/ui-grid" class="dropdown-item">{$_("menuitems.uielements.list.grid")}</Link>
									</div>
								</div>
								<div class="col-lg-4">
									<div>
										<Link to="/ui-placeholders" class="dropdown-item">{$_("menuitems.uielements.list.placeholders")}</Link>
										<Link to="/ui-images" class="dropdown-item">{$_("menuitems.uielements.list.images")}</Link>
										<Link to="/ui-modals" class="dropdown-item">{$_("menuitems.uielements.list.modals")}</Link>
										<Link to="/ui-rangeslider" class="dropdown-item">{$_("menuitems.uielements.list.rangeslider")}</Link>
										<Link to="/ui-session-timeout" class="dropdown-item">{$_("menuitems.uielements.list.session-timeout")}</Link>
										<Link to="/ui-progressbars" class="dropdown-item">{$_("menuitems.uielements.list.progressbar")}</Link>
										<Link to="/ui-sweet-alert" class="dropdown-item">{$_("menuitems.uielements.list.sweetalert")}</Link>
									</div>
								</div>
								<div class="col-lg-4">
									<div>
										<Link to="/ui-utility" class="dropdown-item">{$_("menuitems.uielements.list.utility")}</Link>
										<Link to="/ui-tabs-accordions" class="dropdown-item">{$_("menuitems.uielements.list.tabs")}</Link>
										<Link to="/ui-typography" class="dropdown-item">{$_("menuitems.uielements.list.typography")}</Link>
										<Link to="/ui-video" class="dropdown-item">{$_("menuitems.uielements.list.video")}</Link>
										<Link to="/ui-general" class="dropdown-item">{$_("menuitems.uielements.list.general")}</Link>
										<Link to="/ui-colors" class="dropdown-item">{$_("menuitems.uielements.list.colors")}</Link>
										<Link to="/ui-toast" class="dropdown-item">{$_('menuitems.uielements.list.toast')}</Link>
									</div>
								</div>
							</div>

						</div>
					</li>

					<li class="nav-item dropdown">
						<Link class="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-pages" role="button" on:click={() => changeClassAttribute("apps")}>
							<i class="bx bx-customize me-2"></i><span>{$_("menuitems.apps.text")}</span> <div class="arrow-down"></div>
						</Link>
						<div class="dropdown-menu {current == "apps" ? "show" : ""}" aria-labelledby="topnav-pages">

							<Link to="/calendar" class="dropdown-item">{$_("menuitems.calendar.text")}</Link>
							<Link to="/chat" class="dropdown-item">{$_("menuitems.chat.text")}</Link>
							<Link to="/apps-filemanager" class="dropdown-item">{$_("menuitems.filemanager.text")}</Link>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-email"
								on:click={() => changeClassAttribute("apps", "email")}
									role="button">
									<span>{$_("menuitems.email.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child == "email" ? "show" : ""}" aria-labelledby="topnav-email">
									<Link to="/email-inbox" class="dropdown-item">{$_("menuitems.email.list.inbox")}</Link>
									<Link to="/email-read" class="dropdown-item">{$_("menuitems.email.list.reademail")}</Link>

									<div class="dropdown">
										<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-blog"
											role="button">
											<span>{$_("menuitems.email.list.template.text")}</span> <div class="arrow-down"></div>
										</Link>
										<div class="dropdown-menu" aria-labelledby="topnav-blog">
											<Link to="/email-template-basic" class="dropdown-item">{$_("menuitems.email.list.template.list.basic")}</Link>
											<Link to="/email-template-alert" class="dropdown-item">{$_("menuitems.email.list.template.list.alert")}</Link>
											<Link to="/email-template-billing" class="dropdown-item">{$_("menuitems.email.list.template.list.billing")}</Link>
										</div>
									</div>
								</div>
							</div>
				
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-ecommerce"
								on:click={() => changeClassAttribute("apps", "ecommerce")}
									role="button">
									<span>{$_("menuitems.ecommerce.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child == "ecommerce" ? "show" : ""}" aria-labelledby="topnav-ecommerce">
									<Link to="/ecommerce-products" class="dropdown-item">{$_("menuitems.ecommerce.list.products")}</Link>
									<Link to="/ecommerce-product-detail" class="dropdown-item">{$_("menuitems.ecommerce.list.productdetail")}</Link>
									<Link to="/ecommerce-orders" class="dropdown-item">{$_("menuitems.ecommerce.list.orders")}</Link>
									<Link to="/ecommerce-customers" class="dropdown-item">{$_("menuitems.ecommerce.list.customers")}</Link>
									<Link to="/ecommerce-cart" class="dropdown-item">{$_("menuitems.ecommerce.list.cart")}</Link>
									<Link to="/ecommerce-checkout" class="dropdown-item">{$_("menuitems.ecommerce.list.checkout")}</Link>
									<Link to="/ecommerce-shops" class="dropdown-item">{$_("menuitems.ecommerce.list.shops")}</Link>
									<Link to="/ecommerce-add-product" class="dropdown-item">{$_("menuitems.ecommerce.list.addproduct")}</Link>
								</div>
							</div>

							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-crypto"
									on:click={() => changeClassAttribute("apps", "crypto")}
									role="button">
									<span>{$_("menuitems.crypto.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child == "crypto" ? "show" : ""}" aria-labelledby="topnav-crypto">
									<Link to="/crypto-wallet" class="dropdown-item">{$_("menuitems.crypto.list.wallet")}</Link>
									<Link to="/crypto-buy-sell" class="dropdown-item">{$_("menuitems.crypto.list.buy/sell")}</Link>
									<Link to="/crypto-exchange" class="dropdown-item">{$_("menuitems.crypto.list.exchange")}</Link>
									<Link to="/crypto-lending" class="dropdown-item">{$_("menuitems.crypto.list.lending")}</Link>
									<Link to="/crypto-orders" class="dropdown-item">{$_("menuitems.crypto.list.orders")}</Link>
									<Link to="/crypto-kyc-application" class="dropdown-item">{$_("menuitems.crypto.list.kycapplication")}</Link>
									<Link to="/crypto-ico-landing" class="dropdown-item">{$_("menuitems.crypto.list.icolanding")}</Link>
								</div>
							</div>
				
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-project"
									on:click={() => changeClassAttribute("apps", "projects")}
									role="button">
									<span>{$_("menuitems.projects.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child == "projects" ? "show" : ""}" aria-labelledby="topnav-project">
									<Link to="/projects-grid" class="dropdown-item">{$_("menuitems.projects.list.grid")}</Link>
									<Link to="/projects-list" class="dropdown-item">{$_("menuitems.projects.list.projectlist")}</Link>
									<Link to="/projects-overview" class="dropdown-item">{$_("menuitems.projects.list.overview")}</Link>
									<Link to="/projects-create" class="dropdown-item">{$_("menuitems.projects.list.create")}</Link>
								</div>
							</div>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-task"
									on:click={() => changeClassAttribute("apps", "tasks")}
									role="button">
									<span>{$_("menuitems.tasks.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child == "tasks" ? "show" : ""}" aria-labelledby="topnav-task">
									<Link to="/tasks-list" class="dropdown-item">{$_("menuitems.tasks.list.tasklist")}</Link>
									<Link to="/tasks-create" class="dropdown-item">{$_("menuitems.tasks.list.createtask")}</Link>
								</div>
							</div>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-contact"
									on:click={() => changeClassAttribute("apps", "contacts")}
									role="button">
									<span>{$_("menuitems.contacts.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child == "contacts" ? "show" : ""}" aria-labelledby="topnav-contact">
									<Link to="/contacts-grid" class="dropdown-item">{$_("menuitems.contacts.list.usergrid")}</Link>
									<Link to="/contacts-list" class="dropdown-item">{$_("menuitems.contacts.list.userlist")}</Link>
									<Link to="/contacts-profile" class="dropdown-item">{$_("menuitems.contacts.list.profile")}</Link>
								</div>
							</div>

							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-blog"
									on:click={() => changeClassAttribute("apps", "blog")}
									role="button">
									<span>{$_("menuitems.blog.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child == "blog" ? "show" : ""}" aria-labelledby="topnav-blog">
									<Link to="/blog-list" class="dropdown-item">{$_("menuitems.blog.list.bloglist")}</Link>
									<Link to="/blog-grid" class="dropdown-item">{$_("menuitems.blog.list.grid")}</Link>
									<Link to="/blog-details" class="dropdown-item">{$_("menuitems.blog.list.detail")}</Link>
								</div>
							</div>
						</div>
					</li>

					<li class="nav-item dropdown">
						<Link class="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-components" role="button" on:click={() => changeClassAttribute("components")}>
							<i class="bx bx-collection me-2"></i><span>{$_("menuitems.components.text")}</span> <div class="arrow-down"></div>
						</Link>
						<div class="dropdown-menu {current == "components" ? "show" : ""}" aria-labelledby="topnav-components">
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-form" 
									on:click={() => changeClassAttribute("components", "forms")}
									role="button">
									<span>{$_("menuitems.forms.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child === "forms" ? "show" : ""}" aria-labelledby="topnav-form">
									<Link to="/form-elements" class="dropdown-item">{$_("menuitems.forms.list.elements")}</Link>
									<Link to="/form-layouts" class="dropdown-item">{$_("menuitems.forms.list.layouts")}</Link>
									<Link to="/form-advanced" class="dropdown-item">{$_("menuitems.forms.list.advanced")}</Link>
									<Link to="/form-editors" class="dropdown-item">{$_("menuitems.forms.list.editor")}</Link>
									<Link to="/form-uploads" class="dropdown-item">{$_("menuitems.forms.list.fileupload")}</Link>
									<Link to="/form-repeater" class="dropdown-item">{$_("menuitems.forms.list.repeater")}</Link>
									<Link to="/form-wizard" class="dropdown-item">{$_("menuitems.forms.list.wizard")}</Link>
								</div>
							</div>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-table"
									role="button" on:click={() => changeClassAttribute("components", "tables")}>
									<span>{$_("menuitems.tables.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child === "tables" ? "show" : ""}" aria-labelledby="topnav-table">
									<Link to="/tables-basic" class="dropdown-item">{$_("menuitems.tables.list.basic")}</Link>
									<Link to="/tables-datatable" class="dropdown-item">{$_("menuitems.tables.list.datatable")}</Link>
									<Link to="/tables-editable" class="dropdown-item">{$_("menuitems.tables.list.editabletable")}</Link>
								</div>
							</div>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-charts"
									role="button" on:click={() => changeClassAttribute("components", "charts")}>
									<span>{$_("menuitems.charts.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child === "charts" ? "show" : ""}" aria-labelledby="topnav-charts">
									<Link to="/charts-apex" class="dropdown-item">{$_("menuitems.charts.list.apex")}</Link>
									<Link to="/charts-chartjs" class="dropdown-item">{$_("menuitems.charts.list.chartjs")}</Link>
								</div>
							</div>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-icons"
									role="button" on:click={() => changeClassAttribute("components", "icons")}>
									<span>{$_("menuitems.icons.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child === "icons" ? "show" : ""}" aria-labelledby="topnav-icons">
									<Link to="/icons-boxicons" class="dropdown-item">{$_("menuitems.icons.list.boxicons")}</Link>
									<Link to="/icons-materialdesign" class="dropdown-item">{$_("menuitems.icons.list.materialdesign")}</Link>
									<Link to="/icons-dripicons" class="dropdown-item">{$_("menuitems.icons.list.dripicons")}</Link>
									<Link to="/icons-fontawesome" class="dropdown-item">{$_("menuitems.icons.list.fontawesome")}</Link>
								</div>
							</div>
						</div>
					</li>

					<li class="nav-item dropdown">
						<Link class="nav-link dropdown-toggle arrow-none" to="/#" id="topnav-more" role="button" on:click={() => changeClassAttribute("pages")}
						>
							<i class="bx bx-file me-2"></i><span>{$_("navbar.dropdown.megamenu.extrapages.title")}</span> <div class="arrow-down"></div>
						</Link>
						<div class="dropdown-menu {current === "pages" ? "show" : ""}" aria-labelledby="topnav-more">
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-invoice"
									on:click={() => changeClassAttribute("pages", "invoice")}
									role="button">
									<span>{$_("menuitems.invoices.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child === "invoice" ? "show" : ""}" aria-labelledby="topnav-invoice">
									<Link to="/invoices-list" class="dropdown-item">{$_("menuitems.invoices.list.invoicelist")}</Link>
									<Link to="/invoices-detail" class="dropdown-item">{$_("menuitems.invoices.list.invoicedetail")}</Link>
								</div>
							</div>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" id="topnav-auth"
									on:click={() => changeClassAttribute("pages", "authentication")}
									role="button">
									<span>{$_("menuitems.authentication.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child === "authentication" ? "show" : ""}" aria-labelledby="topnav-auth">
									<Link to="/auth-login" class="dropdown-item">{$_("menuitems.authentication.list.login")}</Link>
									<Link to="/auth-login-2" class="dropdown-item">{$_("menuitems.authentication.list.login-2")}</Link>
									<Link to="/auth-register" class="dropdown-item">{$_("menuitems.authentication.list.register")}</Link>
									<Link to="/auth-register-2" class="dropdown-item">{$_("menuitems.authentication.list.register-2")}</Link>
									<Link to="/auth-recoverpw" class="dropdown-item">{$_("menuitems.authentication.list.recoverpwd")}</Link>
									<Link to="/auth-recoverpw-2" class="dropdown-item">{$_("menuitems.authentication.list.recoverpwd-2")}</Link>
									<Link to="/auth-lock-screen" class="dropdown-item">{$_("menuitems.authentication.list.lockscreen")}</Link>
									<Link to="/auth-lock-screen-2" class="dropdown-item">{$_("menuitems.authentication.list.lockscreen-2")}</Link>
									<Link to="/auth-confirm-mail" class="dropdown-item">{$_("menuitems.authentication.list.confirm-mail")}</Link>
									<Link to="/auth-confirm-mail-2" class="dropdown-item">{$_("menuitems.authentication.list.confirm-mail-2")}</Link>
									<Link to="/auth-email-verification" class="dropdown-item">{$_("menuitems.authentication.list.verification")}</Link>
									<Link to="/auth-email-verification-2" class="dropdown-item">{$_("menuitems.authentication.list.verification-2")}</Link>
									<Link to="/auth-two-step-verification" class="dropdown-item">{$_("menuitems.authentication.list.verification-step")}</Link>
									<Link to="/auth-two-step-verification-2" class="dropdown-item">{$_("menuitems.authentication.list.verification-step-2")}</Link>
								</div>
							</div>
							<div class="dropdown">
								<Link class="dropdown-item dropdown-toggle arrow-none" to="/#" on:click={() => changeClassAttribute("pages", "utility")} id="topnav-utility"
									role="button">
									<span>{$_("menuitems.utility.text")}</span> <div class="arrow-down"></div>
								</Link>
								<div class="dropdown-menu {current_child === "utility" ? "show" : ""}" aria-labelledby="topnav-utility">
									<Link to="/pages-starter" class="dropdown-item">{$_("menuitems.utility.list.starter")}</Link>
									<Link to="/pages-maintenance" class="dropdown-item">{$_("menuitems.utility.list.maintenance")} </Link>
									<Link to="/pages-comingsoon" class="dropdown-item">{$_("navbar.dropdown.megamenu.extrapages.list.comingsoon")}</Link>
									<Link to="/pages-timeline" class="dropdown-item">{$_("navbar.dropdown.megamenu.extrapages.list.timeline")}</Link>
									<Link to="/pages-faqs" class="dropdown-item">{$_("navbar.dropdown.megamenu.extrapages.list.faqs")}</Link>
									<Link to="/pages-pricing" class="dropdown-item">{$_("menuitems.utility.list.pricing")}</Link>
									<Link to="/pages-404" class="dropdown-item">{$_("menuitems.utility.list.error404")}</Link>
									<Link to="/pages-500" class="dropdown-item">{$_("menuitems.utility.list.error500")}</Link>
								</div>
							</div>
						</div>
					</li>

				</ul>
			</div>
		</nav>
	</div>
</div><!-- Left Sidebar End -->