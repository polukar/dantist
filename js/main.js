/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function() {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/slider */ "./src/js/project/slider.js");
/* harmony import */ var _project_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/header */ "./src/js/project/header.js");
/* harmony import */ var _project_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_project_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _project_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/video */ "./src/js/project/video.js");
/* harmony import */ var _project_video__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_project_video__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _project_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/map */ "./src/js/project/map.js");
/* harmony import */ var _project_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/anchor */ "./src/js/project/anchor.js");
/* harmony import */ var _project_anchor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_project_anchor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _project_img__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/img */ "./src/js/project/img.js");
/* harmony import */ var _project_img__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_project_img__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/project/anchor.js":
/*!**********************************!*\
  !*** ./src/js/project/anchor.js ***!
  \**********************************/
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

/***/ }),

/***/ "./src/js/project/header.js":
/*!**********************************!*\
  !*** ./src/js/project/header.js ***!
  \**********************************/
/***/ (function() {

var header = document.querySelector('.header');

if (header) {
  var burger = header.querySelector('.burger');
  var mibileMenu = document.querySelector('.mobile-nav');
  var close = mibileMenu.querySelector('.close-menu');
  burger.addEventListener('click', function () {
    mibileMenu.classList.add('active');
  });
  close.addEventListener('click', function () {
    mibileMenu.classList.remove('active');
  });
  document.addEventListener('scroll', function () {
    var posTop = document.body.getBoundingClientRect().top;

    if (-posTop > 200) {
      header.classList.add('--scroll');
    } else {
      header.classList.remove('--scroll');
    }
  });
}

/***/ }),

/***/ "./src/js/project/img.js":
/*!*******************************!*\
  !*** ./src/js/project/img.js ***!
  \*******************************/
/***/ (function() {

var imgSrc = document.querySelectorAll('[data-src]');

if (imgSrc) {
  window.onload = function () {
    imgSrc.forEach(function (elem) {
      var dataSrc = elem.getAttribute('data-src');
      elem.src = dataSrc;
    });
  };
}

/***/ }),

/***/ "./src/js/project/map.js":
/*!*******************************!*\
  !*** ./src/js/project/map.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ymaps */ "./node_modules/ymaps/dist/ymaps.esm.js");


window.onload = function () {
  var mapInfo = [{
    underground: "Беговая",
    adress: "г. Москва, Хорошёвское шоссе, 48",
    color: "--purple",
    position: [55.776292, 37.535549]
  }, {
    underground: "Проспект Мира",
    adress: "г. Москва, Проспект Мира 53с1",
    color: "--orange",
    position: [55.784804, 37.634170]
  }, {
    underground: "Раменки",
    adress: "г. Москва, Столетова, 11",
    color: "--yellow",
    position: [55.703499, 37.499083]
  }, {
    underground: "Академическая",
    adress: "г. Москва, Винокурова, 2",
    color: "--orange",
    position: [55.689312, 37.581490]
  }, {
    underground: "Савёловская",
    adress: "г. Москва, Складочная, 1 стр 18",
    color: "--grey",
    position: [55.801435, 37.592231]
  }];
  ymaps__WEBPACK_IMPORTED_MODULE_0__["default"].load('https://api-maps.yandex.ru/2.1/?apikey=17c2ce43-9cd7-4184-94de-a46354f7f503&lang=ru_RU').then(function (maps) {
    var center;

    if (window.innerWidth > 981) {
      center = [55.757704, 37.318759];
    } else {
      center = [55.489311, 37.595243];
    }

    var myMap = new maps.Map('map', {
      center: center,
      zoom: 10
    });
    myMap.behaviors.disable('scrollZoom');
    var marker = './img/marker.svg';
    var markerHover = './img/marker-hover.svg';
    var activeMarker;
    var mapTitle = document.querySelector('.map__title span');
    var mapUndergroundText = document.querySelector('.map__block-title span');
    var mapUndergroundIco = document.querySelector('.under-ico');
    var mapUndergroundTitle = document.querySelector('.map__block-title--address');
    var myPlacemark;

    var updateInfo = function updateInfo(ind) {
      mapTitle.innerHTML = "";
      mapUndergroundText.innerHTML = "";
      mapUndergroundTitle.innerHTML = "";
      mapUndergroundIco.setAttribute('class', 'under-ico');
      mapTitle.innerHTML = mapInfo[ind].underground;
      mapUndergroundText.innerHTML = mapInfo[ind].underground;
      mapUndergroundIco.setAttribute('class', "under-ico ".concat(mapInfo[ind].color));
      mapUndergroundTitle.innerHTML = mapInfo[ind].adress;
    };

    var updateMarker = function updateMarker(ind) {
      myMap.geoObjects.removeAll();
      mapInfo.forEach(function (elemNew, indexNew) {
        if (ind == indexNew) {
          activeMarker = markerHover;
        } else {
          activeMarker = marker;
        }

        myPlacemark = new maps.Placemark(elemNew.position, {}, {
          iconLayout: 'default#image',
          iconImageHref: activeMarker,
          iconImageSize: [80, 80],
          iconImageOffset: [-40, -70]
        });
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.events.add('click', function () {
          updateInfo(indexNew);
          updateMarker(indexNew);
        });
      });
    };

    mapInfo.forEach(function (elem, index) {
      if (index == 0) {
        activeMarker = markerHover;
        updateInfo(index);
      } else {
        activeMarker = marker;
      }

      myPlacemark = new maps.Placemark(elem.position, {}, {
        iconLayout: 'default#image',
        iconImageHref: activeMarker,
        iconImageSize: [80, 80],
        iconImageOffset: [-40, -70]
      });
      myMap.geoObjects.add(myPlacemark);
      myPlacemark.events.add('click', function () {
        updateInfo(index);
        updateMarker(index);
      });
    });
  }).catch(function (error) {
    return console.log('Failed to load Yandex Maps', error);
  });
};

