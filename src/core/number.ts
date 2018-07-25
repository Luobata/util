/**
 * @desc number util
 */

// tslint:disable no-any no-unsafe-any

export default class LNumber {
    public isNumber(val: any): boolean {
        return Object.prototype.toString.call(val) === '[object Number]';
    }
}
