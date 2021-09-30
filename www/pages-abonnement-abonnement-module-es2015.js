(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-abonnement-abonnement-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/abonnement/abonnement.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/abonnement/abonnement.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-content class=\"container\">\r\n\r\n  <div  class=\"content-page\">\r\n\r\n    <div class=\"header\">\r\n\r\n      <span>{{ 'PAGES.ABONNEMENT.TITLE' | translate }}</span>\r\n\r\n      <div *ngIf=\"subscribes\" class=\"info-subscribes\" \r\n            [ngClass]=\"{\r\n              'subscribes-column': subscribeValidateOrResiliate === true\r\n            }\">\r\n\r\n        <span class=\"abonnement-number\" (click)=\"abonnementsValidateList()\">\r\n          <strong>{{ subscribes.validee.length }}</strong> {{ 'PAGES.ABONNEMENT.NUMBER' | translate }}\r\n        </span>\r\n\r\n        <span *ngIf=\"subscribes.enCours.length !==0\" class=\"abonnement-inProgress\"\r\n              (click)=\"abonnementsCurrentValidateList()\">\r\n            <strong>{{ subscribes.enCours.length }}</strong> {{ 'PAGES.ABONNEMENT.CURRENT_VALIDATE' | translate }}\r\n        </span>\r\n\r\n        <span *ngIf=\"subscribes.enCoursResiliation.length !==0\" class=\"abonnement-inProgress\"\r\n              (click)=\"abonnementsCurrentResiliationList()\">\r\n            <strong>{{ subscribes.enCoursResiliation.length }}</strong> {{ 'PAGES.ABONNEMENT.CURRENT_RESILIATION' | translate }}\r\n        </span>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"contract\">\r\n\r\n      <!-- Bouton de souscription à un abonnement -->\r\n      <africlean-small-button [title]=\"'PAGES.ABONNEMENT.SUBSCRIPTION' | translate\"\r\n                              [theme]=\"'abonnement'\" (clickButton)=\"subscription()\">\r\n\r\n      </africlean-small-button>\r\n\r\n    </div>\r\n\r\n    <!-- Liste des paiements -->\r\n    <africlean-abo-payments\r\n            [payements]=\"payements\"\r\n            [payementsTMP]=\"payementsTMP\"\r\n            [nbrPaiementPerPage]=\"nbrPaiementPerPage\"\r\n            [currentPage]=\"currentPage\"\r\n            (position)=\"sendPosition($event)\"></africlean-abo-payments>\r\n\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/abonnement/abonnement.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/abonnement/abonnement.module.ts ***!
  \*******************************************************/
/*! exports provided: AbonnementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementPageModule", function() { return AbonnementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _abonnement_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abonnement.page */ "./src/app/pages/abonnement/abonnement.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









const routes = [
    {
        path: '',
        component: _abonnement_page__WEBPACK_IMPORTED_MODULE_6__["AbonnementPage"]
    }
];
let AbonnementPageModule = class AbonnementPageModule {
};
AbonnementPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild()
        ],
        declarations: [_abonnement_page__WEBPACK_IMPORTED_MODULE_6__["AbonnementPage"]]
    })
], AbonnementPageModule);



/***/ }),

