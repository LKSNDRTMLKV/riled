import { StandingsEntry } from "@/validation/zod";

export interface LeagueSeasonStandingsApiResponse {
  response: [
    {
      league: {
        id: string;
        name: string;
        country: string;
        logo: string | null;
        flag: string | null;
        season: number;
        standings: Array<Array<typeof StandingsEntry>>;
      };
    }
  ];
}