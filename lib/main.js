'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _dec, _class;

var _traitsDecorator = require('traits-decorator');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TFoo = function () {
	function TFoo() {
		(0, _classCallCheck3.default)(this, TFoo);
	}

	(0, _createClass3.default)(TFoo, [{
		key: 'foo',
		value: function foo() {
			console.log('foo');
		}
	}]);
	return TFoo;
}();

var TBar = {
	bar: function bar() {
		console.log('bar');
	}
};

var MyClass = (_dec = (0, _traitsDecorator.traits)(TFoo, TBar), _dec(_class = function MyClass() {
	(0, _classCallCheck3.default)(this, MyClass);
}) || _class);


var c = new MyClass();
c.foo();
c.bar();