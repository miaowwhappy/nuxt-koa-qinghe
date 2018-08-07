require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1.0,user-scalable=0,minimum-scale=1.0' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]

  },
  plugins: [
  /*
  ** 这样引入的js会照成html肉眼能看到的重绘，直接在模版引入
  */
  { src: '~plugins/flexible.js', ssr: false }, { src: '~plugins/mint-ui', ssr: false }],
  /*
  ** Global CSS
  */
  css: [{
    src: '~assets/sass/base.sass',
    lang: 'sass?indentedSyntax=true'
  }, {
    src: 'mint-ui/lib/style.css'
  }],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#036EB8' },
  /*
   ** Build configuration
   */
  build: {
    vendor: ["axios"],
    loaders: [{
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'img/[name].[hash].[ext]'
      }
    }],
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {}
  }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_schema_user__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return router; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('User', __WEBPACK_IMPORTED_MODULE_3__database_schema_user__["a" /* UserSchema */]);
var User = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('User');

var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

router.post('/api/login', function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
		var _ctx$request$body, tel, password, user;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_ctx$request$body = ctx.request.body, tel = _ctx$request$body.tel, password = _ctx$request$body.password;
						_context.next = 3;
						return User.findOne({ name: tel, password: password }).exec();

					case 3:
						user = _context.sent;

						if (!user) {
							_context.next = 7;
							break;
						}

						ctx.session.authUser = {
							user: tel,
							_id: user._id
						};

						return _context.abrupt("return", ctx.body = {
							err: 0,
							user: {
								user: tel,
								_id: user._id
							}
						});

					case 7:
						return _context.abrupt("return", ctx.body = {
							err: 1,
							msg: '账号或密码错误'
						});

					case 8:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());
router.post('/api/logout', function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						ctx.session.authUser = null;
						return _context2.abrupt("return", ctx.body = {
							err: 0
						});

					case 2:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, _this);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());
router.post('/api/register', function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
		var _ctx$request$body2, tel, code, pw, isTel, user;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_ctx$request$body2 = ctx.request.body, tel = _ctx$request$body2.tel, code = _ctx$request$body2.code, pw = _ctx$request$body2.pw;
						_context3.next = 3;
						return User.findOne({ name: tel }).exec();

					case 3:
						isTel = _context3.sent;

						if (!isTel) {
							_context3.next = 6;
							break;
						}

						return _context3.abrupt("return", ctx.body = {
							err: 1,
							msg: '号码已存在'
						});

					case 6:
						if (!(code != 666666)) {
							_context3.next = 8;
							break;
						}

						return _context3.abrupt("return", ctx.body = {
							err: 2,
							msg: '验证码不正确'
						});

					case 8:
						user = new User({
							name: tel,
							password: pw
						});
						_context3.next = 11;
						return user.save();

					case 11:

						ctx.session.authUser = tel;

						return _context3.abrupt("return", ctx.body = {
							err: 0,
							msg: '注册成功',
							user: tel
						});

					case 13:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, _this);
	}));

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}());

