export default defaultExport;
import { FOR_RENDER } from "./helpers";
import { FOR_TESTS } from "./helpers";
import { FOR_TEST_SVG } from "./helpers";
import { FOR_RENDER_SVG } from "./helpers";
import { defineTestIdDictionary } from "./helpers";
import { cssSel } from "./helpers";
declare const defaultExport: ((cb: (arg0: (...arg0: string[]) => (arg0: any, arg1: string) => any, arg1: (...arg0: string[]) => (arg0: (arg0: string) => any) => (...arg0: string[]) => any) => any) => (arg0: "test" | "render") => any) & {
    FOR_RENDER: string;
    FOR_TESTS: string;
    FOR_TEST_SVG: string;
    FOR_RENDER_SVG: string;
    cssSel: (val: any) => import("./helpers").CssSel;
};
export { FOR_RENDER, FOR_TESTS, FOR_TEST_SVG, FOR_RENDER_SVG, defineTestIdDictionary, cssSel };
