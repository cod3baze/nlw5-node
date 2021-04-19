import { Agency } from "../../entities/Agency";
import { IAgenciesRepository, IAgencyData } from "../IAgenciesRepository";

class AgenciesRepository implements IAgenciesRepository {
  agencies: Agency[];

  constructor() {
    this.agencies = [];
  }

  create({ name, email, password }: IAgencyData): void {
    const agencyObejct = new Agency();
    Object.assign(agencyObejct, {
      name,
      email,
      password,
      created_at: new Date(),
    });

    this.agencies.push(agencyObejct);
  }

  list(): Agency[] {
    return this.agencies;
  }

  findAgencyPosition(email: string): number {
    const agency = this.agencies.findIndex((agency) => agency.email === email);

    return agency;
  }

  delete(email: string): Agency[] {
    const agency = this.findAgencyPosition(email);
    const deleted = this.agencies.splice(agency, 1);

    return deleted;
  }
}

export { AgenciesRepository };
