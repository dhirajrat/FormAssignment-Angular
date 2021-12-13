import { Component, Inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserDataService } from '../service/user-data.service';
import { Country } from '../model/Country';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  myReactiveForm: FormGroup;
  countries: Country[] = [
    { value: 'China', viewValue: 'China' },
    { value: 'India', viewValue: 'India' },
    { value: 'Germany', viewValue: 'Germany' },
  ];

  constructor(
    private fb: FormBuilder,
    @Inject(UserDataService) private _userDataService = UserDataService
  ) {}

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Za-z]*$/),
      ]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{10}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl('', Validators.required),
      skills: new FormArray([new FormControl('', Validators.required)]),
    });
  }

  onAddSkills() {
    if ((<FormArray>this.myReactiveForm.get('skills')).length < 10) {
      (<FormArray>this.myReactiveForm.get('skills')).push(
        new FormControl(null, Validators.required)
      );
    } else {
      alert(
        (<FormArray>this.myReactiveForm.get('skills')).length +
          ' skills added already'
      );
    }

    console.log(
      'skilles added: ',
      (<FormArray>this.myReactiveForm.get('skills')).length
    );
  }

  submit() {
    console.log(this.myReactiveForm.valid);
    if (this.myReactiveForm.valid) {
      let contactexist = false;
      this._userDataService.userdata.forEach((element: any) => {
        if (element.mobile == this.myReactiveForm.value.mobile) {
          contactexist = true;
        }
      });
      if (contactexist) {
        alert('person already exist with this phone no.');
      } else {
        this._userDataService.userdata.push(this.myReactiveForm.value);
        localStorage.setItem('userdata', this._userDataService.userdata);
        this._userDataService.saveDataItem(this.myReactiveForm.value);
      }
    } else {
      alert('Enter Valid Input');
    }

    console.log('service data : ', this._userDataService.userdata);
  }

  get skills(): FormArray {
    return this.myReactiveForm.get('skills') as FormArray;
  }
}
