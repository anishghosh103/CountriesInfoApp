webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__country_country_module__ = __webpack_require__("./src/app/country/country.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_9__country_country_module__["a" /* CountryModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
                    { path: '**', redirectTo: '/', pathMatch: 'full' }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(_http) {
        this._http = _http;
        this.baseUrl = 'https://restcountries.eu/rest/v2';
    }
    AppService.prototype.getCountriesByType = function (type, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.get(_this.baseUrl + "/" + type + "/" + value + "?" + (type === 'name' ? 'fullText=true&' : '') + "fields=name;capital;region;subregion;population;latlng;demonym;area;timezones;borders;currencies;languages;flag;regionalBlocs;nativeName;altSpellings")
                .subscribe(function (response) { return resolve(response); }, function (err) { return reject(err); });
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/country/countries/countries.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nheader {\r\n    position: relative;\r\n}\r\n\r\nheader img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    z-index: -2;\r\n}\r\n\r\nheader::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: hsla(0, 0%, 0%, 0.4);\r\n    z-index: -1;\r\n}\r\n\r\nheader .title {\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 2rem;\r\n    color: white;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    height: 150px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\nheader .filters {\r\n    background: hsla(0, 0%, 100%, 0.2);\r\n}\r\n\r\nheader .filters .textbox {\r\n    padding: 0.75rem 1.25rem;\r\n    border: none;\r\n    background: hsla(0, 0%, 100%, 0.8);\r\n    outline: none;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 400;\r\n    font-size: 0.9rem;\r\n    letter-spacing: 0.02rem;\r\n    -webkit-transition: all .2s ease-in-out;\r\n    transition: all .2s ease-in-out;\r\n    margin: 0 1px 1px 0;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\nheader .filters .textbox.active,\r\nheader .filters .textbox:hover,\r\nheader .filters .textbox:focus {\r\n    background: white!important;\r\n}\r\n\r\nheader .filters .textbox.active,\r\nheader .filters .textbox:focus {\r\n    -webkit-box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);\r\n            box-shadow: 0 2px 4px 0 hsla(0, 0%, 0%, 0.2);\r\n}\r\n\r\n@media all and (max-width: 768px) {\r\n    header .filters .textbox { font-size: 0.9rem; }\r\n}\r\n\r\n.card {\r\n    font-family: 'Montserrat';\r\n    font-size: 14px;\r\n}\r\n\r\n.card img {\r\n    height: 12rem;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n.card .card-body {\r\n    padding: 0rem 2rem;\r\n}\r\n\r\n.card .card-title {\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-weight: 500;\r\n    font-size: 1.15em;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.05em;\r\n    text-align: center;\r\n    margin: 1rem 0 1.5rem;\r\n    color: hsl(0, 0%, 13%);\r\n}\r\n\r\n.card .pair {\r\n    margin-bottom: 1.25rem;\r\n}\r\n\r\n.card .key {\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    font-size: 0.75em;\r\n    letter-spacing: 0.1em;\r\n    margin-bottom: 0;\r\n    color: hsl(0, 0%, 13%);\r\n}\r\n\r\n.card .value {\r\n    font-size: 1.15em;\r\n    font-weight: 400;\r\n    color: hsl(0, 0%, 25%);\r\n    line-height: 1.3rem;\r\n}\r\n\r\n.card .btn {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    font-weight: 600;\r\n    font-size: 0.75em;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1em;\r\n    padding: 1rem;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination {\r\n    padding: 0;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 0.9rem !important;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination li {\r\n    margin: 0 2px;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination a {\r\n    text-decoration: none;\r\n    -webkit-transition: all .1s ease-in-out;\r\n    transition: all .1s ease-in-out;\r\n    color: hsl(0, 0%, 27%);\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    padding: 10px 16px;\r\n    outline: none;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination a:hover {\r\n    background: hsl(0, 0%, 95%);\r\n    border-color: transparent;\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination a:active {\r\n    background: hsl(0, 0%, 90%);\r\n}\r\n\r\n.my-pagination /deep/ .ngx-pagination .current {\r\n    font-weight: 600;\r\n    padding: 10px 16px;\r\n    background: hsl(211, 100%, 50%);\r\n    border: 1px solid hsl(211, 100%, 45%);\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: 0 1px 2px 0 hsla(0, 0%, 0%, 0.25),\r\n                0 1px 0 0 hsla(0, 100%, 100%, 0.25) inset;\r\n            box-shadow: 0 1px 2px 0 hsla(0, 0%, 0%, 0.25),\r\n                0 1px 0 0 hsla(0, 100%, 100%, 0.25) inset;\r\n}"

/***/ }),

/***/ "./src/app/country/countries/countries.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"searching\"></app-loading-screen>\n\n<div class=\"d-flex flex-column\">\n\n  <header class=\"d-flex flex-column\">\n\n    <img src=\"assets/images/{{coverImage}}.jpg\" *ngIf=\"coverImage\">\n    <div class=\"title d-flex align-items-center justify-content-center\">\n      <div *ngIf=\"type === 'region'\">{{ value }}</div>\n      <div *ngIf=\"type === 'currency'\">Currency: {{ value }}</div>\n      <div *ngIf=\"type === 'lang'\">Language: {{ value  }}</div>\n    </div>\n\n    <!-- Filtering Textboxes -->\n    <div class=\"filters d-flex flex-column flex-md-row justify-content-around px-3 py-2 w-100\">\n      <input type=\"text\" class=\"textbox\" [class.active]=\"nameFilter\" placeholder=\"Search Name\" [(ngModel)]=\"nameFilter\">\n      <input type=\"text\" class=\"textbox\" [class.active]=\"langFilter\" placeholder=\"Search Language\" [(ngModel)]=\"langFilter\">\n      <input type=\"text\" class=\"textbox\" [class.active]=\"currencyFilter\" placeholder=\"Search Currency\" [(ngModel)]=\"currencyFilter\">\n    </div>\n\n  </header>\n\n  <div class=\"container-fluid pt-3 list-container\">\n\n    <!-- Number of Countries found -->\n    <div class=\"text-center text-muted\" *ngIf=\"!searching && !nameFilter && !langFilter && !currencyFilter\">\n      {{ list.length }} countr{{ list.length > 1 ? 'ies' : 'y' }} found.\n    </div>\n\n    <!-- Country List -->\n    <div class=\"row\">\n      <div class=\"col-12 col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let country of list | nameFilter: nameFilter | langFilter: langFilter | currencyFilter: currencyFilter | paginate: { itemsPerPage: 12, currentPage: pageNumber }\">\n        <div class=\"card mx-auto my-3 shadow border-0\" [@cardAnim]=\"cardState\">\n          <img src=\"{{ country.flag }}\" alt=\"{{ country.name }}\" class=\"card-img-top\">\n          <div class=\"card-body\">\n            <div class=\"card-title\" [innerHtml]=\"country.name | makeBolder: nameFilter\"></div>\n            <div class=\"card-text\">\n              <div class=\"pair\" *ngIf=\"country.type !== 'region'\">\n                <div class=\"key\">Region</div>\n                <div class=\"value\">{{ country.region }}</div>\n              </div>\n              <div class=\"pair\" *ngIf=\"country.capital\">\n                <div class=\"key\">Capital</div>\n                <div class=\"value\">{{ country.capital }}</div>\n              </div>\n              <div class=\"pair\" *ngIf=\"country.subregion\">\n                <div class=\"key\">Subregion</div>\n                <div class=\"value\">{{ country.subregion }}</div>\n              </div>\n              <div class=\"pair\">\n                <div class=\"key\">Timezone{{ country.timezones.length > 1 ? 's' : '' }}</div>\n                <div class=\"value\">{{ country.timezones.join(', ') }}</div>\n              </div>\n              <div class=\"pair\">\n                <div class=\"key\">Currenc{{ country.currencies.length > 1 ? 'ies' : 'y' }}</div>\n                <div class=\"value\">\n                  <span *ngFor=\"let currency of country.currencies; let last = last\"><a routerLink=\"/countries/currency/{{currency.code}}\" class=\"card-link\" [innerHtml]=\"currency.name | makeBolder: currencyFilter\"></a>{{ last ? '' : ', ' }}</span>\n                </div>\n              </div>\n              <div class=\"pair\">\n                <div class=\"key\">Language{{ country.languages.length > 1 ? 's' : '' }}</div>\n                <div class=\"value\">\n                  <span *ngFor=\"let language of country.languages; let last = last\"><a routerLink=\"/countries/lang/{{language.code}}\" class=\"card-link\" [innerHtml]=\"language.name | makeBolder: langFilter\"></a>{{ last ? '' : ', ' }}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button class=\"btn btn-primary btn-block\" (click)=\"showCountry(country.name)\">More Info</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Pagination Controls -->\n    <div class=\"text-center my-3\">\n      <pagination-controls class=\"my-pagination\" [directionLinks]=\"false\" (pageChange)=\"_pageChange($event)\"></pagination-controls>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/country/countries/countries.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_service__ = __webpack_require__("./src/app/country/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountriesComponent = /** @class */ (function () {
    function CountriesComponent(_activatedRoute, _appService, _router, _countryService) {
        this._activatedRoute = _activatedRoute;
        this._appService = _appService;
        this._router = _router;
        this._countryService = _countryService;
        this.countryList = [];
        this.list = [];
        this.coverImage = '';
        this.searching = true;
        this.pageNumber = 1;
        this.nameFilter = '';
        this.langFilter = '';
        this.currencyFilter = '';
        this.scrollWindow = null;
    }
    CountriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.value = this._activatedRoute.snapshot.params.value;
        this._activatedRoute.data.subscribe(function (data) {
            _this.type = data.type;
            _this.coverImage = data.type === 'region' ? _this.value : data.type;
            _this.pageNumber = _this._countryService.getPageNumber();
            _this._getCountries();
        });
    };
    CountriesComponent.prototype.ngAfterViewChecked = function () {
        if (this.scrollWindow !== null) {
            window.scrollTo(this.scrollWindow.x, this.scrollWindow.y);
            this.scrollWindow = null;
        }
    };
    CountriesComponent.prototype.ngOnDestroy = function () {
        this._countryService.setPageNumber(this.pageNumber);
    };
    CountriesComponent.prototype._getCountries = function () {
        var _this = this;
        this._appService.getCountriesByType(this.type, this.value)
            .then(function (response) {
            response.forEach(function (country) {
                _this.countryList.push(_this._countryService.createObj(country));
            });
            _this.countryList = _this.countryList.sort(function (a, b) { return a.name > b.name ? 1 : -1; });
            _this.list = _this.countryList;
            _this.searching = false;
        })
            .catch(function (err) {
            console.log('countries.component.ts:82', err);
            _this._router.navigate(['/']);
        });
    };
    CountriesComponent.prototype._pageChange = function (event) {
        this.pageNumber = event;
        this.scrollWindow = { x: 0, y: 0 };
    };
    CountriesComponent.prototype.showCountry = function (countryName) {
        this._router.navigate(['/country', countryName]);
    };
    CountriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-countries',
            template: __webpack_require__("./src/app/country/countries/countries.component.html"),
            styles: [__webpack_require__("./src/app/country/countries/countries.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["j" /* trigger */])('cardAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('void => shown', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(200)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["i" /* transition */])('shown => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__country_service__["a" /* CountryService */]])
    ], CountriesComponent);
    return CountriesComponent;
}());



/***/ }),

/***/ "./src/app/country/country.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__countries_countries_component__ = __webpack_require__("./src/app/country/countries/countries.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_country_component__ = __webpack_require__("./src/app/country/country/country.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__country_service__ = __webpack_require__("./src/app/country/country.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_name_filter_pipe__ = __webpack_require__("./src/app/country/pipes/name-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_lang_filter_pipe__ = __webpack_require__("./src/app/country/pipes/lang-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_currency_filter_pipe__ = __webpack_require__("./src/app/country/pipes/currency-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_make_bolder_pipe__ = __webpack_require__("./src/app/country/pipes/make-bolder.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CountryModule = /** @class */ (function () {
    function CountryModule() {
    }
    CountryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__countries_countries_component__["a" /* CountriesComponent */],
                __WEBPACK_IMPORTED_MODULE_3__country_country_component__["a" /* CountryComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_name_filter_pipe__["a" /* NameFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_lang_filter_pipe__["a" /* LangFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_currency_filter_pipe__["a" /* CurrencyFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_make_bolder_pipe__["a" /* MakeBolderPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: 'countries',
                        children: [
                            {
                                path: 'region/:value',
                                component: __WEBPACK_IMPORTED_MODULE_2__countries_countries_component__["a" /* CountriesComponent */],
                                data: { type: 'region' }
                            },
                            {
                                path: 'currency/:value',
                                component: __WEBPACK_IMPORTED_MODULE_2__countries_countries_component__["a" /* CountriesComponent */],
                                data: { type: 'currency' }
                            },
                            {
                                path: 'lang/:value',
                                component: __WEBPACK_IMPORTED_MODULE_2__countries_countries_component__["a" /* CountriesComponent */],
                                data: { type: 'lang' }
                            }
                        ]
                    },
                    {
                        path: 'country/:name',
                        component: __WEBPACK_IMPORTED_MODULE_3__country_country_component__["a" /* CountryComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__country_service__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */]]
        })
    ], CountryModule);
    return CountryModule;
}());



