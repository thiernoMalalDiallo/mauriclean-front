(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manager-subscribe-managemment-subscribe-managemment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n\r\n      <span>{{ 'PAGES.ABONNEMENT_MANAGEMENT.TITLE' | translate }}</span>\r\n    </div>\r\n\r\n\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"particulier\">\r\n      <ion-segment-button value=\"particulier\">\r\n        <ion-label>\r\n          <ion-icon name=\"contacts\"></ion-icon>&nbsp;\r\n          <strong>Particulier</strong>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"pro\">\r\n        <ion-label>\r\n          <ion-icon name=\"business\"></ion-icon>&nbsp;\r\n          <strong>Professionnel</strong>\r\n        </ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n    <div class=\"animate__animated animate__slideInUp animate__fast\"\r\n         *ngIf=\"customerType === 'particulier'\">\r\n        <app-africlean-abonnement-manager\r\n                [subscribesDescription]=\"subscribesTmp\"\r\n                [abonnementsTMP]=\"subscribesTmp\"\r\n                [nbrSubscribesPerPage]=\"nbrSubscribesPerPage\"\r\n                [customerType]=\"utils.getCustomerType(customerType)\"\r\n                [currentPage]=\"currentPage\"\r\n                (position)=\"sendPosition($event)\">\r\n        </app-africlean-abonnement-manager>\r\n\r\n    </div>\r\n\r\n    <div class=\"animate__animated animate__slideInUp animate__fast\"\r\n         *ngIf=\"customerType === 'pro'\">\r\n      <app-africlean-abonnement-manager\r\n              [subscribesDescription]=\"subscribesTmp\"\r\n              [abonnementsTMP]=\"subscribesTmp\"\r\n              [nbrSubscribesPerPage]=\"nbrSubscribesPerPage\"\r\n              [currentPage]=\"currentPage\"\r\n              [customerType]=\"utils.getCustomerType(customerType)\"\r\n              (position)=\"sendPosition($event)\">\r\n      </app-africlean-abonnement-manager>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/subscribe-managemment/subscribe-managemment.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/manager/subscribe-managemment/subscribe-managemment.module.ts ***!
  \*************************************************************************************/
/*! exports provided: SubscribeManagemmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeManagemmentPageModule", function() { return SubscribeManagemmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _subscribe_managemment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribe-managemment.page */ "./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _subscribe_managemment_page__WEBPACK_IMPORTED_MODULE_5__["SubscribeManagemmentPage"]
    }
];
let SubscribeManagemmentPageModule = class SubscribeManagemmentPageModule {
};
SubscribeManagemmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_subscribe_managemment_page__WEBPACK_IMPORTED_MODULE_5__["SubscribeManagemmentPage"]]
    })
], SubscribeManagemmentPageModule);



/***/ }),

/***/ "./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-consult-abonnement);\n}\n.container .content-page .title {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-decoration: underline;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-right: auto;\n  margin-left: auto;\n  font-weight: bold;\n  color: var(--ion-color-consult-abonnement);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9zdWJzY3JpYmUtbWFuYWdlbW1lbnQvQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxEb2N1bWVudHMgcGVyc29cXG1hdXJpQ2xlYW4tZnJvbnRcXG1hdXJpQ2xlYW4tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxtYW5hZ2VyXFxzdWJzY3JpYmUtbWFuYWdlbW1lbnRcXHN1YnNjcmliZS1tYW5hZ2VtbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvc3Vic2NyaWJlLW1hbmFnZW1tZW50L3N1YnNjcmliZS1tYW5hZ2VtbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRSxnQkFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7QUNGTjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvc3Vic2NyaWJlLW1hbmFnZW1tZW50L3N1YnNjcmliZS1tYW5hZ2VtbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAuY29udGVudC1wYWdle1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcblxyXG4gICAgLmhlYWRlcntcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbnN1bHQtYWJvbm5lbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1hYm9ubmVtZW50KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogMTR2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbnN1bHQtYWJvbm5lbWVudCk7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1hYm9ubmVtZW50KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.ts ***!
  \***********************************************************************************/
/*! exports provided: SubscribeManagemmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeManagemmentPage", function() { return SubscribeManagemmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-modal/africlean-modal.provider */ "./src/providers/africlean-modal/africlean-modal.provider.ts");
/* harmony import */ var _components_africlean_adress_africlean_adress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/africlean-adress/africlean-adress.component */ "./src/app/components/africlean-adress/africlean-adress.component.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_subscribe_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-subscribe.provider */ "./src/providers/africlean-http/africlean-http-subscribe.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../providers/utils/commonEnum */ "./src/providers/utils/commonEnum.ts");
/* harmony import */ var _providers_africlean_data_africlean_data_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../providers/africlean-data/africlean-data.provider */ "./src/providers/africlean-data/africlean-data.provider.ts");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");










