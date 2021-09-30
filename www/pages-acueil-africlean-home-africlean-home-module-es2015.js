(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acueil-africlean-home-africlean-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acueil/africlean-home/africlean-home.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acueil/africlean-home/africlean-home.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 py-5\">\r\n        <app-africlean-slide></app-africlean-slide>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/acueil/africlean-home/africlean-home.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/acueil/africlean-home/africlean-home.module.ts ***!
  \**********************************************************************/
/*! exports provided: AfricleanHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfricleanHomePageModule", function() { return AfricleanHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _africlean_home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./africlean-home.page */ "./src/app/pages/acueil/africlean-home/africlean-home.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _africlean_home_page__WEBPACK_IMPORTED_MODULE_5__["AfricleanHomePage"]
    }
];
let AfricleanHomePageModule = class AfricleanHomePageModule {
};
AfricleanHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_africlean_home_page__WEBPACK_IMPORTED_MODULE_5__["AfricleanHomePage"]]
    })
], AfricleanHomePageModule);



/***/ }),

/***/ "./src/app/pages/acueil/africlean-home/africlean-home.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/acueil/africlean-home/africlean-home.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdWVpbC9hZnJpY2xlYW4taG9tZS9hZnJpY2xlYW4taG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/acueil/africlean-home/africlean-home.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/acueil/africlean-home/africlean-home.page.ts ***!
  \********************************************************************/
/*! exports provided: AfricleanHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfricleanHomePage", function() { return AfricleanHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AfricleanHomePage = class AfricleanHomePage {
    constructor() { }
    ngOnInit() {
    }
};
AfricleanHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-africlean-home',
        template: __webpack_require__(/*! raw-loader!./africlean-home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acueil/africlean-home/africlean-home.page.html"),
        styles: [__webpack_require__(/*! ./africlean-home.page.scss */ "./src/app/pages/acueil/africlean-home/africlean-home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AfricleanHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-acueil-africlean-home-africlean-home-module-es2015.js.map