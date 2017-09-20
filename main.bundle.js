webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".heading-wrapper{\n  text-align: center;\n  margin-top:20%;\n}\n.heading, .main-btn{\n  font-size:50px;\n  text-transform: uppercase;\n  font-weight:900;\n}\n.heading{\n  color: darkred;\n}\n.main-btn{\n  margin-top:50px;\n  background: darkred;\n  color: #999;\n  border: none;\n  border-radius: 3px;\n  padding: 5px 20px;\n}\n.main-btn:hover{\n  cursor: pointer;\n  background: #540000;\n  transition: 0.5s;\n}\n\nh1{\n  text-align: center;\n  color: darkred;\n  margin-top: 50px;\n}\n.game-wrapper{\n  margin-top:50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.game{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 900px;\n  background: #777;\n  padding-bottom: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".wrapper-player1{\n  text-align: center;\n}\n.heading-for-player{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #fff;\n  font-weight:900;\n  font-size:18px;\n  text-transform: uppercase;\n  margin: 20px 0;\n}\n.score{\n  background: darkred;\n  color: #fff;\n  padding: 0 20px;\n}\na{\n  display: inline-block;\n  width:30px;\n  height:30px;\n}\ntd{\n  width:30px;\n  height:30px;\n  background: orange;\n}\ntd:first-child{\n  background: transparent;\n  border: 1px solid orange;\n  color: #fff;\n}\n\n.letters:first-child{\n  border: none;\n}\n.letters{\n  background: transparent;\n  border: 1px solid orange;\n  color: #fff;\n}\n.speech{\n  margin-top: 20px;\n  color: #fff;\n  font-weight:900;\n  font-size:18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".wrapper-player1{\n  text-align: center;\n}\n.heading-for-player{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  color: #fff;\n  font-weight:900;\n  font-size:18px;\n  text-transform: uppercase;\n  margin: 20px 0;\n}\n.score{\n  background: darkred;\n  color: #fff;\n  padding: 0 20px;\n}\na{\n  display: inline-block;\n  width:30px;\n  height:30px;\n}\ntd{\n  width:30px;\n  height:30px;\n  background: orange;\n}\ntd:first-child{\n  background: transparent;\n  border: 1px solid orange;\n  color: #fff;\n}\n\n.letters:first-child{\n  border: none;\n}\n.letters{\n  background: transparent;\n  border: 1px solid orange;\n  color: #fff;\n}\n.speech{\n  margin-top: 20px;\n  color: #fff;\n  font-weight:900;\n  font-size:18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isStarted\">\n<h1>\n  {{title}}\n</h1>\n<div class=\"game-wrapper\">\n  <div class=\"game\">\n    <bb-player1></bb-player1>\n    <bb-player2></bb-player2>\n  </div>\n</div>\n</div>\n<div class=\"heading-wrapper\" *ngIf=\"!isStarted\">\n  <div class=\"heading\">let`s play, my dear friend</div>\n  <button class=\"main-btn\" (click)=\"cli()\">PLAY</button>\n</div>\n"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-player1\">\n<div class=\"heading-for-player\">\n  <div>{{gamer1}}</div>\n  <div class=\"score\">{{count}}</div>\n</div>\n<table>\n  <tr>\n    <td class=\"letters\"></td>\n    <td class=\"letters\">a</td>\n    <td class=\"letters\">b</td>\n    <td class=\"letters\">c</td>\n    <td class=\"letters\">d</td>\n    <td class=\"letters\">e</td>\n    <td class=\"letters\">f</td>\n    <td class=\"letters\">g</td>\n    <td class=\"letters\">h</td>\n    <td class=\"letters\">i</td>\n    <td class=\"letters\">j</td>\n  </tr>\n  <tr>\n    <td>1</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n  <tr>\n    <td>2</td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n  </tr>\n  <tr>\n    <td>3</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n  <tr>\n    <td>4</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n  </tr>\n  <tr>\n    <td>5</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n  <tr>\n    <td>6</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n  <tr>\n    <td>7</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n  <tr>\n    <td>8</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n  <tr>\n    <td>9</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbHit (click)=\"onDisplayVict()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n  <tr>\n    <td>10</td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n    <td bbMiss (click)=\"onDisplayLose()\"></td>\n  </tr>\n</table>\n<div class=\"speech\" [textContent]=\"speech\"></div>\n</div>\n"

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-player1\">\n  <div class=\"heading-for-player\">\n    <div>{{gamer2}}</div>\n    <div class=\"score\">{{count}}</div>\n  </div>\n  <table>\n    <tr>\n      <td class=\"letters\"></td>\n      <td class=\"letters\">a</td>\n      <td class=\"letters\">b</td>\n      <td class=\"letters\">c</td>\n      <td class=\"letters\">d</td>\n      <td class=\"letters\">e</td>\n      <td class=\"letters\">f</td>\n      <td class=\"letters\">g</td>\n      <td class=\"letters\">h</td>\n      <td class=\"letters\">i</td>\n      <td class=\"letters\">j</td>\n    </tr>\n    <tr>\n      <td>1</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n    </tr>\n    <tr>\n      <td>3</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n    <tr>\n      <td>4</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n    </tr>\n    <tr>\n      <td>5</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n    <tr>\n      <td>6</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n    <tr>\n      <td>7</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n    <tr>\n      <td>8</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n    <tr>\n      <td>9</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbHit (click)=\"onDisplayVict()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n    <tr>\n      <td>10</td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n      <td bbMiss (click)=\"onDisplayLose()\"></td>\n    </tr>\n  </table>\n  <div class=\"speech\" [textContent]=\"speech\"></div>\n</div>\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.audio = new Audio();
        this.isStarted = false;
        this.title = 'BATTLESHIP!';
    }
    AppComponent.prototype.cli = function () {
        this.isStarted = true;
        this.audio.src = '../assets/sounds/newgame.mp3';
        this.audio.play();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'bb-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__player1_player1_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player2_player2_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hit_directive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__miss_directive__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__player1_player1_component__["a" /* Player1Component */],
            __WEBPACK_IMPORTED_MODULE_6__player2_player2_component__["a" /* Player2Component */],
            __WEBPACK_IMPORTED_MODULE_7__hit_directive__["a" /* HitDirective */],
            __WEBPACK_IMPORTED_MODULE_8__miss_directive__["a" /* MissDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HitDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HitDirective = (function () {
    function HitDirective() {
        this.selectedColor = 'darkred';
        this.defaultColor = 'orange';
    }
    HitDirective.prototype.ngOnInit = function () {
        this.backgroundColor = this.defaultColor;
    };
    Object.defineProperty(HitDirective.prototype, "getDefaultColor", {
        get: function () {
            return this.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitDirective.prototype, "getCursor", {
        get: function () {
            return 'pointer';
        },
        enumerable: true,
        configurable: true
    });
    HitDirective.prototype.onClick = function () {
        this.backgroundColor = this.selectedColor;
    };
    return HitDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], HitDirective.prototype, "selectedColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], HitDirective.prototype, "defaultColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* HostBinding */])('style.backgroundColor'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HitDirective.prototype, "getDefaultColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* HostBinding */])('style.cursor'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], HitDirective.prototype, "getCursor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HitDirective.prototype, "onClick", null);
HitDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[bbHit]'
    }),
    __metadata("design:paramtypes", [])
], HitDirective);

//# sourceMappingURL=hit.directive.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MissDirective = (function () {
    function MissDirective() {
        this.selectedColor = 'darkblue';
        this.defaultColor = 'orange';
    }
    MissDirective.prototype.ngOnInit = function () {
        this.backgroundColor = this.defaultColor;
    };
    Object.defineProperty(MissDirective.prototype, "getDefaultColor", {
        get: function () {
            return this.backgroundColor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MissDirective.prototype, "getCursor", {
        get: function () {
            return 'pointer';
        },
        enumerable: true,
        configurable: true
    });
    MissDirective.prototype.onClick = function () {
        this.backgroundColor = this.selectedColor;
    };
    return MissDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MissDirective.prototype, "selectedColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], MissDirective.prototype, "defaultColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* HostBinding */])('style.backgroundColor'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MissDirective.prototype, "getDefaultColor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* HostBinding */])('style.cursor'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MissDirective.prototype, "getCursor", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MissDirective.prototype, "onClick", null);
MissDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[bbMiss]'
    }),
    __metadata("design:paramtypes", [])
], MissDirective);

//# sourceMappingURL=miss.directive.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Player1Component = (function () {
    function Player1Component() {
        this.gamer1 = 'Гравець № 1';
        this.audio = new Audio();
        this.speech = '';
        this.count = 0;
    }
    Player1Component.prototype.ngOnInit = function () { };
    Player1Component.prototype.onDisplayLose = function () {
        this.speech = 'Промахнувся!Cпробуй ще!';
        this.audio.src = '../assets/sounds/splash.mp3';
        this.audio.play();
    };
    Player1Component.prototype.onDisplayVict = function () {
        this.speech = 'Ти влучив в корабель!';
        this.count++;
        this.audio.src = '../assets/sounds/hit.mp3';
        this.audio.play();
        if (this.count === 20) {
            this.speech = 'ПЕРЕМОГА!!!';
            this.audio.src = '../assets/sounds/victory.mp3';
            this.audio.play();
        }
    };
    return Player1Component;
}());
Player1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'bb-player1',
        template: __webpack_require__(143),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], Player1Component);

//# sourceMappingURL=player1.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Player2Component = (function () {
    function Player2Component() {
        this.gamer2 = 'Гравець № 2';
        this.audio = new Audio();
        this.speech = '';
        this.count = 0;
    }
    Player2Component.prototype.ngOnInit = function () { };
    Player2Component.prototype.onDisplayLose = function () {
        this.speech = 'Промахнувся!Cпробуй ще!';
        this.audio.src = '../assets/sounds/splash.mp3';
        this.audio.play();
    };
    Player2Component.prototype.onDisplayVict = function () {
        this.speech = 'Ти влучив в корабель!';
        this.count++;
        this.audio.src = '../assets/sounds/hit.mp3';
        this.audio.play();
        if (this.count === 20) {
            this.speech = 'ПЕРЕМОГА!!!';
            this.audio.src = '../assets/sounds/victory.mp3';
            this.audio.play();
        }
    };
    return Player2Component;
}());
Player2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'bb-player2',
        template: __webpack_require__(144),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [])
], Player2Component);

//# sourceMappingURL=player2.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ })

},[169]);
//# sourceMappingURL=main.bundle.js.map