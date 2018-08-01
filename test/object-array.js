/**
 * @desc util object-array unit test case
 */

const assert = require('assert');

it('objArray.key', () => {
    const b = new ObjArray([
        {
            a: 1,
            b: 2,
        },
        {
            a: 3,
            b: 4,
            c: 5,
        },
    ]);
    assert.deepEqual(b.key('a'), [1, 3]);
});
