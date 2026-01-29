<p align="center">
  <img src="https://raw.githubusercontent.com/vuefrag/vue-create-ref/main/banner.svg" alt="vue-create-ref" width="100%" />
</p>

<h1 align="center">vue-create-ref</h1>

<p align="center">A Vue 3 composition API utility that returns a shallowRef by default, or a deepRef when the deep parameter is true. Useful for conditional reactivity depth control.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-create-ref"><img src="https://img.shields.io/npm/v/vue-create-ref.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/vue-create-ref"><img src="https://img.shields.io/npm/dm/vue-create-ref.svg" alt="npm downloads" /></a>
</p>

## Installation

```bash
npm install vue-create-ref
```

## Usage

```ts
import { createRef } from 'vue-create-ref'
import { isShallow } from 'vue'

const initialData = 1

// Create shallow ref (default)
const shallowData = createRef(initialData)

// Create deep ref
const deepData = createRef(initialData, true)

console.log(isShallow(shallowData)) // true
console.log(isShallow(deepData)) // false
```

## License

MIT

Extracted from [VueUse](https://vueuse.org/) for standalone use.
