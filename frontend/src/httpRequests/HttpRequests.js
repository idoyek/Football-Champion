// import axios from "axios";
const realMadrid = require("../RealMadrid.json");
const teams = require("../Teams.json");

export default class HttpRequests {
  static async fetchAllPlayers() {
    try {
      //   const response = await axios.get(
      //     "https://v3.football.api-sports.io/players/squads?team=541",
      //     {
      //       method: "GET",
      //       headers: {
      //         "x-rapidapi-host": "v3.football.api-sports.io",
      //         "x-rapidapi-key": "6795c50c0f76ba7ba3436570224aae73",
      //       },
      //     }
      //   );
      //   console.log(response.data.response[0]);
      //   return response.data.response[0].players;
      console.log(realMadrid);
      return realMadrid;
    } catch (error) {
      console.error("Error fetching players:", error);
      throw error;
    }
  }

  static async fetchAllTeams() {
    try {
      //   const response = await axios.get(
      //     "https://v3.football.api-sports.io/players/squads?team=541",
      //     {
      //       method: "GET",
      //       headers: {
      //         "x-rapidapi-host": "v3.football.api-sports.io",
      //         "x-rapidapi-key": "6795c50c0f76ba7ba3436570224aae73",
      //       },
      //     }
      //   );
      //   console.log(response.data.response[0]);
      //   return response.data.response[0].players;
      console.log(teams);
      return teams;
    } catch (error) {
      console.error("Error fetching teams:", error);
      throw error;
    }
  }
}
