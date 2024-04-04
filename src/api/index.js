import { apiUrl } from "@/lib/routes";
import axios from "axios";

export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});
