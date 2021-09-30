(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"home-page\" >\r\n  \r\n  <div class=\"content\" *ngIf=\"role === 5\">\r\n\r\n    <!-- Correspond au nom de l'application -->\r\n    <div class=\"presentation\">\r\n      <span class=\"title\">{{ 'PAGES.HOME.WELCOME_TITLE' | translate }}</span>\r\n      <span class=\"name\" *ngIf=\"user\">\r\n        {{ user.lastName | uppercase }} {{user.firstName }}\r\n      </span>\r\n      <span class=\"subTitle\">{{ 'PAGES.HOME.WELCOME_SUBTITLE' | translate }}</span>\r\n    </div>\r\n\r\n    <!-- Correspond à l'ensemble des boutons de la page d'acceuil-->\r\n    <ion-grid fixed>\r\n      <ion-row class=\"first-row\" *ngIf=\"isWeb\">\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Abonnement\" -->\r\n          <africlean-button\r\n            [title]=\"'PAGES.HOME.CLIENT_SPACE.ABO.TITLE' | translate\"\r\n            [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.ABO.SUB_TITLE' | translate\"\r\n            [icon]=\"'abo'\"\r\n            [theme]=\"'consult-abonnement'\"\r\n            [isWeb]=\"isWeb\"\r\n            (clickButton)=\"goToPage('consult-abonnement')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n\r\n          <!-- Bouton \"Incidents\" -->\r\n          <africlean-button\r\n            [title]=\"'PAGES.HOME.CLIENT_SPACE.INCIDENT.TITLE' | translate\"\r\n            [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.INCIDENT.SUB_TITLE' | translate\"\r\n            [icon]=\"'incident'\"\r\n            [theme]=\"'manage-incidents'\"\r\n            [isWeb]=\"isWeb\"\r\n            (clickButton)=\"goToPage('report-incident')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Jours de passage\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.CLIENT_SPACE.PASSAGE.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.PASSAGE.SUB_TITLE' | translate\"\r\n                  [icon]=\"'service'\"\r\n                  [theme]=\"'manage-passage'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-service')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Informations\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.CLIENT_SPACE.INFORMATIONS.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.INFORMATIONS.SUB_TITLE' | translate\"\r\n                  [icon]=\"'informations'\"\r\n                  [theme]=\"'consult-informations'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-informations')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"first-row\" *ngIf=\"!isWeb\">\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Abonnement\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.CLIENT_SPACE.ABO.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.ABO.SUB_TITLE' | translate\"\r\n                  [icon]=\"'abo'\"\r\n                  [theme]=\"'consult-abonnement'\"\r\n                  [isWeb]=\"!isWeb\"\r\n                  (clickButton)=\"goToPage('consult-abonnement')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n          <!-- Bouton \"Incidents\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.CLIENT_SPACE.INCIDENT.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.INCIDENT.SUB_TITLE' | translate\"\r\n                  [icon]=\"'incident'\"\r\n                  [theme]=\"'manage-incidents'\"\r\n                  [isWeb]=\"!isWeb\"\r\n                  (clickButton)=\"goToPage('report-incident')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"first-row\" *ngIf=\"!isWeb\">\r\n\r\n        <ion-col>\r\n          <!-- Bouton \"Jours de passage\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.CLIENT_SPACE.PASSAGE.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.PASSAGE.SUB_TITLE' | translate\"\r\n                  [icon]=\"'service'\"\r\n                  [theme]=\"'manage-passage'\"\r\n                  [isWeb]=\"!isWeb\"\r\n                  (clickButton)=\"goToPage('consult-service')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Informations\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.CLIENT_SPACE.INFORMATIONS.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.CLIENT_SPACE.INFORMATIONS.SUB_TITLE' | translate\"\r\n                  [icon]=\"'informations'\"\r\n                  [theme]=\"'consult-informations'\"\r\n                  [isWeb]=\"!isWeb\"\r\n                  (clickButton)=\"goToPage('consult-informations')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n <!-- Menu du manager-->\r\n\r\n\r\n  <div class=\"content\" *ngIf=\"role === 2 || role === 1\">\r\n\r\n    <!-- Correspond au nom de l'application -->\r\n    <div class=\"presentation\">\r\n      <span class=\"title\">{{ 'PAGES.HOME.WELCOME_TITLE' | translate }}</span>\r\n      <span class=\"name\" *ngIf=\"user\">\r\n        {{ user.lastName | uppercase }} {{user.firstName }}\r\n      </span>\r\n      <span class=\"subTitle\">{{ 'PAGES.HOME.WELCOME_SUBTITLE' | translate }}</span>\r\n    </div>\r\n\r\n    <!-- Correspond à l'ensemble des boutons de la page d'acceuil-->\r\n    <ion-grid fixed>\r\n      <ion-row class=\"first-row\">\r\n<!--        <ion-col *ngIf=\"role === 1\">\r\n          <africlean-button\r\n                  [title]=\"'Etablissements'\"\r\n                  [subTitle]=\"'Gestions des établissements' | translate\"\r\n                  [icon]=\"'actionnaire'\"\r\n                  [theme]=\"'consult-actionnaire'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-client')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>-->\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Abonnement\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.ABO.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.ABO.SUB_TITLE' | translate\"\r\n                  [icon]=\"'abo'\"\r\n                  [theme]=\"'consult-abonnement'\"\r\n                  (clickButton)=\"goToPage('consult-subscribe-management')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Incidents\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.INCIDENT.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.INCIDENT.SUB_TITLE' | translate\"\r\n                  [icon]=\"'incident'\"\r\n                  [theme]=\"'manage-incidents'\"\r\n                  (clickButton)=\"goToPage('consult-incident-management')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Jours de passage\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.PASSAGE.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.PASSAGE.SUB_TITLE' | translate\"\r\n                  [icon]=\"'service'\"\r\n                  [theme]=\"'manage-passage'\"\r\n                  (clickButton)=\"goToPage('consult-service-management')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.CLIENT.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.CLIENT.SUB_TITLE' | translate\"\r\n                  [icon]=\"'users'\"\r\n                  [theme]=\"'consult-client'\"\r\n                  (clickButton)=\"goToPage('consult-client')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Employés\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.EMPLOYE.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.EMPLOYE.SUB_TITLE' | translate\"\r\n                  [icon]=\"'employes'\"\r\n                  [theme]=\"'consult-employe'\"\r\n                  (clickButton)=\"goToPage('consult-employe')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n      <!--  <ion-col>\r\n\r\n          &lt;!&ndash; Bouton \"Users\" &ndash;&gt;\r\n          <africlean-button\r\n                  [title]=\"'Actionnaires'\"\r\n                  [subTitle]=\"'Gestions des actionnaires' | translate\"\r\n                  [icon]=\"'actionnaire'\"\r\n                  [theme]=\"'consult-actionnaire'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-client')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>-->\r\n\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Informations\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.INFORMATIONS.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.INFORMATIONS.SUB_TITLE' | translate\"\r\n                  [icon]=\"'informations'\"\r\n                  [theme]=\"'consult-informations'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-informations')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n          <!-- Bouton \"Finance\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.FINANCES.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.FINANCES.SUB_TITLE' | translate\"\r\n                  [icon]=\"'finance'\"\r\n                  [theme]=\"'consult-finance'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-finance')\">\r\n          </africlean-button>\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <!-- Bouton \"Prospection\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.COMMERCIAL_SPACE.PROSPECTION.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.COMMERCIAL_SPACE.PROSPECTION.SUB_TITLE' | translate\"\r\n                  [icon]=\"'prospection'\"\r\n                  [theme]=\"'consult-prospection'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-prospection')\">\r\n          </africlean-button>\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <africlean-button\r\n                  [title]=\"'Logistiques'\"\r\n                  [subTitle]=\"'Gestion de la logistique'\"\r\n                  [icon]=\"'logistics'\"\r\n                  [theme]=\"'consult-logistic'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-logistic')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <!-- Bouton \"configuration\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.CONFIGURATION.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.CONFIGURATION.SUB_TITLE' | translate\"\r\n                  [icon]=\"'configuration'\"\r\n                  [theme]=\"'consult-configuration'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-configuration')\">\r\n          </africlean-button>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n\r\n\r\n  <!-- Menu du manager-->\r\n  <div class=\"content\" *ngIf=\"role === 3\">\r\n\r\n    <!-- Correspond au nom de l'application -->\r\n    <div class=\"presentation\">\r\n      <span class=\"title\">{{ 'PAGES.HOME.WELCOME_TITLE' | translate }}</span>\r\n      <span class=\"name\" *ngIf=\"user\">\r\n        {{ user.lastName | uppercase }} {{user.firstName }}\r\n      </span>\r\n      <span class=\"subTitle\">{{ 'PAGES.HOME.WELCOME_SUBTITLE' | translate }}</span>\r\n    </div>\r\n\r\n    <!-- Correspond à l'ensemble des boutons de la page d'acceuil-->\r\n    <ion-grid fixed>\r\n      <ion-row class=\"first-row\">\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Abonnement\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.ABO.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.ABO.SUB_TITLE' | translate\"\r\n                  [icon]=\"'abo'\"\r\n                  [theme]=\"'consult-abonnement'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-subscribe-management')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <!-- Bouton \"Finance\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.FINANCES.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.FINANCES.SUB_TITLE' | translate\"\r\n                  [icon]=\"'finance'\"\r\n                  [theme]=\"'consult-finance'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-finance')\">\r\n          </africlean-button>\r\n        </ion-col>\r\n\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Jours de passage\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.PASSAGE.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.PASSAGE.SUB_TITLE' | translate\"\r\n                  [icon]=\"'service'\"\r\n                  [theme]=\"'manage-passage'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-service')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Incidents\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.INCIDENT.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.INCIDENT.SUB_TITLE' | translate\"\r\n                  [icon]=\"'incident'\"\r\n                  [theme]=\"'manage-incidents'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-incident-management')\">\r\n          </africlean-button>\r\n\r\n\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Users\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.CLIENT.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.CLIENT.SUB_TITLE' | translate\"\r\n                  [icon]=\"'users'\"\r\n                  [theme]=\"'consult-client'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-client')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n          <!-- Bouton \"Prospection\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.COMMERCIAL_SPACE.PROSPECTION.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.COMMERCIAL_SPACE.PROSPECTION.SUB_TITLE' | translate\"\r\n                  [icon]=\"'prospection'\"\r\n                  [theme]=\"'consult-prospection'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-prospection')\">\r\n          </africlean-button>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <!-- Bouton \"Informations\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.INFORMATIONS.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.INFORMATIONS.SUB_TITLE' | translate\"\r\n                  [icon]=\"'informations'\"\r\n                  [theme]=\"'consult-informations'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-informations')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- Menu intervenant-->\r\n  <div class=\"content\" *ngIf=\"role === 4\">\r\n\r\n    <!-- Correspond au nom de l'application -->\r\n    <div class=\"presentation\">\r\n      <span class=\"title\">{{ 'PAGES.HOME.WELCOME_TITLE' | translate }}</span>\r\n      <span class=\"name\" *ngIf=\"user\">\r\n        {{ user.lastName | uppercase }} {{user.firstName }}\r\n      </span>\r\n      <span class=\"subTitle\">{{ 'PAGES.HOME.WELCOME_SUBTITLE' | translate }}</span>\r\n    </div>\r\n\r\n    <!-- Correspond à l'ensemble des boutons de la page d'acceuil-->\r\n    <ion-grid fixed>\r\n      <ion-row class=\"first-row\">\r\n        <!-- Bouton \"Abonnement\" -->\r\n        <!--  <ion-col>\r\n                <africlean-button\r\n                        [title]=\"'PAGES.HOME.MANAGER_SPACE.ABO.TITLE' | translate\"\r\n                        [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.ABO.SUB_TITLE' | translate\"\r\n                        [icon]=\"'abo'\"\r\n                        [theme]=\"'consult-abonnement'\"\r\n                        [isWeb]=\"isWeb\"\r\n                        (clickButton)=\"goToPage('consult-subscribe-management')\">\r\n                </africlean-button>\r\n\r\n              </ion-col>-->\r\n        <ion-col>\r\n          <!-- Bouton \"Intervention\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.INTERVENTION_SPACE.INTERVENTION.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.INTERVENTION_SPACE.INTERVENTION.SUB_TITLE' | translate\"\r\n                  [icon]=\"'intervention'\"\r\n                  [theme]=\"'consult-intervention'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-intervention')\">\r\n          </africlean-button>\r\n        </ion-col>\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Incidents\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.INCIDENT.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.INCIDENT.SUB_TITLE' | translate\"\r\n                  [icon]=\"'incident'\"\r\n                  [theme]=\"'manage-incidents'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-incident-management')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Jours de passage\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.PASSAGE.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.PASSAGE.SUB_TITLE' | translate\"\r\n                  [icon]=\"'service'\"\r\n                  [theme]=\"'manage-passage'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-service')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n\r\n        <ion-col>\r\n\r\n          <!-- Bouton \"Informations\" -->\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.INFORMATIONS.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.INFORMATIONS.SUB_TITLE' | translate\"\r\n                  [icon]=\"'informations'\"\r\n                  [theme]=\"'consult-informations'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-informations')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>\r\n <!--       <ion-col>\r\n\r\n          <africlean-button\r\n                  [title]=\"'PAGES.HOME.MANAGER_SPACE.CLIENT.TITLE' | translate\"\r\n                  [subTitle]=\"'PAGES.HOME.MANAGER_SPACE.CLIENT.SUB_TITLE' | translate\"\r\n                  [icon]=\"'users'\"\r\n                  [theme]=\"'consult-client'\"\r\n                  [isWeb]=\"isWeb\"\r\n                  (clickButton)=\"goToPage('consult-client')\">\r\n          </africlean-button>\r\n\r\n        </ion-col>-->\r\n\r\n\r\n      </ion-row>\r\n\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");