router.post('/api/reset_pw_step1', function () {
	var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
		var _ctx$request$body3, tel, code, isTel;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_ctx$request$body3 = ctx.request.body, tel = _ctx$request$body3.tel, code = _ctx$request$body3.code;
						_context4.next = 3;
						return User.findOne({ name: tel }).exec();

					case 3:
						isTel = _context4.sent;

						if (isTel) {
							_context4.next = 6;
							break;
						}

						return _context4.abrupt("return", ctx.body = {
							err: 1,
							msg: '号码不存在'
						});

					case 6:
						if (!(code != 666666)) {
							_context4.next = 8;
							break;
						}

						return _context4.abrupt("return", ctx.body = {
							err: 2,
							msg: '验证码不正确'
						});

					case 8:
						return _context4.abrupt("return", ctx.body = {
							err: 0,
							msg: 'success'
						});

					case 9:
					case "end":
						return _context4.stop();
				}
			}
		}, _callee4, _this);
	}));

	return function (_x7, _x8) {
		return _ref4.apply(this, arguments);
	};
}());
router.post('/api/reset_pw_step2', function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
		var _ctx$request$body4, tel, code, pw, isTel;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						_ctx$request$body4 = ctx.request.body, tel = _ctx$request$body4.tel, code = _ctx$request$body4.code, pw = _ctx$request$body4.pw;
						_context5.next = 3;
						return User.findOne({ name: tel }).exec();

					case 3:
						isTel = _context5.sent;

						if (isTel) {
							_context5.next = 6;
							break;
						}

						return _context5.abrupt("return", ctx.body = {
							err: 1,
							msg: '页面信息失效,请返回上一页'
						});

					case 6:
						if (!(code != 666666)) {
							_context5.next = 8;
							break;
						}

						return _context5.abrupt("return", ctx.body = {
							err: 2,
							msg: '页面信息失效,请返回上一页'
						});

					case 8:
						_context5.next = 10;
						return User.findOne({ name: tel }).update({ password: pw }).exec();

					case 10:
						return _context5.abrupt("return", ctx.body = {
							err: 0,
							msg: 'success'
						});

					case 11:
					case "end":
						return _context5.stop();
				}
			}
		}, _callee5, _this);
	}));

	return function (_x9, _x10) {
		return _ref5.apply(this, arguments);
	};
}());



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_schema_feedback__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__database_schema_evaluation__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__database_schema_address__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return home; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Feedback', __WEBPACK_IMPORTED_MODULE_3__database_schema_feedback__["a" /* FeedbackSchema */]);
var Feedback = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Feedback');

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Evaluation', __WEBPACK_IMPORTED_MODULE_4__database_schema_evaluation__["a" /* EvaluationSchema */]);
var Evaluation = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Evaluation');

__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Address', __WEBPACK_IMPORTED_MODULE_5__database_schema_address__["a" /* AddressSchema */]);
var Address = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Address');

var home = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();
var sleep = function sleep(time) {
	return new Promise(function (resolve) {
		return setTimeout(resolve, time);
	});
};

home.post('/api/feedback/post', function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
		var _ctx$request$body, content, tel, feedback;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_ctx$request$body = ctx.request.body, content = _ctx$request$body.content, tel = _ctx$request$body.tel;
						feedback = new Feedback({
							content: content,
							tel: tel
						});
						_context.next = 4;
						return feedback.save();

					case 4:
						return _context.abrupt("return", ctx.body = {
							err: 0,
							msg: '评论成功'
						});

					case 5:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

home.get('/api/coupon/get', function () {
	var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
		var couponGroup;
		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						couponGroup = [{
							limit_name: '仅限单次·居家保洁',
							limit_other_name: '新用户专享',
							type: 0,
							money: 10,
							userful_life: '2018-07-02'

						}, {
							limit_name: '全品类通用',
							limit_other_name: '新用户专享',
							type: 0,
							money: 160,
							userful_life: '2018-07-02'

						}, {
							limit_name: '全品类通用',
							limit_other_name: '新用户专享',
							type: 1,
							money: 160,
							userful_life: '2018-07-02'

						}, {
							limit_name: '全品类通用',
							limit_other_name: '新用户专享',
							type: 2,
							money: 160,
							userful_life: '2018-07-02'

						}];

						//await sleep(2000)	

						return _context2.abrupt("return", ctx.body = couponGroup);

					case 2:
					case "end":
						return _context2.stop();
				}
			}
		}, _callee2, _this);
	}));

	return function (_x3, _x4) {
		return _ref2.apply(this, arguments);
	};
}());

home.post('/api/evaluation/post', function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
		var _ctx$request$body2, timeStarNum, attitudeStarNum, qualityStarNum, tags, content, userId, evaluation;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_ctx$request$body2 = ctx.request.body, timeStarNum = _ctx$request$body2.timeStarNum, attitudeStarNum = _ctx$request$body2.attitudeStarNum, qualityStarNum = _ctx$request$body2.qualityStarNum, tags = _ctx$request$body2.tags, content = _ctx$request$body2.content;

						/*
      **
      	if(!ctx.session.authUser){
      		throw new Error('用户不存在')
      		return	
      	}
      **
      */

						userId = ctx.session.authUser._id;
						evaluation = new Evaluation({
							timeStarNum: timeStarNum,
							attitudeStarNum: attitudeStarNum,
							qualityStarNum: qualityStarNum,
							tags: tags,
							content: content,
							user: userId
						});
						_context3.next = 5;
						return evaluation.save();

					case 5:
						return _context3.abrupt("return", ctx.body = {
							err: 0,
							msg: '评论成功'
						});

					case 6:
					case "end":
						return _context3.stop();
				}
			}
		}, _callee3, _this);
	}));

	return function (_x5, _x6) {
		return _ref3.apply(this, arguments);
	};
}());

