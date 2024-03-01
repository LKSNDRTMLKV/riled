import { NextResponse } from "next/server";
import axios from 'axios'

export async function GET(
  req: Request,
  { params }: { params: { leagueId: string } }
) {
    try {
        if(!params.leagueId) return new NextResponse("League id is required", {status: 400})

        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: {id: params.leagueId},
            headers: {
              'X-RapidAPI-Key': '0f4a65f08amsh79737b6cec90376p19f7d2jsnf33d83c6a835',
              'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
            }
          };

          const response = await axios.request(options)

          return NextResponse.json(response.data)

    } catch (error) {
        console.log(error)
        return new NextResponse("error", {status: 500})
    }
}
