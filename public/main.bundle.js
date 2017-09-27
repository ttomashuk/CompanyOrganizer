webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__companies_service__ = __webpack_require__("../../../../../src/app/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__company_view_company_view_component__ = __webpack_require__("../../../../../src/app/company-view/company-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__edit_company_dlg_edit_company_dlg_component__ = __webpack_require__("../../../../../src/app/edit-company-dlg/edit-company-dlg.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__company_view_company_view_component__["a" /* CompanyViewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__edit_company_dlg_edit_company_dlg_component__["a" /* EditCompanyDlg */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__companies_service__["a" /* CompaniesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__edit_company_dlg_edit_company_dlg_component__["a" /* EditCompanyDlg */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MdInputModule */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/companies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/add/operator/share.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_company__ = __webpack_require__("../../../../../src/app/shared/company.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompaniesService = (function () {
    function CompaniesService(http) {
        var _this = this;
        this.http = http;
        this.SERVER_URL = '';
        // SERVER_URL:string = 'http://localhost:8000';
        this.HEADERS = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json;charset=utf-8' });
        this.companiesList = [];
        this.SharedList$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"](function (x) { return _this.listObserver = x; }).share();
    }
    CompaniesService.prototype.getAllCompanies = function () {
        var _this = this;
        this.http.get(this.SERVER_URL + '/api/companies')
            .subscribe(function (res) {
            _this.companiesList = _this.makeCompanyList(res);
            _this.listObserver.next(_this.companiesList);
        });
    };
    CompaniesService.prototype.createCompany = function (company) {
        var _this = this;
        var data = { name: company.name, earnings: company.earnings, parent: company.parent };
        return this.http.post(this.SERVER_URL + '/api/company', JSON.stringify(data), { headers: this.HEADERS })
            .map(function (resp) {
            var company = new __WEBPACK_IMPORTED_MODULE_5__shared_company__["a" /* Company */](resp.name);
            company.earnings = resp.earnings;
            company.id = resp._id;
            var parentId = _this.getParentFromPath(resp.path);
            if (parentId) {
                _this.getCompanyById(_this.companiesList, parentId).children.push(company);
            }
            else
                _this.companiesList.push(company);
            _this.listObserver.next(_this.companiesList);
            return _this.companiesList;
        });
    };
    CompaniesService.prototype.deleteCompany = function (companyId) {
        var _this = this;
        return this.http.delete(this.SERVER_URL + '/api/company/' + companyId)
            .subscribe(function (resp) {
            _this.removeCompany(_this.companiesList, companyId);
            _this.listObserver.next(_this.companiesList);
        });
    };
    CompaniesService.prototype.updateCompany = function (data) {
        var _this = this;
        var obj = { name: data.name, earnings: data.earnings };
        return this.http.put(this.SERVER_URL + '/api/company/' + data.id, JSON.stringify(obj), { headers: this.HEADERS })
            .map(function (resp) {
            var company = _this.getCompanyById(_this.companiesList, data.id);
            company.name = resp.name;
            company.earnings = resp.earnings;
            _this.listObserver.next(_this.companiesList);
            return _this.companiesList;
        });
    };
    CompaniesService.prototype.getCompanyById = function (list, id) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var company = list_1[_i];
            if (company.id == id)
                return company;
            var res = this.getCompanyById(company.children, id);
            if (res != null)
                return res;
        }
        return null;
    };
    CompaniesService.prototype.removeCompany = function (list, id) {
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var company = list_2[_i];
            if (company.id == id)
                return list.splice(list.indexOf(company), 1);
            var res = this.removeCompany(company.children, id);
            if (res != null)
                return res;
        }
        return null;
    };
    CompaniesService.prototype.makeCompanyList = function (data, parent) {
        var _this = this;
        var list = [];
        data.filter(function (item) {
            if (item.path) {
                var arr = item.path.split(',');
                return arr[arr.length - 2] == parent;
            }
            else {
                return item.path == parent;
            }
        })
            .map(function (item) {
            var company = new __WEBPACK_IMPORTED_MODULE_5__shared_company__["a" /* Company */](item.name);
            company.earnings = item.earnings;
            company.id = item._id;
            company.children = _this.makeCompanyList(data, company.id);
            list.push(company);
        });
        return list;
    };
    CompaniesService.prototype.getParentFromPath = function (path) {
        if (path) {
            var arr = path.split(',');
            return arr[arr.length - 2];
        }
        return null;
    };
    return CompaniesService;
}());
CompaniesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CompaniesService);

