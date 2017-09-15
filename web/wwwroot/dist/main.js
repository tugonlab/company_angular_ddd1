webpackJsonp([1],{

/***/ "./ClientApp/app/admin/_generated/Contact/Edit.html":
/***/ (function(module, exports) {

module.exports = "\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\" form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">{{'CONTACT.FORM.LABEL.NAME' | translate }}</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.name\" name=\"contact.name\" autofocus />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\" form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">{{'CONTACT.FORM.LABEL.PHONE_NUMBER' | translate }}</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.phoneNumber\" name=\"contact.phoneNumber\" autofocus />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\" form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">{{'CONTACT.FORM.LABEL.EMAIL' | translate }}</label>\r\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" [(ngModel)]=\"contact.email\" name=\"contact.email\" autofocus />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\" form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">{{'CONTACT.FORM.LABEL.SUBJECT' | translate }}</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.subject\" name=\"contact.subject\" autofocus />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t\t\t\t<div class=\" form-group col-md-6\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\">{{'CONTACT.FORM.LABEL.MESSAGE' | translate }}</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.message\" name=\"contact.message\" autofocus />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/admin/_generated/Contact/Edit.ts":
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
var ContactService_1 = __webpack_require__("./ClientApp/app/services/generated/ContactService.ts");
var Contact_1 = __webpack_require__("./ClientApp/app/models/Contact.ts");
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/index.js");
var ContactEdit = /** @class */ (function () {
    function ContactEdit(_service, translate) {
        this._service = _service;
        this.translate = translate;
        this.onSave = new core_1.EventEmitter();
    }
    ContactEdit.prototype.ngOnInit = function () {
        this.contact = this.contact || new Contact_1.Contact();
    };
    ContactEdit.prototype.save = function (contact) {
        this.onSave.emit(contact);
    };
    ContactEdit.prototype.closeEdit = function () {
        this.modal.hide();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContactEdit.prototype, "obj", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContactEdit.prototype, "modal", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ContactEdit.prototype, "onSave", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Contact_1.Contact)
    ], ContactEdit.prototype, "contact", void 0);
    ContactEdit = __decorate([
        core_1.Component({
            selector: 'form-Contact',
            template: __webpack_require__("./ClientApp/app/admin/_generated/Contact/Edit.html"),
            providers: [ContactService_1.ContactService]
        }),
        __metadata("design:paramtypes", [ContactService_1.ContactService, ng2_translate_1.TranslateService])
    ], ContactEdit);
    return ContactEdit;
}());
exports.ContactEdit = ContactEdit;


/***/ }),

