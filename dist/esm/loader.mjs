import { a as patchEsm, b as bootstrapLazy } from './index-5ba7c38d.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["utrust-donate",[[1,"utrust-donate",{"amounts":[1],"donateId":[1,"donate-id"],"currency":[1],"selectedAmount":[32],"loading":[32]}]]]], options);
});

export { defineCustomElements };
