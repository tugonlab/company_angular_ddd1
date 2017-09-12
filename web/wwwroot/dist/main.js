webpackJsonp([1],{

/***/ "./ClientApp/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
function htmlFiles(url) {
    return url.length === 1 && url[0].path.endsWith('.html') ? ({ consumed: url }) : null;
}


/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("./ClientApp/app/app.component.html"),
        styles: [__webpack_require__("./ClientApp/app/app.component.css")]
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/index.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var auth_1 = __webpack_require__("./ClientApp/app/auth/auth.ts");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var app_routing_module_1 = __webpack_require__("./ClientApp/app/app-routing.module.ts");
var pages_module_1 = __webpack_require__("./ClientApp/app/pages/pages.module.ts");
var services_module_1 = __webpack_require__("./ClientApp/app/services/services.module.ts");
var pages_routing_module_1 = __webpack_require__("./ClientApp/app/pages/pages-routing.module.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            shared_module_1.SharedModule,
            services_module_1.ServicesModule,
            //AdminModule,
            auth_1.AuthModule,
            pages_module_1.PagesModule,
            pages_routing_module_1.PagesRoutingModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            ng2_translate_1.TranslateModule.forRoot({
                provide: ng2_translate_1.TranslateLoader,
                useFactory: translateFactory,
                deps: [http_1.Http]
            }),
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
function translateFactory(http) { return new ng2_translate_1.TranslateStaticLoader(http, 'assets/i18n', '.json'); }
exports.translateFactory = translateFactory;


/***/ }),

/***/ "./ClientApp/app/auth/AuthService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var config_1 = __webpack_require__("./ClientApp/app/config.ts");
var oidc_security_service_1 = __webpack_require__("./ClientApp/app/auth/oidc.security.service.ts");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/do.js");
__webpack_require__("./node_modules/rxjs/add/operator/catch.js");
__webpack_require__("./node_modules/rxjs/add/operator/filter.js");
var AuthService = (function () {
    function AuthService(_http, _config, _router, securityService) {
        this._http = _http;
        this._config = _config;
        this._router = _router;
        this.securityService = securityService;
        this.onLogin = new core_1.EventEmitter();
        this.onLogout = new core_1.EventEmitter();
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.securityService.IsAuthorized();
    };
    AuthService.prototype.getToken = function () {
        return this.securityService.GetToken();
    };
    AuthService.prototype.getIdToken = function () {
        return this.securityService.GetIdToken();
    };
    AuthService.prototype.callLoginPage = function () {
        this.login();
    };
    AuthService.prototype.callBack = function () {
        this.securityService.AuthorizedCallback();
        if (this.securityService.IsAuthorized()) {
            this.onLogin.emit(this.token);
            if (this.getCallbackUrl()) {
                window.location.href = this.getCallbackUrl();
                return;
            }
            else {
                this._router.navigate["home"];
            }
        }
    };
    AuthService.prototype.login = function () {
        console.log('Do login logic');
        this.securityService.Authorize();
    };
    AuthService.prototype.logout = function (url) {
        if (url) {
            this.setLogoutUrl(url);
        }
        this.clearToken();
        this.securityService.Logoff();
    };
    AuthService.prototype.signIn = function (loginModel) {
        var _this = this;
        var user = {
            username: loginModel.username,
            password: loginModel.password,
            grant_type: 'password',
            scope: (loginModel.scope || this._config.scope),
            client_id: loginModel.client_id || this._config.client_id,
            client_secret: loginModel.client_secret,
            redirect_uri: loginModel.redirect_uri || this._config.redirect_url
        };
        return this._http.post(this._config.authorityAddress + "/connect/token/", $.param(user), this.options).map(function (result) {
            var token = result.json();
            _this.token = token.access_token;
            _this.id_token = token.id_token;
            localStorage.setItem("token", _this.token);
            localStorage.setItem("id_token", _this.id_token);
            _this.onLogin.emit(_this.token);
            window.location.href = user.redirect_uri;
            return _this.token;
        }, function (err) {
            localStorage.removeItem("token");
            return err;
        });
    };
    AuthService.prototype.appendToken = function () {
        if (this.isLoggedIn()) {
            if (!this.headers.get("Authorization"))
                this.headers.append("Authorization", "Bearer " + this.getToken());
        }
        this.options = new http_1.RequestOptions({ headers: this.headers });
    };
    AuthService.prototype.userInfo = function () {
        var result = sessionStorage.getItem("userData");
        if (result)
            return JSON.parse(result);
        return this.securityService.UserData;
    };
    AuthService.prototype.clearToken = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("id_token");
        sessionStorage.removeItem("userData");
        this.id_token = null;
        this.token = null;
    };
    AuthService.prototype.setCallbackUrl = function (url) {
        this.callbackUrl = url;
        sessionStorage.setItem("callback_url", url);
    };
    AuthService.prototype.getCallbackUrl = function () {
        var url = sessionStorage.getItem("callback_url");
        return url;
    };
    AuthService.prototype.clearCallbackUrl = function () {
        sessionStorage.removeItem("callback_url");
    };
    AuthService.prototype.setLogoutUrl = function (url) {
        this.callbackUrl = url;
        sessionStorage.setItem("logout_url", url);
    };
    AuthService.prototype.getLogoutUrl = function () {
        var url = sessionStorage.getItem("logout_url");
        return url;
    };
    AuthService.prototype.clearLogoutUrl = function () {
        sessionStorage.removeItem("logout_url");
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, config_1.Config, router_1.Router, oidc_security_service_1.OidcSecurityService])
], AuthService);
exports.AuthService = AuthService;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/auth/CanActivateViaAuthGuard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var auth_1 = __webpack_require__("./ClientApp/app/auth/auth.ts");
var config_1 = __webpack_require__("./ClientApp/app/config.ts");
var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(authService, _router, config) {
        this.authService = authService;
        this._router = _router;
        this.config = config;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
        if (!this.config.useAuthorityServer)
            return true;
        var url = state.url;
        var logged = this.authService.isLoggedIn();
        if (!logged) {
            if (url)
                this.authService.setCallbackUrl(url);
            this.authService.login();
            return;
        }
        return logged;
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_1.AuthService, router_1.Router, config_1.Config])
], CanActivateViaAuthGuard);
exports.CanActivateViaAuthGuard = CanActivateViaAuthGuard;


/***/ }),

/***/ "./ClientApp/app/auth/auth.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//models imports/////////////////////////////////
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var AuthService_1 = __webpack_require__("./ClientApp/app/auth/AuthService.ts");
var CanActivateViaAuthGuard_1 = __webpack_require__("./ClientApp/app/auth/CanActivateViaAuthGuard.ts");
var oidc_security_service_1 = __webpack_require__("./ClientApp/app/auth/oidc.security.service.ts");
var callback_1 = __webpack_require__("./ClientApp/app/auth/callback.ts");
var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'callback', component: callback_1.LoginCallBackComponent },
                {
                    //path: '', component: StartComponent,
                    children: [
                        { path: '**', redirectTo: 'home' },
                    ]
                },
            ])
        ],
        providers: [oidc_security_service_1.OidcSecurityService, AuthService_1.AuthService, CanActivateViaAuthGuard_1.CanActivateViaAuthGuard],
        declarations: [callback_1.LoginCallBackComponent],
        exports: [callback_1.LoginCallBackComponent]
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./ClientApp/app/auth/auth.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuthService_1 = __webpack_require__("./ClientApp/app/auth/AuthService.ts");
exports.AuthService = AuthService_1.AuthService;
var CanActivateViaAuthGuard_1 = __webpack_require__("./ClientApp/app/auth/CanActivateViaAuthGuard.ts");
exports.CanActivateViaAuthGuard = CanActivateViaAuthGuard_1.CanActivateViaAuthGuard;
var jwtkeys_1 = __webpack_require__("./ClientApp/app/auth/jwtkeys.ts");
exports.JwtKey = jwtkeys_1.JwtKey;
exports.JwtKeys = jwtkeys_1.JwtKeys;
var oidc_security_service_1 = __webpack_require__("./ClientApp/app/auth/oidc.security.service.ts");
exports.OidcSecurityService = oidc_security_service_1.OidcSecurityService;
var oidc_security_validation_1 = __webpack_require__("./ClientApp/app/auth/oidc.security.validation.ts");
exports.OidcSecurityValidation = oidc_security_validation_1.OidcSecurityValidation;
var auth_module_1 = __webpack_require__("./ClientApp/app/auth/auth.module.ts");
exports.AuthModule = auth_module_1.AuthModule;
var callback_1 = __webpack_require__("./ClientApp/app/auth/callback.ts");
exports.LoginCallBackComponent = callback_1.LoginCallBackComponent;