/***/ "./ClientApp/app/admin/_generated/Contact/Index.html":
/***/ (function(module, exports) {

module.exports = "<h4  class=\"page-title\">{{'CONTACT.TITLE' | translate }}</h4>   \r\n                \r\n                   \r\n                \r\n            <div class=\"block-area\">\r\n\t\t\t\t<a class=\"button-icon\"  tooltip-placement=\"right\" (click)=\"openEdit()\" style=\"cursor:pointer\" ><i class=\"fa fa-file fa-2x\"></i></a><br/><br/>\r\n                <table class=\"table table-bordered table-hover tile\">\r\n                    <tr>\r\n                        <th>\r\n                            {{'CONTACT.GRID.COLUMN.NAME' | translate }}\r\n                        </th>   \r\n\t\t\t\t\t\t<th>{{'CONTACT.GRID.COLUMN.ACTIONS' | translate }}</th>                      \r\n                    </tr>\r\n                    <tr *ngFor=\"let contact of contactList; let index=index\">\r\n                        <td>\r\n                            {{contact.name}}\r\n                        </td>\r\n                        <td>\r\n                            <div class=\"panel-ctrls\">\r\n                                <a style=\"cursor:pointer\" class=\"button-icon\" style=\"color:green;cursor:pointer\"  (click)=\"openEdit(contact)\">\r\n                                    <i class=\"fa fa-pencil\"></i>\r\n                                </a>\r\n                                <a style=\"cursor:pointer\" class=\"button-icon\" style=\"color:red;cursor:pointer\" (click)=\"remove(contact,index)\">\r\n                                    <i class=\"fa fa-trash-o danger\"></i>\r\n                                </a>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n\r\n\r\n                </table>\r\n\t\t\t\t<!--<pre>{{page|json}}</pre>-->\r\n\t\t\t\t<ngb-pagination *ngIf=\"page.totalCount > page.size\" [pageSize]=\"page.size\" [boundaryLinks]=\"true\" [maxSize]=\"page.maxSize\" [collectionSize]=\"page.totalCount\" [(page)]=\"page.number\" class=\"pagination-sm\" (pageChange)=\"pageChanged($event)\" [rotate]=\"false\"   previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"></ngb-pagination>\r\n</div>\r\n\r\n<!--modal edit -->\r\n<ng-template #contactModal let-c=\"close\" let-d=\"dismiss\">\r\n\t<div class=\"modal-header\">\r\n\t\t<h4 class=\"modal-title\">{{'CONTACT.TITLE' | translate }}</h4>\r\n\t\t<button type=\"button\" class=\"close\" (click)=\"hideModal()\">×</button>\t\t\r\n\t</div>\r\n\t<div class=\"modal-body\">\r\n\t\t<form-Contact [modal]=\"contactModal\" [(contact)]=\"contact\" [obj]=\"this\" (onSave)=\"save(contact,this)\" ></form-Contact>\r\n\t</div>\r\n\t<div class=\"modal-footer\">\r\n\t\t<button type=\"button\" (click)=\"save(contact)\" class=\"btn btn-success\">{{'CONTACT.FORM.BUTTON.SAVE' | translate }}</button>\r\n\t\t<button type=\"button\" (click)=\"hideModal()\" class=\"btn btn-default\">{{'CONTACT.FORM.BUTTON.CANCEL' | translate }}</button>\r\n\t</div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "./ClientApp/app/admin/_generated/Contact/Index.ts":
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
var ContactService_1 = __webpack_require__("./ClientApp/app/services/generated/ContactService.ts");
var Contact_1 = __webpack_require__("./ClientApp/app/models/Contact.ts");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
///child
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/index.js");
var ContactIndex = /** @class */ (function () {
    function ContactIndex(_service, translate, _modalService) {
        this._service = _service;
        this.translate = translate;
        this._modalService = _modalService;
        this.autoLoad = true;
        this.page = _service.page;
        this.contact = new Contact_1.Contact();
    }
    ContactIndex.prototype.ngOnInit = function () {
        this.load();
    };
    ContactIndex.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ContactIndex.prototype.hideModal = function () {
        this.modalRef.close();
    };
    ContactIndex.prototype.openModal = function (modal) {
        this.modalRef = this._modalService.open(modal);
    };
    ContactIndex.prototype.pageChanged = function (event) {
        this.autoLoad = true;
        this.load();
    };
    ContactIndex.prototype.load = function () {
        if (!this.autoLoad)
            return;
        this.getAll();
    };
    ContactIndex.prototype.save = function (contact, modal) {
        var _this = this;
        var $this = this;
        this._service.save(contact, $("input[type=file]")).subscribe(function (result) {
            _this.contact = result;
            if (!_this.contactList)
                _this.contactList = [];
            if (!contact.id)
                _this.contactList.push(result);
            else {
                var f = _this.contactList.filter(function (x) { return x.id == result.id; });
                if (f)
                    f[0] = result;
            }
            _this.modalRef.close();
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ContactIndex.prototype.getAll = function () {
        var _this = this;
        this._service.getPage(this.page)
            .subscribe(function (result) {
            _this.page.totalCount = result.totalCount;
            _this.contactList = result.list;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ContactIndex.prototype.openEdit = function (entity, modal) {
        this.contact = entity || new Contact_1.Contact();
        //this._service.emit("onOpenEdit",entity);
        if (entity) {
        }
        this.openModal(this.contactModal);
    };
    ContactIndex.prototype.remove = function (contact, index) {
        var _this = this;
        var msg = this.translate.instant('CONTACT.GRID.CONFIRM_DELETE');
        if (confirm(msg)) {
            this._service.remove(contact).subscribe(function (result) {
                //this.contact = result;
                _this.contactList.splice(index, 1);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ContactIndex.prototype, "autoLoad", void 0);
    __decorate([
        core_1.ViewChild('contactModal'),
        __metadata("design:type", core_1.TemplateRef)
    ], ContactIndex.prototype, "contactModal", void 0);
    ContactIndex = __decorate([
        core_1.Component({
            selector: 'list-Contact',
            template: __webpack_require__("./ClientApp/app/admin/_generated/Contact/Index.html"),
            providers: [
                ContactService_1.ContactService
            ]
        }),
        __metadata("design:paramtypes", [ContactService_1.ContactService, ng2_translate_1.TranslateService, ng_bootstrap_1.NgbModal])
    ], ContactIndex);
    return ContactIndex;
}());
exports.ContactIndex = ContactIndex;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./ClientApp/app/admin/_layout/adminLayoutModule.ts":
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
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var footer_1 = __webpack_require__("./ClientApp/app/admin/_layout/footer/footer.ts");
var header_1 = __webpack_require__("./ClientApp/app/admin/_layout/header/header.ts");
var navmenu_1 = __webpack_require__("./ClientApp/app/admin/_layout/navmenu/navmenu.ts");
var navmenuGenerated_1 = __webpack_require__("./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.ts");
var notification_1 = __webpack_require__("./ClientApp/app/admin/_layout/notification/notification.ts");
var slider_1 = __webpack_require__("./ClientApp/app/admin/_layout/slider/slider.ts");
var index_component_1 = __webpack_require__("./ClientApp/app/admin/_layout/index/index.component.ts");
var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule
            ],
            declarations: [
                footer_1.FooterAdminComponent,
                header_1.HeaderAdminComponent,
                navmenu_1.NavMenuAdminComponent,
                navmenuGenerated_1.NavMenuAdminGeneratedComponent,
                notification_1.NotificationAdminComponent,
                slider_1.SliderAdminComponent,
                index_component_1.IndexComponent
            ],
            exports: [
                shared_module_1.SharedModule,
                footer_1.FooterAdminComponent,
                header_1.HeaderAdminComponent,
                navmenu_1.NavMenuAdminComponent,
                navmenuGenerated_1.NavMenuAdminGeneratedComponent,
                notification_1.NotificationAdminComponent,
                slider_1.SliderAdminComponent,
                index_component_1.IndexComponent
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());
exports.AdminLayoutModule = AdminLayoutModule;


/***/ }),

/***/ "./ClientApp/app/admin/_layout/footer/footer.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container-footer\" class=\"container-footer\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <!--<component>container-footer</component>-->\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6\">\r\n                Dee Company © 2015-2016\r\n            </div>\r\n            <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 to-right\">\r\n                <i class=\"fa fa-code\"></i>\r\n                <span>Version 1.2.0</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/admin/_layout/footer/footer.ts":
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
var FooterAdminComponent = /** @class */ (function () {
    function FooterAdminComponent() {
    }
    FooterAdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-footer',
            template: __webpack_require__("./ClientApp/app/admin/_layout/footer/footer.html")
        })
    ], FooterAdminComponent);
    return FooterAdminComponent;
}());
exports.FooterAdminComponent = FooterAdminComponent;


/***/ }),

/***/ "./ClientApp/app/admin/_layout/header/header.html":
/***/ (function(module, exports) {

module.exports = "        <!-- Include the container navbar -->\r\n<div id=\"container-navbar\" class=\"container-navbar navbar\">\r\n    <!--<component>container-navbar</component>-->\r\n    <div class=\"l-container-navbar\">\r\n        <a class=\"sidebar-minimalizer btn btn-theme\" (click)=\"toggleMenu()\">\r\n            <i class=\"fa\"></i>\r\n        </a>\r\n        <span id=\"navbar-search\" class=\"navbar-search-input-icon l-mar-10\">\r\n            <i class=\"fa fa-search navbar-search-icon\"></i>\r\n            <input class=\"navbar-search\" type=\"text\" placeholder=\"Search ...\">\r\n        </span>\r\n    </div>\r\n    <div class=\"r-container-navbar\">\r\n        <!-- Notification sidebar -->\r\n        <a id=\"right-notifier-toggler\" class=\"btn btn-default btn-bordered\">\r\n            <span class=\"fa fa-bell-o\"></span>\r\n            <span class=\"badge badge-danger badge-xs upbadges\">9</span>\r\n        </a>\r\n        <!-- User information -->\r\n        <span class=\"dropdown\" id=\"profile-toggler\">\r\n            <!--<a class=\"btn btn-default btn-bordered dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <span class=\"fa fa-magic\"></span>\r\n            </a>-->\r\n            <!-- Include the theme selector component -->\r\n            <ul class=\"dropdown-menu dropdown-arrowed dropdown-menu-center w250\" style=\"margin-right: -119px\">\r\n                <li class=\"dropdown-header\">\r\n                    <h3 class=\"bold\">Profile status</h3>\r\n                    <small>79% Complete</small>\r\n                    <div class=\"progress progress-striped progress-xs\">\r\n                        <div class=\"progress-bar progress-bar-primary\" role=\"progressbar\" aria-valuenow=\"79\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 79%\">\r\n                            <span class=\"sr-only\"></span>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n                <li>\r\n                    <div>\r\n                        <ul class=\"nav nav-tabs\">\r\n                            <li class=\"active\">\r\n                                <a href=\"#tab-top-1\" data-toggle=\"tab-hover\" aria-expanded=\"false\">\r\n                                    <i class=\"fa fa-cog\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li>\r\n                                <a href=\"#tab-top-2\" data-toggle=\"tab-hover\" aria-expanded=\"true\">\r\n                                    <i class=\"fa fa-user\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"tab-content\">\r\n                        <div class=\"tab-pane active\" id=\"tab-top-1\">\r\n                            <div class=\"tab-pane-title\">\r\n                                <h3><strong>Settings</strong></h3>\r\n                            </div>\r\n                            <div class=\"to-center\">\r\n                                <!-- Include the theme selector component -->\r\n                                <div id=\"demo-themes-page\">\r\n                                    <div class=\"theme-selector theme-default-background theme-selector-bordered\" theme=\"default\">\r\n                                        <div class=\"theme-selector-label\" title=\"Default\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-white-background theme-selector-bordered\" theme=\"white\">\r\n                                        <div class=\"theme-selector-label\" title=\"White Light\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-navy-background theme-selector-bordered\" theme=\"navy\">\r\n                                        <div class=\"theme-selector-label\" title=\"Blue Navy\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-sky-background theme-selector-bordered\" theme=\"sky\">\r\n                                        <div class=\"theme-selector-label\" title=\"Blue Sky\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-lime-background theme-selector-bordered\" theme=\"lime\">\r\n                                        <div class=\"theme-selector-label\" title=\"Lime Lemon\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-dust-background theme-selector-bordered\" theme=\"dust\">\r\n                                        <div class=\"theme-selector-label\" title=\"Star Dust\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-green-background theme-selector-bordered\" theme=\"green\">\r\n                                        <div class=\"theme-selector-label\" title=\"Green Tea\"></div>\r\n                                    </div>\r\n                                    <br />\r\n                                    <div class=\"theme-selector theme-orange-background theme-selector-bordered\" theme=\"orange\">\r\n                                        <div class=\"theme-selector-label\" title=\"Orange Round\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-yellow-background theme-selector-bordered\" theme=\"yellow\">\r\n                                        <div class=\"theme-selector-label\" title=\"Yellow Sun\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-purple-background theme-selector-bordered\" theme=\"purple\">\r\n                                        <div class=\"theme-selector-label\" title=\"Deep Purple\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-chocolate-background theme-selector-bordered\" theme=\"chocolate\">\r\n                                        <div class=\"theme-selector-label\" title=\"Yummy Chocolate\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-dark-background theme-selector-bordered\" theme=\"dark\">\r\n                                        <div class=\"theme-selector-label\" title=\"Dark Night\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-green-soft-background theme-selector-bordered\" theme=\"green-soft\">\r\n                                        <div class=\"theme-selector-label\" title=\"Soft Green\"></div>\r\n                                    </div>\r\n                                    <div class=\"theme-selector theme-red-background theme-selector-bordered\" theme=\"red\">\r\n                                        <div class=\"theme-selector-label\" title=\"Wheel Red\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"tab-top-2\">\r\n                            <div class=\"tab-pane-title\">\r\n                                <h3><strong>Profile</strong></h3>\r\n                            </div>\r\n                            <div>\r\n                                Peter Boussa<br />\r\n                                <small>\r\n                                    Project Manager\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n\r\n                <li>\r\n                    <a id=\"right-notifier-toggler-2\">\r\n                        <i class=\"fa fa-bullhorn r-pad-15\"></i>Messages\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" (click)=\"logout()\">\r\n                        <i class=\"fa fa-power-off r-pad-15\"></i>Logout\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"fa fa-question-circle r-pad-15\"></i>Lockscreen\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"fa fa-info-circle r-pad-15\"></i>Help\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </span>\r\n        <!-- Fullscreen toggler -->\r\n        <!--<a id=\"fullscreen-toggler\" class=\"btn btn-default btn-bordered\">\r\n            <span class=\"fa fa-arrows-alt\"></span>\r\n        </a>-->\r\n        <a *ngIf=\"!isLoggedIn\" (click)=\"login()\" class=\"btn btn-default btn-bordered\" style=\"cursor:pointer\" >\r\n            <span class=\"fa fa-sign-in r-mar-5\"></span>Log in\r\n        </a>\r\n        <!-- Log out -->\r\n        <a *ngIf=\"isLoggedIn\" class=\"btn btn-default btn-bordered\" style=\"cursor:pointer\" (click)=\"logout()\">\r\n            <span class=\"fa fa-sign-out r-mar-5\"></span>Log out\r\n        </a>\r\n    </div>\r\n    <!-- Include the right notifier -->\r\n    <div id=\"right-notifier\">\r\n        <div class=\"right-notifier-content\">\r\n            <div class=\"right-notifier-tabs\">\r\n                <ul class=\"nav nav-tabs\">\r\n                    <li class=\"active\">\r\n                        <a href=\"#tab-1\" data-toggle=\"tab\" aria-expanded=\"false\">\r\n                            <i class=\"fa fa-bullhorn\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <!--\r\n                    <li>\r\n                        <a href=\"#tab-2\" data-toggle=\"tab\" aria-expanded=\"true\">\r\n                            <i class=\"fa fa-server\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"#tab-3\" data-toggle=\"tab\" aria-expanded=\"true\">\r\n                            <i class=\"fa fa-tasks\"></i>\r\n                        </a>\r\n                    </li>\r\n                    -->\r\n                    <li>\r\n                        <a href=\"#tab-4\" data-toggle=\"tab\" aria-expanded=\"true\">\r\n                            <i class=\"fa fa-users r-pad-5\"></i>\r\n                            Friends\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane active\" id=\"tab-1\">\r\n                    <div class=\"right-notifier-title\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <h3><strong>Notifications</strong></h3>\r\n                                <small>\r\n                                    You have 10 notifications\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <ul>\r\n                            <!--\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-twitter fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        You have one new follower!\r\n                                        <br />\r\n                                        <small>@deeTemplate is following you</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 11:26h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-facebook fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        You have one new friend!\r\n                                        <br />\r\n                                        <small>Dee Admin Template is your friend</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 11:11h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-envelope fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        You have 4 new mails!\r\n                                        <br />\r\n                                        <small>Go to webmail to read it</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 11:01h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-linkedin-square fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        Someone visited you professional profile!\r\n                                        <br />\r\n                                        <small>Go to Linkedin and check-it</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 10:42h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-google-plus fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        You have been added to the Dee Circle!\r\n                                        <br />\r\n                                        <small>Go to Google+ and check-it</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 10:31h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-facebook fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        You have 30 likes in your publication\r\n                                        <br />\r\n                                        <small>Congratulations for the post!</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 10:21h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-spotify fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        Dee Admin Template follows your playlists\r\n                                        <br />\r\n                                        <small>You listen amazing music!</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 10:20h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            -->\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-paypal fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        You received 9.000,00$ in your account\r\n                                        <br />\r\n                                        <small>Great job!</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 10:12h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-bitcoin fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        You sent 9.000,00$ to <b>Adilson</b>\r\n                                        <br />\r\n                                        <small>¿Time to sell?</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 10:10h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <!--\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-dropbox fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-10 l-pad-10\">\r\n                                        DeeTemplate shared a file with you\r\n                                        <br />\r\n                                        <small>Visit Dropbox to see content</small>\r\n                                        <br />\r\n                                        <i><small>12/11/2022 10:02h</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                             -->\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"tab-2\">\r\n                    <div class=\"right-notifier-title\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <h3><strong>Server Statistics</strong></h3>\r\n                                <small>\r\n                                    Actual server status\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <ul>\r\n                            <li class=\"right-notifier-element\">\r\n                                <h5><strong>Server status</strong></h5>\r\n                                <div class=\"progress\">\r\n                                    <div style=\"width: 45%;\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"45\" role=\"progressbar\"\r\n                                         class=\"progress-bar progress-bar-info\">Server load (45%)</div>\r\n                                </div>\r\n                                <div class=\"progress\">\r\n                                    <div style=\"width: 85%;\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"85\" role=\"progressbar\"\r\n                                         class=\"progress-bar progress-bar-danger\">Database requests (+85%)</div>\r\n                                </div>\r\n                                <div class=\"progress\">\r\n                                    <div style=\"width: 65%;\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"65\" role=\"progressbar\"\r\n                                         class=\"progress-bar progress-bar-warning\">Database connections (+65%)</div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <h5><strong>Maintenance</strong></h5>\r\n                                <h6>Application server script progress</h6>\r\n                                <div class=\"progress progress-striped active progress-xs\">\r\n                                    <div style=\"width: 90%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"90\" role=\"progressbar\"\r\n                                         class=\"progress-bar\">\r\n                                        <span class=\"sr-only\">90%</span>\r\n                                    </div>\r\n                                </div>\r\n                                <h6>Database maintenance progress</h6>\r\n                                <div class=\"progress progress-striped active progress-xs\">\r\n                                    <div style=\"width: 55%\" aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"55\" role=\"progressbar\"\r\n                                         class=\"progress-bar\">\r\n                                        <span class=\"sr-only\">55%</span>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <h5><strong>Server statistics</strong></h5>\r\n                                <h6>Traffic (last hour)</h6>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6\">\r\n                                        132 requests\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 to-right\">\r\n                                        <i class=\"fa fa-caret-up pad-h-5\"></i>22.2%\r\n                                    </div>\r\n                                </div>\r\n                                <h6>Average server response (last hour)</h6>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-6\">\r\n                                        100 ms\r\n                                    </div>\r\n                                    <div class=\"col-xs-6 to-right\">\r\n                                        <i class=\"fa fa-caret-up pad-h-5\"></i>12.1%\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"tab-3\">\r\n                    <div class=\"right-notifier-title\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <h3><strong>Tasks</strong></h3>\r\n                                <small>\r\n                                    You have 4 pending tasks\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <ul>\r\n                            <li class=\"right-notifier-element\">\r\n                                <input type=\"checkbox\" />&nbsp;&nbsp;\r\n                                Partner evaluation\r\n                                <br />\r\n                                <i><small>12/11/2022 10:00h</small></i>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <input type=\"checkbox\" />&nbsp;&nbsp;\r\n                                Meeting at main office\r\n                                <br />\r\n                                <i><small>12/11/2022 10:30h</small></i>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <input type=\"checkbox\" />&nbsp;&nbsp;\r\n                                Check sales status\r\n                                <br />\r\n                                <i><small>12/11/2022 11:00h</small></i>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <input type=\"checkbox\" />&nbsp;&nbsp;\r\n                                Add new entrance to blog\r\n                                <br />\r\n                                <i><small>12/11/2022 17:00h</small></i>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane\" id=\"tab-4\">\r\n                    <div class=\"right-notifier-title\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <h3><strong>Friends</strong></h3>\r\n                                <small>\r\n                                    Keep in contact with your friends\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n                        <ul>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-user fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Ronald C. Stevens\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-success r-pad-5\"></i><small>Online</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-facebook-color label-s\">\r\n                                            <i class=\"fa fa-facebook\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>Yesterday</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-fax fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Chanell W. Orcutt\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-success r-pad-5\"></i><small>Online</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-facebook-color label-s\">\r\n                                            <i class=\"fa fa-facebook\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>2 days ago</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-user fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Blake J. Gibson\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-success r-pad-5\"></i><small>Online</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-google-color label-s\">\r\n                                            <i class=\"fa fa-google-plus\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>last week</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-institution fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Laura E. Fagin\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-danger r-pad-5\"></i><small>Offline</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-twitter-color label-s\">\r\n                                            New\r\n                                            <i class=\"fa fa-twitter\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>22 oct</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-user-md fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Bobby V. Becker\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-success r-pad-5\"></i><small>Online</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-linkedin-color label-s\">\r\n                                            <i class=\"fa fa-linkedin\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>11 dec</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-user fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Evelyn M. Drennon\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-success r-pad-5\"></i><small>Online</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-linkedin-color label-s\">\r\n                                            <i class=\"fa fa-linkedin\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>12 nov</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-male fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Jose S. Smith\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-danger r-pad-5\"></i><small>Offline</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-linkedin-color label-s\">\r\n                                            <i class=\"fa fa-linkedin\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>9 nov</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-female fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Melody M. Rooney\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-success r-pad-5\"></i><small>Online</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-instagram-color label-s\">\r\n                                            <i class=\"fa fa-instagram\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>3 days ago</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"right-notifier-element\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-xs-2 no-h-pad to-center text-shadow-inset-dark\">\r\n                                        <i class=\"fa fa-user fa-3x opacity-25\"></i>\r\n                                    </div>\r\n                                    <div class=\"col-xs-7 l-pad-10\">\r\n                                        Brenda J. Heenan\r\n                                        <br />\r\n                                        <i class=\"fa fa-circle color-danger r-pad-5\"></i><small>Offline</small>\r\n                                    </div>\r\n                                    <div class=\"col-xs-3 to-right\">\r\n                                        <span class=\"label social-instagram-color label-s\">\r\n                                            <i class=\"fa fa-instagram\"></i>\r\n                                        </span>\r\n                                        <br /><i><small>5 days ago</small></i>\r\n                                    </div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Include the container-header -->\r\n<div id=\"container-header\" class=\"container-header\">\r\n    <!--<component>container-header</component>-->\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <h2>Dashboard</h2>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- Include the container-breadcrumb -->\r\n<div id=\"container-breadcrumb\" class=\"container-breadcrumb\">\r\n    <!--<component>container-breadcrumb</component>-->\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-10\">\r\n            <ol class=\"breadcrumb\">\r\n                <li>\r\n                    <a href=\"#\">\r\n                        <i class=\"fa fa-home\"></i> Home\r\n                    </a>\r\n                </li>\r\n                <li class=\"active\">\r\n                    Dashboard\r\n                </li>\r\n                <li class=\"v-hidden\">\r\n                    @@sub-section\r\n                </li>\r\n            </ol>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/admin/_layout/header/header.ts":
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
var HeaderAdminComponent = /** @class */ (function () {
    function HeaderAdminComponent(_auth) {
        var _this = this;
        this._auth = _auth;
        this.isLoggedIn = this._auth.isLoggedIn();
        this._auth.onLogin.subscribe(function (result) {
            _this.isLoggedIn = _this._auth.isLoggedIn();
        });
        this._auth.onLogout.subscribe(function (result) {
            _this.isLoggedIn = _this._auth.isLoggedIn();
        });
    }
    HeaderAdminComponent.prototype.login = function () {
        this._auth.callLoginPage();
    };
    HeaderAdminComponent.prototype.logout = function () {
        //if (this._auth.isLoggedIn())
        this._auth.logout();
    };
    HeaderAdminComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this._auth.isLoggedIn();
    };
    HeaderAdminComponent.prototype.toggleMenu = function () {
    };
    HeaderAdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-header',
            template: __webpack_require__("./ClientApp/app/admin/_layout/header/header.html")
        }),
        __metadata("design:paramtypes", [auth_1.AuthService])
    ], HeaderAdminComponent);
    return HeaderAdminComponent;
}());
exports.HeaderAdminComponent = HeaderAdminComponent;


