import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

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
    this.router.navigate(['/create-user']);
  }

  getUser(userId: number) {
    this.router.navigate(['/user', userId]);
  }
}
