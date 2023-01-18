import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_model/user';
import { UserService } from 'src/app/_services/user-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  @ViewChild('tab') div: ElementRef;
  @ViewChild('input') input: ElementRef;
  @ViewChild('inputSearch') inputSearch: ElementRef;
  user : User;
  users : User[];
  tabSearch : User[];
  actif : boolean;

  constructor(private userService : UserService, private http : HttpClient) { }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
    this.actif = false;
  }

  search(){
    this.tabSearch = [];
    var searchValue = this.inputSearch.nativeElement.value;
    if (searchValue) {
      this.actif = true;
      this.users.forEach(user => {
        var name = user.name?.toLowerCase();
        if (name) {
          if (name.includes(searchValue)) {
            this.tabSearch.push(user);     
          }
        }
      });
    }
    else {
      this.actif = false;
    }
  }

  getUser(user: any) {
    this.div.nativeElement.classList.add('hidden');
    this.user = user;
  }

  credit(user: User){
    var wallet = this.input.nativeElement.value;
    return this.http.post<User>(`http://localhost:8080/stone.lunchtime/user/credit/${user.id}?amount=${wallet}`, user).subscribe(data => {
      console.log(data);
    }), location.reload();
  }

  debit(user: User){
    var wallet = this.input.nativeElement.value;
    return this.http.post<User>(`http://localhost:8080/stone.lunchtime/user/debit/${user.id}?amount=${wallet}`, user).subscribe(data => {
      console.log(data);
    }), location.reload();

  }
  

}