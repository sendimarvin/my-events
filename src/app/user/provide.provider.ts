



import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

// let GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig;

//Y6GfEe3xiXyP9j_IEZe8OqRq

let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider("754033610331-mdtulmlvg9jgf393r8m2qcpdn4sap3bv.apps.googleusercontent.com")
    },
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("3198972233451853")
    }
  ]);
   
  export function provideConfig() {
    return config;
  }