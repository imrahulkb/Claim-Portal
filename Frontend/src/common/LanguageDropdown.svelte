<script>

	import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'sveltestrap';

	import { setupI18n } from '../services/i18n';

	import languages from '../common/data/languages';

	export let selectedLang = localStorage.getItem("I18N_LANGUAGE") || "en";

	let isOpen = false;

	function handleLocaleChange(lang) {
		setupI18n({ withLocale: lang });
		localStorage.setItem("I18N_LANGUAGE", lang);
	}

</script>

<Dropdown {isOpen} toggle={() => (isOpen = !isOpen)} class="d-inline-block">
	<DropdownToggle class="btn header-item headerbtn" tag="button" color="">
		<img src="/assets/images/flags/us.jpg" alt="Skote" height="16" class="d-block" />
	</DropdownToggle>
	<DropdownMenu class="language-switch dropdown-menu-end">
		{#each languages as language}
			<DropdownItem
				key={language.value}
				on:click={() => handleLocaleChange(language.value)}
				class={`notify-item language ${selectedLang === language.value ? 'active' : 'none'}`}
			>
				<img src={language.flag} alt="Skote" class="me-2" height="12" />
				<span class="align-middle">
					{language.label}
				</span>
			</DropdownItem>
		{/each}
	</DropdownMenu>
</Dropdown>