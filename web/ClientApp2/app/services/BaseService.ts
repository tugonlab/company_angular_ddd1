import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { TranslateService } from 'ng2-translate';
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
import 'rxjs/add/operator/filter'

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
    }
    protected _controller: string;
    private _emitter: EventEmitter<BroadcastEvent>

    constructor(protected http: HttpService) {
        this._emitter = new EventEmitter<BroadcastEvent>();
    }    

    getAll(): Observable<T[]> {

        return this.http.get(this._controller + "/GetAll")
            .map((response: Response) => <T[]>response.json());

    }

    getPage(page: PagingModel<T>): Observable<PagingModel<T>> {
        this.page = page;
        return this.http.post(this._controller + "/getAllPage", this.page)
            .map((response: Response) => {
                var result = response.json();
                return result;
            })
    }

    getPage2(page: PagingModel<T>): Observable<PagingModel<T>> {
        this.page = page;
        return this.http.get(this._controller + "/getAllPage/" + page.number + "/" + page.size + "/" + page.orderBy + "/" + page.orderDirection)
            .map((response: Response) => {
                var result = response.json();
                this.page.totalCount = result.item2;
                this.page.list = <Array<T>>result.item1;
                return this.page;
            })
    }

    getById(id: any): Observable<T> {

        return this.http.get(this._controller + "/GetById/" + id)

            .map((response: Response) => {
                let obj = <T>response.json();
                this.emit('getById', obj);
                return obj;
            })
    }

    upload(inputFiles: any[], entity: any): Observable<UploadModel> {
        var props = Object.getOwnPropertyNames(entity);
        ///files=inputFiles
        var files = [];
        var fields: Array<FileModel> = new Array<FileModel>();

        let i = 0
        for (let obj of inputFiles) {

            fields.push(<FileModel>{
                id: obj.id,
                name: obj.name,
                inputFileField: obj.name,
                controller: this._controller,
            });
            i++;

            for (let file of obj.files) {
                files.push(file);
            }
        }

        if (files && files.length > 0) {
            return this.http.upload(this._controller + "/upload", files, { entity: entity, files: fields })
                .map((response: Response) => {
                    let obj = <UploadModel>response.json();
                    if (obj) {
                        let i = 0;
                        for (let file of obj.files) {
                            var splitted = file.inputFileField.split('.');
                            file.name = splitted[splitted.length - 1];
                            i++;
                        }
                        this.emit('upload', obj);
                        files = [];
                        fields = [];

                        var props = Object.getOwnPropertyNames(entity);
                        for (let file of obj.files) {
                            if (props.indexOf(file.inputFileField))
                                eval("obj.entity." + file.inputFileField + "= file.fileName");
                        }
                        return obj;
                    }
                    return null;
                })
        }

        return new Observable<UploadModel>(x => {
            x.next(<UploadModel>{ entity: entity, files: fields })
        });
    }
    image(fileName: string, controller?: string, w?: number, h?: number, base64: boolean = false) {
        return this.http.get((controller || this._controller) + "/image/" + fileName, { w: w || 0, h: h || 0, base64: base64 })
            .map((response: Response) => {
                if (base64)
                    return (<any>response)._body
                else
                    return <T>response.json()
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
                            t.next(x)
                        })
                    }
                )

            });

        } else {
            return this.callSave(entity)
        }

    }
    private callSave(entity: T): Observable<T> {
        return this.http.post(this._controller + "/Save", entity)
            .map((response: Response) => {
                let obj = <T>response.json();
                this.emit('save', obj);
                return obj;
            })
    }

    remove(entity: any) {
        return this.http.post(this._controller + "/Remove", entity)
            .map(() => {
                this.emit('remove', entity);
            })
    }

    on(key: any): Observable<any> {
        var observer = this._emitter.asObservable();
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
        //teste
        this._emitter.emit({ key, data });
    }

    private handleError(error: Response) {

    }

    public setObjectCache<TT>(key: string, value: TT) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    public getObjectCache<TT>(key: string) {
        var result = sessionStorage.getItem(key);
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
}