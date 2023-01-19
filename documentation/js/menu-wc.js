'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">educantine documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-d39590dc771c351460789ff3f8e9305e2469064817c0ec6af1a76d20f28f719d0bb60d060e234c9cb8f27865bb3e5ffc9825c806a440046e5951da680b932b5e"' : 'data-target="#xs-components-links-module-AdminModule-d39590dc771c351460789ff3f8e9305e2469064817c0ec6af1a76d20f28f719d0bb60d060e234c9cb8f27865bb3e5ffc9825c806a440046e5951da680b932b5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-d39590dc771c351460789ff3f8e9305e2469064817c0ec6af1a76d20f28f719d0bb60d060e234c9cb8f27865bb3e5ffc9825c806a440046e5951da680b932b5e"' :
                                            'id="xs-components-links-module-AdminModule-d39590dc771c351460789ff3f8e9305e2469064817c0ec6af1a76d20f28f719d0bb60d060e234c9cb8f27865bb3e5ffc9825c806a440046e5951da680b932b5e"' }>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"' : 'data-target="#xs-components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"' :
                                            'id="xs-components-links-module-AppModule-2b81bf99724977101a1f16ed7fb73c54cd4152b2c31e27c9534c17dcfddafe6de951abca3112b26324a32c07566169c03f77fb53e6cfce40c6f0a2e4c660af0f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Page404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Page404Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-8217022f03f2f5dd9174bae6570a921df75401d963d30c48a47d1d3b08cbe431b9c494e49ced5354a95cfc5440183e0f8acbfc03eb1c335f52fafdd7f5807c55"' : 'data-target="#xs-components-links-module-AuthModule-8217022f03f2f5dd9174bae6570a921df75401d963d30c48a47d1d3b08cbe431b9c494e49ced5354a95cfc5440183e0f8acbfc03eb1c335f52fafdd7f5807c55"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-8217022f03f2f5dd9174bae6570a921df75401d963d30c48a47d1d3b08cbe431b9c494e49ced5354a95cfc5440183e0f8acbfc03eb1c335f52fafdd7f5807c55"' :
                                            'id="xs-components-links-module-AuthModule-8217022f03f2f5dd9174bae6570a921df75401d963d30c48a47d1d3b08cbe431b9c494e49ced5354a95cfc5440183e0f8acbfc03eb1c335f52fafdd7f5807c55"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-71ccbf8f95dedbc56a7412265b19e2cb5a35c57580e889fa1b65f22efc3fa2986b030970ccb0d227dc7c8f9c275916c74e3c08b95273a9cbc226a7d29d7a7d63"' : 'data-target="#xs-components-links-module-ComponentsModule-71ccbf8f95dedbc56a7412265b19e2cb5a35c57580e889fa1b65f22efc3fa2986b030970ccb0d227dc7c8f9c275916c74e3c08b95273a9cbc226a7d29d7a7d63"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-71ccbf8f95dedbc56a7412265b19e2cb5a35c57580e889fa1b65f22efc3fa2986b030970ccb0d227dc7c8f9c275916c74e3c08b95273a9cbc226a7d29d7a7d63"' :
                                            'id="xs-components-links-module-ComponentsModule-71ccbf8f95dedbc56a7412265b19e2cb5a35c57580e889fa1b65f22efc3fa2986b030970ccb0d227dc7c8f9c275916c74e3c08b95273a9cbc226a7d29d7a7d63"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-3410ef23bfb0e28fa288c7357997e009b291ae2db7f8e0a9be51a0c458e6146a785b86b64450d68a659ce2dc289590b01e0978cef8e393e455a257b5b5e14bfb"' : 'data-target="#xs-components-links-module-PublicModule-3410ef23bfb0e28fa288c7357997e009b291ae2db7f8e0a9be51a0c458e6146a785b86b64450d68a659ce2dc289590b01e0978cef8e393e455a257b5b5e14bfb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-3410ef23bfb0e28fa288c7357997e009b291ae2db7f8e0a9be51a0c458e6146a785b86b64450d68a659ce2dc289590b01e0978cef8e393e455a257b5b5e14bfb"' :
                                            'id="xs-components-links-module-PublicModule-3410ef23bfb0e28fa288c7357997e009b291ae2db7f8e0a9be51a0c458e6146a785b86b64450d68a659ce2dc289590b01e0978cef8e393e455a257b5b5e14bfb"' }>
                                            <li class="link">
                                                <a href="components/UserHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserUpdateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserUpdateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenuComponent-1.html" data-type="entity-link" >MenuComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Img.html" data-type="entity-link" >Img</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quantity.html" data-type="entity-link" >Quantity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ConstraintService.html" data-type="entity-link" >ConstraintService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MealService.html" data-type="entity-link" >MealService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService-1.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService-1.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenService.html" data-type="entity-link" >TokenService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ICredentials.html" data-type="entity-link" >ICredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICredentials-1.html" data-type="entity-link" >ICredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ingredient.html" data-type="entity-link" >Ingredient</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IToken-1.html" data-type="entity-link" >IToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meal.html" data-type="entity-link" >Meal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Quantity.html" data-type="entity-link" >Quantity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});