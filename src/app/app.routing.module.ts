import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TableComponent } from './table/table.component';
import { TableItemComponent } from './table-item/table-item.component';
import { TableAddItemComponent } from './table-add-item/table-add-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users',  component: TableComponent },
  { path: 'user/:id', component: TableItemComponent },
  { path: 'create-user', component: TableAddItemComponent },
  { path: '**', component: TableComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
