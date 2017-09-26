import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { MdDialog, MdDialogRef } from '@angular/material';

import { CompaniesService } from '../companies.service'
import { CompanyViewComponent } from '../company-view/company-view.component'
import { EditCompanyDlg } from '../edit-company-dlg/edit-company-dlg.component'
import { Company } from '../shared/company'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  private companiesList:Array<Company>;

  constructor(
      private companiesService: CompaniesService,
      public dialog: MdDialog
    ) {
    this.companiesList = [];
  }

  ngOnInit() {
    this.companiesService.SharedList$.subscribe(list => this.companiesList = list);
    this.companiesService.getAllCompanies();
  }

  onCreate() {
    let dialogRef = this.dialog.open(EditCompanyDlg, {
      width: '400px',
      data: {dialogType:"CREATE", company:new Company(""), callback:(data)=>{
        this.companiesService.createCompany(data.company)
          .subscribe(resp => {
            dialogRef.close();
          }, err => console.warn(err));
      }}
    });
  }

}
