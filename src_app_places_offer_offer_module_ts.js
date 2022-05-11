"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_offer_offer_module_ts"],{

/***/ 6972:
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/places/offer/offer.page.html ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>My Offer</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button routerLink=\"/places/tabs/offer/new\">\n        <ion-icon name=\"add\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"12\" size-md=\"8\" offset-md=\"2\">\n      <ion-list>\n        <ion-item *ngFor=\"let offer of offeredPlaces\" [routerLink]=\"['/','places','tabs','offer',offer.id]\" routerLinkActive=\"router-link-active\" >\n          <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"offer.imageUrl\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{offer.title}}</h2>\n            <p>{{offer.description}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 4825:
/*!******************************************************!*\
  !*** ./src/app/places/offer/offer-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferPageRoutingModule": () => (/* binding */ OfferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer.page */ 869);




const routes = [
    {
        path: '',
        component: _offer_page__WEBPACK_IMPORTED_MODULE_0__.OfferPage
    },
    {
        path: 'edit/:placeId',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offer_edit-offer_edit-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-offer/edit-offer.module */ 3122)).then(m => m.EditOfferPageModule)
    },
];
let OfferPageRoutingModule = class OfferPageRoutingModule {
};
OfferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OfferPageRoutingModule);



/***/ }),

/***/ 1514:
/*!**********************************************!*\
  !*** ./src/app/places/offer/offer.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferPageModule": () => (/* binding */ OfferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _offer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-routing.module */ 4825);
/* harmony import */ var _offer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer.page */ 869);







let OfferPageModule = class OfferPageModule {
};
OfferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _offer_routing_module__WEBPACK_IMPORTED_MODULE_0__.OfferPageRoutingModule
        ],
        declarations: [_offer_page__WEBPACK_IMPORTED_MODULE_1__.OfferPage]
    })
], OfferPageModule);



/***/ }),

/***/ 869:
/*!********************************************!*\
  !*** ./src/app/places/offer/offer.page.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferPage": () => (/* binding */ OfferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_offer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./offer.page.html */ 6972);
/* harmony import */ var _offer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer.page.scss */ 83);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ 3035);





let OfferPage = class OfferPage {
    constructor(placeService) {
        this.placeService = placeService;
    }
    ngOnInit() {
        this.offeredPlaces = this.placeService.getplaces();
    }
};
OfferPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService }
];
OfferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-offer',
        template: _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_offer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_offer_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OfferPage);



/***/ }),

/***/ 83:
/*!**********************************************!*\
  !*** ./src/app/places/offer/offer.page.scss ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlci5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_places_offer_offer_module_ts.js.map