(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manager-finance-management-finance-management-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manager/finance-management/finance-management.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manager/finance-management/finance-management.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"container\">\r\n\r\n    <div class=\"content-page\">\r\n\r\n        <div class=\"header\">\r\n            {{ 'PAGES.FINANCES_MANAGEMENT.TITLE' | translate }}\r\n        </div>\r\n       <!-- <div>\r\n            <div class=\"toggle\">\r\n\r\n                &lt;!&ndash; toogle pour le payement abonnement &ndash;&gt;\r\n                <ion-item class=\"payement-toggle\" *ngIf=\"role!=='COMMERCIAL'\">\r\n                    <ion-label>{{ 'PAGES.PAYEMENT.TOGGLE.PAYEMENT_SUBS' | translate }}</ion-label>\r\n                    <ion-toggle color=\"medium\" (ionChange)=\"togglePaySubscription($event)\">\r\n                    </ion-toggle>\r\n                </ion-item>\r\n\r\n                <div class=\"payement\" *ngIf=\"payeSubscriptionCheck && role !=='COMMERCIAL'\">\r\n                    <app-africlean-pay-client\r\n                            [payements]=\"payements\"\r\n                            [payementsTMP]=\"payementsTMP\"\r\n                            [nbrPaiementPerPage]=\"nbrPaiementPerPage\"\r\n                            [currentPage]=\"currentPage\"\r\n                            (position)=\"sendPosition($event)\"\r\n                            [isWeb]=\"isWeb\">\r\n\r\n                    </app-africlean-pay-client>\r\n                </div>\r\n\r\n\r\n                <div class=\"payement\" *ngIf=\"role ==='COMMERCIAL'\">\r\n                    <app-africlean-pay-client\r\n                            [payements]=\"payements\"\r\n                            [payementsTMP]=\"payementsTMP\"\r\n                            [nbrPaiementPerPage]=\"nbrPaiementPerPage\"\r\n                            [currentPage]=\"currentPage\"\r\n                            (position)=\"sendPosition($event)\"\r\n                            [isWeb]=\"isWeb\">\r\n\r\n                    </app-africlean-pay-client>\r\n                </div>\r\n\r\n                &lt;!&ndash; toogle pour le payement employe &ndash;&gt;\r\n                <ion-item class=\"payement-toggle\" *ngIf=\"role!=='COMMERCIAL'\">\r\n                    <ion-label>{{ 'PAGES.PAYEMENT.TOGGLE.PAYEMENT_EMPLOYE' | translate }}</ion-label>\r\n                    <ion-toggle color=\"medium\" (ionChange)=\"togglePayeEmploye($event)\">\r\n                    </ion-toggle>\r\n                </ion-item>\r\n\r\n                <div class=\"payement\" *ngIf=\"payeEmployeCheck && role!=='COMMERCIAL'\">\r\n                    <app-africlean-pay-employe\r\n                            [payements]=\"payementsEmploye\"\r\n                            [payementsTMP]=\"payementsTMPEmploye\"\r\n                            [nbrPaiementPerPage]=\"nbrPaiementPerPageEmploye\"\r\n                            [currentPage]=\"currentPageEmploye\"\r\n                            (position)=\"sendPositionEmploye($event)\"\r\n                            [isWeb]=\"isWeb\">\r\n\r\n                    </app-africlean-pay-employe>\r\n                </div>\r\n\r\n            </div>\r\n        </div>-->\r\n         <app-manage-finance>\r\n\r\n         </app-manage-finance>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/finance-management/finance-management.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/manager/finance-management/finance-management.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FinanceManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceManagementPageModule", function() { return FinanceManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _finance_management_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finance-management.page */ "./src/app/pages/manager/finance-management/finance-management.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _finance_management_page__WEBPACK_IMPORTED_MODULE_5__["FinanceManagementPage"]
    }
];
let FinanceManagementPageModule = class FinanceManagementPageModule {
};
FinanceManagementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_finance_management_page__WEBPACK_IMPORTED_MODULE_5__["FinanceManagementPage"]]
    })
], FinanceManagementPageModule);



/***/ }),

