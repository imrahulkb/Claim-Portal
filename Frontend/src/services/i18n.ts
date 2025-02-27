import { dictionary, locale, _ } from "svelte-i18n";

const MESSAGE_FILE_URL_TEMPLATE = "./lang/{locale}.json";

let cachedLocale: string;

async function setupI18n({ withLocale: _locale } = { withLocale: "en" }) {
  const messsagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
    "{locale}",
    _locale
  );

  const response = await fetch(messsagesFileUrl);
  const messages = await response.json();
  dictionary.set({ [_locale]: messages });
  cachedLocale = _locale;
  locale.set(_locale);
}

export { _, locale, setupI18n };