/***/ }),

/***/ "./ClientApp/app/auth/callback.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <title>callback</title>\r\n</head>\r\n<body>\r\n    \r\n</body>\r\n</html>"

/***/ }),

/***/ "./ClientApp/app/auth/callback.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var auth_1 = __webpack_require__("./ClientApp/app/auth/auth.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var User = (function () {
    function User() {
    }
    return User;
}());
var LoginCallBackComponent = (function () {
    function LoginCallBackComponent(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.user = new User();
        this._router.events.subscribe(function (val) {
            //if (val instanceof NavigationEnd)
            // this.showModal();
        });
        this._auth.onLogin.subscribe(function (result) {
            //this.hideModal();
        });
    }
    LoginCallBackComponent.prototype.ngOnInit = function () {
        var params = this._router.parseUrl(this._router.url).queryParams;
        if (window.location.hash) {
            this._auth.callBack();
            //return;
        }
        if (params["logoutId"]) {
            var url = this._auth.getLogoutUrl() || "home";
            this._router.navigate([url]);
            this._auth.clearLogoutUrl();
        }
    };
    return LoginCallBackComponent;
}());
LoginCallBackComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./ClientApp/app/auth/callback.html"),
    }),
    __metadata("design:paramtypes", [auth_1.AuthService, router_1.Router])
], LoginCallBackComponent);
exports.LoginCallBackComponent = LoginCallBackComponent;


/***/ }),

/***/ "./ClientApp/app/auth/jwtkeys.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JwtKeys = (function () {
    function JwtKeys() {
    }
    return JwtKeys;
}());
exports.JwtKeys = JwtKeys;
var JwtKey = (function () {
    function JwtKey() {
    }
    return JwtKey;
}());
exports.JwtKey = JwtKey;


/***/ }),

/***/ "./ClientApp/app/auth/oidc.security.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/catch.js");
var Rx_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var config_1 = __webpack_require__("./ClientApp/app/config.ts");
var oidc_security_validation_1 = __webpack_require__("./ClientApp/app/auth/oidc.security.validation.ts");
var OidcSecurityService = (function () {
    function OidcSecurityService(_http, _configuration, _router) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this._router = _router;
        this.getUserData = function () {
            _this.setHeaders();
            return _this._http.get(_this._configuration.server + '/connect/userinfo', {
                headers: _this.headers,
                body: ''
            }).map(function (res) { return res.json(); });
        };
        this.actionUrl = _configuration.server + 'api/DataEventRecords/';
        this.oidcSecurityValidation = new oidc_security_validation_1.OidcSecurityValidation();
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.storage = sessionStorage; //localStorage;
        if (this.retrieve('_isAuthorized') !== '') {
            this.HasAdminRole = this.retrieve('HasAdminRole');
            this._isAuthorized = this.retrieve('_isAuthorized');
        }
    }
    OidcSecurityService.prototype.IsAuthorized = function () {
        if (this._isAuthorized) {
            if (this.oidcSecurityValidation.IsTokenExpired(this.retrieve('authorizationDataIdToken'))) {
                console.log('IsAuthorized: isTokenExpired');
                this.ResetAuthorizationData();
                return false;
            }
            return true;
        }
        return false;
    };
    OidcSecurityService.prototype.GetToken = function () {
        return this.retrieve('authorizationData');
    };
    OidcSecurityService.prototype.GetIdToken = function () {
        return this.retrieve('authorizationDataIdToken');
    };
    OidcSecurityService.prototype.ResetAuthorizationData = function () {
        this.store('authorizationData', '');
        this.store('authorizationDataIdToken', '');
        this._isAuthorized = false;
        this.HasAdminRole = false;
        this.store('HasAdminRole', false);
        this.store('_isAuthorized', false);
    };
    OidcSecurityService.prototype.SetAuthorizationData = function (token, id_token) {
        var _this = this;
        if (this.retrieve('authorizationData') !== '') {
            this.store('authorizationData', '');
        }
        console.log(token);
        console.log(id_token);
        console.log('storing to storage, getting the roles');
        this.store('authorizationData', token);
        this.store('authorizationDataIdToken', id_token);
        this._isAuthorized = true;
        this.store('_isAuthorized', true);
        this.getUserData()
            .subscribe(function (data) {
            _this.UserData = data;
            _this.store("userData", _this.UserData);
        }, function (error) { return _this.HandleError(error); }, function () {
            _this.store("userData", _this.UserData);
            if (_this.UserData && _this.UserData.role) {
                for (var i = 0; i < _this.UserData.role.length; i++) {
                    if (_this.UserData.role[i] === 'dataEventRecords.admin') {
                        _this.HasAdminRole = true;
                        _this.store('HasAdminRole', true);
                    }
                    if (_this.UserData.role[i] === 'admin') {
                        _this.HasUserAdminRole = true;
                        _this.store('HasUserAdminRole', true);
                    }
                }
            }
            //this._router.navigate([sessionStorage.getItem("callback_url") || './']);
            window.location.href = sessionStorage.getItem("callback_url") || './';
        });
    };
    OidcSecurityService.prototype.Authorize = function () {
        this.ResetAuthorizationData();
        console.log('BEGIN Authorize, no auth data');
        var authorizationUrl = this._configuration.server + '/connect/authorize';
        var client_id = this._configuration.client_id;
        var redirect_uri = this._configuration.redirect_url;
        var response_type = this._configuration.response_type;
        var scope = this._configuration.scope;
        var nonce = 'N' + Math.random() + '' + Date.now();
        var state = Date.now() + '' + Math.random();
        this.store('authStateControl', state);
        this.store('authNonce', nonce);
        console.log('AuthorizedController created. adding myautostate: ' + this.retrieve('authStateControl'));
        var url = authorizationUrl + '?' +
            'response_type=' + encodeURI(response_type) + '&' +
            'client_id=' + encodeURI(client_id) + '&' +
            'redirect_uri=' + encodeURI(redirect_uri) + '&' +
            'scope=' + encodeURI(scope) + '&' +
            'nonce=' + encodeURI(nonce) + '&' +
            'state=' + encodeURI(state);
        window.location.href = url;
    };
    OidcSecurityService.prototype.AuthorizedCallback = function () {
        var _this = this;
        console.log('BEGIN AuthorizedCallback, no auth data');
        this.ResetAuthorizationData();
        var hash = window.location.hash.substr(1);
        var result = hash.split('&').reduce(function (result, item) {
            var parts = item.split('=');
            result[parts[0]] = parts[1];
            return result;
        }, {});
        console.log(result);
        console.log('AuthorizedCallback created, begin token validation');
        var token = '';
        var id_token = '';
        var authResponseIsValid = false;
        this.getSigningKeys()
            .subscribe(function (jwtKeys) {
            _this.jwtKeys = jwtKeys;
            if (!result.error) {
                // validate state
                if (_this.oidcSecurityValidation.ValidateStateFromHashCallback(result.state, _this.retrieve('authStateControl'))) {
                    token = result.access_token;
                    id_token = result.id_token;
                    var decoded = void 0;
                    var headerDecoded = void 0;
                    decoded = _this.oidcSecurityValidation.GetPayloadFromToken(id_token, false);
                    headerDecoded = _this.oidcSecurityValidation.GetHeaderFromToken(id_token, false);
                    // validate jwt signature
                    if (_this.oidcSecurityValidation.Validate_signature_id_token(id_token, _this.jwtKeys)) {
                        // validate nonce
                        if (_this.oidcSecurityValidation.Validate_id_token_nonce(decoded, _this.retrieve('authNonce'))) {
                            // validate iss
                            if (_this.oidcSecurityValidation.Validate_id_token_iss(decoded, _this._configuration.iss)) {
                                // validate aud
                                if (_this.oidcSecurityValidation.Validate_id_token_aud(decoded, _this._configuration.client_id)) {
                                    // valiadate at_hash and access_token
                                    if (_this.oidcSecurityValidation.Validate_id_token_at_hash(token, decoded.at_hash) || !token) {
                                        _this.store('authNonce', '');
                                        _this.store('authStateControl', '');
                                        authResponseIsValid = true;
                                        console.log('AuthorizedCallback state, nonce, iss, aud, signature validated, returning token');
                                    }
                                    else {
                                        console.log('AuthorizedCallback incorrect aud');
                                    }
                                }
                                else {
                                    console.log('AuthorizedCallback incorrect aud');
                                }
                            }
                            else {
                                console.log('AuthorizedCallback incorrect iss');
                            }
                        }
                        else {
                            console.log('AuthorizedCallback incorrect nonce');
                        }
                    }
                    else {
                        console.log('AuthorizedCallback incorrect Signature id_token');
                    }
                }
                else {
                    console.log('AuthorizedCallback incorrect state');
                }
            }
            if (authResponseIsValid) {
                _this.SetAuthorizationData(token, id_token);
                console.log(_this.retrieve('authorizationData'));
            }
            else {
                _this.ResetAuthorizationData();
                _this._router.navigate(['/Unauthorized']);
            }
        });
    };
    OidcSecurityService.prototype.Logoff = function () {
        // /connect/endsession?id_token_hint=...&post_logout_redirect_uri=https://myapp.com
        console.log('BEGIN Authorize, no auth data');
        var authorizationEndsessionUrl = this._configuration.server + '/connect/endsession';
        var id_token_hint = this.retrieve('authorizationDataIdToken');
        var post_logout_redirect_uri = this._configuration.post_logout_redirect_uri;
        var url = authorizationEndsessionUrl + '?' +
            'id_token_hint=' + encodeURI(id_token_hint) + '&' +
            'post_logout_redirect_uri=' + encodeURI(post_logout_redirect_uri);
        this.ResetAuthorizationData();
        window.location.href = url;
    };
    OidcSecurityService.prototype.runGetSigningKeys = function () {
        var _this = this;
        this.getSigningKeys()
            .subscribe(function (jwtKeys) { return _this.jwtKeys = jwtKeys; }, function (error) { return _this.errorMessage = error; });
    };
    OidcSecurityService.prototype.getSigningKeys = function () {
        return this._http.get(this._configuration.jwks_url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    OidcSecurityService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    OidcSecurityService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    OidcSecurityService.prototype.HandleError = function (error) {
        console.log(error);
        if (error.status == 403) {
            this._router.navigate(['/Forbidden']);
        }
        else if (error.status == 401) {
            this.ResetAuthorizationData();
            this._router.navigate(['/Unauthorized']);
        }
    };
    OidcSecurityService.prototype.retrieve = function (key) {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    };
    OidcSecurityService.prototype.store = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    OidcSecurityService.prototype.setHeaders = function () {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        var token = this.GetToken();
        if (token !== '') {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
    };
    return OidcSecurityService;
}());
OidcSecurityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, config_1.Config, router_1.Router])
], OidcSecurityService);
exports.OidcSecurityService = OidcSecurityService;


