(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intervenant-intervention-intervention-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/intervenant/intervention/intervention.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/intervenant/intervention/intervention.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.INTERVENTION_MANAGEMENT.TITLE' | translate }}\r\n    </div>\r\n    <div class=\"toggle\">\r\n\r\n      <!-- interventions -->\r\n      <ion-item class=\"intervention-toggle\">\r\n        <ion-label>{{ 'PAGES.INTERVENTION.TOGGLE.INTERVENTION' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleIntervention($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n      <div class=\"intervention\" *ngIf=\"interventionCheck\">\r\n\r\n        <app-africlean-intervention-management\r\n                [interventions]=\"interventionsTmp\"\r\n                [nbrInterventionsPerPage]=\"nbrInterventionsPerPage\"\r\n                [currentPage]=\"currentPage\"\r\n                (position)=\"sendPosition($event)\"\r\n                [clientsList]=\"clientsTmp\"\r\n                [nbrClientsPerPage]=\"nbrClientsPerPage\"\r\n                [currentPageClient]=\"currentPageClient\"\r\n                (positionClient)=\"sendPositionClient($event)\"\r\n                 (showSelection)=\"getClientsList()\">\r\n\r\n        </app-africlean-intervention-management>\r\n\r\n       <!-- <div>\r\n          <app-africlean-calendar [action]=\"'Intervention'\"></app-africlean-calendar>\r\n        </div>-->\r\n      </div>\r\n\r\n      <!-- Dashboard des interventions -->\r\n      <ion-item class=\"dashboard-toggle\">\r\n        <ion-label>{{ 'PAGES.INTERVENTION.TOGGLE.DASHBOARD_INTERVENTION' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleDashboard($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n      <div class=\"intervention\" *ngIf=\"dashboardInterventionCheck\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/intervenant/intervention/intervention.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/intervenant/intervention/intervention.module.ts ***!
  \***********************************************************************/
/*! exports provided: InterventionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionPageModule", function() { return InterventionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _intervention_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intervention.page */ "./src/app/pages/intervenant/intervention/intervention.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _intervention_page__WEBPACK_IMPORTED_MODULE_5__["InterventionPage"]
    }
];
var InterventionPageModule = /** @class */ (function () {
    function InterventionPageModule() {
    }
    InterventionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
            ],
            declarations: [_intervention_page__WEBPACK_IMPORTED_MODULE_5__["InterventionPage"]]
        })
    ], InterventionPageModule);
    return InterventionPageModule;
}());



/***/ }),

/***/ "./src/app/pages/intervenant/intervention/intervention.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/intervenant/intervention/intervention.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-intervention);\n}\n.container .content-page .toggle .intervention-toggle ion-label, .container .content-page .toggle .dashboard-toggle ion-label {\n  color: var(--ion-color-intervention);\n  font-weight: bold;\n}\n.container .content-page .toggle .intervention ion-item ion-label h2 {\n  color: var(--ion-color-intervention);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50ZXJ2ZW5hbnQvaW50ZXJ2ZW50aW9uL0M6XFxVc2Vyc1xcdG1kaWFsbG9cXERvY3VtZW50c1xcRG9jdW1lbnRzIHBlcnNvXFxtYXVyaUNsZWFuLWZyb250XFxtYXVyaUNsZWFuLWZyb250L3NyY1xcYXBwXFxwYWdlc1xcaW50ZXJ2ZW5hbnRcXGludGVydmVudGlvblxcaW50ZXJ2ZW50aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW50ZXJ2ZW5hbnQvaW50ZXJ2ZW50aW9uL2ludGVydmVudGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFFRSxnQkFBQTtBQ0ZKO0FESUk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7QUNGTjtBRFNRO0VBQ0Usb0NBQUE7RUFDQSxpQkFBQTtBQ1BWO0FEZVk7RUFDRSxvQ0FBQTtBQ2JkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50ZXJ2ZW5hbnQvaW50ZXJ2ZW50aW9uL2ludGVydmVudGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAuY29udGVudC1wYWdle1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcblxyXG4gICAgLmhlYWRlcntcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWludGVydmVudGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLnRvZ2dsZXtcclxuXHJcbiAgICAgIC5pbnRlcnZlbnRpb24tdG9nZ2xlLCAuZGFzaGJvYXJkLXRvZ2dsZSB7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW50ZXJ2ZW50aW9uKTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmludGVydmVudGlvbiB7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcblxyXG4gICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWludGVydmVudGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIC5jb250ZW50LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiAxNHZoO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5oZWFkZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW50ZXJ2ZW50aW9uKTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAudG9nZ2xlIC5pbnRlcnZlbnRpb24tdG9nZ2xlIGlvbi1sYWJlbCwgLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC50b2dnbGUgLmRhc2hib2FyZC10b2dnbGUgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnRlcnZlbnRpb24pO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAudG9nZ2xlIC5pbnRlcnZlbnRpb24gaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pbnRlcnZlbnRpb24pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/intervenant/intervention/intervention.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/intervenant/intervention/intervention.page.ts ***!
  \*********************************************************************/