/***/ }),

/***/ "./src/app/country/country.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountryService = /** @class */ (function () {
    function CountryService() {
        this._pageNumber = 0;
    }
    CountryService.prototype.createObj = function (country) {
        return {
            altNames: country.altSpellings,
            area: country.area,
            borders: country.borders,
            capital: country.capital,
            currencies: country.currencies,
            demonym: country.demonym,
            flag: country.flag,
            languages: country.languages.map(function (language) {
                return {
                    code: language.iso639_1,
                    name: language.name,
                    nativeName: language.nativeName
                };
            }),
            latlng: country.latlng,
            name: country.name,
            nativeName: country.nativeName,
            population: country.population,
            region: country.region,
            subregion: country.subregion,
            timezones: country.timezones,
            regionalBlocs: country.regionalBlocs.map(function (bloc) {
                return {
                    acronym: bloc.acronym,
                    name: bloc.name
                };
            })
        };
    };
    CountryService.prototype.getPageNumber = function () {
        return this._pageNumber;
    };
    CountryService.prototype.setPageNumber = function (pageNumber) {
        this._pageNumber = pageNumber;
    };
    CountryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/country/country/country.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.main-container {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n\r\n\r\nheader {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    letter-spacing: 0.2rem;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    padding: 0.75rem;\r\n    background: hsla(0, 0%, 100%, 0.95);\r\n    width: 100vw;\r\n    z-index: 3;\r\n}\r\n\r\n\r\n\r\n.cover {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.cover img {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -2;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n\r\n\r\n\r\n.cover::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: hsla(0, 0%, 0%, 0.1);\r\n}\r\n\r\n\r\n\r\n.cover .title {\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 2.5rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.5rem;\r\n    padding: 0.5rem 0.5rem 0.5rem 1rem;\r\n    text-shadow: 0 1px 0 0 hsla(0, 0%, 0%, 1) !important;\r\n    color: white;\r\n    max-width: 75%;\r\n    border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n@media all and (max-width: 768px) {\r\n    .cover .title { font-size: 1.75rem; }\r\n}\r\n\r\n\r\n\r\n@media all and (max-width: 576px) {\r\n    .cover .title {\r\n        font-size: 1.5rem;\r\n        max-width: 90%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.details-area {\r\n    width: 100%;\r\n    padding: 0 7rem;\r\n    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    background: hsl(0, 0%, 97%);\r\n}\r\n\r\n\r\n\r\n.details-area .title {\r\n    padding: 3rem 0;\r\n    font-weight: 700;\r\n    font-size: 1.25rem;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: uppercase;\r\n    /* text-align: center; */\r\n    position: relative;\r\n    color: hsl(0, 0%, 15%);\r\n}\r\n\r\n\r\n\r\n.details-area .title::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    -webkit-transform: translateY(2rem);\r\n            transform: translateY(2rem);\r\n    width: 10%;\r\n    height: 3px;\r\n    background: hsl(0, 0%, 15%);\r\n}\r\n\r\n\r\n\r\n.details-area .item {\r\n    margin-bottom: 1.75rem;\r\n}\r\n\r\n\r\n\r\n/* .details-area .item:nth-child(odd) {\r\n    text-align: right;\r\n} */\r\n\r\n\r\n\r\n.details-area .item:last-child { margin-bottom: 3rem; }\r\n\r\n\r\n\r\n.details-area .item .header,\r\n.details-area .item .footer {\r\n    font-weight: 500;\r\n    font-size: 0.8rem;\r\n    line-height: 1rem;\r\n    color: hsl(0, 0%, 47%);\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n}\r\n\r\n\r\n\r\n.details-area .item .content {\r\n    font-weight: 300;\r\n    font-size: 1.75rem;\r\n    margin-left: -1px;\r\n}\r\n\r\n\r\n\r\n.details-area .item .content a {\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n.details-area.geographic .title { color: white; }\r\n\r\n\r\n\r\n.details-area.geographic .title::after { background: white; }\r\n\r\n\r\n\r\n.details-area.geographic .item .header,\r\n.details-area.geographic .item .footer {\r\n    color: hsl(0, 0%, 85%);\r\n}\r\n\r\n\r\n\r\n.details-area.regional {\r\n    background: hsl(0, 0%, 90%);\r\n}\r\n\r\n\r\n\r\n@media all and (max-width: 450px) {\r\n    .details-area { padding: 0 4.5rem; }\r\n}"

/***/ }),

/***/ "./src/app/country/country/country.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading-screen *ngIf=\"!valid\"></app-loading-screen>\n\n<div class=\"main-container\" *ngIf=\"valid\">\n\n  <header *ngIf=\"showHeader\">{{ country.name }}</header>\n\n  <div class=\"w-100 h-100 d-flex justify-content-center align-items-center cover\">\n    <img src=\"{{ country.flag }}\" class=\"w-100 h-100\">\n    <div class=\"text-center title\" [style.backgroundColor]=\"titleBackgroundColor\">{{ country.name }}</div>\n  </div>\n\n  <div class=\"details-area basic\">\n    <div class=\"title\">Basic Details</div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.capital\">\n        <div class=\"header\">Capital</div>\n        <div class=\"content\">{{ country.capital }}</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.demonym\">\n        <div class=\"header\">Demonym</div>\n        <div class=\"content\">{{ country.demonym }}</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.region\">\n        <div class=\"header\">Region</div>\n        <div class=\"content\">{{ country.region }}</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.subregion\">\n        <div class=\"header\">Subregion</div>\n        <div class=\"content\">{{ country.subregion }}</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.nativeName\">\n        <div class=\"header\">Native Name</div>\n        <div class=\"content\">{{ country.nativeName }}</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.altNames && country.altNames.length > 0\">\n        <div class=\"header\">Alternate Names</div>\n        <div class=\"content\">{{ country.altNames.join(', ') }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"details-area geographic text-white\" [style.backgroundColor]=\"titleBackgroundColor\">\n    <div class=\"title\">Geographic Details</div>\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.population\">\n        <div class=\"header\">Population</div>\n        <div class=\"content\">{{ country.population | number }}</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.area\">\n        <div class=\"header\">Area</div>\n        <div class=\"content\">{{ country.area | number }} sq. km.</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.latlng && country.latlng.length > 0\">\n        <div class=\"header\">Latitude</div>\n        <div class=\"content\">{{ country.latlng[0] | number }}\n          <sup style=\"margin-left:-4px;\">o</sup>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.latlng && country.latlng.length > 0\">\n        <div class=\"header\">Longitude</div>\n        <div class=\"content\">{{ country.latlng[1] | number }}\n          <sup style=\"margin-left:-4px;\">o</sup>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.timezones && country.timezones.length > 0\">\n        <div class=\"header\">Timezones</div>\n        <div class=\"content\">{{ country.timezones.join(', ') }}</div>\n      </div>\n      <div class=\"col-12 col-md-6 item\" *ngIf=\"country.borders && country.borders.length > 0\">\n        <div class=\"header\">Borders</div>\n        <div class=\"content\">{{ country.borders.join(', ') }}</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"details-area\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <div class=\"text-left title\">Currenc{{ country.currencies.length > 1 ? 'ies' : 'y' }}</div>\n        <div class=\"item\" *ngFor=\"let currency of country.currencies\">\n          <div class=\"content\"><a routerLink=\"/countries/currency/{{currency.code}}\">{{ currency.name }}</a></div>\n          <div class=\"footer\">\n            {{ currency.code }}\n            <span *ngIf=\"currency.symbol\">({{ currency.symbol }})</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6\">\n        <div class=\"text-left title\">Language{{ country.languages.length > 1 ? 's' : '' }}</div>\n        <div class=\"item\" *ngFor=\"let language of country.languages\">\n          <div class=\"content\"><a routerLink=\"/countries/lang/{{language.code}}\">{{ language.name }}</a></div>\n          <div class=\"footer\">{{ language.nativeName }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"details-area regional\" *ngIf=\"country.regionalBlocs && country.regionalBlocs.length > 0\">\n    <div class=\"title\">Regional Blocks</div>\n    <div class=\"row\">\n      <div class=\"col-12 col-lg-6 item\" *ngFor=\"let block of country.regionalBlocs\">\n        <div class=\"content\">{{ block.name }}</div>\n        <div class=\"footer\">{{ block.acronym }}</div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/country/country/country.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_service__ = __webpack_require__("./src/app/country/country.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Vibrant = __webpack_require__("./node_modules/node-vibrant/lib/browser.js");
var CountryComponent = /** @class */ (function () {
    function CountryComponent(_appService, _countryService, _activatedRoute, _el) {
        this._appService = _appService;
        this._countryService = _countryService;
        this._activatedRoute = _activatedRoute;
        this._el = _el;
        this.valid = false;
        this.showHeader = false;
    }
    CountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var countryName = this._activatedRoute.snapshot.params.name;
        this._appService.getCountriesByType('name', countryName)
            .then(function (response) {
            _this.country = _this._countryService.createObj(response[0]);
            Vibrant.from(_this.country.flag).getPalette()
                .then(function (palette) {
                var swatch = palette.DarkVibrant;
                _this.titleBackgroundColor = "\n              rgba(" + swatch.r + ", " + swatch.g + ", " + swatch.b + ", 0.9)\n            ";
            });
            _this.valid = true;
        })
            .catch(function (err) { return console.log(err); });
    };
    CountryComponent.prototype.checkScroll = function () {
        var position = this._el.nativeElement.scrollTop;
        this.showHeader = window.pageYOffset >= window.innerHeight;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CountryComponent.prototype, "checkScroll", null);
    CountryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-country',
            template: __webpack_require__("./src/app/country/country/country.component.html"),
            styles: [__webpack_require__("./src/app/country/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_3__country_service__["a" /* CountryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/country/pipes/currency-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrencyFilterPipe = /** @class */ (function () {
    function CurrencyFilterPipe() {
    }
    CurrencyFilterPipe.prototype.transform = function (list, value) {
        return list.filter(function (country) {
            return country.currencies.find(function (currency) {
                var name = currency.name;
                var code = currency.code;
                return name && name.toLowerCase().includes(value.toLowerCase()) ||
                    code && code.toLowerCase().includes(value.toLowerCase());
            });
        });
    };
    CurrencyFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'currencyFilter'
        })
    ], CurrencyFilterPipe);
    return CurrencyFilterPipe;
}());



