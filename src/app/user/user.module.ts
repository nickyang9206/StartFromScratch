import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDeleteComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppMaterialModule
  ],
  exports: [
    UserListComponent,
    UserAddComponent,
    UserUpdateComponent,
    UserDeleteComponent
  ]
})
export class UserModule { }