/***/ }),

/***/ "./ClientApp/app/auth/oidc.security.validation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
// http://openid.net/specs/openid-connect-implicit-1_0.html
// id_token
//// id_token C1: The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
//// id_token C2: The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
// id_token C3: If the ID Token contains multiple audiences, the Client SHOULD verify that an azp Claim is present.
// id_token C4: If an azp (authorized party) Claim is present, the Client SHOULD verify that its client_id is the Claim Value.
//// id_token C5: The Client MUST validate the signature of the ID Token according to JWS [JWS] using the algorithm specified in the alg Header Parameter of the JOSE Header. The Client MUST use the keys provided by the Issuer.
//// id_token C6: The alg value SHOULD be RS256. Validation of tokens using other signing algorithms is described in the OpenID Connect Core 1.0 [OpenID.Core] specification.
//// id_token C7: The current time MUST be before the time represented by the exp Claim (possibly allowing for some small leeway to account for clock skew).
// id_token C8: The iat Claim can be used to reject tokens that were issued too far away from the current time, limiting the amount of time that nonces need to be stored to prevent attacks.The acceptable range is Client specific.
//// id_token C9: The value of the nonce Claim MUST be checked to verify that it is the same value as the one that was sent in the Authentication Request.The Client SHOULD check the nonce value for replay attacks.The precise method for detecting replay attacks is Client specific.
// id_token C10: If the acr Claim was requested, the Client SHOULD check that the asserted Claim Value is appropriate.The meaning and processing of acr Claim Values is out of scope for this document.
// id_token C11: When a max_age request is made, the Client SHOULD check the auth_time Claim value and request re- authentication if it determines too much time has elapsed since the last End- User authentication.
//// Access Token Validation
//// access_token C1: Hash the octets of the ASCII representation of the access_token with the hash algorithm specified in JWA[JWA] for the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is RS256, the hash algorithm used is SHA-256.
//// access_token C2: Take the left- most half of the hash and base64url- encode it.
//// access_token C3: The value of at_hash in the ID Token MUST match the value produced in the previous step if at_hash is present in the ID Token.
var OidcSecurityValidation = (function () {
    function OidcSecurityValidation() {
    }
    // id_token C7: The current time MUST be before the time represented by the exp Claim (possibly allowing for some small leeway to account for clock skew).
    OidcSecurityValidation.prototype.IsTokenExpired = function (token, offsetSeconds) {
        var decoded;
        decoded = this.GetPayloadFromToken(token, false);
        var tokenExpirationDate = this.getTokenExpirationDate(decoded);
        offsetSeconds = offsetSeconds || 0;
        if (tokenExpirationDate == null) {
            return false;
        }
        // Token expired?
        return !(tokenExpirationDate.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
    };
    // id_token C9: The value of the nonce Claim MUST be checked to verify that it is the same value as the one that was sent in the Authentication Request.The Client SHOULD check the nonce value for replay attacks.The precise method for detecting replay attacks is Client specific.
    OidcSecurityValidation.prototype.Validate_id_token_nonce = function (dataIdToken, local_nonce) {
        if (dataIdToken.nonce !== local_nonce) {
            console.log('Validate_id_token_nonce failed');
            return false;
        }
        return true;
    };
    // id_token C1: The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
    OidcSecurityValidation.prototype.Validate_id_token_iss = function (dataIdToken, client_id) {
        if (dataIdToken.iss !== client_id) {
            console.log('Validate_id_token_iss failed');
            return false;
        }
        return true;
    };
    // id_token C2: The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
    // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
    OidcSecurityValidation.prototype.Validate_id_token_aud = function (dataIdToken, aud) {
        if (dataIdToken.aud !== aud) {
            console.log('Validate_id_token_aud failed');
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.ValidateStateFromHashCallback = function (state, local_state) {
        if (state !== local_state) {
            console.log('ValidateStateFromHashCallback failed');
            return false;
        }
        return true;
    };
    OidcSecurityValidation.prototype.GetPayloadFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    OidcSecurityValidation.prototype.GetHeaderFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[0];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    OidcSecurityValidation.prototype.GetSignatureFromToken = function (token, encode) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[2];
            if (encode) {
                return encoded;
            }
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    // id_token C5: The Client MUST validate the signature of the ID Token according to JWS [JWS] using the algorithm specified in the alg Header Parameter of the JOSE Header. The Client MUST use the keys provided by the Issuer.
    // id_token C6: The alg value SHOULD be RS256. Validation of tokens using other signing algorithms is described in the OpenID Connect Core 1.0 [OpenID.Core] specification.
    OidcSecurityValidation.prototype.Validate_signature_id_token = function (id_token, jwtkeys) {
        if (!jwtkeys || !jwtkeys.keys) {
            return false;
        }
        var header_data = this.GetHeaderFromToken(id_token, false);
        var kid = header_data.kid;
        var alg = header_data.alg;
        if ('RS256' != alg) {
            console.log('Only RS256 supported');
            return false;
        }
        var isValid = false;
        for (var _i = 0, _a = jwtkeys.keys; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.kid === kid) {
                var publickey = KEYUTIL.getKey(key);
                isValid = KJUR.jws.JWS.verify(id_token, publickey, ['RS256']);
                return isValid;
            }
        }
        return isValid;
    };
    // Access Token Validation
    // access_token C1: Hash the octets of the ASCII representation of the access_token with the hash algorithm specified in JWA[JWA] for the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is RS256, the hash algorithm used is SHA-256.
    // access_token C2: Take the left- most half of the hash and base64url- encode it.
    // access_token C3: The value of at_hash in the ID Token MUST match the value produced in the previous step if at_hash is present in the ID Token.
    OidcSecurityValidation.prototype.Validate_id_token_at_hash = function (access_token, at_hash) {
        var hash = KJUR.crypto.Util.hashString(access_token, 'sha256');
        var first128bits = (hash) ? hash.substr(0, hash.length / 2) : '';
        var testdata = hextob64u(first128bits);
        if (testdata === at_hash) {
            return true; // isValid;
        }
        return false;
    };
    OidcSecurityValidation.prototype.getTokenExpirationDate = function (dataIdToken) {
        if (!dataIdToken.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(dataIdToken.exp);
        return date;
    };
    OidcSecurityValidation.prototype.urlBase64Decode = function (str) {
        if (!str)
            return '';
        var output = str.replace('-', '+').replace('_', '/');
        if (!output)
            return '';
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    };
    return OidcSecurityValidation;
}());
OidcSecurityValidation = __decorate([
    core_1.Injectable()
], OidcSecurityValidation);
exports.OidcSecurityValidation = OidcSecurityValidation;


/***/ }),

/***/ "./ClientApp/app/config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
//declare var window: any;
var Config = (function () {
    function Config() {
        this.useAuthorityServer = false;
        this.siteUrl = window.location.hostname == "localhost" ? 'http://localhost:50295' : 'http://www.sorrisochic.com.br';
        this.apiAddress = window.location.hostname == "localhost" ? 'http://localhost:57391/api/' : 'http://api.sorrisochic.com.br/api/';
        this.authorityAddress = window.location.hostname == "localhost" ? 'http://localhost:1941' : 'http://sso.tugon.com.br';
        // The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
        this.iss = this.authorityAddress;
        this.server = this.authorityAddress;
        this.redirect_url = this.siteUrl + '/callback';
        // This is required to get the signing keys so that the signiture of the Jwt can be validated.
        this.jwks_url = this.authorityAddress + '/.well-known/openid-configuration/jwks';
        // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
        // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
        this.client_id = 'sorrisochic';
        this.response_type = 'id_token token';
        this.scope = 'openid sorriso profile offline_access';
        this.post_logout_redirect_uri = this.siteUrl + '/callback';
    }
    Config.prototype.ngOnInit = function () {
        this.load();
    };
    Config.prototype.load = function () {
    };
    return Config;
}());
Config = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], Config);
exports.Config = Config;


