import { NextResponse } from "next/server";
import axios from "axios";
import RequestMethodsEnum from "@/enums/next/request-methods-enum";
import FootballEndpoints from "@/endpoints/football/football-endpoints";
import prismadb from "@/lib/prisma-db";
import { League, StandingsEntry } from "@/validation/zod";
import fs from "fs/promises";
import leagueStandings from "@/docs/api/standings/league.json";
import {
  checkAndReadFile,
  createAndWriteFile,
} from "@/utils/create-and-write-json-apis";
import { LeagueSeasonStandingsApiResponse } from "@/interface/apis/football/standings";

// ONE LEAGUE ONE SEASON FETCH AND SET

export async function GET(
  req: Request,
  { params }: { params: { leagueId: string; season: string } }
) {
  try {
    if (!params.leagueId || !params.season)
      return new NextResponse("League id and season are required", {
        status: 400,
      });

    const fileData = await checkAndReadFile(params.leagueId, params.season);

    if (fileData) {
      console.log('File exists ofc')
      return new NextResponse(JSON.stringify(fileData, null, 2), {
        status: 200,
      });
    }

    const existingLeagueByExternalId = await prismadb.league.findUnique({
      where: {
        externalId: +params.leagueId,
      },
    });
    if (existingLeagueByExternalId) {
      const existingSeasonByLeague = await prismadb.standings.findFirst({
        where: {
          leagueId: existingLeagueByExternalId.id,
          season: +params.season,
        },
      });
      if (existingSeasonByLeague)
        return new NextResponse("Season standings already exist", {
          status: 200,
        });
    }

    const options = {
      method: RequestMethodsEnum.get,
      url: FootballEndpoints.standings,
      params: {
        league: params.leagueId,
        season: params.season,
      },
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST,
      },
    };

    const response = await axios.request<LeagueSeasonStandingsApiResponse>(
      options
    );
    const [{ league: seasonLeagueData }] = response.data.response;


      const createdFile = await createAndWriteFile(
        params.leagueId,
        // seasonLeagueData.name,
        params.season,
        response.data
        );

        if (createdFile) {
          return new NextResponse(JSON.stringify(response.data), { status: 201 });
        }
        else {
          return new NextResponse("Failed to create file", { status: 500 });
        }

    // return NextResponse.json(response.data.response)
    // if (
    //   !response ||
    //   !response.data ||
    //   !Array.isArray(response.data.response) ||
    //   response.data.response.length === 0
    // )
    //   return new NextResponse("Failed to get valid response from rapidapi", {
    //     status: 404,
    //   });


    // const validatedData = League.parse(seasonLeagueData);
    // if (!validatedData)
    //   return new NextResponse(
    //     "Zod error validation on incoming league standing response"
    //   );

    // // const seasonLeagueData = response.data?.response ?? response.data;
    // // let validatedData;

    // // if (Array.isArray(seasonLeagueData)) {
    // //   if (seasonLeagueData.length === 0) {
    // //     return new NextResponse("League data was fount empty", { status: 404 });
    // //   }
    // //   for (const dataLeague of seasonLeagueData) {
    // //     validatedData = League.parse(dataLeague);
    // //   }
    // // }

    // // if (
    // //   !validatedData.id ||
    // //   !validatedData.name ||
    // //   !validatedData.season ||
    // //   !validatedData.country ||
    // //   !validatedData.standings ||
    // //   validatedData.standings.length === 0
    // // ) {
    // //   return new NextResponse("Corrupted data was found", { status: 404 });
    // // }

    // const existingLeague = await prismadb.league.findUnique({
    //   where: {
    //     externalId: validatedData.id,
    //     name: validatedData.name,
    //   },
    // });
    // let createdLeague;

    // if (!existingLeague) {
    //   const country = await prismadb.country.findUnique({
    //     where: {
    //       name: validatedData.country,
    //     },
    //   });

    //   createdLeague = await prismadb.league.create({
    //     data: {
    //       externalId: validatedData.id,
    //       name: validatedData.name,
    //       countryId: country?.id,
    //       logo: validatedData.logo,
    //       flag: validatedData.flag,
    //     },
    //   });

    //   if (country) {
    //     await prismadb.league.update({
    //       where: {
    //         externalId: validatedData.id,
    //       },
    //       data: {
    //         country: {
    //           connect: {
    //             id: country.id,
    //           },
    //         },
    //       },
    //     });
    //   }
    // }

    // const seasonStandings = await prismadb.standings.findFirst({
    //   where: {
    //     leagueId: existingLeague?.id,
    //     season: validatedData.season,
    //   },
    // });

    // if (!seasonStandings) {
    //   const standings = validatedData.standings.flat().map((entry) => entry);

    //   for (const stand of standings) {
    //     const {
    //       team,
    //       rank,
    //       points,
    //       goalsDiff,
    //       group,
    //       form,
    //       status,
    //       description,
    //       all,
    //       home,
    //       away,
    //       update,
    //     } = stand;

    //     let createdTeam;

    //     const existingTeam = await prismadb.team.findUnique({
    //       where: {
    //         externalId: team.id,
    //       },
    //     });

    //     if (!existingTeam) {
    //       createdTeam = await prismadb.team.create({
    //         data: {
    //           externalId: team.id,
    //           name: team.name,
    //           logo: team.logo,
    //           leagues: {
    //             connect: [{ id: (existingLeague ?? createdLeague)?.id }],
    //           },
    //         },
    //       });

    //       await prismadb.league.update({
    //         where: {
    //           externalId: (existingLeague ?? createdLeague)?.externalId,
    //         },
    //         data: {
    //           teams: {
    //             connect: [{ id: createdTeam.id }],
    //           },
    //         },
    //       });
    //     }

    //     const existingStandings = await prismadb.standings.findFirst({
    //       where: {
    //         leagueId: (existingLeague ?? createdLeague)?.id,
    //         teamId: (existingTeam ?? createdTeam)?.id,
    //         season: validatedData.season,
    //       },
    //     });

    //     if (!existingStandings) {
    //       const standingsAll = await prismadb.standingsAll.create({
    //         data: {
    //           played: all.played,
    //           win: all.win,
    //           draw: all.draw,
    //           lose: all.lose,
    //           goalsFor: all.goals.for,
    //           goalsAgainst: all.goals.against,
    //         },
    //       });

    //       const standingsHome = await prismadb.standingsHome.create({
    //         data: {
    //           played: home.played,
    //           win: home.win,
    //           draw: home.draw,
    //           lose: home.lose,
    //           goalsFor: home.goals.for,
    //           goalsAgainst: home.goals.against,
    //         },
    //       });

    //       const standingsAway = await prismadb.standingsAway.create({
    //         data: {
    //           played: away.played,
    //           win: away.win,
    //           draw: away.draw,
    //           lose: away.lose,
    //           goalsFor: away.goals.for,
    //           goalsAgainst: away.goals.against,
    //         },
    //       });

    //       const createdStandings = await prismadb.standings.create({
    //         data: {
    //           season: validatedData.season,
    //           rank: rank,
    //           form: form,
    //           description: description,
    //           points: points,
    //           goalsDiff: goalsDiff,
    //           group: group,
    //           status: status,
    //           update: update,
    //           standingsAllId: standingsAll.id,
    //           standingsHomeId: standingsHome.id,
    //           standingsAwayId: standingsAway.id,
    //           leagueId: (existingLeague ?? createdLeague)!.id,
    //           teamId: (existingTeam ?? createdTeam)!.id,
    //         },
    //       });

    //       if (createdStandings) {
    //         await prismadb.standings.update({
    //           where: {
    //             id: createdStandings.id,
    //           },
    //           data: {
    //             standingsAll: {
    //               connect: {
    //                 id: standingsAll.id,
    //               },
    //             },
    //             standingsHome: {
    //               connect: {
    //                 id: standingsHome.id,
    //               },
    //             },
    //             standingsAway: {
    //               connect: {
    //                 id: standingsAway.id,
    //               },
    //             },
    //           },
    //         });

    //         await prismadb.standingsAll.update({
    //           where: {
    //             id: standingsAll.id,
    //           },
    //           data: {
    //             standings: {
    //               connect: [{ id: createdStandings.id }],
    //             },
    //           },
    //         });
    //         await prismadb.standingsHome.update({
    //           where: {
    //             id: standingsHome.id,
    //           },
    //           data: {
    //             standings: {
    //               connect: [{ id: createdStandings.id }],
    //             },
    //           },
    //         });
    //         await prismadb.standingsAway.update({
    //           where: {
    //             id: standingsAway.id,
    //           },
    //           data: {
    //             standings: {
    //               connect: [{ id: createdStandings.id }],
    //             },
    //           },
    //         });
    //       }
    //     }
    //   }
    // }

    // return new NextResponse(
    //   "Standings for league/season inserted successfully",
    //   { status: 201 }
    // );
  } catch (error) {
    console.log(error);
    return new NextResponse("error", { status: 500 });
  }
}

function validateAndParseData(data: Object) {
  try {
    const validatedData = League.parse(data);
    return validatedData;
  } catch (validationError) {
    console.error("Validation error:", validationError);
    // Handle validation error, possibly log it
    return null;
  }
}
