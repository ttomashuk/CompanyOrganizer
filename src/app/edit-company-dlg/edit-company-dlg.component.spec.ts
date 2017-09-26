import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompanyDlgComponent } from './edit-company-dlg.component';

describe('EditCompanyDlgComponent', () => {
  let component: EditCompanyDlgComponent;
  let fixture: ComponentFixture<EditCompanyDlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompanyDlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompanyDlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
