'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-45c99633.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["utrust-donate.cjs",[[1,"utrust-donate",{"amounts":[1],"donateId":[1,"donate-id"],"currency":[1],"selectedAmount":[32],"loading":[32]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
