import util from '../src/';

window.onload = () => {
    const a = util.number.isNumber(NaN);
    console.log(a);
    console.log(util.number.isNumber(123));
    console.log(util.number.isNumber('123'));
    console.log(util.number.isNumber(true));
};
