import type { UIKey } from "../i18n/ui";

export const siteUrl = "https://hackergarten-stg.github.io";

/** Every external destination the site links to, declared once. */
export const links = {
  meetup: "https://www.meetup.com/hackergarten-stuttgart/",
  discord: "https://discord.gg/EXEP5aQx8y",
  github: "https://github.com/hackergarten-stg",
  hackergarten: "https://hackergarten.net",
  codecentric: "https://www.codecentric.de/standorte/stuttgart",
  wifo: "https://wirtschaftsfoerderung.stuttgart.de/",
} as const;

/**
 * Routes are always spelled in English; German is served unprefixed and
 * English lives under `/en/` (see AGENTS.md).
 */
export const navRoutes: { path: string; labelKey: UIKey }[] = [
  { path: "/", labelKey: "nav.home" },
  { path: "/projects", labelKey: "nav.projects" },
];

export const sponsors: {
  href: string;
  nameKey: UIKey;
  descKey: UIKey;
  logo?: string;
}[] = [
  {
    href: links.codecentric,
    nameKey: "sponsors.codecentric.name",
    descKey: "sponsors.codecentric.desc",
  },
  {
    href: links.wifo,
    nameKey: "sponsors.wifo.name",
    descKey: "sponsors.wifo.desc",
  },
  {
    href: links.hackergarten,
    nameKey: "sponsors.hackergarten.name",
    descKey: "sponsors.hackergarten.desc",
  },
];

export const steps: { number: string; titleKey: UIKey; bodyKey: UIKey }[] = [
  { number: "01", titleKey: "steps.1.title", bodyKey: "steps.1.body" },
  { number: "02", titleKey: "steps.2.title", bodyKey: "steps.2.body" },
  { number: "03", titleKey: "steps.3.title", bodyKey: "steps.3.body" },
];

export const communityLinks: { href: string; label: string }[] = [
  { href: links.github, label: "GitHub" },
  { href: links.discord, label: "Discord" },
  { href: links.meetup, label: "Meetup" },
  { href: links.hackergarten, label: "hackergarten.net" },
];