/***/ }),

/***/ "./ClientApp/app/admin/_layout/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./ClientApp/app/admin/_layout/index/index.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/admin/_layout/index/index.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header navbar\">\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" appMobileSidebarToggler>&#9776;</button>\n    <a class=\"navbar-brand\" href=\"#\"></a>\n    <ul class=\"nav navbar-nav d-md-down-none\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link navbar-toggler\" href=\"#\" appSidebarToggler>&#9776;</a>\n        </li>\n        <li class=\"nav-item px-3\">\n            <a class=\"nav-link\" href=\"#\">Dashboard</a>\n        </li>\n        <li class=\"nav-item px-3\">\n            <a class=\"nav-link\" href=\"#\">Pacientes</a>\n        </li>\n    </ul>\n    <ul class=\"nav navbar-nav ml-auto\">\n        <li class=\"nav-item d-md-down-none\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\n        </li>\n        <li class=\"nav-item d-md-down-none\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\n        </li>\n        <li class=\"nav-item d-md-down-none\">\n            <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\n        </li>\n        <li class=\"nav-item dropdown\" ngbDropdown  (onToggle)=\"toggled($event)\">\n            <a href class=\"nav-link dropdown-toggle\" ngbDropdownToggle (click)=\"false\">\n                <img src=\"admin/assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                <span class=\"d-md-down-none\">{{userData?.name}}</span>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"simple-dropdown\">\n                <!--<div class=\"dropdown-header text-center\"><strong>Account</strong></div>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>-->\n                <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n                <a class=\"dropdown-item\" [routerLink]=\"['profile']\"><i class=\"fa fa-user\"></i> Profile</a>\n                <!--<a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-default\">42</span></a>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>-->\n                <div class=\"divider\"></div>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\n                <a class=\"dropdown-item\" style=\"cursor:pointer\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n            </div>\n        </li>\n        <li class=\"nav-item d-md-down-none\">\n            <a class=\"nav-link navbar-toggler\" href=\"#\" appAsideMenuToggler>&#9776;</a>\n        </li>\n    </ul>\n</header>\n<div class=\"app-body\">\n    <div class=\"sidebar\">\n        <nav class=\"sidebar-nav\">\n            <ul class=\"nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\"><i class=\"icon-speedometer\"></i> Dashboard <span class=\"badge badge-info\">NEW</span></a>\n                </li>\n                <li class=\"divider\"></li>\n                <li class=\"nav-title\">\n                    Administração\n                </li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"icon-settings\"></i> Admin</a>\n\n                    <ul class=\"nav-dropdown-items\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/servicos']\">\n                                <i class=\"fa fa-users\"></i> Quem somos\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/equipe']\">\n                                <i class=\"fa fa-users\"></i> Equipe\n                            </a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/servicos']\">\n                                <i class=\"fa fa-medkit\"></i> Serviços\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                <li class=\"divider\"></li>\n                <li class=\"nav-item nav-dropdown\" routerLinkActive=\"open\" appNavDropdown>\n                    <a class=\"nav-link nav-dropdown-toggle\" href=\"#\" appNavDropdownToggle><i class=\"fa fa-database\"></i> Data Base</a>\n                    \n                    <ul class=\"nav-dropdown-items\">\n                        <menu-generated></menu-generated>\n                    </ul>\n                </li>\n                <li class=\"divider\"></li>\n            </ul>\n        </nav>\n    </div>\n    <!-- Main content -->\n    <main class=\"main\">\n        <!-- Breadcrumb -->\n        <ol class=\"breadcrumb\">\n            <app-breadcrumbs></app-breadcrumbs>\n            <!-- Breadcrumb Menu-->\n            <li class=\"breadcrumb-menu d-md-down-none\">\n                <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-speech\"></i></a>\n                    <a class=\"btn btn-secondary\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\n                    <a class=\"btn btn-secondary\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\n                </div>\n            </li>\n        </ol>\n        <div class=\"container-fluid\">\n            <router-outlet></router-outlet>\n        </div><!-- /.conainer-fluid -->\n    </main>\n    <aside class=\"aside-menu\">\n        <ngb-tabset>\n            <ngb-tab>\n                <ng-template ngbTabTitle><i class=\"icon-list\"></i></ng-template>\n                <ng-template ngbTabContent>\n                    <div class=\"callout m-0 py-2 text-muted text-center bg-faded text-uppercase\">\n                        <small><b>Today</b></small>\n                    </div>\n                    <hr class=\"transparent mx-3 my-0\">\n                    <div class=\"callout callout-warning m-0 py-3\">\n                        <div class=\"avatar float-right\">\n                            <img src=\"/admin/assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div>Meeting with <strong>Lucas</strong></div>\n                        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n                        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\n                    </div>\n                    <hr class=\"mx-3 my-0\">\n                    <div class=\"callout callout-info m-0 py-3\">\n                        <div class=\"avatar float-right\">\n                            <img src=\"admin/assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                        </div>\n                        <div>Skype with <strong>Megan</strong></div>\n                        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 5pm</small>\n                        <small class=\"text-muted\"><i class=\"icon-social-skype\"></i>&nbsp; On-line </small>\n                    </div>\n                    <hr class=\"transparent mx-3 my-0\">\n                    <div class=\"callout m-0 py-2 text-muted text-center bg-faded text-uppercase\">\n                        <small><b>Tomorrow</b></small>\n                    </div>\n                    <hr class=\"transparent mx-3 my-0\">\n                    <div class=\"callout callout-danger m-0 py-3\">\n                        <div>New UI Project - <strong>deadline</strong></div>\n                        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 10 - 11pm</small>\n                        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\n                        <div class=\"avatars-stack mt-2\">\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"mx-3 my-0\">\n                    <div class=\"callout callout-success m-0 py-3\">\n                        <div><strong>#10 Startups.Garden</strong> Meetup</div>\n                        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 1 - 3pm</small>\n                        <small class=\"text-muted\"><i class=\"icon-location-pin\"></i>&nbsp; Palo Alto, CA </small>\n                    </div>\n                    <hr class=\"mx-3 my-0\">\n                    <div class=\"callout callout-primary m-0 py-3\">\n                        <div><strong>Team meeting</strong></div>\n                        <small class=\"text-muted mr-3\"><i class=\"icon-calendar\"></i>&nbsp; 4 - 6pm</small>\n                        <small class=\"text-muted\"><i class=\"icon-home\"></i>&nbsp; creativeLabs HQ </small>\n                        <div class=\"avatars-stack mt-2\">\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/2.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/3.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/4.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/5.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                            <div class=\"avatar avatar-xs\">\n                                <img src=\"admin/assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                            </div>\n                        </div>\n                    </div>\n                    <hr class=\"mx-3 my-0\">\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n                <ng-template ngbTabTitle><i class=\"icon-speech\"></i></ng-template>\n                <ng-template ngbTabContent>\n                    <div class=\"p-3\">\n                        <div class=\"message\">\n                            <div class=\"py-3 pb-5 mr-3 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"admin/assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-success\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">Lukasz Holeczek</small>\n                                <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                        </div>\n                        <hr>\n                        <div class=\"message\">\n                            <div class=\"py-3 pb-5 mr-3 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"admin/assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-success\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">Lukasz Holeczek</small>\n                                <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                        </div>\n                        <hr>\n                        <div class=\"message\">\n                            <div class=\"py-3 pb-5 mr-3 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"admin/assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-success\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">Lukasz Holeczek</small>\n                                <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                        </div>\n                        <hr>\n                        <div class=\"message\">\n                            <div class=\"py-3 pb-5 mr-3 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"admin/assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-success\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">Lukasz Holeczek</small>\n                                <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                        </div>\n                        <hr>\n                        <div class=\"message\">\n                            <div class=\"py-3 pb-5 mr-3 float-left\">\n                                <div class=\"avatar\">\n                                    <img src=\"admin/assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\n                                    <span class=\"avatar-status badge-success\"></span>\n                                </div>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">Lukasz Holeczek</small>\n                                <small class=\"text-muted float-right mt-1\">1:52 PM</small>\n                            </div>\n                            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\n                            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\n                        </div>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n            <ngb-tab>\n                <ng-template ngbTabTitle><i class=\"icon-settings\"></i></ng-template>\n                <ng-template ngbTabContent>\n                    <div class=\"p-3\">\n                        <h6>Settings</h6>\n                        <div class=\"aside-options\">\n                            <div class=\"clearfix mt-4\">\n                                <small><b>Option 1</b></small>\n                                <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                                    <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                    <span class=\"switch-handle\"></span>\n                                </label>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n                            </div>\n                        </div>\n                        <div class=\"aside-options\">\n                            <div class=\"clearfix mt-3\">\n                                <small><b>Option 2</b></small>\n                                <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                    <input type=\"checkbox\" class=\"switch-input\">\n                                    <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                    <span class=\"switch-handle\"></span>\n                                </label>\n                            </div>\n                            <div>\n                                <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\n                            </div>\n                        </div>\n                        <div class=\"aside-options\">\n                            <div class=\"clearfix mt-3\">\n                                <small><b>Option 3</b></small>\n                                <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                    <input type=\"checkbox\" class=\"switch-input\">\n                                    <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                    <span class=\"switch-handle\"></span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class=\"aside-options\">\n                            <div class=\"clearfix mt-3\">\n                                <small><b>Option 4</b></small>\n                                <label class=\"switch switch-text switch-pill switch-success switch-sm float-right\">\n                                    <input type=\"checkbox\" class=\"switch-input\" checked>\n                                    <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n                                    <span class=\"switch-handle\"></span>\n                                </label>\n                            </div>\n                        </div>\n                        <hr>\n                        <h6>System Utilization</h6>\n                        <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\n                        <div class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                        <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\n                        <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\n                        <div class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                        <small class=\"text-muted\">11444GB/16384MB</small>\n                        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\n                        <div class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                        <small class=\"text-muted\">243GB/256GB</small>\n                        <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\n                        <div class=\"progress progress-xs\">\n                            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                        <small class=\"text-muted\">25GB/256GB</small>\n                    </div>\n                </ng-template>\n            </ngb-tab>\n        </ngb-tabset>\n    </aside>\n</div>\n<footer class=\"app-footer\">\n    <a href=\"http://coreui.io\">CoreUI</a> &copy; 2017 creativeLabs.\n    <span class=\"float-right\">Powered by <a href=\"http://coreui.io\">CoreUI</a></span>\n</footer>\n\n\n<!-- Scroll up -->\n<a href=\"#\" class=\"fa scrollup\"></a>\n\n<!-- ----------------------------------------------------------------------------------------------- -->\n\n"

