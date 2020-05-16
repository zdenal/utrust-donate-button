'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9f8dc43d.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["utrust-donate.cjs",[[1,"utrust-donate",{"amounts":[1],"donateId":[1,"donate-id"],"min":[2],"currency":[1],"selectedAmount":[32],"loading":[32]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
