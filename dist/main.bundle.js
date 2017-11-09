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
        template: "<router-outlet></router-outlet>",
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_safe_pipe__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/safe-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__search_test_search_test_component__ = __webpack_require__("../../../../../src/app/search-test/search-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_search_service_client__ = __webpack_require__("../../../../../src/app/services/search.service.client.ts");
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
        // Declare components here
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_test_test_component__["a" /* TestComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_page_page_list_page_list_component__["a" /* PageListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_32__search_test_search_test_component__["a" /* SearchTestComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_31__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_30_ngx_quill_editor__["a" /* QuillEditorModule */]
        ],
        // Client Side services here
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_test_service_client__["a" /* TestService */], __WEBPACK_IMPORTED_MODULE_25__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_26__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_27__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_28__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_33__services_search_service_client__["a" /* SearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__search_test_search_test_component__ = __webpack_require__("../../../../../src/app/search-test/search-test.component.ts");
/**
 * Created by sesha on 7/26/17.
 */





















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'test', component: __WEBPACK_IMPORTED_MODULE_2__components_test_test_component__["a" /* TestComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_7__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_10__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_11__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/header', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/image', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/youtube', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/html', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/text', component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_20__search_test_search_test_component__["a" /* SearchTestComponent */] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>\r\n    Angular 4 MEAN stack app\r\n  </h1>\r\n\r\n\r\n  <h3>\r\n    App works\r\n  </h3>\r\n\r\n\r\n  <!--<h4>-->\r\n    <!--<a href=\"test\">Test MongoDB</a>-->\r\n  <!--</h4>-->\r\n\r\n  <h3>\r\n    <a [routerLink]=\"['login']\">Login</a>\r\n  </h3>\r\n  <h3>\r\n    <a [routerLink]=\"['search']\">Search</a>\r\n  </h3>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"websiteList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Pages</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"pageNew()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Edit Page</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"edit()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n      <!--remove sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"pageList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n\n      <li *ngFor=\"let page of pages\" class=\"list-group-item\">\n        <a (click)=\"widgetList(page)\">\n          <b>{{page.name}}</b>\n        </a>\n        <a (click)=\"pageEdit(page)\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"page-name\">Page Name</label>\n        <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" id=\"page-name\" name=\"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"page-title\">Page Title</label>\n        <input [(ngModel)]=\"title\" type=\"text\" class=\"form-control\" id=\"page-title\" name=\"title\">\n      </div>\n\n      <button class=\"btn btn-danger btn-block\"\n              (click)=\"deletePage()\" >Delete</button>\n\n    </form>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = (function () {
    function PageEditComponent(_pageService, activatedRoute, router) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [];
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this._pageService.findPagesByWebsiteId(this.userId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
        this._pageService.findPageById(this.pageId)
            .subscribe(function (page) {
            _this.page = page;
            _this.name = _this.page['name'];
            _this.title = _this.page['description'];
        });
    };
    PageEditComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    PageEditComponent.prototype.pageNew = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageEditComponent.prototype.pageEdit = function (page) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id]);
    };
    PageEditComponent.prototype.widgetList = function (page) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id, 'widget']);
    };
    PageEditComponent.prototype.websiteList = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    PageEditComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    PageEditComponent.prototype.edit = function () {
        var _this = this;
        this._pageService.updatePage(this.pageId, { '_id': this.pageId, 'name': this.name,
            'websiteId': this.websiteId, 'description': this.title })
            .subscribe(function (page) {
            _this.page = page;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId]);
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this._pageService.deletePage(this.pageId).subscribe(function () {
            _this.pageList();
        });
    };
    return PageEditComponent;
}());
PageEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-edit',
        template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageEditComponent);

var _a, _b, _c;
//# sourceMappingURL=page-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"websiteList()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Pages</b>\n      </a>\n    </p>\n\n    <!--plus sign-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"pageNew()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n\n    <li *ngFor=\"let page of pages\" class=\"list-group-item\">\n      <a (click)=\"widgetList(page)\">\n        <b>{{page.name}}</b>\n      </a>\n      <a (click)=\"pageEdit(page)\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = (function () {
    function PageListComponent(_pageService, activatedRoute, router) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this._pageService.findPagesByWebsiteId(this.userId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageListComponent.prototype.pageNew = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageListComponent.prototype.pageEdit = function (page) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id]);
    };
    PageListComponent.prototype.widgetList = function (page) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id, 'widget']);
    };
    PageListComponent.prototype.websiteList = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    PageListComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    return PageListComponent;
}());
PageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-list',
        template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PageListComponent);

var _a, _b, _c;
//# sourceMappingURL=page-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"websiteList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Pages</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"pageNew()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>New Page</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click) = \"createNewPage()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n\n      <li *ngFor=\"let page of pages\" class=\"list-group-item\">\n        <a (click)=\"widgetList(page)\">\n          <b>{{page.name}}</b>\n        </a>\n        <a (click)=\"pageEdit(page)\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n    <form #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"page-name\">Page Name</label>\n        <input type=\"text\"\n               name=\"name\"\n               class=\"form-control\"\n               id=\"page-name\"\n               ngModel\n               required\n               #name=\"ngModel\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"page-title\">Page Title</label>\n        <input type=\"text\"\n               name=\"title\"\n               class=\"form-control\"\n               id=\"page-title\"\n               ngModel\n               required\n               #title=\"ngModel\">\n      </div>\n\n      <button class=\"btn btn-danger btn-block\"\n              (click)=\"pageList()\">Cancel</button>\n\n    </form>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = (function () {
    function PageNewComponent(_pageService, activatedRoute, router) {
        this._pageService = _pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.pages = [];
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this._pageService.findPagesByWebsiteId(this.userId)
            .subscribe(function (pages) {
            _this.pages = pages;
        });
    };
    PageNewComponent.prototype.createNewPage = function () {
        var _this = this;
        this.name = this.newPageForm.value.name;
        this.title = this.newPageForm.value.name;
        this._pageService.createPage(this.userId, { 'name': this.name, 'title': this.title })
            .subscribe(function (page) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', page._id]);
        });
    };
    PageNewComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    PageNewComponent.prototype.pageNew = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', 'new']);
    };
    PageNewComponent.prototype.pageEdit = function (page) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id]);
    };
    PageNewComponent.prototype.widgetList = function (page) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', page._id, 'widget']);
    };
    PageNewComponent.prototype.websiteList = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    PageNewComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    return PageNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], PageNewComponent.prototype, "newPageForm", void 0);
PageNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-new',
        template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PageNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=page-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <h1>Test</h1>\r\n\r\n  <div *ngIf=\"alertMessage\"\r\n       class=\"alert alert-danger\">\r\n    \"Failed to create\"\r\n  </div>\r\n\r\n  <div *ngIf=\"successMessage\"\r\n       class=\"alert alert-success\">\r\n    \"Succesfully created/deleted\"\r\n  </div>\r\n\r\n  <table class=\"table\">\r\n    <thead>\r\n    <tr>\r\n      <th>Test Message</th>\r\n      <th>&nbsp;</th>\r\n    </tr>\r\n\r\n\r\n    <tr>\r\n      <td>\r\n        <input [(ngModel)]=\"message\"\r\n               placeholder=\"message\"\r\n               class=\"form-control\"/>\r\n      </td>\r\n\r\n\r\n      <td>\r\n        <button (click)=\"createMessage()\"\r\n                class=\"btn btn-primary pull-right\">\r\n          <span class=\"glyphicon glyphicon-plus\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </thead>\r\n\r\n\r\n    <tbody>\r\n    <tr *ngFor=\"let message of messages\">\r\n      <td>\r\n        {{message.message}}\r\n      </td>\r\n      <td>\r\n        <button (click)=\"deleteMessage(message._id)\"\r\n                class=\"btn btn-danger pull-right\">\r\n          <span class=\"glyphicon glyphicon-remove\"></span>\r\n        </button>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__ = __webpack_require__("../../../../../src/app/services/test.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = (function () {
    function TestComponent(_testService) {
        this._testService = _testService;
        this.alertMessage = false;
        this.successMessage = false;
        this.messages = [];
    }
    TestComponent.prototype.ngOnInit = function () {
        this.findAllMessages();
    };
    TestComponent.prototype.findAllMessages = function () {
        var _this = this;
        return this._testService.findAllMessages()
            .subscribe(function (data) {
            _this.messages = data;
        });
    };
    TestComponent.prototype.createMessage = function () {
        var _this = this;
        return this._testService.createMessage(this.message)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
            _this.message = null;
        });
    };
    TestComponent.prototype.deleteMessage = function (messageId) {
        var _this = this;
        return this._testService.deleteMessage(messageId)
            .subscribe(function (data) {
            _this.successMessage = true;
            _this.ngOnInit();
        });
    };
    return TestComponent;
}());
TestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-test',
        template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_test_service_client__["a" /* TestService */]) === "function" && _a || Object])
], TestComponent);

