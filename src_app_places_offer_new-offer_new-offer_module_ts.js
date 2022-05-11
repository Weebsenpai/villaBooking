"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_offer_new-offer_new-offer_module_ts"],{

/***/ 3999:
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/places/offer/new-offer/new-offer.page.html ***!
  \**********************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offer\">\n\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>New offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        Row 1 Col 1\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 3389:
/*!********************************************************************!*\
  !*** ./src/app/places/offer/new-offer/new-offer-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPageRoutingModule": () => (/* binding */ NewOfferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-offer.page */ 3819);




const routes = [
    {
        path: '',
        component: _new_offer_page__WEBPACK_IMPORTED_MODULE_0__.NewOfferPage
    }
];
let NewOfferPageRoutingModule = class NewOfferPageRoutingModule {
};
NewOfferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewOfferPageRoutingModule);



/***/ }),

/***/ 2985:
/*!************************************************************!*\
  !*** ./src/app/places/offer/new-offer/new-offer.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPageModule": () => (/* binding */ NewOfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-offer-routing.module */ 3389);
/* harmony import */ var _new_offer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-offer.page */ 3819);







let NewOfferPageModule = class NewOfferPageModule {
};
NewOfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewOfferPageRoutingModule
        ],
        declarations: [_new_offer_page__WEBPACK_IMPORTED_MODULE_1__.NewOfferPage]
    })
], NewOfferPageModule);



/***/ }),

/***/ 3819:
/*!**********************************************************!*\
  !*** ./src/app/places/offer/new-offer/new-offer.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewOfferPage": () => (/* binding */ NewOfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_offer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new-offer.page.html */ 3999);
/* harmony import */ var _new_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-offer.page.scss */ 4221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let NewOfferPage = class NewOfferPage {
    constructor() { }
    ngOnInit() {
    }
};
NewOfferPage.ctorParameters = () => [];
NewOfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-new-offer',
        template: _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_offer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_new_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewOfferPage);



/***/ }),

/***/ 4221:
/*!************************************************************!*\
  !*** ./src/app/places/offer/new-offer/new-offer.page.scss ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-col {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1vZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6Im5ldy1vZmZlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_places_offer_new-offer_new-offer_module_ts.js.map