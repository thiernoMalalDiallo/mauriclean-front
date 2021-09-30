(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-incident-incident-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/incident/incident.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/incident/incident.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.INCIDENT.TITLE' | translate }}\r\n    </div>\r\n\r\n    <!-- Afficher le numéro de téléphone du pôle qui s'occupe de l'incident -->\r\n   <!-- <div class=\"phone-number\">\r\n      {{ 'PAGES.INCIDENT.TEXT' | translate }} <span>{{ phoneNumber }}</span>\r\n    </div>-->\r\n    \r\n    <div class=\"incident-form\">      \r\n      <africlean-incident></africlean-incident>\r\n    </div>\r\n\r\n    <div></div>\r\n    <ion-card>\r\n\r\n    <div class=\"title\">Liste des incidents</div>\r\n\r\n    <div class=\"incident-list\">\r\n        <africlean-incidents-list\r\n                [incidents]=\"incidents\"\r\n                [incidentsTMP]=\"incidents\"\r\n                [nbrIncidentPerPage]=\"nbrIncidentsPerPage\"\r\n                [currentPage]=\"currentPage\"\r\n                (position)=\"sendPosition($event)\"></africlean-incidents-list>\r\n    </div>\r\n    </ion-card>\r\n  \r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/incident/incident.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/incident/incident.module.ts ***!
  \***************************************************/
/*! exports provided: IncidentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentPageModule", function() { return IncidentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _incident_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incident.page */ "./src/app/pages/incident/incident.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _incident_page__WEBPACK_IMPORTED_MODULE_6__["IncidentPage"]
    }
];
let IncidentPageModule = class IncidentPageModule {
};
IncidentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ],
        declarations: [_incident_page__WEBPACK_IMPORTED_MODULE_6__["IncidentPage"]]
    })
], IncidentPageModule);



/***/ }),

/***/ "./src/app/pages/incident/incident.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/incident/incident.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-manage-incidents);\n}\n.container .content-page .phone-number {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.container .content-page .phone-number span {\n  color: var(--ion-color-manage-incidents);\n}\n.container .content-page .title {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-decoration: underline;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-right: auto;\n  margin-left: auto;\n  font-weight: bold;\n  color: var(--color-grey);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5jaWRlbnQvQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxEb2N1bWVudHMgcGVyc29cXG1hdXJpQ2xlYW4tZnJvbnRcXG1hdXJpQ2xlYW4tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxpbmNpZGVudFxcaW5jaWRlbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbmNpZGVudC9pbmNpZGVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFFSSxnQkFBQTtBQ0ZSO0FESVE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0FDRlo7QURLUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNIWjtBRElZO0VBQ0ksd0NBQUE7QUNGaEI7QURNUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FDSloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pbmNpZGVudC9pbmNpZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAgIC5jb250ZW50LXBhZ2V7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1pbmNpZGVudHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBob25lLW51bWJlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtaW5jaWRlbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgbWFyZ2luLXRvcDogMTR2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1hbmFnZS1pbmNpZGVudHMpO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5waG9uZS1udW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnBob25lLW51bWJlciBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtaW5jaWRlbnRzKTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/incident/incident.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/incident/incident.page.ts ***!
  \*************************************************/
/*! exports provided: IncidentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentPage", function() { return IncidentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/africlean-modal/africlean-modal.provider */ "./src/providers/africlean-modal/africlean-modal.provider.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_incident_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/africlean-http/africlean-http-incident.provider */ "./src/providers/africlean-http/africlean-http-incident.provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/utils/commonEnum */ "./src/providers/utils/commonEnum.ts");








let IncidentPage = class IncidentPage {
    constructor(observableProvider, modal, incidentProvider, session, route) {
        this.observableProvider = observableProvider;
        this.modal = modal;
        this.incidentProvider = incidentProvider;
        this.session = session;
        this.route = route;
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
        this.nbrIncidentsPerPage = 7;
    }
    ngOnInit() {
        this.getIncidentsByFilter();
        this.phoneNumber = '343 345 564';
        this.observableProvider.loadIncident.subscribe((loadIncident) => {
            if (loadIncident) {
                this.incidents = [];
                this.incidentsTmp = [];
                this.limit = 10;
                this.skip = 0;
                this.getIncidentsByFilter();
            }
        });
    }
    sendPosition(position) {
        this.currentPage = position;
        if (position % 2 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getIncidentsByFilter();
        }
    }
    getIncidentsByFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const body = {
                limit: this.limit,
                skip: this.skip
            };
            let userId;
            this.role = yield this.session.getItem('role');
            if (this.role === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_7__["UserRole"].CLIENT) {
                userId = yield this.session.getItem('userId');
                const url = 'incident/user-incident/' + userId;
                this.incidentProvider.save(url, body).subscribe((incidents) => {
                    if (!this.incidents && !this.incidentsTmp) {
                        this.incidents = [];
                        this.incidentsTmp = [];
                        this.positions = [];
                    }
                    this.incidents = this.incidents.concat(incidents.slice());
                    this.incidentsTmp = this.incidentsTmp.concat(this.incidentsTmp.slice());
                });
            }
        });
    }
    /**
     * Retourne tous les incidents liés à un user
     */
    getIncidents() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let userId;
            this.role = yield this.session.getItem('role');
            if (this.role === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_7__["UserRole"].CLIENT) {
                userId = yield this.session.getItem('userId');
                const url = 'incident/user-incident/' + userId;
                this.incidentProvider.getIncidentByIdUser(url).subscribe((incidents) => {
                    if (!this.incidents && !this.incidentsTmp) {
                        this.incidents = [];
                        this.incidentsTmp = [];
                        this.positions = [];
                    }
                    this.incidents = this.incidents.concat(incidents.slice());
                    this.incidentsTmp = this.incidentsTmp.concat(this.incidentsTmp.slice());
                });
            }
            else {
                const url = 'incident/';
                this.incidentProvider.getAllIncidentsWithDescription(url).subscribe((incidents) => {
                    if (!this.incidents && !this.incidentsTmp) {
                        this.incidents = [];
                        this.incidentsTmp = [];
                        this.positions = [];
                    }
                    this.incidents = this.incidents.concat(incidents.slice());
                    this.incidentsTmp = this.incidentsTmp.concat(this.incidentsTmp.slice());
                });
            }
        });
    }
};
IncidentPage.ctorParameters = () => [
    { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanObservablesProvider"] },
    { type: _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanModalProvider"] },
    { type: _providers_africlean_http_africlean_http_incident_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanHttpIncidentProvider"] },
    { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanSessionProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncidentPage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncidentPage.prototype, "nbrIncidentsPerPage", void 0);
IncidentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incident',
        template: __webpack_require__(/*! raw-loader!./incident.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/incident/incident.page.html"),
        styles: [__webpack_require__(/*! ./incident.page.scss */ "./src/app/pages/incident/incident.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanObservablesProvider"],
        _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanModalProvider"],
        _providers_africlean_http_africlean_http_incident_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanHttpIncidentProvider"],
        _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanSessionProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], IncidentPage);



/***/ })

}]);
//# sourceMappingURL=pages-incident-incident-module-es2015.js.map