home.post('/api/evaluations/get', function () {
	var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
		var count, list;
		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return Evaluation.find().count().exec();

					case 2:
						count = _context4.sent;
						_context4.next = 5;
						return Evaluation.find().populate({ path: 'user' }).exec();

					case 5:
						list = _context4.sent;
						return _context4.abrupt("return", ctx.body = {
							err: 0,
							msg: '获取成功',
							list: list,
							count: count
						});

					case 7:
					case "end":
						return _context4.stop();
				}
			}
		}, _callee4, _this);
	}));

	return function (_x7, _x8) {
		return _ref4.apply(this, arguments);
	};
}());

home.post('/api/hasPayList/get', function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
		var hasPay, _ctx$request$body3, page, limit, pages, start, end;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						hasPay = [{
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城1…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城2…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城3…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城4…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城5…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城6…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城7…',
							type: 0
						}];
						_ctx$request$body3 = ctx.request.body, page = _ctx$request$body3.page, limit = _ctx$request$body3.limit;

						page = page ? page : 0;
						limit = limit ? limit : 4;

						pages = Math.ceil(hasPay.length / limit);
						start = Math.min(page, pages - 1) * limit;
						end = Math.min(start + limit, hasPay.length);


						hasPay = hasPay.slice(start, end);
						//await sleep(2000)

						if (!(page > pages - 1)) {
							_context5.next = 12;
							break;
						}

						return _context5.abrupt("return", ctx.body = {
							err: 1,
							msg: '已经到最后一页了',
							pages: pages
						});

					case 12:
						return _context5.abrupt("return", ctx.body = {
							err: 0,
							msg: '获取成功',
							pages: pages,
							hasPay: hasPay
						});

					case 13:
					case "end":
						return _context5.stop();
				}
			}
		}, _callee5, _this);
	}));

	return function (_x9, _x10) {
		return _ref5.apply(this, arguments);
	};
}());

home.post('/api/allList/get', function () {
	var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
		var all, _ctx$request$body4, page, limit, pages, start, end;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						//serviceType 0 未服务待分配 1 未服务已分配 2 已取消 3 已服务 4 进行中 5 待支付
						all = [{
							payTime: '2018-07-03 22:01:25',
							statusText: '待支付',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城1…',
							type: 5
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '已取消',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城2…',
							type: 2
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城3…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城4…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城5…',
							type: 0
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待支付',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城6…',
							type: 5
						}, {
							payTime: '2018-07-03 22:01:25',
							statusText: '待分配',
							typeName: '单次·居家保洁',
							address: '市辖区世纪大道恒大山水城7…',
							type: 0
						}];
						_ctx$request$body4 = ctx.request.body, page = _ctx$request$body4.page, limit = _ctx$request$body4.limit;

						page = page ? page : 0;
						limit = limit ? limit : 4;

						pages = Math.ceil(all.length / limit);
						start = Math.min(page, pages - 1) * limit;
						end = Math.min(start + limit, all.length);


						all = all.slice(start, end);
						//await sleep(2000)

						if (!(page > pages - 1)) {
							_context6.next = 12;
							break;
						}

						return _context6.abrupt("return", ctx.body = {
							err: 1,
							msg: '已经到最后一页了',
							pages: pages
						});

					case 12:
						return _context6.abrupt("return", ctx.body = {
							err: 0,
							msg: '获取成功',
							pages: pages,
							all: all
						});

					case 13:
					case "end":
						return _context6.stop();
				}
			}
		}, _callee6, _this);
	}));

	return function (_x11, _x12) {
		return _ref6.apply(this, arguments);
	};
}());

