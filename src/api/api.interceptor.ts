import axios from "axios";
import { getContentType } from "./api.helper";
import { HTTP } from "@/contstance/env.constant";

export const instance = axios.create({
  baseURL: HTTP,
  headers: getContentType(),
});
