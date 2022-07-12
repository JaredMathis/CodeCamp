import {cc_tokens_3_get} from "./../../tokens/3/get.mjs";
import {m_js_arguments_assert} from "./../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_value() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let value; value = ...;",
    example_get: async () => {
      let joined = await cc_tokens_3_get();
      return {
        input: `let value;
value = '${joined}';
console.log(value);`
      };
    }
  };
}
