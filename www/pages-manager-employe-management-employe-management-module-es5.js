(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manager-employe-management-employe-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manager/employe-management/employe-management.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manager/employe-management/employe-management.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.EMPLOYES_MANAGEMENT.TITLE' | translate }}\r\n    </div>\r\n\r\n    <!-- Afficher la liste des employes -->\r\n    <div>\r\n      <app-africlean-employe-manager\r\n              [employes]=\"employesTmp\"\r\n              [employesTmp]=\"employesTmp\"\r\n              [nbrEmployesPerPage]=\"nbrEmployesPerPage\"\r\n              [currentPage]=\"currentPage\"\r\n              (position)=\"sendPosition($event)\"></app-africlean-employe-manager>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/employe-management/employe-management.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/manager/employe-management/employe-management.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeManagementPageModule", function() { return EmployeManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employe_management_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employe-management.page */ "./src/app/pages/manager/employe-management/employe-management.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");









var routes = [
    {
        path: '',
        component: _employe_management_page__WEBPACK_IMPORTED_MODULE_5__["EmployeManagementPage"]
    }
];
var EmployeManagementPageModule = /** @class */ (function () {
    function EmployeManagementPageModule() {
    }
    EmployeManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
            ],
            declarations: [_employe_management_page__WEBPACK_IMPORTED_MODULE_5__["EmployeManagementPage"]]
        })
    ], EmployeManagementPageModule);
    return EmployeManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manager/employe-management/employe-management.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/manager/employe-management/employe-management.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-employe-management);\n}\n.container .content-page .title {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-decoration: underline;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-right: auto;\n  margin-left: auto;\n  font-weight: bold;\n  color: var(--ion-color-employe-management);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9lbXBsb3llLW1hbmFnZW1lbnQvQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxEb2N1bWVudHMgcGVyc29cXG1hdXJpQ2xlYW4tZnJvbnRcXG1hdXJpQ2xlYW4tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxtYW5hZ2VyXFxlbXBsb3llLW1hbmFnZW1lbnRcXGVtcGxveWUtbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvZW1wbG95ZS1tYW5hZ2VtZW50L2VtcGxveWUtbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRSxnQkFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7QUNGTjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvZW1wbG95ZS1tYW5hZ2VtZW50L2VtcGxveWUtbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAuY29udGVudC1wYWdle1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcblxyXG4gICAgLmhlYWRlcntcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWVtcGxveWUtbWFuYWdlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZW1wbG95ZS1tYW5hZ2VtZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogMTR2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWVtcGxveWUtbWFuYWdlbWVudCk7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZW1wbG95ZS1tYW5hZ2VtZW50KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manager/employe-management/employe-management.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/manager/employe-management/employe-management.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeManagementPage", function() { return EmployeManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/africlean-config/africlean-config.provider */ "./src/providers/africlean-config/africlean-config.provider.ts");






var EmployeManagementPage = /** @class */ (function () {
    function EmployeManagementPage(userProvider, session, observableProvider, config) {
        this.userProvider = userProvider;
        this.session = session;
        this.observableProvider = observableProvider;
        this.config = config;
        /**
         * Liste des clients
         */
        this.employes = [];
        /**
         * numéro des pages
         */
        this.positions = [];
        /**
         * Position de la page courante
         */
        this.currentPage = 1;
        /**
         * Annonces temporaires
         */
        this.employesTmp = [];
        /**
         * La limite pour récuperer les données
         */
        this.limit = 14;
        /**
         * Données à ignorer
         */
        this.skip = 0;
        /**
         * Le nombre d'annonces par pages
         */
        this.nbrEmployesPerPage = 7;
    }
    EmployeManagementPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmplyeByFilter();
        this.isWeb = this.config.isWeb();
        this.observableProvider.loadClient.subscribe(function (load) {
            if (load) {
                _this.limit = 14;
                _this.skip = 0;
                _this.employes = [];
                _this.employesTmp = [];
                _this.positions = [];
                _this.getEmplyeByFilter();
            }
        });
    };
    /**
     * Recupere la position de la page courante et permet de savoir si c'est un suivant
     * donc il faut requeter de nouveau (multiple de 5) ou si c'est un precedent il ne faut
     * rien faire dans ce cas
     * @param position Position de la page
     */
    EmployeManagementPage.prototype.sendPosition = function (position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getEmplyeByFilter();
        }
    };
    EmployeManagementPage.prototype.getEmplyeByFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, _a, entity;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = {};
                        _a = this;
                        return [4 /*yield*/, this.session.getItem('user')];
                    case 1:
                        _a.user = _b.sent();
                        entity = (this.user) ? this.user.entity : null;
                        body = {
                            entity: entity
                        };
                        this.userProvider.save('user/employe/entity', body).subscribe(function (employes) {
                            if (!_this.employes && !_this.employesTmp) {
                                _this.employes = [];
                                _this.employesTmp = [];
                                _this.positions = [];
                            }
                            _this.employes = _this.employes.concat(employes.slice());
                            _this.employesTmp = _this.employesTmp.concat(employes.slice());
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeManagementPage.prototype.getEmplyes = function () {
        var _this = this;
        var url = 'user/employe/';
        this.userProvider.getAll(url).subscribe(function (employes) {
            if (!_this.employes && !_this.employesTmp) {
                _this.employes = [];
                _this.employesTmp = [];
                _this.positions = [];
            }
            _this.employes = _this.employes.concat(employes.slice());
            _this.employesTmp = _this.employesTmp.concat(employes.slice());
        });
    };
    EmployeManagementPage.ctorParameters = function () { return [
        { type: _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanHttpUserProvider"] },
        { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"] },
        { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"] },
        { type: _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanConfigProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EmployeManagementPage.prototype, "content", void 0);
    EmployeManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employe-management',
            template: __webpack_require__(/*! raw-loader!./employe-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manager/employe-management/employe-management.page.html"),
            styles: [__webpack_require__(/*! ./employe-management.page.scss */ "./src/app/pages/manager/employe-management/employe-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanHttpUserProvider"],
            _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"],
            _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"],
            _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanConfigProvider"]])
    ], EmployeManagementPage);
    return EmployeManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manager-employe-management-employe-management-module-es5.js.map