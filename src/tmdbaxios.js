import axios from "axios";

const tmdbaxios = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default tmdbaxios;