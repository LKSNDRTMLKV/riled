import { z } from "zod";

export const Team = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string().url(),
});

export const StandingsStats = z.object({
    played: z.number(),
    win: z.number(),
    draw: z.number(),
    lose: z.number(),
    goals: z.object({
      for: z.number(),
      against: z.number(),
    }),
  })

export const StandingsEntry = z.object({
  rank: z.number(),
  team: Team,
  points: z.number(),
  goalsDiff: z.number(),
  group: z.string(),
  form: z.string(),
  status: z.string().nullable(),
  description: z.string(). nullable(),
  all: StandingsStats,
  home: StandingsStats,
  away: StandingsStats,
  update: z.string(),
});

export const Country = z.object({
    name: z.string(),
    flag: z.string().nullable(),
    code: z.string().nullable(),
})

export const League = z.object({
    id: z.number(),
//   id: z
//     .string()
//     .refine((val) => !isNaN(Number(val)), {
//       message: "League id must be a number",
//     })
//     .transform(Number),
  name: z.string(),
  country: z.string(),
  logo: z.string().url().nullable(),
  flag: z.string().url().nullable(),
  season: z.number(),
//   season: z
//     .string()
//     .refine((val) => !isNaN(Number(val)), {
//       message: "Season must be a number",
//     })
//     .transform(Number),
  standings: z.array(z.array(StandingsEntry)),
});
