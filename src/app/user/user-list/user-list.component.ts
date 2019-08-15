import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/user';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  datasource: any;
  @ViewChild(MatPaginator) 
  private paginator: MatPaginator;
  constructor(private dataservice: DataService) {
    this.getUsers();
    this.datasource.paginator = this.paginator;
   }
  getUsers() {
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
      this.datasource = new MatTableDataSource<any>(data);
    });
  }

  ngOnInit() {
    
  }
  displayedColumns: string[] = ['id', 'name', 'email', 'contact', 'actions'];
}
