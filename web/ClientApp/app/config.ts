import { Injectable, OnInit } from '@angular/core';
//declare var window: any;
@Injectable()
export class Config {

    public useAuthorityServer=false;

    siteUrl: string = window.location.hostname == 'localhost' ? 'http://localhost:52101' : 'http://www.yourdomain.com.br';
    apiAddress: string = window.location.hostname == 'localhost' ? 'http://localhost:52053/api/' : 'http://api.yourdomain.com.br/api/';
    authorityAddress: string = window.location.hostname == 'localhost' ? 'http://localhost:1941' : 'http://sso.yourdomain.com.br';
    constructor() {
    }

    ngOnInit() {
        this.load();
    }

    load() {
    }


    // The Issuer Identifier for the OpenID Provider (which is typically obtained during Discovery) MUST exactly match the value of the iss (issuer) Claim.
    public iss = this.authorityAddress;

    public server = this.authorityAddress;

    public redirect_url = this.siteUrl + '/callback';

    // This is required to get the signing keys so that the signiture of the Jwt can be validated.
    public jwks_url = this.authorityAddress + '/.well-known/openid-configuration/jwks';

    // The Client MUST validate that the aud (audience) Claim contains its client_id value registered at the Issuer identified by the iss (issuer) Claim as an audience.
    // The ID Token MUST be rejected if the ID Token does not list the Client as a valid audience, or if it contains additional audiences not trusted by the Client.
    public client_id = 'sorrisochic';

    public response_type = 'id_token token';

    public scope = 'openid sorriso profile offline_access';

    public post_logout_redirect_uri = this.siteUrl + '/callback';
}
