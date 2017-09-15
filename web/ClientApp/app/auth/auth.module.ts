//models imports/////////////////////////////////
import { NgModule } from '@angular/core';
import { CanActivate, Router, RouterModule } from '@angular/router';
import { AuthService } from './AuthService';
import { CanActivateViaAuthGuard, } from './CanActivateViaAuthGuard';
import { JwtKey, JwtKeys } from './jwtkeys';
import { OidcSecurityService } from './oidc.security.service';
import { OidcSecurityValidation } from './oidc.security.validation';
import { LoginCallBackComponent } from './callback'


@NgModule({
    imports:[
        RouterModule.forChild([

            { path: 'callback', component: LoginCallBackComponent },

        ])
    ],
    providers: [OidcSecurityService, AuthService, CanActivateViaAuthGuard],
    declarations: [LoginCallBackComponent],
    exports: [LoginCallBackComponent]
})

export class AuthModule {

}

