"use strict";
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 6925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

class l extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aP {
  decodeBlock(r) {
    const a = new DataView(r), n = [];
    for (let e = 0; e < r.byteLength; ++e) {
      let t = a.getInt8(e);
      if (t < 0) {
        const o = a.getUint8(e + 1);
        t = -t;
        for (let s = 0; s <= t; ++s)
          n.push(o);
        e += 1;
      } else {
        for (let o = 0; o <= t; ++o)
          n.push(a.getUint8(e + o + 1));
        e += t + 1;
      }
    }
    return new Uint8Array(n).buffer;
  }
}



/***/ })

};
;