export default class API {
  // MAIN CLASS API PRIVATE CLASS
  private _baseURL: string | undefined;
  public _resource: string | "";

  constructor(resource: string | "") {
    this._baseURL = process.env.REACT_APP_API_URL;
    this._resource = resource || "";
  }

  /**
   * CONSTRUCTING BASEURL WITH RESOUCE URL. eg:https://example.com + /products
   * @param resource string eg: /products, /categories
   * @returns string
   */
  makeURL = (params?: string) => this._baseURL + this._resource + params;

  /**
   * MASTER REQUEST METHOD
   * @param path string
   * @param options object
   * @returns fetch promise
   */
  async request(path: string, options?: object) {
    let response = null;
    const headers = new Headers({
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    response = await fetch(this.makeURL(path), {
      headers,
      ...options,
    });

    const json = await response.json();
    return response.ok || response.status < 400
      ? json
      : Promise.reject(json.error || Error(`${response.status}`));
  }

  /**
   * GET request
   * @param path string
   * @param opts object
   * @returns fetch promise
   */
  get = async (path: string, opts?: object) =>
    await this.request(path, { method: "GET", ...opts });

  /**
   * POST request
   * @param path string
   * @param body object
   * @param opts object
   * @returns fetch promise
   */
  post = async (path: string, body?: object, opts?: object) =>
    await this.request(path, {
      method: "POST",
      body: JSON.stringify(body),
      ...opts,
    });

  /**
   * PUT request
   * @param path string
   * @param body object
   * @param opts object
   * @returns fetch promise
   */
  put = async (path: string, body?: object, opts?: object) =>
    await this.request(path, {
      method: "PUT",
      body: JSON.stringify(body),
      ...opts,
    });

  /**
   * PATCH request
   * @param path string
   * @param body object
   * @param opts object
   * @returns fetch promise
   */
  patch = async (path: string, body?: object, opts?: object) =>
    await this.request(path, {
      method: "PATCH",
      body: JSON.stringify(body),
      ...opts,
    });

  /**
   * DELETE request
   * @param path string
   * @param opts object
   * @returns fetch promise
   */
  delete = async (path: string, opts?: object) =>
    await this.request(path, { method: "DELETE", ...opts });
}
