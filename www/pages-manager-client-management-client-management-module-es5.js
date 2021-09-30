(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manager-client-management-client-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manager/client-management/client-management.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manager/client-management/client-management.page.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\" #content>\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.CLIENTS_MANAGEMENT.TITLE' | translate }}\r\n    </div>\r\n\r\n    <!-- Afficher la liste des clients --> \r\n  <!--  <div class=\"clients-list\">-->\r\n\r\n      <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"particulier\">\r\n        <ion-segment-button value=\"particulier\">\r\n          <ion-label>\r\n            <ion-icon name=\"contacts\"></ion-icon>&nbsp;\r\n            <strong>Particulier</strong>\r\n          </ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"pro\">\r\n          <ion-label>\r\n            <ion-icon name=\"business\"></ion-icon>&nbsp;\r\n            <strong>Professionnel</strong>\r\n          </ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n      <div class=\"animate__animated animate__slideInUp animate__fast\"\r\n              *ngIf=\"customerType === 'particulier'\">\r\n        <app-africlean-client-manager [clients]=\"clientsTmp\"\r\n                                      [nbrClientsPerPage]=\"nbrClientsPerPage\"\r\n                                      [currentPage]=\"currentPage\"\r\n                                      [clientsTmp]=\"clientsTmp\"\r\n                                      [customerType]=\"getCustomerType()\"\r\n                                      (position)=\"sendPosition($event)\">\r\n\r\n        </app-africlean-client-manager>\r\n      </div>\r\n\r\n      <div class=\"animate__animated animate__slideInUp animate__fast\"\r\n              *ngIf=\"customerType === 'pro'\">\r\n        <app-africlean-client-manager [clients]=\"clientsTmp\"\r\n                                      [nbrClientsPerPage]=\"nbrClientsPerPage\"\r\n                                      [currentPage]=\"currentPage\"\r\n                                      [clientsTmp]=\"clientsTmp\"\r\n                                      [customerType]=\"getCustomerType()\"\r\n                                      (position)=\"sendPosition($event)\">\r\n\r\n        </app-africlean-client-manager>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n <!-- </div>-->\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/client-management/client-management.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/manager/client-management/client-management.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ClientManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientManagementPageModule", function() { return ClientManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _client_management_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-management.page */ "./src/app/pages/manager/client-management/client-management.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");










var routes = [
    {
        path: '',
        component: _client_management_page__WEBPACK_IMPORTED_MODULE_7__["ClientManagementPage"]
    }
];
var ClientManagementPageModule = /** @class */ (function () {
    function ClientManagementPageModule() {
    }
    ClientManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
            ],
            declarations: [_client_management_page__WEBPACK_IMPORTED_MODULE_7__["ClientManagementPage"]]
        })
    ], ClientManagementPageModule);
    return ClientManagementPageModule;
}());



/***/ }),

/***/ "./src/app/pages/manager/client-management/client-management.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/manager/client-management/client-management.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 0.5rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-client-management);\n}\n.container .content-page .title {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-decoration: underline;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-right: auto;\n  margin-left: auto;\n  font-weight: bold;\n  color: var(--color-grey);\n}\n.pagination-controls {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 3vh;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.pagination-controls-mobile-style {\n  margin-left: 0rem;\n  margin-right: 0rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9jbGllbnQtbWFuYWdlbWVudC9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXG1hbmFnZXJcXGNsaWVudC1tYW5hZ2VtZW50XFxjbGllbnQtbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvY2xpZW50LW1hbmFnZW1lbnQvY2xpZW50LW1hbmFnZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksZ0JBQUE7QUNGUjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0FDRlo7QURLUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDSFo7QURRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDTEo7QURRQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvY2xpZW50LW1hbmFnZW1lbnQvY2xpZW50LW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgICAuY29udGVudC1wYWdle1xyXG5cclxuICAgICAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNsaWVudC1tYW5hZ2VtZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGFnaW5hdGlvbi1jb250cm9scyB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDN2aDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tY29udHJvbHMtbW9iaWxlLXN0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xyXG59XHJcbiIsIi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNsaWVudC1tYW5hZ2VtZW50KTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xufVxuXG4ucGFnaW5hdGlvbi1jb250cm9scyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDN2aDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4ucGFnaW5hdGlvbi1jb250cm9scy1tb2JpbGUtc3R5bGUge1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/manager/client-management/client-management.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/manager/client-management/client-management.page.ts ***!
  \***************************************************************************/
