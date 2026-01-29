'use strict';

const vue = require('vue');

// @__NO_SIDE_EFFECTS__
function createRef(value, deep) {
  if (deep === true) {
    return vue.ref(value);
  } else {
    return vue.shallowRef(value);
  }
}

exports.createRef = createRef;
