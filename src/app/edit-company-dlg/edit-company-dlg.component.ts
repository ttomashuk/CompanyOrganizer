import { Component, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

import { CompaniesService } from '../companies.service'
import { Company } from '../shared/company'

@Component({
  selector: 'edit-company-dlg',
  templateUrl: './edit-company-dlg.component.html',
  styleUrls: ['./edit-company-dlg.component.sass']
})
export class EditCompanyDlg {

  constructor(
    public dialogRef: MdDialogRef<EditCompanyDlg>,
    @Inject(MD_DIALOG_DATA) public data: any,
    ) { }

  onCreateClick(data){
    data.callback(data);
  }

  onUpdateClick(data){
    data.callback(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
