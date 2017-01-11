export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  enabled: boolean;
  dateCreated: Date;

  constructor() {
    this.enabled = true;
  }
}
