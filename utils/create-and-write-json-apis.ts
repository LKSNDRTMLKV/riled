import { LeagueSeasonStandingsApiResponse } from "@/interface/apis/football/standings";
import fs from "fs/promises";
import path from "path";

export const getFolderPath = (league: string) => {
  return path.join(process.cwd(), "json", "football", "standings", league);
};

export const getFilePath = (league: string, season: string) => {
  const folderPath = getFolderPath(league);
  return path.join(folderPath, `${season}.json`);
};

export const checkAndReadFile = async (league: string, season: string) => {
  const filePath = getFilePath(league, season);

  try {
    await fs.access(filePath);

    const fileContent = await fs.readFile(filePath, "utf-8");

    if (fileContent.trim() !== "") {
      return JSON.parse(fileContent) as LeagueSeasonStandingsApiResponse;
    }
  } catch (err) {
    return false;
  }
};

export const createAndWriteFile = async (
  league: string,
  season: string,
  data: LeagueSeasonStandingsApiResponse
) => {
  const folderPath = getFolderPath(league);
  const filePath = getFilePath(league, season);

  try {
    await fs.mkdir(folderPath, { recursive: true });

    // Stringify the league, season, and data here
    const stringifiedData = JSON.stringify(data, null, 2);

    await fs.writeFile(filePath, stringifiedData);

    return true;
  } catch (err) {
    return false;
  }
};