/***/ "./src/app/pages/manager/finance-management/finance-management.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/manager/finance-management/finance-management.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 0.2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-finance-management);\n}\n.toggle .payement-toggle ion-label {\n  color: var(--ion-color-finance-management);\n  font-weight: bold;\n}\n.toggle .payement ion-item ion-label h2 {\n  color: var(--ion-color-finance-management);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9maW5hbmNlLW1hbmFnZW1lbnQvQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxEb2N1bWVudHMgcGVyc29cXG1hdXJpQ2xlYW4tZnJvbnRcXG1hdXJpQ2xlYW4tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxtYW5hZ2VyXFxmaW5hbmNlLW1hbmFnZW1lbnRcXGZpbmFuY2UtbWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvZmluYW5jZS1tYW5hZ2VtZW50L2ZpbmFuY2UtbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRSxnQkFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7QUNGTjtBRFlJO0VBQ0UsMENBQUE7RUFDQSxpQkFBQTtBQ1ROO0FEa0JRO0VBQ0UsMENBQUE7QUNoQlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYW5hZ2VyL2ZpbmFuY2UtbWFuYWdlbWVudC9maW5hbmNlLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblxyXG4gIC5jb250ZW50LXBhZ2Uge1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZpbmFuY2UtbWFuYWdlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuLnRvZ2dsZSB7XHJcblxyXG4gIC5wYXllbWVudC10b2dnbGUge1xyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZmluYW5jZS1tYW5hZ2VtZW50KTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGF5ZW1lbnQge1xyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuXHJcbiAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1maW5hbmNlLW1hbmFnZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogMTR2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZmluYW5jZS1tYW5hZ2VtZW50KTtcbn1cblxuLnRvZ2dsZSAucGF5ZW1lbnQtdG9nZ2xlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZmluYW5jZS1tYW5hZ2VtZW50KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9nZ2xlIC5wYXllbWVudCBpb24taXRlbSBpb24tbGFiZWwgaDIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWZpbmFuY2UtbWFuYWdlbWVudCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/manager/finance-management/finance-management.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/manager/finance-management/finance-management.page.ts ***!
  \*****************************************************************************/
/*! exports provided: FinanceManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinanceManagementPage", function() { return FinanceManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_africlean_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/africlean-user.model */ "./src/models/africlean-user.model.ts");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_payement_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-payement.provider */ "./src/providers/africlean-http/africlean-http-payement.provider.ts");
/* harmony import */ var _providers_africlean_date_africlean_date_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/africlean-date/africlean-date.provider */ "./src/providers/africlean-date/africlean-date.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../providers/africlean-config/africlean-config.provider */ "./src/providers/africlean-config/africlean-config.provider.ts");








