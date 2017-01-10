import { Component, OnInit } from '@angular/core';
import {User, DataService} from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DataService]
})
export class TableComponent implements OnInit {

  filter: string;
  users: User[];
  filteredUsers: User[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.users = this.dataService.listUsers();
    this.filteredUsers = this.users;
  }

  doFilter() {
    if (this.filter === '') {
      this.filteredUsers = this.users;
    } else {
      let val = this.filter.toLowerCase();
      this.filteredUsers = this.users.slice(0).filter((user) => {
        let matches = false;
        for (let prop in user) {
          if (user.hasOwnProperty(prop) && typeof(user[prop]) === 'string') {
            if (user[prop].toLowerCase().indexOf(val) > -1) {
              matches = true;
            }
          }
        }
        return matches;
      });
    }
  }

  clearFilter() {
    this.filter = '';
    this.doFilter();
  }

}
