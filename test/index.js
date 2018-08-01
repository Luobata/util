import util from '../src/';
// import util from '../dist/util'
import { objArray, ObjArray, number, string } from '../dist/util';
// import { objArray, ObjArray, number, string } from '../src/';

window.onload = () => {
    const a = util.number.isNumber(NaN);
    console.log(a);
    console.log(util.number.isNumber(123));
    console.log(util.number.isNumber('123'));
    console.log(util.number.isNumber(true));
    console.log('123', number.isStrNumber('123'));
    console.log('132.2', number.isStrNumber('132.2'));
    console.log('1s3', number.isStrNumber('1s3'));
    console.log(13, number.isStrNumber(13));
    console.log(number.split('123456.22', 3, ','));
    console.log(string.camel('abc-cd'));

    console.log(ObjArray);
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

    console.log(b.key('a'));
    console.log(b.findOne('a', 3));
    console.log(objArray);
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
    console.log(c);
};
