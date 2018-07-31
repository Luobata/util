/**
 * @desc string util
 */

import { isString } from '@/lib/help';
import camelTrans from 'camel-data';

export default class LString extends String {
    public camel(val: string): string {
        if (!isString(val)) {
            throw new Error('illeagle input for string.camel');
        }

        return <string>camelTrans(val);
    }
}
