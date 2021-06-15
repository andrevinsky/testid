/**
 * @typedef {*} T
 */
/**
 * @typedef {*} P
 */
/**
 *
 * @param arr {Array<string|empty>}
 * @return Array<string>
 */
export function pickHeadUntilNullish(arr: Array<string | any>): any;
/**
 *
 * @param {...string} args
 * @return {function(string): T}
 */
export function prepareTestId(...args: string[]): (arg0: string) => T;
/**
 *
 * @param {...string} args
 * @return {function(function(string):P): function(...string): P}
 */
export function prepareTestIdOpen(...args: string[]): (arg0: (arg0: string) => P) => (...args: string[]) => P;
/**
 *
 * @param sel {string}
 * @return {{'data-testid'}}
 */
export function e2eAttr(sel: string): {
    'data-testid';
};
/**
 *
 * @param sel {string}
 * @return {string}
 */
export function e2eSelector(sel: string): string;
/**
 *
 * @param obj { Object<string,function(arg: function(*): T):T>}
 * @param fn { function(*): T}
 * @return {Object<string, T>}
 */
export function applyForEachPair(obj: {
    [x: string]: (arg0: any) => (arg0: any) => T;
}, fn: (arg0: any) => T): {
    [x: string]: T;
};
export const FOR_TESTS: "test";
export const FOR_RENDER: "render";
export const FOR_TEST_SVG: "testSvg";
export const FOR_RENDER_SVG: "renderSvg";
export function defineTestIdDictionary(cb: (arg0: (...args: string[]) => (arg0: any, arg1: string) => T, arg1: ((...args: string[]) => (arg0: (arg0: string) => P) => (...args: string[]) => P) | null) => any): (arg0: 'test' | 'render') => {
    [x: string]: T | P;
} | T | P;
export function cssSel(val: any): CssSel;
export class CssSel {
    /**
     *
     * @param val
     * @param {CssSel} [parent]
     * @param {''|' '|'>'|','|' ~ '} [rel='']
     * @param {array} [marks]
     */
    constructor(val: any, parent?: CssSel, rel?: '' | ' ' | '>' | ',' | ' ~ ', marks?: any[]);
    _args: any[];
    _marks: any[];
    store(): CssSel;
    get(idx: any): any;
    /**
     * add a selector part for a descendant
     * @param val
     * @return {CssSel}
     */
    desc(val: any): CssSel;
    /**
     * add a selector part for an immediate child
     * @param val
     * @return {CssSel}
     */
    child(val: any): CssSel;
    /**
     * add a modifier for a current selector
     * @param val
     * @return {CssSel}
     */
    mod(val: any): CssSel;
    /**
     *
     * @param { string } attrName
     * @param { string|number } [attrValue]
     * @param { string } [attrCf]
     * @return {CssSel}
     */
    attr(attrName: string, attrValue?: string | number, attrCf?: string): CssSel;
    or(val: any): CssSel;
    second(): CssSel;
    third(): CssSel;
    toString(): any;
    valueOf(): any;
}
export type T = any;
export type P = any;
