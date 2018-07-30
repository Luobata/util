/**
 * @desc number util
 */

// tslint:disable no-any no-unsafe-any

export default class LNumber extends Number {
    public isNumber(val: any): boolean {
        return (
            !this.isNaN(val) &&
            Object.prototype.toString.call(val) === '[object Number]'
        );
    }

    public isNaN(val: any): boolean {
        return Number.isNaN(val);
    }
}
