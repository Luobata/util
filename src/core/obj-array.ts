/**
 * @desc boject-aray [{}]
 */
// tslint:disable no-any no-safe-any

import { isArray, isObject } from '@/lib/help';
import { IObj } from '@/lib/interface';

export default class ObjArray extends Array {
    public value: IObj[];

    constructor(val: IObj[]) {
        super();
        this.check(val);
        this.value = val;
    }

    public valueOf(): any[] {
        return this.value;
    }

    public key(key: string): any[] {
        return this.value.map((v: IObj): any => v[key]);
    }

    public findOne(key: string, value: any): IObj {
        return this.value.find((v: IObj): any => v[key] === value);
    }

    // check when use as js util
    private check(val: IObj[]): void {
        if (!isArray(val)) {
            throw new Error('The Obj Array must be array');
        }

        val.map((v: object) => {
            if (!isObject(v)) {
                throw new Error('The key in Obj Array must be object');
            }
        });
    }
}
