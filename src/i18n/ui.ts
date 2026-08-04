export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export const defaultLang = 'de' as const;

export const ui = {
  de: {
    'site.title': 'Hackergarten Stuttgart',
    'site.description': 'Jeden ersten Dienstag im Monat arbeiten wir gemeinsam an Open-Source-Projekten.',
    'nav.de': 'DE',
    'nav.en': 'EN',
    'hero.headline': 'Jeden ersten Dienstag im Monat',
    'hero.subline': 'Gemeinsam an Open-Source-Projekten arbeiten – mit Essen, Getränken und guter Gesellschaft. Bring deinen Laptop mit.',
    'hero.cta': 'Zum Meetup',
    'about.title': 'Was ist ein Hackergarten?',
    'about.p1': 'Ein Hackergarten ist eine Mischung aus Softwarewerkstatt, Labor, Klassenzimmer, Spielplatz, geselliger Runde und Studio. Ziel ist es, Neues zu schaffen, Bestehendes zu erweitern, Fehler zu beheben, Dokumentationen oder Tutorials zu schreiben.',
    'about.p2': 'Wir wollen etwas erarbeiten, was andere nutzen können – indem das Ergebnis am Ende als Patch, Contribution oder auf ähnlichem Wege einem Open-Source-Projekt zugeführt wird.',
    'about.p3': 'Man lernt neue Leute kennen, bekommt Einblick in Projekte oder Technologien, kann Erfahrungen und Wissen austauschen. Dazu ist jeder willkommen. Egal, ob du studierst oder schon lange dabei bist – jeder kann etwas beitragen, sofern er bereit ist, einen Laptop und Zeit mitzubringen.',
    'about.p4': 'Bringt Eure eigenen Ideen oder auch Probleme mit, und gemeinsam kann daraus etwas wachsen.',
    'about.link': 'Siehe auch:',
    'practical.title': 'Wann & Wo',
    'practical.when': 'Jeden ersten Dienstag im Monat, ab 17:30 Uhr',
    'practical.where': 'codecentric AG, Industriestraße 3, 70565 Stuttgart',
    'practical.bring': 'Mitbringen: Laptop und Zeit',
    'footer.hosted': 'Veranstaltet von',
  },
  en: {
    'site.title': 'Hackergarten Stuttgart',
    'site.description': 'On the first Tuesday of every month, we work together on open source projects.',
    'nav.de': 'DE',
    'nav.en': 'EN',
    'hero.headline': 'First Tuesday of Every Month',
    'hero.subline': 'Work together on open source projects – with food, drinks, and good company. Just bring your laptop.',
    'hero.cta': 'Join on Meetup',
    'about.title': 'What is a Hackergarten?',
    'about.p1': 'Hackergarten is a crafter\'s workshop, classroom, a laboratory, a social circle, a writing group, a playground, and an artist\'s studio. Our goal is to create something that others can use; whether it be working software, improved documentation, or better educational materials.',
    'about.p2': 'Our intent is to end each meeting with a patch or similar contribution submitted to an open and public project.',
    'about.p3': 'You meet new people, gain insight into projects or technologies, and exchange experiences and knowledge. Everyone is welcome. Whether you\'re a student or a veteran – everyone can contribute, as long as they\'re willing to bring a laptop and some time.',
    'about.p4': 'Bring your own ideas or problems, and together something can grow from them.',
    'about.link': 'See also:',
    'practical.title': 'When & Where',
    'practical.when': 'First Tuesday of every month, from 5:30 PM',
    'practical.where': 'codecentric AG, Industriestraße 3, 70565 Stuttgart',
    'practical.bring': 'Bring: Laptop and time',
    'footer.hosted': 'Hosted by',
  },
} as const;

export type UIKey = keyof typeof ui.de;

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function t(lang: keyof typeof ui, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function getLocalePath(lang: keyof typeof ui, path: string = ''): string {
  if (lang === defaultLang) {
    return path || '/';
  }
  return `/${lang}${path || ''}` || `/${lang}`;
}
