import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss'],
})
export class FormarrayComponent implements OnInit {
  myForm: FormGroup;
  myFormArr: FormArray;

  constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     form: this.fb.array([this.addForm()]),
  //   });
  // }

  // ngOnInit() {
  //   this.myForm = this.fb.group({
  //     form: this.fb.array([
  //       new FormGroup({
  //         sec1: new FormGroup({
  //           sec1field1: new FormControl('', [Validators.required]),
  //           sec1field2: new FormControl('', [Validators.required]),
  //         }),
  //         sec2: new FormGroup({
  //           sec2field1: new FormControl('', [Validators.required]),
  //           sec2field2: new FormControl('', [Validators.required]),
  //         }),
  //         sec3: new FormGroup({
  //           sec3field1: new FormControl('', [Validators.required]),
  //         }),
  //       }),
  //     ]),
  //   });
  // }

  ngOnInit() {
    this.myForm = new FormGroup({
      myFormArr: new FormArray([
        new FormGroup({
          sec1: new FormGroup({
            sec1field1: new FormControl('', [Validators.required]),
            // sec1field2: new FormControl('', [Validators.required]),
          }),
          sec2: new FormGroup({
            sec2field1: new FormControl('', [Validators.required]),
            // sec2field2: new FormControl('', [Validators.required]),
          }),
          sec3: new FormGroup({
            sec3field1: new FormControl('', [Validators.required]),
          }),
        }),
      ]),
    });
  }

  // addForm(): FormGroup {
  //   return this.fb.group({
  //     sec1: new FormGroup({
  //       sec1field1: new FormControl('', [Validators.required]),
  //       // sec1field2: new FormControl('', [Validators.required]),
  //     }),
  //     sec2: new FormGroup({
  //       sec2field1: new FormControl('', [Validators.required]),
  //       // sec2field2: new FormControl('', [Validators.required]),
  //     }),
  //     sec3: new FormGroup({
  //       sec3field1: new FormControl('', [Validators.required]),
  //     }),
  //   });
  // }

  submit() {
    console.log(this.myForm);
    //
    (<FormArray>this.myForm.get('myFormArr')).push(
      new FormGroup({
        sec1: new FormGroup({
          sec1field1: new FormControl('', [Validators.required]),
          // sec1field2: new FormControl('', [Validators.required]),
        }),
        sec2: new FormGroup({
          sec2field1: new FormControl('', [Validators.required]),
          // sec2field2: new FormControl('', [Validators.required]),
        }),
        sec3: new FormGroup({
          sec3field1: new FormControl('', [Validators.required]),
        }),
      })
    );
  }

  getControls() {
    return (this.myForm.get('myFormArr') as FormArray).controls;
  }
}
