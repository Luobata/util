/**
 * @desc unit number unit case
 */
/* eslint-disable */
const assert = require('assert');
it('number.isNumber', () => {
    assert.equal(number.isNumber(123), true);
    assert.equal(number.isNumber('123'), false);
    assert.equal(number.isNumber(true), false);
    assert.equal(number.isNumber(NaN), false);
});

it('number.isStrNumber', () => {
    assert.equal(number.isStrNumber('132'), true);
    assert.equal(number.isStrNumber('132.2'), true);
    assert.equal(number.isStrNumber('1s3'), false);
    assert.equal(number.isStrNumber(13), false);
});

it('number.split', () => {
    assert.equal(number.split('123456.22', 3, ','), '123,456.22');
    assert.equal(number.split('123456', 3, ','), '123,456');
});

it('number.percent', () => {
    assert.equal(number.percent(0.32), '32%');
    assert.equal(number.percent('0.32'), '32%');
    assert.equal(number.percent(0.3222), '32.22%');
    assert.equal(number.percent('0.3222'), '32.22%');
    assert.equal(number.percent(0.3222, 1), '32.2%');
    assert.equal(number.percent('0.3222', 1), '32.2%');
});
