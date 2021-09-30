(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manager-logistic-management-logistic-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manager/logistic-management/logistic-management.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manager/logistic-management/logistic-management.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.LOGISTIC_MANAGEMENT.TITLE' | translate }}\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/logistic-management/logistic-management.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manager/logistic-management/logistic-management.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LogisticManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticManagementPageModule", function() { return LogisticManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _logistic_management_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logistic-management.page */ "./src/app/pages/manager/logistic-management/logistic-management.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _logistic_management_page__WEBPACK_IMPORTED_MODULE_5__["LogisticManagementPage"]
    }
];
var LogisticManagementPageModule = /** @class */ (function () {
    function LogisticManagementPageModule() {
    }
    LogisticManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_logistic_management_page__WEBPACK_IMPORTED_MODULE_5__["LogisticManagementPage"]]
        })
    ], LogisticManagementPageModule);
    return LogisticManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manager/logistic-management/logistic-management.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manager/logistic-management/logistic-management.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-logistic-management);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9sb2dpc3RpYy1tYW5hZ2VtZW50L0M6XFxVc2Vyc1xcdG1kaWFsbG9cXERvY3VtZW50c1xcRG9jdW1lbnRzIHBlcnNvXFxtYXVyaUNsZWFuLWZyb250XFxtYXVyaUNsZWFuLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbWFuYWdlclxcbG9naXN0aWMtbWFuYWdlbWVudFxcbG9naXN0aWMtbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvbG9naXN0aWMtbWFuYWdlbWVudC9sb2dpc3RpYy1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUVFLGdCQUFBO0FDRko7QURJSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQ0FBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFuYWdlci9sb2dpc3RpYy1tYW5hZ2VtZW50L2xvZ2lzdGljLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgLmNvbnRlbnQtcGFnZXtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG5cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dpc3RpYy1tYW5hZ2VtZW50KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1sb2dpc3RpYy1tYW5hZ2VtZW50KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manager/logistic-management/logistic-management.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/manager/logistic-management/logistic-management.page.ts ***!
  \*******************************************************************************/
/*! exports provided: LogisticManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticManagementPage", function() { return LogisticManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogisticManagementPage = /** @class */ (function () {
    function LogisticManagementPage() {
    }
    LogisticManagementPage.prototype.ngOnInit = function () {
    };
    LogisticManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logistic-management',
            template: __webpack_require__(/*! raw-loader!./logistic-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manager/logistic-management/logistic-management.page.html"),
            styles: [__webpack_require__(/*! ./logistic-management.page.scss */ "./src/app/pages/manager/logistic-management/logistic-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogisticManagementPage);
    return LogisticManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manager-logistic-management-logistic-management-module-es5.js.map