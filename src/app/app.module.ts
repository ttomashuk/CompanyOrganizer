import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MdDialogModule, MdInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import { CompaniesService }  from './companies.service';
import { CompanyViewComponent } from './company-view/company-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditCompanyDlg } from './edit-company-dlg/edit-company-dlg.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyViewComponent,
    DashboardComponent,
    EditCompanyDlg
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MdDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CompaniesService ],
  bootstrap: [AppComponent],
  entryComponents: [EditCompanyDlg],
  exports:[MdInputModule]
})
export class AppModule { }