/***/ }),

/***/ "./ClientApp/app/directives/aside.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/**
* Allows the aside to be toggled via click.
*/
var AsideToggleDirective = (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
    return AsideToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AsideToggleDirective.prototype, "toggleOpen", null);
AsideToggleDirective = __decorate([
    core_1.Directive({
        selector: '[appAsideMenuToggler]',
    }),
    __metadata("design:paramtypes", [])
], AsideToggleDirective);
exports.AsideToggleDirective = AsideToggleDirective;


/***/ }),

/***/ "./ClientApp/app/directives/breadcrumb.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
__webpack_require__("./node_modules/rxjs/add/operator/filter.js");
var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; }).subscribe(function (event) {
            _this.breadcrumbs = [];
            var currentRoute = _this.route.root, url = '';
            do {
                var childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(function (route) {
                    if (route.outlet === 'primary') {
                        var routeSnapshot = route.snapshot;
                        url += '/' + routeSnapshot.url.map(function (segment) { return segment.path; }).join('/');
                        var arr = routeSnapshot.url.map(function (segment) { return segment.path; });
                        _this.breadcrumbs.push({
                            label: arr[arr.length - 1],
                            url: url
                        });
                        currentRoute = route;
                    }
                });
            } while (currentRoute);
        });
    };
    return BreadcrumbsComponent;
}());
BreadcrumbsComponent = __decorate([
    core_1.Component({
        selector: 'app-breadcrumbs',
        template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n\n    <li class=\"breadcrumb-item\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</span>\n    </li>\n  </ng-template>"
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], BreadcrumbsComponent);
exports.BreadcrumbsComponent = BreadcrumbsComponent;


/***/ }),

