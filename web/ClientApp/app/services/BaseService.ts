import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from './services';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PagingModel } from '../models/PagingModel';
import { FileModel } from '../models/fileModel';
import { UploadModel } from '../models/uploadModel';
import { Config } from '../config';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

interface BroadcastEvent {
    key: any;
    data?: any;
}

@Injectable()
export class BaseService<T>{

    public page: PagingModel<T> = <PagingModel<T>>{
        list: new Array<T>(),
        number: 1,
        size: 10,
        orderBy: 'Id',
        orderDirection: 'DESC',
        maxSize: 10
    };
    protected _controller: string;
    private _emitter: EventEmitter<BroadcastEvent>;

    constructor(protected http: HttpService) {
        this._emitter = new EventEmitter<BroadcastEvent>();
        if (!this._controller) {
            let comp: T = Object.assign({}, <T>{}, {});
            console.log(comp);
            this._controller = (<T>comp).constructor.name;
        }
    }    

    getAll(): Observable<T[]> {
        let comp: T = Object.assign({}, <T>{}, {id:0});
        console.log(comp);
        return this.http.get(this._controller + '/GetAll')
            .map((response: Response) => <T[]>response.json());

    }

    getPage(page: PagingModel<T>): Observable<PagingModel<T>> {
        this.page = page;
        return this.http.post(this._controller + '/getAllPage', this.page)
            .map((response: Response) => {
                const result = response.json();
                return result;
            });
    }

    getById(id: any): Observable<T> {

        return this.http.get(this._controller + '/GetById/' + id)
            .map((response: Response) => {
                const obj = <T>response.json();
                this.emit('getById', obj);
                return obj;
            });
    }

    upload(inputFiles: any[], entity: any): Observable<UploadModel> {
        const props = Object.getOwnPropertyNames(entity);
        ///files=inputFiles
        let files = [];
        let fields: Array<FileModel> = new Array<FileModel>();

        let i = 0;
        for (const obj of inputFiles) {

            fields.push(<FileModel>{
                id: obj.id,
                name: obj.name,
                inputFileField: obj.name,
                controller: this._controller,
            });
            i++;

            for (const file of obj.files) {
                files.push(file);
            }
        }

        if (files && files.length > 0) {
            return this.http.upload(this._controller + '/upload', files, { entity: entity, files: fields })
                .map((response: Response) => {
                    const obj = <UploadModel>response.json();
                    if (obj) {
                        let i = 0;
                        for (const file of obj.files) {
                            const splitted = file.inputFileField.split('.');
                            file.name = splitted[splitted.length - 1];
                            i++;
                        }
                        this.emit('upload', obj);
                        files = [];
                        fields = [];

                        const props = Object.getOwnPropertyNames(entity);
                        for (const file of obj.files) {
                            if (props.indexOf(file.inputFileField))
                                eval('obj.entity.' + file.inputFileField + '= file.fileName');
                        }
                        return obj;
                    }
                    return null;
                });
        }

        return new Observable<UploadModel>(x => {
            x.next(<UploadModel>{ entity: entity, files: fields });
        });
    }
    image(fileName: string, controller?: string, w?: number, h?: number, base64: boolean = false) {
        return this.http.get((controller || this._controller) + '/image/' + fileName, { w: w || 0, h: h || 0, base64: base64 })
            .map((response: Response) => {
                if (base64)
                    return (<any>response)._body;
                else
                    return <T>response.json();
            }
            );
    }
    ////
    save(entity: T, inputFiles?: any[]): Observable<T> {

        if (inputFiles && inputFiles.length > 0) {
            return new Observable<T>(t => {

                this.upload(inputFiles, entity).subscribe(
                    (result) => {
                        this.callSave(result.entity).subscribe(x => {
                            t.next(x);
                        });
                    }
                );

            });

        } else {
            return this.callSave(entity);
        }

    }
    private callSave(entity: T): Observable<T> {
        return this.http.post(this._controller + '/Save', entity)
            .map((response: Response) => {
                const obj = <T>response.json();
                this.emit('save', obj);
                return obj;
            });
    }

    remove(entity: any) {
        return this.http.post(this._controller + '/Remove', entity)
            .map(() => {
                this.emit('remove', entity);
            });
    }

    on(key: any): Observable<any> {
        const observer = this._emitter.asObservable();
        return observer.filter(event => {
            return event.key === key;
        })
            .map(event => {
                if (event.data)
                    return <T>event.data;
                return null;
            });
    }

    emit(key: any, data?: any) {
        this._emitter.emit({ key, data });
    }

    public setObjectCache<TT>(key: string, value: TT) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    public getObjectCache<TT>(key: string) {
        const result = sessionStorage.getItem(key);
        if (result)
            return <TT>JSON.parse(result);
    }

    public setCache(key: string, value: any) {
        sessionStorage.setItem(key, value);
    }

    public getCache(key: string) {
        return sessionStorage.getItem(key);
    }

    public removeCache(key: string) {
        sessionStorage.removeItem(key);
    }

    public setControler(controller: string): void {
        this._controller = controller;
    }
}
