/**
 * @desc core
 */

import LNumber from '@/core/number';
import ObjArray from '@/core/obj-array';

export default {
    number: ((): LNumber => {
        return new LNumber();
    })(),
    ObjArray,
};
