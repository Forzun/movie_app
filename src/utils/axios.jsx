import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGMxNmY4ZDJhZjgxYzlhYjMyNTBkMmY2ODNlOTFhNCIsIm5iZiI6MTcyMjQyMzk0Mi44NzUxNzQsInN1YiI6IjY2YWExNWYzYzhmYTkzNTQyMmRhYzlkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y6WJOPkCWL6CmZKxhQvbJEZBeO_wXwH7IF_8Z_XuEKQ",
  },
});

export default instance;

