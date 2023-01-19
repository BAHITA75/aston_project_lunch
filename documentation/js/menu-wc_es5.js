'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">educantine documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AdminModule.html\" data-type=\"entity-link\" >AdminModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AdminModule-bdc0b799bd3e5dbe03e9fdbccb5fb87ffd0ca7e418430c0636a2aaba651422cc292e49cdaab3c1a5a3895ff401c2ddf2dcf2aa2379ddf1443af3945452bb82b6"' : 'data-target="#xs-components-links-module-AdminModule-bdc0b799bd3e5dbe03e9fdbccb5fb87ffd0ca7e418430c0636a2aaba651422cc292e49cdaab3c1a5a3895ff401c2ddf2dcf2aa2379ddf1443af3945452bb82b6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AdminModule-bdc0b799bd3e5dbe03e9fdbccb5fb87ffd0ca7e418430c0636a2aaba651422cc292e49cdaab3c1a5a3895ff401c2ddf2dcf2aa2379ddf1443af3945452bb82b6"' : 'id="xs-components-links-module-AdminModule-bdc0b799bd3e5dbe03e9fdbccb5fb87ffd0ca7e418430c0636a2aaba651422cc292e49cdaab3c1a5a3895ff401c2ddf2dcf2aa2379ddf1443af3945452bb82b6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MenuComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MenuComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/OrderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >OrderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UserComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AdminRoutingModule.html\" data-type=\"entity-link\" >AdminRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"' : 'data-target="#xs-components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"' : 'id="xs-components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/Page404Component.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >Page404Component</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AuthModule-a98220506a75a2837da69d39597c0a80fdaf313cb418df9e58249779cb690808eb58dcae2233a245ec1fbef769a824fef54b72ca842e03c0f834cc991c71fc31"' : 'data-target="#xs-components-links-module-AuthModule-a98220506a75a2837da69d39597c0a80fdaf313cb418df9e58249779cb690808eb58dcae2233a245ec1fbef769a824fef54b72ca842e03c0f834cc991c71fc31"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AuthModule-a98220506a75a2837da69d39597c0a80fdaf313cb418df9e58249779cb690808eb58dcae2233a245ec1fbef769a824fef54b72ca842e03c0f834cc991c71fc31"' : 'id="xs-components-links-module-AuthModule-a98220506a75a2837da69d39597c0a80fdaf313cb418df9e58249779cb690808eb58dcae2233a245ec1fbef769a824fef54b72ca842e03c0f834cc991c71fc31"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ResetPasswordComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ResetPasswordComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SignupComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SignupComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthRoutingModule.html\" data-type=\"entity-link\" >AuthRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ComponentsModule.html\" data-type=\"entity-link\" >ComponentsModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-ComponentsModule-0f657b2c9a31c324ca235882000bad8d1a4e1e0e0c4311c374d039166f87e3ca98ffcdb53e58322c7f699d340d6dd0f62acc9f0545a94383c4fd16f27752f628"' : 'data-target="#xs-components-links-module-ComponentsModule-0f657b2c9a31c324ca235882000bad8d1a4e1e0e0c4311c374d039166f87e3ca98ffcdb53e58322c7f699d340d6dd0f62acc9f0545a94383c4fd16f27752f628"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-ComponentsModule-0f657b2c9a31c324ca235882000bad8d1a4e1e0e0c4311c374d039166f87e3ca98ffcdb53e58322c7f699d340d6dd0f62acc9f0545a94383c4fd16f27752f628"' : 'id="xs-components-links-module-ComponentsModule-0f657b2c9a31c324ca235882000bad8d1a4e1e0e0c4311c374d039166f87e3ca98ffcdb53e58322c7f699d340d6dd0f62acc9f0545a94383c4fd16f27752f628"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavbarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SidebarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SidebarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PublicModule.html\" data-type=\"entity-link\" >PublicModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-PublicModule-7c0ef9a6d7e7ffab46922fb00fe54c18fe8a1f04644c9ed41a5153ac4fa9288687a780c34e4634c967bdcaf6a120e851337788f783e759cbf57e57a53eef5f05"' : 'data-target="#xs-components-links-module-PublicModule-7c0ef9a6d7e7ffab46922fb00fe54c18fe8a1f04644c9ed41a5153ac4fa9288687a780c34e4634c967bdcaf6a120e851337788f783e759cbf57e57a53eef5f05"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PublicModule-7c0ef9a6d7e7ffab46922fb00fe54c18fe8a1f04644c9ed41a5153ac4fa9288687a780c34e4634c967bdcaf6a120e851337788f783e759cbf57e57a53eef5f05"' : 'id="xs-components-links-module-PublicModule-7c0ef9a6d7e7ffab46922fb00fe54c18fe8a1f04644c9ed41a5153ac4fa9288687a780c34e4634c967bdcaf6a120e851337788f783e759cbf57e57a53eef5f05"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/UserHomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserHomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UserOrderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserOrderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UserProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserProfileComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UserUpdateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserUpdateComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PublicRoutingModule.html\" data-type=\"entity-link\" >PublicRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/HomeComponent-1.html\" data-type=\"entity-link\" >HomeComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MenuComponent-1.html\" data-type=\"entity-link\" >MenuComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Img.html\" data-type=\"entity-link\" >Img</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/Quantity.html\" data-type=\"entity-link\" >Quantity</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" >AuthService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ConstraintService.html\" data-type=\"entity-link\" >ConstraintService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MealService.html\" data-type=\"entity-link\" >MealService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MenuService.html\" data-type=\"entity-link\" >MenuService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MenuService-1.html\" data-type=\"entity-link\" >MenuService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/OrderService.html\" data-type=\"entity-link\" >OrderService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/OrderService-1.html\" data-type=\"entity-link\" >OrderService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TokenService.html\" data-type=\"entity-link\" >TokenService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UserService.html\" data-type=\"entity-link\" >UserService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/TokenInterceptor.html\" data-type=\"entity-link\" >TokenInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/ICredentials.html\" data-type=\"entity-link\" >ICredentials</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ICredentials-1.html\" data-type=\"entity-link\" >ICredentials</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Ingredient.html\" data-type=\"entity-link\" >Ingredient</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IToken.html\" data-type=\"entity-link\" >IToken</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IToken-1.html\" data-type=\"entity-link\" >IToken</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Meal.html\" data-type=\"entity-link\" >Meal</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Menu.html\" data-type=\"entity-link\" >Menu</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Order.html\" data-type=\"entity-link\" >Order</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Quantity.html\" data-type=\"entity-link\" >Quantity</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));