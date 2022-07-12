import {cc_tokens_3_get} from "./../../../tokens/3/get.mjs";
import {m_js_equals} from "./../../../../../node_modules/mykro/src/m/js/equals.mjs";
import {m_js_while_max} from "./../../../../../node_modules/mykro/src/m/js/while/max.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_value_twice() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let value; value = ...; value = ...;",
    example_get: async () => {
      let joined = await cc_tokens_3_get();
      let other;
      await m_js_while_max(100, async () => {
        other = await cc_tokens_3_get();
        if (!m_js_equals(joined, other)) {
          return true;
        }
      });
      return {
        input: `let value;
value = '${other}';
value = '${joined}';
console.log(value);`
      };
    }
  };
}
