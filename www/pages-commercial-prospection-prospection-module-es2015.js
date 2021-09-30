(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-commercial-prospection-prospection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/commercial/prospection/prospection.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/commercial/prospection/prospection.page.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n      {{ 'PAGES.PROSPECT_MANAGEMENT.TITLE' | translate }}\r\n    </div>\r\n    <div class=\"toggle\">\r\n\r\n      <!-- Prospection -->\r\n      <ion-item class=\"prospection-toggle\">\r\n        <ion-label>{{ 'PAGES.PROSPECTION.TOGGLE.PROSPECTION' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleProspection($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n      <div class=\"prospection\" *ngIf=\"prospectionCheck\">\r\n        <app-africlean-prospection\r\n                [prospections]=\"prospectionsTmp\"\r\n                [prospectionsTMP]=\"prospectionsTmp\"\r\n                [nbrProspectionPerPage]=\"nbrProspectionsPerPage\"\r\n                [currentPage]=\"currentPage\"\r\n                (position)=\"sendPosition($event)\"\r\n           (loadProspection)=\"getProspectionssByFilter()\"></app-africlean-prospection>\r\n      </div>\r\n\r\n      <!-- Dashboard de propection -->\r\n      <ion-item class=\"dashboard-toggle\">\r\n        <ion-label>{{ 'PAGES.PROSPECTION.TOGGLE.DASHBOARD_PROSPECTION' | translate }}</ion-label>\r\n        <ion-toggle color=\"medium\" (ionChange)=\"toggleDashboard($event)\">\r\n        </ion-toggle>\r\n      </ion-item>\r\n      <div class=\"prospection\" *ngIf=\"dashboardProspectionCheck\">\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/commercial/prospection/prospection.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/commercial/prospection/prospection.module.ts ***!
  \********************************************************************/
/*! exports provided: ProspectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectionPageModule", function() { return ProspectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _prospection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prospection.page */ "./src/app/pages/commercial/prospection/prospection.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _prospection_page__WEBPACK_IMPORTED_MODULE_5__["ProspectionPage"]
    }
];
let ProspectionPageModule = class ProspectionPageModule {
};
ProspectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_prospection_page__WEBPACK_IMPORTED_MODULE_5__["ProspectionPage"]]
    })
], ProspectionPageModule);



/***/ }),

/***/ "./src/app/pages/commercial/prospection/prospection.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/commercial/prospection/prospection.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: #1eb70c;\n}\n.container .content-page .toggle .prospection-toggle ion-label, .container .content-page .toggle .dashboard-toggle ion-label {\n  font-weight: bold;\n  color: #1eb70c;\n}\n.container .content-page .toggle .prospection ion-item ion-label h2 {\n  color: var(--ion-color-prospection);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbWVyY2lhbC9wcm9zcGVjdGlvbi9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGNvbW1lcmNpYWxcXHByb3NwZWN0aW9uXFxwcm9zcGVjdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbW1lcmNpYWwvcHJvc3BlY3Rpb24vcHJvc3BlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBRUUsZ0JBQUE7QUNGSjtBRElJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUVBLGNBQUE7QUNITjtBRFVRO0VBRUUsaUJBQUE7RUFDQSxjQUFBO0FDVFY7QURpQlk7RUFDRSxtQ0FBQTtBQ2ZkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbWVyY2lhbC9wcm9zcGVjdGlvbi9wcm9zcGVjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAuY29udGVudC1wYWdle1xyXG5cclxuICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcblxyXG4gICAgLmhlYWRlcntcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvc3BlY3Rpb24pO1xyXG4gICAgICBjb2xvcjogIzFlYjcwYztcclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xle1xyXG5cclxuICAgICAgLnByb3NwZWN0aW9uLXRvZ2dsZSwgLmRhc2hib2FyZC10b2dnbGUge1xyXG5cclxuICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgLy8gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvc3BlY3Rpb24pO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzFlYjcwYztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wcm9zcGVjdGlvbiB7XHJcbiAgICAgICAgaW9uLWl0ZW17XHJcblxyXG4gICAgICAgICAgaW9uLWxhYmVse1xyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByb3NwZWN0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSB7XG4gIG1hcmdpbi10b3A6IDE0dmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgY29sb3I6ICMxZWI3MGM7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLnRvZ2dsZSAucHJvc3BlY3Rpb24tdG9nZ2xlIGlvbi1sYWJlbCwgLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC50b2dnbGUgLmRhc2hib2FyZC10b2dnbGUgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMWViNzBjO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC50b2dnbGUgLnByb3NwZWN0aW9uIGlvbi1pdGVtIGlvbi1sYWJlbCBoMiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvc3BlY3Rpb24pO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/commercial/prospection/prospection.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/commercial/prospection/prospection.page.ts ***!
  \******************************************************************/
