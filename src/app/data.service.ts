import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  public listUsers(): User[] {
    let matthijs = new User();
    matthijs.email = 'matthijs@geckotech.nl';
    matthijs.dateCreated = new Date(11, 0, 117);
    matthijs.firstName = 'Matthijs';
    matthijs.lastName = 'Bierman';
    let ernst = new User();
    ernst.email = 'ernst@geckotech.nl';
    ernst.firstName = 'Ernst';
    ernst.lastName = 'Nolte';
    ernst.dateCreated = new Date(8, 0, 117);
    // hardcoded returned values, normally this would come from an API
    return [matthijs, ernst];
  }

}

// FIXME should be in a separate class instead of embedded in the service
export class User {
  firstName: string;
  lastName: string;
  email: string;
  enabled: boolean;
  dateCreated: Date;

  constructor() {
    this.enabled = true;
  }
}