let SubscribeManagemmentPage = class SubscribeManagemmentPage {
    constructor(modal, observableProvider, route, utils, session, abonnementProvider) {
        this.modal = modal;
        this.observableProvider = observableProvider;
        this.route = route;
        this.utils = utils;
        this.session = session;
        this.abonnementProvider = abonnementProvider;
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
         * Le nombre de clients par pages
         */
        this.nbrSubscribesPerPage = 7;
        /**
         * Emet la position de la page actuel
         */
        this.position = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.customerType = 'particulier';
    }
    ngOnInit() {
        this.getSubscribesByFilter();
        // Dés qu'il y'a un chamgement au nivea des abonnements notament une mise a jour,
        // on récharge les données.
        this.observableProvider.loadAbonnement.subscribe((load) => {
            if (load) {
                this.subscribes = [];
                this.subscribesTmp = [];
                this.limit = 14;
                this.skip = 0;
                this.getSubscribesByFilter();
            }
        });
        this.route.queryParams.subscribe((params) => {
            if (params && params.adresses && params.user) {
                /* const props = {
                   adresses: params.adresses,
                   user: params.user
                 };*/
                // this.modal.create(AfricleanAdressListComponent, 'my-custom-modal-css', props);
                const props = {
                    displayButton: true,
                    userId: params.user.id,
                    role: _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_7__["UserRole"].CLIENT,
                    source: 'consult-subscribe-management'
                };
                this.modal.create(_components_africlean_adress_africlean_adress_component__WEBPACK_IMPORTED_MODULE_4__["AfricleanAdressComponent"], 'my-custom-modal-css', props);
            }
        });
        // On appel la modal pour saisir une adresse
    }
    sendPosition(position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getSubscribesByFilter();
        }
    }
    getSubscribesByFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.session.getItem('user');
            const entity = (user) ? user.entity : null;
            const id = (entity) ? entity.id : null;
            let body = {};
            const customerType = this.utils.getCustomerType(this.customerType);
            body = {
                limit: this.limit,
                skip: this.skip,
                customerType,
                entity: id
            };
            console.log(body);
            const url = 'abonnement/subscribes';
            this.abonnementProvider.save(url, body).subscribe((subscribes) => {
                const subscribe = this._filter(customerType, subscribes);
                if (!this.subscribes && !this.subscribesTmp) {
                    this.subscribes = [];
                    this.subscribesTmp = [];
                    this.positions = [];
                }
                this.subscribes = this.subscribes.concat(subscribe.slice());
                this.subscribesTmp = this.subscribesTmp.concat(subscribe.slice());
            });
        });
    }
    _filter(value, list) {
        const filterValue = value.toString();
        return list.filter(item => item.user.customerType.toString().indexOf(filterValue) === 0);
    }
    segmentChanged(ev) {
        this.limit = 14;
        this.skip = 0;
        this.subscribes = [];
        this.subscribesTmp = [];
        this.positions = [];
        this.customerType = ev.detail.value;
        this.getSubscribesByFilter();
    }
};
SubscribeManagemmentPage.ctorParameters = () => [
    { type: _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanModalProvider"] },
    { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _providers_africlean_data_africlean_data_provider__WEBPACK_IMPORTED_MODULE_8__["AfricleanDataProvider"] },
    { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanSessionProvider"] },
    { type: _providers_africlean_http_africlean_http_subscribe_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpSubscribeProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubscribeManagemmentPage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubscribeManagemmentPage.prototype, "nbrSubscribesPerPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubscribeManagemmentPage.prototype, "position", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SubscribeManagemmentPage.prototype, "content", void 0);
SubscribeManagemmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subscribe-managemment',
        template: __webpack_require__(/*! raw-loader!./subscribe-managemment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.html"),
        styles: [__webpack_require__(/*! ./subscribe-managemment.page.scss */ "./src/app/pages/manager/subscribe-managemment/subscribe-managemment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanModalProvider"],
        _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _providers_africlean_data_africlean_data_provider__WEBPACK_IMPORTED_MODULE_8__["AfricleanDataProvider"],
        _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanSessionProvider"],
        _providers_africlean_http_africlean_http_subscribe_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpSubscribeProvider"]])
], SubscribeManagemmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-manager-subscribe-managemment-subscribe-managemment-module-es2015.js.map