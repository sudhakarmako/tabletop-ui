import { API } from "@api";

class PlayerAPI extends API {
  constructor() {
    super("/players");
  }

  /**
   * GET MULTIPLE GAMES WITH PARAMETERS
   * @param params string
   * @returns fech promise
   */
  getPlayers = async (params: string | "") => await this.get(params);

  /**
   * GET SINGLE GAME WITH ID
   * @param id number
   * @returns fetch promise
   */
  getPlayerById = async (id: number) => await this.get(`/${id}`);

  /**
   * CREATE GAME
   * @param player Player Model Object
   * @returns fetch promise
   */
  createPlayers = async (player: object) => await this.post("", player);

  /**
   * UPDATE GAME
   * @param id Player's unique id:number
   * @param player Player Model Object
   * @returns fetch promise
   */
  updatePlayers = async (id: number, player: object) =>
    await this.patch(`/${id}`, player);

  /**
   * DELETE GAME
   * @param id Player's UNIQUE id:number
   * @returns fetch promise
   */
  deletePlayerById = async (id: number) => await this.delete(`/${id}`);
}
const playerAPI = new PlayerAPI();
export default playerAPI;
