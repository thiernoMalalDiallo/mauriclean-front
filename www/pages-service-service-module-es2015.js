(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-service-service-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/service/service.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/service/service.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"container\" >\r\n  \r\n  <div class=\"content-page\">\r\n\r\n      <div class=\"header\">\r\n        {{ 'PAGES.SERVICE.TITLE' | translate }}\r\n      </div>\r\n\r\n      <div class=\"toggle\">\r\n\r\n  <!--      <ion-item class=\"planning-toggle\">\r\n          <ion-label>{{ 'PAGES.SERVICE.TOGGLE.PLANNING' | translate }}</ion-label>\r\n          <ion-toggle color=\"medium\" (ionChange)=\"togglePlanning($event)\">\r\n          </ion-toggle>\r\n        </ion-item>\r\n\r\n        <div class=\"planning\" *ngIf=\"planningCheck\">\r\n          <app-africlean-calendar [action]=\"'planning'\"></app-africlean-calendar>\r\n          <br>\r\n        </div>-->\r\n\r\n          <!-- interventions -->\r\n          <div *ngIf=\"role !== 4\">\r\n              <ion-item class=\"comments-toggle\">\r\n                  <ion-label>{{ 'PAGES.INTERVENTION.TOGGLE.INTERVENTION' | translate }}</ion-label>\r\n                  <ion-toggle color=\"medium\" (ionChange)=\"toggleIntervention($event)\">\r\n                  </ion-toggle>\r\n              </ion-item>\r\n              <div class=\"comments\" *ngIf=\"interventionCheck\">\r\n                  <app-africlean-intervention-management [showAddFormuler]=\"showAddFormuler\">\r\n                  </app-africlean-intervention-management>\r\n              </div>\r\n          </div>\r\n\r\n\r\n\r\n          <!-- Planning pour les jours de passage -->\r\n          <ion-item class=\"planning-toggle\">\r\n              <ion-label>{{ 'PAGES.SERVICE.TOGGLE.PLANNING' | translate }}</ion-label>\r\n              <ion-toggle color=\"medium\" (ionChange)=\"togglePlanning($event)\">\r\n              </ion-toggle>\r\n          </ion-item>\r\n\r\n          <div class=\"planning\" *ngIf=\"planningCheck\">\r\n              <!-- <ion-list>\r\n                 <ion-item *ngFor=\"let planning of passageDays\">\r\n                   <ion-label>\r\n                     <h2>{{ planning.day }}</h2>\r\n                     <h3>{{ planning.time }}</h3>\r\n                   </ion-label>\r\n                 </ion-item>\r\n               </ion-list>-->\r\n              <app-africlean-calendar [action]=\"'planning'\"></app-africlean-calendar>\r\n              <br>\r\n          </div>\r\n\r\n          <!-- Les avis des personnes -->\r\n        <ion-item class=\"comments-toggle\">\r\n          <ion-label>{{ 'PAGES.SERVICE.TOGGLE.COMMENTS' | translate }}</ion-label>\r\n          <ion-toggle color=\"medium\" (ionChange)=\"toggleComments($event)\">\r\n          </ion-toggle>\r\n        </ion-item>\r\n\r\n        <div class=\"comments\" *ngIf=\"commentsCheck\"> \r\n          <africlean-comments></africlean-comments>\r\n        </div>\r\n\r\n      </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/service/service.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/service/service.module.ts ***!
  \*************************************************/
/*! exports provided: ServicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePageModule", function() { return ServicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service.page */ "./src/app/pages/service/service.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _service_page__WEBPACK_IMPORTED_MODULE_5__["ServicePage"]
    }
];
let ServicePageModule = class ServicePageModule {
};
ServicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_service_page__WEBPACK_IMPORTED_MODULE_5__["ServicePage"]]
    })
], ServicePageModule);



/***/ }),

