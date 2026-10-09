import { siDiscord, siGithub, siMeetup } from "simple-icons";

/** Brand icon paths from Simple Icons, drawn on a 24×24 viewBox. */
export const icons = {
  discord: siDiscord.path,
  github: siGithub.path,
  meetup: siMeetup.path,
} as const;

export type IconName = keyof typeof icons;
export type IconLink = { href: string; label: string; icon: IconName };