/***/ }),

/***/ "./ClientApp/app/admin/_layout/index/index.component.ts":
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
var IndexComponent = /** @class */ (function () {
    function IndexComponent(_authService) {
        this._authService = _authService;
        this.disabled = false;
        this.status = { isopen: false };
    }
    IndexComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    IndexComponent.prototype.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    };
    IndexComponent.prototype.ngOnInit = function () {
        this.userData = this._authService.userInfo();
    };
    IndexComponent.prototype.logout = function () {
        this.userData = this._authService.logout('admin');
    };
    IndexComponent = __decorate([
        core_1.Component({
            selector: 'app-index',
            template: __webpack_require__("./ClientApp/app/admin/_layout/index/index.component.html"),
            styles: [__webpack_require__("./ClientApp/app/admin/_layout/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [auth_1.AuthService])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;


/***/ }),

/***/ "./ClientApp/app/admin/_layout/navmenu/navmenu.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./ClientApp/app/admin/_layout/navmenu/navmenu.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/admin/_layout/navmenu/navmenu.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar-nav\" class=\"sidebar-nav\">\r\n    <div id=\"sidebar-wrapper\" class=\"sidebar-wrapper\" data-background=\"default\">\r\n        <!--<component>sidebar-nav</component>-->\r\n        <ul class=\"side-nav-top nav\">\r\n            <li class=\"sidebar-nav-logo\">\r\n                <!--<component>sidebar-nav-logo</component>-->\r\n                <img src=\"/assets/admin/img/swapomoney_logo_p.png\" alt=\"Dee Admin\" (click)=\"myAlert('test')\">\r\n                <span class=\"logo-text\">\r\n                    <b>Admin</b>\r\n                </span>\r\n            </li>\r\n            <li class=\"sidebar-nav-profile\">\r\n                <!--<component>sidebar-nav-profile</component>-->\r\n                <div class=\"profile-left\">\r\n                    <img src=\"/assets/admin/img/user.jpg\" alt=\"Peter Boussa\">\r\n                </div>\r\n                <div class=\"profile-right\">\r\n                    <span class=\"name\">\r\n                        Admin<i id=\"user-profile-settings-toggler\" class=\"fa fa-caret-down l-pad-5\"></i>\r\n                    </span>\r\n                    <span class=\"info\">\r\n                        Project Manager\r\n                    </span>\r\n                </div>\r\n            </li>\r\n            <!-- Profile settings -->\r\n            <li class=\"side-nav-profile-settings\" style=\"display: none;\">\r\n                <ul class=\"inline-list\">\r\n                    <li>\r\n                        <a id=\"right-notifier-toggler-3\"\r\n                           class=\"btn btn-white-hover mb-5\"\r\n                           data-placement=\"top\"\r\n                           data-toggle=\"tooltip\"\r\n                           data-original-title=\"Notifications\">\r\n                            <i class=\"fa fa-bell-o\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"btn btn-white-hover mb-5\"\r\n                           data-placement=\"top\"\r\n                           data-toggle=\"tooltip\"\r\n                           data-original-title=\"Profile\"\r\n                           href=\"profile.html\">\r\n                            <i class=\"fa fa-user\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"btn btn-white-hover mb-5\"\r\n                           data-placement=\"top\"\r\n                           data-toggle=\"tooltip\"\r\n                           data-original-title=\"Inbox\"\r\n                           href=\"inbox.html\">\r\n                            <i class=\"fa fa-inbox\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"btn btn-white-hover mb-5\"\r\n                           data-placement=\"top\"\r\n                           data-toggle=\"tooltip\"\r\n                           data-original-title=\"Desktop\">\r\n                            <i class=\"fa fa-desktop\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"btn btn-white-hover mb-5\"\r\n                           data-placement=\"top\"\r\n                           data-toggle=\"tooltip\"\r\n                           data-original-title=\"Support\">\r\n                            <i class=\"fa fa-support\"></i>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"btn btn-white-hover mb-5\"\r\n                           data-placement=\"top\"\r\n                           data-toggle=\"tooltip\"\r\n                           data-original-title=\"Log out\"\r\n                           href=\"login.html\">\r\n                            <i class=\"fa fa-sign-out l-pad-5\"></i>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <!-- / Profile settings -->\r\n        </ul>\r\n        <ul id=\"side-nav\" class=\"side-nav nav\" [inRole]=\"['operator']\">\r\n            <li class=\"active\">\r\n                <a href=''>\r\n                    <i class=\"fa fa-desktop\"></i>\r\n                    <span class=\"name\">Dashboard</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"@@activate-ui-elements\">\r\n                <a href=\"#\">\r\n                    <i class=\"fa fa-cogs\"></i>\r\n                    <span class=\"name\">Admin</span>\r\n                    <span class=\"fa expand\"></span>\r\n                </a>\r\n                <ul class=\"nav nav-second-level collapse\">\r\n                    <menu-generated></menu-generated>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./ClientApp/app/admin/_layout/navmenu/navmenu.ts":
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
var NavMenuAdminComponent = /** @class */ (function () {
    function NavMenuAdminComponent(_auth) {
        var _this = this;
        this._auth = _auth;
        this.user = {};
        this._auth.onLogin.subscribe(function (result) {
            _this.isLoggedIn = _this._auth.isLoggedIn();
        });
        this._auth.onLogout.subscribe(function (result) {
            _this.isLoggedIn = _this._auth.isLoggedIn();
        });
        if (this._auth.isLoggedIn())
            this.user = this._auth.userInfo();
        //this._auth.userInfo().subscribe(
        //    result => {
        //        this.user = result;
        //    }
        //)
    }
    NavMenuAdminComponent.prototype.myAlert = function (msg) {
    };
    NavMenuAdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-nav-menu',
            template: __webpack_require__("./ClientApp/app/admin/_layout/navmenu/navmenu.html"),
            styles: [__webpack_require__("./ClientApp/app/admin/_layout/navmenu/navmenu.css")]
        }),
        __metadata("design:paramtypes", [auth_1.AuthService])
    ], NavMenuAdminComponent);
    return NavMenuAdminComponent;
}());
exports.NavMenuAdminComponent = NavMenuAdminComponent;


/***/ }),

