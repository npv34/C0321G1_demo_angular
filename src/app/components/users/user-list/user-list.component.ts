import {Component, OnInit, Output, ViewChild, EventEmitter, Input} from '@angular/core';
import {IUser} from "../../IUser";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DialogExampleComponent} from "../../dialog-example/dialog-example.component";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title: string = "User manager"
  txt: string | undefined;

  users: IUser[] = [];
  usersFilter: void | IUser[] = [];
  hidden: boolean = false;

  displayedColumns: string[] = ["No", "Image", "Name", "Email", "Phone", "Action"];
  dataSource = new MatTableDataSource<IUser>(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(public dialog: MatDialog,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
    // this.users = this.userService.getAll();
    // this.usersFilter = this.users;
  }
  getAllUser() {
    this.userService.getAll().subscribe(res => {
      if (res.status == 'success') {
        this.users = res.data;
        this.dataSource = new MatTableDataSource<IUser>(this.users);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
      }
      console.log(res);
    })
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
        this.userService.delete(id).subscribe(res => {
          if (res.status == 'success') {
            this.getAllUser();
          } else  {
            console.log(res)
          }
        })
    }
  }

  hideShowImage() {
    this.hidden = !this.hidden
  }

  search(event: any) {
    let keyword = event.target.value;
    this.usersFilter = (keyword) ? this.filter(keyword) : this.users
    this.dataSource = new MatTableDataSource<IUser>(this.usersFilter);
  }

  filter(keyword: string) {
      return this.users.filter((user: IUser) => {
        return user.name.toLowerCase().indexOf(keyword) != -1;
      })
  }

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '250px',
      data: this.users[index]
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
