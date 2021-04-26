export const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
})

export const isClient = typeof window !== 'undefined'
export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const assert = (condition: boolean, ...infos: any[]) => {
  if (!condition) console.warn(...infos)
}
const toString = Object.prototype.toString;
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'
export const isWindow = (val: any): val is Window => typeof window !== 'undefined' && toString.call(val) === '[object Window]'
export const now = () => Date.now()
export const timestamp = () => +Date.now()
export const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n))
export const noop = () => {}