/**
 * @desc unit test-case
 */
const util = require('../dist/util');

const { ObjArray, number, string } = util;

global.ObjArray = ObjArray;
global.number = number;
global.string = string;

describe('request-model', () => {
    describe('test number', () => {
        require('./number');
    });
    describe('test string', () => {
        require('./string');
    });
    describe('test object Array', () => {
        require('./object-array');
    });
});
