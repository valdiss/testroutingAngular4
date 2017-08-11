webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servers_servers_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_user_user_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__servers_edit_server_edit_server_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servers_server_server_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_guard_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servers_edit_server_can_deactivate_guard_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__error_page_error_page_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servers_server_server_resolver_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    {
        path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */], children: [
            { path: ':id/:name', component: __WEBPACK_IMPORTED_MODULE_5__users_user_user_component__["a" /* UserComponent */] }
        ]
    },
    {
        path: 'servers',
        // canActivate:[AuthGuard],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_8__auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__servers_servers_component__["a" /* ServersComponent */],
        children: [
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_7__servers_server_server_component__["a" /* ServerComponent */], resolve: { server: __WEBPACK_IMPORTED_MODULE_11__servers_server_server_resolver_service__["a" /* ServerResolver */] } },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_6__servers_edit_server_edit_server_component__["a" /* EditServerComponent */], canDeactivate: [__WEBPACK_IMPORTED_MODULE_9__servers_edit_server_can_deactivate_guard_service__["a" /* CanDeactivateGuard */]] }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent},
    { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_10__error_page_error_page_component__["a" /* ErrorPageComponent */], data: { message: 'Page not found!', user: 'User not found' } },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/app-routing.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(175),
        styles: [__webpack_require__(165)]
    })
], AppComponent);

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/app.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servers_servers_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_user_user_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__servers_edit_server_edit_server_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__servers_server_server_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servers_servers_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_guard_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__servers_edit_server_can_deactivate_guard_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__error_page_error_page_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__servers_server_server_resolver_service__ = __webpack_require__(66);
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
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_7__servers_servers_component__["a" /* ServersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__users_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__servers_edit_server_edit_server_component__["a" /* EditServerComponent */],
            __WEBPACK_IMPORTED_MODULE_10__servers_server_server_component__["a" /* ServerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__error_page_error_page_component__["a" /* ErrorPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__servers_servers_service__["a" /* ServersService */], __WEBPACK_IMPORTED_MODULE_14__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_16__servers_edit_server_can_deactivate_guard_service__["a" /* CanDeactivateGuard */], __WEBPACK_IMPORTED_MODULE_18__servers_server_server_resolver_service__["a" /* ServerResolver */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__(178),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/page-not-found.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/environment.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" routerLinkActive='active' [routerLinkActiveOptions]='{exact:true}'><a routerLink='/'>Home</a></li>\n        <li role=\"presentation\" routerLinkActive='active'><a routerLink='/servers'>Servers</a></li>\n        <li role=\"presentation\" routerLinkActive='active'><a routerLink='/users'>Users</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<h4>{{errorMessage}}</h4>\n"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<h4>Welcome to Server Manager 4.0</h4>\n<p>Manage your Servers and Users.</p>\n<button type=\"button\" class=\"btn btn-success\" name=\"button\" (click)='onLogin()'>Log In</button>\n<button type=\"button\" class=\"btn btn-danger\" name=\"button\" (click)='onLogout()'>Log Out</button>\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<h1>\n  This page was not found!\n</h1>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf='!allowEdit'>You're not allowed to edit!</h4>\n<div *ngIf='allowEdit'>\n  <div class=\"form-group\">\n    <label for=\"name\">Server Name</label>\n    <input\n      type=\"text\"\n      id=\"name\"\n      class=\"form-control\"\n      [(ngModel)]=\"serverName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"status\">Server Status</label>\n    <select\n      id=\"status\"\n      class=\"form-control\"\n      [(ngModel)]=\"serverStatus\">\n      <option value=\"online\">Online</option>\n      <option value=\"offline\">Offline</option>\n    </select>\n  </div>\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"onUpdateServer()\">Update Server</button>\n</div>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<h5>{{ server.name }}</h5>\n<p>Server status is {{ server.status }}</p>\n<button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)='onEdit()'>Edit Server</button>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4\">\n    <div class=\"list-group\">\n      <a\n        [routerLink]=\"['/servers', server.id]\"\n        [queryParams]=\"{allowEdit:server.id === 3 ? '1': '0'}\"\n        [fragment]=\"'loading'\"\n        href=\"#\"\n        class=\"list-group-item\"\n        *ngFor=\"let server of servers\">\n        {{ server.name }}\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-4\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<p>User with ID {{ user.id}}.</p>\n<p>User name is {{ user.name }}</p>\n"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4\">\n    <div class=\"list-group\">\n      <a\n        [routerLink]=\"['/users', user.id, user.name]\"\n        href=\"#\"\n        class=\"list-group-item\"\n        *ngFor=\"let user of users\">\n        {{ user.name }}\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-sm-4\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersService; });
var ServersService = (function () {
    function ServersService() {
        this.servers = [
            {
                id: 1,
                name: 'Productionserver',
                status: 'online'
            },
            {
                id: 2,
                name: 'Testserver',
                status: 'offline'
            },
            {
                id: 3,
                name: 'Devserver',
                status: 'offline'
            }
        ];
    }
    ServersService.prototype.getServers = function () {
        return this.servers;
    };
    ServersService.prototype.getServer = function (id) {
        var server = this.servers.find(function (s) {
            return s.id === id;
        });
        return server;
    };
    ServersService.prototype.updateServer = function (id, serverInfo) {
        var server = this.servers.find(function (s) {
            return s.id === id;
        });
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    };
    return ServersService;
}());

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/servers.service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var AuthService = (function () {
    function AuthService() {
        this.loggedIn = false;
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loggedIn);
            }, 800);
        });
        return promise;
    };
    AuthService.prototype.login = function () {
        this.loggedIn = true;
    };
    AuthService.prototype.logout = function () {
        this.loggedIn = false;
    };
    return AuthService;
}());

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/auth.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated().then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/auth-guard.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorPageComponent = (function () {
    function ErrorPageComponent(route) {
        this.route = route;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.errorMessage = this.route.snapshot.data['message'];
        this.route.data.subscribe(function (data) {
            _this.errorMessage = data['message'];
        });
    };
    return ErrorPageComponent;
}());
ErrorPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-error-page',
        template: __webpack_require__(176),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ErrorPageComponent);

