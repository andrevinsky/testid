import {
  appendAttrValue,
  appendSelector,
  cssSel,
  defineTestIdDictionary,
  FOR_RENDER,
  FOR_RENDER_SVG,
  FOR_TEST_SVG,
  FOR_TESTS,
  selectorTailToArgs
} from './helpers';

export {
  FOR_RENDER,
  FOR_TESTS,
  FOR_TEST_SVG,
  FOR_RENDER_SVG,
  defineTestIdDictionary,
  cssSel,
  selectorTailToArgs,
  appendSelector,
  appendAttrValue
};

const defaultExport = Object.assign(defineTestIdDictionary, {
  FOR_RENDER,
  FOR_TESTS,
  FOR_TEST_SVG,
  FOR_RENDER_SVG,
  cssSel,
  selectorTailToArgs
});

export default defaultExport;
