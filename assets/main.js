/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/vuejs/main.js":
/*!***************************!*\
  !*** ./src/vuejs/main.js ***!
  \***************************/
/***/ (() => {

Vue.config.devtools = true;
var app = new Vue({
  el: '#category-display',
  data: {
    categoriaAttiva: 'uomo',
    offerteStagionaliUomo: [{
      immagine: './assets/img/black_elegant_leather_jacket-200x260.jpg',
      nome: 'Elegant Leather Jacket',
      descrizione: 'lorem ipsum',
      vecchioPrezzo: '678$',
      nuovoPrezzo: '453$'
    }, {
      immagine: './assets/img/black_leather_suit-200x260.jpg',
      nome: 'Leather suit',
      descrizione: 'dolor sit amet',
      vecchioPrezzo: '789$',
      nuovoPrezzo: '342$'
    }, {
      immagine: './assets/img/blue_jacket_and_white_stripe_tee-200x260.jpg',
      nome: 'Blue jacket',
      descrizione: 'lorem ipsum dolor',
      vecchioPrezzo: '',
      nuovoPrezzo: '345$'
    }, {
      immagine: './assets/img/modern_black_leather_suit-200x260.jpg',
      nome: 'Modern black suit',
      descrizione: 'sit amet lorem',
      vecchioPrezzo: '547$',
      nuovoPrezzo: '132$'
    }],
    offerteStagionaliDonna: [{
      immagine: './assets/img/black_leather_jacket-200x260.jpg',
      nome: 'Leather jacket',
      descrizione: 'giacca pelle nera',
      vecchioPrezzo: '',
      nuovoPrezzo: '659$'
    }, {
      immagine: './assets/img/spring_printed_dress-200x260.jpg',
      nome: 'Spring dress',
      descrizione: 'vestito colore chiaro',
      vecchioPrezzo: '',
      nuovoPrezzo: '451$'
    }, {
      immagine: './assets/img/hipster_black_top-200x260.jpg',
      nome: 'Black top',
      descrizione: 'top hipster nero',
      vecchioPrezzo: '859$',
      nuovoPrezzo: '534$'
    }, {
      immagine: './assets/img/modern_love_tee-200x260.jpg',
      nome: 'Love tee',
      descrizione: 'indumento moderno',
      vecchioPrezzo: '954$',
      nuovoPrezzo: '451$'
    }],
    offerteStagionaliAccessori: [{
      immagine: './assets/img/brown_dress_shoes-200x260.jpg',
      nome: 'Brown shoes',
      descrizione: 'scarpe eleganti marroni',
      vecchioPrezzo: '746$',
      nuovoPrezzo: '453$'
    }, {
      immagine: './assets/img/casual_leather_belts-200x260.jpg',
      nome: 'Leather belt',
      descrizione: 'cintura da abito casual',
      vecchioPrezzo: '457$',
      nuovoPrezzo: '319$'
    }, {
      immagine: './assets/img/modern_leather_boots-200x260.jpg',
      nome: 'Brown boots',
      descrizione: 'stivali marroni moderni',
      vecchioPrezzo: '',
      nuovoPrezzo: '348$'
    }, {
      immagine: './assets/img/leather_gloves-200x260.jpg',
      nome: 'Leather gloves',
      descrizione: 'guanti marroni in pelle',
      vecchioPrezzo: '',
      nuovoPrezzo: '129$'
    }]
  },
  mounted: function mounted() {},
  methods: {
    categoriaUomo: function categoriaUomo() {
      this.categoriaAttiva = 'uomo';
    },
    categoriaDonna: function categoriaDonna() {
      this.categoriaAttiva = 'donna';
    },
    categoriaAccessori: function categoriaAccessori() {
      this.categoriaAttiva = 'accessori';
    }
  }
});
var app = new Vue({
  el: '#arrow-display-small',
  data: {
    galleriaModelliSmall: ['./assets/img/black_elegant_leather_jacket-120x156.jpg', './assets/img/black_leather_jacket-120x156.jpg', './assets/img/blue_leather_jacket-120x156.jpg', './assets/img/hipster_black_top-120x156.jpg', './assets/img/spring_printed_dress-120x156.jpg', './assets/img/leather_gloves-120x156.jpg', './assets/img/modern_leather_boots-120x156.jpg']
  },
  methods: {}
});
var app = new Vue({
  el: '#arrow-display-large',
  data: {
    galleriaModelliLarge: ['./assets/img/black_elegant_leather_jacket-400x520.jpg', './assets/img/black_leather_jacket-400x520.jpg', './assets/img/blue_leather_jacket-400x520.jpg', './assets/img/hipster_black_top-400x520.jpg', './assets/img/spring_printed_dress-400x520.jpg', './assets/img/leather_gloves-400x520.jpg', './assets/img/modern_leather_boots-400x520.jpg']
  },
  methods: {}
});

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/main": 0,
/******/ 			"assets/master": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/master"], () => (__webpack_require__("./src/vuejs/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/master"], () => (__webpack_require__("./src/scss/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;