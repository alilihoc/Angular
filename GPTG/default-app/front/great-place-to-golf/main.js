(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\n    padding-bottom:50px;\n    color: white;\n}\n\nh1 {\n    padding-bottom: 26px;\n    text-shadow: 0 5px 5px -2px rgba(31,31,31,.4);\n    font-weight: 700;\n    font-family: Roboto,Helvetica,Arial,sans-serif;\n}\n\n.badge-hardis {\n    position: absolute;\n    font-size: 22px;\n    text-transform: uppercase;\n    font-weight: 700;\n    right: -90px;\n    padding: 10px 18px;\n    top: -3px;\n    background: #fff;\n    border-radius: 3px;\n    color: #444;\n    line-height: 22px;\n    box-shadow: 0 5px 5px -2px rgba(31,31,31,.4);\n}\n\n.btn-bg-white{\n    background-color: rgb(245, 245, 245);\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n <main role=\"main\" class=\"container\">\n\n  <div class=\"py-5 text-center\">\n  <div id=\"header\">\n    <h1>\n      Great Place to Golf! <br/>\n      by <span class=\"badge badge-primary\">Hardis Group</span>\n    </h1>\n\n  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n    <label [ngClass]=\"{'btn btn-outline-secondary active': pageActive.indexOf('leaderboard') > -1 || pageActive ==='/',\n                    'btn btn-outline-secondary btn-bg-white': true }\" (click)=\"changeRoot('/leaderboard')\">\n      <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked>Scores</label>\n    <label [ngClass]=\"{'btn btn-outline-secondary active': pageActive.indexOf('rating') > -1,\n                    'btn btn-outline-secondary btn-bg-white' : true }\" (click)=\"changeRoot('/rating')\">\n      <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">Notation</label>\n    <label [ngClass]=\"{'btn btn-outline-secondary active': pageActive.indexOf('offers') > -1,\n                    'btn btn-outline-secondary btn-bg-white': true }\" (click)=\"changeRoot('/offers')\">\n      <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\">Offres</label>\n    <label [ngClass]=\"{'btn btn-outline-secondary active': pageActive.indexOf('twitter') > -1,\n    'btn btn-outline-secondary btn-bg-white': true }\" (click)=\"changeRoot('/twitter')\">Replay</label>\n  </div>\n\n  </div>\n \n\n\n    <router-outlet></router-outlet>\n\n  <!--div>\n  <img src=\"assets/logo.png\" style=\"height: 50px; margin-bottom: 50px\"/>\n  </div-->\n\n  </div>\n\n  </main>\n\n  <footer class=\"footer\">\n    <a routerLink=\"/settings\"><span class=\"text-muted\">Paramètres</span></a>\n  </footer>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'great-place-to-golf';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //TODO: manage the current page
        this.pageActive = this.router.url;
        //Event subscription to detect page change
        this.router.events.subscribe(function (val) {
            _this.pageActive = _this.router.url;
            console.log("new page= " + _this.pageActive);
        });
    };
    AppComponent.prototype.changeRoot = function (val_) {
        this.router.navigate([val_, {}]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/leaderboard/leaderboard.component */ "./src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/app/components/rating/rating.component.ts");
/* harmony import */ var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _components_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/twitter/twitter.component */ "./src/app/components/twitter/twitter.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-twitter-timeline */ "./node_modules/ngx-twitter-timeline/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _services_score_ws_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/score-ws.service */ "./src/app/services/score-ws.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-player/add-player.component */ "./src/app/components/add-player/add-player.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', redirectTo: '/leaderboard', pathMatch: 'full' },
    { path: 'leaderboard', component: _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"] },
    { path: 'offers', component: _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_5__["OffersComponent"] },
    { path: 'twitter', component: _components_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_6__["TwitterComponent"] },
    { path: 'rating/:id/:name', component: _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"] },
    { path: 'rating', component: _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"] },
    { path: 'add-player', component: _components_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_14__["AddPlayerComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"],
                _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_4__["RatingComponent"],
                _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_5__["OffersComponent"],
                _components_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_6__["TwitterComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"],
                _components_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_14__["AddPlayerComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_11__["QRCodeModule"],
                ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_8__["NgxTwitterTimelineModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [_services_score_ws_service__WEBPACK_IMPORTED_MODULE_12__["ScoreWsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-player/add-player.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-player/add-player.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-player/add-player.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-player/add-player.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"router-content\">\n<label for=\"name\">Editer le nom: </label><br/>\n<input type=\"text\" id=\"name\" required [(ngModel)]= \"playerName\">\n<br/>\n\n<button (click)= \"savePlayer()\" >Sauvegarder</button>\n</div>"

/***/ }),

/***/ "./src/app/components/add-player/add-player.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-player/add-player.component.ts ***!
  \***************************************************************/
/*! exports provided: AddPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComponent", function() { return AddPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_score_ws_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/score-ws.service */ "./src/app/services/score-ws.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPlayerComponent = /** @class */ (function () {
    function AddPlayerComponent(router, scoreWsService) {
        this.router = router;
        this.scoreWsService = scoreWsService;
        this.playerName = "";
    }
    AddPlayerComponent.prototype.ngOnInit = function () {
    };
    AddPlayerComponent.prototype.savePlayer = function () {
        this.scoreWsService.savePlayer(this.playerName);
        this.router.navigate(["/"]);
    };
    AddPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-player',
            template: __webpack_require__(/*! ./add-player.component.html */ "./src/app/components/add-player/add-player.component.html"),
            styles: [__webpack_require__(/*! ./add-player.component.css */ "./src/app/components/add-player/add-player.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_score_ws_service__WEBPACK_IMPORTED_MODULE_2__["ScoreWsService"]])
    ], AddPlayerComponent);
    return AddPlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"router-content\">\n\n<table class=\"table table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Nom</th>\n      <th scope=\"col\">Score</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let player of players\">\n      <th scope=\"row\">{{player.rank}}</th>\n      <td *ngIf=\"scoreWsService.getIsAdmin()\" ><a routerLink=\"/rating/{{player.key}}/{{player.name}}\" >{{player.name}}</a></td>\n      <td *ngIf=\"!scoreWsService.getIsAdmin()\" >{{player.name}}</td>\n      <td>{{player.score}}</td>\n    </tr>\n  </tbody>\n</table>\n\n\n<button *ngIf=\"scoreWsService.getIsAdmin()\" type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"addPlayer()\">Ajout de joueur</button>\n\n</div>"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/leaderboard/leaderboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_ws_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/score-ws.service */ "./src/app/services/score-ws.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(scoreWsService, router) {
        this.scoreWsService = scoreWsService;
        this.router = router;
        this.players = [];
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var playersTemp = this.scoreWsService.getLeaderboard().players;
        this.sortPlayers(playersTemp);
    };
    LeaderboardComponent.prototype.sortPlayers = function (players_) {
        //sort by score
        players_.sort(function (p1, p2) {
            if (p1.score > p2.score) {
                return 1;
            }
            if (p1.score < p2.score) {
                return -1;
            }
            return 0;
        });
        //Generate the T1, T2, equality ranks
        var lastScore = 9999;
        var rank = 0;
        for (var n = 0; n < players_.length; n++) {
            if (lastScore === players_[n].score) {
                players_[n].rank = "T" + rank;
            }
            else {
                rank++;
                if (players_[n + 1] != undefined && players_[n].score === players_[n + 1].score) {
                    players_[n].rank = "T" + rank;
                }
                else {
                    players_[n].rank = "" + rank;
                }
            }
            lastScore = players_[n].score;
        }
        this.players = players_;
    };
    LeaderboardComponent.prototype.addPlayer = function () {
        this.router.navigate(["add-player", {}]);
    };
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaderboard',
            template: __webpack_require__(/*! ./leaderboard.component.html */ "./src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__(/*! ./leaderboard.component.css */ "./src/app/components/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_score_ws_service__WEBPACK_IMPORTED_MODULE_1__["ScoreWsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/components/offers/offers.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/offers/offers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n    margin-bottom: 25px;\n    margin-left: 15px;\n    margin-right: 15px;\n}"

/***/ }),

/***/ "./src/app/components/offers/offers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/offers/offers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"router-content\">\n<div>\n<h2>Découvrez les offres des stage Hardis!</h2>\n</div>\n<div>\n<a href=\"https://www.hardis-group.com/nous-rejoindre/postuler/espace-emploi-ssii-esn-societe-services-informatiques-grenoble-paris-lyon-lille-nantes?city=75\" target=\"_blank\">\nConsultez offres directement sur le site Hardis Group</a>\n</div>\n<div>\n<button class=\"btn btn-primary btn-lg\" (click)=\"downloadBook()\">Télécharger le book <br/> des offres de stage</button>\n</div>\n<div>\n"

/***/ }),

/***/ "./src/app/components/offers/offers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/offers/offers.component.ts ***!
  \*******************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OffersComponent = /** @class */ (function () {
    function OffersComponent() {
    }
    OffersComponent.prototype.ngOnInit = function () {
    };
    OffersComponent.prototype.downloadBook = function () {
        file_saver__WEBPACK_IMPORTED_MODULE_1___default()("download/hardis-book-de-stage.pdf", "hardis-book-de-stage.pdf");
    };
    OffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/components/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/components/offers/offers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/components/rating/rating.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/rating/rating.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rating{\n    margin-bottom: 30px; \n}\n\ndiv{\n    margin-bottom: 5px;\n}"

/***/ }),

/***/ "./src/app/components/rating/rating.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/rating/rating.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"router-content\">\n\n <h2>Vous notez <b>🏌️{{playerName}}</b></h2>\n\n<!--ADMIN STUFF-->\n<div style=\"padding-left: 14px ; text-align: center;\">\n <qrcode qrcode [qrdata]=\"currentOrigin+'rating/'+this.playerKey+'/'+this.playerName\" [size]=\"256\" [level]=\"'M'\"></qrcode><br/>\n</div>\n\n<div *ngIf=\"scoreWsService.getIsAdmin()\">\n  <label for=\"name\">Editer le nom: </label><br/>\n  <input type=\"text\" id=\"name\" required [(ngModel)]= \"playerName\">\n  <br/>\n <label class=\"switch\">\n  Activé?\n  <input type=\"checkbox\">\n  <span class=\"slider\"></span>\n</label>\n\n <a href=\"{{currentOrigin+'rating/'+this.playerKey+'/'+this.playerName}}\">{{urlShortner( currentOrigin+'rating/'+this.playerKey+'/'+this.playerName )}}</a><br/>\n ( clé <i>{{playerKey}}</i>)\n\n</div>\n\n\n</div>\n\n<div class=\"rating\">\n <div class=\"input-group\" *ngFor=\"let par of parList; let i = index;\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\" id=\"btnGroupAddon-{{i}}\"> 🕳️ Trou #{{i}} , PAR {{par}}</div>\n    </div>\n    <input type=\"number\"  min=\"{{-par*2}}\" max=\"{{par*2}}\" class=\"form-control\" style=\"text-align: center;\" placeholder=\"{{scoreList[i]}}\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon\" [(ngModel)]=\"scoreList[i]\" (change)=\"valuechange()\">\n  </div>\n  <button type=\"button\" class=\"btn btn-primary\">Sauvegarder</button>\n</div>"

/***/ }),