/***/ "./src/app/pages/service/service.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/service/service.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 4vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-manage-passage);\n}\n.container .content-page .toggle .planning-toggle ion-label, .container .content-page .toggle .comments-toggle ion-label {\n  color: var(--ion-color-manage-passage);\n  font-weight: bold;\n}\n.container .content-page .toggle .planning ion-item ion-label h2 {\n  color: var(--ion-color-manage-passage);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZS9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXHNlcnZpY2VcXHNlcnZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXJ2aWNlL3NlcnZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksZUFBQTtBQ0RSO0FER1E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7QUNEWjtBRFFnQjtFQUNJLHNDQUFBO0VBQ0EsaUJBQUE7QUNOcEI7QURld0I7RUFDSSxzQ0FBQTtBQ2I1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2Uvc2VydmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAgIC5jb250ZW50LXBhZ2V7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtcGFzc2FnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudG9nZ2xle1xyXG5cclxuICAgICAgICAgICAgLnBsYW5uaW5nLXRvZ2dsZSwgLmNvbW1lbnRzLXRvZ2dsZXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuYWdlLXBhc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucGxhbm5pbmd7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtcGFzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogNHZoO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5oZWFkZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuYWdlLXBhc3NhZ2UpO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC50b2dnbGUgLnBsYW5uaW5nLXRvZ2dsZSBpb24tbGFiZWwsIC5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAudG9nZ2xlIC5jb21tZW50cy10b2dnbGUgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtcGFzc2FnZSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC50b2dnbGUgLnBsYW5uaW5nIGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuYWdlLXBhc3NhZ2UpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/service/service.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/service/service.page.ts ***!
  \***********************************************/
/*! exports provided: ServicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicePage", function() { return ServicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/africlean-http/africlean-http-intervention.provider */ "./src/providers/africlean-http/africlean-http-intervention.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");





let ServicePage = class ServicePage {
    constructor(interventionProvider, session, observableProvider) {
        this.interventionProvider = interventionProvider;
        this.session = session;
        this.observableProvider = observableProvider;
        this.planningCheck = false;
        this.commentsCheck = false;
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
    }
    ngOnInit() {
        // Initialisation du role
        this.session.getItem('role').then((role) => {
            this.role = role;
        });
        /*   this.getInterventionsByFilter();
           this.observableProvider.loadIntervention.subscribe(
               (loadIncident) => {
                   if (loadIncident) {
                       this.interventions = [];
                       this.interventionsTmp = [];
                       this.positions = [];
                       this.limit = 10;
                       this.skip = 0;
                       this.showAddFormuler = false;
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
    toggleDashboard(event) {
        this.dashboardInterventionCheck = event.detail.checked;
    }
    sendPosition(position) {
        this.currentPage = position;
        if (position % 5 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getInterventionsByFilter();
        }
    }
    getInterventionsByFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const userId = yield this.session.getItem('userId');
            const url = 'intervention/intervention-user-filter';
            this.role = yield this.session.getItem('role');
            const body = {
                limit: this.limit,
                skip: this.skip,
                userCode: userId,
                role: this.role
            };
            this.interventionProvider.save(url, body).subscribe((interventions) => {
                const interventionList = interventions.reverse();
                if (!this.interventions && !this.interventionsTmp) {
                    this.interventions = [];
                    this.interventionsTmp = [];
                    this.positions = [];
                }
                this.interventions = this.interventions.concat(interventionList.slice());
                this.interventionsTmp = this.interventionsTmp.concat(interventionList.slice());
            });
        });
    }
};
ServicePage.ctorParameters = () => [
    { type: _providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanHttpInterventionProvider"] },
    { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanSessionProvider"] },
    { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicePage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServicePage.prototype, "nbrInterventionsPerPage", void 0);
ServicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service',
        template: __webpack_require__(/*! raw-loader!./service.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/service/service.page.html"),
        styles: [__webpack_require__(/*! ./service.page.scss */ "./src/app/pages/service/service.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_http_africlean_http_intervention_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanHttpInterventionProvider"],
        _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanSessionProvider"],
        _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"]])
], ServicePage);



/***/ })

}]);
//# sourceMappingURL=pages-service-service-module-es2015.js.map