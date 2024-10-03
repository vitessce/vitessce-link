"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 8429:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8815);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8143);



class m extends _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aQ {
  constructor() {
    if (super(), typeof createImageBitmap > "u")
      throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");
    if (typeof document > "u" && typeof OffscreenCanvas > "u")
      throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");
  }
  async decode(d, n) {
    const o = new Blob([n]), e = await createImageBitmap(o);
    let t;
    typeof document < "u" ? (t = document.createElement("canvas"), t.width = e.width, t.height = e.height) : t = new OffscreenCanvas(e.width, e.height);
    const a = t.getContext("2d");
    return a.drawImage(e, 0, 0), a.getImageData(0, 0, e.width, e.height).data.buffer;
  }
}



/***/ })

};
;