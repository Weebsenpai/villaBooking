"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking_booking_module_ts"],{

/***/ 2761:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/booking/booking.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Your Bookings</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button>\n\n      </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 4496:
/*!***************************************************!*\
  !*** ./src/app/booking/booking-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPageRoutingModule": () => (/* binding */ BookingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.page */ 4479);




const routes = [
    {
        path: '',
        component: _booking_page__WEBPACK_IMPORTED_MODULE_0__.BookingPage
    }
];
let BookingPageRoutingModule = class BookingPageRoutingModule {
};
BookingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BookingPageRoutingModule);



/***/ }),

/***/ 3438:
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPageModule": () => (/* binding */ BookingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-routing.module */ 4496);
/* harmony import */ var _booking_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.page */ 4479);







let BookingPageModule = class BookingPageModule {
};
BookingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingPageRoutingModule
        ],
        declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_1__.BookingPage]
    })
], BookingPageModule);



/***/ }),

/***/ 4479:
/*!*****************************************!*\
  !*** ./src/app/booking/booking.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingPage": () => (/* binding */ BookingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_booking_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./booking.page.html */ 2761);
/* harmony import */ var _booking_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.page.scss */ 9434);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let BookingPage = class BookingPage {
    constructor() { }
    ngOnInit() {
    }
};
BookingPage.ctorParameters = () => [];
BookingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-booking',
        template: _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_booking_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_booking_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BookingPage);



/***/ }),

/***/ 9434:
/*!*******************************************!*\
  !*** ./src/app/booking/booking.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_booking_booking_module_ts.js.map