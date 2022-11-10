import axios from "axios";
import { config } from "@thijmenos/common/config";

const api = axios.create({
  baseURL: config.host,
  timeout: 1000,
});

export default api;