/***/ }),

/***/ "./src/app/country/pipes/lang-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LangFilterPipe = /** @class */ (function () {
    function LangFilterPipe() {
    }
    LangFilterPipe.prototype.transform = function (list, value) {
        return list.filter(function (country) {
            return country.languages.find(function (lang) {
                var name = lang.name;
                var code = lang.code;
                return name && name.toLowerCase().includes(value.toLowerCase()) ||
                    code && code.toLowerCase().includes(value.toLowerCase());
            });
        });
    };
    LangFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'langFilter'
        })
    ], LangFilterPipe);
    return LangFilterPipe;
}());



/***/ }),

/***/ "./src/app/country/pipes/make-bolder.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakeBolderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MakeBolderPipe = /** @class */ (function () {
    function MakeBolderPipe() {
    }
    MakeBolderPipe.prototype.transform = function (value, text) {
        if (!value) {
            return '';
        }
        if (!text) {
            return value;
        }
        text = text.toLowerCase();
        if (!value.toLowerCase().includes(text)) {
            return value;
        }
        var index = value.toLowerCase().indexOf(text);
        var length = text.length;
        return value.substr(0, index) + "<b>" + value.substr(index, length) + "</b>" + value.substr(index + length);
    };
    MakeBolderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'makeBolder'
        })
    ], MakeBolderPipe);
    return MakeBolderPipe;
}());



