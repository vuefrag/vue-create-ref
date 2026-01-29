import { ref, shallowRef } from 'vue';

// @__NO_SIDE_EFFECTS__
function createRef(value, deep) {
  if (deep === true) {
    return ref(value);
  } else {
    return shallowRef(value);
  }
}

export { createRef };