/***/ "./ClientApp/app/directives/claimDirective.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var claimDirective = (function () {
    function claimDirective(el) {
        this.el = el;
        if (this.name = "nao")
            this.el.nativeElement.style.display = "none";
    }
    return claimDirective;
}());
__decorate([
    core_1.Input('claim'),
    __metadata("design:type", String)
], claimDirective.prototype, "name", void 0);
claimDirective = __decorate([
    core_1.Directive({
        selector: '[claim]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], claimDirective);
exports.claimDirective = claimDirective;


/***/ }),

/***/ "./ClientApp/app/directives/inRoleDirective.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var inRoleDirective = (function () {
    function inRoleDirective(el) {
        this.el = el;
        this.userRoles = ["operator"];
        this.roles = [];
    }
    inRoleDirective.prototype.ngOnInit = function () {
        this.checkRoles();
    };
    inRoleDirective.prototype.checkRoles = function () {
        var _this = this;
        var i = 0;
        //this.el.nativeElement.style.display = "none";
        this.roles.forEach(function (obj, index) {
            if (_this.userRoles.indexOf(_this.roles[index]) >= 0) {
                i++;
                return;
            }
        });
        if (i == 0) {
            var el = $(this.el.nativeElement);
            el.detach();
        }
    };
    return inRoleDirective;
}());
__decorate([
    core_1.Input('inRole'),
    __metadata("design:type", Array)
], inRoleDirective.prototype, "roles", void 0);
inRoleDirective = __decorate([
    core_1.Directive({
        selector: '[inRole]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], inRoleDirective);
exports.inRoleDirective = inRoleDirective;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/directives/nav-dropdown.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var NavDropdownDirective = (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    return NavDropdownDirective;
}());
NavDropdownDirective = __decorate([
    core_1.Directive({
        selector: '[appNavDropdown]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NavDropdownDirective);
exports.NavDropdownDirective = NavDropdownDirective;
/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
    return NavDropdownToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NavDropdownToggleDirective.prototype, "toggleOpen", null);
NavDropdownToggleDirective = __decorate([
    core_1.Directive({
        selector: '[appNavDropdownToggle]'
    }),
    __metadata("design:paramtypes", [NavDropdownDirective])
], NavDropdownToggleDirective);
exports.NavDropdownToggleDirective = NavDropdownToggleDirective;
exports.NAV_DROPDOWN_DIRECTIVES = [NavDropdownDirective, NavDropdownToggleDirective];


/***/ }),

/***/ "./ClientApp/app/directives/replaceDirective.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var replaceDirective = (function () {
    function replaceDirective(el) {
        this.el = el;
        this.userRoles = ["operator"];
    }
    replaceDirective.prototype.ngAfterViewInit = function () {
        this.performReplace();
    };
    replaceDirective.prototype.performReplace = function () {
        var el = $(this.el.nativeElement);
        var parent = $(el[0].parentElement);
        var inner = el.html();
        el.detach();
        parent.append(inner);
    };
    return replaceDirective;
}());
replaceDirective = __decorate([
    core_1.Directive({
        selector: '[replace]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], replaceDirective);
exports.replaceDirective = replaceDirective;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/directives/scrollTopDirective.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var scrollTopDirective = (function () {
    function scrollTopDirective(el) {
        this.el = el;
    }
    scrollTopDirective.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).click(function () {
            if (this.to) {
                $("#" + this.to).animate({ scrollTop: 0 }, 600);
            }
            else {
                $("html, body").animate({ scrollTop: 0 }, 600);
            }
            return false;
        });
    };
    return scrollTopDirective;
}());
__decorate([
    core_1.Input('scroll-top'),
    __metadata("design:type", String)
], scrollTopDirective.prototype, "to", void 0);
scrollTopDirective = __decorate([
    core_1.Directive({
        selector: '[scroll-top]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], scrollTopDirective);
exports.scrollTopDirective = scrollTopDirective;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/directives/sidebar.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/**
* Allows the sidebar to be toggled via click.
*/
var SidebarToggleDirective = (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
    return SidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarToggleDirective.prototype, "toggleOpen", null);
SidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '[appSidebarToggler]'
    }),
    __metadata("design:paramtypes", [])
], SidebarToggleDirective);
exports.SidebarToggleDirective = SidebarToggleDirective;
var SidebarMinimizeDirective = (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
    return SidebarMinimizeDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarMinimizeDirective.prototype, "toggleOpen", null);
SidebarMinimizeDirective = __decorate([
    core_1.Directive({
        selector: '[appSidebarMinimizer]'
    }),
    __metadata("design:paramtypes", [])
], SidebarMinimizeDirective);
exports.SidebarMinimizeDirective = SidebarMinimizeDirective;
var MobileSidebarToggleDirective = (function () {
    function MobileSidebarToggleDirective() {
    }
    // Check if element has class
    MobileSidebarToggleDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    MobileSidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-mobile-show');
    };
    return MobileSidebarToggleDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MobileSidebarToggleDirective.prototype, "toggleOpen", null);
MobileSidebarToggleDirective = __decorate([
    core_1.Directive({
        selector: '[appMobileSidebarToggler]'
    }),
    __metadata("design:paramtypes", [])
], MobileSidebarToggleDirective);
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = (function () {
    function SidebarOffCanvasCloseDirective() {
    }
    // Check if element has class
    SidebarOffCanvasCloseDirective.prototype.hasClass = function (target, elementClassName) {
        return new RegExp('(\\s|^)' + elementClassName + '(\\s|$)').test(target.className);
    };
    // Toggle element class
    SidebarOffCanvasCloseDirective.prototype.toggleClass = function (elem, elementClassName) {
        var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (this.hasClass(elem, elementClassName)) {
            while (newClass.indexOf(' ' + elementClassName + ' ') >= 0) {
                newClass = newClass.replace(' ' + elementClassName + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        }
        else {
            elem.className += ' ' + elementClassName;
        }
    };
    SidebarOffCanvasCloseDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        if (this.hasClass(document.querySelector('body'), 'sidebar-off-canvas')) {
            this.toggleClass(document.querySelector('body'), 'sidebar-opened');
        }
    };
    return SidebarOffCanvasCloseDirective;
}());
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SidebarOffCanvasCloseDirective.prototype, "toggleOpen", null);
SidebarOffCanvasCloseDirective = __decorate([
    core_1.Directive({
        selector: '[appSidebarClose]'
    }),
    __metadata("design:paramtypes", [])
], SidebarOffCanvasCloseDirective);
exports.SidebarOffCanvasCloseDirective = SidebarOffCanvasCloseDirective;
exports.SIDEBAR_TOGGLE_DIRECTIVES = [
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective
];


/***/ }),

/***/ "./ClientApp/app/models/Contact.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Contact = (function () {
    //////////////
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;


/***/ }),

