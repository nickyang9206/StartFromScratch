import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StartFromScratch';
  users :User[] = [];
  constructor(private dataservice:DataService){}
  getUsers(){
    this.dataservice.getUsers().subscribe(data=>{
      this.users= data;
    });
  }

  ngOnInit(){
    this.getUsers();
  }
  displayedColumns: string[] = [ 'name', 'email', 'contact','actions'];
  dataSource = this.users;
}