/***/ }),

/***/ "./src/js/project/slider.js":
/*!**********************************!*\
  !*** ./src/js/project/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.reports-slider ', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 35,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev'
  },
  breakpoints: {
    600: {
      spaceBetween: 32,
      slidesPerView: "auto"
    }
  }
});

/***/ }),

/***/ "./src/js/project/video.js":
/*!*********************************!*\
  !*** ./src/js/project/video.js ***!
  \*********************************/
/***/ (function() {

var reportSlider = document.querySelector('.reports-slider ');
var reportSlide = document.querySelectorAll('.report-slide');

var fadeOut = function fadeOut(el, timeout) {
  el.style.opacity = 1;
  el.style.transition = "opacity ".concat(timeout, "ms");
  el.style.opacity = 0;
  setTimeout(function () {
    el.style.display = 'none';
  }, timeout);
};

var fadeIn = function fadeIn(el, timeout, display) {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = "opacity ".concat(timeout, "ms");
  setTimeout(function () {
    el.style.opacity = 1;
  }, 10);
};

if (reportSlide) {
  var stopVideos = function stopVideos(ind) {
    reportSlide.forEach(function (elem, index) {
      var buttonPlay = elem.querySelector('.report__play');
      var video = elem.querySelector('video');
      var trigger = elem.querySelector('.report-slide__trigger');
      video.pause();
      video.load();
      video.removeAttribute('controls');
      trigger.classList.remove('--fade');

      if (ind != index) {
        fadeIn(buttonPlay, 300);
      }

      elem.classList.remove('--is-active');
    });
  };

  window.addEventListener('click', function (e) {
    var target = e.target || e.srcElement || e.currentTarget;

    if (!reportSlider.contains(target)) {
      stopVideos(100);
    }
  });
  reportSlide.forEach(function (elem, index) {
    var buttonPlay = elem.querySelector('.report__play');
    var video = elem.querySelector('.report__video video');
    var trigger = elem.querySelector('.report-slide__trigger');
    var close = elem.querySelector('.slider__close ');
    elem.addEventListener('click', function () {
      if (!elem.classList.contains('--is-active')) {
        stopVideos(index);
        trigger.classList.add('--fade');
        fadeOut(buttonPlay, 300);
        video.setAttribute('controls', true);
        video.muted = false;
        elem.classList.add('--is-active');
        setTimeout(function () {
          video.currentTime = 0;
          video.play();
        }, 200);
      }
    });
    close.addEventListener('click', function () {
      video.load();
      setTimeout(function () {
        stopVideos(100);
      }, 100);
    });

    if (!elem.classList.contains('--is-active')) {
      trigger.addEventListener('mouseover', function () {
        video.muted = true;
        video.play();
      });
      trigger.addEventListener('mouseout', function () {
        video.load();
      });
    }
  });
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_pug_starter"] = self["webpackChunkgulp_pug_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map