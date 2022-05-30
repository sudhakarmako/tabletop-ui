import { API } from "@api";

class GameAPI extends API {
  constructor() {
    super("/games");
  }

  /**
   * GET MULTIPLE GAMES WITH PARAMETERS
   * @param params string
   * @returns fech promise
   */
  getGames = async (params: string | "") => await this.get(params);

  /**
   * GET SINGLE GAME WITH ID
   * @param id number
   * @returns fetch promise
   */
  getGameById = async (id: number) => await this.get(`/${id}`);

  /**
   * CREATE GAME
   * @param game Game Model Object
   * @returns fetch promise
   */
  createGames = async (game: object) => await this.post("", game);

  /**
   * UPDATE GAME
   * @param id Game's unique id:number
   * @param game Game Model Object
   * @returns fetch promise
   */
  updateGames = async (id: number, game: object) =>
    await this.patch(`/${id}`, game);

  /**
   * DELETE GAME
   * @param id Game's UNIQUE id:number
   * @returns fetch promise
   */
  deleteGameById = async (id: number) => await this.delete(`/${id}`);
}
const gameAPI = new GameAPI();
export default gameAPI;