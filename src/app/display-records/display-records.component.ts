import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Person } from '../model/Person';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-display-records',
  templateUrl: './display-records.component.html',
  styleUrls: ['./display-records.component.scss'],
})
export class DisplayRecordsComponent implements OnInit, DoCheck {
  dataSource: any = this.searchedItems();

  displayedColumns: string[] = [
    'no',
    'username',
    'mobile',
    'email',
    'country',
    'skills',
    'no_del',
  ];

  constructor(
    @Inject(UserDataService) private _userDataService = UserDataService
  ) {}

  ngOnInit(): void {
    console.log(this.dataSource);
  }

  ngDoCheck(): void {
    this.dataSource = this.searchedItems();
  }
  searchedItems(): any {
    if (this._userDataService.searchnumber != 0) {
      let searched: any[] = [];
      searched.push(
        this._userDataService.userdata.find(
          (person: any) => person.mobile == this._userDataService.searchnumber
        )
      );
      if (searched[0]) {
        this.dataSource = searched;
        return searched; //fdfd
      }
      this.dataSource = null;
      return null; //fdsfdsf
    } else {
      this.dataSource = this._userDataService.userdata;
      return this._userDataService.userdata; //dfdsf
    }
  }

  removePerson(mobile: number) {
    let id: number;
    for (let i in this._userDataService.userdata) {
      if (this._userDataService.userdata[i].mobile == mobile) {
        this._userDataService.userdata.splice(i, 1);
        break;
      }
    }

    this.dataSource = this._userDataService.userdata;
  }
}
