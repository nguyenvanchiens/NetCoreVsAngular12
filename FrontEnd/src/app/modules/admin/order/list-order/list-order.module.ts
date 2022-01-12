import { OrderComponent } from './../order.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOrderComponent } from './list-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; //
const router: Routes = [
  {
    path: '',
    component: ListOrderComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [ListOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
})
export class ListOrderModule {}
