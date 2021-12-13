import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  form = new FormGroup({
    record: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this._userDataService.searchnumber = this.form.value.record;
      this.router.navigate(['display-record']);
    } else {
      alert('enter valid value to search');
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(UserDataService) private _userDataService = UserDataService
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