/*! exports provided: ProspectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProspectionPage", function() { return ProspectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_prospection_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/africlean-http/africlean-http-prospection.provider */ "./src/providers/africlean-http/africlean-http-prospection.provider.ts");
/* harmony import */ var _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../providers/utils/commonEnum */ "./src/providers/utils/commonEnum.ts");






let ProspectionPage = class ProspectionPage {
    constructor(prospectionProvider, observableProvider, session) {
        this.prospectionProvider = prospectionProvider;
        this.observableProvider = observableProvider;
        this.session = session;
        this.prospectionCheck = false;
        this.dashboardProspectionCheck = false;
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
        this.nbrProspectionsPerPage = 7;
    }
    ngOnInit() {
        // Initialisation du role
        this.session.getItem('role').then((role) => {
            this.role = role;
        });
        this.getProspectionssByFilter();
        // Dés qu'il y'a un chamgement au niveau des prospections notament une mise a jour,
        // on récharge les données.
        this.observableProvider.loadProspection.subscribe((load) => {
            if (load) {
                this.limit = 14;
                this.skip = 0;
                this.prospections = [];
                this.prospectionsTmp = [];
                this.positions = [];
                this.getProspectionssByFilter();
            }
        });
    }
    toggleProspection(event) {
        this.prospectionCheck = event.detail.checked;
    }
    toggleDashboard(event) {
        this.dashboardProspectionCheck = event.detail.checked;
    }
    sendPosition(position) {
        this.currentPage = position;
        if (position % 7 === 0 && !this.positions.includes(position)) {
            this.positions.push(position);
            this.skip = this.skip + this.limit;
            this.getProspectionssByFilter();
        }
    }
    /**
     * Retourne tous les prospections
     */
    getProspectionssByFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const userId = yield this.session.getItem('userId');
            const roleAuthor = yield this.session.getItem('role');
            if (roleAuthor === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_5__["UserRole"].COMMERCIAL) {
                const url = 'prospection/commercial-prospect';
                const body = {
                    limit: this.limit,
                    skip: this.skip,
                    authorCode: userId,
                };
                this.prospectionProvider.getProspectByUserAuthor(url, body).subscribe((prospectionsList) => {
                    if (!this.prospections && !this.prospectionsTmp) {
                        this.prospections = [];
                        this.prospectionsTmp = [];
                        this.positions = [];
                    }
                    this.prospections = this.prospections.concat(prospectionsList.slice());
                    this.prospectionsTmp = this.prospectionsTmp.concat(prospectionsList.slice());
                    this.prospections = prospectionsList;
                });
            }
            else {
                const body = {
                    limit: this.limit,
                    skip: this.skip,
                };
                const url = 'prospection/prospections';
                this.prospectionProvider.getProspectByUserAuthor(url, body).subscribe((prospectionsList) => {
                    if (!this.prospections && !this.prospectionsTmp) {
                        this.prospections = [];
                        this.prospectionsTmp = [];
                        this.positions = [];
                    }
                    this.prospections = this.prospections.concat(prospectionsList.slice());
                    this.prospectionsTmp = this.prospectionsTmp.concat(prospectionsList.slice());
                    this.prospections = prospectionsList;
                });
            }
        });
    }
};
ProspectionPage.ctorParameters = () => [
    { type: _providers_africlean_http_africlean_http_prospection_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanHttpProspectionProvider"] },
    { type: _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"] },
    { type: _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanSessionProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProspectionPage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProspectionPage.prototype, "nbrProspectionsPerPage", void 0);
ProspectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-prospection',
        template: __webpack_require__(/*! raw-loader!./prospection.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/commercial/prospection/prospection.page.html"),
        styles: [__webpack_require__(/*! ./prospection.page.scss */ "./src/app/pages/commercial/prospection/prospection.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_http_africlean_http_prospection_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanHttpProspectionProvider"],
        _providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanObservablesProvider"],
        _providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanSessionProvider"]])
], ProspectionPage);



/***/ })

}]);
//# sourceMappingURL=pages-commercial-prospection-prospection-module-es2015.js.map