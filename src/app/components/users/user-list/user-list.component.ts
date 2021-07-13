import { Component, OnInit } from '@angular/core';
import {IUser} from "../../IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string = "User manager"
  columns: string[] = ["#", "Image", "Name", "Email", "Address", "Phone", "Status", "Action"]
  users: IUser[] = [
    {
      id: 1,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Dao',
      email: 'dao@gmail.com',
      address: 'HN',
      phone: '099009090',
      status: 1,
    },
    {
      id: 2,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Thuong',
      email: 'thuong@gmail.com',
      address: 'HN',
      phone: '0990434090',
      status: 2
    },
    {
      id: 3,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Cuong',
      email: 'cuong@gmail.com',
      address: 'HN',
      phone: '099009090',
      status: 2
    },
    {
      id: 4,
      image: 'https://img.icons8.com/bubbles/2x/user.png',
      name: 'Dat',
      email: 'dat@gmail.com',
      address: 'HN',
      phone: '089009090',
    }
  ];
  hidden: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  delete(index: number) {
    if (confirm('Are you sure?')) {
      this.users.splice(index, 1)
    }
  }

  hideShowImage() {
    this.hidden = !this.hidden
  }

  search(event: any) {
    let keyword = event.target.value;
    console.log(keyword)
  }
}
