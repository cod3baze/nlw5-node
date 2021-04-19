import { v4 as uuidV4 } from "uuid";

class Agency {
  id?: string;
  name: string;
  email: string;
  password: string;
  professional?: boolean;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.professional = false;
    }
  }
}

export { Agency };