/***/ "./src/app/components/rating/rating.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/rating/rating.component.ts ***!
  \*******************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_score_ws_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/score-ws.service */ "./src/app/services/score-ws.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var RatingComponent = /** @class */ (function () {
    function RatingComponent(localStorage, scoreWsService, route, document) {
        this.localStorage = localStorage;
        this.scoreWsService = scoreWsService;
        this.route = route;
        this.playerName = "";
        this.playerKey = "";
        this.notationURL = '';
        this.scoreList = [];
        this.parList = [5, 3, 3, 2];
        this.currentOrigin = "https://salvatore.paris/projetZ/hardis-golf/";
    }
    RatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Try to get the player key stored in internal storage
        this.localStorage.getItem('playerKey').subscribe(function (playerKey_) {
            if (playerKey_)
                _this.playerKey = playerKey_;
            //Try to get the Key in the param, and if there's, we stock this new key in the local storage
            if (_this.route.snapshot.paramMap.get("id")) {
                _this.playerKey = _this.route.snapshot.paramMap.get("id");
                _this.localStorage.setItem('playerKey', _this.playerKey).subscribe(function () {
                });
            }
            /*
            this.notationURL = this.currentOrigin+'rating/'+this.playerKey+'/'+this.playerName;
            console.log("url: "+this.notationURL);*/
        });
        this.localStorage.getItem('playerName').subscribe(function (playerName_) {
            if (playerName_)
                _this.playerName = playerName_;
            //Try to get the Key in the param, and if there's, we stock this new key in the local storage
            if (_this.route.snapshot.paramMap.get("name")) {
                _this.playerName = _this.route.snapshot.paramMap.get("name");
                _this.localStorage.setItem('playerName', _this.playerName).subscribe(function () {
                });
            }
        });
        //TODO: get param ID + add in the localstorage
        this.scoreList.length = this.parList.length;
        this.scoreList.fill(0);
        this.localStorage.setItem('scoreList', this.scoreList);
        this.localStorage.getItem('scoreList').subscribe(function (scoreList_) {
            // console.log("localStorage.getItem "+ scoreList_);
            if (scoreList_)
                _this.scoreList = JSON.parse(scoreList_);
        });
        console.log(this.scoreList);
    };
    /**
     * We save data in local change
     */
    RatingComponent.prototype.valuechange = function () {
        //console.log(" valuechange()"+this.scoreList);
        this.localStorage.setItem('scoreList', JSON.stringify(this.scoreList)).subscribe(function () {
            console.log("DATA WROTE");
        });
    };
    RatingComponent.prototype.urlShortner = function (url_) {
        var maxUrl = 19;
        if (url_.length > maxUrl) {
            var result = url_.slice(0, maxUrl - 1);
            return result + "...";
        }
        return url_;
    };
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/components/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/components/rating/rating.component.css")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_2__["LocalStorage"],
            _services_score_ws_service__WEBPACK_IMPORTED_MODULE_4__["ScoreWsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"router-content\">\n<h2>Paramètres</h2>\n\n<div>\n  <a routerLink=\"/\">Retour à la page principale</a>\n</div>\n\n<div>\nVider le stockage interne.\n<button (click)=\"clearStorage();\">Vider</button>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/fesm5/ngx-pwa-local-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(localStorage) {
        this.localStorage = localStorage;
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.clearStorage = function () {
        this.localStorage.clear();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_1__["LocalStorage"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/twitter/twitter.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/twitter/twitter.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/twitter/twitter.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/twitter/twitter.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"router-content\">\n\n<ngx-twitter-timeline \n    [data]=\"{sourceType: 'url', url: 'https://twitter.com/salvator_io'}\"\n    [opts]=\"{tweetLimit: 15}\"\n></ngx-twitter-timeline>\n\n</div>"

/***/ }),

/***/ "./src/app/components/twitter/twitter.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/twitter/twitter.component.ts ***!
  \*********************************************************/
/*! exports provided: TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TwitterComponent = /** @class */ (function () {
    function TwitterComponent() {
    }
    TwitterComponent.prototype.ngOnInit = function () {
    };
    TwitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter',
            template: __webpack_require__(/*! ./twitter.component.html */ "./src/app/components/twitter/twitter.component.html"),
            styles: [__webpack_require__(/*! ./twitter.component.css */ "./src/app/components/twitter/twitter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "./src/app/models/leaderboard.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/leaderboard.model.ts ***!
  \*********************************************/
/*! exports provided: Leaderboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leaderboard", function() { return Leaderboard; });
var Leaderboard = /** @class */ (function () {
    function Leaderboard() {
    }
    return Leaderboard;
}());



/***/ }),

/***/ "./src/app/models/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/player.model.ts ***!
  \****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player() {
        this.active = false;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/services/score-ws.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/score-ws.service.ts ***!
  \**********************************************/
/*! exports provided: ScoreWsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreWsService", function() { return ScoreWsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_leaderboard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/leaderboard.model */ "./src/app/models/leaderboard.model.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/player.model */ "./src/app/models/player.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScoreWsService = /** @class */ (function () {
    function ScoreWsService(http) {
        this.http = http;
        this.serverUrl = "http://localhost:8888/CockChan/php/";
        this.isAdmin = true;
        //Init the Array
        //Bouchon
        this.leaderboard = new _models_leaderboard_model__WEBPACK_IMPORTED_MODULE_2__["Leaderboard"]();
        this.leaderboard.players = [];
        var player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player.id = this.leaderboard.players.length;
        player.name = "pierre";
        player.key = 'HJHJK8980LGJGH90JG' + player.id;
        player.score = -1;
        this.leaderboard.players.push(player);
        player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player.id = this.leaderboard.players.length;
        player.name = "kevin";
        player.key = 'HJHJK8980LGJGH90JG' + player.id;
        player.score = -4;
        this.leaderboard.players.push(player);
        player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player.id = this.leaderboard.players.length;
        player.name = "Hamza";
        player.key = 'HJHJK8980LGJGH90JG' + player.id;
        player.score = 1;
        this.leaderboard.players.push(player);
        player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player.id = this.leaderboard.players.length;
        player.name = "Alex S.";
        player.key = 'HJHJK8980LGJGH90JG' + player.id;
        player.score = -1;
        this.leaderboard.players.push(player);
        player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player.id = this.leaderboard.players.length;
        player.name = "Alex B.";
        player.key = 'HJHJK8980LGJGH90JG' + player.id;
        player.score = 8;
        this.leaderboard.players.push(player);
        player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player.id = this.leaderboard.players.length;
        player.name = "JF";
        player.key = 'HJHJK8980LGJGH90JG' + player.id;
        player.score = -4;
        this.leaderboard.players.push(player);
    }
    ScoreWsService.prototype.getLeaderboard = function () {
        return this.leaderboard;
    };
    ScoreWsService.prototype.savePlayerScore = function (score_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        body = body.append('action', 'saveScore');
        body = body.append('scores', JSON.stringify(score_));
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ScoreWsService.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    ScoreWsService.prototype.savePlayer = function (playerName_) {
        /*
        let body = new HttpParams();
        body = body.append('action', 'saveScore');
        body = body.append('scores', JSON.stringify(score_) );
        return this.http.post<any>(this.serverUrl+'ChanWebService.php',body)*/
        var player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player = new _models_player_model__WEBPACK_IMPORTED_MODULE_3__["Player"]();
        player.id = this.leaderboard.players.length;
        player.name = playerName_;
        player.key = 'HJHJK8980LGJGH90JG' + player.id;
        player.score = 0;
        player.active = false;
        this.leaderboard.players.push(player);
    };
    ScoreWsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ScoreWsService);
    return ScoreWsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hardis/GreatPlaceToGolf/great-place-to-golf/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map