webpackJsonp([1,4],{

/***/ 345:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 345;


/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/task/angular-src/src/main.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(626),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/task/angular-src/src/app.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_skills_skills_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_contact_contact_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_scroll_to_el__ = __webpack_require__(616);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_scroll_to_el__["a" /* ScrollToModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/task/angular-src/src/app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.goals = {
            'title': 'Goals',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur doloremque dolorum enim et facere natus, nihil placeat provident rerum vitae. Ad asperiores corporis eaque enim ipsa, ipsam iure laudantium modi nam nostrum optio porro quo rem repudiandae rerum sapiente sit sunt velit voluptatibus voluptatum. A accusantium architecto atque error ipsa laborum magnam porro recusandae, unde ut. Aspernatur exercitationem maxime necessitatibus.'
        };
        this.dreams = {
            'title': 'Dreams',
            'text': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A delectus esse id impedit in ipsam ipsum iure, maxime modi nisi porro quaerat quam, rerum sint soluta tempora velit. Aliquid distinctio eos maiores optio possimus reiciendis repellat reprehenderit soluta suscipit vel. Adipisci beatae consequatur deserunt dolor dolore eaque error excepturi fuga illo iusto, natus neque pariatur quam soluta tempora tempore velit.'
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(627),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=E:/task/angular-src/src/about.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        this.communication = [
            { key: 'Phone number', value: '+38068-021-00-21' },
            { key: 'Email', value: 'stanislav.perepelitsa@gmail.com' },
            { key: 'Skype', value: 'Oporonic88s' }
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function () {
        var data = {
            name: this.name,
            email: this.email,
            message: this.message
        };
        console.log('Name: ' + data.name + '\nEmail: ' + data.email + '\nMessage: ' + data.message);
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(628),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=E:/task/angular-src/src/contact.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.communication = [
            { key: 'Mobile', value: '+38068-021-00-21' },
            { key: 'Email', value: 'stanislav.perepelitsa@gmail.com' },
            { key: 'Skype', value: 'Oporonic88s' }
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(629),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=E:/task/angular-src/src/footer.component.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.homeData = {
            name: 'Stanislav Perepelitsa',
            position: 'Front-End developer'
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(630),
            styles: [__webpack_require__(623)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=E:/task/angular-src/src/home.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    // public links: string[] = ['home', 'about', 'skills', 'contact'];
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(631),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=E:/task/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
        this.skills = [
            { name: 'HTML5', level: Array(15) },
            { name: 'CSS3', level: Array(7) },
            { name: 'JavaScript', level: Array(9) },
            { name: 'ReactJS', level: Array(2) },
            { name: 'AngularJS', level: Array(5) },
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-skills',
            template: __webpack_require__(632),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillsComponent);
    return SkillsComponent;
}());
//# sourceMappingURL=E:/task/angular-src/src/skills.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/task/angular-src/src/environment.js.map

/***/ }),

/***/ 619:
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n  font-family: \"Open Sans\", sans-serif; }\n\n.title {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 25px; }\n"

/***/ }),

