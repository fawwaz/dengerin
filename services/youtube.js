import axios from "axios";
// import { URL } from "./urls";

// TODO : should store the information in more secure / separate file
const API_KEY = "AIzaSyCGX5i8Bt-AO7DDcDHLPHIMkiryDGfEeRY";

export function searchYT(query) {
  return axios
    .get(
      `https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=${encodeURI(
        query
      )}&key=${API_KEY}`
    )
    .then((res) => res.data);
}
