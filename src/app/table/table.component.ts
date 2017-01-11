import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {User} from '../user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DataService]
})
export class TableComponent implements OnInit {

  filter: string;
  filteredUsers: User[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.doFilter();
  }

  doFilter() {
    this.dataService.queryUsers(this.filter).then(users => {
      this.filteredUsers = users;
    });
  }

  clearFilter() {
    this.filter = '';
    this.doFilter();
  }

  createUser() {
    let user = new User();
    user.firstName = 'Matthijs';
    user.lastName = 'Bierman';
    user.email = 'matthijs.bierman@geckotech.nl';
    this.dataService.createUser(user).then(() => {
      this.doFilter();
    }).catch(rejection => console.log(rejection.json()));
  }

  getUser(id: number) {
    this.dataService.getUser(id).then(user => console.log(user));
  }

}
