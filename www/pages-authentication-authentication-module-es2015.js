(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentication/authentication.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"container\">\r\n\r\n    <div class=\"content-page\">\r\n\r\n        <div *ngIf=\"!counts\">\r\n\r\n                <!-- Header de la page -->\r\n            <div class=\"header\">\r\n                <ion-grid>\r\n                    <ion-row class=\"title\">\r\n                        <!-- <span>{{ 'PAGES.AUTHENTICATION.TITLE' | translate }}</span> -->\r\n                        <span>Plus que jamais pour votre propreté</span>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n\r\n            <!-- Message de confirmation après inscription -->\r\n            <africlean-info-bulle *ngIf=\"displayRegistrationConfirmation\" [type]=\"'validate'\" \r\n                                [message]=\"'Votre enrégistrement a bien été pris en compte'\">\r\n\r\n            </africlean-info-bulle>\r\n            \r\n            <ion-grid class=\"formulaire\">\r\n\r\n            <!-- Champ d'identification -->\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\">\r\n\r\n                        <ion-grid>\r\n                            <ion-col size=\"12\">\r\n                                <ion-grid>\r\n\r\n                                </ion-grid>\r\n                                <ion-label color='primary' position=\"stacked\">\r\n                                    {{ 'PAGES.AUTHENTICATION.LABELS.ID' | translate }}\r\n                                </ion-label>\r\n                            </ion-col>\r\n\r\n                            <ion-col size=\"12\">\r\n                              <!--  <div>\r\n                                    <ion-input clearInput [(ngModel)]=\"login\" type='text'>\r\n                                    </ion-input>\r\n                                </div>-->\r\n                                <div class=\"input-phone\">\r\n                                    <input type=\"text\"\r\n                                           class=\"phone\"\r\n                                           [(ngModel)]=\"login\"\r\n                                           ng2TelInput\r\n                                           [ng2TelInputOptions]=\"{initialCountry: 'gn'}\"\r\n                                           (ng2TelOutput)=\"getNumber($event)\"\r\n                                           (intlTelInputObject)=\"telInputObject($event)\"\r\n                                           (countryChange)=\"onCountryChange($event)\"\r\n                                           placeholder=\" \"\r\n                                           [ngClass]=\"{\r\n                                            'input-style-width': isWeb == true\r\n                                            }\"/>\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-grid>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n                <!-- Champ de mot de passe -->\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\">\r\n                        <ion-grid>\r\n                            <ion-col size=\"12\">\r\n                                <ion-label color='primary' position=\"stacked\" style=\"margin-left: 1rem!important;\">\r\n                                    {{ 'PAGES.AUTHENTICATION.LABELS.PASSWORD' | translate }}\r\n                                </ion-label>\r\n                            </ion-col>\r\n\r\n                            <ion-col size=\"12\">\r\n                                <div style=\"margin-left: 2rem!important;\">\r\n                                    <app-show-hide-password>\r\n                                        <ion-input [(ngModel)]=\"password\" type='password'>\r\n                                        </ion-input>\r\n                                    </app-show-hide-password>\r\n                                   <!-- <ion-input clearInput [(ngModel)]=\"password\" type='password'>\r\n                                    </ion-input>-->\r\n                                </div>\r\n                            </ion-col>\r\n                        </ion-grid>\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n\r\n                    <ion-col size=\"12\">\r\n\r\n                        <div class=\"forgot-password\" (click)=\"forgotPassword()\">\r\n                            \r\n                            {{'PAGES.AUTHENTICATION.FORGOT_PASSWORD' | translate }} ?\r\n\r\n                        </div>\r\n\r\n                        <div class=\"buttons\">\r\n                            <!-- Bouton de confirmation -->\r\n                            <africlean-small-button [theme]=\"'blue'\" [title]=\"'CONNEXION'\"\r\n                                            (clickButton)=\"sendAuthent()\">\r\n                            </africlean-small-button>\r\n\r\n                            <div class=\"separate\"></div>\r\n                            \r\n                            <!-- Bouton d'inscription -->\r\n                            <africlean-small-button [theme]=\"'orange'\" [title]=\"'INSCRIPTION'\"\r\n                                            (clickButton)=\"goRegistration()\">\r\n                            </africlean-small-button>\r\n                        </div>\r\n\r\n                    </ion-col>\r\n\r\n                </ion-row>\r\n\r\n            </ion-grid>\r\n\r\n            <!-- Gestion des erreurs -->\r\n            <div text-center>\r\n                <ion-spinner [hidden]='hideSpinner'></ion-spinner>\r\n            </div>\r\n            <africlean-info-bulle *ngIf='errorMsg' [type]=\"'error'\" \r\n                                [message]=\"errorMsg\">\r\n\r\n            </africlean-info-bulle>\r\n\r\n        </div>\r\n\r\n        <!-- Boutons Accès espace -->\r\n        <div *ngIf=\"counts\" class=\"choice-space\">\r\n\r\n            <div class=\"button\" *ngFor=\"let count of counts\">\r\n                \r\n                <africlean-small-button [theme]=\"'orange'\" [title]=\"'accèder à mon espace ' + count.role\"\r\n                                        (clickButton)=\"goTo(count.role)\">\r\n                </africlean-small-button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        \r\n    </div>\r\n      \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication.page */ "./src/app/pages/authentication/authentication.page.ts");
/* harmony import */ var ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-tel-input */ "./node_modules/ng2-tel-input/esm2015/ng2-tel-input.js");










const routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPage"]
    }
];
let AuthenticationPageModule = class AuthenticationPageModule {
};
AuthenticationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            ng2_tel_input__WEBPACK_IMPORTED_MODULE_9__["Ng2TelInputModule"]
        ],
        declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPage"]]
    })
], AuthenticationPageModule);



/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .content-page {\n  background-color: var(--ion-color-gris);\n  height: 100vh;\n  padding-bottom: 35rem;\n}\n.container .content-page .header {\n  margin-top: 8vh;\n}\n.container .content-page .header span {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-bottom: 2rem;\n}\n.container .content-page .header .title span {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2rem;\n  font-size: 1.2rem;\n  text-align: center;\n  font-style: italic;\n}\n.container .content-page .formulaire {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 0rem;\n  margin-bottom: 10vh;\n}\n.container .content-page .formulaire ion-label {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  color: var(--ion-color-text-purple-darke);\n}\n.container .content-page .formulaire ion-input {\n  max-width: 20rem;\n  width: 70vw;\n  height: 2.6rem;\n  border-radius: 0.5rem;\n  box-shadow: 9px 8px 20px rgba(0, 0, 0, 0.2);\n  color: var(--ion-color-grey);\n  --padding-start: 1rem;\n  margin-top: 0.5rem;\n}\n.container .content-page .formulaire ion-input span {\n  margin-left: 1rem;\n}\n.container .content-page .formulaire input {\n  border: none;\n  background-color: #f9f9f9;\n  min-width: 70vw;\n  min-height: 2.6rem;\n  border-radius: 0.5rem;\n  box-shadow: 9px 8px 20px rgba(0, 0, 0, 0.2);\n  color: var(--ion-color-grey);\n  --padding-start: 1rem;\n}\n.container .content-page .formulaire input.input-style-width {\n  min-width: 20rem;\n}\n.container .content-page .formulaire .forgot-password {\n  color: var(--ion-color-primary);\n  margin-bottom: 1rem;\n  font-size: 1rem;\n  text-align: center;\n  cursor: pointer;\n}\n.container .content-page .formulaire .buttons {\n  margin-right: 2rem;\n  margin-left: 2rem;\n}\n.container .content-page .formulaire .separate {\n  margin-top: 1rem;\n}\n.container .content-page .choice-space {\n  padding-top: 50vh;\n  display: -webkit-box;\n  display: flex;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: auto;\n}\n.container .content-page .choice-space .button {\n  margin-bottom: 10vh;\n}\n.phone {\n  max-width: 20rem;\n  width: 70vw;\n  height: 2.6rem;\n  border-radius: 0.5rem;\n  box-shadow: 9px 8px 20px rgba(0, 0, 0, 0.2);\n  color: var(--ion-color-grey);\n  --padding-start: 1rem;\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vQzpcXFVzZXJzXFx0bWRpYWxsb1xcRG9jdW1lbnRzXFxEb2N1bWVudHMgcGVyc29cXG1hdXJpQ2xlYW4tZnJvbnRcXG1hdXJpQ2xlYW4tZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoZW50aWNhdGlvblxcYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFFRSx1Q0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ0RKO0FER0k7RUFDRSxlQUFBO0FDRE47QURJTTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FETVE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNKVjtBRFNJO0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNSTjtBRFVNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNSUjtBRFdNO0VBRUUsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNWUjtBRFlRO0VBQ0UsaUJBQUE7QUNWVjtBRGNNO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUNaUjtBRGNRO0VBQ0UsZ0JBQUE7QUNaVjtBRGdCTTtFQUVFLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDZlI7QURrQk07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDaEJSO0FEbUJNO0VBQ0UsZ0JBQUE7QUNqQlI7QURzQkk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7QUNwQk47QURzQk07RUFDRSxtQkFBQTtBQ3BCUjtBRDBCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDdkJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgLmNvbnRlbnQtcGFnZSB7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNXJlbTtcclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogOHZoO1xyXG4gICAgIC8vIG1hcmdpbi1ib3R0b206IC0ycmVtO1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtdWxhaXJlIHtcclxuXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbi10b3A6IDByZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcblxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGV4dC1wdXJwbGUtZGFya2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taW5wdXQge1xyXG5cclxuICAgICAgICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIHdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIGhlaWdodDogMi42cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiA5cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICAgICBtaW4td2lkdGg6IDcwdnc7XHJcbiAgICAgICAgbWluLWhlaWdodDogMi42cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiA5cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JleSk7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xyXG5cclxuICAgICAgICAmLmlucHV0LXN0eWxlLXdpZHRoIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMjByZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZm9yZ290LXBhc3N3b3JkIHtcclxuXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VwYXJhdGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNob2ljZS1zcGFjZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1MHZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwdmg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5waG9uZSB7XHJcbiAgbWF4LXdpZHRoOiAyMHJlbTtcclxuICB3aWR0aDogNzB2dztcclxuICBoZWlnaHQ6IDIuNnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYm94LXNoYWRvdzogOXB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuIiwiLmNvbnRhaW5lciAuY29udGVudC1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyaXMpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nLWJvdHRvbTogMzVyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDh2aDtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuaGVhZGVyIHNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmhlYWRlciAudGl0bGUgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDByZW07XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmZvcm11bGFpcmUgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXRleHQtcHVycGxlLWRhcmtlKTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSBpb24taW5wdXQge1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICB3aWR0aDogNzB2dztcbiAgaGVpZ2h0OiAyLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogOXB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmZvcm11bGFpcmUgaW9uLWlucHV0IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiA3MHZ3O1xuICBtaW4taGVpZ2h0OiAyLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNoYWRvdzogOXB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmV5KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5mb3JtdWxhaXJlIGlucHV0LmlucHV0LXN0eWxlLXdpZHRoIHtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSAuZm9yZ290LXBhc3N3b3JkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuZm9ybXVsYWlyZSAuYnV0dG9ucyB7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG4uY29udGFpbmVyIC5jb250ZW50LXBhZ2UgLmZvcm11bGFpcmUgLnNlcGFyYXRlIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5jb250YWluZXIgLmNvbnRlbnQtcGFnZSAuY2hvaWNlLXNwYWNlIHtcbiAgcGFkZGluZy10b3A6IDUwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmNvbnRhaW5lciAuY29udGVudC1wYWdlIC5jaG9pY2Utc3BhY2UgLmJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwdmg7XG59XG5cbi5waG9uZSB7XG4gIG1heC13aWR0aDogMjByZW07XG4gIHdpZHRoOiA3MHZ3O1xuICBoZWlnaHQ6IDIuNnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3gtc2hhZG93OiA5cHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZXkpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_africlean_control_fields_africlean_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/africlean-control-fields/africlean-control-authentication.provider */ "./src/providers/africlean-control-fields/africlean-control-authentication.provider.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var src_providers_africlean_websocket_africlean_websocket_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/providers/africlean-websocket/africlean-websocket.provider */ "./src/providers/africlean-websocket/africlean-websocket.provider.ts");
/* harmony import */ var src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/providers/africlean-modal/africlean-modal.provider */ "./src/providers/africlean-modal/africlean-modal.provider.ts");
/* harmony import */ var src_app_components_africlean_forgot_password_africlean_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/africlean-forgot-password/africlean-forgot-password.component */ "./src/app/components/africlean-forgot-password/africlean-forgot-password.component.ts");
/* harmony import */ var src_providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/providers/africlean-config/africlean-config.provider */ "./src/providers/africlean-config/africlean-config.provider.ts");