/***/ "./src/app/pages/abonnement/abonnement.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/abonnement/abonnement.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  margin-top: 14vh;\n}\n.container .content-page .header {\n  font-size: 1.4rem;\n  margin-bottom: 2rem;\n  padding-left: 0.5rem;\n  border-bottom: 1px solid;\n  border-color: var(--ion-color-grey);\n  color: var(--ion-color-consult-abonnement);\n}\n.container .content-page .header .info-subscribes {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-left: 1vw;\n}\n.container .content-page .header .info-subscribes.subscribes-column {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.container .content-page .header .info-subscribes strong {\n  color: var(--ion-color-consult-abonnement);\n}\n.container .content-page .header .info-subscribes .abonnement-number {\n  cursor: pointer;\n  font-size: 1rem;\n  color: var(--ion-color-grey);\n}\n.container .content-page .header .info-subscribes .abonnement-inProgress {\n  cursor: pointer;\n  font-size: 1rem;\n  color: var(--ion-color-grey);\n}\n.container .content-page .contract {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 2rem;\n}\n.container .content-page .contract .text {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  margin-left: auto;\n  margin-right: auto;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.container .content-page .contract .text .choice {\n  color: var(--ion-color-consult-abonnement);\n  text-decoration: underline;\n  cursor: pointer;\n}\n.container .content-page .contract .text .choice .agree {\n  margin-right: 0.5rem;\n}\n.container .content-page .contract .text .resiliation {\n  width: 14rem;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: justify;\n}\n.container .content-page .contract .info {\n  width: 14rem;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  color: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvbm5lbWVudC9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGFib25uZW1lbnRcXGFib25uZW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm9ubmVtZW50L2Fib25uZW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBRUksZ0JBQUE7QUNGUjtBRElRO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0FDRlo7QURJWTtFQUVJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0FDSGhCO0FES2dCO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSHBCO0FETWdCO0VBQ0ksMENBQUE7QUNKcEI7QURNZ0I7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FDSnBCO0FET2dCO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQ0xwQjtBRFVRO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUlo7QURVWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDUmhCO0FEVWdCO0VBQ0ksMENBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNScEI7QURTb0I7RUFDSSxvQkFBQTtBQ1B4QjtBRFlnQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNWcEI7QURjWTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ1poQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib25uZW1lbnQvYWJvbm5lbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG5cclxuICAgIC5jb250ZW50LXBhZ2V7XHJcblxyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0dmg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbnN1bHQtYWJvbm5lbWVudCk7XHJcblxyXG4gICAgICAgICAgICAuaW5mby1zdWJzY3JpYmVze1xyXG5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxdnc7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5zdWJzY3JpYmVzLWNvbHVtbntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3Ryb25ne1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1hYm9ubmVtZW50KSA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWJvbm5lbWVudC1udW1iZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAuYWJvbm5lbWVudC1pblByb2dyZXNze1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRyYWN0e1xyXG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgICAgICAgICAudGV4dHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2hvaWNle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1hYm9ubmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFncmVle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXNpbGlhdGlvbntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuY29udGFpbmVyIC5jb250ZW50LXBhZ2Uge1xuICBtYXJnaW4tdG9wOiAxNHZoO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5oZWFkZXIge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29uc3VsdC1hYm9ubmVtZW50KTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIC5pbmZvLXN1YnNjcmliZXMge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxdnc7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciAuaW5mby1zdWJzY3JpYmVzLnN1YnNjcmliZXMtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIC5pbmZvLXN1YnNjcmliZXMgc3Ryb25nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb25zdWx0LWFib25uZW1lbnQpO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5oZWFkZXIgLmluZm8tc3Vic2NyaWJlcyAuYWJvbm5lbWVudC1udW1iZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIC5pbmZvLXN1YnNjcmliZXMgLmFib25uZW1lbnQtaW5Qcm9ncmVzcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5jb250cmFjdCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuY29udHJhY3QgLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmNvbnRyYWN0IC50ZXh0IC5jaG9pY2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbnN1bHQtYWJvbm5lbWVudCk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmNvbnRyYWN0IC50ZXh0IC5jaG9pY2UgLmFncmVlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmNvbnRyYWN0IC50ZXh0IC5yZXNpbGlhdGlvbiB7XG4gIHdpZHRoOiAxNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuY29udHJhY3QgLmluZm8ge1xuICB3aWR0aDogMTRyZW07XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/abonnement/abonnement.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/abonnement/abonnement.page.ts ***!
  \*****************************************************/
