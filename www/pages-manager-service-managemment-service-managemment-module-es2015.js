(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manager-service-managemment-service-managemment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manager/service-managemment/service-managemment.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manager/service-managemment/service-managemment.page.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      <span>{{ 'PAGES.SERVICES_MANAGEMENT.TITLE' | translate }}</span>\r\n    </div>\r\n\r\n    <div class=\"toggle\">\r\n\r\n            <!-- interventions -->\r\n      <ion-item class=\"planning-toggle\">\r\n        <ion-label>{{ 'PAGES.SERVICE.TOGGLE.INTERVENTION' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleIntervention($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n\r\n      <div class=\"planning\" *ngIf=\"interventionCheck\">\r\n        <app-africlean-intervention-management\r\n                [currentPage]=\"currentPage\"\r\n                (position)=\"sendPosition($event)\"\r\n                [showAddFormuler]=\"showAddFormuler\"\r\n                [clientsList]=\"clients\"\r\n                [nbrClientsPerPage]=\"nbrClientsPerPage\"\r\n                [currentPageClient]=\"currentPageClient\"\r\n                (showSelection)=\"getClientsList($event, 'init')\">\r\n        </app-africlean-intervention-management>\r\n      </div>\r\n\r\n      <!-- Planning pour les jours de passage -->\r\n      <ion-item class=\"planning-toggle\">\r\n        <ion-label>{{ 'PAGES.SERVICE.TOGGLE.PLANNING' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"togglePlanning($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n\r\n      <div class=\"planning\" *ngIf=\"planningCheck\">\r\n        <app-africlean-calendar [action]=\"'planning'\"\r\n                                [clientsList]=\"clientsTmpPlanning\"\r\n                                [nbrClientsPerPage]=\"nbrClientsPerPagePlaning\"\r\n                                [currentPageClient]=\"currentPageClientPlanning\"\r\n                                (position)=\"sendPositionClientPlanning($event)\"\r\n                                (showClientSelection)=\"getClientsPlanningList()\">\r\n\r\n        </app-africlean-calendar>\r\n      </div>\r\n      <!-- Dashboard d'activité des utilisateurs -->\r\n      <ion-item class=\"planning-toggle\">\r\n        <ion-label>{{ 'PAGES.SERVICE.TOGGLE.USER_DASHBOARD' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleUser($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n\r\n      <div class=\"planning\" *ngIf=\"planningCheck\">\r\n      </div>\r\n\r\n      <!-- Les avis des personnes -->\r\n      <ion-item class=\"comments-toggle\">\r\n        <ion-label>{{ 'PAGES.SERVICE.TOGGLE.COMMENTS' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleComments($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n\r\n      <div class=\"comments\" *ngIf=\"commentsCheck\">\r\n        <africlean-comments></africlean-comments>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/service-managemment/service-managemment.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manager/service-managemment/service-managemment.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ServiceManagemmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagemmentPageModule", function() { return ServiceManagemmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_managemment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service-managemment.page */ "./src/app/pages/manager/service-managemment/service-managemment.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _service_managemment_page__WEBPACK_IMPORTED_MODULE_5__["ServiceManagemmentPage"]
    }
];
let ServiceManagemmentPageModule = class ServiceManagemmentPageModule {
};
ServiceManagemmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
        ],
        declarations: [_service_managemment_page__WEBPACK_IMPORTED_MODULE_5__["ServiceManagemmentPage"]]
    })
], ServiceManagemmentPageModule);



/***/ }),

