import {list_map} from "./../../../../node_modules/mykro/src/list/map.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "console.log(...);",
    examples: await list_map(["Hello", "ABC", "Jesus is Lord"], item => {
      return {
        "input": `console.log('${item}');`,
        "output": `${item}`
      };
    })
  };
}
