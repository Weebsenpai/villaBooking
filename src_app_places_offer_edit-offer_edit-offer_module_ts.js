"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_offer_edit-offer_edit-offer_module_ts"],{

/***/ 1674:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/places/offer/edit-offer/edit-offer.page.html ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Offer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 1383:
/*!**********************************************************************!*\
  !*** ./src/app/places/offer/edit-offer/edit-offer-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOfferPageRoutingModule": () => (/* binding */ EditOfferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _edit_offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-offer.page */ 3711);




const routes = [
    {
        path: '',
        component: _edit_offer_page__WEBPACK_IMPORTED_MODULE_0__.EditOfferPage
    }
];
let EditOfferPageRoutingModule = class EditOfferPageRoutingModule {
};
EditOfferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditOfferPageRoutingModule);



/***/ }),

/***/ 3122:
/*!**************************************************************!*\
  !*** ./src/app/places/offer/edit-offer/edit-offer.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOfferPageModule": () => (/* binding */ EditOfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _edit_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-offer-routing.module */ 1383);
/* harmony import */ var _edit_offer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-offer.page */ 3711);







let EditOfferPageModule = class EditOfferPageModule {
};
EditOfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditOfferPageRoutingModule
        ],
        declarations: [_edit_offer_page__WEBPACK_IMPORTED_MODULE_1__.EditOfferPage]
    })
], EditOfferPageModule);



/***/ }),

/***/ 3711:
/*!************************************************************!*\
  !*** ./src/app/places/offer/edit-offer/edit-offer.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditOfferPage": () => (/* binding */ EditOfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_offer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./edit-offer.page.html */ 1674);
/* harmony import */ var _edit_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-offer.page.scss */ 2723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let EditOfferPage = class EditOfferPage {
    constructor() { }
    ngOnInit() {
    }
};
EditOfferPage.ctorParameters = () => [];
EditOfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-edit-offer',
        template: _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_edit_offer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_edit_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditOfferPage);



/***/ }),

/***/ 2723:
/*!**************************************************************!*\
  !*** ./src/app/places/offer/edit-offer/edit-offer.page.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LW9mZmVyLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_places_offer_edit-offer_edit-offer_module_ts.js.map