/*! exports provided: AbonnementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbonnementPage", function() { return AbonnementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_components_africlean_abonnement_subscription_africlean_abonnement_subscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/africlean-abonnement-subscription/africlean-abonnement-subscription.component */ "./src/app/components/africlean-abonnement-subscription/africlean-abonnement-subscription.component.ts");
/* harmony import */ var src_app_components_africlean_abonnement_list_africlean_abonnement_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/africlean-abonnement-list/africlean-abonnement-list.component */ "./src/app/components/africlean-abonnement-list/africlean-abonnement-list.component.ts");
/* harmony import */ var src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/africlean-modal/africlean-modal.provider */ "./src/providers/africlean-modal/africlean-modal.provider.ts");
/* harmony import */ var src_providers_africlean_http_africlean_http_subscribe_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/africlean-http/africlean-http-subscribe.provider */ "./src/providers/africlean-http/africlean-http-subscribe.provider.ts");
/* harmony import */ var src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var _models_africlean_user_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/africlean-user.model */ "./src/models/africlean-user.model.ts");
/* harmony import */ var _providers_africlean_http_africlean_http_payement_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../providers/africlean-http/africlean-http-payement.provider */ "./src/providers/africlean-http/africlean-http-payement.provider.ts");
/* harmony import */ var _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../providers/africlean-config/africlean-config.provider */ "./src/providers/africlean-config/africlean-config.provider.ts");
/* harmony import */ var _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../providers/utils/commonEnum */ "./src/providers/utils/commonEnum.ts");


// tslint:disable-next-line: max-line-length










