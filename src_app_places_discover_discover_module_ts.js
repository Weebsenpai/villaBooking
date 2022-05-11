"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_discover_discover_module_ts"],{

/***/ 6108:
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/places/discover/discover.page.html ***!
  \**************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Discover Places</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>{{ loadedPlaces[0].title }}</ion-card-title>\n            <ion-card-subtitle class=\"ion-padding-bottom\">{{ loadedPlaces[0].price }} ₹/Night</ion-card-subtitle>\n            <ion-img [src]=\"loadedPlaces[0].imageUrl\"></ion-img>\n          </ion-card-header>\n          <ion-card-content>\n            <p>{{ loadedPlaces[0].description}}</p>\n          </ion-card-content>\n          <div class=\"ion-text-right\">\n            <ion-button fill=\"clear\" color=\"primary\" [routerLink]=\"['/','places','tabs','discover',loadedPlaces[0].id]\">More...</ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=\"2\" class=\"ion-text-center\">\n        <ion-list>\n        <ion-item *ngFor=\"let place of loadedPlaces.slice(1)\" [routerLink]=\"['/','places','tabs','discover',place.id]\" detail>\n          <ion-thumbnail slot=\"start\">\n            <ion-img [src]=\"place.imageUrl\"></ion-img>\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{place.title}}</h2>\n            <p>{{place.description}}</p>\n          </ion-label>\n        </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 2260:
/*!************************************************************!*\
  !*** ./src/app/places/discover/discover-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageRoutingModule": () => (/* binding */ DiscoverPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover.page */ 2273);




const routes = [
    {
        path: '',
        component: _discover_page__WEBPACK_IMPORTED_MODULE_0__.DiscoverPage
    },
];
let DiscoverPageRoutingModule = class DiscoverPageRoutingModule {
};
DiscoverPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DiscoverPageRoutingModule);



/***/ }),

/***/ 9959:
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPageModule": () => (/* binding */ DiscoverPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./discover-routing.module */ 2260);
/* harmony import */ var _discover_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page */ 2273);







let DiscoverPageModule = class DiscoverPageModule {
};
DiscoverPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _discover_routing_module__WEBPACK_IMPORTED_MODULE_0__.DiscoverPageRoutingModule
        ],
        declarations: [_discover_page__WEBPACK_IMPORTED_MODULE_1__.DiscoverPage]
    })
], DiscoverPageModule);



/***/ }),

/***/ 2273:
/*!**************************************************!*\
  !*** ./src/app/places/discover/discover.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoverPage": () => (/* binding */ DiscoverPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_discover_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./discover.page.html */ 6108);
/* harmony import */ var _discover_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discover.page.scss */ 4185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ 3035);





let DiscoverPage = class DiscoverPage {
    constructor(placesService) {
        this.placesService = placesService;
    }
    ngOnInit() {
        this.loadedPlaces = this.placesService.getplaces();
    }
};
DiscoverPage.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__.PlacesService }
];
DiscoverPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-discover',
        template: _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_discover_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_discover_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DiscoverPage);



/***/ }),

/***/ 4185:
/*!****************************************************!*\
  !*** ./src/app/places/discover/discover.page.scss ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3Zlci5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_places_discover_discover_module_ts.js.map