import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userdata: any = [];
  private static countObjOfUserDataService: number = 0;
  searchnumber: String;
  static userdata: any;
  static searchnumber: number = 0;
  constructor() {
    UserDataService.countObjOfUserDataService++;
    console.log(
      'Object of User Data Service Created :',
      UserDataService.countObjOfUserDataService
    );
  }

  static saveDataItem(user: any) {
    if (localStorage.getItem('userdata') == null) {
      let userd: any = [];
      userd.push(user);
      localStorage.setItem('userdata', userd);
    } else {
      let userdata: any = [];
      userdata = localStorage.getItem('userdata');
      console.log('userdatagot');
      userdata.push(user);
    }
    console.log('savedata fun : ', localStorage.getItem('userdata'));
  }

  getData() {
    return localStorage.getItem('userdata');
  }

  deleteDataItemByMobile(mobile: number) {
    let userd: any = [];
    userd = localStorage.getItem('userdata');
    for (let i in userd) {
      if (userd[i].mobile == mobile) {
        userd.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('userdata', userd);
    console.log('deletedata fun : ', localStorage.getItem('userdata'));
  }
}
