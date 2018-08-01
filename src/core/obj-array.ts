/**
 * @desc boject-aray [{}]
 */

// tslint:disable no-any no-safe-any

import { isArray, isObject } from '@/lib/help';
import { IObj } from '@/lib/interface';

export default class ObjArray {
    public value: IObj[];

    constructor(val: IObj[]) {
        this.check(val);
        this.value = val;
    }

    public static GROUP(key: string, arr: any[]): ObjArray {
        const result: IObj = {};
        const resultArr: IObj[] = [];
        for (const i of arr) {
            if (i.hasOwnProperty(key)) {
                // 必须有key
                if (result.hasOwnProperty(i[key])) {
                    // result 中有这个key了
                    Object.assign(result[i[key]], i);
                } else {
                    result[i[key]] = i;
                }
            }
        }
        const keys: string[] = Object.keys(result);
        for (const i of keys) {
            resultArr.push(result[i]);
        }

        return new ObjArray(resultArr);
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
