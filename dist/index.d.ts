import { Ref, ShallowRef } from 'vue';

type CreateRefReturn<T = any, D extends boolean = false> = ShallowOrDeepRef<T, D>;
type ShallowOrDeepRef<T = any, D extends boolean = false> = D extends true ? Ref<T> : ShallowRef<T>;
/**
 * Returns a `deepRef` or `shallowRef` depending on the `deep` param.
 *
 * @example createRef(1) // ShallowRef<number>
 * @example createRef(1, false) // ShallowRef<number>
 * @example createRef(1, true) // Ref<number>
 * @example createRef("string") // ShallowRef<string>
 * @example createRef<"A"|"B">("A", true) // Ref<"A"|"B">
 *
 * @param value
 * @param deep
 * @returns the `deepRef` or `shallowRef`
 *
 * @__NO_SIDE_EFFECTS__
 */
declare function createRef<T = any, D extends boolean = false>(value: T, deep?: D): CreateRefReturn<T, D>;

export { createRef };
export type { CreateRefReturn, ShallowOrDeepRef };