/***/ "./ClientApp/app/pages/about/about.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/pages/about/about.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var AboutComponent = (function () {
    function AboutComponent() {
        this.load();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.load = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        template: __webpack_require__("./ClientApp/app/pages/about/about.html"),
        providers: []
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./ClientApp/app/pages/contact/contact.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n    <h3 class=\"main-heading-1\">Contatos</h3>\r\n\r\n    <div class=\"row\">   \r\n\r\n        <div id=\"top\"></div>\r\n        <div id=\"contact-form\" class=\"col-sm-12 col-lg-12\">\r\n            <div class=\"status alert alert-success contact-status\"></div>\r\n            <form id=\"main-contact-form\" class=\"contact-form\" name=\"contact-form\" method=\"post\" role=\"form\" ngSubmit=\"SendEmail(contact)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\" class=\"sr-only\">Name: </label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.name\" name=\"name\" id=\"name\" required=\"required\" placeholder=\"NOME\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\" class=\"sr-only\">Email: </label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"contact.email\" required=\"required\" placeholder=\"EMAIL\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"phoneno\" class=\"sr-only\">Phone No: </label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"phoneno\" [(ngModel)]=\"contact.phoneNumber\" id=\"phoneno\" required=\"required\" placeholder=\"TELEFONE\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"subject\" class=\"sr-only\">Subject: </label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" [(ngModel)]=\"contact.subject\" required=\"required\" placeholder=\"ASSUNTO\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"message\" class=\"sr-only\">Message: </label>\r\n                            <textarea class=\"form-control\" rows=\"8\" name=\"message\" [(ngModel)]=\"contact.message\" id=\"message\" required=\"required\" placeholder=\"MENSAGEM\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <button type=\"submit\" class=\"btn btn-lg btn-block btn-secondary text-uppercase\" value=\"Enviar\" (click)=\"SendEmail(contact)\">Enviar</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n\r\n        \r\n        <div class=\"col-sm-6 hidden-md-down\">\r\n            <sebm-google-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [streetViewControl]=\"true\">\r\n                <sebm-google-map-marker [latitude]=\"lat\" [longitude]=\"lng\"></sebm-google-map-marker>\r\n            </sebm-google-map>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<toaster-container></toaster-container>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Agendamento</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <b>{{name}}</b>, agradecemos sua mensagem<br />\r\n        Em breve entraremos em contato.<br /><br />\r\n\r\n        Atenciosamente,<br />\r\n        Equipe Sorriso Chic\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">FECHAR</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./ClientApp/app/pages/contact/contact.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var Contact_1 = __webpack_require__("./ClientApp/app/services/custom/Contact.ts");
var Contact_2 = __webpack_require__("./ClientApp/app/models/Contact.ts");
var angular2_toaster_1 = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
var _1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var ContactComponent = (function () {
    function ContactComponent(_service, _toasterService, _modalService) {
        this._service = _service;
        this._toasterService = _toasterService;
        this._modalService = _modalService;
        this.lat = -23.585697;
        this.lng = -46.569122;
        this.zoom = 18;
        this.load();
    }
    ContactComponent.prototype.load = function () {
    };
    ContactComponent.prototype.map = function () {
        this.lat = 51.678418;
        this.lng = 7.809007;
    };
    ContactComponent.prototype.ngOnInit = function () {
        this.contact = new Contact_2.Contact();
    };
    ContactComponent.prototype.open = function () {
        var modalRef = this._modalService.open(this.modalRef);
        modalRef.componentInstance.name = 'contentModal';
    };
    ContactComponent.prototype.validate = function (contact) {
        if (!contact.name) {
            this.errorMessage = "Preencha o campo nome";
            return false;
        }
        if (!contact.email) {
            this.errorMessage = "Preencha o campo email";
            return false;
        }
        if (!contact.message) {
            this.errorMessage = "Preencha o campo mensagem";
            return false;
        }
        return true;
    };
    ContactComponent.prototype.SendEmail = function (contact) {
        var _this = this;
        if (this.validate(contact)) {
            this._service.sendEmail(contact).subscribe(function (result) {
                _this.name = contact.name;
                _this.contact = new Contact_2.Contact();
                _this.open();
            }, function (error) {
                _this.errorMessage = "Problema no envio da mensagem, tente novamente";
                _this._toasterService.pop("error", "Erro", _this.errorMessage);
            });
        }
        else {
            this._toasterService.pop("error", "Erro", this.errorMessage);
        }
    };
    return ContactComponent;
}());
__decorate([
    core_1.ViewChild('content'),
    __metadata("design:type", core_1.TemplateRef)
], ContactComponent.prototype, "modalRef", void 0);
ContactComponent = __decorate([
    core_1.Component({
        styles: ["\n       .sebm-google-map-container {\n         height: 300px;\n          width:100%;\n       }\n    "],
        template: __webpack_require__("./ClientApp/app/pages/contact/contact.html"),
        providers: [Contact_1.ContactCustomService]
    }),
    __metadata("design:paramtypes", [Contact_1.ContactCustomService,
        angular2_toaster_1.ToasterService,
        _1.NgbModal])
], ContactComponent);
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./ClientApp/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./ClientApp/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./ClientApp/app/pages/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("./ClientApp/app/pages/home/home.component.html"),
        styles: [__webpack_require__("./ClientApp/app/pages/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./ClientApp/app/pages/pages-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var pages_1 = __webpack_require__("./ClientApp/app/pages/pages.ts");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
exports.routes = [
    //{ path:'', redirectTo:'about', pathMatch: 'full'},  
    //{path: '.', redirectTo: 'about', pathMatch: 'full', children: [
    { path: '', component: pages_1.HomeComponent },
    { path: 'home', component: pages_1.HomeComponent },
    { path: 'contact', component: pages_1.ContactComponent },
    { path: 'contato', component: pages_1.ContactComponent },
    { path: 'about', component: pages_1.AboutComponent },
    { path: 'quemsomos', component: pages_1.AboutComponent }
    //{ path: '**', redirectTo: 'about' }
    //]}
];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    core_1.NgModule({
        declarations: [
            pages_1.ContactComponent,
            pages_1.AboutComponent,
        ],
        imports: [router_1.RouterModule.forChild(exports.routes), shared_module_1.SharedModule],
        exports: [
            router_1.RouterModule,
            shared_module_1.SharedModule,
            pages_1.ContactComponent,
            pages_1.AboutComponent,
        ]
    })
], PagesRoutingModule);
exports.PagesRoutingModule = PagesRoutingModule;
function htmlFiles(url) {
    return url.length === 1 && url[0].path.endsWith('.html') ? ({ consumed: url }) : null;
}


/***/ }),

/***/ "./ClientApp/app/pages/pages.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var pages_routing_module_1 = __webpack_require__("./ClientApp/app/pages/pages-routing.module.ts");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var home_component_1 = __webpack_require__("./ClientApp/app/pages/home/home.component.ts");
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            pages_routing_module_1.PagesRoutingModule
        ],
        exports: [
            shared_module_1.SharedModule,
            pages_routing_module_1.PagesRoutingModule
        ],
        declarations: [home_component_1.HomeComponent]
    })
], PagesModule);
exports.PagesModule = PagesModule;


/***/ }),

/***/ "./ClientApp/app/pages/pages.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contact_1 = __webpack_require__("./ClientApp/app/pages/contact/contact.ts");
exports.ContactComponent = contact_1.ContactComponent;
var about_1 = __webpack_require__("./ClientApp/app/pages/about/about.ts");
exports.AboutComponent = about_1.AboutComponent;
var home_component_1 = __webpack_require__("./ClientApp/app/pages/home/home.component.ts");
exports.HomeComponent = home_component_1.HomeComponent;


/***/ }),