var _a;
//# sourceMappingURL=test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\" >Login</button>\n\n    <button class=\"btn btn-success btn-block\"\n            (click)=\"register()\">Register</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['user/', user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
        // const user: any = this.userService.findUserByCredentials(this.username, this.password);
        // if (user) {
        //   this.router.navigate(['user/', user._id]);
        // } else {
        //   this.errorFlag = true;
        // }
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['register']);
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], LoginComponent.prototype, "loginForm", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Profile</b>\n      </a>\n    </p>\n\n    <!--tick mark-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"editProfile()\"  class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" >\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" >\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n       (click)=\"website()\" >Websites</button>\n    <button class=\"btn btn-danger btn-block\"\n       (click)=\"logout()\" >Logout</button>\n\n  </form>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.user = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this.userService.findUserById(this.userId)
            .subscribe(function (user) {
            _this.user = user;
            _this.username = _this.user['username'];
            _this.password = _this.user['password'];
            _this.email = _this.user['email'];
            _this.firstName = _this.user['firstName'];
            _this.lastName = _this.user['lastName'];
        });
        // this.user = this.userService.findUserById(this.userId);
    };
    ProfileComponent.prototype.website = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    ProfileComponent.prototype.editProfile = function () {
        var _this = this;
        this.userService.updateUser(this.userId, { _id: this.userId, username: this.username, password: this.password,
            firstName: this.firstName, lastName: this.lastName })
            .subscribe(function (user) {
            _this.user = user;
            _this.router.navigate(['user/', _this.userId]);
        });
    };
    ProfileComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"errorFlag\"\n       class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input placeholder=\"username\"\n             name=\"username\"\n             type=\"text\"\n             class=\"form-control\"\n             ngModel\n             required\n             #username=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"password\"\n             name=\"password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #password=\"ngModel\" />\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n      </span>\n    </div>\n\n    <div class=\"form-group\">\n      <input placeholder=\"verify password\"\n             name=\"verify password\"\n             type=\"password\"\n             class=\"form-control\"\n             ngModel\n             required\n             #verifypassword=\"ngModel\" />\n      <span class=\"help-block\"\n            *ngIf=\"!verifypassword.valid && verifypassword.touched\" >\n      Please enter verify password!\n      </span>\n      <span class=\"help-block\"\n            *ngIf=\"!verifypassword!=password && verifypassword.touched\" >\n      Password does not match verify password!\n      </span>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\" >Register</button>\n    <button class=\"btn btn-danger btn-block\"\n            (click)=\"login()\" >Cancel</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password !';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // fetching data from loginForm
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.verifypassword = this.loginForm.value.verifypassword;
        this.errorFlag = false;
        this.userService.createUser({ username: this.username, password: this.password })
            .subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['user/', user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
        // const user: any = this.userService.createUser({username: this.username, password: this.password});
        // this.router.navigate(['user/', user._id]);
    };
    RegisterComponent.prototype.login = function () {
        this.router.navigate(['login']);
    };
    return RegisterComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], RegisterComponent.prototype, "loginForm", void 0);
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"profile()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Websites</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"websiteNew()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Edit Website</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"edit()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n      <!--remove sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"websiteList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n\n      <li *ngFor=\"let website of websites\" class=\"list-group-item\">\n        <a (click)=\"page(website)\">\n          <b>{{website.name}}</b>\n        </a>\n        <a (click)=\"websiteEdit(website)\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\" id=\"website-name\" >\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Website Description</label>\n        <textarea [(ngModel)]=\"description\"\n                  name=\"description\"\n                  class=\"form-control\"\n                  id=\"description\"\n                  rows=\"5\"></textarea>\n      </div>\n\n      <button class=\"btn btn-danger btn-block\"\n         (click)=\"deleteWebsite()\">Delete</button>\n\n    </form>\n\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteEditComponent = (function () {
    function WebsiteEditComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
        });
        this._websiteService.findWebsiteById(this.websiteId)
            .subscribe(function (website) {
            _this.website = website;
            _this.name = _this.website['name'];
            _this.developerId = _this.website['developerId'];
            _this.description = _this.website['description'];
        });
        this._websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (website) {
            _this.websites = website;
        });
        // this.websites = this._websiteService.findWebsitesByUser(this.userId);
        // this.website = this._websiteService.findWebsiteById(this.websiteId);
    };
    WebsiteEditComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WebsiteEditComponent.prototype.websiteNew = function () {
        this.router.navigate(['user/', this.userId, 'website', 'new']);
    };
    WebsiteEditComponent.prototype.page = function (website) {
        this.router.navigate(['user/', this.userId, 'website', website._id, 'page']);
    };
    WebsiteEditComponent.prototype.websiteEdit = function (website) {
        this.router.navigate(['user/', this.userId, 'website', website._id]);
    };
    WebsiteEditComponent.prototype.websiteList = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    WebsiteEditComponent.prototype.edit = function () {
        var _this = this;
        this._websiteService.updateWebsite(this.websiteId, { '_id': this.websiteId, 'name': this.name,
            'developerId': this.developerId, 'description': this.description })
            .subscribe(function (website) {
            _this.website = website;
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId]);
        });
    };
    WebsiteEditComponent.prototype.deleteWebsite = function () {
        var _this = this;
        this._websiteService.deleteWebsite(this.websiteId).subscribe(function () {
            _this.router.navigate(['user/', _this.userId, 'website']);
        });
    };
    return WebsiteEditComponent;
}());
WebsiteEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-edit',
        template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteEditComponent);

var _a, _b, _c;
//# sourceMappingURL=website-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n    <!--back button-->\n    <p class=\"navbar-text pull-left\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      </a>\n    </p>\n\n    <!--heading on the nav bar-->\n    <p class=\"navbar-header pull-left\">\n      <a class=\"navbar-brand thick\">\n        <b>Websites</b>\n      </a>\n    </p>\n\n    <!--plus sign-->\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"websiteNew()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-plus\"></span>\n      </a>\n    </p>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group\">\n\n    <li *ngFor=\"let website of websites\" class=\"list-group-item\">\n      <a (click)=\"page(website)\">\n        <b>{{website.name}}</b>\n      </a>\n      <a (click)=\"websiteEdit(website)\" >\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n    </li>\n\n  </ul>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = (function () {
    function WebsiteListComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this._websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (websites) {
            _this.websites = websites;
        });
    };
    WebsiteListComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WebsiteListComponent.prototype.websiteNew = function () {
        this.router.navigate(['user/', this.userId, 'website', 'new']);
    };
    WebsiteListComponent.prototype.page = function (website) {
        this.router.navigate(['user/', this.userId, 'website', website._id, 'page']);
    };
    WebsiteListComponent.prototype.websiteEdit = function (website) {
        this.router.navigate(['user/', this.userId, 'website', website._id]);
    };
    return WebsiteListComponent;
}());
WebsiteListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-list',
        template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WebsiteListComponent);

