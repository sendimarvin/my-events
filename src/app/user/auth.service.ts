import { Injectable} from '@angular/core'
import { IUser } from './user.model'

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Injectable()
export class CustomAuthService {
    private user: SocialUser;
    public loggedIn: boolean;

    constructor(private authService: AuthService) { 
        this.isAuthenticated();
    }

    isAuthenticated () {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    
    logoutUser () {
        this.authService.signOut();
    }

 

}