var _a;
//# sourceMappingURL=companies.service.js.map

/***/ }),

/***/ "../../../../../src/app/company-view/company-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"company-view col-xs-12 panel\" *ngIf=\"isShowHeader==0\">\n  <div  class=\"panel-body header\">\n     <div class=\"name pull-left\" >\n       Company name\n     </div>\n     <div class=\"info-container pull-right\">\n       <div class=\"col-xs-4\">Earings</div>\n       <div class=\"col-xs-6\">Total earings</div>\n     </div>\n  </div>\n</div>\n\n\n<div class=\"company-view panel col-xs-12\">\n\n  <div class=\"panel-body \">\n     <div class=\"name pull-left\" >\n       {{company.name}}\n     </div>\n     <div class=\"info-container pull-right\">\n       <div class=\"col-xs-4\">{{company.earnings}}</div>\n       <div class=\"col-xs-4\">\n         <span *ngIf=\"company.children.length > 0\">\n         {{totalEarnings(company)}}\n       </span>\n       </div>\n       <div class=\"btn-group col-xs-4\">\n         <button type=\"button\" class=\"btn btn-default btn-xs glyphicon glyphicon-plus\" (click)=\"onCreate()\"></button>\n         <button type=\"button\" class=\"btn btn-default btn-xs glyphicon glyphicon-edit\" (click)=\"onUpdate()\"></button>\n         <button type=\"button\" class=\"btn btn-default btn-xs glyphicon glyphicon-trash\" (click)=\"onDelete()\"></button>\n       </div>\n     </div>\n  </div>\n\n  <div class=\"children-container\" *ngIf=\"company.children.length > 0\">\n    <company-view *ngFor=\"let company of company.children\" [company]=\"company\"></company-view>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/company-view/company-view.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".company-view {\n  padding: 0px;\n  padding-left: 10px;\n  border-radius: 0px;\n  border: 0px; }\n\n.panel {\n  margin-bottom: 0px; }\n\n.panel-body {\n  padding: 2px;\n  border-bottom: 1px;\n  border-bottom-style: solid;\n  border-color: #bfbfbf; }\n  .panel-body.header {\n    border-color: black; }\n\n.children-container {\n  margin-left: 0px;\n  background-color: #333131; }\n\n.info-container {\n  width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/company-view/company-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_company_dlg_edit_company_dlg_component__ = __webpack_require__("../../../../../src/app/edit-company-dlg/edit-company-dlg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_company__ = __webpack_require__("../../../../../src/app/shared/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__companies_service__ = __webpack_require__("../../../../../src/app/companies.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyViewComponent = (function () {
    function CompanyViewComponent(dialog, companiesService) {
        this.dialog = dialog;
        this.companiesService = companiesService;
    }
    CompanyViewComponent.prototype.ngOnInit = function () {
    };
    CompanyViewComponent.prototype.totalEarnings = function (company) {
        var total = company.earnings;
        for (var _i = 0, _a = company.children; _i < _a.length; _i++) {
            var childCompany = _a[_i];
            total += this.totalEarnings(childCompany);
        }
        return total;
    };
    CompanyViewComponent.prototype.openDialog = function (data) {
        return this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__edit_company_dlg_edit_company_dlg_component__["a" /* EditCompanyDlg */], { width: '400px', data: data });
    };
    CompanyViewComponent.prototype.onCreate = function () {
        var _this = this;
        var newCompany = new __WEBPACK_IMPORTED_MODULE_4__shared_company__["a" /* Company */]("");
        newCompany.parent = this.company.id;
        var dialogRef = this.openDialog({ dialogType: "CREATE", company: newCompany, callback: function (data) {
                _this.companiesService.createCompany(data.company)
                    .subscribe(function (resp) {
                    dialogRef.close();
                }, function (err) { return console.warn(err); });
            } });
    };
    CompanyViewComponent.prototype.onDelete = function () {
        this.companiesService.deleteCompany(this.company.id);
    };
    CompanyViewComponent.prototype.onUpdate = function () {
        var _this = this;
        console.log("on updated");
        var dialogRef = this.openDialog({ dialogType: "EDIT", company: __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this.company), callback: function (data) {
                _this.companiesService.updateCompany(data.company)
                    .subscribe(function (resp) {
                    console.log("updated", resp);
                    dialogRef.close();
                }, function (err) { return console.warn(err); });
            } });
    };
    return CompanyViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_company__["a" /* Company */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_company__["a" /* Company */]) === "function" && _a || Object)
], CompanyViewComponent.prototype, "company", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CompanyViewComponent.prototype, "isShowHeader", void 0);
CompanyViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'company-view',
        template: __webpack_require__("../../../../../src/app/company-view/company-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/company-view/company-view.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__companies_service__["a" /* CompaniesService */]) === "function" && _c || Object])
], CompanyViewComponent);