home.post('/api/address/post', function () {
	var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(ctx, next) {
		var _ctx$request$body5, name, gender, tel, city, address, isDefault, userId, addressNew;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						_ctx$request$body5 = ctx.request.body, name = _ctx$request$body5.name, gender = _ctx$request$body5.gender, tel = _ctx$request$body5.tel, city = _ctx$request$body5.city, address = _ctx$request$body5.address, isDefault = _ctx$request$body5.isDefault;
						userId = ctx.session.authUser._id;

						if (!isDefault) {
							_context7.next = 5;
							break;
						}

						_context7.next = 5;
						return Address.update({ user: userId }, { isDefault: false }, { multi: true }).exec();

					case 5:
						addressNew = new Address({
							name: name,
							gender: gender,
							tel: tel,
							city: city,
							address: address,
							isDefault: isDefault,
							user: userId
						});
						_context7.prev = 6;
						_context7.next = 9;
						return addressNew.save();

					case 9:
						_context7.next = 14;
						break;

					case 11:
						_context7.prev = 11;
						_context7.t0 = _context7["catch"](6);
						return _context7.abrupt("return", ctx.body = {
							err: 1,
							msg: _context7.t0
						});

					case 14:
						return _context7.abrupt("return", ctx.body = {
							err: 0,
							msg: '地址保存成功'
						});

					case 15:
					case "end":
						return _context7.stop();
				}
			}
		}, _callee7, _this, [[6, 11]]);
	}));

	return function (_x13, _x14) {
		return _ref7.apply(this, arguments);
	};
}());
home.post('/api/address/get', function () {
	var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(ctx, next) {
		var id, li;
		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						id = ctx.request.body.id;
						_context8.next = 3;
						return Address.find({ _id: id }).exec();

					case 3:
						li = _context8.sent;
						return _context8.abrupt("return", ctx.body = {
							err: 0,
							msg: "获取成功",
							li: li
						});

					case 5:
					case "end":
						return _context8.stop();
				}
			}
		}, _callee8, _this);
	}));

	return function (_x15, _x16) {
		return _ref8.apply(this, arguments);
	};
}());
home.post('/api/address/update', function () {
	var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(ctx, next) {
		var _ctx$request$body6, name, gender, tel, city, address, isDefault, id, userId;

		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
			while (1) {
				switch (_context9.prev = _context9.next) {
					case 0:
						_ctx$request$body6 = ctx.request.body, name = _ctx$request$body6.name, gender = _ctx$request$body6.gender, tel = _ctx$request$body6.tel, city = _ctx$request$body6.city, address = _ctx$request$body6.address, isDefault = _ctx$request$body6.isDefault, id = _ctx$request$body6.id;
						userId = ctx.session.authUser._id;


						console.log(ctx.params.id);

						if (!isDefault) {
							_context9.next = 6;
							break;
						}

						_context9.next = 6;
						return Address.update({ user: userId }, { isDefault: false }, { multi: true }).exec();

					case 6:
						_context9.next = 8;
						return Address.update({ _id: id }, {
							name: name,
							gender: gender,
							tel: tel,
							city: city,
							address: address,
							isDefault: isDefault
						}).exec();

					case 8:
						return _context9.abrupt("return", ctx.body = {
							err: 0,
							msg: '地址更新成功'
						});

					case 9:
					case "end":
						return _context9.stop();
				}
			}
		}, _callee9, _this);
	}));

	return function (_x17, _x18) {
		return _ref9.apply(this, arguments);
	};
}());
home.get('/api/addressList/get', function () {
	var _ref10 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee10(ctx, next) {
		var userId, list;
		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
			while (1) {
				switch (_context10.prev = _context10.next) {
					case 0:
						if (ctx.session.authUser) {
							_context10.next = 2;
							break;
						}

						return _context10.abrupt("return", ctx.redirect('/'));

					case 2:
						userId = ctx.session.authUser._id;
						_context10.next = 5;
						return Address.find({ user: userId }).sort({ isDefault: -1 }).exec();

					case 5:
						list = _context10.sent;
						return _context10.abrupt("return", ctx.body = {
							err: 0,
							msg: "获取成功",
							list: list
						});

					case 7:
					case "end":
						return _context10.stop();
				}
			}
		}, _callee10, _this);
	}));

	return function (_x19, _x20) {
		return _ref10.apply(this, arguments);
	};
}());