/***/ "./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.html":
/***/ (function(module, exports) {

module.exports = "\r\n\t<li class=\"nav-item\">\r\n\t\t<a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['/admin/contact']\">\r\n\t\t\t<i class=\"fa fa-database\"></i> Contact\r\n\t\t</a>\r\n\t</li>\r\n\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.ts":
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
var NavMenuAdminGeneratedComponent = /** @class */ (function () {
    function NavMenuAdminGeneratedComponent() {
    }
    NavMenuAdminGeneratedComponent = __decorate([
        core_1.Component({
            selector: "menu-generated",
            styles: [__webpack_require__("./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.css")],
            template: __webpack_require__("./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.html"),
        })
    ], NavMenuAdminGeneratedComponent);
    return NavMenuAdminGeneratedComponent;
}());
exports.NavMenuAdminGeneratedComponent = NavMenuAdminGeneratedComponent;


/***/ }),

/***/ "./ClientApp/app/admin/_layout/notification/notification.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"container-messages\" class=\"container-messages\">\r\n    <div class=\"page-alert alert alert-info\">\r\n        <button class=\"close\" data-dismiss=\"alert\">×</button>\r\n        <strong>Hello Peter!</strong> Welcome to Dee Admin Template go to the <a class=\"alert-link\" href=\"features.html\">features section</a> to get more information.\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/admin/_layout/notification/notification.ts":
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
var NotificationAdminComponent = /** @class */ (function () {
    function NotificationAdminComponent() {
    }
    NotificationAdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-notification',
            template: __webpack_require__("./ClientApp/app/admin/_layout/notification/notification.html")
        })
    ], NotificationAdminComponent);
    return NotificationAdminComponent;
}());
exports.NotificationAdminComponent = NotificationAdminComponent;