/***/ "./src/app/pages/manager/service-managemment/service-managemment.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manager/service-managemment/service-managemment.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 4vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-manage-passage);\n}\n.container .content-page .toggle .planning-toggle ion-label, .container .content-page .toggle .comments-toggle ion-label {\n  color: var(--ion-color-manage-passage);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9zZXJ2aWNlLW1hbmFnZW1tZW50L0M6XFxVc2Vyc1xcdG1kaWFsbG9cXERvY3VtZW50c1xcRG9jdW1lbnRzIHBlcnNvXFxtYXVyaUNsZWFuLWZyb250XFxtYXVyaUNsZWFuLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcbWFuYWdlclxcc2VydmljZS1tYW5hZ2VtbWVudFxcc2VydmljZS1tYW5hZ2VtbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvc2VydmljZS1tYW5hZ2VtbWVudC9zZXJ2aWNlLW1hbmFnZW1tZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLGVBQUE7QUNESjtBREdJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0FDRE47QURPUTtFQUNFLHNDQUFBO0VBQ0EsaUJBQUE7QUNMViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvc2VydmljZS1tYW5hZ2VtbWVudC9zZXJ2aWNlLW1hbmFnZW1tZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcblxyXG4gIC5jb250ZW50LXBhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOiA0dmg7XHJcblxyXG4gICAgLmhlYWRlcntcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1wYXNzYWdlKTtcclxuICAgIH1cclxuICAgIC50b2dnbGV7XHJcblxyXG4gICAgICAucGxhbm5pbmctdG9nZ2xlLCAuY29tbWVudHMtdG9nZ2xle1xyXG5cclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1wYXNzYWdlKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnBsYW5uaW5ne1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIC5jb250ZW50LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiA0dmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtcGFzc2FnZSk7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRvZ2dsZSAucGxhbm5pbmctdG9nZ2xlIGlvbi1sYWJlbCwgLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC50b2dnbGUgLmNvbW1lbnRzLXRvZ2dsZSBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1wYXNzYWdlKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/manager/service-managemment/service-managemment.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/manager/service-managemment/service-managemment.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ServiceManagemmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManagemmentPage", function() { return ServiceManagemmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-intervention.provider */ "./src/providers/africlean-http/africlean-http-intervention.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");
/* harmony import */ var _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../providers/utils/commonEnum */ "./src/providers/utils/commonEnum.ts");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");








