import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRecordsComponent } from './display-records/display-records.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  { path: 'add-record', component: UserformComponent },
  { path: 'display-record', component: DisplayRecordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
