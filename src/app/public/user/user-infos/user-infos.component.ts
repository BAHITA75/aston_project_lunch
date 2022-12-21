import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent implements OnInit {

  users : User[];

  constructor(private userService: UserService) {
    
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

}