/***/ }),

/***/ "./ClientApp/app/admin/_layout/slider/slider.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section class='slider clearfix'>\r\n</section>"

/***/ }),

/***/ "./ClientApp/app/admin/_layout/slider/slider.ts":
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
var SliderAdminComponent = /** @class */ (function () {
    function SliderAdminComponent() {
    }
    SliderAdminComponent = __decorate([
        core_1.Component({
            selector: 'admin-slider',
            template: __webpack_require__("./ClientApp/app/admin/_layout/slider/slider.html")
        })
    ], SliderAdminComponent);
    return SliderAdminComponent;
}());
exports.SliderAdminComponent = SliderAdminComponent;


/***/ }),

/***/ "./ClientApp/app/admin/admin-routing.module.ts":
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
var generated_1 = __webpack_require__("./ClientApp/app/admin/generated.ts");
var routes = [];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes), generated_1.GeneratedAdminModule],
            exports: [router_1.RouterModule]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
exports.AdminRoutingModule = AdminRoutingModule;


/***/ }),

/***/ "./ClientApp/app/admin/admin.module.ts":
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
var common_1 = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
var admin_routing_module_1 = __webpack_require__("./ClientApp/app/admin/admin-routing.module.ts");
//import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
//import { Http } from '@angular/http';
var generated_1 = __webpack_require__("./ClientApp/app/admin/generated.ts");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                generated_1.GeneratedAdminModule,
            ],
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//export function translateFactory(http: Http) { return new TranslateStaticLoader(http, 'assets/i18n', '.json') } 


/***/ }),

