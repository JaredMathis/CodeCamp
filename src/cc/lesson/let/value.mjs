import {random_list_slice_join} from "./../../../../node_modules/mykro/src/random/list/slice/join.mjs";
import {cc_tokens_get} from "./../../tokens/get.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_value() {
  await m_js_arguments_assert()(arguments);
  let tokens = await cc_tokens_get();
  return {
    name: "let value; value = ...;",
    example_get: async () => {
      let joined = await random_list_slice_join(tokens, 3, " ");
      return {
        input: `let value;
value = '${joined}';
console.log(value);`
      };
    }
  };
}
