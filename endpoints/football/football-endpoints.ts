interface FootballEndpointsProps {
    countries: string
    standings: string
}

const FootballEndpoints : FootballEndpointsProps = {
  countries: "https://api-football-v1.p.rapidapi.com/v3/countries",
  standings: "https://api-football-v1.p.rapidapi.com/v3/standings",
};

export default FootballEndpoints;
