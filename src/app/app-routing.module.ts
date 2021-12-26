import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRecordsComponent } from './display-records/display-records.component';
import { HeaderComponent } from './header/header.component';
import { FormarrayComponent } from './practice/formarray/formarray.component';
import { TestComponent } from './test/test.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'add-record', component: UserformComponent },
  { path: 'display-record', component: DisplayRecordsComponent },
  { path: 'test', component: TestComponent },
  { path: 'formarraytest', component: FormarrayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
