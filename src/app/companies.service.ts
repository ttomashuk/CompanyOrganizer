import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions  } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable, Observer} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { Company } from './shared/company'

@Injectable()
export class CompaniesService {

  SERVER_URL:string = '';
  // SERVER_URL:string = 'http://localhost:8000';
  HEADERS = new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'});

  SharedList$: Observable<Array<Company>>;
  private listObserver: Observer<Array<Company>>;
  private companiesList: Array<Company>;

  constructor(private http: HttpClient) {
    this.companiesList = [];
    this.SharedList$ = new Observable<Array<Company>>(x => this.listObserver = x).share();
  }

  getAllCompanies() {
    this.http.get(this.SERVER_URL + '/api/companies' )
      .subscribe((res:any) => {
        this.companiesList = this.makeCompanyList(res);
        this.listObserver.next(this.companiesList)
      });
  }

  createCompany(company:Company):Observable<any> {
    let data = {name:company.name, earnings:company.earnings, parent: company.parent};
    return this.http.post( this.SERVER_URL + '/api/company',JSON.stringify(data), { headers: this.HEADERS } )
              .map((resp:any) => {
                let company = new Company(resp.name);
                company.earnings = resp.earnings;
                company.id = resp._id;
                var parentId = this.getParentFromPath(resp.path);
                if(parentId)  {
                  this.getCompanyById(this.companiesList, parentId).children.push(company);
                } else this.companiesList.push(company);
                this.listObserver.next(this.companiesList);
                return this.companiesList;
              });
  }

  deleteCompany(companyId):any {
    return this.http.delete( this.SERVER_URL + '/api/company/' + companyId)
        .subscribe((resp:any) => {
          this.removeCompany(this.companiesList, companyId);
          this.listObserver.next(this.companiesList);
        });
  }

  updateCompany(data) {
    let obj = {name: data.name, earnings:data.earnings};
    return this.http.put( this.SERVER_URL + '/api/company/' + data.id, JSON.stringify(obj), { headers: this.HEADERS })
        .map((resp:any) => {
          let company = this.getCompanyById(this.companiesList, data.id);
          company.name = resp.name;
          company.earnings = resp.earnings;
          this.listObserver.next(this.companiesList);
          return this.companiesList;
        });
  }

  getCompanyById(list:Array<Company>, id:string):Company {
    for( let company of list) {
      if(company.id == id) return company;
      let res = this.getCompanyById(company.children, id);
      if( res != null) return res;
    }
    return null;
  }

  removeCompany(list:Array<Company>, id:string):Company[] {
    for( let company of list) {
      if(company.id == id) return list.splice(list.indexOf(company),1);
      let res = this.removeCompany(company.children, id);
      if( res != null) return res;
    }
    return null;
  }

  makeCompanyList(data:any, parent?:string) {
    let list: Array<Company> = [];
    data.filter(item => {
        if(item.path) {
          let arr = item.path.split(',')
          return arr[arr.length-2] == parent
        } else {
          return item.path == parent;
        }
      })
      .map( item => {
        let company = new Company(item.name);
        company.earnings = item.earnings;
        company.id = item._id;
        company.children = this.makeCompanyList(data, company.id);
        list.push(company);
      });
    return list;
  }

  getParentFromPath(path):string{
    if(path) {
      let arr = path.split(',')
      return arr[arr.length-2];
    }
    return null;
  }

}