let AuthenticationPage = 
/**
 * Page d'authentification iOS via SECmobile
 */
class AuthenticationPage {
    /**
     * Constructeur de la page
     */
    constructor(navCtrl, controlField, translateService, httpUser, route, session, observableProvider, websocket, config, modal) {
        this.navCtrl = navCtrl;
        this.controlField = controlField;
        this.translateService = translateService;
        this.httpUser = httpUser;
        this.route = route;
        this.session = session;
        this.observableProvider = observableProvider;
        this.websocket = websocket;
        this.config = config;
        this.modal = modal;
        /**
         * Etat du spinner de chargement
         */
        this.hideSpinner = true;
        /**
         * Afficher un message de confirmation une fois enregistrer
         */
        this.displayRegistrationConfirmation = false;
        this.phoneCode = '224';
    }
    /**
     * Initialisation de la page
     */
    ngOnInit() {
        // Test la platforme
        this.isWeb = this.config.isWeb();
        this.route.queryParams.subscribe((params) => {
            this.displayRegistrationConfirmation = params.displayRegistrationConfirmation;
        });
    }
    /**
     * Lance l'authentification
     */
    sendAuthent() {
        const fields = {
            login: this.login,
            password: this.password
        };
        const result = this.controlField.authentication(fields);
        this.hideSpinner = result.hideSpinner;
        if (result.message != null) {
            this.getMessage(result.message);
        }
        else {
            this.errorMsg = result.message;
            fields.login = '+' + this.phoneCode + ' ' + this.login.replace(' ', '');
            this.httpUser.login('login/login-user', fields.login, fields.password).subscribe((user) => {
                this.goToHome(user);
            });
        }
    }
    /**
     * Renvoie le bon message
     * @param message message à afficher
     */
    getMessage(message) {
        this.translateService.get(message).subscribe((res) => {
            this.errorMsg = res;
        });
    }
    /**
     * Permet de créer une session pour l'utilisateur
     */
    setSession() {
    }
    /**
     * Rédirige vers l'inscription
     */
    goRegistration() {
        this.navCtrl.navigateForward('registration');
    }
    /**
     * Rédirige vers la récuperation du mot de passe
     */
    forgotPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.modal.create(src_app_components_africlean_forgot_password_africlean_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["AfricleanForgotPasswordComponent"], 'my-custom-modal-css');
        });
    }
    /**
     * Récupère le compte correspondant à l'espace
     * @param space Rôle
     */
    goTo(space) {
        let userId;
        let role;
        this.counts.forEach(userLog => {
            if (userLog.role === space) {
                userId = userLog.id;
                role = userLog.role;
            }
        });
        this.httpUser.loged('login/user-loged/', userId).subscribe((user) => {
            this.setSessionVariables(user, role).then((_) => {
                // Signale une nouvelle session
                this.observableProvider.isAuth.emit(true);
                this.navCtrl.navigateForward('home');
            });
        });
    }
    /**
     * Renseigne les variables de session
     * @param user Utilisateur connecté
     * @param role
     */
    setSessionVariables(user, role) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.session.setItem('user', user);
            yield this.session.setItem('userId', user.id);
            yield this.session.setItem('login', user.phoneNumber);
            yield this.session.setItem('password', user.password);
            yield this.session.setItem('role', role);
            yield this.session.setItem('isSubscribe', user.isSubscribe);
        });
    }
    /**
     * Rédirige l'utilisateur vers le bon espace
     * @param userLog User log
     */
    goToHome(userLog) {
        if (userLog.length === 0) {
            // le compte n'existe pas
            this.getMessage('PAGES.AUTHENTICATION.ERROR.NOT_EXIST_COUNT');
            this.hideSpinner = true;
        }
        if (userLog.length > 0) {
            const role = userLog[0].role;
            // Dans le cas ou l'utilisateur à un seul compte
            if (userLog.length === 1) {
                const user = userLog[0].user;
                this.setSessionVariables(user, role).then((_) => {
                    // Signale une nouvelle session
                    this.observableProvider.isAuth.emit(true);
                    this.navCtrl.navigateForward('home');
                });
                /*  this.httpUser.loged('login/user-loged/', userLog[0].id).subscribe(
                      (user) => {
                          this.setSessionVariables(user, role).then(
                              (_) => {
                                  // Signale une nouvelle session
                                  this.observableProvider.isAuth.emit(true);
                                  this.navCtrl.navigateForward('home');
                              }
                          );
                      }
                  );*/
            }
            // Dans le cas ou l'utilisateur à deux comptes. Donc il faut donner le choix
            // a l'utilisateur de choisir entre les deux comptes
            if (userLog.length === 2) {
                // donner le choix
                this.counts = userLog;
            }
        }
    }
    /**
     * Envoi le userId au serveur
     */
    setPseudoToServer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const userId = yield this.session.getItem('userId');
            this.websocket.emit('newClient', userId);
            this.websocket.receive('user_state').subscribe((res) => {
            });
        });
    }
    _filter(value, list) {
        const filterValue = value;
        return list.filter(option => option.dialCode.indexOf(filterValue) === 0);
    }
    telInputObject(obj) {
        const list = obj.p;
        const country = this._filter(this.phoneCode.replace('+', ''), list);
        if (country.length > 0) {
            obj.setCountry(country[0].iso2);
            this.phoneCode = country[0].dialCode;
        }
    }
    getNumber(event) {
    }
    onCountryChange(event) {
        this.phoneCode = event.dialCode;
    }
};
AuthenticationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_africlean_control_fields_africlean_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanControlAuthenticationProvider"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"] },
    { type: src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_8__["AfricleanObservablesProvider"] },
    { type: src_providers_africlean_websocket_africlean_websocket_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanWebsocketProvider"] },
    { type: src_providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_12__["AfricleanConfigProvider"] },
    { type: src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_10__["AfricleanModalProvider"] }
];
AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'page-authentication',
        template: __webpack_require__(/*! raw-loader!./authentication.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html"),
        styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/pages/authentication/authentication.page.scss")]
    })
    /**
     * Page d'authentification iOS via SECmobile
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_africlean_control_fields_africlean_control_authentication_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanControlAuthenticationProvider"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
        src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanHttpUserProvider"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanSessionProvider"],
        src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_8__["AfricleanObservablesProvider"],
        src_providers_africlean_websocket_africlean_websocket_provider__WEBPACK_IMPORTED_MODULE_9__["AfricleanWebsocketProvider"],
        src_providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_12__["AfricleanConfigProvider"],
        src_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_10__["AfricleanModalProvider"]])
], AuthenticationPage);



/***/ })

}]);
//# sourceMappingURL=pages-authentication-authentication-module-es2015.js.map