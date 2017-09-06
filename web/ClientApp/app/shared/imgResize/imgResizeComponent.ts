﻿import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Config } from '../../config';
import { ImgService } from './ImgService';
import { FileModel } from '../../models/fileModel';

@Component({
    template: `<img *ngIf="path" [(src)]="path" alt="{{image}} " class="{{cssClass}}" style="{{style}}"/>`,
    selector: 'img-resize',
    providers: [ImgService]

})
export class imgResizeComponent implements OnInit, OnChanges {
    public path: string;
    public style: string;
    @Input() public controller: string;
    @Input() public image: string;
    @Output() imageChange: EventEmitter<string> = new EventEmitter<string>()
    @Input() public cssClass: string;
    @Input() public w: number;
    @Input() public h: number;
    @Input() public inline: boolean = false;

    constructor(private _service: ImgService, private _config: Config) {

    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes)
        if (changes['image']) {
            this.load();
        }
    }
    ngOnInit() {
        this.load();
    }

    load() {
        if (this.inline)
            this.getImagData();
        else
            this.getPath();

        this.style = "min-width:" + this.w + "px; min-height:" + this.h + "px;";
    }

    getPath() {
        this._service.controller = this.controller;

        this.path = this._config.apiAddress + "/" + this.controller + "/image/" + this.image + "?w=" + this.w + "&h=" + this.h;
    }

    getImagData() {
        this._service.controller = this.controller;
        this._service.image(this.image, this.controller, this.w, this.h, this.inline).subscribe(result => {

            this.path = result;
        });
    }


}