/*! exports provided: ClientManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientManagementPage", function() { return ClientManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/africlean-config/africlean-config.provider */ "./src/providers/africlean-config/africlean-config.provider.ts");






var ClientManagementPage = /** @class */ (function () {
    function ClientManagementPage(userProvider, session, observableProvider, config) {
        this.userProvider = userProvider;
        this.session = session;
        this.observableProvider = observableProvider;
        this.config = config;
        /**
         * numéro des pages
         */
        this.positions = [];
        /**
         * Position de la page courante
         */
        this.currentPage = 1;
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
        this.nbrClientsPerPage = 7;
        this.customerType = 'particulier';
    }
    ClientManagementPage.prototype.ngOnInit = function () {
        var _this = this;
        // initialisation tableau positions
        this.positions = [];
        this.getClientsByFilter();
        // Test la platforme
        this.isWeb = this.config.isWeb();
        this.observableProvider.loadClient.subscribe(function (load) {
            if (load) {
                _this.limit = 14;
                _this.skip = 0;
                _this.clients = [];
                _this.clientsTmp = [];
                _this.positions = [];
                _this.getClientsByFilter();
            }
        });
    };
    ClientManagementPage.prototype.segmentChanged = function (ev) {
        this.limit = 14;
        this.skip = 0;
        this.clients = [];
        this.clientsTmp = [];
        this.positions = [];
        this.customerType = ev.detail.value;
        this.getClientsByFilter();
    };
    /**
     * Recupere la position de la page courante et permet de savoir si c'est un suivant
     * donc il faut requeter de nouveau (multiple de 5) ou si c'est un precedent il ne faut
     * rien faire dans ce cas
     * @param position Position de la page
     */
    ClientManagementPage.prototype.sendPosition = function (position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getClientsByFilter();
        }
    };
    ClientManagementPage.prototype.getCustomerType = function () {
        switch (this.customerType) {
            case 'particulier':
                return 1;
            case 'pro':
                return 2;
            default:
                return 3;
        }
    };
    ClientManagementPage.prototype.getClientsByFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, entity, id, body, customerType;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.session.getItem('user')];
                    case 1:
                        _a.user = _b.sent();
                        entity = (this.user) ? this.user.entity : null;
                        id = (entity) ? entity.id : null;
                        body = {};
                        customerType = this.getCustomerType();
                        body = {
                            limit: this.limit,
                            skip: this.skip,
                            customerType: customerType,
                            entity: id
                        };
                        console.log(body);
                        this.userProvider.save('client/clients', body).subscribe(function (clients) {
                            if (!_this.clients && !_this.clientsTmp) {
                                _this.clients = [];
                                _this.clientsTmp = [];
                                _this.positions = [];
                            }
                            _this.clients = _this.clients.concat(clients.slice());
                            _this.clientsTmp = _this.clientsTmp.concat(clients.slice());
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientManagementPage.ctorParameters = function () { return [
        { type: _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanHttpUserProvider"] },
        { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"] },
        { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"] },
        { type: _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanConfigProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClientManagementPage.prototype, "content", void 0);
    ClientManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-management',
            template: __webpack_require__(/*! raw-loader!./client-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manager/client-management/client-management.page.html"),
            styles: [__webpack_require__(/*! ./client-management.page.scss */ "./src/app/pages/manager/client-management/client-management.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanHttpUserProvider"],
            _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"],
            _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"],
            _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanConfigProvider"]])
    ], ClientManagementPage);
    return ClientManagementPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-manager-client-management-client-management-module-es5.js.map