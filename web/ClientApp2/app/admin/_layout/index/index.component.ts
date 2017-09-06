import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../auth/auth";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {



  userData: any;
    constructor(private _authService: AuthService) {

    }
    public disabled = false;
    public status: { isopen: boolean } = { isopen: false };

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit(): void {
        this.userData = this._authService.userInfo();
    }

    logout(): void {
        this.userData = this._authService.logout('admin');
    }
}