var _a;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/error-page.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onLogin = function () {
        this.authService.login();
    };
    HomeComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(177),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/home.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    };
    return CanDeactivateGuard;
}());

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/can-deactivate-guard.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditServerComponent = (function () {
    function EditServerComponent(serversService, route, router) {
        this.serversService = serversService;
        this.route = route;
        this.router = router;
        this.serverName = '';
        this.serverStatus = '';
        this.allowEdit = false;
        this.changeSaved = false;
    }
    EditServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (queryParams) {
            _this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        });
        this.route.fragment.subscribe();
        this.route.params.subscribe(function (params) {
            _this.server = _this.serversService.getServer(+params['id']);
        });
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    };
    EditServerComponent.prototype.onUpdateServer = function () {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
        this.changeSaved = true;
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    EditServerComponent.prototype.canDeactivate = function () {
        if (!this.allowEdit) {
            return true;
        }
        if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved) {
            return confirm('Do you really want to discard the changes?');
        }
        else {
            return true;
        }
    };
    return EditServerComponent;
}());
EditServerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-edit-server',
        template: __webpack_require__(179),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], EditServerComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/edit-server.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servers_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerResolver = (function () {
    function ServerResolver(serversService) {
        this.serversService = serversService;
    }
    ServerResolver.prototype.resolve = function (route, state) {
        return this.serversService.getServer(+route.params['id']);
    };
    return ServerResolver;
}());
ServerResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__servers_service__["a" /* ServersService */]) === "function" && _a || Object])
], ServerResolver);

var _a;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/server-resolver.service.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerComponent = (function () {
    function ServerComponent(serversService, route, router) {
        this.serversService = serversService;
        this.route = route;
        this.router = router;
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params.subscribe(
        //   (params:Params)=>{
        //     this.server = this.serversService.getServer(+params['id']);
        //   }
        // )
        this.route.data.subscribe(function (data) {
            _this.server = data['server'];
        });
    };
    ServerComponent.prototype.onEdit = function () {
        this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
    };
    return ServerComponent;
}());
ServerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-server',
        template: __webpack_require__(180),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ServerComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/server.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servers_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServersComponent = (function () {
    function ServersComponent(serversService, router, route) {
        this.serversService = serversService;
        this.router = router;
        this.route = route;
        this.servers = [];
    }
    ServersComponent.prototype.ngOnInit = function () {
        this.servers = this.serversService.getServers();
    };
    ServersComponent.prototype.onReload = function () {
        this.router.navigate(['servers']);
        // this.router.navigate(['servers'], {relativeTo:this.route});
    };
    return ServersComponent;
}());
ServersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-servers',
        template: __webpack_require__(181),
        styles: [__webpack_require__(171)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__servers_service__["a" /* ServersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], ServersComponent);

var _a, _b, _c;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/servers.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(route) {
        this.route = route;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.user = { id: +params['id'],
                name: params['name'] };
        });
        // this.user = {
        //   id:this.route.snapshot.params['id'],
        //   name: this.route.snapshot.params['name']
        // }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(182),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], UserComponent);

var _a;
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/user.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersComponent = (function () {
    function UsersComponent() {
        this.users = [
            {
                id: 1,
                name: 'Max'
            },
            {
                id: 2,
                name: 'Anna'
            },
            {
                id: 3,
                name: 'Chris'
            }
        ];
    }
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__(183),
        styles: [__webpack_require__(173)]
    })
], UsersComponent);

//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/users.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 97;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(110);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/valdi/Documents/dev/Angular/Angular 4.3/routing-start/src/main.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.bundle.js.map
