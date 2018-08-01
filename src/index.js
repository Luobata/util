/**
 * @desc webpack entry
 */
import core from 'Core/index';
import ObjArray from 'Core/obj-array';
import objArray from 'Core/obj-array-function';
import Number from 'Core/number';
import String from 'Core/string';

export default core;

export { objArray, ObjArray };

export const number = new Number();

export const string = new String();