/*! exports provided: InterventionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterventionPage", function() { return InterventionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-intervention.provider */ "./src/providers/africlean-http/africlean-http-intervention.provider.ts");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");






var InterventionPage = /** @class */ (function () {
    /**
     * Test si la platforme est de type web
     */
    function InterventionPage(interventionProvider, session, userProvider, observableProvider) {
        this.interventionProvider = interventionProvider;
        this.session = session;
        this.userProvider = userProvider;
        this.observableProvider = observableProvider;
        this.interventionCheck = false;
        this.dashboardInterventionCheck = false;
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
         * numéro des pages
         */
        this.positionsClient = [];
        /**
         * Position de la page courante
         */
        this.currentPageClient = 1;
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
    }
    InterventionPage.prototype.ngOnInit = function () {
        var _this = this;
        // Initialisation du role
        this.session.getItem('role').then(function (role) {
            _this.role = role;
        });
        this.getInterventionsByFilter();
        this.observableProvider.loadIntervention.subscribe(function (loadIncident) {
            if (loadIncident) {
                _this.limit = 10;
                _this.skip = 0;
                _this.showAddFormuler = false;
                //  this.getInterventionsByFilter();
            }
        });
        this.observableProvider.showClientsSelection.subscribe(function (result) {
            _this.getClientsByFilter();
        });
    };
    InterventionPage.prototype.toggleIntervention = function (event) {
        this.interventionCheck = event.detail.checked;
    };
    InterventionPage.prototype.toggleDashboard = function (event) {
        this.dashboardInterventionCheck = event.detail.checked;
    };
    InterventionPage.prototype.sendPositionClient = function (position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getInterventionsByFilter();
        }
    };
    InterventionPage.prototype.getInterventionsByFilter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userId, url, body;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.session.getItem('userId')];
                    case 1:
                        userId = _a.sent();
                        url = 'intervention/intervention-user-filter';
                        body = {
                            limit: this.limit,
                            skip: this.skip,
                            userCode: userId,
                            role: this.role
                        };
                        this.interventionProvider.save(url, body).subscribe(function (interventions) {
                            var interventionList = interventions.slice();
                            if (!_this.interventions && !_this.interventionsTmp) {
                                _this.interventions = [];
                                _this.interventionsTmp = [];
                                _this.positions = [];
                            }
                            _this.interventions = _this.interventions.concat(interventionList.slice());
                            _this.interventionsTmp = _this.interventionsTmp.concat(interventionList.slice());
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Recupere la position de la page courante et permet de savoir si c'est un suivant
     * donc il faut requeter de nouveau (multiple de 5) ou si c'est un precedent il ne faut
     * rien faire dans ce cas
     * @param position Position de la page
     */
    InterventionPage.prototype.sendPosition = function (position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getClientsByFilter();
        }
    };
    InterventionPage.prototype.getClientsByFilter = function () {
        var _this = this;
        var body = {};
        body = {
            limit: this.limitClient,
            skip: this.skipClient
        };
        this.userProvider.save('client/clients', body).subscribe(function (clients) {
            if (!_this.clients && !_this.clientsTmp) {
                _this.clients = [];
                _this.clientsTmp = [];
                _this.positions = [];
            }
            _this.clients = _this.clients.concat(clients.slice());
            _this.clientsTmp = _this.clientsTmp.concat(clients.slice());
        });
    };
    InterventionPage.prototype.getClientsList = function () {
        this.getClientsByFilter();
    };
    InterventionPage.ctorParameters = function () { return [
        { type: _providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanHttpInterventionProvider"] },
        { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"] },
        { type: _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"] },
        { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InterventionPage.prototype, "currentPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InterventionPage.prototype, "nbrInterventionsPerPage", void 0);
    InterventionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intervention',
            template: __webpack_require__(/*! raw-loader!./intervention.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/intervenant/intervention/intervention.page.html"),
            styles: [__webpack_require__(/*! ./intervention.page.scss */ "./src/app/pages/intervenant/intervention/intervention.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanHttpInterventionProvider"],
            _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"],
            _providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"],
            _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"]])
    ], InterventionPage);
    return InterventionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-intervenant-intervention-intervention-module-es5.js.map