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
  columns: string[] = ["#", "Image", "Name", "Email", "Address", "Phone", "Status", "Action"];
  txt: string | undefined;

  users: IUser[] = [];
  usersFilter: void | IUser[] = [];
  hidden: boolean = false;

  displayedColumns: string[] = ["No", "Image", "Name", "Email", "Address", "Phone", "Status", "Action"];
  dataSource = new MatTableDataSource<IUser>(this.userService.getAll());

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(public dialog: MatDialog,
              private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.usersFilter = this.users;
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  delete(index: number) {
    if (confirm('Are you sure?')) {
      this.users.splice(index, 1);
      this.dataSource = new MatTableDataSource<IUser>(this.users);
      this.txt = 'delete';
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
