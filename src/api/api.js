import axios from "axios";

export const api = axios.create({
    baseURL : "https://api.openweathermap.org/data/2.5"
})

export const api_key = "5663777e1d80fb40551f0cd4487b08aa";