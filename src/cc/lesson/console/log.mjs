import {cc_tokens_3_get} from "./../../tokens/3/get.mjs";
import {random_list_slice_join} from "./../../../../node_modules/mykro/src/random/list/slice/join.mjs";
import {cc_tokens_get} from "./../../tokens/get.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_console_log() {
  await m_js_arguments_assert()(arguments);
  let tokens = await cc_tokens_get();
  return {
    name: "console.log(...);",
    example_get: async () => {
      let joined = await cc_tokens_3_get();
      return {
        input: `console.log('${joined}');`
      };
    }
  };
}
