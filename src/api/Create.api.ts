import axios from "axios"

const API_KEY = 'f762860dd2f86a77663be7081c937d14'

// interface - начало 
export interface Movie {
  id: number;
  title: string;
  backdrop_path: string; 
  release_date: string;
  status: string;
  runtime: number;
  popularity: number;
  vote_average: number;
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string; 
}


export interface MovieCredit {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  character: string;
}

export interface Actor {
  id: number;
  cast_id: number;
  character: string;
  name: string;
  profile_path: string;
  birthday?: string;
  place_of_birth?: string;
  biography?: string;
  movie_credits?: MovieCredit[];
}

interface ApiResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

interface CreditsResponse {
  id: number;
  cast: Actor[];
}

// interface - конец 


// запросы - начало 
export const getAllMovies = async (pages = 1, language: string = 'en-US') => {
  let movies: Movie[] = [];
  try {
    for (let i = 1; i <= pages; i++) {
      const resp = await axios.get<ApiResponse>('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: API_KEY,
          language: language,
          page: i 
        }
      });
      if (resp.data && resp.data.results) {
        movies = movies.concat(resp.data.results);
      } else {
        console.error("Некорректный ответ от API на странице:", i, resp.data);
        throw new Error("Некорректный формат данных");
      }
    }
    return { results: movies };
  } catch (error) {
    console.error("Ошибка при загрузке фильмов:", error);
    throw error;
  }
};

export const getMovieById = async (id: string) => {
  try {
    const response = await axios.get<Movie>(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'ru-RU'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных о фильме:", error);
    throw error;
  }
};

export const getMovieCredits = async (id: string, Languages: string = 'ru-RU', Language: string = 'en-EN') => {
  try {
    const response = await axios.get<CreditsResponse>(`https://api.themoviedb.org/3/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: Languages,
        Language: Language
      }
    });
    return response.data.cast;
  } catch (error) {
    console.error("Ошибка при загрузке данных о фильме:", error);
    throw error;
  }
};

export const getActorDetails = async (id: string, language: string = 'ru-RU') => {
  try {
    const response = await axios.get<any>(`https://api.themoviedb.org/3/person/${id}`, {
      params: {
        api_key: API_KEY,
        language,
        append_to_response: 'movie_credits' 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке данных об актёре:", error);
    throw error
  }
}
// конец запросов