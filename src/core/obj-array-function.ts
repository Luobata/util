/**
 * @desc obj-array function
 */
// tslint:disable no-any no-safe-any

import ObjArray from '@/core/obj-array';
import { IObj } from '@/lib/interface';

export default {
    group(key: string, arr: any[]): ObjArray {
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

        debugger;
        return new ObjArray(resultArr);
    },
};
