import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {User} from './user';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  private readonly ENDPOINT = 'http://localhost:8080/angular-workshop-backend';
  private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

  constructor(private http: Http) {
  }

  public queryUsers(query: string): Promise<User[]> {
    let params = new URLSearchParams();
    params.set('query', query);
    return this.http.get(this.ENDPOINT + '/users', {
      headers: this.headers,
      search: params
    }).toPromise()
      .then(response => response.json() as User[]);
  }

  public getUser(id: number): Promise<User> {
    return this.http
      .get(this.ENDPOINT + '/users/' + id, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User);
  }

  public createUser(user: User): Promise<User> {
    return this.http
      .post(this.ENDPOINT + '/users', user, {headers: this.headers})
      .toPromise()
      .then(response => response.json() as User);
  }

}
