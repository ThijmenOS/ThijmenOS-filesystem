import { host } from "@thijmenos/common";

interface ApiOptions {
  baseURL: string;
}
class Api {
  private readonly _baseURL: string;

  constructor(props: ApiOptions) {
    this._baseURL = props.baseURL;
  }

  public async get(url: string) {
    const response = await fetch(this._baseURL + url);

    return await response.json();
  }

  public async post(url: string, data: object | string) {
    console.log(data);
    console.log(typeof data);
    const body = typeof data === "string" ? data : JSON.stringify(data);
    console.log(body);
    const response = await fetch(this._baseURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    return response.json();
  }
}

const api = new Api({ baseURL: host });

export default api;
