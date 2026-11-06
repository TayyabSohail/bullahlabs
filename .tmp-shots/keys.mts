import { en } from '../src/i18n/dictionaries/en';
import { de } from '../src/i18n/dictionaries/de';
const walk = (o: any, p = ''): string[] =>
  o && typeof o === 'object' && !Array.isArray(o)
    ? Object.entries(o).flatMap(([k, v]) => walk(v, p ? `${p}.${k}` : k))
    : [p];
const a = new Set(walk(en)), b = new Set(walk(de));
const onlyEn = [...a].filter((k) => !b.has(k)), onlyDe = [...b].filter((k) => !a.has(k));
console.log('en keys', a.size, 'de keys', b.size);
console.log('missing in de:', onlyEn.slice(0, 40));
console.log('extra in de:', onlyDe.slice(0, 40));
// identical strings (possible untranslated) in hero-ish paths
const get = (o: any, k: string) => k.split('.').reduce((x, y) => x?.[y], o);
const same = [...a].filter((k) => /hero|notFound|contactPage|workPage|servicesPage|approachPage|legal/i.test(k) && typeof get(en, k) === 'string' && get(en, k) === get(de, k) && String(get(en, k)).length > 3);
console.log('same EN/DE strings in hero paths:', same);
