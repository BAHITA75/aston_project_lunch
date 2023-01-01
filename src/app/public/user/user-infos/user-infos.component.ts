import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user-service';
import { User } from '../../../_model/user';
import { Img } from '../../../_model/img';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss'],
})
export class UserInfosComponent implements OnInit {
  users: User[];
  image: Img;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.findAll().subscribe((data) => {
      console.log(data);
      this.users = data;
    });

    this.userService.findImg(1).subscribe((data) => {
      this.image = data;
    });
  }
}