var _a, _b, _c;
//# sourceMappingURL=website-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"websiteList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Websites</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"websiteNew()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>New Website</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a class=\"navbar-link\" (click) = \"createNewWebsite()\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <ul class=\"list-group\">\n\n      <li *ngFor=\"let website of websites\" class=\"list-group-item\">\n        <a (click)=\"page(website)\">\n          <b>{{website.name}}</b>\n        </a>\n        <a (click)=\"websiteEdit(website)\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n\n    <form #f=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"website-name\"\n               name=\"name\"\n               ngModel\n               required\n               #name=\"ngModel\" >\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"description\">Website Description</label>\n        <textarea class=\"form-control\"\n                  id=\"description\"\n                  name=\"description\"\n                  rows=\"5\"\n                  ngModel\n                  required\n                  #description=\"ngModel\" ></textarea>\n      </div>\n\n      <button class=\"btn btn-danger btn-block\"\n         (click)=\"websiteList()\">Cancel</button>\n\n    </form>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = (function () {
    function WebsiteNewComponent(_websiteService, activatedRoute, router) {
        this._websiteService = _websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websites = [];
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorFlag = false;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
        });
        this._websiteService.findWebsitesByUser(this.userId)
            .subscribe(function (website) {
            _this.websites = website;
        });
    };
    WebsiteNewComponent.prototype.createNewWebsite = function () {
        var _this = this;
        this.name = this.newWebsiteForm.value.name;
        this.description = this.newWebsiteForm.value.description;
        this._websiteService.createWebsite(this.userId, { 'name': this.name, 'description': this.description })
            .subscribe(function (website) {
            _this.errorFlag = false;
            _this.router.navigate(['user/', _this.userId, 'website', website._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    WebsiteNewComponent.prototype.websiteNew = function () {
        this.router.navigate(['user/', this.userId, 'website', 'new']);
    };
    WebsiteNewComponent.prototype.websiteList = function () {
        this.router.navigate(['user/', this.userId, 'website']);
    };
    WebsiteNewComponent.prototype.websiteEdit = function (website) {
        this.router.navigate(['user/', this.userId, 'website', website._id]);
    };
    WebsiteNewComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WebsiteNewComponent.prototype.page = function (website) {
        this.router.navigate(['user/', this.userId, 'website', website._id, 'page']);
    };
    return WebsiteNewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */]) === "function" && _a || Object)
], WebsiteNewComponent.prototype, "newWebsiteForm", void 0);
WebsiteNewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-website-new',
        template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object])
], WebsiteNewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=website-new.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"pageList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetChooser()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Choose Widget</b>\n        </a>\n      </p>\n\n      <!--cancel sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <div *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <h1 *ngIf=\"widget.size==1\">{{widget.text}}</h1>\n            <h2 *ngIf=\"widget.size==2\">{{widget.text}}</h2>\n            <h3 *ngIf=\"widget.size==3\">{{widget.text}}</h3>\n            <h4 *ngIf=\"widget.size==4\">{{widget.text}}</h4>\n            <h5 *ngIf=\"widget.size==5\">{{widget.text}}</h5>\n            <h6 *ngIf=\"widget.size==6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <img [style.width]=\"widget.width\" [src]=\"widget.url | safe\">\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div class=\"yt-container\">\n              <iframe [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <ul class=\"list-group\">\n\n      <li class=\"list-group-item\">\n        <a (click)=\"widgetNewHeader()\">\n          <b>Header</b>\n        </a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a (click)=\"widgetNewImage()\">\n          <b>Image</b>\n        </a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a (click)=\"widgetNewYouTube()\">\n          <b>YouTube</b>\n        </a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a (click)=\"widgetNewHtml()\">\n          <b>Html</b>\n        </a>\n      </li>\n\n      <li class=\"list-group-item\">\n        <a (click)=\"widgetNewText()\">\n          <b>Text</b>\n        </a>\n      </li>\n\n    </ul>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = (function () {
    function WidgetChooserComponent(_widgetService, activatedRoute, router) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgets = [];
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetChooserComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetChooserComponent.prototype.widgetChooser = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetChooserComponent.prototype.widgetList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetChooserComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetChooserComponent.prototype.widgetNewHeader = function () {
        var _this = this;
        this._widgetService.createWidget(this.pageId, {})
            .subscribe(function (widget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget',
                widget._id, 'header']);
        });
    };
    WidgetChooserComponent.prototype.widgetEdit = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id]);
    };
    WidgetChooserComponent.prototype.widgetNewYouTube = function () {
        var _this = this;
        this._widgetService.createWidget(this.pageId, {})
            .subscribe(function (widget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget',
                widget._id, 'youtube']);
        });
    };
    WidgetChooserComponent.prototype.widgetNewImage = function () {
        var _this = this;
        this._widgetService.createWidget(this.pageId, {})
            .subscribe(function (widget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget',
                widget._id, 'image']);
        });
    };
    WidgetChooserComponent.prototype.widgetNewHtml = function () {
        var _this = this;
        this._widgetService.createWidget(this.pageId, {})
            .subscribe(function (widget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget',
                widget._id, 'html']);
        });
    };
    WidgetChooserComponent.prototype.widgetNewText = function () {
        var _this = this;
        this._widgetService.createWidget(this.pageId, {})
            .subscribe(function (widget) {
            _this.router.navigate(['user/', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget',
                widget._id, 'text']);
        });
    };
    return WidgetChooserComponent;
}());
WidgetChooserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-chooser',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetChooserComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-chooser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/safe-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe-pipe.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase=\"'HEADING'\">\n    <app-widget-header></app-widget-header>\n  </div>\n\n  <div *ngSwitchCase=\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase=\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = (function () {
    function WidgetEditComponent(_widgetService, activatedRoute, router) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgets = [];
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this._widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
        });
    };
    return WidgetEditComponent;
}());
WidgetEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-edit',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetEditComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"pageList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetChooser()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"editWidget()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n      <!--remove sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <div *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <h1 *ngIf=\"widget.size==1\">{{widget.text}}</h1>\n            <h2 *ngIf=\"widget.size==2\">{{widget.text}}</h2>\n            <h3 *ngIf=\"widget.size==3\">{{widget.text}}</h3>\n            <h4 *ngIf=\"widget.size==4\">{{widget.text}}</h4>\n            <h5 *ngIf=\"widget.size==5\">{{widget.text}}</h5>\n            <h6 *ngIf=\"widget.size==6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <img [style.width]=\"widget.width\" [src]=\"widget.url | safe\">\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div class=\"yt-container\">\n              <iframe [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"widget-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-name\" name=\"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-text\">Text</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-text\" name=\"text\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-size\">Size</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-size\" name=\"size\">\n      </div>\n    </form>\n\n    <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHeaderComponent = (function () {
    function WidgetHeaderComponent(_widgetService, activatedRoute, router) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgets = [];
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this._widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.size = _this.widget.size;
            _this.text = _this.widget.text;
        });
    };
    WidgetHeaderComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetHeaderComponent.prototype.widgetChooser = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetHeaderComponent.prototype.widgetList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHeaderComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetHeaderComponent.prototype.widgetEdit = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id]);
    };
    WidgetHeaderComponent.prototype.deleteWidget = function () {
        var _this = this;
        this._widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.widgetList();
        });
    };
    WidgetHeaderComponent.prototype.editWidget = function () {
        var _this = this;
        this._widgetService.updateWidget(this.widgetId, { '_id': this.widget.id, 'widgetType': this.widget.widgetType,
            'pageId': this.widget.pageId, 'size': this.widget.size, 'text': this.widget.text })
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetList();
        });
    };
    return WidgetHeaderComponent;
}());
WidgetHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-header',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"pageList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetChooser()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"editWidget()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n      <!--remove sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <div *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <h1 *ngIf=\"widget.size==1\">{{widget.text}}</h1>\n            <h2 *ngIf=\"widget.size==2\">{{widget.text}}</h2>\n            <h3 *ngIf=\"widget.size==3\">{{widget.text}}</h3>\n            <h4 *ngIf=\"widget.size==4\">{{widget.text}}</h4>\n            <h5 *ngIf=\"widget.size==5\">{{widget.text}}</h5>\n            <h6 *ngIf=\"widget.size==6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <img [style.width]=\"widget.width\" [src]=\"widget.url | safe\">\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div class=\"yt-container\">\n              <iframe [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <label for=\"Text\">Text</label>\n    <input [(ngModel)]=\"widget.text\"\n           type=\"text\"\n           id=\"Text\"\n           name=\"text\"\n           class=\"form-control\"/>\n\n    <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetHtmlComponent = (function () {
    function WidgetHtmlComponent(_widgetService, activatedRoute, router) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgets = [];
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this._widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.text = _this.widget.text;
        });
    };
    WidgetHtmlComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetHtmlComponent.prototype.widgetChooser = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetHtmlComponent.prototype.widgetList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetHtmlComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetHtmlComponent.prototype.widgetEdit = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id]);
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        this._widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.widgetList();
        });
    };
    WidgetHtmlComponent.prototype.editWidget = function () {
        var _this = this;
        this._widgetService.updateWidget(this.widgetId, { '_id': this.widget.id, 'widgetType': this.widget.widgetType,
            'pageId': this.widget.pageId, 'text': this.widget.text })
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetList();
        });
    };
    return WidgetHtmlComponent;
}());
WidgetHtmlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-html',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetHtmlComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-html.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"pageList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetChooser()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"editWidget()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n      <!--remove sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <div *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <h1 *ngIf=\"widget.size==1\">{{widget.text}}</h1>\n            <h2 *ngIf=\"widget.size==2\">{{widget.text}}</h2>\n            <h3 *ngIf=\"widget.size==3\">{{widget.text}}</h3>\n            <h4 *ngIf=\"widget.size==4\">{{widget.text}}</h4>\n            <h5 *ngIf=\"widget.size==5\">{{widget.text}}</h5>\n            <h6 *ngIf=\"widget.size==6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <img [style.width]=\"widget.width\" [src]=\"widget.url | safe\">\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div class=\"yt-container\">\n              <iframe [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <form>\n      <div class=\"form-group\">\n        <label for=\"widget-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-name\" name=\"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-text\">Text</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-text\" name=\"text\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-url\">URL</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-url\" name=\"url\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-width\">Width</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-width\" name=\"width\">\n      </div>\n\n      <form ngForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n        <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n        <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n        <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n        <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n        <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n        <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n        <br/>\n      </form>\n\n\n      <!--<div class=\"form-group\">-->\n        <!--<label for=\"widget-upload\">Upload</label>-->\n        <!--<input type=\"file\" class=\"form-control\" id=\"widget-upload\" name=\"upload\">-->\n      <!--</div>-->\n\n      <!--<button class=\"btn btn-primary btn-block\"-->\n         <!--href=\"#\">Upload Image</button>-->\n\n      <button class=\"btn btn-danger btn-block\"\n         (click)=\"deleteWidget()\">Delete</button>\n    </form>\n\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetImageComponent = (function () {
    function WidgetImageComponent(_widgetService, activatedRoute, router) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.widgets = [];
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this._widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.width = _this.widget.width;
            _this.url = _this.widget.url;
        });
    };
    WidgetImageComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetImageComponent.prototype.widgetChooser = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetImageComponent.prototype.widgetList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetImageComponent.prototype.widgetEdit = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id]);
    };
    WidgetImageComponent.prototype.deleteWidget = function () {
        var _this = this;
        this._widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.widgetList();
        });
    };
    WidgetImageComponent.prototype.editWidget = function () {
        var _this = this;
        this._widgetService.updateWidget(this.widgetId, { '_id': this.widget._id,
            'widgetType': this.widget.widgetType,
            'pageId': this.widget.pageId,
            'width': this.widget.width,
            'url': this.widget.url })
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetList();
        });
    };
    return WidgetImageComponent;
}());
WidgetImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-image',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetImageComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"pageList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetChooser()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"editWidget()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n      <!--remove sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <div *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <h1 *ngIf=\"widget.size==1\">{{widget.text}}</h1>\n            <h2 *ngIf=\"widget.size==2\">{{widget.text}}</h2>\n            <h3 *ngIf=\"widget.size==3\">{{widget.text}}</h3>\n            <h4 *ngIf=\"widget.size==4\">{{widget.text}}</h4>\n            <h5 *ngIf=\"widget.size==5\">{{widget.text}}</h5>\n            <h6 *ngIf=\"widget.size==6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <img [style.width]=\"widget.width\" [src]=\"widget.url | safe\">\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div class=\"yt-container\">\n              <iframe [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n\n    <label for=\"Text\">Text</label>\n    <input [(ngModel)]=\"widget.text\"\n           type=\"text\"\n           id=\"Text\"\n           name=\"text\"\n           class=\"form-control\"/>\n\n    <label for=\"Rows\">Rows</label>\n    <input [(ngModel)]=\"widget.rows\"\n           id=\"Rows\"\n           name=\"rows\"\n           class=\"form-control\"\n           type=\"number\"/>\n\n    <label for=\"Name\">Name</label>\n    <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"name\"\n             placeholder=\"Name\">\n\n    <label for=\"Placeholder\">Placeholder</label>\n    <input [(ngModel)]=\"widget.placeholder\"\n           id=\"Placeholder\"\n           type=\"text\"\n           name=\"placeholder\"\n           class=\"form-control\"\n           required/>\n\n    <p></p>\n\n    <div class=\"input-group\">\n      <label for=\"Formatted\">Formatted</label>\n      <input type=\"text\"\n             readonly\n             id=\"Formatted\"\n             value=\"Formatted\"\n             class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n        <label for=\"Formatted1\"></label>\n        <input [(ngModel)]=\"widget.formatted\" id=\"Formatted1\" type=\"checkbox\"/>\n      </span>\n    </div>\n\n    <button class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</button>\n\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetTextComponent = (function () {
    function WidgetTextComponent(_widgetService, activatedRoute, router) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgets = [];
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this._widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.text = _this.widget.text;
            _this.name = _this.widget.name;
            _this.rows = _this.widget.rows;
            _this.formatted = _this.widget.formatted;
            _this.placeholder = _this.widget.placeholder;
        });
    };
    WidgetTextComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetTextComponent.prototype.widgetChooser = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetTextComponent.prototype.widgetList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetTextComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetTextComponent.prototype.widgetEdit = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id]);
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        this._widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.widgetList();
        });
    };
    WidgetTextComponent.prototype.editWidget = function () {
        var _this = this;
        this._widgetService.updateWidget(this.widgetId, { '_id': this.widget.id, 'widgetType': this.widget.widgetType,
            'pageId': this.widget.pageId, 'text': this.widget.text, 'rows': this.widget.rows, 'name': this.widget.name,
            'formatted': this.widget.formatted, 'placeholder': this.widget.placeholder })
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetList();
        });
    };
    return WidgetTextComponent;
}());
WidgetTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-text',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetTextComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <div class=\"row\">\n\n    <div class=\"col-sm-4 hidden-xs\">\n\n      <!--back button-->\n      <p class=\"navbar-text pull-left\">\n        <a (click)=\"pageList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widgets</b>\n        </a>\n      </p>\n\n      <!--plus sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetChooser()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </p>\n\n\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <!--heading on the nav bar-->\n      <p class=\"navbar-header pull-left\">\n        <a class=\"navbar-brand thick\">\n          <b>Widget Edit</b>\n        </a>\n      </p>\n\n      <!--ok sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"editWidget()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </p>\n\n      <!--remove sign-->\n      <p class=\"navbar-text pull-right\">\n        <a (click)=\"widgetList()\" class=\"navbar-link\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </a>\n      </p>\n\n    </div>\n\n  </div>\n\n</nav>\n\n<div class=\"row\">\n\n  <div class=\"col-sm-4 hidden-xs\">\n    <div *ngFor=\"let widget of widgets\">\n      <div [ngSwitch]=\"widget.widgetType\">\n\n        <div *ngSwitchCase=\"'HEADING'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <h1 *ngIf=\"widget.size==1\">{{widget.text}}</h1>\n            <h2 *ngIf=\"widget.size==2\">{{widget.text}}</h2>\n            <h3 *ngIf=\"widget.size==3\">{{widget.text}}</h3>\n            <h4 *ngIf=\"widget.size==4\">{{widget.text}}</h4>\n            <h5 *ngIf=\"widget.size==5\">{{widget.text}}</h5>\n            <h6 *ngIf=\"widget.size==6\">{{widget.text}}</h6>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'IMAGE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <img [style.width]=\"widget.width\" [src]=\"widget.url | safe\">\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'YOUTUBE'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div class=\"yt-container\">\n              <iframe [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'TEXT'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <div *ngIf=\"widget.formatted\">\n              <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n            </div>\n            <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                   placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n            <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                      rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                      class=\"form-control\">{{widget.text}}</textarea>\n          </div>\n        </div>\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div class=\"widget-element\">\n            <div class=\"widget-configuration\">\n              <a (click)=\"widgetEdit(widget)\">\n                <span class=\"glyphicon glyphicon-cog\"></span>\n              </a>\n              <span class=\"glyphicon glyphicon-align-justify\"></span>\n            </div>\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-8\">\n    <form>\n\n      <div class=\"form-group\">\n        <label for=\"widget-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-name\" name=\"name\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-text\">Text</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-text\" name=\"text\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-url\">URL</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-url\" name=\"url\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"widget-width\">Width</label>\n        <input type=\"text\" class=\"form-control\" id=\"widget-width\" name=\"width\">\n      </div>\n\n      <button class=\"btn btn-danger btn-block\"\n              (click)=\"deleteWidget()\">Delete</button>\n\n    </form>\n  </div>\n\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = (function () {
    function WidgetYoutubeComponent(_widgetService, activatedRoute, router, sanitizer) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sanitizer = sanitizer;
        this.widgets = [];
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
        this._widgetService.findWidgetById(this.widgetId)
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.width = _this.widget.width;
            _this.url = _this.widget.url;
        });
    };
    WidgetYoutubeComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetYoutubeComponent.prototype.widgetChooser = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId,
            'widget', 'new']);
    };
    WidgetYoutubeComponent.prototype.widgetList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetYoutubeComponent.prototype.widgetEdit = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id]);
    };
    WidgetYoutubeComponent.prototype.deleteWidget = function () {
        var _this = this;
        this._widgetService.deleteWidget(this.widgetId).subscribe(function () {
            _this.widgetList();
        });
    };
    WidgetYoutubeComponent.prototype.editWidget = function () {
        var _this = this;
        this._widgetService.updateWidget(this.widgetId, { '_id': this.widget._id,
            'widgetType': this.widget.widgetType,
            'pageId': this.widget.pageId,
            'width': this.widget.width,
            'url': this.widget.url })
            .subscribe(function (widget) {
            _this.widget = widget;
            _this.widgetList();
        });
    };
    return WidgetYoutubeComponent;
}());
WidgetYoutubeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-youtube',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _d || Object])
], WidgetYoutubeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=widget-youtube.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n\n  <!--back button-->\n  <p class=\"navbar-text pull-left\">\n    <a (click)=\"pageList()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n    </a>\n  </p>\n\n  <!--heading on the nav bar-->\n  <p class=\"navbar-header pull-left\">\n    <a class=\"navbar-brand thick\">\n      <b>Widgets</b>\n    </a>\n  </p>\n\n  <!--plus sign-->\n  <p class=\"navbar-text pull-right\">\n    <a (click)=\"widgetChooser()\" class=\"navbar-link\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </p>\n\n</nav>\n\n<div class=\"container\">\n  <div *ngFor=\"let widget of widgets\">\n\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase=\"'HEADING'\">\n        <div class=\"widget-element\">\n          <div class=\"widget-configuration\">\n            <a (click)=\"widgetEditHeader(widget)\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n          <h1 *ngIf=\"widget.size==1\">{{widget.text}}</h1>\n          <h2 *ngIf=\"widget.size==2\">{{widget.text}}</h2>\n          <h3 *ngIf=\"widget.size==3\">{{widget.text}}</h3>\n          <h4 *ngIf=\"widget.size==4\">{{widget.text}}</h4>\n          <h5 *ngIf=\"widget.size==5\">{{widget.text}}</h5>\n          <h6 *ngIf=\"widget.size==6\">{{widget.text}}</h6>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'IMAGE'\">\n        <div class=\"widget-element\">\n          <div class=\"widget-configuration\">\n            <a (click)=\"widgetEditImage(widget)\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n          <img [style.width]=\"widget.width\" [src]=\"widget.url | safe\">\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'YOUTUBE'\">\n        <div class=\"widget-element\">\n          <div class=\"widget-configuration\">\n            <a (click)=\"widgetEditYouTube(widget)\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n          <div class=\"yt-container\">\n            <iframe [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n          </div>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'TEXT'\">\n        <div class=\"widget-element\">\n          <div class=\"widget-configuration\">\n            <a (click)=\"widgetEditText(widget)\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n          <div *ngIf=\"widget.formatted\">\n            <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n          </div>\n          <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n                 placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n          <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                    rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                    class=\"form-control\">{{widget.text}}</textarea>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <div class=\"widget-element\">\n          <div class=\"widget-configuration\">\n            <a (click)=\"widgetEditHtml(widget)\">\n              <span class=\"glyphicon glyphicon-cog\"></span>\n            </a>\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </div>\n          <quill-editor [(ngModel)]=\"widget.text\"></quill-editor>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- Footer -->\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a (click)=\"profile()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = (function () {
    function WidgetListComponent(_widgetService, activatedRoute, router) {
        this._widgetService = _widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
        });
        this._widgetService.findWidgetsByPageId(this.pageId)
            .subscribe(function (widgets) {
            _this.widgets = widgets;
        });
    };
    WidgetListComponent.prototype.profile = function () {
        this.router.navigate(['user/', this.userId]);
    };
    WidgetListComponent.prototype.widgetChooser = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new']);
    };
    WidgetListComponent.prototype.pageList = function () {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page']);
    };
    WidgetListComponent.prototype.widgetEditHeader = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id, 'header']);
    };
    WidgetListComponent.prototype.widgetEditYouTube = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id, 'youtube']);
    };
    WidgetListComponent.prototype.widgetEditImage = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id, 'image']);
    };
    WidgetListComponent.prototype.widgetEditHtml = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id, 'html']);
    };
    WidgetListComponent.prototype.widgetEditText = function (widget) {
        this.router.navigate(['user/', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget',
            widget._id, 'text']);
    };
    return WidgetListComponent;
}());
WidgetListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-widget-list',
        template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WidgetListComponent);