/***/ "./ClientApp/app/services/BaseService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var services_1 = __webpack_require__("./ClientApp/app/services/services.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/add/operator/do.js");
__webpack_require__("./node_modules/rxjs/add/operator/catch.js");
__webpack_require__("./node_modules/rxjs/add/operator/filter.js");
var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
        this.page = {
            list: new Array(),
            number: 1,
            size: 10,
            orderBy: 'Id',
            orderDirection: 'DESC',
            maxSize: 10
        };
        this._emitter = new core_1.EventEmitter();
    }
    BaseService.prototype.getAll = function () {
        return this.http.get(this._controller + "/GetAll")
            .map(function (response) { return response.json(); });
    };
    BaseService.prototype.getPage = function (page) {
        this.page = page;
        return this.http.post(this._controller + "/getAllPage", this.page)
            .map(function (response) {
            var result = response.json();
            return result;
        });
    };
    BaseService.prototype.getPage2 = function (page) {
        var _this = this;
        this.page = page;
        return this.http.get(this._controller + "/getAllPage/" + page.number + "/" + page.size + "/" + page.orderBy + "/" + page.orderDirection)
            .map(function (response) {
            var result = response.json();
            _this.page.totalCount = result.item2;
            _this.page.list = result.item1;
            return _this.page;
        });
    };
    BaseService.prototype.getById = function (id) {
        var _this = this;
        return this.http.get(this._controller + "/GetById/" + id)
            .map(function (response) {
            var obj = response.json();
            _this.emit('getById', obj);
            return obj;
        });
    };
    BaseService.prototype.upload = function (inputFiles, entity) {
        var _this = this;
        var props = Object.getOwnPropertyNames(entity);
        ///files=inputFiles
        var files = [];
        var fields = new Array();
        var i = 0;
        for (var _i = 0, inputFiles_1 = inputFiles; _i < inputFiles_1.length; _i++) {
            var obj = inputFiles_1[_i];
            fields.push({
                id: obj.id,
                name: obj.name,
                inputFileField: obj.name,
                controller: this._controller,
            });
            i++;
            for (var _a = 0, _b = obj.files; _a < _b.length; _a++) {
                var file = _b[_a];
                files.push(file);
            }
        }
        if (files && files.length > 0) {
            return this.http.upload(this._controller + "/upload", files, { entity: entity, files: fields })
                .map(function (response) {
                var obj = response.json();
                if (obj) {
                    var i_1 = 0;
                    for (var _i = 0, _a = obj.files; _i < _a.length; _i++) {
                        var file = _a[_i];
                        var splitted = file.inputFileField.split('.');
                        file.name = splitted[splitted.length - 1];
                        i_1++;
                    }
                    _this.emit('upload', obj);
                    files = [];
                    fields = [];
                    var props = Object.getOwnPropertyNames(entity);
                    for (var _b = 0, _c = obj.files; _b < _c.length; _b++) {
                        var file = _c[_b];
                        if (props.indexOf(file.inputFileField))
                            eval("obj.entity." + file.inputFileField + "= file.fileName");
                    }
                    return obj;
                }
                return null;
            });
        }
        return new Observable_1.Observable(function (x) {
            x.next({ entity: entity, files: fields });
        });
    };
    BaseService.prototype.image = function (fileName, controller, w, h, base64) {
        if (base64 === void 0) { base64 = false; }
        return this.http.get((controller || this._controller) + "/image/" + fileName, { w: w || 0, h: h || 0, base64: base64 })
            .map(function (response) {
            if (base64)
                return response._body;
            else
                return response.json();
        });
    };
    ////
    BaseService.prototype.save = function (entity, inputFiles) {
        var _this = this;
        if (inputFiles && inputFiles.length > 0) {
            return new Observable_1.Observable(function (t) {
                _this.upload(inputFiles, entity).subscribe(function (result) {
                    _this.callSave(result.entity).subscribe(function (x) {
                        t.next(x);
                    });
                });
            });
        }
        else {
            return this.callSave(entity);
        }
    };
    BaseService.prototype.callSave = function (entity) {
        var _this = this;
        return this.http.post(this._controller + "/Save", entity)
            .map(function (response) {
            var obj = response.json();
            _this.emit('save', obj);
            return obj;
        });
    };
    BaseService.prototype.remove = function (entity) {
        var _this = this;
        return this.http.post(this._controller + "/Remove", entity)
            .map(function () {
            _this.emit('remove', entity);
        });
    };
    BaseService.prototype.on = function (key) {
        var observer = this._emitter.asObservable();
        return observer.filter(function (event) {
            return event.key === key;
        })
            .map(function (event) {
            if (event.data)
                return event.data;
            return null;
        });
    };
    BaseService.prototype.emit = function (key, data) {
        //teste
        this._emitter.emit({ key: key, data: data });
    };
    BaseService.prototype.handleError = function (error) {
    };
    BaseService.prototype.setObjectCache = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    BaseService.prototype.getObjectCache = function (key) {
        var result = sessionStorage.getItem(key);
        if (result)
            return JSON.parse(result);
    };
    BaseService.prototype.setCache = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    BaseService.prototype.getCache = function (key) {
        return sessionStorage.getItem(key);
    };
    BaseService.prototype.removeCache = function (key) {
        sessionStorage.removeItem(key);
    };
    return BaseService;
}());
BaseService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [services_1.HttpService])
], BaseService);
exports.BaseService = BaseService;


/***/ }),

/***/ "./ClientApp/app/services/HttpService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var auth_1 = __webpack_require__("./ClientApp/app/auth/auth.ts");
var config_1 = __webpack_require__("./ClientApp/app/config.ts");
var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
__webpack_require__("./node_modules/rxjs/add/operator/catch.js");
__webpack_require__("./node_modules/rxjs/add/observable/throw.js");
var HttpService = (function () {
    function HttpService(http, config, _auth, _route) {
        var _this = this;
        this.http = http;
        this.config = config;
        this._auth = _auth;
        this._route = _route;
        this.setHeader("Content-Type", "application/json");
        this._auth.onLogout.subscribe(function (result) {
            _this.headers.delete("Authorization");
        });
    }
    HttpService.prototype.setHeader = function (key, value) {
        this.headers = new http_1.Headers();
        this.headers.append(key, value);
        this.appendToken();
        return this.headers;
    };
    HttpService.prototype.appendToken = function () {
        if (this._auth.isLoggedIn()) {
            if (!this.headers.get("Authorization"))
                this.headers.append("Authorization", "Bearer " + this._auth.getToken());
        }
        this.options = new http_1.RequestOptions({ headers: this.headers });
    };
    HttpService.prototype.prepareUrl = function (url) {
        if (url.indexOf("://") === -1)
            return this.config.apiAddress + url;
        return url;
    };
    HttpService.prototype.upload = function (url, files, obj) {
        var _this = this;
        var formData = this.loadData(files, obj);
        this.setHeader("Content-Type", undefined);
        this.setHeader("enctype", "multipart/form-data");
        return this.http.post(this.prepareUrl(url), formData, this.options).map(function (x) {
            _this.headers.delete("enctype");
            _this.setHeader("Content-Type", "application/json");
            return x;
        });
    };
    HttpService.prototype.loadData = function (files, obj) {
        var data = new FormData();
        if (obj) {
            data.append("model", JSON.stringify(obj));
        }
        if (files && files.length > 0) {
            for (var i = 0; i < files.length; i++) {
                data.append("file" + i, files[i]);
            }
        }
        return data;
    };
    HttpService.prototype.post = function (url, object) {
        var _this = this;
        this.appendToken();
        return this.http.post(this.prepareUrl(url), JSON.stringify(object), this.options)
            .map(function (res) {
            if (res.url && res.url.toLowerCase().indexOf("login") >= 0) {
                window.location.href = res.url;
            }
            return res;
        })
            .catch(function (error) {
            return _this.handleRequest(error);
        });
    };
    HttpService.prototype.get = function (url, params) {
        var _this = this;
        this.appendToken();
        return this.http.get(this.prepareUrl(url + (params ? "?" + $.param(params) : '')), this.options)
            .map(function (res) {
            if (res.url && res.url.toLowerCase().indexOf("login") >= 0) {
                window.location.href = res.url;
            }
            return res;
        })
            .catch(function (error) {
            return _this.handleRequest(error);
        });
    };
    HttpService.prototype.handleRequest = function (error) {
        if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
            console.log('The authentication session expires or the user is not authorised. Force refresh of the current page.');
            this._auth.login();
        }
        return Observable_1.Observable.throw(error);
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, config_1.Config, auth_1.AuthService, router_1.Router])
], HttpService);
exports.HttpService = HttpService;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/services/custom/Contact.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var services_1 = __webpack_require__("./ClientApp/app/services/services.ts");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ContactService_1 = __webpack_require__("./ClientApp/app/services/generated/ContactService.ts");
var ContactCustomService = (function (_super) {
    __extends(ContactCustomService, _super);
    function ContactCustomService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        return _this;
    }
    ContactCustomService.prototype.sendEmail = function (contact) {
        return this._http.post(this._controller + "/sendEmail/", contact);
        // .map((response: Response) => <Contact[]>response.json());
    };
    return ContactCustomService;
}(ContactService_1.ContactService));
ContactCustomService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [services_1.HttpService])
], ContactCustomService);
exports.ContactCustomService = ContactCustomService;


/***/ }),

/***/ "./ClientApp/app/services/generated/ContactService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var services_1 = __webpack_require__("./ClientApp/app/services/services.ts");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ContactService = (function (_super) {
    __extends(ContactService, _super);
    function ContactService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        _this._controller = "Contact";
        return _this;
    }
    return ContactService;
}(services_1.BaseService));
ContactService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [services_1.HttpService])
], ContactService);
exports.ContactService = ContactService;


