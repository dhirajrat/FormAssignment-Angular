import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { DisplayRecordsComponent } from './display-records/display-records.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MaintestComponent } from './maintest/maintest.component';
import { MatBadgeModule } from '@angular/material/badge';
import { TestService } from './service/test.service';
import { FormarrayComponent } from './practice/formarray/formarray.component';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    TestComponent,
    HeaderComponent,
    DisplayRecordsComponent,
    MaintestComponent,
    FormarrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatBadgeModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