/***/ 620:
/***/ (function(module, exports) {

module.exports = "#about {\n  padding: 2% 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  #about .info .goals h3,\n  #about .info .dreams h3 {\n    font-weight: bold;\n    font-style: italic;\n    margin-bottom: 15px; }\n  #about .info .image {\n    text-align: center;\n    margin: auto; }\n    #about .info .image img {\n      border-radius: 100%;\n      max-width: 200px;\n      max-height: 200px; }\n\n@media screen and (max-width: 991px) {\n  .info .goals h3,\n  .info .dreams h3 {\n    text-align: center;\n    font-size: 26px; }\n  .info .goals p,\n  .info .dreams p {\n    text-align: justify;\n    font-size: 15px; }\n  .info .image img {\n    margin: 15px 0; } }\n\n@media screen and (min-width: 992px) {\n  .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .info .goals h3,\n    .info .dreams h3 {\n      font-size: 22px; }\n    .info .goals p,\n    .info .dreams p {\n      font-size: 16px; }\n    .info .goals {\n      text-align: right; }\n    .info .image img {\n      width: 100%; }\n    .info .dreams {\n      text-align: left; } }\n"

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

module.exports = "#contact {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  #contact .communication .key {\n    font-weight: bold;\n    margin-bottom: 5px; }\n  #contact .communication .value {\n    color: #969696; }\n  #contact .form input,\n  #contact .form textarea {\n    width: 100%;\n    padding: 4px 8px; }\n    #contact .form input:focus,\n    #contact .form textarea:focus {\n      outline-color: #333333; }\n  #contact .form textarea {\n    margin-top: 10px; }\n  #contact .send-btn {\n    text-transform: uppercase;\n    color: white;\n    background: #333333;\n    padding: 3px 60px;\n    letter-spacing: 1px;\n    border-color: #333333;\n    transition: ease, 0.1;\n    outline: none; }\n    #contact .send-btn:hover {\n      color: #333333;\n      background: white; }\n\n@media screen and (max-width: 767px) {\n  #contact {\n    padding: 3% 0;\n    text-align: center; }\n    #contact .communication {\n      margin-bottom: 20px; } }\n\n@media screen and (min-width: 768px) {\n  #contact {\n    padding: 2% 0; }\n    #contact .send-btn {\n      display: block;\n      margin: auto; } }\n"

/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports = "#footer {\n  color: white;\n  background: #333333;\n  padding: 2% 0; }\n  #footer .info .communication .name {\n    font-weight: bold; }\n  #footer a {\n    cursor: pointer; }\n\n@media screen and (max-width: 767px) {\n  #footer .info .communication {\n    text-align: center;\n    padding-bottom: 15px; }\n    #footer .info .communication .name {\n      padding-right: 5px; }\n  #footer .info .logo {\n    text-align: center; } }\n\n@media screen and (min-width: 768px) {\n  #footer .info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    #footer .info .communication .name {\n      padding-right: 8px; }\n    #footer .info .logo {\n      text-align: right;\n      margin: auto; } }\n"

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "#home {\n  background: url(\"../../assets/images/bg.png \");\n  background-size: cover;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 12px; }\n  #home .info {\n    margin: auto; }\n    #home .info h1,\n    #home .info h2 {\n      text-align: center;\n      color: white;\n      text-transform: uppercase;\n      letter-spacing: 0.1em; }\n    #home .info h1 {\n      font-size: 3em;\n      font-weight: bold; }\n    #home .info h2 {\n      font-size: 1.5em;\n      font-style: italic; }\n\n@media screen and (min-width: 768px) {\n  #home {\n    font-size: 14px; } }\n\n@media screen and (min-width: 992px) {\n  #home {\n    font-size: 16px; } }\n\n@media screen and (min-width: 1200px) {\n  #home {\n    font-size: 20px; } }\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background: transparent;\n  position: absolute;\n  left: 0;\n  right: 0;\n  border-radius: 100%;\n  border: 0;\n  margin: 0;\n  padding: 15px 0;\n  font-size: 16px; }\n  .navbar .navbar-brand, .navbar .nav a {\n    cursor: pointer; }\n  .navbar .nav a {\n    color: white;\n    text-transform: capitalize; }\n\n@media screen and (max-width: 767px) {\n  .navbar {\n    text-align: center;\n    padding: 0; }\n    .navbar .navbar-header {\n      padding: 15px 0; }\n    .navbar .nav {\n      margin: 0 -15px;\n      background: rgba(0, 0, 0, 0.7); }\n    .navbar li {\n      padding: 5px 0;\n      transition: all, 0.1s; }\n      .navbar li:hover {\n        background: rgba(0, 0, 0, 0.4); } }\n\n@media screen and (min-width: 1200px) {\n  .navbar {\n    font-size: 18px; } }\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "#skills {\n  padding: 2% 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n  #skills .info .name {\n    font-weight: bold;\n    letter-spacing: 1px; }\n  #skills .info .level .circle {\n    border-radius: 100%;\n    display: inline-block;\n    background: #9a9a9a;\n    margin: 0 3px; }\n\n@media screen and (min-width: 768px) {\n  #skills .info .skill {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  #skills .info .name {\n    font-size: 30px;\n    text-align: right; }\n  #skills .info .level {\n    margin: auto; }\n    #skills .info .level .circle {\n      width: 20px;\n      height: 20px; } }\n\n@media screen and (max-width: 767px) {\n  #skills .info {\n    text-align: center; }\n    #skills .info .name {\n      font-size: 22px; }\n    #skills .info .level {\n      margin-bottom: 20px; }\n      #skills .info .level .circle {\n        width: 18px;\n        height: 18px; } }\n\n@media screen and (max-width: 500px) {\n  #skills .info .name {\n    font-size: 18px; }\n  #skills .info .level {\n    margin-bottom: 15px; }\n    #skills .info .level .circle {\n      width: 15px;\n      height: 15px; } }\n"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-home></app-home>\n<app-about></app-about>\n<app-skills></app-skills>\n<app-contact></app-contact>\n<app-footer></app-footer>\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<section id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2 class=\"title\">About</h2>\n      <div class=\"info\">\n        <div class=\"col-xs-12 col-md-2 col-md-push-5 image\">\n          <img src=\"../../assets/images/photo.png\" alt=\"avatar\">\n        </div>\n        <div class=\"col-xs-12 col-md-5 col-md-pull-2 goals\">\n          <h3>{{ goals.title }}</h3>\n          <p>{{ goals.text }}</p>\n        </div>\n        <div class=\"col-xs-12 col-md-5 dreams\">\n          <h3>{{ dreams.title }}</h3>\n          <p>{{ dreams.text }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2 class=\"title\">Contact</h2>\n      <div class=\"col-xs-12 col-sm-offset-1 col-sm-5 col-md-offset-2 col-md-4 communication\">\n        <div *ngFor=\"let item of communication\">\n          <p class=\"key\">{{ item.key }}:</p>\n          <p class=\"value\">{{ item.value }}</p>\n        </div>\n      </div>\n      <div class=\"col-xs-12 col-sm-6 col-md-5\">\n        <div class=\"form\">\n          <form (submit)=\"onSubmit(data)\">\n            <div class=\"form-group\">\n              <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" required>\n            </div>\n            <div class=\"form-group\">\n              <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required>\n            </div>\n            <div class=\"form-group\">\n              <textarea [(ngModel)]=\"message\" name=\"message\" rows=\"6\" placeholder=\"Send a message\" required></textarea>\n            </div>\n            <button type=\"submit\" class=\"send-btn\">Send</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"info\">\n        <div class=\"col-xs-12 col-sm-6 communication\">\n          <div *ngFor=\"let item of communication\">\n            <span class=\"name\">{{ item.key }}:</span> <span>{{ item.value }}</span>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 logo\">\n          <a [scrollTo]=\"'#home'\" [scrollDuration]=\"1000\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"0.458in\" height=\"0.25in\">\n              <text kerning=\"auto\" font-family=\"Tahoma\" fill=\"rgb(255, 255, 255)\" transform=\"matrix( 0.60431654676259, 0, 0, 0.8769291663843,0.66207194244605, 20.3923624974587)\" font-size=\"30px\">&#60;&#47;&#62;</text>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\n  <div class=\"info\">\n    <h1>{{ homeData.name }}</h1>\n    <h2>{{ homeData.position }}</h2>\n  </div>\n</section>\n"

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [scrollTo]=\"'#home'\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"0.458in\" height=\"0.25in\">\n          <text kerning=\"auto\" font-family=\"Tahoma\" fill=\"rgb(255, 255, 255)\" transform=\"matrix( 0.60431654676259, 0, 0, 0.8769291663843,0.66207194244605, 20.3923624974587)\" font-size=\"30px\">&#60;&#47;&#62;</text>\n        </svg>\n      </a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a [scrollTo]=\"'#home'\" [scrollDuration]=\"1000\">Home</a></li>\n        <li><a [scrollTo]=\"'#about'\" [scrollDuration]=\"1000\">About</a></li>\n        <li><a [scrollTo]=\"'#skills'\" [scrollDuration]=\"1000\">Skills</a></li>\n        <li><a [scrollTo]=\"'#contact'\" [scrollDuration]=\"1000\">Contact</a></li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ 632:
/***/ (function(module, exports) {

module.exports = "<section id=\"skills\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2 class=\"title\">Skills</h2>\n      <div class=\"info\">\n        <div class=\"skill\" *ngFor=\"let skill of skills\">\n          <div class=\"col-xs-12 col-sm-6 name\">\n            <p>{{ skill.name }}</p>\n          </div>\n\n          <div class=\"col-xs-12 col-sm-6 level\">\n            <span class=\"circle\" *ngFor=\"let item of skill.level | slice:0:10\">{{item}}</span>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(346);


/***/ })

},[647]);
//# sourceMappingURL=main.bundle.map