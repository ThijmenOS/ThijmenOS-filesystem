import axios from "axios";
import { host } from "@thijmenos/common";

const api = axios.create({
  baseURL: host,
  timeout: 1000,
});

export default api;
