(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuration-configuration-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuration/configuration.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuration/configuration.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.CONFIGURATION_MANAGEMENT.TITLE' | translate }}\r\n    </div>\r\n      <div>\r\n          <app-africlean-configuration-manager>\r\n\r\n          </app-africlean-configuration-manager>\r\n      </div>\r\n\r\n   </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/configuration/configuration.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfigurationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPageModule", function() { return ConfigurationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration.page */ "./src/app/pages/configuration/configuration.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _configuration_page__WEBPACK_IMPORTED_MODULE_5__["ConfigurationPage"]
    }
];
var ConfigurationPageModule = /** @class */ (function () {
    function ConfigurationPageModule() {
    }
    ConfigurationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
            ],
            declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_5__["ConfigurationPage"]]
        })
    ], ConfigurationPageModule);
    return ConfigurationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuration/configuration.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/configuration/configuration.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 1rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-configuration);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhdGlvbi9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGNvbmZpZ3VyYXRpb25cXGNvbmZpZ3VyYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsZ0JBQUE7QUNGSjtBRElJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgLmNvbnRlbnQtcGFnZXtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG5cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb25maWd1cmF0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogMTR2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbmZpZ3VyYXRpb24pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/configuration/configuration.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/configuration/configuration.page.ts ***!
  \***********************************************************/
/*! exports provided: ConfigurationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPage", function() { return ConfigurationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigurationPage = /** @class */ (function () {
    function ConfigurationPage() {
    }
    ConfigurationPage.prototype.ngOnInit = function () {
    };
    ConfigurationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! raw-loader!./configuration.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuration/configuration.page.html"),
            styles: [__webpack_require__(/*! ./configuration.page.scss */ "./src/app/pages/configuration/configuration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigurationPage);
    return ConfigurationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-configuration-configuration-module-es5.js.map