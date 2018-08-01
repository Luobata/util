/**
 * @desc util object-array unit test case
 */

const assert = require('assert');

const unit = new ObjArray([
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
it('objArray.key', () => {
    assert.deepEqual(unit.key('a'), [1, 3]);
});

it('objArray.findOne', () => {
    assert.deepEqual(unit.findOne('a', 3), {
        a: 3,
        b: 4,
        c: 5,
    });
});

it('static objArray.GROUP', () => {
    const c = ObjArray.GROUP('type', [
        {
            a: 1,
            type: 1,
        },
        {
            b: 2,
            type: 1,
        },
        {
            a: 3,
            type: 2,
        },
        {
            b: 4,
            type: 2,
        },
    ]);
    assert.deepEqual(
        c,
        new ObjArray([
            {
                a: 1,
                b: 2,
                type: 1,
            },
            {
                a: 3,
                b: 4,
                type: 2,
            },
        ]),
    );
});