var _a, _b, _c;
//# sourceMappingURL=widget-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-test/search-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-test/search-test.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Search API Test</h1>\n\n<label>Search Image</label>\n<input [(ngModel)]=\"image\"\n       placeholder=\"enter image\"\n       class=\"form-control\" />\n<button (click)=\"searchImage(image)\"\n        class=\"btn btn-primary btn-block\">\n  Search\n</button>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let photo of result.photos.photo\">\n    {{photo.id}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/search-test/search-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service_client__ = __webpack_require__("../../../../../src/app/services/search.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchTestComponent = (function () {
    function SearchTestComponent(searchService) {
        this.searchService = searchService;
    }
    SearchTestComponent.prototype.searchImage = function (image) {
        var _this = this;
        this.searchService.searchImage(image)
            .subscribe(function (result) {
            console.log(result);
            _this.result = result;
        });
    };
    SearchTestComponent.prototype.ngOnInit = function () {
    };
    return SearchTestComponent;
}());
SearchTestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-test',
        template: __webpack_require__("../../../../../src/app/search-test/search-test.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-test/search-test.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_service_client__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_search_service_client__["a" /* SearchService */]) === "function" && _a || Object])
], SearchTestComponent);

var _a;
//# sourceMappingURL=search-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = (function () {
    function PageService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // api = {
    //   'createPage'   : this.createPage,
    //   'findPageByWebsiteId' : this.findPagesByWebsiteId,
    //   'findPageById' : this.findPageById,
    //   'updatePage' : this.updatePage,
    //   'deletePage' : this.deletePage
    // };
    PageService.prototype.createPage = function (websiteId, page) {
        return this._http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/website/' + websiteId + '/page')
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this._http.put(this.baseUrl + '/api/page/' + pageId, page)
            .map(function (res) {
            return res.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this._http.delete(this.baseUrl + '/api/page/' + pageId)
            .map(function (res) {
            return;
        });
    };
    return PageService;
}());
PageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PageService);

