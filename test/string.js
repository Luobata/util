/**
 * @desc util string unit test case
 */

const assert = require('assert');

it('string.camel', () => {
    assert.equal(string.camel('abc_cd'), 'abcCd');
    assert.equal(string.camel('abc-cd'), 'abcCd');
});
