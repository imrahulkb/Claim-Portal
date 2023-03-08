<script>
	import { _ } from 'svelte-i18n';
	import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'sveltestrap';
	import { user } from '../helpers/store';
	import { auth } from '../helpers/firebase';
	import { navigate } from 'svelte-routing';

	const handleLogOut = () => {
		auth.signOut().then(
			function () {
				// Sign-out successful.
				user.set({ ...$user, loggedIn: false });
				navigate('/login');
			},
			function (error) {
				// An error happened.
				console.warn('error on logout', error.message);
			}
		);
	};
</script>

<Dropdown class="dropdown d-inline-block">
	<DropdownToggle class="btn header-item headerbtn" id="page-header-user-dropdown" tag="button" color="">
		<img class="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
		<span class="d-none d-xl-inline-block ms-1"> Admin </span>
		<i class="mdi mdi-chevron-down d-none d-xl-inline-block" />
	</DropdownToggle>

	<DropdownMenu class="dropdown-menu-end">
		<h6 class="dropdown-header">{$_('navbar.dropdown.profile.list.welcome')}</h6>
		<DropdownItem tag="a" href={'/contacts-profile'}
			><i class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1" />
			<span class="align-middle" key="t-profile">{$_('navbar.dropdown.henry.list.profile')}</span>
		</DropdownItem>
		<DropdownItem tag="a" href={'#'}
			><i class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1" />
			<span class="align-middle" key="t-messages">{$_('navbar.dropdown.henry.list.mywallet')}</span>
		</DropdownItem>
		<DropdownItem tag="a" href={'#'}
			><i class="mdi mdi-calendar-check-outline text-muted font-size-16 align-middle me-1" />
			<span class="align-middle" key="t-taskboard">{$_('navbar.dropdown.henry.list.settings')}</span>
		</DropdownItem>
		<DropdownItem tag="a" href={'/auth-lock-screen'}
			><i class="mdi mdi-lock text-muted font-size-16 align-middle me-1" />
			<span class="align-middle" key="t-lock-screen">{$_('navbar.dropdown.henry.list.lockscreen')}</span>
		</DropdownItem>
		<div class="dropdown-divider" />
		<DropdownItem tag="a" on:click={handleLogOut}
			><i class="mdi mdi-logout text-muted font-size-16 align-middle me-1" />
			<span class="align-middle" key="t-logout">{$_('navbar.dropdown.henry.list.logout')}</span>
		</DropdownItem>
	</DropdownMenu>
</Dropdown>