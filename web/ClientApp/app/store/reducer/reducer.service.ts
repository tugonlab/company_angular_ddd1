import { Injectable } from '@angular/core';
import { Resume } from '../../models/Resume';
import { createStore, Store } from 'redux';
import { BaseService } from "../../services/BaseService";
import { NgRedux } from "@angular-redux/store";
import { HttpService } from "../../services/HttpService";

@Injectable()
export class ReducerService<T> {
    public store: Store<entity<T>> = createStore<entity<T>>(this.reducer);

    constructor(
        public redux: NgRedux<entity<T>>,
        private _service: BaseService<T>
    ) {
        this.store = createStore<entity<T>>(this.reducer);
    }

    public reducer(state: entity<T>, action) {
        switch (action.type) {
            case actions.UPDATE_CLIENT:
                return <entity<T>>{ single: action.single, list: [action.single] };
            case actions.GET_SINGLE:
                return <entity<T>>{ single: action.single, list: [action.single] };
            case actions.GET_ALL:
                console.log(action.list)
                return <entity<T>>{ single: action.list[0], list: action.list };
            default:
                return state;
        }
    }

    public loadAll() {
        this._service.getAll()
            .subscribe(result => {
                this.dispatch({ type: actions.GET_ALL, list: result });
            });
    }

    public loadById(id: any) {
        this._service.getById(id)
            .subscribe(result => {
                this.dispatch({ type: actions.GET_BY_ID, single: result });
            });
    }

    public dispatch(action) {
        this.redux.dispatch(action)
    }

    public configureStore() {
        let entity: entity<T> = {
            single: <T>{},
            list: <Array<T>>[{}]
        }
        this.redux.configureStore(this.reducer, entity);
    }

    public setController(controller: string) {
        this._service.setControler(controller);
    }

}

export interface entity<T> {
    single: T,
    list: Array<T>
}

export const actions = {
    GET_ALL: 'GET_ALL',
    GET_BY_ID: 'GET_BY_ID',
    UPDATE_CLIENT: 'UPDATE_CLIENT',
    GET_SINGLE:'GET_SINGLE'
}
