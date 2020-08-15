const api_key = 'f8b5d807fbc79b4e92fc73f4f082f71c';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=$${api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=$${api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=$${api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=$${api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=$${api_key}&with_genres=99`

}
export default requests;