let FinanceManagementPage = class FinanceManagementPage {
    constructor(session, payementProvider, dateProvider, observableProvider, config) {
        this.session = session;
        this.payementProvider = payementProvider;
        this.dateProvider = dateProvider;
        this.observableProvider = observableProvider;
        this.config = config;
        this.payeSubscriptionCheck = false;
        this.payeEmployeCheck = false;
        /**
         * numéro des pages
         */
        this.positions = [];
        /**
         * numéro des pages
         */
        this.positionsEmploye = [];
        /**
         * Position de la page courante
         */
        this.currentPage = 1;
        /**
         * Le nombre de clients par pages
         */
        this.nbrPaiementPerPageEmploye = 5;
        /**
         * Position de la page courante
         */
        this.currentPageEmploye = 1;
        /**
         * Le nombre de clients par pages
         */
        this.nbrPaiementPerPage = 5;
        /**
         * La limite pour récuperer les données
         */
        this.limit = 10;
        /**
         * Données à ignorer
         */
        this.skip = 0;
        /**
         * La limite pour récuperer les données
         */
        this.limitEmploye = 10;
        /**
         * Données à ignorer
         */
        this.skipEmploye = 0;
    }
    ngOnInit() {
        this.getUser();
        this.isWeb = this.config.isWeb();
        this.observableProvider.loadPayement.subscribe((result) => {
            this.payements = [];
            this.payementsTMP = [];
            this.positions = [];
            this.getPayements('abonnement');
        });
        this.observableProvider.loadPayementEmploye.subscribe((result) => {
            this.payementsEmploye = [];
            this.payementsTMPEmploye = [];
            this.positionsEmploye = [];
            this.getPayements('employe');
        });
    }
    /**
     * Utilisateur temporaire
     */
    getUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.role = yield this.session.getItem('role');
            this.userId = yield this.session.getItem('userId');
            this.userTMP = yield this.session.getItem('userTMP');
            (this.role === 'COMMERCIAL') ? this.getPayements('abonnement') : ' ';
        });
    }
    /**
     * Switch vers le payement de l'abonnement
     * @param event evenement
     */
    togglePaySubscription(event) {
        this.payeSubscriptionCheck = event.detail.checked;
        this.payeEmployeCheck = !this.payeSubscriptionCheck;
        if (this.payements && this.payements.length > 0) {
            this.payements = [];
            this.payementsTMP = [];
            this.positions = [];
        }
        else {
            this.getPayements('abonnement');
        }
    }
    /**
     * Switch vers le payement des employés
     * @param event événement
     */
    togglePayeEmploye(event) {
        this.payeEmployeCheck = event.detail.checked;
        this.payeSubscriptionCheck = !this.payeEmployeCheck;
        if (this.payementsEmploye && this.payementsTMPEmploye.length > 0) {
            this.payementsEmploye = [];
            this.payementsTMPEmploye = [];
            this.positionsEmploye = [];
        }
        else {
            this.getPayements('employe');
        }
    }
    sendPosition(position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getPayements('abonnement');
        }
    }
    /**
     * Liste de payement
     */
    getPayements(typePayement) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let body = {};
            let url;
            this.role = yield this.session.getItem('role');
            this.userId = yield this.session.getItem('userId');
            if (typePayement === 'abonnement') {
                if (this.role === 'CLIENT') {
                    url = 'payement/paiements/client/' + this.userId;
                }
                else {
                    url = 'payement/paiements/';
                }
                body = {
                    limit: this.limit,
                    skip: this.skip
                };
            }
            else {
                if (this.role === 'COMMERCIAL' || this.role === 'INTERVENANT') {
                    url = 'payement-employe/paiements/employe/' + this.userId;
                }
                else {
                    url = 'payement-employe/paiements/';
                }
                body = {
                    limit: this.limitEmploye,
                    skip: this.skipEmploye
                };
            }
            this.payementProvider.postPaiment(url, body).subscribe((payementList) => {
                if (!this.payements && !this.payementsTMP) {
                    this.payements = [];
                    this.payementsTMP = [];
                    this.positions = [];
                }
                if (!this.payementsEmploye && !this.payementsTMPEmploye) {
                    this.payementsEmploye = [];
                    this.payementsTMPEmploye = [];
                    this.positionsEmploye = [];
                }
                //  if (this.source === 'consult-subscribe-management') {
                if (typePayement === 'abonnement') {
                    this.payements = this.payements.concat(payementList.slice());
                    this.payementsTMP = this.payementsTMP.concat(payementList.slice());
                }
                else {
                    this.payementsEmploye = this.payementsEmploye.concat(payementList.slice());
                    this.payementsTMPEmploye = this.payementsTMPEmploye.concat(payementList.slice());
                }
                /*  } else {
                      this.payements = this.payements.concat(payementList.slice());
                      this.payementsTMP = this.payementsTMP.concat(payementList.slice());
                  }*/
            });
        });
    }
    sendPositionEmploye(position) {
        this.currentPageEmploye = position;
        if (position % 2 === 0 && !this.positionsEmploye.includes(position)) {
            this.positionsEmploye.push(position);
            this.skipEmploye = this.skipEmploye + this.limitEmploye;
            this.getPayements('employe');
        }
    }
    _filter(name, list) {
        const filterValue = name.toLowerCase();
        // tslint:disable-next-line:max-line-length
        return list.filter(item => (item.payement.payementCreatedAuthorId.authorId.toLowerCase().indexOf(filterValue) === 0));
    }
};
FinanceManagementPage.ctorParameters = () => [
    { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"] },
    { type: _providers_africlean_http_africlean_http_payement_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanHttpPayementProvider"] },
    { type: _providers_africlean_date_africlean_date_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanDateProvider"] },
    { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"] },
    { type: _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanConfigProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FinanceManagementPage.prototype, "payements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FinanceManagementPage.prototype, "payementsTMP", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FinanceManagementPage.prototype, "payementsEmploye", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], FinanceManagementPage.prototype, "payementsTMPEmploye", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FinanceManagementPage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FinanceManagementPage.prototype, "nbrPaiementPerPageEmploye", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FinanceManagementPage.prototype, "currentPageEmploye", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FinanceManagementPage.prototype, "nbrPaiementPerPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_africlean_user_model__WEBPACK_IMPORTED_MODULE_2__["AfricleanUserModel"])
], FinanceManagementPage.prototype, "userTMP", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FinanceManagementPage.prototype, "source", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FinanceManagementPage.prototype, "role", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FinanceManagementPage.prototype, "userId", void 0);
FinanceManagementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finance-management',
        template: __webpack_require__(/*! raw-loader!./finance-management.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manager/finance-management/finance-management.page.html"),
        styles: [__webpack_require__(/*! ./finance-management.page.scss */ "./src/app/pages/manager/finance-management/finance-management.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"],
        _providers_africlean_http_africlean_http_payement_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanHttpPayementProvider"],
        _providers_africlean_date_africlean_date_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanDateProvider"],
        _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"],
        _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanConfigProvider"]])
], FinanceManagementPage);



/***/ })

}]);
//# sourceMappingURL=pages-manager-finance-management-finance-management-module-es2015.js.map