var _a;
//# sourceMappingURL=page.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.searchImage = function (image) {
        var url = 'https://api.flickr.com/' +
            'services/rest/?method=flickr.photos.search&api_key=580fd707dfe6fa84a049479f797769de&text='
            + image + '&format=json&nojsoncallback=1';
        return this.http.get(url)
            .map(function (response) {
            return response.json();
        });
    };
    return SearchService;
}());
SearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SearchService);

var _a;
//# sourceMappingURL=search.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/test.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TestService = (function () {
    function TestService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    TestService.prototype.findAllMessages = function () {
        console.log(this.baseUrl);
        return this._http.get(this.baseUrl + '/api/test')
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.createMessage = function (message) {
        var obj = {
            message: message
        };
        return this._http.post(this.baseUrl + '/api/test', obj)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    TestService.prototype.deleteMessage = function (messageId) {
        return this._http.delete(this.baseUrl + '/api/test/' + messageId)
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    return TestService;
}());
TestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], TestService);

var _a;
//# sourceMappingURL=test.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // api = {
    //   'createUser'   : this.createUser,
    //   'findUserById' : this.findUserById,
    //   'findUserByCredentials' : this.findUserByCredentials,
    //   'findUserByUsername' : this.findUserByUsername,
    //   'updateUser' : this.updateUser,
    //   'deleteUser' : this.deleteUser
    // };
    UserService.prototype.createUser = function (user) {
        return this._http.post(this.baseUrl + '/api/user', user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        return this._http.get(this.baseUrl + '/api/user/?username=' + username + '&password=' + password)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this._http.get(this.baseUrl + '/api/user/?username=' + username)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this._http.put(this.baseUrl + '/api/user/' + userId, user)
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        this._http.delete(this.baseUrl + '/api/user/' + userId);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = (function () {
    function WebsiteService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // api = {
    //   'createWebsite'   : this.createWebsite,
    //   'findWebsitesByUser' : this.findWebsitesByUser,
    //   'findWebsiteById' : this.findWebsiteById,
    //   'updateWebsite' : this.updateWebsite,
    //   'deleteWebsite' : this.deleteWebsite
    // };
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this._http.post(this.baseUrl + '/api/user/' + userId + '/website', website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this._http.get(this.baseUrl + '/api/user/' + userId + '/website')
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this._http.get(this.baseUrl + '/api/user/website/' + websiteId)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this._http.put(this.baseUrl + '/api/user/website/' + websiteId, website)
            .map(function (res) {
            return res.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this._http.delete(this.baseUrl + '/api/user/website/' + websiteId)
            .map(function (res) {
            return;
        });
    };
    return WebsiteService;
}());
WebsiteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WebsiteService);

var _a;
//# sourceMappingURL=website.service.client.js.map

/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = (function () {
    function WidgetService(_http) {
        this._http = _http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // api = {
    //   'createWidget'   : this.createWidget,
    //   'findWidgetsByPageId' : this.findWidgetsByPageId,
    //   'findWidgetById' : this.findWidgetById,
    //   'updateWidget' : this.updateWidget,
    //   'deleteWidget' : this.deleteWidget
    // };
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this._http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this._http.get(this.baseUrl + '/api/page/' + pageId + '/widget')
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this._http.get(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this._http.put(this.baseUrl + '/api/widget/' + widgetId, widget)
            .map(function (res) {
            return res.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this._http.delete(this.baseUrl + '/api/widget/' + widgetId)
            .map(function (res) {
            return;
        });
    };
    return WidgetService;
}());
WidgetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], WidgetService);

var _a;
//# sourceMappingURL=widget.service.client.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    baseUrl: ''
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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map