import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  notiCount = 0;
  private static countObjOfTestService: number = 0;
  //test Comment
  //test
  //test
  //test
  // test
  // test

  constructor() {
    TestService.countObjOfTestService++;
    console.log(
      'Object of Test Service Created :',
      TestService.countObjOfTestService
    );
  }
}
