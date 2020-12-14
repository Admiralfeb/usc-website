import {
  InaraSquadLink,
  DiscordLink,
  PatreonLink,
  BlueprintLink,
} from 'data/uscLinks';

export const useLinks = () => {
  return { ...links };
};

export const getLinks = () => {
  return { ...links };
};

const links = {
  inaraSquadLink: InaraSquadLink,
  discordLink: DiscordLink,
  patreonLink: PatreonLink,
  blueprints: BlueprintLink,
};
