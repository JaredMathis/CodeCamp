import {m_js_string_join} from "./../../../../node_modules/mykro/src/m/js/string/join.mjs";
import {random_list_slice} from "./../../../../node_modules/mykro/src/random/list/slice.mjs";
import {cc_tokens_get} from "./../../tokens/get.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_value() {
  await m_js_arguments_assert()(arguments);
  let tokens = await cc_tokens_get();
  return {
    name: "console.log(...);",
    example_get: async () => {
      let shortened = await random_list_slice(tokens, 3);
      let joined = await m_js_string_join(shortened, " ");
      return {
        input: `console.log('${joined}');`
      };
    }
  };
}
