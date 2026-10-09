import type { IconLink } from "../components/ui/icons";
import type { UIKey } from "../i18n/ui";

export const siteUrl = "https://hackergarten-stg.github.io";

/** Every external destination the site links to, declared once. */
export const links = {
  meetup: "https://www.meetup.com/hackergarten-stuttgart/",
  meetupEvents:
    "https://www.meetup.com/hackergarten-stuttgart/events/?type=upcoming",
  discord: "https://discord.gg/EXEP5aQx8y",
  github: "https://github.com/hackergarten-stg",
  hackergarten: "https://hackergarten.net",
  maps: "https://maps.app.goo.gl/va9SG3uaFDLB9QTP8",
  codecentric: "https://www.codecentric.de/standorte/stuttgart",
  wifo: "https://wrs.region-stuttgart.de/",
  heroVideo: "https://www.youtube-nocookie.com/embed/Rf5srOnhxgA",
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
  logoDark?: string;
}[] = [
  {
    href: links.codecentric,
    nameKey: "sponsors.codecentric.name",
    descKey: "sponsors.codecentric.desc",
    logo: "/sponsors/codecentric-wordmark.webp",
    logoDark: "/sponsors/codecentric-wordmark-dark.webp",
  },
  {
    href: links.wifo,
    nameKey: "sponsors.wifo.name",
    descKey: "sponsors.wifo.desc",
    logo: "/sponsors/wrs.svg",
    logoDark: "/sponsors/wrs-dark.svg",
  },
  {
    href: links.hackergarten,
    nameKey: "sponsors.hackergarten.name",
    descKey: "sponsors.hackergarten.desc",
    logo: "/sponsors/hackergarten.svg",
    logoDark: "/sponsors/hackergarten-dark.svg",
  },
];

export const steps: { number: string; titleKey: UIKey; bodyKey: UIKey }[] = [
  { number: "01", titleKey: "steps.1.title", bodyKey: "steps.1.body" },
  { number: "02", titleKey: "steps.2.title", bodyKey: "steps.2.body" },
  { number: "03", titleKey: "steps.3.title", bodyKey: "steps.3.body" },
];

type Link = { href: string; label: string };

const profiles = {
  github: { href: links.github, label: "GitHub", icon: "github" },
  discord: { href: links.discord, label: "Discord", icon: "discord" },
  meetup: { href: links.meetup, label: "Meetup" },
} satisfies Record<string, Link | IconLink>;

export const socialLinks: IconLink[] = [profiles.discord, profiles.github];

export const communityLinks: Link[] = [
  profiles.github,
  profiles.discord,
  profiles.meetup,
  { href: links.hackergarten, label: "hackergarten.net" },
];
