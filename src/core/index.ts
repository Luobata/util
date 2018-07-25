/**
 * @desc core
 */

import LNumber from '@/core/number';

export default {
    number: ((): LNumber => {
        return new LNumber();
    })(),
};
