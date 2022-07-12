import {cc_random_number_1_10} from "./../../../random/number/1/10.mjs";
import {cc_tokens_3_get} from "./../../../tokens/3/get.mjs";
import {m_js_equals} from "./../../../../../node_modules/mykro/src/m/js/equals.mjs";
import {m_js_while_max} from "./../../../../../node_modules/mykro/src/m/js/while/max.mjs";
import {m_js_arguments_assert} from "./../../../../../node_modules/mykro/src/m/js/arguments/assert.mjs";
export async function cc_lesson_let_value_twice_b() {
  await m_js_arguments_assert()(arguments);
  return {
    name: "let value; value = ...; console...; // x2",
    example_get: async () => {
      let x = await cc_random_number_1_10();
      let other;
      await m_js_while_max(100, async () => {
        other = await cc_random_number_1_10();
        if (!m_js_equals(x, other)) {
          return true;
        }
      });
      return {
        input: `let value;
value = ${other};
console.log(value);
value = ${x};
console.log(value);`,
        answers_wrong: [x + "\n" + other, other + " " + x]
      };
    }
  };
}
