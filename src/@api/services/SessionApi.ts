import { API } from "@api";

class SessionAPI extends API {
  constructor() {
    super("/session");
  }

  /**
   * GET MULTIPLE GAMES WITH PARAMETERS
   * @param params string
   * @returns fech promise
   */
  getSessions = async (params: string | "") => await this.get(params);

  /**
   * GET SINGLE GAME WITH ID
   * @param id number
   * @returns fetch promise
   */
  getSessionById = async (id: number) => await this.get(`/${id}`);

  /**
   * CREATE GAME
   * @param session Session Model Object
   * @returns fetch promise
   */
  createSessions = async (session: object) => await this.post("", session);

  /**
   * UPDATE GAME
   * @param id Session's unique id:number
   * @param session Session Model Object
   * @returns fetch promise
   */
  updateSessions = async (id: number, session: object) =>
    await this.patch(`/${id}`, session);

  /**
   * DELETE GAME
   * @param id Session's UNIQUE id:number
   * @returns fetch promise
   */
  deleteSessionById = async (id: number) => await this.delete(`/${id}`);
}
const sessionAPI = new SessionAPI();
export default sessionAPI;
