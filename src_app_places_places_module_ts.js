"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_places_places_module_ts"],{

/***/ 5246:
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/places/places.page.html ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n\n      <ion-tab-button tab=\"discover\">\n        <ion-label>Discover</ion-label>\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-tab-button>\n      <ion-tab-button tab=\"offer\">\n        <ion-label>Offers</ion-label>\n        <ion-icon name=\"card\"></ion-icon>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n");

/***/ }),

/***/ 8356:
/*!*************************************************!*\
  !*** ./src/app/places/places-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPageRoutingModule": () => (/* binding */ PlacesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places.page */ 5191);




const routes = [
    {
        path: 'tabs',
        component: _places_page__WEBPACK_IMPORTED_MODULE_0__.PlacesPage,
        children: [
            {
                path: 'discover',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_places_discover_discover_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./discover/discover.module */ 9959)).then(m => m.DiscoverPageModule),
                    },
                    {
                        path: ':placeId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_places_discover_place-detail_place-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./discover/place-detail/place-detail.module */ 3259)).then(m => m.PlaceDetailPageModule)
                    },
                ]
            },
            {
                path: 'offer',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_places_offer_offer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offer/offer.module */ 1514)).then(m => m.OfferPageModule),
                    },
                    {
                        path: 'new',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offer_new-offer_new-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./offer/new-offer/new-offer.module */ 2985)).then(m => m.NewOfferPageModule),
                    },
                    {
                        path: 'edit/:placeId',
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_places_offer_edit-offer_edit-offer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./offer/edit-offer/edit-offer.module */ 3122)).then(m => m.EditOfferPageModule)
                    },
                    {
                        path: ':placeId',
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_places_offer_offer-booking_offer-booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./offer/offer-booking/offer-booking.module */ 1683)).then(m => m.OfferBookingPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/places/tabs/discover',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/places/tabs/discover',
        pathMatch: 'full'
    }
];
let PlacesPageRoutingModule = class PlacesPageRoutingModule {
};
PlacesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PlacesPageRoutingModule);



/***/ }),

/***/ 1718:
/*!*****************************************!*\
  !*** ./src/app/places/places.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPageModule": () => (/* binding */ PlacesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _places_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./places-routing.module */ 8356);
/* harmony import */ var _places_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.page */ 5191);







let PlacesPageModule = class PlacesPageModule {
};
PlacesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _places_routing_module__WEBPACK_IMPORTED_MODULE_0__.PlacesPageRoutingModule
        ],
        declarations: [_places_page__WEBPACK_IMPORTED_MODULE_1__.PlacesPage]
    })
], PlacesPageModule);



/***/ }),

/***/ 5191:
/*!***************************************!*\
  !*** ./src/app/places/places.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesPage": () => (/* binding */ PlacesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_places_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./places.page.html */ 5246);
/* harmony import */ var _places_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.page.scss */ 4514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let PlacesPage = class PlacesPage {
    constructor() { }
    ngOnInit() {
    }
};
PlacesPage.ctorParameters = () => [];
PlacesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-places',
        template: _E_villabooking_villa_booking_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_places_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_places_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PlacesPage);



/***/ }),

/***/ 4514:
/*!*****************************************!*\
  !*** ./src/app/places/places.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFjZXMucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_places_places_module_ts.js.map