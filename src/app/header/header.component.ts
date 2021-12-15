import { Component, Inject, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../service/test.service';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  test = this.testservice.notiCount;
  form = new FormGroup({
    record: new FormControl('', Validators.required),
  });

  onSubmit() {
    console.log('noticount: ', this.testservice.notiCount, this.test);

    if (this.form.valid) {
      console.log(this.form.value);
      this._userDataService.searchnumber = this.form.value.record;
      this.router.navigate(['display-record']);
    } else {
      alert('enter valid value to search');
    }
  }

  ngOnChanges() {
    this.test = this.testservice.notiCount;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(UserDataService) private _userDataService = UserDataService,
    public testservice: TestService
  ) {}

  ngOnInit(): void {}

  addNewRecord() {
    this.router.navigate(['add-record']);
  }

  displayAllRecord() {
    this._userDataService.searchnumber = 0;
    this.router.navigate(['display-record']);
  }
}
