(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<ion-tabs class=\"footer-page\">\r\n\r\n        <ion-tab-bar class=\"content-page\" slot=\"bottom\">\r\n      \r\n          <ion-tab-button (click)=\"contactUs()\">\r\n            <ion-label class=\"link\">{{ 'FOOTER.CONTACT_US' | translate }}</ion-label>\r\n          </ion-tab-button>\r\n      \r\n          <ion-tab-button (click)=\"conditionsUse()\">\r\n            <ion-label class=\"link\">{{ 'FOOTER.CONDITIONS_USE' | translate }}</ion-label>\r\n          </ion-tab-button>\r\n\r\n            <ion-tab-button style=\"width: max-content!important;\">\r\n                <ion-label class=\"africlean\">{{ africleanCopyrigth}}</ion-label>\r\n            </ion-tab-button>\r\n\r\n\r\n        </ion-tab-bar>\r\n\r\n\r\n\r\n      \r\n      </ion-tabs>\r\n-->\r\n<ion-tabs class=\"footer-page1\">\r\n\r\n    <!-- Bottom menu de l'application  (affiché sur toutes les pages) -->\r\n    <ion-tab-bar class=\"content-page\" slot=\"bottom\">\r\n\r\n        <div class=\"contact-info\" (click)=\"contactUs()\" [ngClass]=\"isweb ?'web-style':'mobile-style'\">\r\n            <ion-label class=\"link\" style=\"cursor: pointer;\">{{ 'FOOTER1.CONTACT_US' | translate }}</ion-label>\r\n            <ion-label class=\"contact\">contact@africlean-services.com</ion-label>\r\n            <ion-label class=\"contact\">+224 626853272</ion-label>\r\n        </div>\r\n\r\n        <div class=\"social-info\" [ngClass]=\"isweb ?'web-style':'mobile-style'\">\r\n            <ion-label class=\"link\">{{ 'FOOTER1.AFRICLEAN' | translate }}</ion-label>\r\n            <ion-label class=\"social\">\r\n                <div class=\"mx-1 icon\">\r\n                    <a href=\"https://www.youtube.com/channel/UCgjCQXTvUKmpKjxXSwlmB3Q/videos?view_as=subscriber\">\r\n                        <i class=\"fab fa-youtube\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"mx-1 icon\">\r\n                    <a href=\"https://mail.google.com/mail/u/0/#inbox\">\r\n                        <i class=\"fab fa-facebook-f\"></i>\r\n                    </a>\r\n                </div>\r\n                <div class=\"mx-1 icon\">\r\n                    <a href=\"https://mail.google.com/mail/u/0/#inbox\">\r\n                        <i class=\"fab fa-instagram\"></i></a>\r\n                </div>\r\n            </ion-label>\r\n            <ion-label class=\"adress\">{{ 'FOOTER1.ADDRESS' | translate }}</ion-label>\r\n\r\n        </div>\r\n\r\n        <div class=\"conditions-use\" [ngClass]=\"isweb ?'web-style':'mobile-style'\">\r\n            <ion-label class=\"africlean\">{{ africleanCopyrigth}}</ion-label>\r\n            <ion-label class=\"use-conditions\" (click)=\"conditionsUse()\">{{ 'FOOTER1.CONDITIONS_USE' | translate }}</ion-label>\r\n            <ion-label class=\"confidential\" (click)=\"legalMention()\">{{ 'FOOTER1.CONFIDENTIAL' | translate }}</ion-label>\r\n        </div>\r\n\r\n\r\n\r\n    </ion-tab-bar>\r\n    <!--<div class=\"cookie-message\" [hidden]=\"hiddeCookie\">\r\n      <span>En poursuivant votre navigation sur ce site, vous acceptez l'utilisation des cookies\r\n            pour vous proposer une meilleure expérience utilisateur</span>\r\n        <button class=\"btn btn-primary\" (click)=\"manageCookie()\">Ok</button>\r\n    </div>-->\r\n\r\n</ion-tabs>\r\n"

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-page .content-page {\n  background-color: var(--ion-color-footer);\n}\n.footer-page .content-page .link {\n  color: var(--ion-color-white);\n  cursor: pointer;\n}\n.footer-page .content-page .africlean {\n  color: var(--ion-color-white);\n  width: -webkit-max-content !important;\n  width: -moz-max-content !important;\n  width: max-content !important;\n}\n.footer-page .content-page ion-tab-button {\n  background-color: var(--ion-color-footer);\n}\n.footer-page1 .content-page {\n  height: 10% !important;\n  background-color: var(--ion-color-footer);\n  color: var(--ion-color-white);\n  font-size: 0.9rem;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  border: none;\n}\n.footer-page1 .content-page .contact-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.footer-page1 .content-page .contact-info .contact {\n  font-weight: normal;\n  cursor: pointer;\n}\n.footer-page1 .content-page .social-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n.footer-page1 .content-page .conditions-use {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  cursor: pointer;\n}\n.footer-page1 .content-page .conditions-use ion-label:hover {\n  color: var(--ion-color-principal);\n}\n.footer-page1 .cookie-message {\n  text-align: center;\n  font-size: 0.8rem;\n}\n.footer-page1 .cookie-message button {\n  margin-left: 1rem;\n}\n.social {\n  font-weight: bold;\n  margin-bottom: 0 !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n.icon {\n  margin-right: 0.5rem !important;\n  font-size: 1rem;\n}\n.mobile-style {\n  font-size: 0.57rem !important;\n}\n.web-style {\n  font-size: 1rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9DOlxcVXNlcnNcXHRtZGlhbGxvXFxEb2N1bWVudHNcXERvY3VtZW50cyBwZXJzb1xcbWF1cmlDbGVhbi1mcm9udFxcbWF1cmlDbGVhbi1mcm9udC9zcmNcXGFwcFxcdGFic1xcdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSx5Q0FBQTtBQ0RKO0FER0k7RUFDRSw2QkFBQTtFQUNBLGVBQUE7QUNETjtBRElJO0VBQ0UsNkJBQUE7RUFDQSxxQ0FBQTtFQUFBLGtDQUFBO0VBQUEsNkJBQUE7QUNGTjtBREtJO0VBQ0UseUNBQUE7QUNITjtBRFlFO0VBSUUsc0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBRUEsWUFBQTtBQ2JKO0FEZUk7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNkTjtBRGdCTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ2RSO0FEb0JJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNsQk47QURxQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0FDbkJOO0FEcUJNO0VBQ0UsaUNBQUE7QUNuQlI7QUR3QkU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDdEJKO0FEd0JJO0VBQ0UsaUJBQUE7QUN0Qk47QUQ0QkE7RUFDSSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDekJKO0FEMkJBO0VBQ0ksK0JBQUE7RUFDQSxlQUFBO0FDeEJKO0FEMkJBO0VBQ0ksNkJBQUE7QUN4Qko7QUQwQkE7RUFDSSwwQkFBQTtBQ3ZCSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXBhZ2Uge1xyXG5cclxuICAuY29udGVudC1wYWdlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb290ZXIpO1xyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYWZyaWNsZWFuIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi10YWItYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb3Rlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5mb290ZXItcGFnZTEge1xyXG5cclxuICAuY29udGVudC1wYWdlIHtcclxuICAgIC8vIGJvcmRlcjoxcHggYmx1ZSFpbXBvcnRhbnQ7XHJcbiAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuXHJcbiAgICBoZWlnaHQ6IDEwJSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb3Rlcik7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgIC8vIGJveC1zaGFkb3c6IDNweCAxcHggdmFyKC0taW9uLWNvbG9yLWdyaXMtYm9sZCksIDBlbSAwIDAuNGVtIHZhcigtLWlvbi1jb2xvci1ncmlzLWJvbGQpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG5cclxuICAgIC5jb250YWN0LWluZm8ge1xyXG5cclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIC5jb250YWN0IHtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgIC8vIGZvbnQtc2l6ZTogMC41NXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbmRpdGlvbnMtdXNlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgaW9uLWxhYmVsOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW5jaXBhbCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb29raWUtbWVzc2FnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uc29jaWFsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0haW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4ubW9iaWxlLXN0eWxle1xyXG4gICAgZm9udC1zaXplOiAwLjU3cmVtIWltcG9ydGFudDtcclxufVxyXG4ud2ViLXN0eWxle1xyXG4gICAgZm9udC1zaXplOiAxcmVtIWltcG9ydGFudDtcclxufVxyXG4iLCIuZm9vdGVyLXBhZ2UgLmNvbnRlbnQtcGFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb290ZXIpO1xufVxuLmZvb3Rlci1wYWdlIC5jb250ZW50LXBhZ2UgLmxpbmsge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvb3Rlci1wYWdlIC5jb250ZW50LXBhZ2UgLmFmcmljbGVhbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICB3aWR0aDogbWF4LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cbi5mb290ZXItcGFnZSAuY29udGVudC1wYWdlIGlvbi10YWItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWZvb3Rlcik7XG59XG5cbi5mb290ZXItcGFnZTEgLmNvbnRlbnQtcGFnZSB7XG4gIGhlaWdodDogMTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1mb290ZXIpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBib3JkZXI6IG5vbmU7XG59XG4uZm9vdGVyLXBhZ2UxIC5jb250ZW50LXBhZ2UgLmNvbnRhY3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZm9vdGVyLXBhZ2UxIC5jb250ZW50LXBhZ2UgLmNvbnRhY3QtaW5mbyAuY29udGFjdCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb290ZXItcGFnZTEgLmNvbnRlbnQtcGFnZSAuc29jaWFsLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9vdGVyLXBhZ2UxIC5jb250ZW50LXBhZ2UgLmNvbmRpdGlvbnMtdXNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvb3Rlci1wYWdlMSAuY29udGVudC1wYWdlIC5jb25kaXRpb25zLXVzZSBpb24tbGFiZWw6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW5jaXBhbCk7XG59XG4uZm9vdGVyLXBhZ2UxIC5jb29raWUtbWVzc2FnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uZm9vdGVyLXBhZ2UxIC5jb29raWUtbWVzc2FnZSBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNvY2lhbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ubW9iaWxlLXN0eWxlIHtcbiAgZm9udC1zaXplOiAwLjU3cmVtICFpbXBvcnRhbnQ7XG59XG5cbi53ZWItc3R5bGUge1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/africlean-modal/africlean-modal.provider */ "./src/providers/africlean-modal/africlean-modal.provider.ts");
/* harmony import */ var _components_africlean_use_terms_africlean_use_terms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/africlean-use-terms/africlean-use-terms.component */ "./src/app/components/africlean-use-terms/africlean-use-terms.component.ts");
/* harmony import */ var _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/africlean-config/africlean-config.provider */ "./src/providers/africlean-config/africlean-config.provider.ts");
/* harmony import */ var _components_africlean_use_terms_africlean_legal_mention_africlean_legal_mention_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/africlean-use-terms/africlean-legal-mention/africlean-legal-mention.component */ "./src/app/components/africlean-use-terms/africlean-legal-mention/africlean-legal-mention.component.ts");






