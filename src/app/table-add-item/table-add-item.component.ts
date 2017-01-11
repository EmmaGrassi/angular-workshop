import { Component } from '@angular/core';
import { Location } from '@angular/common';

import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-table-add-item',
  templateUrl: './table-add-item.component.html',
  providers: [DataService]
})
export class TableAddItemComponent {

  user: User = new User();

  constructor(
    private location: Location,
    private dataService: DataService
  ) {};

  goBack(): void {
    this.location.back();
  };

  onSubmit() {
    this.dataService.createUser(this.user).then(() => this.location.back());
  }
}