let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-page .content {\n  margin-top: 4vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.home-page .content .presentation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 4rem;\n}\n.home-page .content .presentation .logo {\n  width: 4rem;\n  height: 4rem;\n  margin-bottom: 1rem;\n}\n.home-page .content .presentation .title {\n  font-size: 1.5rem;\n  font-family: \"ExcellenceInMotion-Bold\";\n  font-weight: bold;\n  letter-spacing: 0.125rem;\n  margin-bottom: 1rem;\n}\n.home-page .content .presentation .subTitle {\n  color: var(--ion-color-green);\n  margin-top: 1rem;\n  font-size: 1.3rem;\n}\n.home-page .content .presentation .name {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.home-page .content ion-grid {\n  margin-top: 1rem;\n  padding-right: 1rem;\n  padding-left: 1rem;\n}\n.home-page .content ion-grid ion-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBRUksZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDSFI7QURLUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtBQ0haO0FETVk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTGhCO0FEU1k7RUFFSSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDUmhCO0FEWVk7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNWaEI7QURjWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNaaEI7QURnQlE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNmWjtBRGlCWTtFQUVJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsbUJBQUE7QUNoQmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlIGRlIGxhIHBhZ2UgaG9tZVxyXG4uaG9tZS1wYWdlIHtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAucHJlc2VudGF0aW9ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIERlc2lnbiBwb3VyIGxlIGxvZ29cclxuICAgICAgICAgICAgLmxvZ297XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIERlc2lnbiBwb3VyIGxlIHRpdHJlXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0V4Y2VsbGVuY2VJbk1vdGlvbi1Cb2xkJztcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRGVzaWduIHBvdXIgbGUgc291cy10aXRyZVxyXG4gICAgICAgICAgICAuc3ViVGl0bGV7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRGVzaWduIHBvdXIgbGUgbm9tXHJcbiAgICAgICAgICAgIC5uYW1le1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlvbi1ncmlkIHtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWNvbCB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiLmhvbWUtcGFnZSAuY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDR2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IC5wcmVzZW50YXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA0cmVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCAucHJlc2VudGF0aW9uIC5sb2dvIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgLnByZXNlbnRhdGlvbiAudGl0bGUge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiRXhjZWxsZW5jZUluTW90aW9uLUJvbGRcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEyNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5ob21lLXBhZ2UgLmNvbnRlbnQgLnByZXNlbnRhdGlvbiAuc3ViVGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IC5wcmVzZW50YXRpb24gLm5hbWUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaG9tZS1wYWdlIC5jb250ZW50IGlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuLmhvbWUtcGFnZSAuY29udGVudCBpb24tZ3JpZCBpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/providers/africlean-session/africlean-session.provider */ "./src/providers/africlean-session/africlean-session.provider.ts");
/* harmony import */ var src_providers_africlean_alert_africlean_alert_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/providers/africlean-alert/africlean-alert.provider */ "./src/providers/africlean-alert/africlean-alert.provider.ts");
/* harmony import */ var src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/providers/africlean-observables/africlean-observables.provider */ "./src/providers/africlean-observables/africlean-observables.provider.ts");
/* harmony import */ var _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/africlean-config/africlean-config.provider */ "./src/providers/africlean-config/africlean-config.provider.ts");
/* harmony import */ var src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/providers/africlean-http/africlean-http-user.provider */ "./src/providers/africlean-http/africlean-http-user.provider.ts");
/* harmony import */ var _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/utils/commonEnum */ "./src/providers/utils/commonEnum.ts");









