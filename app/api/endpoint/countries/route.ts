import FootballEndpoints from "@/endpoints/football/football-endpoints";
import RequestMethodsEnum from "@/enums/next/request-methods-enum";
import prismadb from "@/lib/prisma-db";
import { Country } from "@/validation/zod";
import axios from "axios";
import { NextResponse } from "next/server";

interface RequestOptions {
    method: string;
    url: string;
    params?: {
      league?: string;
      season?: string;
    };
    headers: {
      "X-RapidAPI-Key": string;
      "X-RapidAPI-Host": string;
    };
  }

export async function GET(
  req: Request
  //   { params }: { params: { name: string; code: string } }
) {
  try {
    const existingCountries = await prismadb.country.count();
    if (existingCountries > 0)
      return new NextResponse("Countries already inserted", { status: 200 });

    const options : RequestOptions = {
      method: RequestMethodsEnum.get,
      url: FootballEndpoints.countries,
      // params: {
      //   league: params.name,
      //   season: params.code,
      // },
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPIDAPI_KEY as string,
        "X-RapidAPI-Host": process.env.X_RAPIDAPI_HOST as string,
      },
    };

    const response = await axios.request(options);
    if (!response)
      return new NextResponse("Failed to get response from rapidapi", {
        status: 404,
      });

    const countriesData = response.data?.response ?? response.data;

    if (!Array.isArray(countriesData)) {
      return new NextResponse("Invalid response format", { status: 400 });
    }

    const validatedCountries = countriesData.map((country) =>
      Country.parse(country)
    );
    if (validatedCountries.some((data) => !data)) {
      return new NextResponse(
        "Zod error validation on incoming country response",
        { status: 500 }
      );
    }

    await prismadb.country.createMany({
      data: validatedCountries.map((data) => ({
        name: data.name,
        flag: data.flag,
        code: data.code,
      })),
    });
    return new NextResponse("Countries inserted successfully", { status: 201 });
  } catch (err: any) {
    return new NextResponse(err?.response, { status: 500 });
  }
}
