import { Component, NgModule, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AboutCustomService } from '../../services/custom/About';
import { About } from '../../models/About';


@Component({    
    templateUrl: './about.html',
    providers: [AboutCustomService]
})

export class AboutComponent implements OnInit {
    about: About;

    constructor(private _aboutService: AboutCustomService) {

    }

    ngOnInit() {
        this.load();
    }

    load() {
        this._aboutService.getById(1).subscribe(result => {
            this.about = result;
        })
       
    }
}
