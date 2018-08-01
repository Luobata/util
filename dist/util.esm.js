/**
 * @desc help collection
 */
// tslint:disable no-any no-safe-any
var isType = function isType(value, typing) {
    return Object.prototype.toString.call(value) === '[object ' + typing + ']';
};
function isString(value) {
    return isType(value, 'String');
}
function isArray(value) {
    return isType(value, 'Array');
}

function isObject(value) {
    return isType(value, 'Object');
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @desc number util
 */
// tslint:disable no-any no-unsafe-any
var LNumber$1 = function (_Number) {
    _inherits(LNumber, _Number);

    function LNumber() {
        _classCallCheck(this, LNumber);

        return _possibleConstructorReturn(this, (LNumber.__proto__ || Object.getPrototypeOf(LNumber)).apply(this, arguments));
    }

    _createClass(LNumber, [{
        key: 'isStrNumber',

        /**
         * is a string number like '123'
         */
        value: function isStrNumber(val) {
            return isString(val) && '' + parseFloat(val) === val;
        }
        /**
         * is a number (expect NaN)
         */

    }, {
        key: 'isNumber',
        value: function isNumber$$1(val) {
            return !this.isNaN(val) && Object.prototype.toString.call(val) === '[object Number]';
        }
        /**
         * is NaN
         */

    }, {
        key: 'isNaN',
        value: function isNaN(val) {
            return Number.isNaN(val);
        }
        /**
         * split a number etc: input 123456 output 123,456
         * @param val input value string-number or number
         * @param num split num
         * @param key split key
         */

    }, {
        key: 'split',
        value: function split(val, num, key) {
            if (!this.isStrNumber(val) && !this.isNumber(val)) {
                throw new Error('illeagle input for number.split');
            }
            if (val.length < num) {
                return val;
            }
            var value = '';
            var dot = '';
            if (this.isNumber(val)) {
                value = val.toString();
            } else {
                value = val;
            }
            // float
            if (value.indexOf('.') !== -1) {
                dot = value.split('.')[1];
                value = value.split('.')[0];
            }
            var flag = 0;
            var result = '';
            for (var i = 0; i < value.length - 1; i = i + 1) {
                flag = i % num;
                result = value[value.length - i - 1] + result;
                if (flag === num - 1) {
                    result = '' + key + result;
                }
            }
            result = value[0] + result;
            return dot ? result + '.' + dot : result;
        }
    }, {
        key: 'percent',
        value: function percent(val, fixed) {
            var value = void 0;
            if (isString(val)) {
                value = parseFloat(val);
            } else {
                value = val;
            }
            return fixed ? (value * 100).toFixed(fixed) + '%' : value * 100 + '%';
        }
    }]);

    return LNumber;
}(Number);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @desc boject-aray [{}]
 */
// tslint:disable no-any no-safe-any
var ObjArray = function () {
    function ObjArray(val) {
        _classCallCheck$1(this, ObjArray);

        this.check(val);
        this.value = val;
    }

    _createClass$1(ObjArray, [{
        key: 'valueOf',
        value: function valueOf() {
            return this.value;
        }
    }, {
        key: 'key',
        value: function key(_key) {
            return this.value.map(function (v) {
                return v[_key];
            });
        }
    }, {
        key: 'findOne',
        value: function findOne(key, value) {
            return this.value.find(function (v) {
                return v[key] === value;
            });
        }
        // check when use as js util

    }, {
        key: 'check',
        value: function check(val) {
            if (!isArray(val)) {
                throw new Error('The Obj Array must be array');
            }
            val.map(function (v) {
                if (!isObject(v)) {
                    throw new Error('The key in Obj Array must be object');
                }
            });
        }
    }], [{
        key: 'GROUP',
        value: function GROUP(key, arr) {
            var result = {};
            var resultArr = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    if (i.hasOwnProperty(key)) {
                        // 必须有key
                        if (result.hasOwnProperty(i[key])) {
                            // result 中有这个key了
                            Object.assign(result[i[key]], i);
                        } else {
                            result[i[key]] = i;
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var keys = Object.keys(result);
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _i = _step2.value;

                    resultArr.push(result[_i]);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return new ObjArray(resultArr);
        }
    }]);

    return ObjArray;
}();

/**
 * @desc obj-array function
 */
// tslint:disable no-any no-safe-any
var objArray = {
    group: function group(key, arr) {
        var result = {};
        var resultArr = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                if (i.hasOwnProperty(key)) {
                    // 必须有key
                    if (result.hasOwnProperty(i[key])) {
                        // result 中有这个key了
                        Object.assign(result[i[key]], i);
                    } else {
                        result[i[key]] = i;
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var keys = Object.keys(result);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _i = _step2.value;

                resultArr.push(result[_i]);
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        debugger;
        return new ObjArray(resultArr);
    }
};

/**
 * @description type help
 */
// tslint:disable no-any no-unsafe-any
function isString$1(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
}
function isArray$1(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}
function isObject$1(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * @description data transform to camel
 */
var trans = (function (input) {
    return input.replace(/[-_\.][^-_\.]/g, function (match) {
        return match.charAt(1).toUpperCase();
    });
});

/**
 * @description canel
 */
// tslint:disable no-any no-unsafe-any
var camelTrans = function camelTrans(input) {
    if (isArray$1(input)) {
        // type ICamel[]
        return input.map(function (v) {
            return camelTrans(v);
        });
        // } else if (isCamel(input)) {
    } else if (isObject$1(input)) {
        // typ ICamel
        var result = {};
        var keys = Object.keys(input);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                if (isObject$1(input[i])) {
                    result[camelTrans(i)] = camelTrans(input[i]);
                } else if (isArray$1(input[i])) {
                    // default not to trans Array in object key
                    // as it may just be a value
                    result[camelTrans(i)] = input[i];
                } else {
                    result[camelTrans(i)] = input[i];
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return result;
    } else if (isString$1(input)) {
        // string
        return trans(input);
    } else {
        return input;
    }
};

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @desc string util
 */
var LString$1 = function (_String) {
    _inherits$1(LString, _String);

    function LString() {
        _classCallCheck$2(this, LString);

        return _possibleConstructorReturn$1(this, (LString.__proto__ || Object.getPrototypeOf(LString)).apply(this, arguments));
    }

    _createClass$2(LString, [{
        key: 'camel',
        value: function camel(val) {
            if (!isString(val)) {
                throw new Error('illeagle input for string.camel');
            }
            return camelTrans(val);
        }
    }]);

    return LString;
}(String);

/**
 * @desc core
 */
var core$1 = {
    number: function () {
        return new LNumber$1();
    }(),
    string: function () {
        return new LString$1();
    }(),
    objArray: objArray,
    ObjArray: ObjArray
};

/**
 * @desc webpack entry
 */
var number = new LNumber$1();

var string = new LString$1();

export { objArray, ObjArray, number, string };
export default core$1;
//# sourceMappingURL=util.esm.js.map
