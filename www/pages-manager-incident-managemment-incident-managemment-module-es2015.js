(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manager-incident-managemment-incident-managemment-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/manager/incident-managemment/incident-managemment.page.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/manager/incident-managemment/incident-managemment.page.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.INCIDENTS_MANAGEMENT.TITLE' | translate }}\r\n    </div>\r\n\r\n    <div class=\"incident-list\">\r\n      <africlean-incidents-list\r\n              [incidents]=\"incidents\"\r\n              [incidentsTMP]=\"incidents\"\r\n              [nbrIncidentPerPage]=\"nbrIncidentsPerPage\"\r\n              [currentPage]=\"currentPage\"\r\n              (position)=\"sendPosition($event)\"></africlean-incidents-list>\r\n    </div>\r\n\r\n      <!-- Bouton pour ajouter un nouvel client -->\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" (click)=\"addIncident()\">\r\n      <ion-fab-button>\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/manager/incident-managemment/incident-managemment.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/manager/incident-managemment/incident-managemment.module.ts ***!
  \***********************************************************************************/
/*! exports provided: IncidentManagemmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentManagemmentPageModule", function() { return IncidentManagemmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _incident_managemment_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./incident-managemment.page */ "./src/app/pages/manager/incident-managemment/incident-managemment.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _incident_managemment_page__WEBPACK_IMPORTED_MODULE_5__["IncidentManagemmentPage"]
    }
];
let IncidentManagemmentPageModule = class IncidentManagemmentPageModule {
};
IncidentManagemmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_incident_managemment_page__WEBPACK_IMPORTED_MODULE_5__["IncidentManagemmentPage"]]
    })
], IncidentManagemmentPageModule);



/***/ }),

/***/ "./src/app/pages/manager/incident-managemment/incident-managemment.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/manager/incident-managemment/incident-managemment.page.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-manage-incidents);\n}\n.container .content-page .phone-number {\n  text-align: center;\n  margin-bottom: 1rem;\n}\n.container .content-page .phone-number span {\n  color: var(--ion-color-manage-incidents);\n}\n.container .content-page .title {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-decoration: underline;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-right: auto;\n  margin-left: auto;\n  font-weight: bold;\n  color: var(--color-grey);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlci9pbmNpZGVudC1tYW5hZ2VtbWVudC9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXG1hbmFnZXJcXGluY2lkZW50LW1hbmFnZW1tZW50XFxpbmNpZGVudC1tYW5hZ2VtbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvaW5jaWRlbnQtbWFuYWdlbW1lbnQvaW5jaWRlbnQtbWFuYWdlbW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsZ0JBQUE7QUNGSjtBRElJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0FDRk47QURLSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNITjtBRElNO0VBQ0Usd0NBQUE7QUNGUjtBRE1JO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZXIvaW5jaWRlbnQtbWFuYWdlbW1lbnQvaW5jaWRlbnQtbWFuYWdlbW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuXHJcbiAgLmNvbnRlbnQtcGFnZXtcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxNHZoO1xyXG5cclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtaW5jaWRlbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICAucGhvbmUtbnVtYmVye1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtaW5jaWRlbnRzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYW5hZ2UtaW5jaWRlbnRzKTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAucGhvbmUtbnVtYmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5waG9uZS1udW1iZXIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFuYWdlLWluY2lkZW50cyk7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/manager/incident-managemment/incident-managemment.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manager/incident-managemment/incident-managemment.page.ts ***!
  \*********************************************************************************/
/*! exports provided: IncidentManagemmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentManagemmentPage", function() { return IncidentManagemmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-modal/africlean-modal.provider */ "./src/providers/africlean-modal/africlean-modal.provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_africlean_incident_africlean_incident_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/africlean-incident/africlean-incident.component */ "./src/app/components/africlean-incident/africlean-incident.component.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_incident_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-incident.provider */ "./src/providers/africlean-http/africlean-http-incident.provider.ts");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../providers/utils/commonEnum */ "./src/providers/utils/commonEnum.ts");









let IncidentManagemmentPage = class IncidentManagemmentPage {
    constructor(observableProvider, modal, session, incidentProvider, route) {
        this.observableProvider = observableProvider;
        this.modal = modal;
        this.session = session;
        this.incidentProvider = incidentProvider;
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
        this.limit = 10;
        /**
         * Données à ignorer
         */
        this.skip = 0;
        /**
         * Le nombre de clients par pages
         */
        this.nbrIncidentsPerPage = 5;
    }
    ngOnInit() {
        this.getIncidentsByFilter();
        this.observableProvider.loadClient.subscribe((load) => {
            if (load) {
                this.limit = 10;
                this.skip = 0;
                this.incidents = [];
                this.incidentsTmp = [];
                this.positions = [];
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
            const user = yield this.session.getItem('user');
            const body = {
                limit: this.limit,
                skip: this.skip,
                company: user.entity
            };
            let userId;
            let url = 'incident/incidents';
            this.role = yield this.session.getItem('role');
            if (this.role === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["UserRole"].CLIENT) {
                userId = yield this.session.getItem('userId');
                url = 'incident/user-incident/' + userId;
            }
            else {
                url = 'incident/incidents';
            }
            this.incidentProvider.save(url, body).subscribe((incidents) => {
                if (!this.incidents && !this.incidentsTmp) {
                    this.incidents = [];
                    this.incidentsTmp = [];
                    this.positions = [];
                }
                console.log(incidents);
                this.incidents = this.incidents.concat(incidents.slice());
                this.incidentsTmp = this.incidentsTmp.concat(this.incidentsTmp.slice());
            });
        });
    }
    addIncident() {
        const props = {
            source: 'consult-incident-management',
            displayForm: true,
            collapseCard: false
        };
        this.modal.create(_components_africlean_incident_africlean_incident_component__WEBPACK_IMPORTED_MODULE_5__["AfricleanIncidentComponent"], 'my-custom-modal-css', props);
    }
};
IncidentManagemmentPage.ctorParameters = () => [
    { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanObservablesProvider"] },
    { type: _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanModalProvider"] },
    { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"] },
    { type: _providers_africlean_http_africlean_http_incident_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanHttpIncidentProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncidentManagemmentPage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncidentManagemmentPage.prototype, "nbrIncidentsPerPage", void 0);
IncidentManagemmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-incident-managemment',
        template: __webpack_require__(/*! raw-loader!./incident-managemment.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/manager/incident-managemment/incident-managemment.page.html"),
        styles: [__webpack_require__(/*! ./incident-managemment.page.scss */ "./src/app/pages/manager/incident-managemment/incident-managemment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanObservablesProvider"],
        _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanModalProvider"],
        _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"],
        _providers_africlean_http_africlean_http_incident_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanHttpIncidentProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], IncidentManagemmentPage);



/***/ })

}]);
//# sourceMappingURL=pages-manager-incident-managemment-incident-managemment-module-es2015.js.map