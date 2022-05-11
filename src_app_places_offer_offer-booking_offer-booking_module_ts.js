"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_offer_offer-booking_offer-booking_module_ts"],{

/***/ 8958:
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/places/offer/offer-booking/offer-booking.page.html ***!
  \******************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/places/tabs/offer\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ place.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button class=\"ion-margin\"\n  color=\"dark\"\n  [routerLink]=\"['/','places','tabs','offer','edit',place.id]\" routerLinkActive=\"router-link-active\" >\n    Edit\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ 1070:
/*!****************************************************************************!*\
  !*** ./src/app/places/offer/offer-booking/offer-booking-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferBookingPageRoutingModule": () => (/* binding */ OfferBookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _offer_booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-booking.page */ 3907);




const routes = [
    {
        path: '',
        component: _offer_booking_page__WEBPACK_IMPORTED_MODULE_0__.OfferBookingPage
    }
];
let OfferBookingPageRoutingModule = class OfferBookingPageRoutingModule {
};
OfferBookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OfferBookingPageRoutingModule);



/***/ }),

/***/ 1683:
/*!********************************************************************!*\
  !*** ./src/app/places/offer/offer-booking/offer-booking.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferBookingPageModule": () => (/* binding */ OfferBookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offer-booking-routing.module */ 1070);
/* harmony import */ var _offer_booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-booking.page */ 3907);







let OfferBookingPageModule = class OfferBookingPageModule {
};
OfferBookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _offer_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.OfferBookingPageRoutingModule
        ],
        declarations: [_offer_booking_page__WEBPACK_IMPORTED_MODULE_1__.OfferBookingPage]
    })
], OfferBookingPageModule);



/***/ }),

/***/ 3907:
/*!******************************************************************!*\
  !*** ./src/app/places/offer/offer-booking/offer-booking.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferBookingPage": () => (/* binding */ OfferBookingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_offer_booking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./offer-booking.page.html */ 8958);
/* harmony import */ var _offer_booking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer-booking.page.scss */ 5111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../places.service */ 3035);







let OfferBookingPage = class OfferBookingPage {
    constructor(route, placeService, navCtrl) {
        this.route = route;
        this.placeService = placeService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(m => {
            if (!m.has('placeId')) {
                this.navCtrl.navigateBack('/places/tabs/offers');
                return;
            }
            this.place = this.placeService.getPlaceById(m.get('placeId'));
        });
    }
};
OfferBookingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
OfferBookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-offer-booking',
        template: _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_offer_booking_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_offer_booking_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], OfferBookingPage);



/***/ }),

/***/ 5111:
/*!********************************************************************!*\
  !*** ./src/app/places/offer/offer-booking/offer-booking.page.scss ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZlci1ib29raW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_places_offer_offer-booking_offer-booking_module_ts.js.map