/***/ }),

/***/ "./src/app/country/pipes/name-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NameFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NameFilterPipe = /** @class */ (function () {
    function NameFilterPipe() {
    }
    NameFilterPipe.prototype.transform = function (list, value) {
        if (!list) {
            return null;
        }
        if (!value) {
            return list;
        }
        value = value.toLowerCase();
        return list.filter(function (country) { return country.name.toLowerCase().includes(value); });
    };
    NameFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'nameFilter'
        })
    ], NameFilterPipe);
    return NameFilterPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n#mainContainer {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.main-area {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.image {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.image img {\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n\r\n.image::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.title {\r\n  font-size: 0.8rem;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-weight: 700;\r\n  color: hsla(0, 0%, 100%, 0.5);\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.15rem;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n  font-weight: 300;\r\n  font-size: 2rem;\r\n  width: 16rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown .placeholder, .dropdown .list .item {\r\n  padding: 0.75rem;\r\n  text-align: center;\r\n  color: hsl(0, 0%, 100%);\r\n  border-bottom: 2px solid white;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.15rem;\r\n  -webkit-transition: all .1s ease-in-out;\r\n  transition: all .1s ease-in-out;\r\n}\r\n\r\n.dropdown .placeholder:hover {\r\n  background: white;\r\n  color: hsl(0, 47%, 13%);\r\n}\r\n\r\n.dropdown .list .item {\r\n  background: white;\r\n  color: hsl(0, 47%, 13%);\r\n  border-bottom: 1px solid hsl(0, 47%, 13%);\r\n}\r\n\r\n.dropdown .list .item:hover {\r\n  background: hsl(0, 47%, 13%);\r\n  color: white;\r\n}\r\n\r\n.dropdown .list {\r\n  position: absolute;\r\n  width: inherit;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n}\r\n\r\n.dropdown .list .item {\r\n  border-bottom: 1px solid hsl(0, 47%, 13%);\r\n}\r\n\r\n.dropdown .list .item:last-child {\r\n  border-bottom: none;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column bg-dark\" id=\"mainContainer\">\n\n  <div class=\"main-area\" *ngFor=\"let region of regions\">\n    <div class=\"image\">\n      <img src=\"assets/images/{{region}}.jpg\" *ngIf=\"selectedRegion === region\" [@imageAnim]=\"'shown'\">\n    </div>\n  </div>\n\n  <div class=\"main-area\" style=\"z-index:2;\">\n    <div class=\"d-flex flex-column w-100 h-100 justify-content-center align-items-center\">\n        <div class=\"title mb-2\">\n          Select Region\n        </div>\n        <div class=\"dropdown\">\n          <div class=\"placeholder px-3 justify-content-between d-flex align-items-center\" (click)=\"toggleListState()\" *ngIf=\"listState === 'hidden'\">{{ selectedRegion | titlecase }} <i class=\"fas fa-caret-down\"></i></div>\n          <div class=\"list\" [@listAnim]=\"listState\">\n            <div class=\"item\" *ngFor=\"let region of regions\" (click)=\"selectRegion(region)\">{{ region | titlecase }}</div>\n          </div>\n        </div>\n        <a class=\"btn btn-outline-light mt-5\" routerLink=\"/countries/region/{{selectedRegion}}\">Search Countries</a>\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.selectedRegion = 'asia';
        this.regions = ['asia', 'africa', 'americas', 'europe', 'oceania', 'polar'];
        this.listState = 'hidden';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.toggleListState = function () {
        this.listState = this.listState === 'hidden' ? 'shown' : 'hidden';
    };
    HomeComponent.prototype.selectRegion = function (region) {
        this.selectedRegion = region;
        this.toggleListState();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('listAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: 'block',
                        opacity: 1,
                        transform: 'translateY(-50%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        display: 'none',
                        opacity: 0,
                        transform: 'translateY(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hidden => shown', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                            display: 'block',
                            opacity: 0,
                            transform: 'translateY(-25%)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                            display: 'block',
                            opacity: 1,
                            transform: 'translateY(-50%)'
                        }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('shown => hidden', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                            display: 'block',
                            opacity: 0,
                            transform: 'translateY(-15%)'
                        }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('imageAnim', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hidden <=> shown', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(200)),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('void => shown', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(200)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('shown => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(200, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/loading-screen/loading-screen.component.css":
/***/ (function(module, exports) {

module.exports = ".loading-area {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    z-index: 100;\r\n}"

/***/ }),

/***/ "./src/app/shared/components/loading-screen/loading-screen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-area\">\n  <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    width=\"40px\" height=\"40px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n    <path fill=\"#000\" d=\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\">\n      <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.6s\" repeatCount=\"indefinite\"\n      />\n    </path>\n  </svg>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/loading-screen/loading-screen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingScreenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingScreenComponent = /** @class */ (function () {
    function LoadingScreenComponent() {
    }
    LoadingScreenComponent.prototype.ngOnInit = function () {
    };
    LoadingScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading-screen',
            template: __webpack_require__("./src/app/shared/components/loading-screen/loading-screen.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/loading-screen/loading-screen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingScreenComponent);
    return LoadingScreenComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading_screen_loading_screen_component__ = __webpack_require__("./src/app/shared/components/loading-screen/loading-screen.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_loading_screen_loading_screen_component__["a" /* LoadingScreenComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_loading_screen_loading_screen_component__["a" /* LoadingScreenComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map