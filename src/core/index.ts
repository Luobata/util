/**
 * @desc core
 */

import LNumber from '@/core/number';
import ObjArray from '@/core/obj-array';
import objArray from '@/core/obj-array-function';
import LString from '@/core/string';

export default {
    number: ((): LNumber => {
        return new LNumber();
    })(),
    string: ((): LString => {
        return new LString();
    })(),
    objArray,
    ObjArray,
};
