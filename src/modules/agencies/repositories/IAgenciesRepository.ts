import { Agency } from "../entities/Agency";

export interface IAgencyData {
  name: string;
  email: string;
  password: string;
}

export interface IAgenciesRepository {
  /**
   * will create a new agency member
   * @param create
   */
  create({ name, email, password }: IAgencyData): void;

  /**
   * will list all agencies created
   * @param list
   */
  list(): Agency[];

  /**
   * will return position of the agency in list
   * @param findAgencyPosition
   */
  findAgencyPosition(email: string): number;

  /**
   * will remove an agency in list
   * @param delete
   */
  delete(email: string): Agency[];
}