let AbonnementPage = class AbonnementPage {
    constructor(modal, httpSubscribe, observablesProvider, payementProvider, session, config) {
        this.modal = modal;
        this.httpSubscribe = httpSubscribe;
        this.observablesProvider = observablesProvider;
        this.payementProvider = payementProvider;
        this.session = session;
        this.config = config;
        /**
         * Gère l'affichage du text de resiliation
         */
        this.displayResiliation = false;
        /**
         * Test si les abonnements en cours de validation ou de resiliation sont présent
         */
        this.subscribeValidateOrResiliate = false;
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
        this.nbrPaiementPerPage = 5;
        /**
         * La limite pour récuperer les données
         */
        this.limit = 10;
        /**
         * Données à ignorer
         */
        this.skip = 0;
    }
    ngOnInit() {
        this.session.getItem('userId').then((userId) => {
            const url = 'abonnement/user-subscribe/' + userId;
            this.loadSubscribes(url);
            this.observablesProvider.subscriptionRequest.subscribe((isRequest) => {
                if (isRequest) {
                    this.loadSubscribes(url);
                }
            });
        });
        this.getUser();
        this.getPayements('abonnement');
        this.observablesProvider.loadPayement.subscribe((result) => {
            this.payements = [];
            this.payementsTMP = [];
            this.positions = [];
            this.getPayements('abonnement');
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
        });
    }
    /**
     * Recharge les abonnements
     * @param url url
     */
    loadSubscribes(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //   this.getUser();
            this.httpSubscribe.getSubscribeByUser(url).subscribe((subscribes) => {
                this.subscribes = subscribes;
                // Tester si les abonnements en cours de validation ou en cours de resilitaion sont présent
                if (this.subscribes.enCours.length !== 0 || this.subscribes.enCoursResiliation.length !== 0) {
                    this.subscribeValidateOrResiliate = true;
                }
            });
        });
    }
    /**
     * Permet d'afficher le texte de résiliaion
     */
    displayText() {
        this.displayResiliation = true;
    }
    /**
     * Annuler la résiliation
     */
    annuler() {
        this.displayResiliation = false;
    }
    /**
     * Permet de s'abonner en fournissant l'adresse du lieu
     */
    subscription() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const props = {
                source: 'consult-abonnement',
                displayForm: true
            };
            this.modal.create(src_app_components_africlean_abonnement_subscription_africlean_abonnement_subscription_component__WEBPACK_IMPORTED_MODULE_2__["AfricleanAbonnementSubscriptionComponent"], 'my-custom-modal-css', props);
        });
    }
    /**
     * La liste des abonnements valider
     */
    abonnementsValidateList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.subscribes.validee.length !== 0) {
                this.modal.create(src_app_components_africlean_abonnement_list_africlean_abonnement_list_component__WEBPACK_IMPORTED_MODULE_3__["AfricleanAbonnementListComponent"], 'my-custom-modal-css');
            }
        });
    }
    /**
     * La liste des abonnements en cours de validation
     */
    abonnementsCurrentValidateList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.subscribes.enCours.length !== 0) {
                const props = {
                    state: _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_11__["StateAdress"].IN_PROGRESS_SUBSCRIB
                };
                this.modal.create(src_app_components_africlean_abonnement_list_africlean_abonnement_list_component__WEBPACK_IMPORTED_MODULE_3__["AfricleanAbonnementListComponent"], 'my-custom-modal-css', props);
            }
        });
    }
    /**
     * La liste des abonnements en cours de resiliation
     */
    abonnementsCurrentResiliationList() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.subscribes.enCoursResiliation.length !== 0) {
                const props = {
                    state: _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_11__["StateAdress"].IN_PROGRESS_TERMINATION
                };
                this.modal.create(src_app_components_africlean_abonnement_list_africlean_abonnement_list_component__WEBPACK_IMPORTED_MODULE_3__["AfricleanAbonnementListComponent"], 'my-custom-modal-css', props);
            }
        });
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
            this.role = yield this.session.getItem('role');
            this.userId = yield this.session.getItem('userId');
            let body = {};
            let url;
            if (this.role === 5) {
                url = 'payement/paiements/client/' + this.userId;
            }
            else {
                url = 'payement/paiements/';
            }
            body = {
                limit: this.limit,
                skip: this.skip
            };
            this.payementProvider.postPaiment(url, body).subscribe((payementList) => {
                if (!this.payements && !this.payementsTMP) {
                    this.payements = [];
                    this.payementsTMP = [];
                    this.positions = [];
                }
                this.payements = this.payements.concat(payementList.slice());
                this.payementsTMP = this.payementsTMP.concat(payementList.slice());
            });
        });
    }
};
AbonnementPage.ctorParameters = () => [
    { type: src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanModalProvider"] },
    { type: src_providers_africlean_http_africlean_http_subscribe_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpSubscribeProvider"] },
    { type: src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"] },
    { type: _providers_africlean_http_africlean_http_payement_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanHttpPayementProvider"] },
    { type: src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"] },
    { type: _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_10__["AfricleanConfigProvider"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AbonnementPage.prototype, "payements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AbonnementPage.prototype, "payementsTMP", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AbonnementPage.prototype, "payementsEmploye", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], AbonnementPage.prototype, "payementsTMPEmploye", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AbonnementPage.prototype, "currentPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AbonnementPage.prototype, "nbrPaiementPerPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_africlean_user_model__WEBPACK_IMPORTED_MODULE_8__["AfricleanUserModel"])
], AbonnementPage.prototype, "userTMP", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AbonnementPage.prototype, "role", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AbonnementPage.prototype, "userId", void 0);
AbonnementPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-abonnement',
        template: __webpack_require__(/*! raw-loader!./abonnement.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/abonnement/abonnement.page.html"),
        styles: [__webpack_require__(/*! ./abonnement.page.scss */ "./src/app/pages/abonnement/abonnement.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanModalProvider"],
        src_providers_africlean_http_africlean_http_subscribe_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpSubscribeProvider"],
        src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanObservablesProvider"],
        _providers_africlean_http_africlean_http_payement_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanHttpPayementProvider"],
        src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"],
        _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_10__["AfricleanConfigProvider"]])
], AbonnementPage);



/***/ })

}]);
//# sourceMappingURL=pages-abonnement-abonnement-module-es2015.js.map