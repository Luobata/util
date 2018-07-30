/**
 * @desc help collection
 */
// tslint:disable no-any no-safe-any

const isType: Function = (value: any, typing: string): boolean => {
    return Object.prototype.toString.call(value) === `[object ${typing}]`;
};

export function isString(value: any): value is string {
    return isType(value, 'String');
}

export function isArray(value: any): value is string {
    return isType(value, 'Array');
}

export function isNumber(value: any): value is string {
    return isType(value, 'Number');
}

export function isObject(value: any): value is string {
    return isType(value, 'Object');
}
