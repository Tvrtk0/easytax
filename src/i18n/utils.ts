import { translations, defaultLang, languages, type Lang, type TranslationKey } from './translations';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function getLangFromUrl(url: URL): Lang {
  const pathWithoutBase = url.pathname.replace(base, '');
  const [, langSegment] = pathWithoutBase.split('/');
  if (languages.includes(langSegment as Lang)) {
    return langSegment as Lang;
  }
  return defaultLang;
}

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function localizedPath(lang: Lang, path: string): string {
  return `${base}/${lang}${path}`;
}

export { languages, defaultLang, type Lang, type TranslationKey };
