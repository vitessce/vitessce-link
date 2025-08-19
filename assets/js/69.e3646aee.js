"use strict";
exports.id = 69;
exports.ids = [69];
exports.modules = {

/***/ 2069:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

class s extends _index_DgZRz_Jg_js__WEBPACK_IMPORTED_MODULE_0__.aP {
  constructor() {
    if (super(), typeof createImageBitmap > "u")
      throw new Error("Cannot decode WebImage as `createImageBitmap` is not available");
    if (typeof document > "u" && typeof OffscreenCanvas > "u")
      throw new Error("Cannot decode WebImage as neither `document` nor `OffscreenCanvas` is not available");
  }
  async decode(i, n) {
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