/***/ }),

/***/ "./ClientApp/app/services/generated/servicesGeneratedModule.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//models imports/////////////////////////////////
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ContactService_1 = __webpack_require__("./ClientApp/app/services/generated/ContactService.ts");
var ServiceGeneratedModule = (function () {
    function ServiceGeneratedModule() {
    }
    return ServiceGeneratedModule;
}());
ServiceGeneratedModule = __decorate([
    core_1.NgModule({
        //provides
        providers: [
            ContactService_1.ContactService,
        ]
    })
], ServiceGeneratedModule);
exports.ServiceGeneratedModule = ServiceGeneratedModule;


/***/ }),

/***/ "./ClientApp/app/services/services.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var servicesGeneratedModule_1 = __webpack_require__("./ClientApp/app/services/generated/servicesGeneratedModule.ts");
var Contact_1 = __webpack_require__("./ClientApp/app/services/custom/Contact.ts");
var ServicesModule = (function () {
    function ServicesModule() {
    }
    return ServicesModule;
}());
ServicesModule = __decorate([
    core_1.NgModule({
        imports: [
            servicesGeneratedModule_1.ServiceGeneratedModule
        ],
        exports: [
            servicesGeneratedModule_1.ServiceGeneratedModule
        ],
        declarations: [],
        providers: [
            Contact_1.ContactCustomService
        ]
    })
], ServicesModule);
exports.ServicesModule = ServicesModule;


/***/ }),

/***/ "./ClientApp/app/services/services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpService_1 = __webpack_require__("./ClientApp/app/services/HttpService.ts");
exports.HttpService = HttpService_1.HttpService;
var BaseService_1 = __webpack_require__("./ClientApp/app/services/BaseService.ts");
exports.BaseService = BaseService_1.BaseService;


/***/ }),

/***/ "./ClientApp/app/shared/imgResize/ImgService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var services_1 = __webpack_require__("./ClientApp/app/services/services.ts");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
//////
var ImgService = (function (_super) {
    __extends(ImgService, _super);
    function ImgService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        _this._controller = "";
        return _this;
    }
    return ImgService;
}(services_1.BaseService));
ImgService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [services_1.HttpService])
], ImgService);
exports.ImgService = ImgService;


/***/ }),

/***/ "./ClientApp/app/shared/imgResize/imgResizeComponent.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var config_1 = __webpack_require__("./ClientApp/app/config.ts");
var ImgService_1 = __webpack_require__("./ClientApp/app/shared/imgResize/ImgService.ts");
var imgResizeComponent = (function () {
    function imgResizeComponent(_service, _config) {
        this._service = _service;
        this._config = _config;
        this.imageChange = new core_1.EventEmitter();
        this.inline = false;
    }
    imgResizeComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (changes['image']) {
            this.load();
        }
    };
    imgResizeComponent.prototype.ngOnInit = function () {
        this.load();
    };
    imgResizeComponent.prototype.load = function () {
        if (this.inline)
            this.getImagData();
        else
            this.getPath();
        this.style = "min-width:" + this.w + "px; min-height:" + this.h + "px;";
    };
    imgResizeComponent.prototype.getPath = function () {
        this._service.controller = this.controller;
        this.path = this._config.apiAddress + "/" + this.controller + "/image/" + this.image + "?w=" + this.w + "&h=" + this.h;
    };
    imgResizeComponent.prototype.getImagData = function () {
        var _this = this;
        this._service.controller = this.controller;
        this._service.image(this.image, this.controller, this.w, this.h, this.inline).subscribe(function (result) {
            _this.path = result;
        });
    };
    return imgResizeComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], imgResizeComponent.prototype, "controller", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], imgResizeComponent.prototype, "image", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], imgResizeComponent.prototype, "imageChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], imgResizeComponent.prototype, "cssClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], imgResizeComponent.prototype, "w", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], imgResizeComponent.prototype, "h", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], imgResizeComponent.prototype, "inline", void 0);
imgResizeComponent = __decorate([
    core_1.Component({
        template: "<img *ngIf=\"path\" [(src)]=\"path\" alt=\"{{image}} \" class=\"{{cssClass}}\" style=\"{{style}}\"/>",
        selector: 'img-resize',
        providers: [ImgService_1.ImgService]
    }),
    __metadata("design:paramtypes", [ImgService_1.ImgService, config_1.Config])
], imgResizeComponent);
exports.imgResizeComponent = imgResizeComponent;


/***/ }),

/***/ "./ClientApp/app/shared/shared.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/index.js");
var services_1 = __webpack_require__("./ClientApp/app/services/services.ts");
var inRoleDirective_1 = __webpack_require__("./ClientApp/app/directives/inRoleDirective.ts");
var replaceDirective_1 = __webpack_require__("./ClientApp/app/directives/replaceDirective.ts");
var scrollTopDirective_1 = __webpack_require__("./ClientApp/app/directives/scrollTopDirective.ts");
var claimDirective_1 = __webpack_require__("./ClientApp/app/directives/claimDirective.ts");
var config_1 = __webpack_require__("./ClientApp/app/config.ts");
var imgResizeComponent_1 = __webpack_require__("./ClientApp/app/shared/imgResize/imgResizeComponent.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var angular2_toaster_1 = __webpack_require__("./node_modules/angular2-toaster/angular2-toaster.js");
var core_2 = __webpack_require__("./node_modules/angular2-google-maps/core/index.js");
var aside_directive_1 = __webpack_require__("./ClientApp/app/directives/aside.directive.ts");
var breadcrumb_component_1 = __webpack_require__("./ClientApp/app/directives/breadcrumb.component.ts");
var nav_dropdown_directive_1 = __webpack_require__("./ClientApp/app/directives/nav-dropdown.directive.ts");
var sidebar_directive_1 = __webpack_require__("./ClientApp/app/directives/sidebar.directive.ts");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        declarations: [
            inRoleDirective_1.inRoleDirective,
            replaceDirective_1.replaceDirective,
            claimDirective_1.claimDirective,
            scrollTopDirective_1.scrollTopDirective,
            imgResizeComponent_1.imgResizeComponent,
            breadcrumb_component_1.BreadcrumbsComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            aside_directive_1.AsideToggleDirective,
        ],
        providers: [
            config_1.Config,
            services_1.HttpService,
            services_1.BaseService,
            angular2_toaster_1.ToasterService,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyBwO1dtoYSoiT4TmgNE4983QBOge-Q3II0'
            }),
            angular2_toaster_1.ToasterModule
        ],
        exports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule,
            ng_bootstrap_1.NgbModule,
            router_1.RouterModule,
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            ng2_translate_1.TranslateModule,
            inRoleDirective_1.inRoleDirective,
            replaceDirective_1.replaceDirective,
            claimDirective_1.claimDirective,
            scrollTopDirective_1.scrollTopDirective,
            imgResizeComponent_1.imgResizeComponent,
            angular2_toaster_1.ToasterModule,
            core_2.AgmCoreModule,
            breadcrumb_component_1.BreadcrumbsComponent,
            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
            aside_directive_1.AsideToggleDirective,
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("./ClientApp/environments/environment.ts");
if (true) {
    console.log("dev");
    module['hot'].accept();
    module['hot'].dispose(function () {
        var rootElemTagName = "app-root";
        var oldRootElem = document.querySelector(rootElemTagName);
        var newRootElem = document.createElement(rootElemTagName);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.remove();
        platform_browser_dynamic_1.platformBrowserDynamic().destroy();
    });
}
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ "./node_modules/@angular/core/@angular lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@angular/core/@angular lazy recursive";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=__webpack_hmr&dynamicPublicPath=true");
module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map