var _a, _b, _c;
//# sourceMappingURL=company-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-md-11 col-lg-10 col-xl-9 dashboard-container\">\n\t<div class=\"\">\n\t\t<button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"onCreate()\">Create new</button>\n\t</div>\n\t<company-view *ngFor=\"let company of companiesList; let isShow = index\"\n\t\t[company]=\"company\"\n\t\t[isShowHeader]=\"isShow\">\n\t</company-view>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-container {\n  text-align: left;\n  min-width: 700px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companies_service__ = __webpack_require__("../../../../../src/app/companies.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_company_dlg_edit_company_dlg_component__ = __webpack_require__("../../../../../src/app/edit-company-dlg/edit-company-dlg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_company__ = __webpack_require__("../../../../../src/app/shared/company.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(companiesService, dialog) {
        this.companiesService = companiesService;
        this.dialog = dialog;
        this.companiesList = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companiesService.SharedList$.subscribe(function (list) { return _this.companiesList = list; });
        this.companiesService.getAllCompanies();
    };
    DashboardComponent.prototype.onCreate = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__edit_company_dlg_edit_company_dlg_component__["a" /* EditCompanyDlg */], {
            width: '400px',
            data: { dialogType: "CREATE", company: new __WEBPACK_IMPORTED_MODULE_4__shared_company__["a" /* Company */](""), callback: function (data) {
                    _this.companiesService.createCompany(data.company)
                        .subscribe(function (resp) {
                        dialogRef.close();
                    }, function (err) { return console.warn(err); });
                } }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__companies_service__["a" /* CompaniesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__companies_service__["a" /* CompaniesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-company-dlg/edit-company-dlg.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title *ngIf=\"data.dialogType == 'CREATE'\">Create form</h1>\n<h1 md-dialog-title *ngIf=\"data.dialogType == 'EDIT'\">Edit form</h1>\n<div md-dialog-content class=\"form-group\">\n  <div class=\"row form-group\">\n    <label class=\"col-form-label col-xs-3\">Name:</label>\n    <div class=\"col-xs-9\">\n      <input type=\"text\" [(ngModel)]=\"data.company.name\" class=\"form-control\" placeholder=\"Enter name\">\n    </div>\n  </div>\n  <div class=\"row form-group\">\n    <label class=\"col-form-label col-xs-3\">Earnings:</label>\n    <div class=\"col-xs-9\">\n      <input type=\"number\" [(ngModel)]=\"data.company.earnings\" class=\"form-control\" placeholder=\"Enter earnings\">\n    </div>\n  </div>\n</div>\n<div md-dialog-actions class=\"pull-right\">\n  <button class=\"btn btn-success\" *ngIf=\"data.dialogType == 'CREATE'\" (click)=\"onCreateClick(data)\">Create</button>\n  <button class=\"btn btn-success\" *ngIf=\"data.dialogType == 'EDIT'\" (click)=\"onUpdateClick(data)\">Save</button>\n  <button class=\"btn btn-danger\" (click)=\"onNoClick()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-company-dlg/edit-company-dlg.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#md-form-field {\n  padding: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-company-dlg/edit-company-dlg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCompanyDlg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditCompanyDlg = (function () {
    function EditCompanyDlg(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditCompanyDlg.prototype.onCreateClick = function (data) {
        data.callback(data);
    };
    EditCompanyDlg.prototype.onUpdateClick = function (data) {
        data.callback(data);
    };
    EditCompanyDlg.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    return EditCompanyDlg;
}());
EditCompanyDlg = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'edit-company-dlg',
        template: __webpack_require__("../../../../../src/app/edit-company-dlg/edit-company-dlg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit-company-dlg/edit-company-dlg.component.sass")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object])
], EditCompanyDlg);

var _a;
//# sourceMappingURL=edit-company-dlg.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/company.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company(name) {
        this.name = name;
        this.earnings = 0;
        this.id = null;
        this.parent = null;
        this.children = [];
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map