var TabsPage = /** @class */ (function () {
    function TabsPage(modal, config) {
        this.modal = modal;
        this.config = config;
    }
    TabsPage.prototype.ngOnInit = function () {
        var date = new Date();
        this.isweb = this.config.isWeb();
        this.africleanCopyrigth = '©Africlean ' + date.getFullYear();
        // this.africleanCopyrigth = '@Copyrigth Africlean ' + date.getFullYear() + '';
    };
    TabsPage.prototype.contactUs = function () {
    };
    TabsPage.prototype.conditionsUse = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var props;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            display: true
                        };
                        return [4 /*yield*/, this.modal.create(_components_africlean_use_terms_africlean_use_terms_component__WEBPACK_IMPORTED_MODULE_3__["AfricleanUseTermsComponent"], 'my-custom-modal-css', props)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.prototype.legalMention = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var props;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = {
                            display: true
                        };
                        return [4 /*yield*/, this.modal.create(_components_africlean_use_terms_africlean_legal_mention_africlean_legal_mention_component__WEBPACK_IMPORTED_MODULE_5__["AfricleanLegalMentionComponent"], 'my-custom-modal-css', props)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TabsPage.ctorParameters = function () { return [
        { type: _providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanModalProvider"] },
        { type: _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanConfigProvider"] }
    ]; };
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_africlean_modal_africlean_modal_provider__WEBPACK_IMPORTED_MODULE_2__["AfricleanModalProvider"], _providers_africlean_config_africlean_config_provider__WEBPACK_IMPORTED_MODULE_4__["AfricleanConfigProvider"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




// Url des différentes pages de l'application
var authentication = '../pages/authentication/authentication.module#AuthenticationPageModule';
var home = '../pages/home/home.module#HomePageModule';
var registration = '../pages/registration/registration.module#RegistrationPageModule';
var abonnement = '../pages/abonnement/abonnement.module#AbonnementPageModule';
var incident = '../pages/incident/incident.module#IncidentPageModule';
var service = '../pages/service/service.module#ServicePageModule';
var informations = '../pages/informations/informations.module#InformationsPageModule';
var financeManagement = '../pages/manager/finance-management/finance-management.module#FinanceManagementPageModule';
var logisticManagement = '../pages/manager/logistic-management/logistic-management.module#LogisticManagementPageModule';
var clientManagement = '../pages/manager/client-management/client-management.module#ClientManagementPageModule';
var employeManagement = '../pages/manager/employe-management/employe-management.module#EmployeManagementPageModule';
var subscribeManagement = '../pages/manager/subscribe-managemment/subscribe-managemment.module#SubscribeManagemmentPageModule';
var incidentManagement = '../pages/manager/incident-managemment/incident-managemment.module#IncidentManagemmentPageModule';
var serviceManagement = '../pages/manager/service-managemment/service-managemment.module#ServiceManagemmentPageModule';
var prospection = '../pages/commercial/prospection/prospection.module#ProspectionPageModule';
var configuration = '../pages/configuration/configuration.module#ConfigurationPageModule';
var intervention = '../pages/intervenant/intervention/intervention.module#InterventionPageModule';
var africleanHomePage = '../pages/acueil/africlean-home/africlean-home.module#AfricleanHomePageModule';
var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: 'accueil',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: home
            },
            {
                path: 'authentication',
                loadChildren: authentication
            },
            {
                path: 'registration',
                loadChildren: registration
            },
            {
                path: 'consult-abonnement',
                loadChildren: abonnement
            },
            {
                path: 'report-incident',
                loadChildren: incident
            },
            {
                path: 'consult-service',
                loadChildren: service
            },
            {
                path: 'consult-informations',
                loadChildren: informations
            },
            {
                path: 'consult-finance',
                loadChildren: financeManagement
            },
            {
                path: 'consult-logistic',
                loadChildren: logisticManagement
            },
            {
                path: 'consult-client',
                loadChildren: clientManagement
            },
            {
                path: 'consult-employe',
                loadChildren: employeManagement
            },
            {
                path: 'consult-subscribe-management',
                loadChildren: subscribeManagement
            },
            {
                path: 'consult-incident-management',
                loadChildren: incidentManagement
            },
            {
                path: 'consult-service-management',
                loadChildren: serviceManagement
            },
            {
                path: 'consult-prospection',
                loadChildren: prospection
            },
            {
                path: 'consult-configuration',
                loadChildren: configuration
            },
            {
                path: 'consult-intervention',
                loadChildren: intervention
            },
            {
                path: 'accueil',
                loadChildren: africleanHomePage
            }
        ]
    }
    // {
    //   path: '',
    //   children: [
    //     {
    //       path: '',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: home
    //         }
    //       ]
    //     },
    //     {
    //       path: 'home',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: home
    //         }
    //       ]
    //     },
    //     {
    //       path: 'authentication',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: authentication
    //         }
    //       ]
    //     }
    //   ]
    // }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map