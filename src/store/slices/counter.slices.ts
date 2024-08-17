// // src/redux/movieSlice.ts
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_KEY = 'f762860dd2f86a77663be7081c937d14';

// export interface Movie {
//   id: number;
//   title: string;
//   overview: string;
//   release_date: string;
//   poster_path: string;
//   popularity: number;
//   vote_average: number;
//   genres: { id: number; name: string }[];
//   status: string;
//   runtime: number;
// }

// export interface Actor {
//   id: number;
//   cast_id: number;
//   character: string;
//   name: string;
//   profile_path: string;
// }

// interface MovieState {
//   movies: Movie[];
//   movie: Movie | null;
//   actors: Actor[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: MovieState = {
//   movies: [],
//   movie: null,
//   actors: [],
//   loading: false,
//   error: null,
// };

// export const fetchAllMovies = createAsyncThunk('movies/fetchAll', async (pages: number) => {
//   let movies: Movie[] = [];
//   for (let i = 1; i <= pages; i++) {
//     const resp = await axios.get('https://api.themoviedb.org/3/movie/popular', {
//       params: {
//         api_key: API_KEY,
//         language: 'ru-RU',
//         page: i,
//       },
//     });
//     movies = movies.concat(resp.data.results);
//   }
//   return movies;
// });

// export const fetchMovieById = createAsyncThunk('movie/fetchById', async (id: string) => {
//   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
//     params: {
//       api_key: API_KEY,
//       language: 'ru-RU',
//     },
//   });
//   return response.data;
// });

// export const fetchMovieCredits = createAsyncThunk('movie/fetchCredits', async (id: string) => {
//   const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
//     params: {
//       api_key: API_KEY,
//       language: 'ru-RU',
//     },
//   });
//   return response.data.cast;
// });

// const movieSlice = createSlice({
//   name: 'movie',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllMovies.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchAllMovies.fulfilled, (state, action) => {
//         state.loading = false;
//         state.movies = action.payload;
//       })
//       .addCase(fetchAllMovies.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Ошибка при загрузке фильмов';
//       })
//       .addCase(fetchMovieById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMovieById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.movie = action.payload;
//       })
//       .addCase(fetchMovieById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Ошибка при загрузке данных о фильме';
//       })
//       .addCase(fetchMovieCredits.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMovieCredits.fulfilled, (state, action) => {
//         state.loading = false;
//         state.actors = action.payload;
//       })
//       .addCase(fetchMovieCredits.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Ошибка при загрузке данных о фильме';
//       });
//   },
// });

// export default movieSlice.reducer;
