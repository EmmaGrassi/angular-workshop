import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { DataService } from '../data.service';
import {ObservableInput} from "rxjs/Observable";
import {User} from "../user";

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  providers: [DataService]
})
export class TableItemComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService
  ) {}

  goBack(): void {
    this.location.back();
  };

  ngOnInit() {
    this.route.params
      .map(params => +params['id'])
      .subscribe((id) => {
        this.dataService.getUser(id).then(user => this.user = user);
      });
  }
}
