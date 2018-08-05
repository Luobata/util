/**
 * @desc number util
 */

// tslint:disable no-any no-unsafe-any
import { isNumber, isString } from '@/lib/help';

export default class LNumber extends Number {
    /**
     * is a string number like '123'
     */
    public isStrNumber(val: any): boolean {
        return isString(val) && `${parseFloat(val)}` === val;
    }

    /**
     * is a number (expect NaN)
     */
    public isNumber(val: any): boolean {
        return !this.isNaN(val) && isNumber(val);
    }

    /**
     * is NaN
     */
    public isNaN(val: any): boolean {
        return Number.isNaN(val);
    }

    /**
     * split a number etc: input 123456 output 123,456
     * @param val input value string-number or number
     * @param num split num
     * @param key split key
     */
    public split(val: string | number, num: number, key: string): string {
        if (!this.isStrNumber(val) && !this.isNumber(val)) {
            throw new Error('illeagle input for number.split');
        }

        if ((<string>val).length < num) {
            return <string>val;
        }

        let value: string = '';
        let dot: string = '';
        if (this.isNumber(val)) {
            value = val.toString();
        } else {
            value = <string>val;
        }

        // float
        if (value.indexOf('.') !== -1) {
            dot = value.split('.')[1];
            value = value.split('.')[0];
        }
        let flag: number = 0;
        let result: string = '';
        for (let i: number = 0; i < value.length - 1; i = i + 1) {
            flag = i % num;
            result = value[value.length - i - 1] + result;
            if (flag === num - 1) {
                result = `${key}${result}`;
            }
        }
        result = value[0] + result;

        return dot ? `${result}.${dot}` : result;
    }

    public percent(val: number | string, fixed?: number): string {
        let value!: number;
        if (isString(val)) {
            value = parseFloat(val);
        } else {
            value = val;
        }

        return fixed ? `${(value * 100).toFixed(fixed)}%` : `${value * 100}%`;
    }
}
