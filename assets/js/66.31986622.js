"use strict";
exports.id = 66;
exports.ids = [66];
exports.modules = {

/***/ 9066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8815);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8143);



class p extends _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aQ {
  decodeBlock(n) {
    const r = new DataView(n), a = [];
    for (let e = 0; e < n.byteLength; ++e) {
      let t = r.getInt8(e);
      if (t < 0) {
        const o = r.getUint8(e + 1);
        t = -t;
        for (let s = 0; s <= t; ++s)
          a.push(o);
        e += 1;
      } else {
        for (let o = 0; o <= t; ++o)
          a.push(r.getUint8(e + o + 1));
        e += t + 1;
      }
    }
    return new Uint8Array(a).buffer;
  }
}



/***/ })

};
;