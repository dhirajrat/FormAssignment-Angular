// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.scss']
// })
// export class TestComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { TestService } from '../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  test = 15;
  form = new FormGroup({
    cities: new FormArray([new FormControl('SF'), new FormControl('NY')]),
  });
  constructor(public testservice: TestService) {}

  get cities(): FormArray {
    return this.form.get('cities') as FormArray;
  }

  addCity() {
    this.cities.push(new FormControl());
  }

  onSubmit() {
    console.log(this.cities.value); // ['SF', 'NY']
    console.log(this.form.value); // { cities: ['SF', 'NY'] }
    console.log('notivalue: ', this.cities.value[0]);
    this.testservice.notiCount = this.cities.value[0];
  }

  setPreset() {
    this.cities.patchValue(['LA', 'MTV']);
  }
}
