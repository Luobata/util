import util from '../src/';

window.onload = () => {
    const a = util.number.isNumber(NaN);
    console.log(a);
    console.log(util.number.isNumber(123));
    console.log(util.number.isNumber('123'));
    console.log(util.number.isNumber(true));

    const b = new util.ObjArray([
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

    console.log(b.key('a'));
    console.log(b.findOne('a', 3));
    const c = util.ObjArray.GROUP('type', [
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
    console.log(c);
};