/***/ "./ClientApp/app/admin/generated.ts":
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
var auth_1 = __webpack_require__("./ClientApp/app/auth/auth.ts");
var index_component_1 = __webpack_require__("./ClientApp/app/admin/_layout/index/index.component.ts");
var adminLayoutModule_1 = __webpack_require__("./ClientApp/app/admin/_layout/adminLayoutModule.ts");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var combos_module_1 = __webpack_require__("./ClientApp/app/combos/combos.module.ts");
var Edit_1 = __webpack_require__("./ClientApp/app/admin/_generated/Contact/Edit.ts");
var Index_1 = __webpack_require__("./ClientApp/app/admin/_generated/Contact/Index.ts");
var GeneratedAdminModule = /** @class */ (function () {
    function GeneratedAdminModule() {
    }
    GeneratedAdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                Edit_1.ContactEdit,
                Index_1.ContactIndex,
            ],
            imports: [
                shared_module_1.SharedModule,
                combos_module_1.CombosModule,
                adminLayoutModule_1.AdminLayoutModule,
                router_1.RouterModule.forChild([
                    {
                        path: 'admin', component: index_component_1.IndexComponent, canActivate: [auth_1.CanActivateViaAuthGuard],
                        children: [
                            { path: 'contact', component: Index_1.ContactIndex, canActivate: [auth_1.CanActivateViaAuthGuard] },
                            { path: 'contact/:id', component: Edit_1.ContactEdit, canActivate: [auth_1.CanActivateViaAuthGuard] },
                            { path: 'contact/new', component: Edit_1.ContactEdit, canActivate: [auth_1.CanActivateViaAuthGuard] },
                        ]
                    }
                ])
            ],
            exports: [
                adminLayoutModule_1.AdminLayoutModule,
                shared_module_1.SharedModule,
                Edit_1.ContactEdit,
                Index_1.ContactIndex,
            ]
        })
    ], GeneratedAdminModule);
    return GeneratedAdminModule;
}());
exports.GeneratedAdminModule = GeneratedAdminModule;


/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./ClientApp/app/app.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/index.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.title = 'app';
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_translate_1.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
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
var router_1 = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
var ng2_translate_1 = __webpack_require__("./node_modules/ng2-translate/index.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var auth_1 = __webpack_require__("./ClientApp/app/auth/auth.ts");
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var services_module_1 = __webpack_require__("./ClientApp/app/services/services.module.ts");
var pages_module_1 = __webpack_require__("./ClientApp/app/pages/pages.module.ts");
var admin_module_1 = __webpack_require__("./ClientApp/app/admin/admin.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule,
                services_module_1.ServicesModule,
                pages_module_1.PagesModule,
                admin_module_1.AdminModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '', loadChildren: './pages/pages.module#PagesModule' },
                    { path: '', loadChildren: './admin/admin.module#AdminModule' }
                ]),
                auth_1.AuthModule,
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
    return AppModule;
}());
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
var AuthService = /** @class */ (function () {
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
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.Config, router_1.Router, oidc_security_service_1.OidcSecurityService])
    ], AuthService);
    return AuthService;
}());
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
var CanActivateViaAuthGuard = /** @class */ (function () {
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
    CanActivateViaAuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_1.AuthService, router_1.Router, config_1.Config])
    ], CanActivateViaAuthGuard);
    return CanActivateViaAuthGuard;
}());
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
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'callback', component: callback_1.LoginCallBackComponent },
                ])
            ],
            providers: [oidc_security_service_1.OidcSecurityService, AuthService_1.AuthService, CanActivateViaAuthGuard_1.CanActivateViaAuthGuard],
            declarations: [callback_1.LoginCallBackComponent],
            exports: [callback_1.LoginCallBackComponent]
        })
    ], AuthModule);
    return AuthModule;
}());
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
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var LoginCallBackComponent = /** @class */ (function () {
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
    LoginCallBackComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./ClientApp/app/auth/callback.html"),
        }),
        __metadata("design:paramtypes", [auth_1.AuthService, router_1.Router])
    ], LoginCallBackComponent);
    return LoginCallBackComponent;
}());
exports.LoginCallBackComponent = LoginCallBackComponent;


/***/ }),

/***/ "./ClientApp/app/auth/jwtkeys.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JwtKeys = /** @class */ (function () {
    function JwtKeys() {
    }
    return JwtKeys;
}());
exports.JwtKeys = JwtKeys;
var JwtKey = /** @class */ (function () {
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
var OidcSecurityService = /** @class */ (function () {
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
    OidcSecurityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.Config, router_1.Router])
    ], OidcSecurityService);
    return OidcSecurityService;
}());
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
var OidcSecurityValidation = /** @class */ (function () {
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
    OidcSecurityValidation = __decorate([
        core_1.Injectable()
    ], OidcSecurityValidation);
    return OidcSecurityValidation;
}());
exports.OidcSecurityValidation = OidcSecurityValidation;


/***/ }),