let HomePage = class HomePage {
    constructor(navCtrl, session, alert, config, observableProvider, userHttp) {
        this.navCtrl = navCtrl;
        this.session = session;
        this.alert = alert;
        this.config = config;
        this.observableProvider = observableProvider;
        this.userHttp = userHttp;
    }
    /**
     * Initialisation de la page
     */
    ngOnInit() {
        // On recupére l'utilisateur connecté (executé lorsque la page à été rafraichit)
        this.getUser();
        // Dés que une nouvelle Authentication est effectué, on reactualise automatique les données user
        this.observableProvider.isAuth.subscribe((isAuth) => {
            this.getUser();
        });
        // Test la platforme
        this.isWeb = this.config.isWeb();
    }
    /**
     * Récupère l'utilisateur courant
     */
    getUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.session.getItem('user');
            this.role = yield this.session.getItem('role');
        });
    }
    /**
     * Permet d'être redirigé sur la page de la fonctionnalité sélectionnée
     * @param page : string
     */
    goToPage(page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.isSubscribe(page);
        });
    }
    /**
     * Teste si c'est un client et donc un abonné
     * On fait une requête en nous nous basant sur le numéro (login) en utilisant l'url
     * user/client/login. La requête nous renvoi l'objet user et on verifie si isSubscribe
     * a été modifié ou non.
     * @param page page
     */
    isSubscribe(page) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const role = yield this.session.getItem('role');
            if (role === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["UserRole"].CLIENT) {
                const login = yield this.session.getItem('login');
                const body = {
                    phoneNumber: login
                };
                if (page !== 'consult-abonnement' && page !== 'consult-informations') {
                    const isSubscribe = this.user.isSubscribe;
                    if (isSubscribe === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["StateSubscribe"].NEW || isSubscribe === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["StateSubscribe"].TERMINATION ||
                        isSubscribe === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["StateSubscribe"].IN_PROGRESS_SUBSCRIB || isSubscribe === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["StateSubscribe"].OTHER
                        || isSubscribe === _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["StateSubscribe"].SUSPENDED) {
                        this.onDemandToSubscribe();
                        return;
                    }
                    else {
                        // MAJ des variable de section
                        this.session.setItem('isSubscribe', _providers_utils_commonEnum__WEBPACK_IMPORTED_MODULE_8__["StateSubscribe"].SUBSCRIBE);
                        this.session.setItem('user', this.user);
                        this.navCtrl.navigateForward(page);
                    }
                    /* this.userHttp.getClient('user/client/login', body).subscribe(
                       (user) => {
                       }
            
                     );*/
                }
                else {
                    this.navCtrl.navigateForward(page);
                }
            }
            else {
                this.navCtrl.navigateForward(page);
            }
        });
    }
    /**
     * Demande de s'abonner
     */
    onDemandToSubscribe() {
        const message = 'Pour accèder à cette fonctionnalité, veuillez vous abonner.';
        const css = '';
        const buttons = [
            {
                text: 'S\'abonner',
                handler: () => {
                    this.navCtrl.navigateForward('consult-abonnement');
                }
            }
        ];
        this.alert.alertMessage(message, css, buttons);
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"] },
    { type: src_providers_africlean_alert_africlean_alert_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanAlertProvider"] },
    { type: _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanConfigProvider"] },
    { type: src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanObservablesProvider"] },
    { type: src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanHttpUserProvider"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_providers_africlean_session_africlean_session_provider__WEBPACK_IMPORTED_MODULE_3__["AfricleanSessionProvider"],
        src_providers_africlean_alert_africlean_alert_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanAlertProvider"],
        _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_6__["AfricleanConfigProvider"],
        src_providers_africlean_observables_africlean_observables_provider__WEBPACK_IMPORTED_MODULE_5__["AfricleanObservablesProvider"],
        src_providers_africlean_http_africlean_http_user_provider__WEBPACK_IMPORTED_MODULE_7__["AfricleanHttpUserProvider"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map