let ServiceManagemmentPage = class ServiceManagemmentPage {
    constructor(interventionProvider, navCtrl, actionSheetCtrl, modalCtrl, session, userProvider, observableProvider) {
        this.interventionProvider = interventionProvider;
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.session = session;
        this.userProvider = userProvider;
        this.observableProvider = observableProvider;
        this.planningCheck = false;
        this.interventionCheck = false;
        this.commentsCheck = false;
        this.userDashboed = false;
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        /**
         * numéro des pages
         */
        this.positions = [];
        /**
         * numéro des pages
         */
        this.positionsClients = [];
        /**
         * Position de la page courante
         */
        this.currentPage = 1;
        /**
         * La limite pour récuperer les données
         */
        this.limit = 10;
        /**
         * Données à ignorer
         */
        this.skip = 0;
        /**
         * Le nombre de clients par pages
         */
        this.nbrInterventionsPerPage = 5;
        this.showAddFormuler = false;
        /**
         * Liste des clients
         */
        this.clients = [];
        this.positionsClientPlanning = [];
        /**
         * Position de la page courante
         */
        this.currentPageClient = 1;
        /**
         * Annonces temporaires
         */
        this.clientsTmp = [];
        /**
         * La limite pour récuperer les données
         */
        this.limitClient = 14;
        /**
         * Données à ignorer
         */
        this.skipClient = 0;
        /**
         * Le nombre d'annonces par pages
         */
        this.nbrClientsPerPage = 7;
        /**
         * Liste des clients
         */
        this.clientsPlanning = [];
        /**
         * Position de la page courante
         */
        this.currentPageClientPlanning = 1;
        /**
         * Annonces temporaires
         */
        this.clientsTmpPlanning = [];
        /**
         * La limite pour récuperer les données
         */
        this.limitClientPlanning = 14;
        /**
         * Données à ignorer
         */
        this.skipClientPlanning = 0;
        /**
         * Le nombre d'annonces par pages
         */
        this.nbrClientsPerPagePlaning = 7;
        this.customerType = 2;
        // this.markDisabled(new Date());
    }
    ngOnInit() {
        //  this.getInterventionsByFilter();
        /*this.observableProvider.loadIntervention.subscribe(
            (loadIncident) => {
                if (loadIncident) {
                    this.showAddFormuler = false;
                    this.limit = 10;
                    this.skip = 0;
                    this.interventions = [];
                    this.interventionsTmp = [];
                    this.positions = [];
                    this.getInterventionsByFilter();
                }
            });*/
    }
    /**
     * Switch vers le planning
     * @param event evenement
     */
    togglePlanning(event) {
        this.planningCheck = event.detail.checked;
    }
    /**
     * Switch vers les commentaires
     * @param event événement
     */
    toggleComments(event) {
        this.commentsCheck = event.detail.checked;
    }
    toggleIntervention(event) {
        this.interventionCheck = event.detail.checked;
    }
    toggleUser(event) {
        this.userDashboed = event.detail.checked;
    }
    sendPosition(position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getInterventionsByFilter();
        }
    }
    sendPositionClient(position) {
        this.currentPageClient = position;
        if (position % 2 === 0 && !this.positionsClients.includes(position)) {
            this.positionsClients.push(position);
            this.skipClient = this.skipClient + this.limitClient;
            this.getClientsList(this.customerType, 'position');
        }
    }
    sendPositionClientPlanning(position) {
        this.currentPageClientPlanning = position;
        if (position % 2 === 0 && !this.positionsClientPlanning.includes(position)) {
            this.positionsClientPlanning.push(position);
            this.skipClientPlanning = this.skipClientPlanning + this.limitClientPlanning;
            this.getClientsPlanningList();
        }
    }
    getInterventionsByFilter() {
        let body = {};
        body = {
            limit: this.limit,
            skip: this.skip
        };
        const url = 'intervention/interventions';
        this.interventionProvider.save(url, body).subscribe((interventions) => {
            if (!this.interventions && !this.interventionsTmp) {
                this.interventions = [];
                this.interventionsTmp = [];
                this.positions = [];
            }
            this.interventions = this.interventions.concat(interventions.slice());
            this.interventionsTmp = this.interventionsTmp.concat(interventions.slice());
        });
    }
    getClientsByFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.session.getItem('user');
            const entity = (user) ? user.entity : null;
            const id = (entity) ? entity.id : null;
            let body = {};
            body = {
                limit: this.limitClient,
                skip: this.skipClient,
                customerType: this.customerType,
                entity: id
            };
            this.userProvider.save('client/clients', body).subscribe((clients) => {
                if (!this.clients && !this.clientsTmp) {
                    this.clients = [];
                    this.clientsTmp = [];
                    this.positionsClients = [];
                }
                this.clients = this.clients.concat(clients.slice());
                this.clientsTmp = this.clientsTmp.concat(clients.slice());
                console.log(this.clients);
            });
        });
    }
    getClientsList(event, action) {
        this.clients = (action === 'init') ? [] : this.clients;
        const type = parseInt(event);
        if (type === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_6__["InterventionType"].PRO) {
            this.customerType = _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_6__["InterventionType"].PRO;
            console.log(event);
        }
        else {
            this.customerType = 1;
        }
        this.getClientsByFilter();
    }
    getClientsPlanningByFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.session.getItem('user');
            const entity = (user) ? user.entity : null;
            const id = (entity) ? entity.id : null;
            let body = {};
            body = {
                limit: this.limitClientPlanning,
                skip: this.skipClientPlanning,
                customerType: this.customerType,
                entity: id
            };
            this.userProvider.save('client/clients', body).subscribe((clients) => {
                if (!this.clientsPlanning && !this.clientsTmpPlanning) {
                    this.clientsPlanning = [];
                    this.clientsTmpPlanning = [];
                    this.positionsClientPlanning = [];
                }
                /* this.clientsPlanning = this.clientsPlanning.concat(clients.slice());
                 this.clientsTmpPlanning = this.clientsTmpPlanning.concat(clients.slice());*/
            });
        });
    }
    getClientsPlanningList() {
        this.getClientsPlanningByFilter();
    }
};
ServiceManagemmentPage.ctorParameters = () => [
    { type: _providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanHttpInterventionProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"] },
    { type: _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"] },
    { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServiceManagemmentPage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServiceManagemmentPage.prototype, "nbrInterventionsPerPage", void 0);
ServiceManagemmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-managemment',
        template: __webpack_require__(/*! raw-loader!./service-managemment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manager/service-managemment/service-managemment.page.html"),
        styles: [__webpack_require__(/*! ./service-managemment.page.scss */ "./src/app/pages/manager/service-managemment/service-managemment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanHttpInterventionProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"],
        _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"],
        _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"]])
], ServiceManagemmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-manager-service-managemment-service-managemment-module-es2015.js.map