home.post('/api/addressList/setDefault', function () {
	var _ref11 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee11(ctx, next) {
		var id, userId, li, list;
		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee11$(_context11) {
			while (1) {
				switch (_context11.prev = _context11.next) {
					case 0:
						id = ctx.request.body.id;


						if (!ctx.session.authUser) {}

						userId = ctx.session.authUser._id;
						_context11.next = 5;
						return Address.update({ user: userId }, { isDefault: false }, { multi: true }).exec();

					case 5:
						_context11.next = 7;
						return Address.update({ _id: id }, { isDefault: true }).exec();

					case 7:
						li = _context11.sent;
						_context11.next = 10;
						return Address.find({ user: userId }).sort({ isDefault: -1 }).exec();

					case 10:
						list = _context11.sent;
						return _context11.abrupt("return", ctx.body = {
							err: 0,
							msg: "设置默认地址成功",
							li: li,
							list: list
						});

					case 12:
					case "end":
						return _context11.stop();
				}
			}
		}, _callee11, _this);
	}));

	return function (_x21, _x22) {
		return _ref11.apply(this, arguments);
	};
}());
home.post('/api/addressList/cancel', function () {
	var _ref12 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee12(ctx, next) {
		var id, userId, li, list;
		return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee12$(_context12) {
			while (1) {
				switch (_context12.prev = _context12.next) {
					case 0:
						id = ctx.request.body.id;


						if (!ctx.session.authUser) {}

						userId = ctx.session.authUser._id;
						_context12.next = 5;
						return Address.remove({ _id: id }).exec();

					case 5:
						li = _context12.sent;
						_context12.next = 8;
						return Address.find({ user: userId }).sort({ isDefault: -1 }).exec();

					case 8:
						list = _context12.sent;
						_context12.next = 11;
						return sleep(2000);

					case 11:
						return _context12.abrupt("return", ctx.body = {
							err: 0,
							msg: "删除地址成功",
							li: li,
							list: list
						});

					case 12:
					case "end":
						return _context12.stop();
				}
			}
		}, _callee12, _this);
	}));

	return function (_x23, _x24) {
		return _ref12.apply(this, arguments);
	};
}());



/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddressSchema; });


var AddressSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    name: String,
    gender: String,
    tel: String,
    city: String,
    address: String,
    isDefault: false,
    user: {
        type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId,
        ref: 'User'
    }
});



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EvaluationSchema; });


var EvaluationSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    timeStarNum: Number,
    attitudeStarNum: Number,
    qualityStarNum: Number,
    tags: Array,
    content: String,
    addTime: {
        type: Date,
        default: new Date()
    },
    user: {
        type: __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema.Types.ObjectId,
        ref: 'User'
    }
});



/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FeedbackSchema; });


var FeedbackSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    content: String,
    tel: String,
    addTime: {
        type: Date,
        default: new Date()

    }
});



/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserSchema; });


var UserSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
    name: String,
    password: String
});



/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_session__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_api__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes_home__ = __webpack_require__(5);


var _this = this;

var start = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4() {
    var _this2 = this;

    var app, host, port, config, nuxt, builder, CONFIG;
    return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.HOST || 7000;


            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_bodyparser___default()());

            // Import and Set Nuxt.js options
            config = __webpack_require__(3);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context4.next = 11;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context4.next = 11;
            return builder.build();

          case 11:

            app.keys = ['some session'];

            CONFIG = {
              key: "SESSION",
              maxAge: 86400000,
              overwrite: true,
              httpOnly: true,
              signed: true,
              rolling: false
            };

            app.use(__WEBPACK_IMPORTED_MODULE_4_koa_session___default()(CONFIG, app));

            app.use(auth);
            app.use(__WEBPACK_IMPORTED_MODULE_6__routes_api__["a" /* router */].routes());
            app.use(__WEBPACK_IMPORTED_MODULE_7__routes_home__["a" /* home */].routes());

            app.use(function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        ctx.req.session = ctx.session;
                        return _context2.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 5:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this2);
              }));

              return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on :' + host + ":" + port); // eslint-disable-line no-console

            __WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.Promise = Promise;
            __WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.set('debug', true);
            __WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.connect('mongodb://localhost:27017/qinghe', {
              useNewUrlParser: true
            });

            __WEBPACK_IMPORTED_MODULE_5_mongoose___default.a.connection.on('open', _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
              return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log('mongodb opened!');

                    case 1:
                    case 'end':
                      return _context3.stop();
                  }
                }
              }, _callee3, _this2);
            })));

          case 24:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function start() {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









var auth = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_miaoww_Desktop_nuxt_koa_qinghe_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next();

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function auth(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map