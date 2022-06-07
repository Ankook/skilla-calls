import axios from "axios";
import { API_URL, API_TOKEN } from "../constants/api";



const $api = axios.create({
  baseURL: API_URL,
  headers: {'Authorization': 'Bearer '+ API_TOKEN}

})
export { $api };