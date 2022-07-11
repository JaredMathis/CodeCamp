import {random_list_slice_join} from "./../../../../../node_modules/mykro/src/random/list/slice/join.mjs";
import {m_js_string_join} from "./../../../../../node_modules/mykro/src/m/js/string/join.mjs";
import {random_list_slice} from "./../../../../../node_modules/mykro/src/random/list/slice.mjs";
import {cc_tokens_get} from "./../../../tokens/get.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_value_twice() {
  await m_js_arguments_assert()(arguments);
  let tokens = await cc_tokens_get();
  return {
    name: "let value; value = ...; value = ...;",
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
