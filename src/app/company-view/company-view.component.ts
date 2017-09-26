import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import {Observable} from 'rxjs/Observable';
import * as _ from "lodash";

import { EditCompanyDlg } from '../edit-company-dlg/edit-company-dlg.component'
import { Company } from '../shared/company'
import { CompaniesService } from '../companies.service'

@Component({
  selector: 'company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.sass']
})
export class CompanyViewComponent implements OnInit {
  @Input() company: Company;
  @Input() isShowHeader: number;

  constructor(public dialog: MdDialog,
              private companiesService: CompaniesService) { }

  ngOnInit() {

  }

  totalEarnings(company:Company):number {
    let total:number = company.earnings;
    for (let childCompany of company.children) {
       total += this.totalEarnings(childCompany);
    }
    return total;
  }

  openDialog(data:any):MdDialogRef<EditCompanyDlg> {
      return this.dialog.open(EditCompanyDlg, { width: '400px', data: data});
  }

  onCreate() {
    let newCompany = new Company("");
    newCompany.parent = this.company.id;
    let dialogRef = this.openDialog({dialogType:"CREATE", company:newCompany, callback:(data)=>{
      this.companiesService.createCompany(data.company)
        .subscribe(resp => {
          dialogRef.close();
        }, err => console.warn(err));
    }});
  }

  onDelete() {
    this.companiesService.deleteCompany(this.company.id);
  }

  onUpdate() {
    console.log("on updated" )
    let dialogRef = this.openDialog({dialogType:"EDIT", company:_.cloneDeep(this.company), callback:(data)=>{
      this.companiesService.updateCompany(data.company)
        .subscribe(resp => {
          console.log("updated" , resp)
          dialogRef.close();
        }, err => console.warn(err));
    }});
  }

}