/***/ "./ClientApp/app/combos/combo.contact.ts":
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
var ContactService_1 = __webpack_require__("./ClientApp/app/services/generated/ContactService.ts");
var Contact_1 = __webpack_require__("./ClientApp/app/models/Contact.ts");
var ComboContactComponent = /** @class */ (function () {
    function ComboContactComponent(_service) {
        this._service = _service;
        this.modelChange = new core_1.EventEmitter();
    }
    ComboContactComponent.prototype.updateData = function (event) {
        this.model = event;
        this.modelChange.emit(event);
    };
    ComboContactComponent.prototype.ngOnInit = function () {
        this.contact = new Contact_1.Contact();
        this.getAll();
    };
    ComboContactComponent.prototype.getAll = function () {
        var _this = this;
        this._service.getAll()
            .subscribe(function (result) {
            _this.contactList = result;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ComboContactComponent.prototype, "cssClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ComboContactComponent.prototype, "model", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ComboContactComponent.prototype, "modelChange", void 0);
    ComboContactComponent = __decorate([
        core_1.Component({
            selector: 'combo-contact',
            template: "\n\t<select [ngModel]=model (ngModelChange)=\"updateData($event)\"  name=\"contact\" class=\"{{cssClass}}\" >\n\t\t<option *ngFor=\"let contact of contactList\" [value]=\"contact.id\">{{contact.name}}</option>\n\t</select>",
            providers: [ContactService_1.ContactService]
        }),
        __metadata("design:paramtypes", [ContactService_1.ContactService])
    ], ComboContactComponent);
    return ComboContactComponent;
}());
exports.ComboContactComponent = ComboContactComponent;


/***/ }),

/***/ "./ClientApp/app/combos/combos.module.ts":
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
var shared_module_1 = __webpack_require__("./ClientApp/app/shared/shared.module.ts");
var combo_contact_1 = __webpack_require__("./ClientApp/app/combos/combo.contact.ts");
var CombosModule = /** @class */ (function () {
    function CombosModule() {
    }
    CombosModule = __decorate([
        core_1.NgModule({
            declarations: [
                combo_contact_1.ComboContactComponent,
            ],
            imports: [
                shared_module_1.SharedModule,
            ],
            exports: [
                combo_contact_1.ComboContactComponent,
            ]
        })
    ], CombosModule);
    return CombosModule;
}());
exports.CombosModule = CombosModule;


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
var Config = /** @class */ (function () {
    function Config() {
        this.useAuthorityServer = false;
        this.siteUrl = window.location.hostname == "localhost" ? 'http://localhost:50295' : 'http://www.sorrisochic.com.br';
        this.apiAddress = window.location.hostname == "localhost" ? 'http://localhost:52053/api/' : 'http://api.sorrisochic.com.br/api/';
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
    Config = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());
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
var AsideToggleDirective = /** @class */ (function () {
    function AsideToggleDirective() {
    }
    AsideToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('aside-menu-hidden');
    };
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
    return AsideToggleDirective;
}());
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
var BreadcrumbsComponent = /** @class */ (function () {
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
    BreadcrumbsComponent = __decorate([
        core_1.Component({
            selector: 'app-breadcrumbs',
            template: "\n  <ng-template ngFor let-breadcrumb [ngForOf]=\"breadcrumbs\" let-last = last>\n\n    <li class=\"breadcrumb-item\"\n        [ngClass]=\"{active: last}\">\n      <a *ngIf=\"!last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n      <span *ngIf=\"last\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</span>\n    </li>\n  </ng-template>"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
    ], BreadcrumbsComponent);
    return BreadcrumbsComponent;
}());
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
var claimDirective = /** @class */ (function () {
    function claimDirective(el) {
        this.el = el;
        if (this.name = "nao")
            this.el.nativeElement.style.display = "none";
    }
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
    return claimDirective;
}());
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
var inRoleDirective = /** @class */ (function () {
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
    return inRoleDirective;
}());
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
var NavDropdownDirective = /** @class */ (function () {
    function NavDropdownDirective(el) {
        this.el = el;
    }
    NavDropdownDirective.prototype.toggle = function () {
        this.el.nativeElement.classList.toggle('open');
    };
    NavDropdownDirective = __decorate([
        core_1.Directive({
            selector: '[appNavDropdown]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], NavDropdownDirective);
    return NavDropdownDirective;
}());
exports.NavDropdownDirective = NavDropdownDirective;
/**
* Allows the dropdown to be toggled via click.
*/
var NavDropdownToggleDirective = /** @class */ (function () {
    function NavDropdownToggleDirective(dropdown) {
        this.dropdown = dropdown;
    }
    NavDropdownToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        this.dropdown.toggle();
    };
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
    return NavDropdownToggleDirective;
}());
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
var replaceDirective = /** @class */ (function () {
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
    replaceDirective = __decorate([
        core_1.Directive({
            selector: '[replace]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], replaceDirective);
    return replaceDirective;
}());
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
var scrollTopDirective = /** @class */ (function () {
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
    return scrollTopDirective;
}());
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
var SidebarToggleDirective = /** @class */ (function () {
    function SidebarToggleDirective() {
    }
    SidebarToggleDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-hidden');
    };
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
    return SidebarToggleDirective;
}());
exports.SidebarToggleDirective = SidebarToggleDirective;
var SidebarMinimizeDirective = /** @class */ (function () {
    function SidebarMinimizeDirective() {
    }
    SidebarMinimizeDirective.prototype.toggleOpen = function ($event) {
        $event.preventDefault();
        document.querySelector('body').classList.toggle('sidebar-minimized');
    };
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
    return SidebarMinimizeDirective;
}());
exports.SidebarMinimizeDirective = SidebarMinimizeDirective;
var MobileSidebarToggleDirective = /** @class */ (function () {
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
    return MobileSidebarToggleDirective;
}());
exports.MobileSidebarToggleDirective = MobileSidebarToggleDirective;
/**
* Allows the off-canvas sidebar to be closed via click.
*/
var SidebarOffCanvasCloseDirective = /** @class */ (function () {
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
    return SidebarOffCanvasCloseDirective;
}());
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
var Contact = /** @class */ (function () {
    //////////////
    function Contact() {
    }
    return Contact;
}());
exports.Contact = Contact;


/***/ }),

/***/ "./ClientApp/app/pages/about/about.html":
/***/ (function(module, exports) {

module.exports = "about ok"

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
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.load();
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.load = function () {
    };
    AboutComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./ClientApp/app/pages/about/about.html"),
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ }),

/***/ "./ClientApp/app/pages/contact/contact.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container main-container\">\r\n    <h3 class=\"main-heading-1\">Contatos</h3>\r\n\r\n    <div class=\"row\">   \r\n\r\n        <div id=\"top\"></div>\r\n        <div id=\"contact-form\" class=\"col-sm-12 col-lg-12\">\r\n            <div class=\"status alert alert-success contact-status\"></div>\r\n            <form id=\"main-contact-form\" class=\"contact-form\" name=\"contact-form\" method=\"post\" role=\"form\" ngSubmit=\"SendEmail(contact)\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\" class=\"sr-only\">Name: </label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contact.name\" name=\"name\" id=\"name\" required=\"required\" placeholder=\"NOME\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"email\" class=\"sr-only\">Email: </label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"contact.email\" required=\"required\" placeholder=\"EMAIL\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"phoneno\" class=\"sr-only\">Phone No: </label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"phoneno\" [(ngModel)]=\"contact.phoneNumber\" id=\"phoneno\" required=\"required\" placeholder=\"TELEFONE\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"subject\" class=\"sr-only\">Subject: </label>\r\n                            <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" [(ngModel)]=\"contact.subject\" required=\"required\" placeholder=\"ASSUNTO\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"message\" class=\"sr-only\">Message: </label>\r\n                            <textarea class=\"form-control\" rows=\"8\" name=\"message\" [(ngModel)]=\"contact.message\" id=\"message\" required=\"required\" placeholder=\"MENSAGEM\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <button type=\"submit\" class=\"btn btn-lg btn-block btn-secondary text-uppercase\" value=\"Enviar\" (click)=\"SendEmail(contact)\">Enviar</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n\r\n        \r\n        <div class=\"col-sm-6 hidden-md-down\">\r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [streetViewControl]=\"true\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n            </agm-map>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<toaster-container></toaster-container>\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Agendamento</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <b>{{name}}</b>, agradecemos sua mensagem<br />\r\n        Em breve entraremos em contato.<br /><br />\r\n\r\n        Atenciosamente,<br />\r\n        Equipe Sorriso Chic\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">FECHAR</button>\r\n    </div>\r\n</ng-template>"

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
var ContactComponent = /** @class */ (function () {
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
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;


/***/ }),

/***/ "./ClientApp/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./ClientApp/app/pages/home/home.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "./ClientApp/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works well!\n</p>\n"

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
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./ClientApp/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./ClientApp/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
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
    { path: '', component: pages_1.HomeComponent },
    { path: 'home', component: pages_1.HomeComponent },
    { path: 'contact', component: pages_1.ContactComponent },
    { path: 'contato', component: pages_1.ContactComponent },
    { path: 'about', component: pages_1.AboutComponent },
    { path: 'quemsomos', component: pages_1.AboutComponent }
];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
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
    return PagesRoutingModule;
}());
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
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
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
    return PagesModule;
}());
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
var BaseService = /** @class */ (function () {
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
    BaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.HttpService])
    ], BaseService);
    return BaseService;
}());
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
var HttpService = /** @class */ (function () {
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
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.Config, auth_1.AuthService, router_1.Router])
    ], HttpService);
    return HttpService;
}());
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
var ContactCustomService = /** @class */ (function (_super) {
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
    ContactCustomService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.HttpService])
    ], ContactCustomService);
    return ContactCustomService;
}(ContactService_1.ContactService));
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
var ContactService = /** @class */ (function (_super) {
    __extends(ContactService, _super);
    function ContactService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        _this._controller = "Contact";
        return _this;
    }
    ContactService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.HttpService])
    ], ContactService);
    return ContactService;
}(services_1.BaseService));
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
var ServiceGeneratedModule = /** @class */ (function () {
    function ServiceGeneratedModule() {
    }
    ServiceGeneratedModule = __decorate([
        core_1.NgModule({
            //provides
            providers: [
                ContactService_1.ContactService,
            ]
        })
    ], ServiceGeneratedModule);
    return ServiceGeneratedModule;
}());
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
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
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
    return ServicesModule;
}());
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
var ImgService = /** @class */ (function (_super) {
    __extends(ImgService, _super);
    function ImgService(_http) {
        var _this = _super.call(this, _http) || this;
        _this._http = _http;
        _this._controller = "";
        return _this;
    }
    ImgService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [services_1.HttpService])
    ], ImgService);
    return ImgService;
}(services_1.BaseService));
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
var imgResizeComponent = /** @class */ (function () {
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
    return imgResizeComponent;
}());
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
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var aside_directive_1 = __webpack_require__("./ClientApp/app/directives/aside.directive.ts");
var breadcrumb_component_1 = __webpack_require__("./ClientApp/app/directives/breadcrumb.component.ts");
var nav_dropdown_directive_1 = __webpack_require__("./ClientApp/app/directives/nav-dropdown.directive.ts");
var sidebar_directive_1 = __webpack_require__("./ClientApp/app/directives/sidebar.directive.ts");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
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
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
__webpack_require__("./node_modules/bootstrap/dist/js/bootstrap.js");
__webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.css");
__webpack_require__("./node_modules/angular2-toaster/toaster.css");
if (true) {
    console.log("dev");
    module['hot'].accept();
    module['hot'].dispose(function () {
        var rootElemTagName = "app";
        var oldRootElem = document.querySelector(rootElemTagName);
        var newRootElem = document.createElement(rootElemTagName);
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        oldRootElem.remove();
        platform_browser_dynamic_1.platformBrowserDynamic().destroy();
    });
}
else {
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

/***/ "./node_modules/css-loader/index.js!./ClientApp/app/admin/_layout/index/index.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./ClientApp/app/admin/_layout/navmenu/navmenu.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./ClientApp/app/admin/_layout/navmenu/navmenuGenerated.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".nav > menu-generated > li > a {\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n a {\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./ClientApp/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./ClientApp/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack-hot-middleware/client.js?path=__webpack_hmr&dynamicPublicPath=true");
module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map