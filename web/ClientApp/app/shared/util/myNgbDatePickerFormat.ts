import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/';


export class MyNgbDateParserFormatter extends NgbDateParserFormatter {
    datePipe = new DatePipe('pt-Br');
    constructor(public dateFormatString: string) {
        super();
    }
    format(date: NgbDateStruct): string {
        if (date === null) {
            return '';
        }
        try {
            return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), this.dateFormatString);
        } catch (e) {
            return '';
        }
    }

    parse(value: string): NgbDateStruct {
        let returnVal: NgbDateStruct;
        if (!value) {
            returnVal = null;
        } else {
            try {
                const dateParts = this.datePipe.transform(value, 'M-d-y').split('-');
                returnVal = { year: parseInt(dateParts[2]), month: parseInt(dateParts[0]), day: parseInt(dateParts[1]) };
            } catch (e) {
                returnVal = null;
            }
        }
        return returnVal;
    }
}

export function formatter() { return new MyNgbDateParserFormatter('dd/MM/yyyy'); }
