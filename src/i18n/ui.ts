export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export const defaultLang = "de" as const;

export const ui = {
  de: {
    "site.title": "Hackergarten Stuttgart",
    "site.description":
      "Jeden ersten Dienstag im Monat arbeiten wir gemeinsam an Open-Source-Projekten.",

    "nav.de": "DE",
    "nav.en": "EN",
    "nav.home": "Home",
    "nav.projects": "Projekte",
    "nav.brand": "Hackergarten Stuttgart",
    "theme.toggle": "Dark Mode umschalten",

    "hero.eyebrow": "Jeden ersten Dienstag im Monat",
    "hero.title": "Hackergarten Stuttgart",
    "hero.subline":
      "Gemeinsam an Open-Source-Projekten arbeiten – mit Essen, Getränken und guter Gesellschaft. Bring deinen Laptop mit.",
    "hero.cta": "Zum Meetup",
    "hero.meta": "ab 17:30 Uhr · codecentric AG, Industriestraße 3",

    "steps.title": "In drei Schritten zu Open Source beitragen",
    "steps.intro":
      "Kein Vorwissen nötig. Ein Abend reicht, um den ersten Beitrag zu leisten.",
    "steps.1.title":
      "Bring eine Idee für ein Projekt mit – oder schließ dich anderen an",
    "steps.1.body":
      "Ein Bug, der dich nervt, eine fehlende Doku, ein eigenes Tool. Wenn du nichts dabei hast, stellen andere ihre Projekte vor.",
    "steps.2.title": "Arbeite gemeinsam mit anderen an den Projekten",
    "steps.2.body":
      "In kleinen Gruppen, im Pair oder Mob. Erfahrene Contributor helfen beim Setup, beim Code und beim Reviewen.",
    "steps.3.title": "Erstelle einen Pull Request in einem Open-Source-Projekt",
    "steps.3.body":
      "Patch, Doku oder Test – am Ende des Abends geht dein Beitrag zurück an das Projekt und ist für alle nutzbar.",

    "discord.body":
      "Die Gespräche gehen auf Discord weiter: Fragen zum Setup, offene Reviews und die nächsten Ideen – auch zwischen den Terminen.",
    "discord.cta": "Discord beitreten",

    "sponsors.eyebrow": "Unterstützt von",
    "sponsors.title": "Ort, Verpflegung und Netzwerk",
    "sponsors.codecentric.name": "codecentric AG",
    "sponsors.codecentric.desc":
      "Gastgeber und Veranstalter am Standort Stuttgart.",
    "sponsors.wifo.name": "Wirtschaftsförderung Stuttgart",
    "sponsors.wifo.desc": "Fördert die lokale Tech- und Open-Source-Community.",
    "sponsors.hackergarten.name": "Hackergarten",
    "sponsors.hackergarten.desc":
      "Die weltweite Hackergarten-Organisation, hackergarten.net.",

    "footer.madePrefix": "Made with",
    "footer.madeSuffix": "in Stuttgart",
    "footer.flag": "Deutschland",
    "footer.tagline":
      "Ein offenes Treffen für alle, die zu Open Source beitragen wollen.",
    "footer.whenWhere": "Wann & Wo",
    "footer.when": "Jeden ersten Dienstag im Monat, ab 17:30 Uhr",
    "footer.venueName": "codecentric AG",
    "footer.venueAddress": "Industriestraße 3, 70565 Stuttgart",
    "footer.community": "Community",
    "footer.bring": "Mitbringen: Laptop und Zeit",

    "projects.title": "Projekte",
    "projects.intro":
      "Woran wir bei den letzten Treffen gearbeitet haben – von kleinen Patches bis zu eigenen Tools. Diese Übersicht wächst mit jedem Termin.",
    "projects.repo": "Repository",
    "projects.back": "Alle Projekte",
  },
  en: {
    "site.title": "Hackergarten Stuttgart",
    "site.description":
      "On the first Tuesday of every month, we work together on open source projects.",

    "nav.de": "DE",
    "nav.en": "EN",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.brand": "Hackergarten Stuttgart",
    "theme.toggle": "Toggle dark mode",

    "hero.eyebrow": "First Tuesday of every month",
    "hero.title": "Hackergarten Stuttgart",
    "hero.subline":
      "Work together on open source projects – with food, drinks, and good company. Just bring your laptop.",
    "hero.cta": "Join on Meetup",
    "hero.meta": "from 5:30 PM · codecentric AG, Industriestraße 3",

    "steps.title": "Contribute to open source in three steps",
    "steps.intro":
      "No prior experience needed. One evening is enough to make your first contribution.",
    "steps.1.title": "Bring an idea for a project – or join someone else's",
    "steps.1.body":
      "A bug that annoys you, missing documentation, a tool of your own. If you arrive empty-handed, others will present their projects.",
    "steps.2.title": "Work on the projects together with others",
    "steps.2.body":
      "In small groups, pairing or mobbing. Experienced contributors help with the setup, the code and the reviews.",
    "steps.3.title": "Open a pull request in an open source project",
    "steps.3.body":
      "A patch, documentation or a test – by the end of the evening your contribution goes back to the project for everyone to use.",

    "discord.body":
      "The conversation continues on Discord: setup questions, open reviews and the next ideas – also between meetups.",
    "discord.cta": "Join Discord",

    "sponsors.eyebrow": "Supported by",
    "sponsors.title": "Venue, food and network",
    "sponsors.codecentric.name": "codecentric AG",
    "sponsors.codecentric.desc": "Host and organiser at the Stuttgart office.",
    "sponsors.wifo.name": "Wirtschaftsförderung Stuttgart",
    "sponsors.wifo.desc": "Supports the local tech and open source community.",
    "sponsors.hackergarten.name": "Hackergarten",
    "sponsors.hackergarten.desc":
      "The worldwide Hackergarten organisation, hackergarten.net.",

    "footer.madePrefix": "Made with",
    "footer.madeSuffix": "in Stuttgart",
    "footer.flag": "Germany",
    "footer.tagline":
      "An open meetup for everyone who wants to contribute to open source.",
    "footer.whenWhere": "When & Where",
    "footer.when": "First Tuesday of every month, from 5:30 PM",
    "footer.venueName": "codecentric AG",
    "footer.venueAddress": "Industriestraße 3, 70565 Stuttgart",
    "footer.community": "Community",
    "footer.bring": "Bring: laptop and time",

    "projects.title": "Projects",
    "projects.intro":
      "What we worked on at recent meetups – from small patches to tools of our own. This overview grows with every session.",
    "projects.repo": "Repository",
    "projects.back": "All projects",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof ui.de;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}

export function getLocalePath(lang: Lang, path: string = ""): string {
  if (lang === defaultLang) {
    return path || "/";
  }
  return `/${lang}${path || ""}` || `/${lang}`;
}

/**
 * Strips the locale prefix from a pathname so a route can be re-localised.
 * `/en/projects` -> `/projects`, `/en/` -> `/`.
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] && segments[0] in ui) segments.shift();
  return segments.length ? `/${segments.join("/")}` : "/";
}

/** Formats a date in the reader's locale, e.g. "3. Februar 2026" / "3 February 2026". */
export function formatDate(lang: Lang, date: Date): string {
  return new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
